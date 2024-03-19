import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function Top({
  heightC,
  widthC,
}: {
  heightC: number;
  widthC: number;
}) {
  const style = StyleSheet.create({
    Top: {
      width: widthC,
      height: heightC,
      backgroundColor: '#ee0792',
    },
  });
  return (
    <SafeAreaView style={[style.Top]}>
  
    </SafeAreaView>
  );
}
