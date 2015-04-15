$("document").ready(function(){
	$("form").submit(function(evt){
		evt.preventDefault();
		var $search = $("#input").val();
		var search = $search;
		var value = $("#currSelect").val();
		var urlCurr = "https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/spot_rate";
		var stringCurr = "?currency=" + value;
		var keyCurr = "&mashape-key=4gN0HY6RLTmshjwm5OsfyaRS5PBLp1yxVacjsnlOdcza7YSwGS";
		var urlConvert = urlCurr + stringCurr + keyCurr;
		var total;
		var html = "<p class = 'fadeInUp animated' id = 'convertpara' style = 'border: 5px solid rgba(240,240,240, 0.725)'>"
		function convertBTC(data){
			total = data.amount * search;
			total = total.toFixed(2);
			html += + search + " BTC = " + total + " " + data.currency + "</p>";
 			$("#converted").html(html);
 			if(isNaN(search)){
 				$("#convertpara").css("display", "none");
 				var error_0 = "<p id = 'error_0' style = 'border: 5px solid rgba(240,240,240, 0.725)'> Please Enter a Number with Correct Currency </p>";
 				$("#converted").append(error_0);
 			}
 		}//end of convertBTC function
 		$.getJSON(urlConvert, convertBTC);
	});//end of submit function
});//end of ready function

/* Click function for Exchange nav bar link */
$("#inputfocus").click(function(){
  $("#input").focus();
});//end of click function



