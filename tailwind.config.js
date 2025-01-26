// tailwind.config.js

import wwtBsdsPreset from '@wwtdev/bsds-css/dist/wwt-bsds-preset.js';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                softBlack: '#121212',
            },
        },
    },
    presets: [wwtBsdsPreset],
    darkMode: 'class',
};
