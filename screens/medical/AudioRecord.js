// import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, Component } from "react";
import PhoneInput from "react-native-phone-number-input";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Platform
  
} from "react-native";
// vector icons
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

// add svg icons
import SvgUri from "react-native-svg-uri";
// pages

// expo linear gradient
import { LinearGradient } from "expo-linear-gradient";
// audio
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from "react-native-audio-recorder-player";

// audio record class component
class AudioRecord extends React.Component {
   
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.Scroll}>
          <View style={styles.flex_container}>
            <ImageBackground
              source={require("../../assets/medical/audio.png")}
              style={styles.image_properties}
            ></ImageBackground>

            <View style={styles.recordContentSection}>
              {/* Record content section*/}

              <View style={styles.recordFlexContainer}>
                {/* Record icon */}
                <View>
                  <FontAwesome5 name="microphone" size={70} color="#4F8EF7" />
                </View>
                <View>
                  <Text style={styles.recordText}>Tap to Record audio</Text>
                </View>
                {/* record time */}
                <View>
                  <Text style={styles.recordTime}>00.00.00</Text>
                </View>
                {/* Playing time duration */}
                {/* <View>
                  <Text style={styles.recordTime}>
                    {this.state.playTime} / {this.state.duration}
                  </Text>
                </View> */}
                {/*  WAVES SECTION  */}

                <View>
                  <Image
                    style={styles.wavesSection}
                    source={require("../../assets/audio/sound.png")}
                  />
                </View>
              </View>

              <View style={styles.borderBottomLine}>

              </View>

              

              {/* Form section record */}

              <View style={styles.flexContainerRecordAudio}>
              
                {/* Start Record icon */}
                <TouchableOpacity
                  // start record
                  // catch error on press start record
                  // onPress={() => {
                  //   return this.onStartRecord()
                  //     .then((result) => {
                  //       console.log(result);
                  //     })
                  //     .catch((error) => {
                  //       console.log(error);
                  //     });
                  // }}
                >
                  <View style={styles.startRecordIcon}>
                    <Ionicons
                      name="mic-circle-sharp"
                      size={35}
                      color="#4F8EF7"
                    />
                  </View>
                </TouchableOpacity>

                {/* Stop Record */}
                <TouchableOpacity
                  // stop record
                  // onPress={() => this.onStopRecord()}
                >
                  <View style={styles.stopRecordIcon}>
                    <FontAwesome name="stop-circle" size={35} color="red" />
                  </View>
                </TouchableOpacity>

                {/* Play recording */}
                <TouchableOpacity 
                // onPress={() => this.onStartPlay()}
                >
                  <View style={styles.playRecordIcon}>
                    <FontAwesome name="play-circle" size={35} color="#2DC897" />
                  </View>
                </TouchableOpacity>

                {/* Pause play recording */}
                <TouchableOpacity 
                // onPress={() => this.onPausePlay()}
                >
                  <View style={styles.pauseRecordIcon}>
                    <FontAwesome
                      name="pause-circle"
                      size={35}
                      color="#2DC897"
                    />
                  </View>
                </TouchableOpacity>

                {/* Stop Playing */}
                <TouchableOpacity 
                // onPress={() => this.onStopPlay()}
                >
                  <View style={styles.stopPlayRecordIcon}>
                    <FontAwesome
                      name="stop-circle-o"
                      size={35}
                      color="#2DC897"
                    />
                  </View>
                </TouchableOpacity>

                {/* send message */}
                <TouchableOpacity
                  // onPress={toggleModal}
                  style={styles.btnContainer}
                >
                  <Text style={styles.btnText}>SEND</Text>
                </TouchableOpacity>
              </View>

              {/* End of form section record */}

              {/* End of record content section*/}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // main container
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  //scroll effect
  Scroll: {
    height: 700,
    // paddingVertical: 30,
  },

  // main flex container
  flex_container: {
    flex: 1,
  },
  // top_image_section
  top_image_section: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
  // top_section image background
  image_properties: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: "40%",
  },
  // Linear Gradient Header
  headerLinearGradient: {
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 5,
    height: "50%",
    width: "100%",
  },

  //   Header section content
  header_section_content: {
    flex: 1,
    alignItems: "center",
    paddingVertical: "20%",
    // backgroundColor: "white",
  },

  //menu items flex section
  recordContentSection: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 50,
    paddingVertical: 30,
    width: "100%",
    top: "30%",
    height: "100%",
    position: "absolute",
  },

  // Rotate shape
  rotateShape: {
    flex: 1,
    backgroundColor: "#fff",
    // borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // paddingHorizontal: 60,
    marginTop: 20,
    height: "100%",
    width: "100%",
    top: "28%",
    // left: 0,
    right: -35,
    position: "absolute",
    transform: [{ rotate: "-6deg" }],
    // elevation: 10
  },

  // Record Icon section
  //recordContainer
  recordFlexContainer: {
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  // waves section
  wavesSection: {
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    height: 150,
    width: "100%",
    aspectRatio: 1,
    marginTop: -20,

    // backgroundColor:'blue'
  },

  // record icon
  recordIcon: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  // record text
  recordText: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 17,
    color: "gray",
    marginTop: 10,
  },
  // Record timing
  recordTime: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    color: "#4F8EF7",
    marginTop: 20,
  },

  // Flex container Record Message
  flexContainerRecordAudio: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fefffe",
    height: 60,
    // marginTop: -10,
    elevation: 3,
  },
   // border bottom
   borderBottomLine: {
    // width: 126,
    borderColor: "#bfc7c1",
    borderWidth: 0,
    borderBottomWidth: 0.6,
    borderStyle: "solid",
    marginTop: -10,
    paddingVertical:-15,
    marginBottom:15,
    

  },


  // start recordIconForm
  startRecordIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  // stop record icon
  stopRecordIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 10,
  },
  // play recording
  playRecordIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 10,
  },
  // pause recording
  pauseRecordIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 10,
  },
  // stop playing
  stopPlayRecordIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 10,
  },

  // sendButton
  sendButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // backgroundColor:'red',
  },
  // send button container
  //   Button container
  btnContainer: {
    elevation: 5,
    backgroundColor: "#4F8EF7",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginLeft: 9,
    // marginTop: 15,
  },
  // send btn text
  //   Button text
  btnText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",

    textTransform: "uppercase",
  },
});

export default AudioRecord;
