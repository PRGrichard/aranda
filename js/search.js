
//Clase Search
 //ctd = contador de paginas "paginador de scroll infinito" 
 //n_pg numero de pagina default 1
 var Search = function(url, apikey, query, nPg){

    this.url = url;
    this.apikey = apikey;
    this.query = query;   
    this.nPg = nPg;

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
          
          var $article =  $('#container')
          $article.append(html);
    }


    $.ajax({
      url: this.url,
      type: 'get',
      dataType: 'json',
      data: {api_key:  this.apikey, query:  this.query, page: this.nPg, include_adult: false},
    })
    .done(callback);
                
    }

}







 