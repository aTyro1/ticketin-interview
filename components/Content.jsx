import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image,
  ImageBackground
} from 'react-native'; 

import BlankSpacer from "react-native-blank-spacer";



const Content = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.view}>
          <View style={{gap: 7}}>
            <Text style={{fontSize: 26, fontWeight: 600}}>Art show  🎨 </Text>
            <Text style={{fontSize: 16, fontWeight: 400}}>by Olivia Adams</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <View>
                <Image style={{height:25, width: 25}} source={require('../assets/images/calender.png')}/>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize:16, fontWeight: 500}}> Monday,Nov 13 2023</Text>
              <Text style={{fontSize:12, fontWeight:500, color: '#A5A5A5'}}> 6:00 PM - 10:00 PM</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <View>
                <Image style={{height:25, width: 25}} source={require('../assets/images/location.png')}/>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize:16, fontWeight: 500}}> Lower Manhattan</Text>
              <Text style={{fontSize:12, fontWeight:500, color: '#6C63FF'}}> Join to see full address</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <View>
                <Image style={{height:25, width: 25}} source={require('../assets/images/ticket.png')}/>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize:16, fontWeight: 500}}> 79/100 tickets left</Text>
              <Text style={{fontSize:12, fontWeight:500, color: '#A5A5A5'}}> 100+ invited</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <View>
                <Image style={{height:25, width: 25}} source={require('../assets/images/price.png')}/>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize:16, fontWeight: 500}}> $10.00 - $50.00</Text>
            </View>
          </View>
          <View style={{gap:10}}>
           <Text style={{fontSize:18, fontWeight:600}}>About this event</Text>
           <Text style={{fontSize:16, fontWeight:400}}>Come join me in celebrating my 25th birthday! I can't wait to celebrate with all of you, so let's make it a night to remember. See you at the party!</Text>
          </View>
          <View style={{gap: 10}}>
          <Text style={{fontSize:18, fontWeight:600}}>Find this event</Text>
          <View style={{height:150, borderRadius:10, backgroundColor: '#e6e6ff', alignItems: 'center', justifyContent:'center', gap: 5}}>
            <Image 
            style={{height: 50, width: 50}}
            source={require('../assets/images/lock.png')}
            />
            <Text style={{color: '#6C63FF',fontSize: 16, fontWeight: 600,}}>Join to unlock</Text>
          </View>
          </View>
          <BlankSpacer height={300} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#F8F8F8'
  },
  scrollView: {
    backgroundColor: '#F8F8F8',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  view: {
    flexDirection: 'column',
    gap: 20
  }
});

export default Content;