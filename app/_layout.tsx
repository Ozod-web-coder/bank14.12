import {Stack, Tabs} from "expo-router";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function RootLayout() {
  return (
      <Tabs screenOptions={{tabBarActiveTintColor:'red'}}
            initialRouteName='src/screens/HomeScreen'>
          <Tabs.Screen name='src/screens/HomeScreen' options={{headerShown: false,
              title: 'Home', tabBarIcon: ({color})=>(
                  <Icon name='home' size={24} color={color}/>
              )}} />
          <Tabs.Screen name='src/screens/HelpScreen' options={{headerShown: false,
              title: 'Help', tabBarIcon: ({color})=>(
                  <Icon name='question' size={24} color={color}/>
              )}} />
          <Tabs.Screen name='src/screens/ProfileScreen' options={{headerShown: false,
              title: 'Profile', tabBarIcon: ({color})=>(
                  <Icon name='user' size={24} color={color}/>
              )}} />
      </Tabs>
  )
}
