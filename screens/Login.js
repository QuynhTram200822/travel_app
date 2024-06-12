import React, {useContext, useState} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import  {AsyncStorage} from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";


const Login = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const val = useContext(AuthContext);

  const handleLogin = async() =>{
    if(!email|| !password){
      alert('Please enter a input');
    }else{
      if(email == 'admin@gmail.com' && password == '123456'){
        alert('Login successful');
        navigation.navigate('Home')
      }else{
        alert('User or password incorrect');
      }
    }
  }
   
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput 
        value={email} 
        style={styles.input} 
        placeholder="Enter email"
        onChangeText={text => setEmail(text)} 
        />

        <TextInput 
        value={password} 
        style={styles.input}  
        placeholder="Enter password" 
        onChangeText={text => setPassword(text)} 
        secureTextEntry  
        />

        <Pressable style={styles.button} onPress={handleLogin}>
           <Text style={styles.text}>LOGIN</Text>
       </Pressable>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text> Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Regis')}>
            <Text style={styles.link}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
    
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    padding: 12
  },
  link: {
  color: 'blue',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#00BCC9',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

});

export default Login