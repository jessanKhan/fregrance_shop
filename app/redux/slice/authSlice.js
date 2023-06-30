import { createSlice, configureStore,createAsyncThunk } from '@reduxjs/toolkit'
import {signup,login,getUser,test} from '../../apis/auth/index'


export const registerUser = createAsyncThunk('auth/signupEmail', async (data, thunkApi) => {
  try {
       const response = await signup(data);
       return response.data;
  } catch (error) {
      //  const message = formatResponse(error);
       return thunkApi.rejectWithValue(message);
  }
});
export const loginUser = createAsyncThunk('auth/loginEmail', async (data, thunkApi) => {
  try {
       const response = await login(data);
       console.log("User logged in",response)
       return { user: response.data }
  } catch (error) {
       const message = formatResponse(error);
       return thunkApi.rejectWithValue(message);
  }
})
export const getUserData = createAsyncThunk('auth/getUserData', async (user_id, thunkApi) => {
  try {
       const response = await getUser(user_id);
       console.log("User logged in",response)
       return { user: response.data }
  } catch (error) {
      //  const message = formatResponse(error);
       return thunkApi.rejectWithValue("Failed to get user");
  }
})
// export const getUserData = createAsyncThunk('auth/getUserData', async({user_id}) => { return await getUser(user_id)})

export const testing = createAsyncThunk('test', test)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    data:null,
    access:null,
    error: null,
    isAuthencitated: false,
    user:null,
  },
  reducers: {
    updateAuthentication: (state, {payload}) =>  { state.isAuthencitated = payload }
},
extraReducers: (builder) => {
    builder
         .addCase(registerUser.pending, (state) => { state.loading = true })
         .addCase(registerUser.fulfilled, (state) => { state.loading = false, state.isAuthencitated = false })
         .addCase(registerUser.rejected, (state) => { state.loading = false, state.isAuthencitated = false });

    //login extrac Reducers
    builder
         .addCase(loginUser.pending, (state) => { state.loading = true })
         .addCase(loginUser.fulfilled, (state, { payload }) => { state.loading = false, state.user = payload.user, state.isAuthencitated = true })
         .addCase(loginUser.rejected, (state) => { state.loading = false, state.user = null, state.isAuthencitated = false })
}
})

export const { fakedata } = authSlice.actions
const counterReducer = authSlice.reducer
export default counterReducer