
import { StyleSheet } from 'react-native';

const GeneralStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    //scroll styling
    Scroll: {
        height: 700,
      },
      //form_section
  form_section: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomStartRadius:50,
    borderBottomEndRadius:50,
    borderColor:'green',
    paddingHorizontal: 30,
    width: "90%",
    height: "40%",
    // top - balance form section above.
    top: "40%",
    left:"5%",
    position: 'absolute',
  },
});

export {GeneralStyles}
