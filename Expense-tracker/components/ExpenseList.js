import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Expense List</Text>
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.amount}</Text>
            <Button title="Delete" onPress={() => onDeleteExpense(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 16,
   justifyContent: 'center'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
   textAlign: 'center'
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: "80%"
  },
  text:{
    color: 'white'
  }
});

export default ExpenseList;
