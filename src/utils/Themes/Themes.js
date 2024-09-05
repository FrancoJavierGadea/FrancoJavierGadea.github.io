import Gargantua from "@assets/Gargantua.mp4";
import GargantuaPoster from "@assets/Gargantua-poster.jpg";
import Pattern3 from "@assets/background-3.svg?url";
import Pattern2 from "@assets/background-2.svg?url";

export const THEMES = {
    LIGHT: {
        name: 'light',
        bs: 'light',
        background: {
            poster: Pattern3
        }
    },
    DARK: {
        name: 'dark',
        bs: 'dark',
        background: {
            poster: Pattern2
        }
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


