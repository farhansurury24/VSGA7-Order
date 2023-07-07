//alert('ORDER JS');

let itemOrder = [
    {
        dipesan : false,
        harga : 25000,
        nama : 'Mie Ayam',
    },
    {
        dipesan : false,
        harga : 15000,
        nama : 'Bakso',
    },
    {
        dipesan : false,
        harga : 7000,
        nama : 'Teh Botol',
    },
];

let totalOrder = 0;

const itemTerpilih = document.getElementsByClassName('item');

const textTotal = document.getElementById('last-item');

for(let i = 0; i < itemTerpilih.length; i++){
    itemTerpilih[i].addEventListener('click', function(){
        setItemPemesanan(i, itemTerpilih[i]);
    });
}

function setItemPemesanan(index, elemen){
    if (itemOrder[index].dipesan == false){
        itemOrder[index].dipesan = true;
        elemen.style.backgroundColor = '#22a4d6';
        elemen.style.color = 'white';
        totalOrder = totalOrder + itemOrder[index].harga;
    } else{
        itemOrder[index].dipesan = false;
        elemen.style.backgroundColor = '#c0dfeb';
        elemen.style.color = 'black';
        totalOrder = totalOrder - itemOrder[index].harga;
    }
    textTotal.innerHTML = 'Total <span>Rp ' + totalOrder + '</span>';
}