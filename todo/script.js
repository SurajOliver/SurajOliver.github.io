
var item1 = document.getElementById("item1");
var output = document.getElementById("output1");
var ul = document.querySelectorAll("ul");  

var onDelete = function (event){
    var button = event.target;
    button.parentElement.remove();
}

var onBack = function (event){
    var button = event.target;
    var text = button.parentElement.getAttribute('id');
    console.log(text);
    addListItem(text);
    button.parentElement.remove();

}


var onDoing = function(event){
    var button = event.target;
    var text = button.parentElement.getAttribute('id');
    console.log(text);

    addDoingListItem(text);
    button.parentElement.remove();

}

var onDone = function(event) {
    var button = event.target;
    var text = button.parentElement.getAttribute('id');
    console.log(text);

    addDoneListItem(text);
    button.parentElement.remove();
}

var createButton = function(value, function1) {
    var button = document.createElement("button");
    button.classList.add( 'ml2', 'fr');
    button.appendChild(document.createTextNode(value));
    if(function1 !== undefined){
        button.addEventListener('click', function1);
    } else {
        console.log('Function is undefined');
    }
    return button;
}

var addDoneListItem = function(value) {
    var li = document.createElement('li');
    li.setAttribute('id', value);
    li.appendChild(document.createTextNode(value));
    li.classList.add('pa3', '1h-copy', 'pv3', 'ba', 'bl-0', 'bt-0', 'b--dotted', 'b--black-30');

    ul[2].appendChild(li);
}

var addDoingListItem = function(value) {
    var li = document.createElement("li");
    li.setAttribute('id', value);
    li.appendChild(document.createTextNode(value));

    li.appendChild(createButton('DONE', onDone));
    li.appendChild(createButton('BACK', onBack));
    li.classList.add('pa3', '1h-copy', 'pv3', 'ba', 'bl-0', 'bt-0', 'b--dotted', 'b--black-30');

    ul[1].appendChild(li);

}

var addListItem = function(value) {
    var li = document.createElement("li");
    li.setAttribute('id', value);

    var textel = document.createTextNode(value);
    li.appendChild(textel);
    li.appendChild(createButton('DO', onDoing));
    li.appendChild(createButton('x', onDelete));

    li.classList.add('pa3', '1h-copy', 'pv3', 'ba', 'bl-0', 'bt-0', 'b--dotted', 'b--black-30');
    // lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30
    // li.classList.add('ph3', 'pv2', 'bb', 'b--light-sliver');

    ul[0].appendChild(li);

}


var addItem = function() {
    // alert(event.target);
    if(String(item1.value).length > 0){
        addListItem(item1.value);
        item1.value = "";
    }
        
}

addListItem( "Complete Todo App");
addListItem( "Test Todo App");

// addDoingListItem("Workng on Todo App");

