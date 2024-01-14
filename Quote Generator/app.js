const api_url ="https://api.quotable.io/random";
const poet =document.querySelector(".poet");
const quote =document.getElementsByClassName("quote");

async function getQuote(api_url){
    const response =await fetch(api_url);
    var data =await response.json();
    document.getElementsByClassName("quote")[0].innerHTML =data.content;
    poet.innerHTML =data.author;
    console.log(data);
    
}
getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + document.getElementsByClassName("quote")[0].innerHTML +"---- by" + poet.innerHTML, "Tweet Window", "width =600", "height=300");
}

