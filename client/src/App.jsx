import { Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Create from './community/Create';
import Main from './common/Main';
import List from './community/List';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/' element={<List />} />
				<Route path='/' element={<Create />} />
			</Routes>
		</>
	);
}

export default App;
