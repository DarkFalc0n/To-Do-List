function showInput(){
    var inputwrapper = document.getElementById("input");
    var mainwrapper = document.getElementById("main-wrapper");
    inputwrapper.classList.add("show");
    mainwrapper.classList.add("blur");
}


function hideInput(){
    var inputwrapper = document.getElementById("input");
    var mainwrapper = document.getElementById("main-wrapper");
    inputwrapper.classList.remove("show");
    mainwrapper.classList.remove("blur");
}


var enterButton = document.getElementById("input-button");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


function inputLength(){
	return input.value.length;
}


function listLength(){
	return item.length;
}


function createListElement() {
	var li = document.createElement("li");
    var dBtn = document.createElement("button");
    dBtn.classList.add("new-button");
    dBtn.innerHTML = `<i class="fa fa-close"></i>`;
    li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
    var work = document.createElement("p")
    work.classList.add("work");
    work.appendChild(document.createTextNode(input.value));
    li.appendChild(work);    
    ul.appendChild(li);
    input.value = ""

    function deleteListItem(){
		li.classList.add("delete")
	}
	
}


function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
        hideInput();
	}
}


function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) {
		createListElement();
        hideInput();
	} 
}

console.log(input);
input.addEventListener("Keyboard", addListAfterKeypress);
