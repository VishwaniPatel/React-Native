import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

const AddExpenseForm = ({ isVisible, onAddExpense, onClose }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    const expense = {
      name,
      amount: parseFloat(amount),
    };
    onAddExpense(expense);
    setName('');
    setAmount('');
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Expense Name"
        />
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          placeholder="Amount"
          keyboardType="numeric"
        />
        <Button title="Add Expense" onPress={handleSubmit} />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
});

export default AddExpenseForm;
