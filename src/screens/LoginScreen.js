import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonScreen from './ButtonScreen';


const LoginScreen = () => {
    return(
        <View style= {styles.container}>
            <Image style={styles.img} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYNBEzVSsPIhFbusBWpaVGk16pv4H2yf-QCUlVuga-gqMiXki0&usqp=CAU"}} />
            <ButtonScreen />
            <Text>#HomeScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },
    img: {
        width:300,
        height:300,
        margin: 50,
    },
});

export default LoginScreen;