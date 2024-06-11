import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export function Header(props) {
    // Deconstruct props
    const { title, titleStyle, style, left, right, onLeft, onRight, } = props;

    // Configure left and right components
    let leftComponent = null;
    let rightComponent = null;
    // Configure left and right components
    if (onLeft) {
        if (!left) console.warn("A button press is passed to this header without text. ");
        leftComponent = (
            <TouchableOpacity onPress={onLeft}>
                <Text style={[headerStyles.headerText, headerStyles.left, titleStyle]}>
                    {left}
                </Text>
            </TouchableOpacity>
        );
    } else if (left) {
        leftComponent = (
            <Text style={[headerStyles.headerText, headerStyles.left, titleStyle]}>
                {left}
            </Text>
        );
    }
    if (onRight) {
        if (!right) console.warn("A button press is passed to this header without text. ");
        rightComponent = (
            <TouchableOpacity onPress={onRight}>
                <Text style={[headerStyles.headerText, headerStyles.right, titleStyle]}>
                    {right}
                </Text>
            </TouchableOpacity>
        );
    } else if (right) {
        rightComponent = (
            <Text style={[headerStyles.headerText, headerStyles.right, titleStyle]}>
                {right}
            </Text>
        );
    }

    return (
        <View style={[headerStyles.header, style]}>
            <View style={headerStyles.outer}>
                {leftComponent}
            </View>
            <View style={headerStyles.center}>
                <Text style={[headerStyles.headerText, titleStyle]}>
                    {title}
                </Text>
            </View>
            <View style={headerStyles.outer}>
                {rightComponent}
            </View>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
    },
    outer: {
        flex: 1,
    },
    center: {
        flex: 3,
    },
    left: {
        textAlign: 'left',
    },
    right: {
        textAlign: 'right',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
    },
});