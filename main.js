
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function playPause() {
    var audio = document.getElementById("audioFile");
    //var icon = document.getElementById("myIcon");
    if (audio.paused && document.getElementById("myIcon").className.match(/(?:^|\s)fa-solid fa-play my-float(?!\S)/)){
        audio.play(); 
        document.getElementById("myIcon").className = "fa-solid fa-pause my-float";
    }else{ 
        audio.pause();
        document.getElementById("myIcon").className = "fa-solid fa-play my-float";
    }
}

function verifyDate(){
    var date = document.getElementById("date").value;
    var val = document.getElementById("error");
    if(date === "05-03-22"){
        window.location.href = "./Main.html";
    }else{
        val.innerHTML ="Wrong Date";
    }
}