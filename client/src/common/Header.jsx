import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import firebase from '../firebase';

const HeaderWrap = styled.header`
	width: 350px;
	height: 100vh;
	background: #222;
	position: fixed;
	top: 0;
	left: 0;
	padding: 50px;
`;

const Logo = styled.h1`
	margin-bottom: 40px;
	a {
		font: 35px/1 'arial';
		color: #fff;
	}
`;

const Gnb = styled.ul`
	a {
		display: block;
		padding: 10px;
		font: bold 16px/1 'arial';
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
			font: 14px/1 'arial';
			color: #555;
		}
	}
`;
function Header() {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const activeStyle = { color: 'hotpink' };
	return (
		<HeaderWrap>
			<Logo>
				<Link to='/'>GRANHAND.</Link>
			</Logo>

			<Gnb>
				<li>
					<NavLink to='/list' style={({ isActive }) => (isActive ? activeStyle : null)}>
						Show List
					</NavLink>
				</li>
				{/* 로그인 유무에 따라 글작성 메뉴 보임처리 */}
				{user.uid !== '' && (
					<li>
						<NavLink to='/create' style={({ isActive }) => (isActive ? activeStyle : null)}>
							Write Post
						</NavLink>
					</li>
				)}
			</Gnb>

			{/* 로그인 유무에 따라 로그인 메뉴 및 인사메세지 분기처리 */}
			{user.uid === '' ? (
				<Util>
					<li>
						<NavLink to='/login' style={({ isActive }) => (isActive ? activeStyle : null)}>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink to='/join' style={({ isActive }) => (isActive ? activeStyle : null)}>
							Join
						</NavLink>
					</li>
				</Util>
			) : (
				<Util>
					<li>{`${user.displayName}님 반갑습니다.`}</li>
					<li
						onClick={() => {
							firebase.auth().signOut();
							alert('로그아웃 되었습니다. 메인페이지로 이동합니다.');
							navigate('/');
						}}
					>
						로그아웃
					</li>
				</Util>
			)}
		</HeaderWrap>
	);
}

export default Header;
