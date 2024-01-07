import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import MealsDetailsScreen from './src/screens/MealDetailsScreen';
import MealsListScreen from './src/screens/MealsListScreen';
import MealsCategoryScreen from './src/screens/MealsCategoryScreen';
import FavoriteMealsScreen from './src/screens/FavoriteMealsScreen';
import { Colors } from './src/constants/Colors';
import { store } from './src/stores/redux/store';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigation = (): React.ReactElement => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.secondary },
        headerTintColor: Colors.white,
        drawerActiveBackgroundColor: Colors.activeTab,
        drawerActiveTintColor: Colors.secondary,
        drawerInactiveTintColor: Colors.white,
        drawerContentStyle: {
          backgroundColor: Colors.secondary,
        },
        sceneContainerStyle: {
          backgroundColor: Colors.primary,
        },
      }}
    >
      <Drawer.Screen
        name='MealsCategory'
        component={MealsCategoryScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color }) => (
            <Ionicons name='list' size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='FavoriteMeals'
        component={FavoriteMealsScreen}
        options={{
          title: 'Favorite Meals',
          drawerIcon: ({ color }) => (
            <Ionicons name='star' size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
              contentStyle: { backgroundColor: Colors.primary },
              headerStyle: { backgroundColor: Colors.secondary },
              headerTintColor: Colors.white,
              animation: 'slide_from_right',
            }}
          >
            <Stack.Screen
              name='HomeScreen'
              component={DrawerNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='MealsList' component={MealsListScreen} />
            <Stack.Screen name='MealDetails' component={MealsDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
