// Index.android.js - place code here for Android!

// Import a library เพื่อใช้สำหรับสร้าง Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// สร้าง Component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render บนอุปกรณ์ Android
AppRegistry.registerComponent('albums', () => App);
