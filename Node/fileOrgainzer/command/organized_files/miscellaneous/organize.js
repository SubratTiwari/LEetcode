const fs = require("fs"); //fs module
const path = require("path"); //path module
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath) {
  //1. to check if srcPath is present
  if (srcPath == undefined) {
    //The process.cwd() method returns the current working directory of the Node.js process.
    //console.log(srcPath); //undefined
    srcPath = process.cwd(); // cwd = current working directory 
    // console.log("source path is ",srcPath);
  }

  //2. to create a directory-> organized_files
  // let organizedFiles = srcPath + "/" + "organized_files";
  let organizedFiles = path.join(srcPath, "organized_files"); // path.join path me jo last wala path hota uska folder banata h
  console.log("organized files folder path is ", organizedFiles);
  if (fs.existsSync(organizedFiles) == false) {//organizedfiles naam ka folder exist nhi krta to ek folder bana do warna rhne do
    fs.mkdirSync(organizedFiles); // mkdirSync = make directory means make folder
  } else console.log("folder already exists");

  //3. scan the entire srcPath(doenloads folder in this case)
 
  //Reads the contents of the directory.-> basically reads the names of files present in directory
    let allFiles = fs.readdirSync(srcPath);
    // console.log(allFiles);

  //4.trvaerse over all the files and classify them on the basis of their extension (.pdf , .mp3)
    for (let i = 0; i < allFiles.length; i++){
      //let ext = path.extname(allFiles[i]).split(".")[1];
      //or
      // let ext = path.extname(allFiles[i]);
      // console.log(ext);
      //extname returns the extension of the file
      let fullPathOfFile = path.join(srcPath, allFiles[i]); //fullpatjhoffile ke andr jitne download ke andr jitne file hai unke path aa jayega + unke name ke siath me allfiles[i] use krne ke vjh se
      console.log(fullPathOfFile);
      //1. check if it is a file or folder
      // lstatsync= lstatsync gives the information regarding the link provided , ye batat hai ki filw hai ya folder h uske liye isko path dena pdata hai 
      let isThisAFile = fs.lstatSync(fullPathOfFile).isFile(); //isfile = true-> file hai to  or false-> agar folder h 
      console.log(allFiles[i] + " is " + isThisAFile);
      if (isThisAFile) {
        //1.1 get ext name
        let ext = path.extname(allFiles[i]).split(".")[1];
        // console.log(ext);
        //1.2 get folder name from extension
        let folderName = getFolderName(ext); //archives
        // console.log(folderName);
        //1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document, media etc)
                        //copy      kya copy kro    paste
        copyFileToDest(srcPath, fullPathOfFile, folderName);
      }
    }
}


function getFolderName(ext) {
  
  for (let key in types) {
    // console.log(key);
    for (let i = 0; i < types[key].length; i++) {
      if (types[key][i] == ext) {
        return key;
      }
    }
  }
  return "miscellaneous"
}

function copyFileToDest(srcPath, fullPathOfFile, folderName) {
  //1. folderName ka path banana h
  let destFolderPath = path.join(srcPath, "organized_files", folderName); //....../downloads/organized_files/archives
  // console.log(des);

  //2 check folder if exists, if it does not, then make folder
  if (!fs.existsSync(destFolderPath)) {
    fs.mkdirSync(destFolderPath);
  }
  //3. copy file from src folder to dest folder

  // Returns the last portion of a path
  let fileName = path.basename(fullPathOfFile); //abc.zip
  let destFileName = path.join(destFolderPath, fileName);    
                      // src        dest
  fs.copyFileSync(fullPathOfFile, destFileName);
  //magic
}


let srcPath="C:/Users/tsubr/OneDrive/Desktop/fgp5/Node/fileOrgainzer/command"
organize(srcPath);

// module.exports = {
//   organize:organize
// }




