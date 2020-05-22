import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from '../components/Button';

const ButtonScreen = () => {
    return(
        <View style= {styles.container}>
            <Button name="LOGIN" path="Login" />
            <Button name= "SIGN_UP" path="Signup" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 30,
    },
});

export default ButtonScreen;