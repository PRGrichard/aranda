//Class validar
Validar = function(word){
  
  this.word = word;

  Validar.prototype.retornarValidacion = function(){

      //Array controla los caracteres invalidos
      var  ctrValidar = ['@' , '#'];
      var w = this.word;
      var lengW =  this.word

      
      for (var i = 0; i < ctrValidar.length; i++) {
       
        result = w.indexOf(ctrValidar[i]);
        if (result != -1){
            return true;
        }             
     };


  }

}

