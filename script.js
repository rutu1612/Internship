'use strict'

const btn1 = document.querySelectorAll('.button');
const header_box = document.querySelector('.header-box');
const res= document.querySelector('.res');
const clear_box = document.querySelector('.clear-box');


/*btn1.addEventListener('click',(e)=>{
    console.log(e.target.textContent);
    header_box.innerText +=e.target.textContent;
});*/

btn1.forEach(b1=>{
    b1.addEventListener('click',(e)=>{
        header_box.innerText +=e.target.textContent;
    })
});

res.addEventListener('click',()=>{
    let ans=eval(header_box.innerText);
    header_box.textContent=' ';
    header_box.textContent=ans;
});

clear_box.addEventListener('click',()=>{
    header_box.textContent=' ';
})