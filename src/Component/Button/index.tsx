import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Images } from '../../Utils/images';
import styles from './styles';

interface ButtonProps {
  label: string;
  onPress?: () => void;
  customStyle?: object;
  disabled?: boolean;
  icon?: boolean;
  variant: 'outlined' | 'contained';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  customStyle,
  disabled,
  icon,
  variant,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.buttonContainer,
        variant === 'outlined' ? styles.outlined : styles.contained,
        customStyle,
      ]}
    >
      {icon && <Image source={Images.google} style={styles.icon} />}

      <Text
        style={[
          styles.buttonText,
          variant === 'outlined' ? styles.outlinedText : styles.containedText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
