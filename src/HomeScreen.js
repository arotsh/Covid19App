import React from 'react';
import { StyleSheet, Text, View,ImageBackground, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { Header } from './Header';


 export const HomeScreen = () => {
    const [data, setData] = useState([])

    useEffect(
        () => {
            fetchData()
        },[]
    )

    const fetchData = async () => {
        const res = await fetch('https://coronavirus-19-api.herokuapp.com/all')
        const fetchedData = await res.json()
        setData(fetchedData)

    }

    return (
        <SafeAreaView style={{ backgroundColor: '#777', flex: 1 }}>
        <View style={styles.container}>
                <View style={{backgroundColor: '#131418', flex: 1}}>
                <Header img={'headerHome.jpg'} title={'#StayAtHome'} />
            <View style={styles.inf}>
                <Text style={styles.infNum}>{data.cases}</Text>
                <Text style={styles.infText}>INFECTED</Text>
            </View>

            <View style={styles.info}> 
                <View style={styles.info1}>
                    <Text style={styles.infoText}>DEATHS</Text>
                    <Text style={styles.infoNum}>{data.deaths}</Text>
                </View>

                <View style={styles.info1}>
                    <Text style={styles.infoText1}>RECOVERED</Text>
                    <Text style={styles.infoNum1}>{data.recovered}</Text>
                </View>
            </View>
                </View>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        marginTop: 30,
        flex: 1,
        backgroundColor: '#777',
    },


    inf: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },


    infNum: {
        color: '#ecbd26',
        fontSize: 70,
        fontWeight: 'bold',
    },
  
    infText: {
        color: '#ecbd26',
        fontSize: 40,
        fontWeight: 'bold',
    },

    info: {
        marginTop: 100,
        height: '15%',
        width: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },

    info1: {
        height: '100%',
        width: '40%',
        borderRadius:20,
        backgroundColor: '#0b0c0e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    infoText: {
        color: '#ff0000',
        fontSize: 25,
        fontWeight: 'bold'
    },

    infoNum: {
        color: '#ff0000',
        fontSize:35,
        fontWeight: 'bold'
    },

    infoText1: {
        color: '#39ff14',
        fontSize:25,
        fontWeight: 'bold'

    },

    infoNum1: {
        color: '#39ff14',
        fontSize: 35,
        fontWeight: 'bold'
    },
});


