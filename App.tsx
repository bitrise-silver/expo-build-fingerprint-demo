import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Build Skip Demo</Text>
        <Text style={styles.body}>
          Expo + Bitrise key-value cache. When only this JavaScript changes, CI
          reuses the cached export instead of rebuilding it.
        </Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0b0b0f',
  },
  card: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#17171f',
    maxWidth: 360,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: '#c7c7d1',
  },
});
