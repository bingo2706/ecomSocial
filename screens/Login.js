import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'



const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AntDesign name='user' size={25} color='#666' />
            <Text style={{ fontStyle: 'italic' }}>Login Screen</Text>
            <Button
                title='Click Here'
                onPress={() => navigation.navigate("Signup")}
            />
        </View>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})