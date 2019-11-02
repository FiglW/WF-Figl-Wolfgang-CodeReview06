let output = document.querySelector(".output");
let data = [];
console.log(data);

//Parent Class

class Location{
	country = "";
	city = "";
	address = "";
	img = "";
	constructor(country,city,address,img){
		this.country = country;
		this.city = city;
		this.address = address;
		this.img = "";
	}


	

}


//Restaurants
class restaurant extends Location{
	name = "";
	type = "";
	open= "";
	tel= "";
	web= "";
	constructor(country,city,address,img,name,type,open,tel,web){
		super(country,city,address,img);
		this.name = name;
		this.type = type;
		this.open = open;
		this.tel = tel;
		this.web = web;
	}






}
let moon = new restaurant("Netherlands","Amsterdam","Overhoeksplein 3, 1031 KS","./img/moonrest.jpg","Moon","Gourmet","12–2pm, 6–9pm","phone: +31 20 237 6311","https://restaurantmoon.nl/")
let zaza = new restaurant("Netherlands","Amsterdam","Daniël Stalpertstraat 103,1072 XD",".img/zaza.png","Zaza","casual","6:15 pm – 10:00 pm","phone: +31 (0) 20 673 6333","http://zazas.nl/")
let bakers = new restaurant("Netherlands","Amsterdam","Eerste Jacob van Campenstraat 54,1072 BH",".img/bakers.jpg","Bakers and Roasters","breakfast","8:30 am - 4pm","phone: +31 20 772 2627","http://www.bakersandroasters.com/")

data.push(moon)
data.push(zaza)
data.push(bakers)

// Clubs
class club extends Location{
	name = "";
	music = "";
	entry = "";
	dresscode = "";
	constructor(country,city,address,img,name,music,entry,dresscode){
		super(country,city,address,img);
		this.name = name;
		this.music = music;
		this.entry = entry;
		this.dresscode = dresscode;
	}
}

let melkweg = new club("Netherlands","Amsterdam","Lijnbaansgracht 234A, 1017 PH",".img/melkweg.jpg","Melkweg","from hippies to punk, from grunge to hip hop.","10-60€","no dresscode")
let wester = new club("Netherlands","Amsterdam","Klönneplein 4-6, 1014 DD",".img/wester.jpg","Wester Unie","House & Techno","10-30€","no dresscode")
let jimmy = new club("Netherlands","Amsterdam","Korte Leidsedwarsstraat 18, 1017 RC",".img/jimmy.jpg","Jimmy Woo","R&B,Hip-Hop,Techno","10-20€","casual")

data.push(melkweg)
data.push(wester)
data.push(jimmy)

// Events
class events extends Location{
	name = "";
	type = "";
	date = "";
	costs = "";
	constructor(country,city,address,img,name,type,date,costs){
		super(country,city,address,img);
		this.name = name;
		this.type = type;
		this.date = date;
		this.costs = costs;
	}
}

let lightshow = new events("Netherlands","Amsterdam","Amsterdam",".img/amsterdamevent.jpg","Amsterdam Light Festival","winter outdoor festival of modern art, light and water."," Nov 28, 2019-Jan 19, 2020","for free",)
let christmas = new events("Netherlands","Amsterdam","Throughout Amsterdam",".img/christmas.jpg","Amsterdam Christmas Market","Christmas","Late November until early January","free entry")
let kings = new events("Netherlands","Amsterdam","Amsterdam",".img/kings.jpg","Kings Day","Kings Day is a National Holiday","27th April","for free")

data.push(lightshow)
data.push(christmas)
data.push(kings)


/*Wenn ein Konstruktor verwendet wird, 
muss das super Schlüsselwort verwendet werden, 
bevor das this Schlüsselwort verwendet werden kann. 
Mit dem super Schlüsselwort kann man auch Funktionen 
im Vaterobjekt ausführen.*/