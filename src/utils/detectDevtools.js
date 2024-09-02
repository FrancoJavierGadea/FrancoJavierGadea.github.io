

export function detectDevtoolsOpen(){

    return new Promise((resolve, reject) => {

        const intervalID = setInterval(() => {

            const t0 = Date.now();
            debugger;
            const t1 = Date.now();

            if(t0 !== t1){

                resolve();
                clearInterval(intervalID);
            }
            
        }, 1000);
    });
}
