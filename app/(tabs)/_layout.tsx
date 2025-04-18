import { Image } from 'expo-image';
import { Link, Tabs, useRouter } from 'expo-router';
import { Platform } from 'react-native';

import { ThemeToggle } from '../../components/ThemeToggle';
import { IconSymbol } from '../../components/icons/IconSymbol';

import CenterButton from '~/components/CenterButton';
import { HapticTab } from '~/components/HapticTab';
import TabBarBackground from '~/components/TabBarBackground';
export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        headerBackButtonDisplayMode: 'minimal',
        tabBarActiveTintColor: '#e79f31',
        tabBarInactiveTintColor: '#6a6a6a',
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarLabelPosition: 'below-icon',
        headerTitleStyle: {
          fontFamily: 'ReckonerBold',
          fontSize: 36,
          letterSpacing: 2,
          color: '#d50404',
          paddingTop: 2,
        },
        tabBarLabelStyle: {
          alignItems: 'center',
          fontFamily: 'ReckonerBold',
          fontSize: 20,
          letterSpacing: 1,
          color: '#787878',
          marginTop: -2,
        },
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            zIndex: 10,
            alignItems: 'center',
          },
          default: {
            zIndex: 1000,
            borderTopColor: 'yellow',
            overflow: 'visible',
          },
        }),
        headerRight: () => {
          return <ThemeToggle />;
        },
        headerTitle: () => (
          <Image
            alt="app-logo"
            source={require('assets/images/cosmic-ar-logo-cut.png')}
            contentFit="contain"
            style={{
              aspectRatio: 16 / 9,
              width: 220,
              height: Platform.OS === 'ios' ? 80 : 100,
              marginTop: Platform.OS === 'ios' ? -10 : 0,
            }}
          />
        ),
        headerTitleAlign: 'left',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          freezeOnBlur:true,
          tabBarItemStyle: {
            backgroundColor: 'transparent',
            //overflowX: 'hidden',
            width: '100%',
            height: '90%',
            zIndex: 100,
            pointerEvents: 'auto',
          },
          title: '',
          tabBarButton: (props) => (
              <CenterButton {...props} onPress={() => router.navigate('../modal')} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Season Info',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.2.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
