import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {SignIn, SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <SignIn />
    </NavigationContainer>
  );
  // <SplashScreen />;
  // (
  //   <>
  //     {/* <StatusBar barStyle="dark-content">
  //       <SafeAreaView>
  //         <Text>Hello Food Market App</Text>
  //       </SafeAreaView>
  //     </StatusBar> */}
  //   </>
  // );
};

export default App;
