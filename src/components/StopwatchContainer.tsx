/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { AntDesign } from '@expo/vector-icons';

interface StopwatchContainerProps {
    onRemoveStopwatch: (stopwatchId: number) => void;
    id: number;
}

export const StopwatchContainer: React.FC<StopwatchContainerProps> = ({
    id,
    onRemoveStopwatch,
}) => {
    const [stopwatchStart, useStopwatchStart] = React.useState<boolean>(false);
    const [stopwatchReset, useStopwatchReset] = React.useState<boolean>(false);

    let currentTime = 0;

    const ToggleStopwatch = () => {
        useStopwatchStart(!stopwatchStart);
        useStopwatchReset(false);
    };

    const ResetStopwatch = () => {
        useStopwatchStart(false);
        useStopwatchReset(true);
    };

    const getFormattedTime = (time: number) => {
        currentTime = time;
    };

    return (
        <View>
            <AntDesign
                name="closecircle"
                size={24}
                color="black"
                style={styles.icon}
                onPress={() => {
                    ResetStopwatch();
                    onRemoveStopwatch(id);
                }}
            />
            <Stopwatch
                laps={false}
                msecs={true}
                start={stopwatchStart}
                reset={stopwatchReset}
                // options={options}
                getTime={getFormattedTime}
            />
            <Button title="Start/Stop" onPress={ToggleStopwatch} />
            <Button title="Reset" onPress={ResetStopwatch} />
        </View>
    );
};

const styles = StyleSheet.create({
    stopwatchContainer: {
        borderTopColor: 'black',
        borderTopWidth: 3,
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        paddingTop: 18,
        paddingBottom: 24,
    },
    timerContainer: {
        textAlign: 'center',
        fontSize: 40,
        paddingBottom: 24,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        flex: 1,
        paddingHorizontal: 10,
    },
    icon: {
        position: 'absolute',
        top: 6,
        right: 10,
    },
});
