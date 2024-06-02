function carInformation(manufacturer:string,model:string,number?:number):{manufacturer:string,model:string,number?:number}{

    return{
     manufacturer:manufacturer,
     model:model,
     number:number
   }
   
 }
 let car1=carInformation( "Ford", "Fiesta" );
 let car2=carInformation( "BMW", "weis",668 ); 
 console.log(car1);
 console.log(car2);