// UserList.js
import React, { useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "../store/usersSlice";
import DeleteUserButton from "./DeleteUserButton";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
// console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <Text>User List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.first_name} {item.last_name}</Text>
            <Text>{item.email}</Text>
            <DeleteUserButton userId={item.id} onDelete={handleDeleteUser} />
          </View>
        )}
      />
    </View>
  );
};

export default UserList;
