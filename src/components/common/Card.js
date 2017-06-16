/**
 * Created by gksrikanth on 6/12/2017.
 */
import React from 'react';
import { View } from 'react-native';

const Card = (props) => {

    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 35,
        shadowColor: '#ddd',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15
    }
};

export { Card }; // You do this method because you are using 'index.js' in the folder above