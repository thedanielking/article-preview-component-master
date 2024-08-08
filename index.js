// first button
const button = document.querySelector("#buttonOpen");
let clickState = 0;
button.addEventListener('click', function(){
    const share = document.getElementById("sharing");

    clickState++;

    if(clickState == 1){
        share.style.display = "block";
    } else if(clickState == 2){
        share.style.display = "none";
        clickState = 0;
    }

    
    
    

})


// second button
const btn = document.querySelector("#buttonClose")
btn.addEventListener("click", function(){
    const close = document.getElementById("sharing");

    close.style.display = "none";
})




// function close(){
//     const share = document.querySelector(".share-container");
//     if(share.style.display = "block"){
//         share.style,display = "none";
//     }else{
//         share.style.display = "block";
//     }
// }

// const btn = document.querySelectorAll("button");
// button.addEventListener("click", close());


// const btn = document.querySelector("#buttonClose");
// btn.addEventListener("onclick", close());

// function close(){
//     const share = document.querySelector(".share-container");
//     share.style.display = "none";
// }

// const button = document.querySelector("#buttonOpen");

// button.onclick = open();