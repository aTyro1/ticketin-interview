import { StyleSheet, Image, Dimensions } from "react-native";

export default function Background({ placeholderImageSource })
{
    return (
        <Image source={placeholderImageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        flex:1,
        width: null,
        height: null
    }
})