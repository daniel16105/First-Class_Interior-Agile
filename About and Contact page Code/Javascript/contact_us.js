var title = document.getElementById('contact_title');
function changeTitle(){
    if(title.style.color == "black"){
        title.style.color="#fb8c44";
        title.style.fontSize="50px";
    }
    else{
        title.style.color="black";
        title.style.fontSize="34px";
    } 
}

var contact = document.getElementById('contact_info');
function moveRight(){
    if(contact.style.textAlign == "center"){
        contact.style.textAlign="right";
    } else {
        contact.style.textAlign="center";
    }
}