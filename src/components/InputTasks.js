import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import {colors} from '../theme';
import TouchableIcon from '../components/TouchableIcon';

const {width} = Dimensions.get('window');
const InputTasks = ({onPress}) => {
  const [item, setItem] = useState('');

  const add = () => {
    onPress(item);
    setItem('');
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter item name"
        onChangeText={(text) => setItem(text)}
        value={item}
      />
      <TouchableIcon
        size={26}
        style={{
          padding: 5,
          marginRight: 10,
        }}
        name="add"
        onPress={add}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
  },
  input: {
    width: width - 90,
    height: 50,
    paddingHorizontal: 15,
  },
});

export default InputTasks;
