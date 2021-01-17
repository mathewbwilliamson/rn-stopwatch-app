/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface TouchableLabelProps {}

export const TouchableLabel: React.FC<TouchableLabelProps> = () => {
    const [label, useLabel] = React.useState<string>('Label');
    const [isTextInputActive, useIsTextInputActive] = React.useState<boolean>(
        false
    );

    return (
        <View style={styles.container}>
            {!isTextInputActive ? (
                <TouchableOpacity
                    onPress={() => useIsTextInputActive(!isTextInputActive)}
                >
                    <Text style={styles.labelText}>{label}</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    onPress={() => useIsTextInputActive(!isTextInputActive)}
                    style={styles.behindText}
                >
                    <Text style={styles.modalText}>Input New Label:</Text>
                    <TextInput
                        style={styles.textInput}
                        value={label}
                        onChangeText={(changedText) => useLabel(changedText)}
                        onBlur={() => useIsTextInputActive(!isTextInputActive)}
                        selectTextOnFocus={true}
                        autoFocus={true}
                    />
                    <Button
                        title="Save"
                        onPress={() => useIsTextInputActive(!isTextInputActive)}
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
