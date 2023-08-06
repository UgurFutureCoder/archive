import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { inctance } from "@/axios";
import { SerializedError } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
export const register = createAsyncThunk('/register', async (params: object) => {
    try {
        const { data } = await inctance.post('auth/register', params);
        return data
    } catch (error){
        if (error.response && error.response.data && error.response.data.message) {
             console.log(error.response.data.message)
             return;
          } else {
            console.log('Произошла ошибка')
            return;
          }
    }
  });
  


  export const login = createAsyncThunk('/login', async (params: object) => {
    try {
        const { data } = await inctance.post('auth/login', params);
        return data;
    } catch (error){
        if (error.response && error.response.data && error.response.data.message) {
             console.log(error.response.data.message)
             return;
          } else {
            console.log('Произошла ошибка')
            return;
          }
    }
  });

  export const getMe = createAsyncThunk('/Me', async () => {
    const { data } = await inctance.get('auth/profile');
    return data;
  });

export const getRefresh = createAsyncThunk('/refreshToken', async (params: object) => {
    const { data } = await inctance.post('auth/refreshToken', params);
    return data;
  });


const initialState = {
    status: 'loading',
    data: null,
    refreshT: '',
    errorMessage: null
}

interface YourState {
    errorMessage: string | null;
  }
  

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setErrorMessage: (state,action) => {
            state.errorMessage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state,action) => {
            state.status = 'loading'
            state.data = null
        })
        builder.addCase(register.fulfilled, (state,action) => {
            state.status = 'successfully'
            state.data = action.payload
        })
        builder.addCase(register.rejected, (state,action) => {
            state.status = 'error'
            state.data = null
        })
        builder.addCase(login.pending, (state,action) => {
            state.status = 'loading'
            state.data = null
        })
        builder.addCase(login.fulfilled, (state,action) => {
            state.status = 'successfully'
            state.data = action.payload
        })
        builder.addCase(login.rejected, (state,action) => {
            state.status = 'error'
            state.data = null
        })
        builder.addCase(getMe.pending, (state,action) => {
            state.status = 'loading'
            state.data = null
        })
        builder.addCase(getMe.fulfilled, (state,action) => {
            state.status = 'successfully'
            state.data = action.payload
        })
        builder.addCase(getMe.rejected, (state,action) => {
            state.status = 'error'
            state.data = null 
        })
        builder.addCase(getRefresh.pending, (state,action) => {
            state.status = 'loading'
            state.data = null
        })
        builder.addCase(getRefresh.fulfilled, (state,action) => {
            state.status = 'successfully'
            state.data = action.payload
        })
        builder.addCase(getRefresh.rejected, (state,action) => {
            state.status = 'error'
            state.data = null
        })
    }
})




export const authReducer = authSlice.reducer

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}
