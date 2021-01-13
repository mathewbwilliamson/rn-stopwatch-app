import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

export const PomodoroScreen: NavigationStackScreenComponent = () => {
    return (
        <SafeAreaView>
            <Text>Pomo Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});