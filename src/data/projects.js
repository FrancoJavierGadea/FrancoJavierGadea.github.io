import vLibros from "../assets/libros.mp4";
import libros from "../assets/libros.jpg";
import reactP from "../assets/react-playground.jpg";
import vReactP from "../assets/react-playground.mp4";
import rubik from "../assets/rubik.jpg";
import vRubik from "../assets/rubik.mp4";
import tictac from "../assets/tictactoe.jpg";
import vTictac from "../assets/tictactoe.mp4";

export const PROJECTS = [
    {
        title: 'Libros - Midudev',
        preview: {
            image: libros.src,
            video: vLibros
        },
        technologies: ['Astro', 'View transitions'],
        description: 'Prueba tecnica de Midudev: Una pequeña aplicación web de lista de libros',
        deploy: 'https://libros1812.netlify.app',
        github: '' 
    },

    {
        title: 'React playground',
        preview: {
            image: reactP.src,
            video: vReactP
        },
        technologies: ['React', 'Monaco editor'],
        description: 'Un playground de React en el cual probar a fondo la libreria',
        deploy: 'https://francojaviergadea.github.io/React-playground',
        github: '' 
    },

    {
        title: 'tic tac toe',
        preview: {
            image: tictac.src,
            video: vTictac
        },
        technologies: ['React', 'socket.io'],
        description: 'Tic Tac Toe online con chat hecho con Socket.io',
        deploy: 'https://francojaviergadea.github.io/Tic-Tac-Toe',
        github: '' 
    },

    {
        title: 'Cubo de rubik',
        preview: {
            image: rubik.src,
            video: vRubik
        },
        technologies: ['React', 'Three js'],
        description: 'Cubo de Rubik hecho con React y Three js',
        deploy: 'https://francojaviergadea.github.io/Cubo-de-Rubik',
        github: '' 
    },
];