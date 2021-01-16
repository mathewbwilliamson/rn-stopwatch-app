/* eslint-disable react/prop-types */
import { AntDesign } from '@expo/vector-icons';
import { format } from 'date-fns';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useStopwatch } from './customHooks/useStopwatch';

interface Stopwatch2Props {
    onRemoveStopwatch: (stopwatchId: number) => void;
    id: number;
}

export const Stopwatch2: React.FC<Stopwatch2Props> = ({
    onRemoveStopwatch,
    id,
}) => {
    const [startTime, setStartTime] = React.useState<number>(0);
    const [elapsedTime, setElapsedTime] = React.useState<number>(0);
    const interval = React.useRef<any>(undefined);

    const updateTime = () => {
        const delta = Date.now() - startTime;
        setElapsedTime((prevElapsedTime) => prevElapsedTime + delta);
        setStartTime(Date.now());
    };

    const handleStartTimer = () => {
        setStartTime(Date.now());
        interval.current = setInterval(() => updateTime(), 100);

        // return () => clearInterval(interval.current);
    };

    return (
        <View style={styles.stopwatchContainer}>
            <AntDesign
                name="closecircle"
                size={24}
                color="black"
                style={styles.icon}
                onPress={() => {
                    // resetTimer();
                    onRemoveStopwatch(id);
                }}
            />
            <Text style={styles.timerContainer}>
                {format(elapsedTime, 'HH:mm:ss')}
            </Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        onPress={() => handleStartTimer()}
                        title="Start"
                        // disabled={!!isRunning}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => handleStartTimer()}
                        title="Pause"
                        // disabled={!isRunning}
                    />
                </View>
                <View style={styles.button}>
                    {/* <Button onPress={() => resetTimer()} title="Clear" /> */}
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
