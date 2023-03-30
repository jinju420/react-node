import Layout from '../common/Layout';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const DetailWrap = styled.div`
	width: 100%;
	margin-right: 20px;
	padding: 40px;
	background: #333;
	color: #fff;
	box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.02);
`;

const BtnSet = styled.nav`
	display: flex;
	justify-content: flex-end;
	gap: 20px;
	margin-top: 20px;
`;

const Title = styled.h2`
	font-size: 40px;
	margin-bottom: 15px;
	font-family: 'Montserrat';
`;

const Desc = styled.p`
	font-size: 20px;
	padding-bottom: 50px;
	border-bottom: 1px solid #f8f8f8;
	font-family: 'Montserrat';
`;
const FlexP = styled.p`
	display: flex;
	justify-content: flex-end;
	margin-top: 15px;
	font-family: 'Montserrat';
	color: #adadad;
`;
const Span = styled.span`
	font-size: 14px;
	margin-bottom: 10px;
	margin-right: 15px;
	font-family: 'Montserrat';
`;

const P = styled.p`
	font-size: 14px;
	font-family: 'Montserrat';
`;
function Detail() {
	const user = useSelector((store) => store.user);
	const params = useParams();
	const navigate = useNavigate();
	const [Detail, setDetail] = useState(null);

	const handleDelete = () => {
		if (!window.confirm('정말 삭제하겠습니까?')) return;

		axios
			.delete(`/api/community/delete/${params.num}`)
			.then((res) => {
				if (res.data.success) {
					alert('게시글이 삭제되었습니다.');
					navigate('/list');
				} else {
					alert('게시글 삭제에 실패했습니다.');
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		axios
			.get(`/api/community/detail/${params.num}`)
			.then((res) => {
				if (res.data.success) {
					setDetail(res.data.detail);
				} else {
					alert('상세글 호출에 실패했습니다.');
				}
			})
			.catch((err) => console.log(err));
	}, [params]);

	return (
		<Layout name={'DETAIL'}>
			{
				<>
					<DetailWrap>
						<Title>{Detail?.title}</Title>
						<Desc>{Detail?.content}</Desc>
						<FlexP>
							<Span>작성자: {Detail?.writer.displayName}</Span>
							{Detail?.createdAt === Detail?.updatedAt ? (
								<P>작성일: {Detail?.createdAt.split('T')[0]}</P>
							) : (
								<P>수정일: {Detail?.updatedAt.split('T')[0]}</P>
							)}
						</FlexP>
					</DetailWrap>

					{/* 로그인된 사용자의 아이디와 글작성한 사용자의 아이디가 동일할 때에만 수정, 삭제버튼 출력 */}
					{user.uid === Detail?.writer.uid && (
						<BtnSet>
							<button>
								<Link to={`/edit/${params.num}`}>EDIT</Link>
							</button>
							<button onClick={handleDelete}>DELETE</button>
						</BtnSet>
					)}
				</>
			}
		</Layout>
	);
}

export default Detail;
