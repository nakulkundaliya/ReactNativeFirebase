import React from 'react';
import { TextInput, View } from 'react-native';
import { Colors } from '../../Utils/colors';
import styles from './styles';

interface InputFieldProps {
  placeholder: string;
  value: string | number | undefined | null;
  onChangeText: (val: string | number) => void;
  customStyle?: object;
  style?: object;
}

const InputField = (props: InputFieldProps) => {
  const { customStyle } = props;
  return (
    <View style={styles.sectionstyle}>
      {/* @ts-ignore */}
      <TextInput
        editable
        placeholderTextColor={Colors.black}
        style={[customStyle, styles.inputField]}
        {...props}
      />
    </View>
  );
};

export { InputField };
