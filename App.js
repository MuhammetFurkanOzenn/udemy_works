/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import Card from './src/components/Card';


import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const isDarkMode = true;
export default class App extends Component {
state ={
  number : 0
};

  onPressIncrease = () =>{
    this.setState({
      number: ++this.state.number
    })
};

onPressDecrease = () =>{
    this.setState({
      number: --this.state.number
    })
};
  render() {
    return (
      <View style={styles.container}>
          {/* <Card  text='CardText' title='CardTitle' /> */}
          <Text style = {styles.number}>{this.state.number}</Text>
          <View style ={styles.buttons}> 
          
          <Button
            title='Azalt'
            onPress={this.onPressDecrease}
          />
          <Button
            title='Arttır'
            onPress={this.onPressIncrease}
          />
          
          
          </View>
          
          <Button
            title = 'my button'
            color = '#000'
            

          />
          <TouchableOpacity>
            <View>
              <Text style = {styles.buttonContainer}>

                My Button
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style = {{width:100, height: 100}}
              source = {require('./src/assets/logo.png')}
            />
          </TouchableOpacity>
         {/* <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 3, backgroundColor: 'steelblue' }} /> */}
    </View>
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FFEB3B',
    flex: 1,
    justifyContent: "center",
    alignItems: "center" ,
  },
  
  buttons:   {
    fontWeight:'300',
    flexDirection: 'row'
  },
  buttonContainer:   {
    padding : 15,
    backgroundColor : 'orange',
    borderRadius : 15,
    marginTop : 10,
    
  },
  number: {
    fontSize: 44
  }
});


// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark'; // Dark Mode Selector

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />   
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,//
//           }}>


//         </View>

//       </ScrollView>
//       <View>
//          <Card text = 'merhaba' title ='abc' />
//           <Button 
//           title = 'abd' 
//           color = '#000'
//           onPress = {alert('detail')}
//           />




//         </View>
//     </SafeAreaView>
//   );
// };



// export default App;
