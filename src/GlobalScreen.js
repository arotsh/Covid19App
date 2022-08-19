import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, ImageBackground, ActivityIndicator, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';

const search = { uri: 'https://cdn.pixabay.com/photo/2017/05/24/07/05/searching-2339723_960_720.png' };

export const GlobalScreen = (props) => {
  const [loading, isLoading] = useState(true)
  const [data, setData] = useState([])
  const [arrayholder, sethol] = useState([]);
  const [val, changeval] = useState("")

  useEffect(
    () => {
      fetchData()
    }, []
  )

  const fetchData = async () => {
    const res = await fetch('https://coronavirus-19-api.herokuapp.com/countries')
    const fetchedData = await res.json()
    if (fetchedData) {
      const apartaments = Object.keys(fetchedData).map(key => {
        return {
          id: key,
          ...fetchedData[key]
        }
      })
      setData(apartaments)
      sethol(apartaments)
      isLoading(false)

    }
  }

  const searchFilterFunction = text => {
    changeval(text);
    console.log(val)
    const newData = arrayholder.filter(item => {
      const itemName = `${item.country.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemName.indexOf(textData) > -1;

    });
    setData(newData);
  };


  return (
    <SafeAreaView style={{ backgroundColor: '#777', flex: 1 }}>
      <View style={styles.container}>
        <View style={{ height: '10%' , width: '100%', backgroundColor: 'black', }}>
          <KeyboardAvoidingView style={styles.textInput}>
            <ImageBackground source={search} style={styles.search} />
            <TextInput style={styles.input} placeholder="Search Country..." value={val}
              onChangeText={text => searchFilterFunction(text)} />
          </KeyboardAvoidingView>
        </View>
        {loading
          ? <View>
            <ActivityIndicator size="large" color="white" style={{ marginTop: 15, marginBottom: 15, }} />
          </View>
         : <FlatList style={styles.flatl}
        data={data}
        renderItem={({ item }) => (

          <View style={styles.item}>
            <View style={styles.idiv}>
              <Text style={styles.country} title={`${item.country}`}>{item.country}</Text>
              <View style={styles.crd}>
                <Text style={styles.cases} title={`${item.cases}`}>CASES - {item.cases}</Text>
                <Text style={styles.deaths} title={`${item.deaths}`}>DEATHS - {item.deaths}</Text>
                <Text style={styles.recovered} title={`${item.recovered}`}>RECOVERED - {item.recovered}</Text>
              </View>
            </View>
          </View>

        )}
        keyExtractor={item => item.id}
      />}
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#131418',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  textInput: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 10
  },

  input: {
    width: 200,
    height: 35,
    marginLeft:20,
    borderBottomWidth: 3,
    borderBottomColor: '#f0f0f0',
    color:'white',
    
  },

  search: {
    height: 35,
    width: 25,
  },

  flatl: {
    marginTop: 0,
    width: '100%'

  },

  item: {
    width: '100%',
    height: 200,
    
    alignItems: 'center',
  },

  idiv: {
    height: 260,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },

  crd: {
    // justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  country: {
    color: 'black',
    fontSize: 20,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: '#ccc',
    textAlign: 'center',
    borderRadius: 20,
    marginBottom: 10
  },

  cases: {
    color: 'orange',
    fontSize: 20,
  },

  recovered: {
    color: 'green',
    fontSize: 20,
  },

  deaths: {
    color: 'red',
    fontSize: 20,
  },
});
