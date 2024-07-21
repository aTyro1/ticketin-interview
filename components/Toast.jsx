import React, {useState, useImperativeHandle, forwardRef, useRef } from "react";
import {Text,StyleSheet, Animated,Platform, UIManager, View, Dimensions, Image} from "react-native";
   
if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
   
const Toast = (props, ref) => {
    const [showToast, setShowToast] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const toast = () => {
    if (!showToast) {
        setShowToast(true);
        Animated.timing(fadeAnim, {
        toValue: 1,
        duration:500,
        useNativeDriver: true,
        }).start();
        setTimeout(() => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            setShowToast(false);
        });
        }, 3000); 
    }
    };

    useImperativeHandle(ref, () => ({ toast, }));

    if (showToast) {
    return (
        <Animated.View style={[styles.toastContainer, { opacity: fadeAnim }]}>
            <View style={{
                 backgroundColor: "white",
                 padding: 10,
                 position: "absolute",
                 height: 100,
                 width: Dimensions.get('window').width * 0.9,
                 alignSelf: "center",
                 flexDirection: 'column',
                 gap: 10
            }}>
            <View
            style={{
                flexDirection: 'row',
                gap: 10
            }}
            >
                <Image 
                    style={{
                        width: 24,
                        height: 24
                    }}
                source={require('../assets/images/confirmed-ticket.png')}/>
                <Text style={{fontSize: 16, fontWeight: 600}}>Ticket Confirmed</Text>
                <Image 
                    style={{
                        width: 19,
                        height: 24,
                        position: 'absolute',
                        right: 10
                    }}
                source={require('../assets/images/close.png')}/>

            </View>
            <Text style={styles.toastText}>{props.message}</Text>
            </View>      
        </Animated.View>
    );
    } else {
    return null;
    }
};

const styles = StyleSheet.create({
    container: {
    position: "absolute",
    borderRadius: 30,
    overflow: "hidden",
    flexDirection: "row",
    bottom: 10,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
    },
    toastContainer: {
    backgroundColor: "#1EC34E",
    borderRadius: 10,
    padding: 10,
    position: "absolute",
    height: 100,
    width: Dimensions.get('window').width * 0.9,
    bottom: 30,
    alignSelf: "center",
    },
    toastText: {
    color: '#656565',
    fontSize: 14,
    },
});

export default forwardRef(Toast);
