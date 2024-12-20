// let diem = +prompt("Nhap diem")
//
// if (diem >=85) {
//     console.log("loai A")
// }
// else if (diem >= 75 && diem < 85){
//     console.log("loai B")
// }
// else if (diem >= 55 && diem < 75){
//     console.log("loai C")
// }
// else if (diem >= 45 && diem < 55){
//     console.log("loai D")
// }
// else {
//     console.log("loai E")
// }

// let ten = prompt("what is the official name of Javascript")
//
// if (ten == 'ECMAScript' ) {
//     console.log("right")
// }
// else {
//     console.log("you dont know ECMAScript!")
// }

//
// let userName = prompt("What is your name?");
// if (userName == "Admin") {
//     let pass = prompt("What is your password?");
//     if (pass == "Themaster") {
//         alert("welcome");
//     }
//     else if (pass == 'null') {
//         alert("cancled")
//     }
//     else {
//         alert("wrong password");
//     }
// // }
// else if (userName == 'null') {
//     alert("cancled")
// }
// else {
//     alert("i dont know you");
// }


function checkleapyear() {
    let year = parseInt(document.getElementById("year").value);
    let result  = document.getElementById("result");


    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById("result").innerHTML = year + " là năm nhuận.";
    }
    else {
        document.getElementById("result").innerHTML = year + " không phải là năm nhuận.";
    }
}

// function checkleapyear() {
//     let year = parseInt(document.getElementById('year').value);
//     let result = document.getElementById('result');
//
//     if ((year % 4 === 0 && year % 100 != 0) || (year % 400 == 0)) {
//         document.getElementById('result').innerHTML = year + " la nam nhuan";
//     }
//     else {
//         document.getElementById('result').innerHTML = year + " khong phai nam nhuan";
//     }
// }