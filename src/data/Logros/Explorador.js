
import explorador from "./icons/explorador.png";

const FILES = await import.meta.glob('../Projects/**/*.md');

const FILES_NAMES = await Promise.all(Object.values(FILES).map(async (file) => {

    return (await file()).frontmatter.title;
}));

export const ExploradorLogro = {

    name: 'ExploradorLogro',

    logro: {
        title: 'Explorador',
        text: 'Explora todos los proyectos',
        icon: explorador.src,
        conditions: FILES_NAMES.reduce((acc, name) => {

            acc[name] = false;

            return acc;
        }, {}),    
        win: false,
        complete: false
    },

    update: (projectTitle) => (logro) => {

        logro.conditions = {...logro.conditions,  [projectTitle]: true};

        return logro;
    }
};