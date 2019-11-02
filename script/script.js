var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var output = document.querySelector(".output");
var data = [];
console.log(data);
//Parent Class
var Location = /** @class */ (function () {
    function Location(country, city, address, img) {
        this.country = "";
        this.city = "";
        this.address = "";
        this.img = "";
        this.country = country;
        this.city = city;
        this.address = address;
        this.img = "";
    }
    return Location;
}());
//Restaurants
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(country, city, address, img, name, type, open, tel, web) {
        var _this = _super.call(this, country, city, address, img) || this;
        _this.name = "";
        _this.type = "";
        _this.open = "";
        _this.tel = "";
        _this.web = "";
        _this.name = name;
        _this.type = type;
        _this.open = open;
        _this.tel = tel;
        _this.web = web;
        return _this;
    }
    return restaurant;
}(Location));
var moon = new restaurant("Netherlands", "Amsterdam", "Overhoeksplein 3, 1031 KS", "./img/moonrest.jpg", "Moon", "Gourmet", "12–2pm, 6–9pm", "phone: +31 20 237 6311", "https://restaurantmoon.nl/");
var zaza = new restaurant("Netherlands", "Amsterdam", "Daniël Stalpertstraat 103,1072 XD", ".img/zaza.png", "Zaza", "casual", "6:15 pm – 10:00 pm", "phone: +31 (0) 20 673 6333", "http://zazas.nl/");
var bakers = new restaurant("Netherlands", "Amsterdam", "Eerste Jacob van Campenstraat 54,1072 BH", ".img/bakers.jpg", "Bakers and Roasters", "breakfast", "8:30 am - 4pm", "phone: +31 20 772 2627", "http://www.bakersandroasters.com/");
// Clubs
var club = /** @class */ (function (_super) {
    __extends(club, _super);
    function club(country, city, address, img, name, music, entry, dresscode) {
        var _this = _super.call(this, country, city, address, img) || this;
        _this.name = "";
        _this.music = "";
        _this.entry = "";
        _this.dresscode = "";
        _this.name = name;
        _this.music = music;
        _this.entry = entry;
        _this.dresscode = dresscode;
        return _this;
    }
    return club;
}(Location));
var melkweg = new club("Netherlands", "Amsterdam", "Lijnbaansgracht 234A, 1017 PH", ".img/melkweg.jpg", "Melkweg", "from hippies to punk, from grunge to hip hop.", "10-60€", "no dresscode");
var wester = new club("Netherlands", "Amsterdam", "Klönneplein 4-6, 1014 DD", ".img/wester.jpg", "Wester Unie", "House & Techno", "10-30€", "no dresscode");
var jimmy = new club("Netherlands", "Amsterdam", "Korte Leidsedwarsstraat 18, 1017 RC", ".img/jimmy.jpg", "Jimmy Woo", "R&B,Hip-Hop,Techno", "10-20€", "casual");
// Events
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(country, city, address, img, name, type, date, costs) {
        var _this = _super.call(this, country, city, address, img) || this;
        _this.name = "";
        _this.type = "";
        _this.date = "";
        _this.costs = "";
        _this.name = name;
        _this.type = type;
        _this.date = date;
        _this.costs = costs;
        return _this;
    }
    return events;
}(Location));
var lightshow = new events("Netherlands", "Amsterdam", "Amsterdam", ".img/amsterdamevent.jpg", "Amsterdam Light Festival", "winter outdoor festival of modern art, light and water.", " Nov 28, 2019-Jan 19, 2020", "for free");
var christmas = new events("Netherlands", "Amsterdam", "Throughout Amsterdam", ".img/christmas.jpg", "Amsterdam Christmas Market", "Christmas", "Late November until early January", "free entry");
var kings = new events("Netherlands", "Amsterdam", "Amsterdam", ".img/kings.jpg", "Kings Day", "Kings Day is a National Holiday", "27th April", "for free");
/*Wenn ein Konstruktor verwendet wird,
muss das super Schlüsselwort verwendet werden,
bevor das this Schlüsselwort verwendet werden kann.
Mit dem super Schlüsselwort kann man auch Funktionen
im Vaterobjekt ausführen.*/ 
