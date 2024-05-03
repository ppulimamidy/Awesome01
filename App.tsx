import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;