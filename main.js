angular.module('introApp', []);

angular.module('introApp')

angular.module('introApp')
	.controller("introController", function(){
		var ic = this;

	// note that ic.h2 isn't made within the controller		
		ic.h2  = true;
		console.log(ic.h2)

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

		ic.content = [
			{ title:'NY Times', text:'some text content', url:'http://www.newyorktimes.com'},
			{ title:'Economist', text:'some text content', url:'http://www.economist.com'},
			{ title:'Yahoo!', text:'some text content', url:'http://news.yahoo.com'},
			{ title:'Google News', text:'some text content', url:'http://news.google.com'},

		]

		ic.isActive = false;
		ic.toggleActive = function($puppy){
			ic.isActive = !ic.isActive;
			if (ic.isActive === true){
				$puppy.target.style.color = "pink"
				ic.isActive = !ic.Active;
				// console.log(ic.isActive)

			}else{
				$puppy.target.style.color = "black"
				// console.log(ic.isActive);
			}
		}

		ic.addLoud = function(){
			ic.myData = {};
			ic.myData.showIt = true;
		}
		
	});

