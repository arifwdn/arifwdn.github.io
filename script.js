var kesempatan = 3;
//Pilihan Comp
var comp = Math.floor(Math.random()*(10-1)+1);

while(kesempatan >= 1){
    // Pilihan Player
    var p = prompt("Tebak Angka 1-10 : ");
    //Rule
    var hasil = '';

	if(p==comp){
		hasil = 'BENAR!';
        	kesempatan = 1;
	}else{
		var sisa = kesempatan-1;
		hasil = (p<comp) ? 'SALAH! Terlalu rendah! \n Sisa Kesempatan = ' + sisa : 'SALAH! Terlalu tinggi! \n Sisa Kesempatan = ' + sisa; 
	}
    
    alert("TEBAKAN ANDA " + hasil);
    kesempatan--;
}

alert("Tebakan anda adalah " + p + " dan Pilihan Komputer adalah " + comp + "\n Game Selesai, Terima Kasih!");

function refresh(){
  location.reload();
}
