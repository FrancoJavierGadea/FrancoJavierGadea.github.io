// import { persistentMap } from '@nanostores/persistent';
// import { RecurrenteLogro } from "./Recurrente.js"
// import { ClickomanoLogro } from './Clickomano.js';
// import { ExploradorLogro } from './Explorador.js';


// const initialValue = {

//     [ExploradorLogro.name]: ExploradorLogro.logro,

//     [ClickomanoLogro.name]: ClickomanoLogro.logro,

//     [RecurrenteLogro.name]: RecurrenteLogro.logro
// }

// //STORE
// export const LogrosStore = persistentMap('logro:', initialValue, {

//     encode: (value) => {

//         return JSON.stringify(value);
//     },

//     decode: (value) => {
//         try {
//             return JSON.parse(value);
//         }
//         catch(err) {
//             return value;
//         }
//     }
// });

// export function listenWonLogros(callback = () => {}){

//     return LogrosStore.subscribe((store, key) => {

//         Object.entries(store).forEach(([name, logro]) => {

//             if(!logro.win && !logro.complete){

//                 callback({name, logro});
//             }
//         });
//     });
// }

// export function updateLogro(name, updateFn = () => {}){

//     let logro = LogrosStore.get()[name];

//     if(logro.complete) return;

//     //Actualizar logro
//     logro = updateFn(logro);

//     //Comprobar si se ha cumplido
//     logro.win = Object.values(logro.conditions).every(condition => condition);
    
//     LogrosStore.setKey(name, {...logro});
// }

// export function completeLogro(name){

//     const logro = LogrosStore.get()[name];

//     logro.complete = true;

//     LogrosStore.setKey(name, {...logro});
// }

// export function resetLogros(){

//     LogrosStore.set(initialValue);
// }

// window.resetLogros = resetLogros;

// //------------------------------------------------
// export function updateLogroClickomano(){
    
//     const listener = () => {

// 		updateLogro(ClickomanoLogro.name, ClickomanoLogro.update);
// 	};

//     document.addEventListener('click', listener);
// }

// export function updateLogroRecurrente(){

//     updateLogro(RecurrenteLogro.name, RecurrenteLogro.update);
// }

// export function updateLogroExplorador(projectTitle){

//     updateLogro(ExploradorLogro.name, ExploradorLogro.update(projectTitle));
// }