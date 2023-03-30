import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import firebase from '../firebase';

const HeaderWrap = styled.header`
	width: 500px;
	height: 100vh;
	background: #000;
	position: fixed;
	top: 0;
	left: 0;
	padding: 50px;
`;

const Logo = styled.h1`
	margin-bottom: 40px;
	a {
		font: bold 100px/1 'Montserrat';
		color: #fff;
		letter-spacing: 5px;
	}
`;

const Gnb = styled.ul`
	a {
		display: block;
		padding: 20px 0 30px;
		font: bold 16px/1 'Montserrat';
		color: #bbb;
	}
`;

const Util = styled.ul`
	position: absolute;
	bottom: 50px;
	left: 50px;
	display: flex;
	gap: 20px;
	li {
		color: #777;
		cursor: pointer;
		a {
			font: 14px/1 'Montserrat';
			color: #555;
		}
	}
`;
const DescP = styled.p`
	font-size: 30px;
	margin-bottom: 300px;
	color: #fff;
	font-family: 'Montserrat';
`;
const List = styled.li`
	font-size: 14px;
	border-bottom: 1px solid #333;
`;
const Num = styled.span`
	font-size: 25px;
`;
const Join = styled.li`
	font-size: 16px;
	font-family: 'Montserrat';
`;
function Header() {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const activeStyle = { color: 'hotpink' };
	return (
		<HeaderWrap>
			<Logo>
				<Link to='/'>NOTICE</Link>
			</Logo>

			<DescP>
				Hello. <br />
				This is Recent Newest
			</DescP>
			<Gnb>
				<List>
					<NavLink to='/list' style={({ isActive }) => (isActive ? activeStyle : null)}>
						<Num>01</Num> SHOW LIST
					</NavLink>
				</List>
				{/* 로그인 유무에 따라 글작성 메뉴 보임처리 */}
				{user.uid !== '' && (
					<List>
						<NavLink to='/create' style={({ isActive }) => (isActive ? activeStyle : null)}>
							<Num>02</Num> WRITE POST
						</NavLink>
					</List>
				)}
			</Gnb>

			{/* 로그인 유무에 따라 로그인 메뉴 및 인사메세지 분기처리 */}
			{user.uid === '' ? (
				<Util>
					<Join>
						<NavLink to='/login' style={({ isActive }) => (isActive ? activeStyle : null)}>
							LOGIN
						</NavLink>
					</Join>
					<Join>
						<NavLink to='/join' style={({ isActive }) => (isActive ? activeStyle : null)}>
							JOIN
						</NavLink>
					</Join>
				</Util>
			) : (
				<Util>
					<Join>{`${user.displayName}님 반갑습니다.`}</Join>
					<Join
						onClick={() => {
							firebase.auth().signOut();
							alert('로그아웃 되었습니다. 메인페이지로 이동합니다.');
							navigate('/');
						}}
					>
						로그아웃
					</Join>
				</Util>
			)}
		</HeaderWrap>
	);
}

export default Header;
