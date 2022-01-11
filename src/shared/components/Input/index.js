import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export function Input(props) {

  const { isSelect, placeholder } = props;

  const [isPicking, setIsPicking] = useState(false);

  return (
    <View style={styles.container}>
      { isSelect ? 
        <Picker
          style={styles.picker}
          onFocus={() => setIsPicking(true)}
          onBlur={() => setIsPicking(false)}
        >
          <Picker.Item
            label={placeholder}
            style={styles.pickerPlaceholder}
            enabled={!isPicking}
          />
          <Picker.Item label="Category #1" value="One" />
          <Picker.Item label="Category #1" value="One" />
          <Picker.Item label="Category #1" value="One" />
          <Picker.Item label="Category #1" value="One" />
          <Picker.Item label="Category #1" value="One" />
        </Picker> :
        <TextInput style={styles.input} placeholder={placeholder}/> }
    </View>
  );

}