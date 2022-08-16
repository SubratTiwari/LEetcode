function outer(){
    inner (); 
    function inner(){
        console.log(b);
    }
}
var b=10;
 outer();
 console.log(b);


 /* scope: where w can this variables / fun be accesed  in the code or
 is vAariable /fun inside the scope of code /fun */





 /*const groceries = ['banana', 'apple', 'peanuts'];

 if (groceries.indexOf('banana')) {
 console.log('We have to buy bananas!');
 } else {
 console.log(`We don't have to buy bananas!`);
 }







 var num = 8;
 var num = 10;
 
 console.log(num);*/