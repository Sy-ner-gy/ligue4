
//TESTES
$("#close").on("click",e=>{$("#close").parentNode.toggle("close")})
$("#btn-teste").on("click",e=>{ $("#close").parentNode.toggle("close")})
//-----------------------------------------------------

//Redimensionameto do tabuleiro
window.onload=e=>{
    let col = $(".area-player-box")[0]
    $("#game-table-box").style.height=`${col.offsetHeight}px`
}
on('resize',e=>{
    let col = document.querySelector(".area-player-box")
    $("#game-table-box").style.height=`${col.offsetHeight}px`
})