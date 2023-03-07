import { Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Main from './common/Main';
import Create from './community/Create';
import List from './community/List';
import Detail from './community/Detail';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/list' element={<List />} />
				<Route path='/create' element={<Create />} />
				<Route path='/detail:id' element={<Detail />} />
			</Routes>
		</>
	);
}

export default App;
