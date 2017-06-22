/**
 * Created by gksrikanth on 6/22/2017.
 */
import React from 'react';
import { TextInput, View, Text } from 'react-native';

const UserInput = (props) => {
  return (
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{props.label}</Text>
        <TextInput onChangeText={props.onChangeText} value={props.value}  style={styles.inputStyle}/>
      </View>
  );
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        height:20,
        width:75
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },

    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        align: 'center'
    }

};


export { UserInput } // AGAIN THiS can also be written as {UserInput: UserInput} I THINK