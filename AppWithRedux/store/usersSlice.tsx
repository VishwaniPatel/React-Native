// usersSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://192.168.2.105:3000/users");
    return response.data;
});

export const addUser = createAsyncThunk(
  "users/addUser",
  async (userData: UserData) => {
    const response = await axios.post("http://192.168.2.105:3000/users", userData);
    console.log(userData);
    
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId: number) => {
    await axios.delete(`http://192.168.2.105:3000/users/${userId}`);
    return userId;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [] as UserData[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter(
        (user) => user.id !== action.payload
      );
    });
  },
});

export default usersSlice.reducer;
