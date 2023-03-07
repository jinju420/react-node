import axios from 'axios';
import { useState } from 'react';
import Layout from '../common/Layout';
import { useNavigate } from 'react-router-dom';

function Create() {
	const navigate = useNavigate();
	const [Tit, setTit] = useState('');
	const [Con, setCon] = useState('');

	const handleCreate = () => {
		const item = { title: Tit, content: Con };

		axios
			.post('/api/create', item)
			.then((res) => {
				if (res.data.success) {
					alert('글 저장이 완료되었습니다.');
					navigate('/list');
				} else {
					alert('글 저장에 실패했습니다.');
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<Layout name={'Post'}>
			<label htmlFor='tit'>Title</label>
			<input type='text' id='tit' value={Tit} onChange={(e) => setTit(e.target.value)} />
			<br />

			<label htmlFor='con'>Content</label>
			<textarea
				name='cons'
				id='id'
				cols='30'
				rows='3'
				value={Con}
				onChange={(e) => setCon(e.target.value)}
			></textarea>
			<br />

			<button onClick={handleCreate}>Send</button>
		</Layout>
	);
}

export default Create;
