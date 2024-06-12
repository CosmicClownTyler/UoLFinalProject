import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Colors } from '../Styles/Colors';

export function ColorPicker(props) {
    // Deconstruct props
    const { onChange, colorType, style, buttonStyle } = props;

    return (
        <View style={[colorPickerStyles.colorGridMenu, style]}>
            {Colors.accents.map((accent, index) => (
                <TouchableOpacity
                    style={[colorPickerStyles.colorGridButton, buttonStyle, { backgroundColor: accent }]}
                    onPress={() => { onChange(accent); }} key={index}
                />
            ))}
        </View>
    );
}

const colorPickerStyles = StyleSheet.create({
    colorGridMenu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 5,
        paddingHorizontal: 10,
    },
    colorGridButton: {
        flexBasis: '30%',
        aspectRatio: '2/1',
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
    },
});