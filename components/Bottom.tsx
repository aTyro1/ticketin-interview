import React, { useCallback, useEffect, useMemo, useRef, } from 'react';
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Content from './Content';

const Bottom = () => {
  const snapPoints = useMemo(()=> ['60%','75%'],[])
  // const ShowToast = () => {
  //   ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
  // }

  // useEffect(()=>{
  //   ShowToast();
  // },[])

  return (
    <View style={styles.container}>
     <BottomSheet snapPoints={snapPoints} handleIndicatorStyle = {styles.handle} style={{backgroundColor:'#F8F8F8', borderRadius: 150}} handleStyle={{backgroundColor: '#F8F8F8', borderRadius: 50}}>
      <Content />
      
     </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  handle: {
    width: 48,
    backgroundColor: '#E0E0E0'
  },
  container: {
    flex: 1,
    padding: 24,
    borderRadius: 50
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Bottom;