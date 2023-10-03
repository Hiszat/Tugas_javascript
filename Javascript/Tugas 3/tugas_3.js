//Array 

const Prodi = ["Teknik Informatika", "Sistem Informasi", "Manajemen Informasi", "Bisnis Digital", "Komputerisasi Akuntansi", "Matematika"];
const [Jurusan1, Jurusan2, ...JurusanLainnya] = Prodi;

console.log(Jurusan1, Jurusan2, JurusanLainnya);
 
//Object
const mhs = {
    NIM: "22551024",
    Nama: "Izat",
    Umur: 20,
    Alamat: "Langkat",
    Fakultas: {
        Jurusan: "Teknik Informatika",
        Semester: 3
    }
};

const {Nama, Alamat} = mhs;

console.log(Nama,Alamat);

function getNIM({NIM, Nama, Umur, Fakultas:{Semester:Sem, Jurusan:Jur}}){
    console.log(`Hai saya ${Nama} dengan ${NIM} berumur ${Umur} Tahun, Saya berjurusan ${Jur} dengan Semester ${Sem}`)
};


getNIM(mhs);