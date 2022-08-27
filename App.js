//import liraries
import React from 'react';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{ uri: 'https://prydan.com/' }}
    />
  );
};

export default App;
