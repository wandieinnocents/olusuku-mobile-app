import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

const History = ({navigation}) => {
    return(
        <View> 
            <Text>Welcome to History</Text>
         <Button
           title="Go to Jane's profile"
           onPress={() =>
           navigation.navigate('Home', { name: 'Jane' })
            }
         />
         </View>
       
    );
};

export default History;