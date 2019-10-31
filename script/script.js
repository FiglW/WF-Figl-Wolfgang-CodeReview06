//Main class
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
var Locations = /** @class */ (function () {
    function Locations(country, city, zip, address, teaserimage) {
    }
    Locations.prototype.display = function () {
        //That base class has the function display() which is used for displaying the object’s properties on the screen as HTML.
    };
    return Locations;
}());
/*Wenn ein Konstruktor verwendet wird,
muss das super Schlüsselwort verwendet werden,
bevor das this Schlüsselwort verwendet werden kann.
Mit dem super Schlüsselwort kann man auch Funktionen
im Vaterobjekt ausführen.*/
//child class
var Place = /** @class */ (function (_super) {
    __extends(Place, _super);
    function Place(country, city, zip, address, teaserimage) {
        return _super.call(this, country, city, zip, address, teaserimage) || this;
    }
    return Place;
}(Locations));
//class für Restaurants, und Events...
