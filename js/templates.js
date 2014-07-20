var Templates = {};

Templates.peliculas = [
   
    '<article>',
        '<figure>',
               '<img src="{{ thumb }}" />',
         '</figure>',
         '<div  class="title">',
            '<a href="#"> <h2>{{ title }}</h2></a>',
          '</div>',
    '</article>'
                                   
].join("\n");