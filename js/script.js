var id_nama = document.getElementById("nama");
var id_tgl = document.getElementById("tgl");
var id_gender = document.getElementById("gender");
var id_pesan = document.getElementById("pesan");
var id_tamp = document.getElementById("tampilan");

function kirim(){
    id_tamp.innerHTML = id_nama.value +", "+ id_tgl.value
    +", "+ id_gender.value +", "+ id_pesan.value;
}

