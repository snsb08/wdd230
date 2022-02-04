const favchap = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    let chap = favchap.value;
    favchap.value =``;
    
    let li = document.createElement('li');
    let text= document.createElement('span');
    let delButton = document.createElement('button');

    li.appendChild(text);
    text.textContent = chap;
    li.appendChild(delButton);
    delButton.textContent = '❌';
    list.appendChild(li);


    delButton.onclick = function(e) {
        list.removeChild(li);
    }

    favchap.focus();

});