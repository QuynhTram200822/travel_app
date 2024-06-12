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

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister = async() =>{
    if(!name || !email || !password){
      alert('Please fill all input');
    }else{
      alert('Register success');
      // await AsyncStorage.setItem('user', 'ok')
    }
  }
   
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter name"
          onChangeText={text => setName(text)}
        />

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

        <Pressable style={styles.button} onPress={()=> handleRegister()}>
           <Text style={styles.text}>REGISTER</Text>
       </Pressable>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text> Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}> Login</Text>
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