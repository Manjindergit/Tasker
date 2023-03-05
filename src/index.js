import './style.css';
const addBTn=document.getElementsByClassName('btn-add');
console.log('objejct');
addBTn.onClick=function(){
    console.log('objecst');
    document.getElementsByClassName('.modal').style.display='block';
}
console.log(addBTn);

const div=document.createElement('div');
const h1=document.createElement('h1');
h1.innerHTML='Hello World';
div.appendChild(h1);
document.body.appendChild(div);