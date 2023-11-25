

function getFileExtension(path = ''){

    const [fileExtension] = path.match(/\.[a-zA-B].*$/g) || [];
    
    return fileExtension;
}

function getFolderName(path = ''){

    return path.split('/').at(-2);
}

function getFileName(path = ''){

    return path.split('/').at(-1);
}

export async function getProjects(){

    const FILES = await import.meta.glob('./**/*.*');

    const DATA = Object.entries(FILES)

    const PROJECTS = await DATA.reduce(async (accp, [path, file]) => {

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
        if(['.webp', '.png', 'jpeg', 'jpg'].includes(ext)){

            if(name.split('.')[0] === 'favicon'){

                acc[folder]['content']['favicon'] = (await file()).default; 
            }
            else {

                acc[folder]['content']['image'] = (await file()).default; 
            }

        }

        //Video
        if(['.webm', '.mp4'].includes(ext)){

            acc[folder]['content']['video'] = (await file()).default; 
        }

        return acc;

    }, Promise.resolve({}));

    return PROJECTS;
}


