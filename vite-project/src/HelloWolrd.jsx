export default function HelloWorld() {
   
   const lista = [{
    name: "THOMAS",
    idade: 17,
   escola: "senai"
   },
   {

    name: "Maria",
    idade: 18,
   escola: "senai"
    
   },
   {

    name: "Renato",
    idade: 16,
   escola: "senai"
    
   } 
   ];

   const MapPessoas = ({pessoas}) => {
    return pessoas.map((ps,index) =>
     <div key = {index}>
        <h1>{ps.name}</h1>
        <h1>{ps.idade}</h1>
        <h1>{ps.escola}</h1>
     </div>
    )
   }
    

   

  

    return(
        <>
         <MapPessoas pessoas = {lista}/>
        </>
    )

   


}