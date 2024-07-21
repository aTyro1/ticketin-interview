import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, BackHandler, TextInput, ToastAndroid} from 'react-native';
import Background from './components/Background';
import Bottom from './components/Bottom';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Company from './components/Company';
import JobTitle from './components/JobTitle';
import IsStudent from './components/IsStudent';
import HearAbout from './components/HearAbout';
import Toast from './components/Toast';
import { useEffect, useRef } from 'react';

const Stack = createNativeStackNavigator();

const PlaceholderImage = require('./assets/images/background-image.png')


const Home = ({navigation}) => {
  return (
      <View style={styles.container}>
      <ImageBackground
        source={PlaceholderImage}
        resizeMode='stretch'
        style={styles.image}
      >
        <Bottom />
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>{
            navigation.navigate('Company')
          }}>
              <Text style={{fontSize: 16, fontWeight: 600, color: '#FFFFFF', marginTop: 2}}>Buy tickets</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View> 
  );
}

const ApprovalHome = ({navigation}) => {

  const ToastRef = useRef(null);
  const showToast = () => {
     ToastRef.current.toast();
   };

   useEffect(()=>{
    showToast();
   },[])
  
  return (
      <View style={styles.container}>
      <ImageBackground
        source={PlaceholderImage}
        resizeMode='stretch'
        style={styles.image}
      >
        <Bottom />
        <View style={styles.bottomView}>
          <TouchableOpacity style={{
              backgroundColor: "#F5AC40",
              borderRadius: 22,
              width: 350,
              alignItems: 'center',
              height: 43,
              padding: 10,
              verticalAlign: 'middle',
              alignContent: 'center'
          }} onPress={()=>{
          }}>
              <Text style={{fontSize: 16, fontWeight: 600, color: '#FFFFFF', marginTop: 2}}>Waiting for approval</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
        
    <Toast ref={ToastRef} message="Now we need to wait for the host to approve you. Once you’re approved you’ll have access to your ticket." />
    </View> 
  );
}



export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{headerShown: false}}
    >
      <Stack.Screen
       name="Home"
       component={Home}
       
      />
      <Stack.Screen 
        name='Company'
        component={Company}
      />
        <Stack.Screen 
        name='JobTitle'
        component={JobTitle}
      />
      <Stack.Screen 
        name='IsStudent'
        component={IsStudent}
      />
        <Stack.Screen 
        name='HearAbout'
        component={HearAbout}
      />
       <Stack.Screen 
        name='AprovalPage'
        component={ApprovalHome}
      />
    </Stack.Navigator>
  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: "#6C63FF",
    borderRadius: 22,
    width: 350,
    alignItems: 'center',
    height: 43,
    padding: 10,
    verticalAlign: 'middle',
    alignContent: 'center'
  },
  bottomView: {
    width: '100%',
    height: 123,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 20,
    backgroundColor: 'white'
  },
});
