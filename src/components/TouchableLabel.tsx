/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Stopwatch } from '../types/stopwatchTypes';

interface TouchableLabelProps {
    stopwatch: Stopwatch;
    onEditStopwatchLabel: (editedStopwatch: Stopwatch) => void;
}

export const TouchableLabel: React.FC<TouchableLabelProps> = ({
    stopwatch,
    onEditStopwatchLabel,
}) => {
    const [label, setLabel] = React.useState<string>(stopwatch.label);
    const [isTextInputActive, setIsTextInputActive] = React.useState<boolean>(
        false
    );

    const onChangeLabel = (newLabel: string) => {
        setLabel(newLabel);
        onEditStopwatchLabel({ id: stopwatch.id, label: newLabel });
    };

    return (
        <View style={styles.container}>
            {!isTextInputActive ? (
                <TouchableOpacity
                    onPress={() => setIsTextInputActive(!isTextInputActive)}
                >
                    <Text style={styles.labelText}>{stopwatch.label}</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    onPress={() => setIsTextInputActive(!isTextInputActive)}
                    style={styles.behindText}
                >
                    <Text style={styles.modalText}>Input New Label:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={label}
                        onChangeText={(changedText) =>
                            onChangeLabel(changedText)
                        }
                        onBlur={() => setIsTextInputActive(!isTextInputActive)}
                        selectTextOnFocus={true}
                        autoFocus={true}
                    />
                    <Button
                        title="Save"
                        onPress={() => setIsTextInputActive(!isTextInputActive)}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    labelText: {
        fontSize: 28,
    },
    container: {
        paddingBottom: 4,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    textInput: {
        fontSize: 28,
        borderColor: 'gray',
        borderWidth: 1,
        width: '60%',
        paddingLeft: 12,
    },
    behindText: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    modalText: {
        fontSize: 28,
    },
});
