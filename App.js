import React from 'react';
import { Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <Text
      style={{
        textAlign: 'center',
        fontSize: 40,
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      My Profile
    </Text>
    <Button
      title="Visit My Profile"
      onPress={() => navigation.navigate('ProfileDetail', { name: 'Gelfer' })}
    />
  </SafeAreaView>
);

const ProfileDetail = ({ route }) => (
  <SafeAreaView style={styles.container}>
    <Text>{route.params.name}</Text>
  </SafeAreaView>
);

const Stack = createStackNavigator();

const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    mode="modal"
    screenOptions={{
      headerStyle: { backgroundColor: 'green' },
      headerTintColor: 'yellow',
    }}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProfileDetail"
      component={ProfileDetail}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const SettingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Setting" component={Setting} />
  </Stack.Navigator>
);

const Setting = () => (
  <SafeAreaView style={styles.container}>
    <Text>Settings Page</Text>
  </SafeAreaView>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'yellow',
      activeTintColor: 'green',
      inactiveBackgroundColor: '#c0c0c0',
      inactiveTintColor: '#000',
    }}
  >
    <Tab.Screen
      name="User"
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={SettingNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="database-settings"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
