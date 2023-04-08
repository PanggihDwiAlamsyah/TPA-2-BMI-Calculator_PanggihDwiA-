// mengambil inputan 
const btn = document.getElementById("calculate");
//mengampil data yang dinputkan
btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  // kondisi apakah sudah ada inputan 
  if (height == "" || weight == "") {
    // jika tidak ada akan muncul notifikasi 
    alert("Input Your Weight and Height must be !!!");
    return;
  }

  // BMI = weight(BB) in KG / (height(TB) * height(TB))

  // Inputan Tnggi Badan (TB) fikonveri dari cm ke m dibagi 100
  height = height / 100;
// deklarasi varivabel let untuk menyimpan hasil berat badan dibagi 
  let BMI = weight / (height * height);
// Mengubah nilai BMI menjadi hanya 1 digit angka di belakang koma
  BMI = BMI.toFixed(1);
// Mengubah nilai innerHTML dari elemen dengan id "result" menjadi nilai BMI yang sudah diubah formatnya
  document.querySelector("#result").innerHTML = BMI;


  // Deklarasi variabel status yang awalnya diisi dengan string kosong 
  let status = "";
// Pengecekan status berat badan dengan kondisional if
// Jika kondisi terpenuhi maka variabel status akan diisi dengan string sesuai kondisi
  if (BMI < 18.5) {
    status = "Underweight";
  }
  if (BMI >= 18.5 && BMI < 24.9) {
    status = "Normal Weight";
  }
  if (BMI >= 25 && BMI < 29.9) {
    status = "Overweight";
  }
  if (BMI >= 30) {
    status = "Obesity";
  }
  // Menampilkan hasil kategori berat badan ke dalam elemen HTML
  document.querySelector(
    ".simpulan"
  ).innerHTML = `Which means You are <span id="simpulan">${status}</span>`;
});
