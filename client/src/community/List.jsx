import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.article`
	width: 31%;
	float: left;
	margin-right: 15px;
	padding: 30px 40px;
	background: #333;
	color: #adadad;
	margin-bottom: 50px;
	box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.02);
`;
const Title = styled.h2`
	margin-bottom: 50px;
	font-family: 'Montserrat';
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
`;
const Name = styled.span`
	display: flex;
	justify-content: flex-end;
	font-family: 'Montserrat';
`;

function List() {
	const [List, setList] = useState([]);

	useEffect(() => {
		axios
			.get('/api/community/read/0')
			.then((res) => {
				if (res.data.success) {
					setList(res.data.communityList);
					//요청은 성공해서 응답은 받았으나 DB로 데이터 가져오는것을 실패했을때
				} else {
					console.log('데이터 요청에 실패했습니다.');
				}
			})
			//요청 자체가 실패했을떄
			.catch((err) => console.log(err));
	}, []);

	return (
		<Layout name={'LIST'}>
			{List.map((post) => {
				return (
					<Item key={post._id}>
						<Title>
							<Link to={`/detail/${post.communityNum}`}>{post.title}</Link>
						</Title>
						<Name>작성자: {post.writer.displayName}</Name>
					</Item>
				);
			})}
		</Layout>
	);
}

export default List;
