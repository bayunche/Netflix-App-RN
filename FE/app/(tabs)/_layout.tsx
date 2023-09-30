import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import{AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons, Octicons,Ionicons} from '@expo/vector-icons'; 

import Colors from '../../constants/Colors';


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name='home' size={24} color={color}  style={{marginBottom:4}} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Coming soon',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name='video-library' size={24} color={color}  style={{marginBottom:4}}/>,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name='search' size={24} color={color}  style={{marginBottom:4}}/>,
        }}
      />
    <Tabs.Screen
        name="four"
        options={{
          title: 'Downloads',
          headerShown: false,
          tabBarIcon: ({ color }) => <Octicons name="download" size={24} color={color}  style={{marginBottom:4}}/>,
        }}
      />
    </Tabs>
    
    
    
  );
}
