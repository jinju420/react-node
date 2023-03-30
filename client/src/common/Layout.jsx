import styled from 'styled-components';

const MainWrap = styled.main`
	width: calc(100% - 500px);
	min-height: 100vh;
	float: right;
	> .inner {
		width: 100%;
		padding: 60px;
		h1 {
			font: bold 40px/1 'Montserrat';
			color: #fff;
			margin-bottom: 30px;
		}
		section {
			label {
				display: block;
				font: 16px/1 'Montserrat';
				color: #fff;
				margin-bottom: 15px;
			}
			input[type='text'],
			input[type='password'],
			input[type='email'],
			textarea {
				width: 70%;
				min-width: 300px;
				padding: 5px 8px;
				border: 1px solid #999;
				margin-bottom: 50px;
				resize: none;
				display: block;
				background: #eee;
			}
			textarea {
				min-height: 200px;
			}
			button {
				display: inline-block;
				width: 15vw;
				font-size: 15px;
				padding: 10px;
				background: #555;
				color: #fff;
				font-family: 'Montserrat';
				border: none;
				cursor: pointer;
				a {
					color: #fff;
				}
			}
		}
	}
`;

function Layout({ children, name }) {
	return (
		<MainWrap className={`content ${name}`}>
			<div className='inner'>
				<h1>{name}</h1>
				<section>{children}</section>
			</div>
		</MainWrap>
	);
}

export default Layout;
