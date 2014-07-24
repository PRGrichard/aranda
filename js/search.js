
//Clase Search
 //ctd = contador de paginas "paginador de scroll infinito" 
 //n_pg numero de pagina default 1
 var Search = function(url, apikey, query, nPg, total_pages){

    this.url = url;
    this.apikey = apikey;
    this.query = query;   
    this.nPg = nPg;


    //Metodo que trae  las peliculas por el nombre a buscar
    Search.prototype.searchPeliculaSerie = function(){

    function listTemplate(peliculas){      
       var base_url = 'http://image.tmdb.org/t/p/w500/';

       if(peliculas.poster_path == null){
          thumb = 'img/no_image.jpg';
       }else{
          thumb = base_url+peliculas.poster_path;
       }
    
       var  pelicula =  base_url = 'http://image.tmdb.org/t/p/w500/',
       name = peliculas.name,
       thumb = thumb,
       html = ' '

       html = Mustache.render(Templates.series, {
       name: name,
       thumb : thumb
    });

    return html;
      
    }

    function callback(res) {
          res_pag  = res.total_pages;
          total_resul =  res.total_results;

          //conprovando la validación  si el objeto esta vacio o hay resultados en la búsqueda
          if(total_resul === 0){
               var article =  $('#container')                                     
               $('#alert-data').css('visibility', 'visible');
               $('#alert-data').html( "<p>No hay resultados</em></p>" );
          }

           validacion = ojbWord.retornarValidacion();

            //conprovando la validación  de caracteres
            if(ojbWord.retornarValidacion()  === true){
                var article =  $('#container')                                     
              $('#alert-data').css('visibility', 'visible');
              $('#alert-data').html( "<p>Caracter Inválido</em></p>" );      
            }
                       
          res = res.results;
          html = ' ';

          for (var i = 0; i < res.length; i++) {             
             html += listTemplate(res[i]); 
          };
          
          var $article =  $('#container')
          $article.append(html);
    }

    $.ajax({
      url: this.url,
      type: 'get',
      dataType: 'json',
      data: {api_key:  this.apikey, query:  this.query, page: this.nPg, include_adult: false},
      success: callback, 
    })
    .fail(function() {
       var article =  $('#container')                                     
          $('#alert-data').css('visibility', 'visible');
          $('#alert-data').html( "<p>Error en el server</em></p>" );    
    });
                
    }

}







 