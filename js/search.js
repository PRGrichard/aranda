
//Clase Search
 var Search = function(url, apikey, query, pg){

    this.url = url;
    this.apikey = apikey;
    this.query = query; 
    this.pg = pg;

    //Metodo que trae  las peliculas por el nombre a buscar
    Search.prototype.searchPeliculaSerie = function(){

    function listTemplate(peliculas){      
       console.log(peliculas);
       var  pelicula =  base_url = 'http://image.tmdb.org/t/p/w500/',
       thumb = base_url+peliculas.poster_path,
       title = peliculas.title,
       html = ' '

       html = Mustache.render(Templates.peliculas, {
       title: title,
        thumb : thumb
    });

    return html;
      
    }

    function callback(res) {
          
          res_pag  = res.total_pages;
          total_resul =  res.total_results;
                       
          res = res.results;
          html = ' ';

          for (var i = 0; i < res.length; i++) {             
             html += listTemplate(res[i]); 
          };
          
          (function paginar(paginas){         
            
            $(window).scroll(function(){
              if ($(window).scrollTop() == $(document).height() - $(window).height()){         
                 
                return pg += 1;                                        
              }
           });
           }(total_resul));   

          var $article =  $('#container')
          $article.html(html);
    }



    $.ajax({
      url: this.url,
      type: 'get',
      dataType: 'json',
      data: {api_key:  this.apikey, query:  this.query, pg: this.pg, include_adult: false},
    })
    .done(callback);

                
    }

}







 