import {SafeAreaView, StyleSheet, Text} from 'react-native';

export default function Med({
  heightC,
  widthC,
}: {
  heightC: number;
  widthC: number;
}) {
  const style = StyleSheet.create({
    Med: {
      width: widthC,
      height: heightC,
      backgroundColor: '#078eee',
    },
  });
  return (
    <SafeAreaView style={[style.Med]}>
      <Text> HII med</Text>
    </SafeAreaView>
  );
}
