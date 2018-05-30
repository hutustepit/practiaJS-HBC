var adButton = document.querySelector("#but1");
var input = document.querySelector("#inputText");
//if( input.value !== ""){

var tempText;
var canEdit = true;       
adButton.addEventListener("click", AddItem);
//}

function AddItem()
{
    if(input.value !== ""){
    //var input = document.querySelector("#inputText");
    var returnedText = input.value;
    //console.log("am scris " + returnedText);

    var items = document.querySelector("#shopingList");
    var item = document.createElement("li");
    item.textContent = returnedText;
    items.appendChild(item);

    var localButton = document.createElement("button");
    localButton.setAttribute("id", "localButton");
    localButton.textContent = "Delete";
    item.appendChild(localButton);
    localButton.addEventListener("click", DeleteElement);
    input.value = "";
    
    var localButton = document.createElement("button");
    localButton.setAttribute("id", "localButton");
    localButton.textContent = "Edit";
    item.appendChild(localButton);
    localButton.addEventListener("click",EditElement);
    canEdit = true;
    }
        

    //alert(returnedText);
}

function DeleteElement(){
    var parent = this.parentNode;
    parent.parentNode.removeChild(parent);
    console.log("deleted");
}

function EditElement(){
 //asigura ca nu se apasa de mai multe ori pe buton
 if(canEdit){
    var parent = this.parentNode;
    var input = document.createElement("input");
    console.log(parent.firstChild);
    //stochez intr-o variabila globala textul primului element din lista(de tip text)
    tempText = parent.firstChild.textContent;
    console.log(tempText);
    //dezactivez primul element
    parent.firstChild.textContent = "";
    //adaug eventListenerul pe html elementul Input
    input.addEventListener("keyup", keyCheck);
    //inserez elementul nou creat (inputul)
    input.insertBefore(input, input.firstChild);
    //se atribuie tagului value al elemetului input valoarea stocata a "var tempText"
    input.value = tempText; 
    canEdit = false;

 }

}