
function criadoCalculadora(){
    return{
       
         
        valorDaCalculadora(e){

         return   e = document.querySelector(".inputDaCalculadora")
            
        },

        clear(){
            this.valorDaCalculadora().value=" "
        },

        apagar(){
            this.valorDaCalculadora().value =  this.valorDaCalculadora().value.slice(0,-1)
          
        },

        
        resultado(){
             
            
        try{

            let conta = this.valorDaCalculadora().value
           
            if(!conta) {

                alert("Conta invalida")
            }else{
                let resultado =  this.valorDaCalculadora().value = eval(conta) 
            }

       
        }catch(e){

            alert("Conta invalida")
        }  

        },
      
        Inicia(){
          
           this.pegandoElemento()
          //    alert("Sua calculadora está funcionando")
        },

        pegandoElemento(){

            document.addEventListener("click",(e)=>{

                el = e.target
                if(el.classList.contains("button")){

                    // console.log(calculadora)
                    this.colocando(el.innerText); 
                    console.log(el)  
                }

                
               if(el.classList.contains("clear")){
                this.clear()
               }

               if(el.classList.contains("igual")){
                this.resultado()

               }

               if(el.classList.contains("apagar")){
                this.apagar()
                





           
            }
     

            });
        },

        colocando(valor){
            let novoValor
            valorDoinput = this.valorDaCalculadora(novoValor)
            valorDoinput.value+=valor

        
        }     
    
    }
}
let calculadora = criadoCalculadora()

calculadora.Inicia()
