import { useSelector } from 'react-redux';

import { ColorPicker } from '../Core/ColorPicker';

export function ThemedColorPicker(props) {
    // Deconstruct props
    const { onChange, colorType } = props;

    // Theme values from the store
    const settings = useSelector(state => state.settings);
    const theme = settings.theme;

    return (
        <ColorPicker
            onChange={onChange}
            colorType={colorType}
            style={{
                backgroundColor: theme.colors.background,
            }}
            buttonStyle={{
                borderColor: theme.colors.borders,
            }}
        />
    );
}