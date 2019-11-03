// was brauch ich alles
// output,array,counter,die divs....


let output = document.querySelector(".out");
let data = [];
let counter = 0;
console.log(data);

//Parent Class

class place{
	country = "";
	city = "";
	address = "";
	img = "";
	constructor(country,city,address,img){
		this.country = country;
		this.city = city;
		this.address = address;
		this.img = img;
	}

showhans(i){
		output.innerHTML += 
		`<div class ="col-lg-4 col-md-6 card cardSet1 text-white">
                <div class="card-body">
                    <img src="${this.img}" class="img-thumbnail" alt="AL"width="auto">
                    <h3 class="card-title mt-2">${this.country}</h3>
                    <h5 class="card-subtitle">${this.city}</h5>
                    <h6 class="card-subtitle">${this.address}</h6>
                </div>
            </div>`

}
}



//Restaurants
class restaurant extends place{
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
	showhans(i){
		super.showhans(counter);
		$("#"+counter).append(`<p ${this.name}</p> <p ${this.type}</p> <p ${this.open}</p> <p ${this.tel}</p> <p ${this.web}</p>`);
		counter++;
	}






}
let moon = new restaurant("Netherlands","Amsterdam","Overhoeksplein 3, 1031 KS","./img/moonrest.jpg","Moon","Gourmet","12–2pm, 6–9pm","phone: +31 20 237 6311","https://restaurantmoon.nl/")
let zaza = new restaurant("Netherlands","Amsterdam","Daniël Stalpertstraat 103,1072 XD",".img/zaza.png","Zaza","casual","6:15 pm – 10:00 pm","phone: +31 (0) 20 673 6333","http://zazas.nl/")
let bakers = new restaurant("Netherlands","Amsterdam","Eerste Jacob van Campenstraat 54,1072 BH",".img/bakers.jpg","Bakers and Roasters","breakfast","8:30 am - 4pm","phone: +31 20 772 2627","http://www.bakersandroasters.com/")

data.push(moon)
data.push(zaza)
data.push(bakers)

// Clubs
class club extends place{
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
	showhans(i){
		super.showhans(counter);
		$("#"+counter).append(`<p ${this.name}</p> <p ${this.music}</p> <p ${this.entry}</p> <p ${this.dresscode}</p>`)
		counter++;
	}
}

let melkweg = new club("Netherlands","Amsterdam","Lijnbaansgracht 234A, 1017 PH",".img/melkweg.jpg","Melkweg","from hippies to punk, from grunge to hip hop.","10-60€","no dresscode")
let wester = new club("Netherlands","Amsterdam","Klönneplein 4-6, 1014 DD",".img/wester.jpg","Wester Unie","House & Techno","10-30€","no dresscode")
let jimmy = new club("Netherlands","Amsterdam","Korte Leidsedwarsstraat 18, 1017 RC",".img/jimmy.jpg","Jimmy Woo","R&B,Hip-Hop,Techno","10-20€","casual")

data.push(melkweg)
data.push(wester)
data.push(jimmy)

// Events
class events extends place{
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
	showhans(i){
		super.showhans(counter);
		$("#"+counter).append(`<p ${this.name}</p> <p ${this.type}</p> <p ${this.date}</p> <p ${this.costs}</p>`)
		counter++;
	}
}

let lightshow = new events("Netherlands","Amsterdam","Amsterdam",".img/amsterdamevent.jpg","Amsterdam Light Festival","winter outdoor festival of modern art, light and water."," Nov 28, 2019-Jan 19, 2020","for free",)
let christmas = new events("Netherlands","Amsterdam","Throughout Amsterdam",".img/christmas.jpg","Amsterdam Christmas Market","Christmas","Late November until early January","free entry")
let kings = new events("Netherlands","Amsterdam","Amsterdam",".img/kings.jpg","Kings Day","Kings Day is a National Holiday","27th April","for free")

data.push(lightshow)
data.push(christmas)
data.push(kings)

for(let i = 0; i<data.length; i++){
	data[i].showhans();
}

/*Wenn ein Konstruktor verwendet wird, 
muss das super Schlüsselwort verwendet werden, 
bevor das this Schlüsselwort verwendet werden kann. 
Mit dem super Schlüsselwort kann man auch Funktionen 
im Vaterobjekt ausführen.*/

/*musste place anstatt Location einsetzten in der parent class*/