//Main class

class Locations {
	constructor(country: string, city: string, zip: number, address: string, teaserimage: string,){}
	display(){
		//That base class has the function display() which is used for displaying the object’s properties on the screen as HTML.


	}
}
/*Wenn ein Konstruktor verwendet wird, 
muss das super Schlüsselwort verwendet werden, 
bevor das this Schlüsselwort verwendet werden kann. 
Mit dem super Schlüsselwort kann man auch Funktionen 
im Vaterobjekt ausführen.*/

//child class

class Place extends Locations {
	constructor(country: string, city: string, zip: number, address: string, teaserimage: string){
		super(country, city, zip, address, teaserimage);
	}
}

//class für Restaurants, und Events...