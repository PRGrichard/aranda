$(document).on('ready', function(){

    

    //Evitar que el formulario se valla por submit 
    function stopRKey(evt) {
        var evt = (evt) ? evt : ((event) ? event : null);
        var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
        if ((evt.keyCode == 13) && (node.type=="text")) {return false;}
    }
    document.onkeypress = stopRKey; 


    //Mostrar div inpur de busqueda
    (function showSearc(){
        var $target  = $('#target-search');
        var $showDiv = $('#search-input')

        $($target).on('click', function(){
             $($showDiv).show();
        }); 

    }());
 
         
    (function InicialIzaBuqueda(word){
        var $divWord = $('#target-s');

        function limpia(){
          $( "#container" ).empty();
          $("target-s input ").empty();
          $('#alert-data').css('visibility', 'hidden');
          var c = 1;
        };

        $($divWord).on('keyup', function(){
            query = $('#target-s input').val();
            //incio de pagina en 1 de nuevo;
            c = 1;
            ojbWord = new Validar(query);
            
            //validando que la quiery no se valla vacia 
            if (ojbWord.word.length == 0){
                query = '//';
            }

             (function inicializarObjeto(){
                limpia();
                //Inicializando el OBjeto de la consulta 
                objSP = new Search('http://api.themoviedb.org/3/search/tv', 'a6f2f098a83113aa672bd04867dba148', query, c);
                series = objSP.searchPeliculaSerie();
                          
            }());    

           
        })
        }());  
              
    
        //paginado de 20 por pagina
          $(window).scroll(function(){
           if(typeof res_pag != 'undefined'){
            if ($(window).scrollTop() == $(document).height()  - $(window).height()){
                c += 1; 
                console.log(c);       
                if(c <= res_pag){
                    objSP = new Search('http://api.themoviedb.org/3/search/tv', 'a6f2f098a83113aa672bd04867dba148', query, c);
                    series = objSP.searchPeliculaSerie();                    
                }      
              }
            }       
           });

    })