// Specific Color Explanations: 
//      background:     The color used for the background and empty spaces                  Determined by theme color scheme
//      primary:        The color used for the main text and other key elements             Determined by theme color scheme
//      secondary:      The color used for smaller text and other side elements             Determined by theme color scheme
//      foreground:     The color used for filling sub elements                             Determined by theme color scheme
//      borders:        The color used for borders and outlines                             Determined by theme color scheme
//      accent:         The color used for accents and specific visual focal points         Determined by theme accent type
export class Colors {
    static dark = {
        background: '#000000',
        primary: '#ffffff',
        secondary: '#999999',
        foreground: '#111111',
        borders: '#333333',
        accent: '#00aaff',
    };

    static light = {
        background: '#ffffff',
        primary: '#000000',
        secondary: '#666666',
        foreground: '#eeeeee',
        borders: '#cccccc',
        accent: '#0055ff',
    };

    static accents = [
        '#800000', // DarkRed
        '#FF0000', // Red
        '#FF8080', // LightRed
        '#804000', // DarkOrange
        '#FF8000', // Orange
        '#FFBF80', // LightOrange
        '#808000', // DarkYellow
        '#FFFF00', // Yellow
        '#FFFF80', // LightYellow
        '#008000', // DarkGreen
        '#00FF00', // Green
        '#80FF80', // LightGreen
        '#008080', // DarkAqua
        '#00FFFF', // Aqua
        '#80FFFF', // LightAqua
        '#000080', // DarkBlue
        '#0000FF', // Blue
        '#8080FF', // LightBlue
        '#400080', // DarkPurple
        '#8000FF', // Purple
        '#BF80FF', // LightPurple
        '#800080', // DarkMagenta
        '#FF00FF', // Magenta
        '#FF80FF', // LightMagenta
        '#800040', // DarkPink
        '#FF0080', // Pink
        '#FF80BF', // LightPink
    ];
}