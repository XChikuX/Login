/**
 * Created by C#iku on 6/15/2017.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Firebase from 'firebase'; //  THIS IMPORT SHOULD BE ABOVE ALL PERSONAL IMPORTS :D
import {Header} from './components/';
import {LoginForm} from './components/LoginForm';





class App extends Component {

    componentWillMount(){
        Firebase.initializeApp(
            {
                apiKey: "AIzaSyCSnKNgPEu4A_nOKS2WW7FCLiUWNhxgCjE",
                authDomain: "login-957c6.firebaseapp.com",
                databaseURL: "https://login-957c6.firebaseio.com",
                projectId: "login-957c6",
                storageBucket: "login-957c6.appspot.com",
                messagingSenderId: "345542344101"
            }
        );
    }

    render()
    {
        return (
            <View>
                <Header>Login \m/</Header>
                <LoginForm/>
            </View>
        );
    }

}

export default App;