


export function listenUserFirstInteraction(callback = () => {}){

    let isInteracting = false;

    callback({isInteracting});

    const mouseListener = () => {
        
        if(!isInteracting){
            
            isInteracting = true;

            callback({isInteracting});
        }
    }

    const blurListener = () => {

        isInteracting = false;

        callback({isInteracting});
    }

    document.addEventListener('mousedown', mouseListener);
    window.addEventListener('blur', blurListener);

    return () => {
        document.removeEventListener('mousedown', mouseListener);
        window.removeEventListener('blur', blurListener);
    }
}