import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import ListItem from '../components/ListItem';
    
const IndexScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button 
                title="Go to Screen One" 
                onPress={() => navigation.navigate('ScreenOne')}
            />
            <Button 
                title="Go to Screen Two" 
                onPress={() => navigation.navigate('ScreenTwo')}
            />
          <Text style={styles.heading}>Flintstones and Rubbles</Text>
          <ScrollView horizontal={false}>

                <ListItem
                    name ="Fred"
                    image={require('../../assets/fred.jpg')}
                />

              <View style={styles.itemContainer}>
                  <Text style={styles.nameText}>Wilma</Text>
                  <Image source={require('../../assets/wilma.png')} style={styles.img} />
              </View>
              <View style={styles.itemContainer}>
                  <Text style={styles.nameText}>Pebbles</Text>
                  <Image source={require('../../assets/pebbles.png')} style={styles.img} />
              </View>
              <View style={styles.itemContainer}>
                  <Text style={styles.nameText}>Barney</Text>
                  <Image source={require('../../assets/barney.jpg')} style={styles.img} />
              </View>
              <View style={styles.itemContainer}>
                  <Text style={styles.nameText}>Bettie</Text>
                  <Image source={require('../../assets/bettie.png')} style={styles.img} />
              </View>
              <View style={styles.itemContainer}>
                  <Text style={styles.nameText}>Bamm-Bamm</Text>
                  <Image source={require('../../assets/bamm.jpg')} style={styles.img} />
              </View>
          </ScrollView>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 50,
    },
    heading: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'green'
    },
    nameText: {
        fontSize: 20, 
        color: 'blue',
        marginTop: 10
    },
    img: {
        width: 250, 
        height: 250
    },
    itemContainer: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 4,
      padding: 5,
      marginVertical: 5,
    }
});


export default IndexScreen;