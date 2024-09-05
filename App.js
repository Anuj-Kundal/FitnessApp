import { FitnessContext } from './Context';
import StackNavigator from './StackNavigator';
import { StatusBar } from 'expo-status-bar';
import loginscreen from './screens/loginscreen';
import signupscreen from './screens/signupscreen';


export default function App() {
  return (
    <>
    <FitnessContext>
        <StatusBar style="light" backgroundColor='#000' />
        <Stack.Screen name="Login" component={loginscreen} />
          <Stack.Screen name="Signup" component={signupscreen} />
        <StackNavigator />
    </FitnessContext>
    </>
  );
}
