import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, backgroundColor,  } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button style={styles.button} title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '60%',
    borderColor: 'red',
    borderWidth: 3,
    borderStyle: 'dotted',
    padding: 20
  },
});

export default GoalInput;