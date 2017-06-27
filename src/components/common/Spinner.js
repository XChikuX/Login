/**
 * Created by gksrikanth on 6/27/2017.
 */
import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = (props) => {
    return(
        <View>
            <ActivityIndicator style = {styles.spinnerStyle} size={props.size || 'large'}/>
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export {Spinner};