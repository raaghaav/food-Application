const spandetector = document.getElementById("span-detector");
window.addEventListener("load",function(){
    const client = ["EVERYONE","FITNESS FREAKS", "DEVELOPERS", "VEGANS"];
    typewriter(spandetector,client);
});

function typewriter(spandetector,client){
    let txt = "";
    let wordindex = 0 ;
    let isDeleting = false ;

    function typer(){
        let wait = 50;
        wordindex = wordindex % client.length ; 
        let word = client[wordindex];
        if (isDeleting == true){
            txt = word.substring(0,txt.length-1);
        }else{
            txt = word.substring(0,txt.length+1);
        } ;


        spandetector.textContent = txt;
        const largePause = 2000;


        if(isDeleting == true && txt == ""){
            wordindex++ ;
            isDeleting = false ;
         }
  
        else if(isDeleting == false && txt.length == word.length ){
            isDeleting =true ;
            wait = largePause ;
        }


        setTimeout(function(){
            typer();
        },wait);
    };


    typer();

}
