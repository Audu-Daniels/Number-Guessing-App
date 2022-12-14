import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


const Card = props =>{
    return(
        <View style = {{ ...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
card: {
    shadowColor: 'black',
    shadowOffset:{width: 0, heaight: 2},
    shadowRadius:6,
    shdowOpacity:0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding:20,
    borderRadius: 10,
    // justifyContent:'center',
    // alignItems: 'center'
}
});

export default Card;