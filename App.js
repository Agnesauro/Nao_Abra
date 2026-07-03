import { StatusBar } from 'expo-status-bar';
// CORREÇÃO: View e StyleSheet importados do pacote correto (react-native)
import { StyleSheet, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home/Home';
import Sobre from './src/pages/Sobre/Sobre';
import Pedidos from './src/pages/Pedidos/Pedidos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Sobre' component={Sobre} />
          <Stack.Screen name='Pedidos' component={Pedidos} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});