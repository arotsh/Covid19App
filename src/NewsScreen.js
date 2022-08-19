import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Dimensions, Image, ScrollView, ImageBackground, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';


export const NewsScreen = (props) => {
  const [loading, isLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(
    () => {
      fetchData()
    }, []
  )

  const fetchData = async () => {
    const res = await fetch('https://covid-19-news-5c62e.firebaseio.com/news.json')
    const fetchedData = await res.json()

    if (fetchedData) {
      const apartaments = Object.keys(fetchedData).map(key => {
        return {
          id: key,
          ...fetchedData[key]
        }
      })

      setData(apartaments)
      isLoading(false)
    }
  }

  let datareverse = [...data].reverse();
  return (

    <SafeAreaView style={{ backgroundColor: '#777', flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={require('../assets/headerNews.jpg')} style={styles.header}>
          <Text style={styles.headertext}>World News</Text>
        </ImageBackground>
        {loading
          ? <View style={styles.activi}>
            <ActivityIndicator size="large" color="white" style={{ marginTop: 15, marginBottom: 15, }} />
          </View>
          : <ScrollView style={styles.scrlv}>
            <View style={styles.view}>
              {
                datareverse.map((v, index) => {
                  return (
                    <View key={index.toString()} style={styles.item}>
                      <Text style={styles.title}>{v.title}</Text>
                      <Image source={{ uri: v.imgUrl }} style={styles.imgUrl}></Image>
                      <Text style={styles.description}>{v.description}</Text>
                      <View style={styles.dates}>
                        <Text style={styles.Date}>{v.Date}</Text>
                        <Text style={styles.Time}>{v.Time}</Text>
                      </View>
                    </View>
                  )
                })
              }
            </View>
          </ScrollView>}
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#131418',
  },

  header: {

    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headertext: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },

  activi: {
    marginTop: 300
  },

  scrlv: {
    height: '60%',
    width: '100%',

  },

  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  item: {
    width: '85%',
    marginTop: 20,
    backgroundColor: '#0b0c0e',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  imgUrl: {
    marginVertical: 20,
    width: '90%',
    height: 150,
    borderRadius: 10,

  },

  description: {
    color: 'white',
    fontSize: 12,
    alignItems: "center"
  },

  dates: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 20,
  },

  Date: {
    color: 'white',
  },

  Time: {
    color: 'white',
    marginLeft: 10,
  },
});
