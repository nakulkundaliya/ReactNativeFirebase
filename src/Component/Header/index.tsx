import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

interface HeaderProps {
  title: string;
  leftIcon?: object;
  onPressLeft?: () => void;
}

const Header = (props: HeaderProps) => {
  const { title, leftIcon, onPressLeft } = props;
  return (
    <View style={styles.headerView}>
      {leftIcon && (
        <TouchableOpacity style={styles.leftButton} onPress={onPressLeft}>
          <Image source={leftIcon} style={styles.leftIcon} />
        </TouchableOpacity>
      )}
      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export { Header };
