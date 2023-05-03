import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const LoadingScreen = ({bool}) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0000ff" animating={bool} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 100
  },
});

export default LoadingScreen;