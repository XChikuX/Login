/**
 * Created by gksrikanth on 6/22/2017.
 */
import React, {Component} from 'react';
import { Button, TextInput, Text} from 'react-native';
import firebase from 'firebase';
import {Card, CardSection, UserInput} from './';



class LoginForm extends Component {


    initiateLogin()
    {
    const {email, password, error, counter} = this.state;
    this.setState({error: 'Testing '+ {counter}});

    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                            error.setState({error: 'Invalid attempt. Please try again, use a different USN'});
                            counter.setState({counter: counter + 1});
                        }
                    );
            }
        )
    }


    state = {email: '', password: '', error: '', counter: 1};
    // NOTE instead of {text: text} in line 16(subject to change). We can just use {text}, thanks to ES6

    // ALSO onChangeText={}  << The variable before the arrow can be anything. It indicates the text that is entered.
    // Be careful of the one inside this.setState though

    render()
    {
        return(
            <Card>
                <CardSection>
                    <UserInput value={this.state.email} label="Email" onChangeText={email => this.setState({ email: email })} placeholder="user@email.com"/>
                </CardSection>

                <CardSection>
                    <UserInput value={this.state.password} label="Password" onChangeText={password => this.setState({password})} placeholder="P@$$w0rD" secureTextEntry={true}/>
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <Button title='Hi' onPress={this.initiateLogin.bind(this)}/>

            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;