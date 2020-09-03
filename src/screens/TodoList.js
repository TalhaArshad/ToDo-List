import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';
import TodoItem from '../components/TodoItem';
import InputTasks from '../components/InputTasks';
import {useStore, useStoreActions, useStoreState} from 'easy-peasy';
import {colors} from '../theme';

const TodoList = ({navigation}) => {
  const allTasks = useStoreState((state) => state.Todos.tasks);

  const addTask = useStoreActions((action) => action.Todos.addTask);
  const toggleState = useStoreActions((action) => action.Todos.changeStatus);
  const deleteTask = useStoreActions((action) => action.Todos.removeTask);

  const handleAddClick = (item) => {
    if (item.length > 0) {
      addTask(item);
    }
  };

  const handleToggleClick = (index) => {
    toggleState(index);
  };
  const handleDelete = (item) => {
    console.log(item);
    deleteTask(item);
  };

  console.log(allTasks);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> ToDo List</Text>
      </View>
      <View style={styles.body}>
        <InputTasks onPress={(item) => handleAddClick(item)} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {allTasks.length > 0 &&
            allTasks.map((item, index) => (
              <TodoItem
                title={item.value}
                isCompleted={item.isCompleted}
                onDelete={() => {
                  console.log('delete clicked');
                  handleDelete(item);
                }}
                onPress={() => {
                  handleToggleClick(index);
                }}
              />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 15,
    alignItems: 'center',
  },
  body: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  headerText: {
    color: colors.headerText,
  },
});

export default TodoList;
