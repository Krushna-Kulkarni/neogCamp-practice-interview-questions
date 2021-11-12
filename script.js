var inputOne = document.querySelector("#input1");
var inputTwo = document.querySelector("#input2");
var btnAdd = document.querySelector("#btn-add");
var btnsubtract = document.querySelector("#btn-subtract");
var btnmultiply = document.querySelector("#btn-multiply");
var btndivide= document.querySelector("#btn-divide");
var outputEl = document.querySelector("#output");



btnAdd.addEventListener("click",() =>{
    var result = Number(inputOne.value) + Number(inputTwo.value);
    outputEl.innerText = result;
});

btnsubtract.addEventListener("click",() =>{
    var result = Number(inputOne.value) - Number(inputTwo.value);
    outputEl.innerText = result;
})

btnmultiply.addEventListener("click",() =>{
    var result = Number(inputOne.value) * Number(inputTwo.value);
    outputEl.innerText = result;
})

btndivide.addEventListener("click",() =>{
    var result = Number(inputOne.value) / Number(inputTwo.value);
    outputEl.innerText = result;
})