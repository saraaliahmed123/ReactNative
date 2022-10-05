import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../src/screens/IndexScreen';
import ScreenOne from '../src/screens/ScreenOne';
import ScreenTwo from '../src/screens/ScreenTwo';

const App = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer> 
            <Stack.Navigator initialRouteName='Index'>
                <Stack.Screen
                    name="Index"
                    container={IndexScreen}
                    options={{ title: "AnythingYouLike App" }}
                />
                <Stack.Screen
                    name='ScreenOne'
                    component={ScreenOne}
                    options={{ title: "Screen 1"}}
                />
                <Stack.Screen
                    name='ScreenTwo'
                    component={ScreenTwo}
                    options={{ title: "Screen 2"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

