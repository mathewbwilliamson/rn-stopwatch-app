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

    const onAddStopwatch = () => {
        if (stopwatchCount.length === 0) {
            setStopwatchCount([{ id: 0 }]);
        } else {
            setStopwatchCount([
                ...stopwatchCount,
                {
                    id: stopwatchCount[stopwatchCount.length - 1].id + 1,
                },
            ]);
        }
    };

    return (
        <SafeAreaView>
            <Button title="Add Stopwatch" onPress={() => onAddStopwatch()} />
            {Object.keys(stopwatchCount).map((_key, idx) => {
                const actualItem = stopwatchCount[idx];

                return (
                    <Stopwatch
                        key={actualItem.id}
                        id={actualItem.id}
                        onRemoveStopwatch={removeStopwatch}
                    />
                );
            })}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
