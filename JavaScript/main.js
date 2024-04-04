$(document).ready(function(){

    //SLIDER
  $('.bxslider').bxSlider({
   mode: 'fade',
   captions: true,
   slideWidth: 1300,
   responsive: true,
   pager:true,
   mode:'horizontal'
   });
  
    //POSTS
    let posts = [
        {title:"Prueba de titulo 1",
         date: "Publicado el " +moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"), 
         content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {title:"Prueba de titulo 2",
        date:"Publicado el " +moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),  
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
        {title:"Prueba de titulo 3",
        date: "Publicado el " +moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"), 
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
        {title:"Prueba de titulo 4",
        date: "Publicado el " +moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),  
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    ]

 posts.forEach((elemento,index) => {
    let post = `
    <article class="post">
    <h2>${elemento.title}</h2>
    <span class="fecha">${elemento.date}</span>
    <p>${elemento.content}</p>
    <a href="#" class="button-mas">Leer mas<i class="fa-solid fa-arrow-down"></i></a>
    </article>
    `;
    
    $("#posts").append(post)
});



 ///CAMBIAR de TEMAS
 const CSSPrincipal= $("#temaCSS");

 const pastel= $("#pastel");
 const nocturno = $("#nocturno");


pastel.click(function(){
   
    CSSPrincipal.attr("href", "CSS/pastel.css")
  });

nocturno.click(function(){
    
    CSSPrincipal.attr("href","CSS/nocturno.css")
});


  //scroll arriba
  $(".subir").click(function(e){
    e.preventDefault();
    return false
  });

$("#foter").click(function(){
    $("html,body").animate({
        scrollTop:0
    },700)

});

  ///Login falso

$("#login form").submit(function(e){
    e.preventDefault();
    

   let form_name = $("#form_nombre").val();
   localStorage.setItem("NombreDeUsuario", form_name);
   
   if (form_name != null && form_name != "undefined"){
    $("#about p").html("<hr><strong>Bienvenido, "+form_name+"</strong>");
    $("#login").hide();
   }
   






   
});



    
 


















});