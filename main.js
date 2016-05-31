angular.module('introApp', []);

angular.module('introApp')

angular.module('introApp')
	.controller("introController", function(){
		var ic = this;
		ic.name = "Monkey's Uncle";
		ic.greeting = function () {
			ic.greeting = "Thanks for visiting this \nIntro to Angular App"
		}

		ic.showMe = false;
		ic.showFunc = function(){
			console.log("this is it");
			ic.showMe = !(ic.showMe);
			console.log(ic.showMe);
		}

		ic.isActive = false;
		ic.toggleActive = function(){
			ic.isActive = !ic.isActive;
			console.log("toggleActive");
			console.log(ic.isActive);

		}
		
	});