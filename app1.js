 (function(angular) {
	var app = angular.module('myApp',[]);

app.controller('HomeCtrl', increment);


function increment() {

var mctrl = this;
mctrl.count = 0;
mctrl.maxcount=50;
mctrl.mincount=0
mctrl.myname = 'Saket';

  var incremented = false;
  var decremented = false;
  

   mctrl.add = function() {

    mctrl.count++;

  }

  mctrl.minus = function() {
    if (decremented) { return; }
    mctrl.count--;
    decremented = true;
  }
}
})(angular); 

 /*(function(angular) {
	var app = angular.module('myApp',[]);

app.controller('HomeCtrl', increment);

function increment() {
	var hc = this;
	hc.name = 'Angular JS';
}
})(angular); */

/*$(function () {
    $('.add').on('click',function(){
        var $qty=$(this).closest('tr').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('.minus').on('click',function(){
        var $qty=$(this).closest('values').find('.qty');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
}); */



/* function add()
{
    var value = parseInt(document.getElementById('qty3').value, 50);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('qty3').value = value;
} */



/*function add() {
	  var basic = document.getElementById("qty2");
            basic.value++;
}

function minus() {
	  var basic = document.getElementById("qty2");
	  if(basic.value > 0) {
            basic.value--;}

}*/