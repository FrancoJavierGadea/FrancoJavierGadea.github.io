import Gargantua from "@assets/Gargantua.mp4";
import GargantuaPoster from "@assets/Gargantua-poster.jpg";

export const THEMES = {
    LIGHT: {
        name: 'light',
        bs: 'light'
    },
    DARK: {
        name: 'dark',
        bs: 'dark'
    },
    BLACKHOLE: {
        name: 'blackhole',
        bs: 'dark',
        background: {
            video: Gargantua,
            poster: GargantuaPoster.src
        }
    }
};


