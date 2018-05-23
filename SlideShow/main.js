var images = [
    { "src": "img/img1.jpg", "alt": "1 Nature" },
    { "src": "img/img2.jpg", "alt": "2 Fjords" }, 
    { "src": "img/img3.jpg", "alt": "3 Mountains" },
    { "src": "img/img4.jpg", "alt": "4 Lights" }
];

var mainIndex = 0;
var nextButton = document.querySelector("#inainte");
var previousButton = document.querySelector("#inapoi");
var image = document.querySelector("#slide");
//window.addEventListener("load",showImage(index));
//sau
window.onload = showImage(mainIndex);
window.onload = CreateBubble();

nextButton.addEventListener("click", function(){nextPreviousImage(++mainIndex)});
previousButton.addEventListener("click", function(){nextPreviousImage(--mainIndex)});

// for(var i = 0; i < images.length; i++)
// {
//     console.log(images[i].alt);
//     console.log(images[i].src);
// }

function nextPreviousImage(localIndex){
    if(localIndex === images.length){
        localIndex = 0;        
    } else if(localIndex === -1){
        localIndex = images.length -1;
    }
    mainIndex = localIndex;
    showImage(mainIndex);

    // if(localIndex == images.length-1){
    //     //nextButton.style.display = "none";
    //     nextButton.hidden = true;
    // } else{
    //     //nextButton.style.display = "initial";
    //     nextButton.hidden = false;
    // }
    // if(localIndex === 0){
    //     //previousButton.style.display = "none";
    //      previousButton.hidden = true;
    //  } else{
    //      //previousButton.style.display = "initial";
    //      previousButton.hidden = false;
    //  }
}

function showImage(index){
    var src = images[index].src;
    var alt = images[index].alt;
    image.src = src;
    image.alt = alt;
}

function showNextImage(index){
    if(index == 3){
        index = 0;
        console.log(mainIndex);
    } else{
        index++;
        console.log(mainIndex);
    }
    mainIndex = index;
    showImage(mainIndex);
}

function showPreviousImage()
{
    if(mainIndex == 0){
        mainIndex = 3;
        console.log(mainIndex);
    } else{
        mainIndex--;
        console.log(mainIndex);
    }
    showImage(mainIndex);
}

function CreateBubble(){
    var bubbleContainer = document.querySelector(".meniu");
    for(var i=0; i < images.length; i++){
        var bubble = document.createElement("span");
        //bubble.addEventListener("click", function(){SetBubble(i)}); //cu let in loc de var in for
        bubble.addEventListener("click", makeBubbleCall(i));
        bubble.setAttribute("class", "biluta");
        bubble.setAttribute("id","biluta"+(i+1).toString());
        bubbleContainer.appendChild(bubble);
    }
}

function SetBubble(index){
    mainIndex = index;
    showImage(mainIndex);
}

//factory function
function makeBubbleCall(localIndex){
    return function(){ showImage(localIndex) } 
}

//this + prototype
//functii closures
//asincronicitate