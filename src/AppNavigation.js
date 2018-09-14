import { createStackNavigator } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import ResultScreen from "./screens/ResultScreen";

const AppNavigation = createStackNavigator({
  Home: { screen: HomeScreen },
  Result: { screen: ResultScreen },
});

export default AppNavigation;
