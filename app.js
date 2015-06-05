
 (function(angular) {

	var app = angular.module('myApp',[]);

	app.controller('HomeCtrl', increment);

function increment() {
	var hc = this;
	hc.name = 'Angular JS';
}
})(angular);


 (function(angular) {

	var app = angular.module('myApp',[]);

	app.controller('stock', increment);

function increment() {
	var hc = this;
	hc.stock = [{

		"soda": Vodka,
		"measurement": 750,
		"units":1,


	}]


}
})(angular);