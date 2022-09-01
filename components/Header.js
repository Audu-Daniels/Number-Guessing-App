import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from "../constants/colors";

const Header = props => {
    return(
        <View style = {styles.header}>
        <Text style = {styles.headerTitle}>{props.title}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
header: {
    height: 90,
    width:'100%',
    backgroundColor: Colors.primary,
    paddingTop: 36,
    alignItems:'center',
    justifyContent:'center'

},

headerTitle: {
color: 'black',
fontSize: 18
}
})

export default Header;