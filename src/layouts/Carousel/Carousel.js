function getTranslateX(matrix = ''){

    const [scaleX, skewX, skewY, scaleY, translateX, translateY] = matrix.replaceAll(/[^0-9\.\- ]/g, '').split(' ');

    return Number(translateX);
}

async function wait(time){

    return await new Promise((resolve) => {

        setTimeout(() => {
            
            resolve();

        }, time);
    });
}

class CustomCarousel extends HTMLElement {

    isRunning = false;
    isGrid = false;
    manual = false;

    #count = 0;
    #stop = 0;

    get stop(){
        return this.#stop;
    }

    set stop(value){
        this.#stop = value;
        this.#count = Math.abs(value / this.itemsSize);
        this.items.style.setProperty('--stop', `${value}px`);
    }

    constructor(){
        super();

        this.direction = this.getAttribute('data-direction');
        this.duration = this.getAttribute('data-duration');

        this.content = this.querySelector('.Carousel-content');
        this.items = this.querySelector('.Carousel-content-items');

        //? Number of items
        this.length = this.items.querySelector('.items').children.length;
        
        //? Setting css variables
        this.items.style.setProperty('--items-length', this.length);
        this.items.style.setProperty('--items-animation-name', this.direction);
        this.items.style.setProperty('--items-justify', this.direction === 'to-left' ? 'start' : 'end');

        //? Size and gap of items
        this.itemsGap = +this.getAttribute('data-items-gap').replaceAll(/[^0-9]/g, '');
        this.itemsWidth = +this.getAttribute('data-items-width').replaceAll(/[^0-9]/g, '');
        this.itemsSize = this.itemsWidth + this.itemsGap;
        

        //* Play button
        this.playButton = this.querySelector('.Carousel-controls .btn-play');
        
        this.playButton.addEventListener('click', () => {
            
            if(this.isRunning) this.pause();   
            
            else this.play();   
        });

        //* Grid button
        this.gridButton = this.querySelector('.Carousel-controls .btn-grid');

        this.gridButton.addEventListener('click', () => this.grid());

        //* Next button
        this.nextButton = this.querySelector('.Carousel-controls .btn-next');

        this.nextButton.addEventListener('click', () => this.next());

        //* Previous button
        this.prevButton = this.querySelector('.Carousel-controls .btn-prev');

        this.prevButton.addEventListener('click', () => this.previous());


        //Auto play      
        this.autoPlay = this.hasAttribute('data-autoPlay');

        if(this.autoPlay) this.play();
    }

    async pause(){

        this.playButton.disabled = true;

        if(!this.isRunning){

            this.playButton.disabled = false;

            return await Promise.resolve({message: 'Paused'});
        } 

        return await new Promise((resolve, reject) => {

            const itemStyles = window.getComputedStyle(this.items);

            const to = (() => {
    
                //Current transform
                const translateX = getTranslateX(itemStyles.transform);
    
                //Calculate 
                const diff = Math.abs(translateX % this.itemsSize);
    
                const to = Math.sign(translateX) * (Math.abs(translateX) + (this.itemsSize - diff));
    
                return to;
            })();
    
            const intervalID = setInterval(() => {
    
                const translateX = getTranslateX(itemStyles.transform);
    
                if(Math.abs(translateX - to) < 10){
    
                    this.items.classList.add('pause');
    
                    this.stop = to;
    
                    this.isRunning = false;
    
                    this.playButton.querySelector('i').classList.replace('bi-pause-fill', 'bi-play-fill');
    
                    this.playButton.disabled = false;

                    this.playButton.title = 'Play';

                    resolve({message: 'Paused'});

                    clearInterval(intervalID);
                }
                
            }, 10);
    
            setTimeout(() => {

                reject('Not paused');

                clearInterval(intervalID);

            }, 3000);
        });
    }
    
    play(){
        
        if(!this.items.classList.contains('animation')){

            this.items.classList.add('animation');
        }
        else {

            this.items.classList.toggle('pause', false);
        }
        
        this.stop = 0;
        this.items.style.transform = '';

        this.isRunning = true;
        this.manual = false;
        this.isGrid = false;
        
        this.playButton.querySelector('i').classList.replace('bi-play-fill', 'bi-pause-fill');
        this.playButton.title = 'Pausa';
    }

    async next(){

        this.nextButton.disabled = true;

        this.manual = true;
        
        if(this.isRunning){

            const {message} = await this.pause();
        }

        if(this.items.classList.contains('animation')){

            this.items.classList.toggle('animation', false);
            this.items.classList.toggle('pause', false);

            await wait(100);
        }

        //Next
        if(this.#count === this.length){

            this.#count = 0;

            this.items.style.transition = 'none';
            this.items.style.transform = `translateX(-${0}px)`;

            await wait(100);

            this.items.style.transition = '';
        }
    
        this.#count++;
    
        const move = this.itemsSize * this.#count * (this.direction === 'to-left' ? -1 : 1);
        
        this.items.style.transform = `translateX(${move}px)`;  

        await wait(1000);
        
        
        this.nextButton.disabled = false;
    }

    async previous(){

        this.prevButton.disabled = true;

        this.manual = true; 

        if(this.isRunning){

            const {message} = await this.pause();
        }

        if(this.items.classList.contains('animation')){

            this.items.classList.toggle('animation', false);
            this.items.classList.toggle('pause', false);

            await wait(500);
        }
    
        //Previous
        if(this.#count === 0){

            this.#count = this.length;
            
            const move = this.itemsSize * this.#count * (this.direction === 'to-left' ? -1 : 1);
            
            this.items.style.transition = 'none';
            this.items.style.transform = `translateX(${move}px)`;

            await wait(100);
            
            this.items.style.transition = '';  
        }
        
        this.#count--;

        const move = this.itemsSize * this.#count * (this.direction === 'to-left' ? -1 : 1);

        this.items.style.transform = `translateX(${move}px)`; 

        await wait(1000);
        
        
        this.prevButton.disabled = false;
    }

    grid(){
        this.isGrid = !this.isGrid;

        if(this.isGrid){
            this.items.classList.add('grid');

            this.items.classList.toggle('animation', false);
            this.items.classList.toggle('pause', false);
            
            this.stop = 0;
            this.items.style.transform = '';

            if(this.isRunning){
                this.playButton.querySelector('i').classList.replace('bi-pause-fill', 'bi-play-fill');
            }

            this.isRunning = false;
            this.manual = false;

            this.gridButton.querySelector('i').classList.replace('bi-grid', 'bi-grid-fill');
        }
        else {
            this.items.classList.toggle('grid', false);
            
            if(this.autoPlay) this.play();
            
            this.gridButton.querySelector('i').classList.replace('bi-grid-fill', 'bi-grid');
        }

        this.playButton.disabled = this.isGrid;
        this.nextButton.disabled = this.isGrid;
        this.prevButton.disabled = this.isGrid;
    }
}

customElements.define('custom-carousel', CustomCarousel);
