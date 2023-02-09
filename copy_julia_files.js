import inquirer from 'inquirer'
import {join, resolve} from 'path'
import {copyFile, readdir} from 'fs/promises'
const {prompt} = inquirer

const folder = "C:\\Users\\mmogi\\Dropbox\\KFUPMWork\\Teaching\\OldSemesters\\Sem222\\MATH102\\lessons\\frontend";
const copy_files =  async () => {
    try {
        const IsFolderCorrect = await prompt([{
            type: "confirm",
            name: "Folder",
            message: `Is this '${folder}' the correct Folder?`
        }])
        if (IsFolderCorrect.Folder){
            const files = await readdir(folder);
            const choisen_files= await prompt([{
                type: "checkbox",
                name: "Files",
                message: `Choose files to copy`,
                choices: files
            }])
            if (choisen_files.Files.length>0){
                await Promise.all(choisen_files.Files.map(async f=>(await copyFile(`${folder}/${f}`,resolve("./static",f)))))
            }
        }
    } catch (error) {
        console.log(error)
    }
}

copy_files()