import fetch from 'cross-fetch'

// 1. Buatlah sambungan program menggunakan then catch dan juga try catch
    //   untuk mengecek hari kerja dari kode Asynchronous dibawah dan jelaskan 
    //   penggunaan then catch dan try catch dengan memberikan komentar di bawahnya:

// const cekHariKerja = (day) =>{
//     return new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             const hariKerja = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']
//             let cek = hariKerja.find((item)=>{
//                 return item === day
//             })
//             if(cek !== 'minggu' && cek !== 'sabtu'){
//                 resolve(`hari ${day} adalah hari kerja`)
//             }else{
//                 reject(`Hari ${day} adalah hari libur bukan hari kerja`)
//             }
//         }, 3000);
//     })
// }

// ===== Then Catch=====

// cekHariKerja('minggu')
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })


// =====Try Catch=====

// const cekHariLibur = async() =>{
//     try {
//         const result = await cekHariKerja('sabtu')
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// cekHariLibur()


// 2. Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan method map

// const getMonth = (callback) =>{
//     setTimeout(() => {
//         let error = false
//         let month = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember']
//         if(!error){
//             callback(null, month)
//         }else{
//             callback(new Error('Data not found'), [])
//         }
//     }, 3000);
// }

// getMonth((error, data) => {
//     error ? console.log(error) : data.map((item) => {
//            console.log(item);
//          });
//   });

//   3. Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1

// =====Then Catch=====

// const categoryFashion = (category) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             // const error = false
//             const fashion = ['shirt', 'polo shirt', 'pants', 'jeans', 'hoodie']
//             let cek = fashion.find((item)=>{
//                 return item === category
//             })
//             if(cek){
//                 resolve(`Kategori yang anda cari adalah ${category} dan tersedia`)
//             }else{
//                 reject(`Kategori yang anda cari adalah ${category} dan hasil tidak ada`)
//             }
//         }, 3000);
//     })
// }


// categoryFashion('cargo pants')
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })


// =====Try Catch=====

// const cekAngka = (number) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//             angka.map((item)=>{
//                 return item === number
//             })
//             if(number % 2 === 0){
//                 resolve(`angka yang anda cari adalah ${number} dan berupa bilangan genap`)
//             }else{
//                 reject(`angka yang anda cari adalah ${number} dan berupa bilangan ganjil`)
//             }
//         }, 2000);
//     })
// }

// // cekAngka(12)

// const show = async() =>{
//     try {
//         let result = await cekAngka(13)
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// show()


// 4. Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini

const getData = (url) =>{
    return new Promise((resolve, reject)=>{
        let result = fetch(url)
        if(result){
            resolve(result)
        }else{
            reject(error)
        }
    })
}

const show = async() =>{
    try {
        const result = await getData('https://jsonplaceholder.typicode.com/users')
        const listUser = await result.json()
        listUser.map(({name})=>{
            console.log(name);
        })
    } catch (error) {
        console.log(error);
    }
}
show()