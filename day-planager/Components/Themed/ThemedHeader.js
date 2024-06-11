import { useSelector } from 'react-redux';

import { Header } from '../Core/Header';

export function ThemedHeader(props) {
    // Deconstruct props
    const { title, left, right, onLeft, onRight, } = props;

    // Theme values from the store
    const settings = useSelector(state => state.settings);
    const theme = settings.theme;

    return (
        <Header
            title={title}
            titleStyle={{
                color: theme.colors.primary
            }}
            style={{
                backgroundColor: theme.colors.background,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.borders,
            }}
            left={left}
            right={right}
            onLeft={onLeft}
            onRight={onRight}
        />
    );
}