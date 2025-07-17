let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let LowerCase = document.getElementById("LowerCase");
let UpperCase = document.getElementById("UpperCase");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let genBtn = document.getElementById("genBtn");
let copy = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value ;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value ;
})

genBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
})

let low = "abcdefghijklmnopqrstuvwxyz";
let upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "0123456789";
let sym = "!@#$%^&*()-_=+";


function generatePassword(){

    let all = "";

    all += LowerCase.checked ? low : "";
    all += UpperCase.checked ? upp : "";
    all += Numbers.checked ? num : "";
    all += Symbols.checked ? sym : "";

    if(all == "" || all.length == 0){
        return all;
    }

    let pass = "";
    let i = 1;
    while(i<=inputSlider.value){
        let cur =  all.charAt(Math.floor(Math.random()*all.length));
        pass += cur;
        i++;
    }
    return pass;
};

copy.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copy.innerText = "check";

        setTimeout(()=>{
            copy.innerHTML = "content_copy";
        },2000);
    }
});
