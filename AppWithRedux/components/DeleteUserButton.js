// DeleteUserButton.js
import React from "react";
import { Button } from "react-native";

const DeleteUserButton = ({ userId, onDelete }) => {
  const handlePress = () => {
    onDelete(userId);
  };

  return <Button title="Delete" onPress={handlePress} />;
};

export default DeleteUserButton;
