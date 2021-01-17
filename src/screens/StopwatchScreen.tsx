import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { StopwatchContainer } from '../components/StopwatchContainer';
import { Stopwatch } from '../types/stopwatchTypes';

export const StopwatchScreen: NavigationStackScreenComponent = () => {
    const [stopwatches, setStopwatches] = React.useState<Stopwatch[]>([
        {
            id: 0,
            label: 'Label',
        },
    ]);

    const removeStopwatch = (stopwatchId: number) => {
        setStopwatches(stopwatches.filter((item) => item.id !== stopwatchId));
    };

    const onAddStopwatch = () => {
        if (stopwatches.length === 0) {
            setStopwatches([{ id: 0, label: 'label' }]);
        } else {
            setStopwatches([
                ...stopwatches,
                {
                    ...stopwatches[stopwatches.length - 1],
                    id: stopwatches[stopwatches.length - 1].id + 1,
                },
            ]);
        }
    };

    const onEditStopwatchLabel = (editedStopwatch: Stopwatch) => {
        const noEditedStopwatches = stopwatches.filter(
            (stopwatch) => stopwatch.id !== editedStopwatch.id
        );
        setStopwatches([...noEditedStopwatches, editedStopwatch]);
    };

    return (
        <SafeAreaView>
            <Button title="Add Stopwatch" onPress={() => onAddStopwatch()} />
            {Object.keys(stopwatches).map((_key, idx) => {
                const actualItem = stopwatches[idx];

                return (
                    <StopwatchContainer
                        key={actualItem.id}
                        stopwatch={actualItem}
                        onRemoveStopwatch={removeStopwatch}
                        onEditStopwatchLabel={onEditStopwatchLabel}
                    />
                );
            })}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});
