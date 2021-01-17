/* eslint-disable react/prop-types */
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Stopwatch as StopwatchType } from '../types/stopwatchTypes';
import { TouchableLabel } from './TouchableLabel';
import { Stopwatch } from 'react-native-stopwatch-timer';

interface StopwatchContainerProps {
    onRemoveStopwatch: (stopwatchId: number) => void;
    onEditStopwatchLabel: (editedStopwatch: StopwatchType) => void;
    stopwatch: StopwatchType;
}

export const StopwatchContainer: React.FC<StopwatchContainerProps> = ({
    stopwatch,
    onRemoveStopwatch,
    onEditStopwatchLabel,
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
        <View style={styles.stopwatchContainer}>
            <TouchableLabel
                stopwatch={stopwatch}
                onEditStopwatchLabel={onEditStopwatchLabel}
            />
            <AntDesign
                name="closecircle"
                size={24}
                color="black"
                style={styles.icon}
                onPress={() => {
                    ResetStopwatch();
                    onRemoveStopwatch(stopwatch.id);
                }}
            />
            <Stopwatch
                laps={false}
                msecs={true}
                start={stopwatchStart}
                reset={stopwatchReset}
                getTime={getFormattedTime}
            />
            <View style={styles.buttonContainer}>
                <Button title="Start/Stop" onPress={ToggleStopwatch} />
                <Button title="Reset" onPress={ResetStopwatch} />
            </View>
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
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    timerContainer: {
        textAlign: 'center',
        fontSize: 40,
        paddingBottom: 24,
    },
    buttonContainer: {
        display: 'flex',
        width: '100%',
        marginTop: 20,
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
