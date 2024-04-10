// AddUserForm.js
import React from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addUser } from "../store/usersSlice"

const validationSchema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required")
});

const AddUserForm = () => {
  const dispatch = useDispatch();

  const handleAddUser = (values) => {
    dispatch(addUser(values));
  };

  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        // avatar: "",
      }}
      onSubmit={(values, { resetForm }) => {
        handleAddUser(values);
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            placeholder="First Name"
            onChangeText={handleChange("first_name")}
            onBlur={handleBlur("first_name")}
            value={values.first_name}
          />
          {touched.first_name && errors.first_name && (
            <Text style={styles.error}>{errors.first_name}</Text>
          )}

          <TextInput
            placeholder="Last Name"
            onChangeText={handleChange("last_name")}
            onBlur={handleBlur("last_name")}
            value={values.last_name}
          />
          {touched.last_name && errors.last_name && (
            <Text style={styles.error}>{errors.last_name}</Text>
          )}

          <TextInput
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          <Button title="Add User" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  error: {
    color: "red",
    marginBottom: 5,
  },
});

export default AddUserForm;
