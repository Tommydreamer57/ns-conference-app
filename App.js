import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';

const log = (...args) => {
    console.log(...args);
    return args[0]
};

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const addNavigationOptions = screensObj => Object.keys(screensObj).reduce((_ret, screen) => ({
    ..._ret,
    [screen]: {
        ...screensObj[screen],
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#14C'
            },
            headerTitleStyle: {
                color: '#FFF'
            }
        }
    }
}), {});

const createStack = screensObj => createStackNavigator(addNavigationOptions(screensObj));

const routes = {
    Home: {
        screen: createStack({
            Home: {
                screen: () => <Text>Home</Text>
            }
        })
    },
    Sessions: {
        screen: createStack({
            Sessions: { screen: () => <Text>Sessions</Text> },
            SessionDetails: { screen: () => <Text>SessionDetails</Text> },
            SpeakerDetails: { screen: () => <Text>SpeakerDetails</Text> },
            Feedback: { screen: () => <Text>Feedback</Text> },
            Map: { screen: () => <Text>Map</Text> }
        })
    },
    Schedule: {
        screen: createStack({
            Schedule: { screen: () => <Text>Schedule</Text> },
            SessionDetails: { screen: () => <Text>SessionDetails</Text> },
            SpeakerDetails: { screen: () => <Text>SpeakerDetails</Text> },
            Feedback: { screen: () => <Text>Feedback</Text> },
            Map: { screen: () => <Text>Map</Text> }
        })
    },
    Notifications: {
        screen: createStack({
            Notifications: {
                screen: () => <Text>Notifications</Text>
            }
        })
    },
    Other: {
        screen: createStack({
            Other: { screen: () => <Text>Other</Text> },
            Map: { screen: () => <Text>Map</Text> }
        })
    }
};

console.log(routes);

const options = {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            const tabs = {
                Home: `ios-home${focused ? '' : '-outline'}`,
                Sessions: `ios-book${focused ? '' : '-outline'}`,
                Schedule: `ios-clipboard${focused ? '' : '-outline'}`,
                Notifications: `ios-albums${focused ? '' : '-outline'}`,
                Other: `ios-apps${focused ? '' : '-outline'}`
            }
            let iconName = tabs[routeName]
            return <Ionicons name={iconName} size={25} color={tintColor} />
        }
    }),
    tabBarOptions: {
        activeTintColor: '#FFF',
        inactiveTintColor: '#CCC',
        style: {
            backgroundColor: '#14C'
        }
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
};

const Navigator = createBottomTabNavigator(routes, options);

export default Navigator;
