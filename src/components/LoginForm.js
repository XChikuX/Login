/**
 * Created by gksrikanth on 6/22/2017.
 */
import React, {Component} from 'react';
import { Button, TextInput} from 'react-native';
import {Card, CardSection, UserInput} from './';

class LoginForm extends Component {
    state = {text: ''};
    // NOTE instead of {text: text} in line 16(subject to change). We can just use {text}, thanks to ES6
    render()
    {
        return(
            <Card>
                <CardSection>
                    <UserInput value={this.state.text} label="Email" onChangeText={text => this.setState({ text: text })}/>
                </CardSection>
                <CardSection>
                    <TextInput style={{ height:20, width:75}} />
                </CardSection>
                <Button title='Hi'/>
            </Card>
        );
    }
}


export default LoginForm;