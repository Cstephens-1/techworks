const contact = document.getElementById("contact");
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");


pic1.addEventListener("click", function(){
    pic1.classList.toggle("clickedPic")
});

pic2.addEventListener("click", function(){
    pic2.classList.toggle("clickedPic")
});

pic3.addEventListener("click", function(){
    pic3.classList.toggle("clickedPic")
});

contact.addEventListener("click", function(){
    alert("email: something@somewhere.com\n123.456.7890")
});









