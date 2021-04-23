/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {fetch} from 'react-native-ssl-pinning';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const name = "Edison"
  const text = "good evening hidden brains"
  const onPress = () => {
    fetch(
      // 'https://google.com',
      'https://abusiveexperiencereport.googleapis.com/$discovery/rest?version=v1',
      {
        method: 'GET',
        timeoutInterval: 10000, // milliseconds
        // body: body,
        // your certificates array (needed only in android) ios will pick it automatically
        sslPinning: {
          certs: ['googleapis', 'mycert'], // your certificates name (without extension), for example cert1.cer, cert2.cer
        },
        headers: {
          Accept: 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          e_platform: 'mobile',
        },
      },
    )
      .then(response => {
        console.log(`response received ${response}`);
      })
      .catch(err => {
        console.log(`error: ${err}`);
      });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello World</Text>
      <TouchableOpacity
        onPress={onPress}
        style={{backgroundColor: '#03A9F4', padding: 10, margin: 10}}>
        <Text>{name} {text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
