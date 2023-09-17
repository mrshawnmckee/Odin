// console.log(window);
// console.log(document.links[0]) 

const headLink = document.getElementById('me')
headLink.innerText = "hello"

const changeThis = document.getElementsByClassName('textUnder')
for(let i = 0; i < changeThis.length; i++){
    changeThis[i].innerText = "hello"
}

document.querySelector('.hero').innerText= "I just changed this"