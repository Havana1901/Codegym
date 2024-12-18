
// age = 29;
// console.log(age);
//
// let x = 15,
//     y=20,
//     z= x+ y;
// console.log(z)
//
// let fullName= 'Ha Van An'
// console.log(fullName)
//
// let x = 10;
// x /= 2;
// console.log(x);
//
// let width = 20
// let height = 10
// let area = width * height
// document.write('Area = ' + area)

// let x ='1',
//     y = 2 ,
//     z = 4;
// let u = 8;
// console.log(u + x + y + z );






// b1

    //
    // let diemVatLy = Number(prompt("Nhập điểm Vật lý:"));
    // let diemHoaHoc = Number(prompt("Nhập điểm Hóa học:"));
    // let diemSinhHoc = Number(prompt("Nhập điểm Sinh học:"));
    // let tongDiem = diemVatLy + diemHoaHoc + diemSinhHoc;
    // let diemTrungBinh = tongDiem / 3;
    // console.log("Tổng điểm của bạn là: " + tongDiem);
    // console.log("Điểm trung bình của bạn là: " + diemTrungBinh.toFixed(2));

    // b2

function chuyendoi() {
    let doC = +document.getElementById("c").value;
    let doF =  ( doC *9 / 5)+32;
    document.getElementById("DoF").innerHTML = "do F: " + doF;

}

// b1 nang cao
function calc() {
    let diemVatli = +document.getElementById("dvl").value;
    let diemSinhhoc = +document.getElementById("dsh").value;
    let diemHoahoc = +document.getElementById("dhh").value;
    let tongDiem = diemVatli + diemSinhhoc + diemHoahoc;
    let diemTrungbinh = tongDiem / 3;

    document.getElementById("result").innerHTML = "diem trung binh la: " + diemTrungbinh.toFixed(2) + "<br>" +
        "diem tong la: " + tongDiem.toFixed(2) ;

}

// b3 , 4
function dientich() {
    let banKinh = +document.getElementById("radius").value;
    let dienTich = Math.PI * Math.pow(banKinh , 2)



    document.getElementById("DT").innerHTML = "dien tich la: " +  dienTich.toFixed(2);

}
 function chuvi() {

     let banKinh2 = +document.getElementById("radius2").value;
     let chuVi = 2 * banKinh2 * Math.PI;

     document.getElementById("CV").innerHTML = "Chu vi la: " + chuVi.toFixed(2);
 }

