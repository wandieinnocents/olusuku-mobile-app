import React, { useState } from 'react'
import { 
  StyleSheet,
  ScrollView,
  View, 
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { GeneralStyles } from '../../css/GeneralTheme';
import {Avatar, Title, Caption} from 'react-native-paper'
import Icon from "react-native-vector-icons/Ionicons";
//Vector Icons found at //https://icons.expo.fyi/
import { 
  MaterialCommunityIcons, 
  Ionicons, 
  FontAwesome5,
  MaterialIcons,
  Entypo,
  AntDesign } from '@expo/vector-icons'; 
import {Picker} from '@react-native-picker/picker';
//date picker
import DatePicker from 'react-native-datepicker';
//image uploader
import * as ImagePicker from 'expo-image-picker';

export default function EditProfile() {
   // onselect dropdown picker
   const [selectedCategory, setSelectedCategory] = useState();

   // set date picker 
  const [date, setDate] = useState('09-10-1990');
 //image uploader
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  return (
    <View style={{...GeneralStyles.container}}>
        <ScrollView style={styles.Scroll}>
            {/* profile_section */}
            <View style={styles.profile_section}>
          <LinearGradient
            colors={["#4F8EF7", "#4F5EF1"]}
            style={styles.headerLinearGradient}
            start={{ x: 0.5, y: 0.9 }}
            end={{ x: 1, y: 0.5 }}
          >
            
              
                {/* profile picture */}
            <View style={styles.profile_container}>
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
                <Title style={styles.title}>Tendo Martyn</Title>
                <Caption style={styles.caption}>tmkmart@gmail.com</Caption>
              </View>
              </View>
          </LinearGradient>
          </View>

          {/*Form Section*/}
          <View style={styles.editProfileFormBorder}>
              {/* FIRST NAME*/}
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="First Name" />
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
                <Icon name="ios-person" color="#4F8EF7" />
              </Text>

              <Text style={styles.icon_right}>
                {/* <Icon name="ios-book" color="#4F8EF7" />   */}
              </Text>
            </View>

            {/* PHONE NUMBER */}
            <View style={styles.inputContainer}>
              {/* icon left*/}
              <Text style={styles.icon_left}>
                <Icon name="call" color="#4F8EF7" />
              </Text>

              {/* input field */}
              <TextInput style={styles.input} placeholder="Phone Number" />
              {/* icon right */}
              {/* <Text style={styles.icon_right}>
                <Icon name="eye" color="#4F8EF7" />
              </Text> */}
            </View>
            
            {/* EMAIL*/}
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Email" />
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
              
                <MaterialCommunityIcons name="email-multiple-outline"  color="#4F8EF7" />
              </Text>

              <Text style={styles.icon_right}>
                {/* <Icon name="ios-book" color="#4F8EF7" />   */}
              </Text>
            </View>

             {/* SELECT BIKE OR VEHICLE */}
             <View style={styles.inputContainer}>
            
                <Picker
                  style={styles.input_dropdown}
                  selectedValue={selectedCategory}
                  onValueChange={(itemValue, itemIndex) =>
                 setSelectedCategory(itemValue)
                 }>
                  <Picker.Item  label="Select Car or Motorcycle" value="Unknown" />
                  <Picker.Item label="Car" value="Car" />
                  <Picker.Item label="MotorCycle" value="MotorCycle" />
                </Picker>

              {/* Field icon - replace with icon  */}
               <Text style={styles.icon_left}>
                <Ionicons name="options" color="#4F8EF7" />
               </Text>
            </View>

              {/* SELECT CAR MODEL */}
             <View style={styles.inputContainer}>
            
               <Picker
                style={styles.input_dropdown}
                selectedValue={selectedCategory}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedCategory(itemValue)
                }>
                 <Picker.Item  label="Select Model" value="Unknown" />
                 <Picker.Item label="Lexus" value="Car" />
                 <Picker.Item label="Range Rover Sport" value="Car" />
                 <Picker.Item label="Range Rover Vogue" value="Car" />
                 <Picker.Item label="Yamaha" value="Motor Cycle" />
                 <Picker.Item label="Tesla" value="Car" />
                 <Picker.Item label="Mercedes Benz" value="Car" />
                 <Picker.Item label="Forester" value="Car" />
                 <Picker.Item label="Nissan" value="Car" />
               </Picker>

            {/* Field icon - replace with icon  */}
             <Text style={styles.icon_left}>
             <MaterialCommunityIcons name="car-side"  color="#4F8EF7" />
             </Text>
             </View>

             {/* LICENCE PLATE NUMBER */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Licence Plate Number"
              />
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
                <FontAwesome5 name="car" color="#4F8EF7" />
              </Text>
            </View>

             {/* DATE OF BIRTH  */}
             <View style={styles.inputContainer}>
            {/* date picker  */}
            <DatePicker
                style={styles.input}
                date={date}
                mode="date" //date //time //date time
                placeholder="select date"
                format="DD/MM/YYYY"
                minDate="01-01-1550"
                maxDate="01-01-3099"
                confirmBtnText="Confirm"

                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'relative',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                    display:'none'
                  },
                  dateInput: {
                    // borderColor : "gray",
                    alignItems: "flex-start",
                    marginTop:10,
                    borderWidth: 0,
                    // borderBottomWidth: 1,

                  },
                  placeholderText: {
                    fontSize: 15,
                    color: "gray"

                  },
                  dateText: {
                    fontSize: 15,
                    color: "gray"
                  }
                }}

                onDateChange={(date) => {
                  setDate(date);
                }}

                />
                {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
                 <MaterialIcons name="date-range"color="#4F8EF7" />
              </Text>

             <Text style={styles.icon_right}>
               {/* <Icon name="ios-book" color="#4F8EF7" />   */}
             </Text>
           </View>

            {/* PHOTO UPLOADER  */}
            <View 
            style={styles.inputContainer}>
           
              {/* <TextInput
                style={styles.input}
                placeholder="Upload Photo or Image"
              /> */}
              <Text style={{
                fontSize:14,
                color:"grey",
                marginLeft:40,
                marginTop:18,
                marginBottom:18}}
                >
                Upload Photo or Image</Text>
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left} onPress={pickImage}>
               <Entypo name="attachment" size={14} color="#4F8EF7" /> 
              </Text>
              <Text style={styles.icon_right}>
              <AntDesign name="pluscircleo" size={14} color="#4F8EF7" />
             </Text>
              {/* <Entypo name="attachment" size={24} color="black" /> */}
            <TouchableOpacity
             onPress={pickImage}
            >
            </TouchableOpacity>
            
            
            </View>

            {/* BUTTONS  */}

            <View  style={{ flexDirection:"row" }}>
            <TouchableOpacity
              // onPress={onPress}
              style={styles.btnContainer}
              onPress = {() => {navigation.navigate("Home")}}
            >
              <Text style={styles.btnText}>Update</Text>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={onPress}
              style={styles.btnContainer}
              onPress = {() => {navigation.navigate("Home")}}
            >
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
            </View>



          </View>
          
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    flex: 1,
    alignItems: "center",
    // paddingVertical: "16%",
    marginTop:1,
  },
  //scroll effect
  Scroll: {
    height: 700,
    backgroundColor:"#fff"
  },

  //body styling
  body_content:{
    backgroundColor:"#fff",
    height:500,
    width:"95%",
    borderRadius:40,
    borderColor:"grey"
    
  },

  // line gradient
  headerLinearGradient:{
    height:120,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50
  },

  //profile section
  profile_section:{
    backgroundColor:"#fff",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    // width:"50%",
  },

  //profile container
  profile_container:{
    marginTop:15,
    marginLeft:65,
    paddingLeft:42,
    width:"65%",
    backgroundColor:"#fff",
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },

  //avatar 
  avatar:{
    marginLeft:72,
    marginTop:10,
  },

  title:{
    marginTop:-3,
    marginLeft:32,
    // fontSize:18
  },
  caption:{
    marginTop:-6,
    marginLeft:35
  },

  //form input with icon
  //main input container
  inputContainer: {
    justifyContent: "center",
    borderColor: "rgba(158, 150, 150, .5)",
    borderBottomWidth: 0.7,
  },

  //input field
  input: {
    height: 50,
    left: 40,
    borderBottomColor: "grey",
    borderRadius: 20,
  },

   //text_input icon-left
   icon_left: {
    position: "absolute",
    left: 10,
  },
  
  //text_input icon-right
  icon_right: {
    position: "absolute",
    right: -10,
  },

  // Input dropdown
  input_dropdown: {
    height: 50,
    left: 30,
    borderBottomColor: "grey",
    color:"grey",
    borderRadius: 20,
  },

   //  button container
   btnContainer: {
     flex:1, 
    elevation: 5,
    backgroundColor: "#4F8EF7",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
    width:160,
    marginLeft:10,
    marginRight:5,

    alignItems:"center"
  },

  // edit profile border area
  editProfileFormBorder: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#fefffe",
    borderWidth: 1,
    borderColor: "#fefffe",
    // height: 300,
    marginTop: 20,
    // paddingHorizontal:20,
    elevation: 3,
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
    padding:20,
  },

  //buttons
  updateBtn:{
    width:120
  },
  cancelBtn:{

  },

  //button texts
  btnText:{
    fontSize:18,
    color:"#fff"
  }
  
});