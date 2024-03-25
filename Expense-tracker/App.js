import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView } from 'react-native';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryButton from './components/PrimaryButton';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses([...expenses, newExpense]);
    setIsModalVisible(false);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Calculate total expense
  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <LinearGradient colors={['#020024','#090979','#00d4ff']} style={styles.container}>
      <SafeAreaView style={styles.rootScreen}>
    {/* <View > */}
      <PrimaryButton onPress={() => setIsModalVisible(true)} color='white'> 
      <Text>Add Expense</Text>
      </PrimaryButton>
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
      <AddExpenseForm isVisible={isModalVisible} onAddExpense={handleAddExpense} onClose={() => setIsModalVisible(false)} />
      <Text style={styles.total}>Total Expense: ${totalExpense.toFixed(2)}</Text>
    {/* </View> */}
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
  },
  total: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
