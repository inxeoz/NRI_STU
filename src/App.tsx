import * as React from 'react';

import Home from './screens/Home';
import User from './screens/User';
import Academic from './screens/Academic';

import Bottom from './layout/Bottom';
import Top from './layout/Top';
import Med from './layout/Med';

import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import usrimg from './assets/user.png';
export default function App() {
  const style = StyleSheet.create({
    rule: {
      height: '100%',
      width: '100%',
      backgroundColor: '#291243',
    },
  });
  return (
    <SafeAreaView style={[style.rule]}>
      <Top widthC={'100%'} heightC={'10%'} />
      <Med widthC={'100%'} heightC={'73%'} />
      <Bottom widthC={'100%'} heightC={'17%'} />
    </SafeAreaView>
  );
}
