import { Image } from 'react-native';

export function CalendarIcon({ color, size }) {
    return (<Image
        tintColor={color}
        source={require('../assets/icons/calendar.png')}
        style={{
            width: size,
            height: size,
        }}
    />);
}

export function CalendarCheckmarkIcon({ color, size }) {
    return (<Image
        tintColor={color}
        source={require('../assets/icons/calendar-checkmark.png')}
        style={{
            width: size,
            height: size,
        }}
    />);
}

export function CheckmarkIcon({ color, size }) {
    return (<Image
        tintColor={color}
        source={require('../assets/icons/checkmark.png')}
        style={{
            width: size,
            height: size,
        }}
    />);
}

export function HistoryIcon({ color, size }) {
    return (<Image
        tintColor={color}
        source={require('../assets/icons/history.png')}
        style={{
            width: size,
            height: size,
        }}
    />);
}

export function SettingsIcon({ color, size }) {
    return (<Image
        tintColor={color}
        source={require('../assets/icons/settings.png')}
        style={{
            width: size,
            height: size,
        }}
    />);
}