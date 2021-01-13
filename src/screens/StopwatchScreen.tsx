import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Stopwatch } from '../components/Stopwatch';

interface Stopwatch {
    id: number;
}

export const StopwatchScreen: NavigationStackScreenComponent = () => {
    const [stopwatchCount, setStopwatchCount] = React.useState<Stopwatch[]>([
        {
            id: 0,
        },
    ]);

    const removeStopwatch = (stopwatchId: number) => {
        setStopwatchCount(
            stopwatchCount.filter((item) => item.id !== stopwatchId)
        );
    };

    console.log('\x1b[41m%s \x1b[0m', '[matt] stopwatchCount', stopwatchCount);
    return (
        <SafeAreaView>
            {Object.keys(stopwatchCount).map((item, idx) => {
                const thing = stopwatchCount[idx];

                return <Stopwatch key={thing.id} />;
            })}
            <Button
                title="Add Stopwatch"
                onPress={() =>
                    setStopwatchCount([
                        ...stopwatchCount,
                        {
                            id:
                                stopwatchCount[stopwatchCount.length - 1].id +
                                1,
                        },
                    ])
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
