import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, BackHandler, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Company = ({navigation}) => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#e7e6ff'
      }}>
        <View style={{
          marginLeft: Dimensions.get('window').width * 0.10,
          marginTop: Dimensions.get('window').height * 0.2,
          flexDirection: 'column',
          gap: 15
          
        }}>
          <Text style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#6C63FF'
          }}
          >QUESTION 1 OF 4</Text>
            <Text style={{
            fontSize: 26,
            fontWeight: 600,
            color: '#2F2E41'
          }}
          >Company/Organization:</Text>
          <TextInput 
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: '#6C63FF4D',
            marginTop: 30,
            width: Dimensions.get('window').width - Dimensions.get('window').width * 0.2,
            padding:5
  
          }}
          placeholder='Write your answer here'
        
          />
        </View>
        <View style={{
           width: '100%',
           height: 123,
           justifyContent: 'center',
           alignItems: 'center',
           position: 'absolute',
           bottom: 50,
           backgroundColor: '#e7e6ff'
        }}>
          <TouchableOpacity  style={{
             backgroundColor: "#6C63FF",
             borderRadius: 22,
             width: 300,
             alignItems: 'center',
             height: 40,
             padding: 10,
             verticalAlign: 'middle',
             alignContent: 'center'
          }}
          onPress={()=>{navigation.navigate('JobTitle')}}
          >
          <Text style={{fontSize: 16, fontWeight: 600, color: '#FFFFFF', marginTop: 2}}>Next Questions</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  

  export default Company