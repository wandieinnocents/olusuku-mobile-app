import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

const Support = ({navigation}) => {
    return(
        <View> 
            <Text>Welcome to History</Text>
         <Button
           title="Go to Jane's Support"
           onPress={() =>
           navigation.navigate('Home', { name: 'Jane' })
            }
         />
         </View>
       
    );
};

export default Support;