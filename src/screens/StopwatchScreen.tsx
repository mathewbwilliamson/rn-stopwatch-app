import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Stopwatch } from '../components/Stopwatch';

export const StopwatchScreen: NavigationStackScreenComponent = () => {
    return (
        <SafeAreaView>
            <Stopwatch />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
