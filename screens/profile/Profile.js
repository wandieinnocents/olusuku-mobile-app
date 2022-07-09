import React from "react";
import { StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {Avatar, Title, Caption} from 'react-native-paper'
import { AntDesign, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons";
// expo linear gradient
import { LinearGradient } from "expo-linear-gradient";
import {GeneralStyles} from '../../css/GeneralTheme';
const Profile = ({navigation}) => {
    return(
        <View style={{ ...GeneralStyles.container}}> 

            <ScrollView style={{...GeneralStyles.Scroll}}>

          {/* Header Linear Gradient */}
        <LinearGradient
            colors={["#4F8EF7", "#4F5EF1"]}
            style={styles.headerLinearGradient}
            start={{ x: 0.5, y: 0.9 }}
            end={{ x: 1, y: 0.5 }}
          >
            <View style={styles.top_header_section}>
              <Text style={styles.header_text}>Profile</Text>
                <View style={styles.header_section_content}>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>

             {/* profile_section */}
          <View style={styles.profile_section}>
             {/* profile picture */}
            <View style={styles.avatar}>
              <Avatar.Image
                source={{
                  uri:"https://picsum.photos/200/300?grayscale'"
                }}
                size={50}
                />
            </View>
            
            {/*Profile information*/}
            <View style={styles.profile_info}>
              <Title style={styles.title}>Dr. Tendo</Title>
              <Caption style={styles.caption}>tmkmart@gmail.com</Caption>
            </View>

          </View>
         
          <View style={{...GeneralStyles.form_section}}>
            {/*Edit Profile button*/}
          <TouchableOpacity
              onPress={() => {navigation.navigate("Edit Profile")}}
              style={styles.btnContainer}
            >
                <View style={styles.containerFlexBox}>
                <View >
                  <MaterialCommunityIcons name="pencil-outline" size={18} color="grey" />
                </View>

                <View >
                   <Text style={styles.btnText}>Edit Profile</Text>
                </View>
                <View style={styles.arrowRight}>
                   <AntDesign name="right" size={24} color="#4F5EF1" />
                </View>
              </View>
            </TouchableOpacity>

            {/*Change Password button*/}

            <TouchableOpacity
              onPress={() => {navigation.navigate("ForgotPassword")}}
              style={styles.btnContainer}
            >
                <View style={styles.containerFlexBox}>
                <View >
                <Ionicons name="key-outline" size={18} color="grey" />
                </View>

                <View style={styles.passwordArrowRight}>
                   <Text style={styles.btnText}>Change password</Text>
                </View>
                <View style={styles.editRight}>
                   <AntDesign name="right" size={24} color="#4F5EF1" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
         </View>
       
    );
};

const styles = StyleSheet.create({
    //main container
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    //avatar
    avatar:{
      marginTop:15,
      marginLeft:80
      
    },
    //profile info
    profile_info:{
      marginLeft:60,
      marginTop:20
    },
    //Header section content
  header_section_content: {
    flex: 1,
    alignItems: "center",
    paddingVertical: "16%",
    // marginTop:2,
  },
  // Linear Gradient Header
  headerLinearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    height: "100%",
    width: "100%",
  },
  //   Header text
  header_text: {
    fontSize: 20,
    textAlign:"left",
    marginLeft:-180,
    marginTop:10,
    color: "#fff",
  },
  profile_section:{
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // borderBottomStartRadius:50,
    // borderBottomEndRadius:50,
    paddingHorizontal: 30,
    width: "70%",
    height: "23%",
    // top - balance form section above.
    top: "8%",
    left:"14%",
    position: "absolute",
  },
  //container for buton with icon
  containerFlexBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 30,
  },
  // update/change password and button
  btnContainer: {
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
  },

  //pencil icon
  editPencil:{
    marginLeft:-40
  },
  //Right arrow icon
  arrowRight:{
    marginLeft:100,
  },
  passwordArrowRight:{
    marginRight:42
  },
  //Edit profile Button
  btnText: {
    fontSize: 18,
    color: "grey",
    marginLeft: 10,
    alignSelf: "center",
  },
});

export default Profile;

