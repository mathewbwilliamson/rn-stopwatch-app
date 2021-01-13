import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const formatTime = (rawTime: number) => {
    const getSeconds = `0${rawTime % 60}`.slice(-2);

    const minutes = `${Math.floor(rawTime / 60)}`;
    const getMinutes = `0${Number(minutes) % 60}`.slice(-2);

    const getHours = `0${Math.floor(rawTime / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
};

export const Stopwatch = () => {
    const [timer, setTimer] = React.useState<number>(0);
    const [isActive, setIsActive] = React.useState<boolean>(false);
    const [isPaused, setIsPaused] = React.useState<boolean>(true);
    const countRef = React.useRef<any>(undefined);

    const onStartTimer = () => {
        setIsActive(true);
        setIsPaused(false);

        countRef.current = setInterval(() => {
            setTimer((timerTime) => timerTime + 1);
        }, 1000);
    };

    const handlePause = () => {
        clearInterval(countRef.current);
        setIsPaused(true);
    };

    const handleClear = () => {
        clearInterval(countRef.current);
        setIsPaused(true);
        setIsActive(false);
        setTimer(0);
    };

    return (
        <View style={styles.stopwatchContainer}>
            <Text style={styles.timerContainer}>{formatTime(timer)}</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        onPress={() => onStartTimer()}
                        title="Start"
                        disabled={!isPaused}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => handlePause()}
                        title="Pause"
                        disabled={!!isPaused}
                    />
                </View>
                <View style={styles.button}>
                    <Button onPress={() => handleClear()} title="Clear" />
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
});
