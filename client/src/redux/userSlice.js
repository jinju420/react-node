import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		displayName: '',
		uid: '',
		accessToken: '',
	},
	reducers: {
		loginUser: (state, action) => {
			state.displayName = action.payload.displayName;
			state.uid = action.payload.uid;
			state.accessToken = action.payload.accessToken;
		},
		logoutUser: (state) => {
			state.displayName = '';
			state.uid = '';
			state.accessToken = '';
		},
	},
});

//위의 2개의 전역 state변경함수를 각 컴포넌트에서 호출하기 위해 export
export const { loginUser, logoutUser } = userSlice.actions;
//위의 함수로부터 변경된 전역 객체값을 store에 전달하기 위해
export default userSlice.reducer;