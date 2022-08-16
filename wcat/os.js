 const os = require("os");
// //returing the underlying architecher 
let mySystemArch = os.arch();
console.log(mySystemArch);


 // // return information on the cpus
 let myCpuInfo = os.cpus();
 //console.log(myCpuInfo);

 // REtirns the host name of the operating system as a string 

 let hostName = os.hostname();
 //console.log(hostName);

 let networkInfo = os.networkInterfaces();
 //console.log(networkInfo);


 // return the operating system as a string 
 console.log(os.release());

// // return the platerform nodejs was compilwed
// console.log(os.platform());

// // return the operating system 
// console.log(os.type());

// // return the amount  of system memory in bytes AS A integern
// console.log(os.totalmem());

// // return the system uptime in the secods 
// let uptimeInHours = os.uptime()/3600;
// console.log(uptimeInHours);


// console.log(os.userInfo);  



