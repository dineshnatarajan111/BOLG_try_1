import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginScreen from '../screens/HomeScreen';

const Button = ({name, path}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style= {styles.btn} onPress={()=>{
                console.log("lll");
                return <Text>Hello</Text>;
            }}>
                <Text style={styles.txt}>{name}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin:25
    },
    btn: {
        width: 150,
        height: 50,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    txt: {
        fontSize:16,
        fontWeight: "bold",
    },
});


export default Button;