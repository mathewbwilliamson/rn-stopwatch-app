import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { formatTime } from './utils/stopwatchUtils';
import { differenceInSeconds, format } from 'date-fns';
import { useStopwatch } from './customHooks/useStopwatch';

interface Stopwatch2Props {
    onRemoveStopwatch: (stopwatchId: number) => void;
    id: number;
}

export const Stopwatch2: React.FC<Stopwatch2Props> = ({
    onRemoveStopwatch,
    id,
}) => {
    const {
        laps,
        addLap,
        isRunning,
        elapsedTime,
        startTimer,
        stopTimer,
        resetTimer,
    } = useStopwatch();

    const handleStartStop = () => {
        isRunning ? stopTimer() : startTimer();
    };

    const handleReset = () => {
        resetTimer();
    };

    return (
        <View style={styles.stopwatchContainer}>
            <AntDesign
                name="closecircle"
                size={24}
                color="black"
                style={styles.icon}
                onPress={() => {
                    handleReset();
                    onRemoveStopwatch(id);
                }}
            />
            <Text style={styles.timerContainer}>
                {!!timerTime
                    ? formatTime(differenceInSeconds(timerTime, timerStart))
                    : '00:00:00'}
            </Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        onPress={() => onStartTimer()}
                        title="Start"
                        disabled={!!timerOn}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => handlePause()}
                        title="Pause"
                        disabled={!timerOn}
                    />
                </View>
                <View style={styles.button}>
                    <Button onPress={() => handleReset()} title="Clear" />
                </View>
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
