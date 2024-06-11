import { useSelector } from 'react-redux';

import { Header } from '../Core/Header';

export function ThemedHeader(props) {
    // Deconstruct props
    const {
        title,
        leftText, leftImage, onLeft,
        rightText, rightImage, onRight,
    } = props;

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
            leftText={leftText}
            leftImage={leftImage}
            
            onLeft={onLeft}
            rightText={rightText}
            rightImage={rightImage}
            
            onRight={onRight}
        />
    );
}