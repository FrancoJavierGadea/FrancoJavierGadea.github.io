import { THEMES } from "./Themes";


class ThemeChaining {

    static instance = null;
    
    static getIntance(){
        
        if(!this.instance){
            
            this.instance = new ThemeChaining;
        }
        
        return this.instance;
    }
    
    listeners = new Set();

    constructor(){

        this.observer = new MutationObserver((e) => {

            const [entry] = e;

            if(entry.attributeName === 'theme'){

                const name = entry.target.getAttribute(entry.attributeName);

                const theme = Object.values(THEMES).find((theme) => {

                    return theme.name === name;
                });

                this.listeners.forEach(cb => cb(theme));
            }

        });

        this.observer.observe(document.documentElement, {attributes: true});  
    }

    listen(callback = () => {}){

        this.listeners.add(callback);
    }

    close(){
        this.observer.disconnect();
    }
}

export function changeTheme(name){

    const theme = Object.values(THEMES).find((theme) => {

        return theme.name === name;
    });

    document.documentElement.setAttribute('theme', theme.name);
    document.documentElement.setAttribute('data-bs-theme', theme.bs);
}

export default ThemeChaining.getIntance();