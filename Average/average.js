(function () { "use strict";
var Average = function() { }
Average.main = function() {
	var marks = new Array();
	marks.push(10);
	marks.push(20);
	var iterator = new IntIterator(0,marks.length);
	var sum = 0;
	while( iterator.hasNext() ) {
		var i = iterator.next();
		sum += marks[i];
	}
	console.log(sum / marks.length);
}
var IntIterator = function(min,max) {
	this.min = min;
	this.max = max;
};
IntIterator.prototype = {
	next: function() {
		return this.min++;
	}
	,hasNext: function() {
		return this.min < this.max;
	}
}
Average.main();
})();
