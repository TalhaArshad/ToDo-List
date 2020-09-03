/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import TouchableIcon from '../components/TouchableIcon';
import {colors} from '../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');
const TodoItem = ({title, onPress, onDelete, isCompleted}) => {
  const deletion = () => {
    onDelete();
  };
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.body} onPress={onPress}>
      <Text
        numberOfLines={2}
        style={{color: colors.textColor, width: width - 140}}>
        {title}
      </Text>
      <View style={styles.icons}>
        {isCompleted && (
          <Icon name="done" color={colors.iconsColor} size={22} />
        )}
        <TouchableIcon
          name="delete"
          size={24}
          color={colors.iconsColor}
          style={{marginLeft: 14}}
          onPress={deletion}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    height: 55,
    paddingHorizontal: 16,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  icons: {
    flexDirection: 'row',
    alignContent: 'center',
  },
});

export default TodoItem;
