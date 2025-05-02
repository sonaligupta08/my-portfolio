function nextclick() {
    window.location.href = "next.html";
}

function connecting() {
   document.getElementById('contain').style.display = "flex";
}

function closeModal(){
    document.getElementById('contain').style.display = "none";
}

function showthankyou(){
    setTimeout(() => {
        document.getElementById('contain').style.display = "none";
        document.getElementById('thankyou').style.display = "block";
    },500);  //500 means 0.5 sec it will wait for
}
