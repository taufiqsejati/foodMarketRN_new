import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {SignIn, SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
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
