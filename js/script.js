const buttomShowCommentary = document.querySelectorAll(".show-comentarios");
const containerCommentary = document.querySelectorAll (".comentarios-container");


     for (let i = 0; i < buttomShowCommentary.length; i++){
          for (let x = 0; x < containerCommentary.length; x ++){
               console.log(buttomShowCommentary[i]);
               console.log(containerCommentary[x]);
               if ( i == x ){
                    buttomShowCommentary[i].addEventListener("click", () => {
                         containerCommentary[i].style.display = "block";
                    });
               }
          }
     }
     

    