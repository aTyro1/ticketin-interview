import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, BackHandler, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRef, useState } from 'react';


const HearAbout = ({navigation}) => {
    const [linkedinHeight, setLinkedinHeight] = useState(0)
    const [linkedinWidth, setLinkedinWidth] = useState(0)

    const [InstagramHeight, setInstagramHeight] = useState(0)
    const [InstagramWidth, setInstagramWidth] = useState(0)

    const [TwitterHeight, setTwitterHeight] = useState(0)
    const [TwitterWidth, setTwitterWidth] = useState(0)

    const [FacebookHeight, setFacebookHeight] = useState(0)
    const [FacebookWidth, setFacebookWidth] = useState(0)

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
          >QUESTION 4 OF 4</Text>
            <Text style={{
            fontSize: 26,
            fontWeight: 600,
            color: '#2F2E41'
          }}
          >Where did you hear about this event?:</Text>
         <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 300,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            flexDirection: 'row'
          }
        }
            onPress={()=>{
                if(linkedinHeight==0 && linkedinWidth==0)
                {
                    setLinkedinHeight(24);
                    setLinkedinWidth(24);
                }
                else
                {
                    setLinkedinHeight(0);
                    setLinkedinWidth(0);
                }
            }}
         >
          <Text style={{fontSize: 20, fontWeight: 600, color:'#8D86FE'}}>LinkedIn</Text>
          <Image   source={require('../assets/images/check.png')} style={{
            height: linkedinHeight,
            width: linkedinWidth,
            right: 10,
            position: 'absolute'
    
          }}/>
         </TouchableOpacity>
         <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 300,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            flexDirection: 'row'
          }}
          onPress={()=>{
            if(InstagramHeight==0 && InstagramWidth ==0)
            {
                setInstagramHeight(24);
                setInstagramWidth(24);
            }
            else
            {
                setInstagramHeight(0);
                setInstagramWidth(0);
            }
          }}
         >
          <Text style={{fontSize: 20, fontWeight: 600, color:'#8D86FE'}}>Instagram</Text>
          <Image source={require('../assets/images/check.png')} style={{
            height: InstagramHeight,
            width: InstagramWidth,
            right: 10,
            position: 'absolute'
          }}/>
         </TouchableOpacity>
         <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 300,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            flexDirection: 'row'
          }}
          onPress={()=>{
            if(TwitterHeight==0 && TwitterWidth == 0)
            {
                setTwitterHeight(24);
                setTwitterWidth(24);
            }
            else
            {
                setTwitterHeight(0);
                setTwitterWidth(0);
            }
          }}
         >
          <Text style={{fontSize: 20, fontWeight: 600, color:'#8D86FE'}}>Twitter</Text>
          <Image source={require('../assets/images/check.png')} style={{
            height: TwitterHeight,
            width: TwitterWidth,
            right: 10,
            position: 'absolute'
          }}/>
         </TouchableOpacity>
         <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 300,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            flexDirection: 'row'
          }}
          onPress={()=>{
            if(FacebookHeight==0 && FacebookWidth==0)
            {
                setFacebookHeight(24);
                setFacebookWidth(24);
            }
            else{
                setFacebookHeight(0);
                setFacebookWidth(0);
            }
          }}
         >
          <Text style={{fontSize: 20, fontWeight: 600, color:'#8D86FE'}}>Facebook</Text>
          <Image source={require('../assets/images/check.png')} style={{
            height: FacebookHeight,
            width: FacebookWidth,
            right: 10,
            position: 'absolute'
          }}/>
         </TouchableOpacity>
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
          onPress={()=>{
           
            navigation.navigate('AprovalPage')
          }}
          >
          <Text style={{fontSize: 16, fontWeight: 600, color: '#FFFFFF', marginTop: 2}}>Claim ticket</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  
  export default HearAbout