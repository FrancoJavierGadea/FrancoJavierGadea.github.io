

function getFileExtension(path = ''){

    const [fileExtension] = path.match(/\.[a-zA-B]*$/g) || [];
    
    return fileExtension;
}

function getFolderName(path = ''){

    return path.split('/').at(-2);
}

function getFileName(path = ''){

    return path.split('/').at(-1);
}

export async function getTechnologies(){

    const FILES = await import.meta.glob('./**/*.*');

    const DATA = Object.entries(FILES);

    const TECHNOLOGIES = await DATA.reduce(async (accp, [path, file]) => {

        const acc = await accp;

        const folder = getFolderName(path);
        const name = getFileName(path);
        const ext = getFileExtension(path);

        if(folder === '.') return acc;

        if(!acc[folder]){

            acc[folder] = {
                folder,
                content: {}
            };
        }

        //Markdown
        if(['.md', '.markdown'].includes(ext)){

            acc[folder]['content']['markdown'] = await file(); 
        }

        //Image
        if(['.webp', '.png', '.jpeg', '.jpg'].includes(ext)){

            if(name.includes('.logo')){

                acc[folder]['content']['logo'] = (await file()).default; 
            }
        }

        return acc;

    }, Promise.resolve({}));

    return TECHNOLOGIES;
}


