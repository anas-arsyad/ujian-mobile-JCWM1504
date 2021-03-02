import React from 'react';
import {
  View, Text
} from 'react-native'
import { Button,TextInput } from "react-native-paper";

import { useDispatch, useSelector } from 'react-redux'

import { loginAction,logoutAction } from '../actions'

const loginScreen = ({navigation}) => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const dispatch = useDispatch()
    const handleLogin=()=>{
        dispatch(loginAction(username))
    }

  return (
    <View>
      <TextInput label="Username" onChangeText={setUsername}/>
      <TextInput label="Password" onChangeText={setPassword}/>
        <Button onPress={handleLogin}>LOGIN</Button>
    </View>
  );
};

export default loginScreen;
