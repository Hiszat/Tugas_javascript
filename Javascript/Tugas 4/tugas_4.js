const mhs = {
    NIM: "123456",
    Nama: "Izat",
    Umur: 20,
    Alamat: "Dimana saja",
    Fakultas: {
        Semester: 6
    }
};

const {Fakultas:{Semester:Smst}, Nama} = mhs;
console.log(Smst);
const Keterangan = Smst < 5 ? "Semester Awal" : "Semester Tengah/Akhir";
console.log("Saya mahasiswa " + Keterangan);

const Ucapan = Smst > 5 && "Kamu harus menemukan judul skripsi";
console.log(Ucapan);
const Ucapan2 = Smst < 7 || "Selamat berjuang";
console.log(Ucapan2);
