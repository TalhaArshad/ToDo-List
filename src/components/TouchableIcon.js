import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const TouchableIcon = (props) => {
  const {name, color, size = 20, onPress, style} = props;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={style}>
      <Icon name={name} color={color} size={size} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
