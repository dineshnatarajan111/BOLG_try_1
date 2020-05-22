import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';

const navigation = createBottomTabNavigator({
  Home: HomeScreen,
},{
  initialRouteName: 'Home',
});

export default createAppContainer(navigation);