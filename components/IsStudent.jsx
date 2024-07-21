import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, BackHandler, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const IsStudent = ({navigation}) => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#e7e6ff',
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
          >QUESTION 3 OF 4</Text>
            <Text style={{
            fontSize: 26,
            fontWeight: 600,
            color: '#2F2E41'
          }}
          >Are you a current student?:</Text>
         <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 300,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5
          }}
          onPress={()=>{navigation.navigate('HearAbout')}}
         >
          <Text style={{fontSize: 20, fontWeight: 600, color:'#8D86FE'}}>Yes</Text>
         </TouchableOpacity>
         <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 300,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5
          }}
          onPress={()=>{navigation.navigate('HearAbout')}}
         >
          <Text style={{fontSize: 20, fontWeight: 600, color:'#8D86FE'}}>No</Text>
         </TouchableOpacity>
        </View>
      
      </View>
    );
  }


  export default IsStudent;