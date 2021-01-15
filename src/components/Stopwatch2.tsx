import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { formatTime } from './utils/stopwatchUtils';
import { differenceInSeconds, format } from 'date-fns';

interface Stopwatch2Props {
    onRemoveStopwatch: (stopwatchId: number) => void;
    id: number;
}

export const Stopwatch2: React.FC<Stopwatch2Props> = ({
    onRemoveStopwatch,
    id,
}) => {
    const [timerOn, setTimerOn] = React.useState<boolean>(false);
    const [timerTime, setTimerTime] = React.useState<number>(0);
    const [timerStart, setTimerStart] = React.useState<number>(0);

    const timerRef = React.useRef<any>(undefined);

    React.useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, []);

    const onStartTimer = () => {
        console.log(
            '\x1b[41m%s \x1b[0m',
            '[matt] formatTime(differenceInSeconds(timerTime, timerStart))',
            formatTime(differenceInSeconds(timerTime, timerStart)),
            timerStart
        );
        if (timerStart === 0) {
            setTimerStart(Date.now() - timerTime);
        }
        setTimerOn(true);

        timerRef.current = setInterval(() => {
            console.log('\x1b[42m%s \x1b[0m', '[matt] timerTime', timerTime);
            setTimerTime(Date.now() - timerTime);
        }, 1000);
    };

    const handlePause = () => {
        setTimerOn(false);
        clearInterval(timerRef.current);
    };

    const handleClear = () => {
        setTimerStart(0);
        setTimerTime(0);
    };

    console.log(
        '\x1b[42m%s \x1b[0m',
        '[matt] formatTime(differenceInSeconds(timerTime, timerStart))',
        formatTime(differenceInSeconds(timerTime, timerStart)),
        timerStart
    );

    return (
        <View style={styles.stopwatchContainer}>
            <AntDesign
                name="closecircle"
                size={24}
                color="black"
                style={styles.icon}
                onPress={() => {
                    handleClear();
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
    icon: {
        position: 'absolute',
        top: 6,
        right: 10,
    },
});
