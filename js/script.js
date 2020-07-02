$(document).ready(
  function() {
    //avvia funzione al click sul bottone "Aggiungi"
    $(".add").click(function(){
      addElement();
    });

    //avvia funzione alla pressione del tasto invio (13) sull'input
    $(".input").keyup(function(){
      if (event.which === 13){
        addElement();
      }
    });

    //avvia funzione al click sul bottone "X" (cancella)
    $(document).on("click", ".delete", function(){
      $(this).parent().remove();
    });

    //avvia funzione al doppio click sul bottone "Elimina tutto"
    $(".delete-all").dblclick(function(){
      $(".todo-list").html("");
    });
  }
);

//FUNZIONE aggiunta elemento
function addElement(){
  var todoElemento = $(".input").val();
  if (todoElemento != ""){
    $(".todo-list").append("<li>" + todoElemento + " " + '<button type="button" name="button" class="delete">X</button>');
    $(".input").val("");
  }
}
