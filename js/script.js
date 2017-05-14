function Telefon(marka, cena, kolor, ram){
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.ram = ram;
}

Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor telefonu " + this.kolor +  
                ", a cena telefonu: " +  this.cena + ", pamięć ram " + this.ram + ".");
}

var Iphone6 = new Telefon('Iphone', '3420', 'zloty', '1GB');
var SamsungS8 = new Telefon('Samsung Galaxy S8', '3299', 'czarny', '4GB');
var Xiaoami =  new Telefon('Xiaoami Mi6', '599$', 'Biały', '6GB');

Xiaoami.printInfo();
