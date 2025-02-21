import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import LoginScreen from './screens/loginscreen';
import SignupScreen from './screens/signupscreen';
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Workout" component={WorkoutScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Fit" component={FitScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Rest" component={RestScreen} />
         {/* <Stack.Screen options={{ headerShown: false }} name="login" component={LoginScreen}/> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="signup" component={SignupScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator