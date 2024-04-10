import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import UserList from './components/UserList'
import AddUserForm from './components/AddUser'

const App = () => {

  return (
    <Provider store={store}>
    <View>
      <Text >App</Text>
      <UserList/>
      <AddUserForm/>
    </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})