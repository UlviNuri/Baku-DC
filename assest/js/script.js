// document.getElementById("email"). addEventListener("blur", ValidateEmail)
// function ValidateEmail(e){
//     e.preventDefaulte
//     const email=document.getElementById("email")
//     const error=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     if(!error.test(email.value) || email==""){
//         email.classList.add("is-invalid")
//     }
//     else{
//         email.classList.remove("is-invalid")

//     }
// }



document.getElementById("number"). addEventListener("blur", ValidateNumber)
function ValidateNumber(e){
    e.preventDefaulte
    const email=document.getElementById("email")
    const error=/^[+-]?(?=.)(?:\d+,)*\d*(?:\.\d+)?$/
    if(!error.test(Number.value) || Number==""){
        Number.classList.add("is-invalid")
    }
    else{
        Number.classList.remove("nomre daxil et")

    }
}




