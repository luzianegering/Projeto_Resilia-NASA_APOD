//Essa página utiliza JQuery.
function nomefunction(){
  const necessario= $("button");
necessario.on("click", function(){
  $(this).data('clicked', true);
  if(necessario.data('clicked')) {
  const data= $("#istrue").val();
 const url= "https://api.nasa.gov/planetary/apod?api_key=QhO49Q7ImWWJHhb4ycrhKP6eohheNhe4vBJfP58J&date="+data;
 $.ajax({
   url: url,
    type: "get",
      dataType: "json",
        success:function(datos){
          const end= (datos.url);
          const imagem= $(".imagem").attr("src",end);
          const divp= $("#conteudo-recebido")
          const descricao= (datos.explanation);
       const texto= $("#caixinha").text(descricao);
       imagem.append(imagem);
            texto.append(texto);
            divp.addClass("bela-bordatxt");
            }
});}
});}

$(function(){
  nomefunction()
});