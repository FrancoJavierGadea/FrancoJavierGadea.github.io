// import "@assets/sonner-styles.css";
// import "./Logros.css";

// import { useEffect, useState, useRef } from 'react';
// import { Toaster, toast } from "sonner";
// import Talos2 from "@assets/Talos2-stars.mp3";
// import { completeLogro, listenWonLogros } from '@Data/Logros/Logros';
// import { listenUserFirstInteraction } from "src/utils/detectUserInteraction";




// function Logros() {

//     const audioRef = useRef();

//     const [isInteracting, setIsInteracting] = useState(false);

//     useEffect(() => {
        
//         const clearListeners = listenUserFirstInteraction(({isInteracting}) => {

//             setIsInteracting(isInteracting);
//         });

//         return () => {

//             clearListeners();
//         }

//     }, []);

//     const [wonLogros, setWonLogros] = useState([]);

//     useEffect(() => {
        
//         listenWonLogros((logro) => {

//             console.log('Logro cumplido: ', logro);

//             setWonLogros(old => [...old, logro]);
//         });

//     }, []);


//     useEffect(() => {
 
//         if(!isInteracting) return;

//         console.log('Logros conseguidos', wonLogros.length);
        
//         if(wonLogros.length > 0){

//             audioRef.current.play();

//             wonLogros.forEach((value, i) => {
    
//                 const {name, logro} = value;
    
//                 setTimeout(() => {

//                     toast(logro.title, {

//                         description: logro.text,

//                         duration: 555000,

//                         icon: <img className="icon" src={logro.icon} />,
//                     });

//                     //complete
//                     completeLogro(name);
    
//                 }, 3000 * i + 500);
//             });

//             setWonLogros([]);
//         }
        
//     }, [wonLogros, isInteracting]);

//     return (<div>

//         <audio src={Talos2} style={{display: 'none'}} ref={audioRef}></audio>

//         <Toaster offset="20px" position="bottom-right"
        
//             toastOptions={{
//                 unstyled: true,
//                 className: 'Logro-win',
//             }}
//         />

//     </div>);
// }

// export default Logros;


