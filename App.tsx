import { AppRegistry } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "./src/types/common"
import { HomeScreen, SettingsScreen } from "src/screens"
import { HeaderTitle } from "src/components/common"
import { Provider as JotaiProvider } from "jotai"
import { Provider as PaperProvider } from "react-native-paper"
const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <JotaiProvider>
        <PaperProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: (props) => <HeaderTitle {...props} />,
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                headerTitle: (props) => <HeaderTitle {...props} />,
                headerTitleAlign: "center",
                animation: "slide_from_right",
              }}
            />
          </Stack.Navigator>
        </PaperProvider>
      </JotaiProvider>
    </NavigationContainer>
  )
}

AppRegistry.registerComponent("ExpoStarter", () => App)
