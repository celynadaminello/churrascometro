// Carne - 400g por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refrigerante/Água- 1000ml por pessoa + de 6 horas - 1500ml
// crianças valem por 0,5

const inputAdult1 = document.getElementsByTagName("input")[0]; //alcool
const inputAdult2 = document.getElementsByTagName("input")[1];   //sem alcool
const inputKids = document.getElementsByTagName("input")[2];
const inputHours = document.getElementsByTagName("input")[3];
const elementSend = document.getElementsByTagName("button")[0];
const resultCalc = document.getElementById("result")

elementSend.setAttribute("onclick", "calc()")

    function calc(){

        let adultAlc = inputAdult1.value;
        let adultN = inputAdult2.value;
        let kids = inputKids.value;
        let hours = inputHours.value;

        let meat = (650*adultAlc) + (650*adultN) + (325*kids);
        let beer = (2000*adultAlc);
        let soda = (1500*adultN) + (750*kids);

        if (hours >= 6) {
            
            meat
            beer
            soda

        }
        else{
             meat = (400*adultAlc) + (400*adultN) + (200*kids);
             beer = (1200*adultAlc);
             soda = (1000*adultN) + (500*kids);
           
        }

        resultCalc.innerHTML = `<p> 🍖${meat / 1000} Kg de Carne </p>`
        resultCalc.innerHTML += `<p> 🍺${Math.ceil(beer / 355)} Latinhas de Cerveja </p>`
        resultCalc.innerHTML += `<p> 🍾${Math.ceil(soda / 2000)} Garrafas(2L) de Bebida </p>`


        console.log(meat);
        console.log(beer);
        console.log(soda);

    }

   

        
    