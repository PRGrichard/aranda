var Templates = {};

Templates.series = [
   
    '<article>',
        '<figure>',
               '<img src="{{ thumb }}" />',
         '</figure>',
         '<div  class="title">',
            '<a href="#"> <h2>{{ name }}</h2></a>',
          '</div>',
    '</article>'
                                   
].join("\n");