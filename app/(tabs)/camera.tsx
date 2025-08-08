// app/(tabs)/camera.tsx
import React from 'react';
import { SafeAreaView } from 'react-native';
import CameraScreen from '../../src/screens/CameraScreen';

export default function CameraPage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CameraScreen />
    </SafeAreaView>
  );
}

