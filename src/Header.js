import React from 'react';
import { StyleSheet, Text, View,ImageBackground, SafeAreaView } from 'react-native';

export const Header = (props) => {

    return (
<ImageBackground source={require('../assets/headerHome.jpg')} style={styles.headerimg}>
    <Text  style={styles.headertext}>{props.title}</Text>
</ImageBackground>


    )
}

const styles = StyleSheet.create({
headerimg: {
    height:250,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
}, 

headertext: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    fontSize: 50,
    fontWeight: 'bold',
},

headernimg:{
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
},

headerntext: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
}); 