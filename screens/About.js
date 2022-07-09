import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

const About = ({navigation}) => {
    return(
        <View> 
            <Text>Welcome to History</Text>
         <Button
           title="Go to Jane's Home"
           onPress={() =>
           navigation.navigate('Home', { name: 'Jane' })
            }
         />
         </View>
       
    );
};

export default About;