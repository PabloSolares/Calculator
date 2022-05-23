// class Display {
//     constructor(displayAfterValue, displayValueCurrent){
//         this.displayAfterValue = displayAfterValue;
//         this.displayValueCurrent = displayValueCurrent;
//         this.tipoOperacion = undefined;
//         this.calculator = new Calculadora();
//         this.valorActual = '';
//         this.valorAnterior = '';

//     }

//     borrar(){
//         this.valorActual = this.valorActual.toString().slice(0,-1);
//     }

//     computar(tipo){
//         this.tipoOperacion !== 'igual' && this.calcular();
//         this.tipoOperacion = tipo;
//         this.valorAnterior = this.valorActual || this.valorAnterior;
//         this.valorActual = '';
//     }
//     addNumber(numero){
//         if(numero == '.' && this.valorActual.includes('.')) return 
//         this.valorActual = this.valorActual.toString() + numero.toString();
//         this.printValue();
//     }

//     printValue(){
//         this.displayAfterValue.textContent = this.valorAnterior;
//         this.displayValueCurrent.textContent = this.valorActual;
//     }

//     calcular(){
//         const valorAnterior = parseFloat( this.valorAnterior);
//         const valorActual = parseFloat( this.valorAnterior);

//         if(isNaN(valorActual)  || isNaN(valorAnterior)) return 

//         this.valorActual = this.calculator[this.tipoOperacion](valorAnterior,valorActual)

//     }
    
    
// }