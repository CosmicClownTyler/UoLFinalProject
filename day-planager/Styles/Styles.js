import { StyleSheet } from 'react-native';

export function containerStyles(theme) {
    const { background, primary, secondary, foreground, borders, accent } = theme.colors;

    return StyleSheet.create({
        container: {
            backgroundColor: background,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    });
}

export function textStyles(theme) {
    const { primary } = theme.colors;

    return StyleSheet.create({
        text: {
            color: primary,
        },
        menuText: {
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: 35,
            color: primary,
        },
    });
}

export function scrollViewProps(theme) {
    return {
        indicatorStyle: theme.isDark ? 'white' : 'black',
        style: {
            width: '100%',
        }
    };
}

export function tableSectionProps(theme) {
    const { background, primary, secondary, foreground, borders, accent } = theme.colors;

    return {
        headerTextColor: secondary,
        footerTextColor: secondary,
        separatorTintColor: borders,
    };
}

export function tableCellProps(theme) {
    const { background, primary, secondary, foreground, borders, accent } = theme.colors;

    return {
        titleTextColor: primary,
        subtitleColor: secondary,
        backgroundColor: foreground,
        highlightUnderlayColor: primary,
        highlightActiveOpacity: 0.8,
        accessoryColor: accent,
        accessoryColorDisclosureIndicator: secondary,
    };
}

export function colorPickerProps(theme) {
    const { background, primary, secondary, foreground, borders, accent } = theme.colors;

    return {
        style: {
            backgroundColor: background,
        },
        buttonStyle: {
            borderColor: borders,
        },
    };
}

export function headerProps(theme) {
    const { background, primary, secondary, foreground, borders, accent } = theme.colors;

    return {
        titleStyle: {
            color: primary,
        },
        style: {
            backgroundColor: background,
            borderBottomWidth: 1,
            borderBottomColor: borders,
        },
        imageStyle: {
            color: primary,
        },
    };
}

export function checkboxProps(theme) {
    const { background, primary, secondary, foreground, borders, accent } = theme.colors;

    return {
        color: accent,
        size: '75%',
    };
}

export function taskProps(theme) {
    const { background, primary, secondary, foreground, borders, accent } = theme.colors;

    return {
        style: {
            width: '95%',
            backgroundColor: foreground,
            borderColor: borders,
        },
        titleStyle: {
            color: primary,
        },
        dateStyle: {
            color: secondary,
        },
        checkboxProps: checkboxProps(theme),
    };
}

export function taskListProps(theme) {
    const { background, primary, secondary, foreground, borders, accent } = theme.colors;

    return {
        titleStyle: {
            color: primary,
        },
        titleContainerStyle: {
            width: '95%',
            backgroundColor: background,
            borderBottomWidth: 1,
            borderBottomColor: borders,
            marginBottom: 10,
        },
        taskProps: taskProps(theme),
    };
}