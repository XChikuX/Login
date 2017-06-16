import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        paddingBottom: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }

};

export { CardSection }  // You do this method because you are using 'index.js' in the folder above