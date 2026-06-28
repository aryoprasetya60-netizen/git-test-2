function tampiltanggal(){
    document.getElementById('demo').innerHTML = Date();
    document.getElementById('demo').style.display='block';
}

function gender_pria(){
    document.getElementById('imggender').src='pria.jpg';
}

function gender_wanita(){
    document.getElementById('imggender').src='wanita.jpg';
}

function perbesar_style_img(){
    document.getElementById('imggender').style.maxWidth='200px';
}

function perkecil_style_img(){
    document.getElementById('imggender').style.maxWidth='100px';
}

function hide(){
    document.getElementById('demo').style.display='none';
}

function tambah(){
 let angka1 = Number(document.getElementById('a').value);
 let angka2 = Number(document.getElementById('b').value);
 let jumlah = angka1 + angka2;
 document.getElementById('hasil').innerHTML=jumlah;
}

function kurang(){
 let angka1 = Number(document.getElementById('a').value);
 let angka2 = Number(document.getElementById('b').value);
  let kurang = angka1 - angka2;
 document.getElementById('hasil').innerHTML=(kurang);
}

function kali(){
 let angka1 = Number(document.getElementById('a').value);
 let angka2 = Number(document.getElementById('b').value);
 document.getElementById('hasil').innerHTML=(angka1*angka2);
}

function bagi(){
 let angka1 = Number(document.getElementById('a').value);
 let angka2 = Number(document.getElementById('b').value);
 document.getElementById('hasil').innerHTML=(angka1/angka2);
}