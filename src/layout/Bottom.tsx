import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import img from '../assets/user.png';
function Bottom({heightC, widthC}: {heightC: number; widthC: number}) {
  const widthtab = 100 / 3;
  const style = StyleSheet.create({

    Bottom: {
      height: heightC,
      width: widthC,
      padding: '4%',
    },
    BottomTab: {
      backgroundColor: '#e25707',
      height: '100%',
      width: '100%',
      borderRadius: 13,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    commontab : {
      height: '100%',
      width: widthtab+'%',

    },
    user: {
      backgroundColor: '#ad8e8e',
    },
    home: {
      backgroundColor: '#6b1111',
    },
    academic: {
      backgroundColor: '#490cb1',
    }
  });

  return (
    <SafeAreaView style={[style.Bottom]}>
      <View style={[style.BottomTab]}>
        <View style={[style.user, style.commontab]}>
          {/* <Image source={img}></Image> */}
        </View>
        <View style={[style.home, style.commontab]}>
          
        </View>
        <View style={[style.academic, style.commontab]}>
          
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Bottom;
