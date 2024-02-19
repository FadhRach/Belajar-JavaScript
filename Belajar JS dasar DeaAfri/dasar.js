let nama = 'Finaa Aulia'
let umur = 18
let tinggiBadan = 169.8
let beratBadan
let pacar = 2

beratBadan = 60

if(pacar == null){
    pacar = 'belum punya'
} else {
    pacar = 'udah punya'
}

let saldoAwal = 50000
let saldoTambahan = 80000
const hutang = 30000
const saldoAkhir = saldoAwal + saldoTambahan - hutang

const x = 5
const y = 3
const z = x%y

alert(z)

alert(`nama saya ${nama}, usia saya ${umur}, tinggi badan ${tinggiBadan} cm, berat badan ${beratBadan} kg, dan pacar saya ${pacar}`);

alert(`saldo awal saya sebesar Rp.${saldoAwal} & saldo tambahan yang akan
saya miliki sebesar Rp.${saldoTambahan} jadi total nya adalah Rp.${saldoAkhir}`)