var market = decodeURIComponent(location.search.split('market=')[1])

if(market != undefined){
	debugger;
  $.getJSON( "test.json", function( data ) {

  $.each( data, function( key, val ) {
  	for(var i = 0; i < val.length; i++) {
  		$.each( val[i], function( key, val ) {
  			if (market == key) {
  				setParameters(val);
  			}
  		
  		});	
  	};
  });	
  
});
}


function setParameters(data){
	$.each( data, function( key, val ) {
		if (key=='phone' && val!='') {
			var element = document.getElementById("phone-number");
			while (element.firstChild) {
    				element.removeChild(element.firstChild);
				}
				element.appendChild(document.createTextNode(val));

			var element = document.getElementById("phone-number-link");
			element.setAttribute('href','tel:'+val)
		}
		if (key=='email' && val!='') {
  				var element = document.getElementById("email");
  				while (element.firstChild) {
    				element.removeChild(element.firstChild);
				}
				element.appendChild(document.createTextNode(val));

				var element = document.getElementById("email-link");
				element.setAttribute('href','mailto:'+val)
		}
		if (key=='workingHours' && val!='') {
  				var element = document.getElementById("working-hours");
  				while (element.firstChild) {
    				element.removeChild(element.firstChild);
				}
				element.appendChild(document.createTextNode(val));
		}
		if (key=='sitename' && val!='') {
			var element = document.getElementById("header-image");
			element.setAttribute('src','http://www.gannett-cdn.com/sites/'+val+'/images/footer-logo.png')

			var element = document.getElementById("sign-in");
			element.setAttribute('href','https://account.'+val+'.com/personal-information')

			var element = document.getElementById("member-guide");
			element.setAttribute('href','http://'+val+'.com/memberguide')

			var element = document.getElementById("e-newspaper");
			element.setAttribute('href','https://account.'+val+'.com/enewspaper')

			var element = document.getElementById("start-stop");
			element.setAttribute('href','https://account.'+val+'.com/delivery-temporary-stop')

			var element = document.getElementById("report-issue");
			element.setAttribute('href','https://account.'+val+'.com/delivery-issue')

			var element = document.getElementById("payment");
			element.setAttribute('href','https://account.'+val+'.com/pay')

			var element = document.getElementById("history");
			element.setAttribute('href','https://account.'+val+'.com/history')

		}
		if (key=='chatUrl' && val!='') {
			var element = document.getElementById("chat-url");
			element.setAttribute('href',val)
		}

	});
}


