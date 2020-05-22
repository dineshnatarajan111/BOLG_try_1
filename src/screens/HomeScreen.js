import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';


const HomeScreen = ()=> {
    return(
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "green",
        // justifyContent: "center",
        // alignItems:"center",
    },
});

export default HomeScreen;