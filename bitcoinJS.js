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







// $("document").ready(function(){
// 	$("form").submit(function(evt){
// 		evt.preventDefault();
// 		var $search = $("#input").val();
// 		var search = $search;
// 		var url = "https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/buy"
// 		var qty = "?qty=" + search;
// 		var key = "&mashape-key=4gN0HY6RLTmshjwm5OsfyaRS5PBLp1yxVacjsnlOdcza7YSwGS"
// 		var urlBTC = url + qty + key;
// 		function showBTC(data){
// 			var html = "<p class = 'fadeInUp animated' id = 'convertpara' style = 'border: 5px solid rgba(240,240,240, 0.725)'>"
// 			+ search + " BTC = " + data.total.amount + " " + data.total.currency + "</p>";
// 			$("#converted").html(html);
// 		}//end of showBTC function
// 		$.getJSON(urlBTC, showBTC)
// 	});//end of submit function
// });//end of ready function




// $("document").ready(function(){
// 	$("#currSelect").change(function(evt){
// 		evt.preventDefault();
// 		var $curr = $(this).val();
// 		var curr = $curr;
// 		var url1 = "https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/spot_rate";
// 		var currency = "?currency=" + curr;
// 		var key1 = "&mashape-key=idj7ro4T84mshBweAB1H0LfHUAjbp193OM5jsnmKc0jtyPWTdi";
// 		var urlCurr = url1 + currency + key1;
// 		function showCurr(data){
// 			return curr
// 		}
		
		
// 		$.getJSON(urlCurr, showCurr);
// 	});//end of change function
// });//end of ready function





// $("document").ready(function(){
  
// 	$("form").submit(function(evt){
//     console.log('submit start');
// 		evt.preventDefault();
// 		var $search = $("#input").val();
// 		var search = $search;
//     var toCurrency = $( "#currSelect" ).val();
// 		var url = "https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/buy"
// 		var qty = "?qty=" + search;
// 		var key = "&mashape-key=Lb9ZJtzt0FmshPBBsiB5YJArwJT1p1UpBqcjsnnz4M05mkskcG"
// 		var urlBTC = url + qty + key;
    
//     //Need to Use
//     //https://www.mashape.com/warting/currency-converter#convert
//     //call both
//     // USD -> toCurrency e.g. AUD/CAD/EUR...
    
//     var url = "https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/currencies/exchange_rates";
//     var convertURL = "https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/currencies/exchange_rates?&mashape-key=Lb9ZJtzt0FmshPBBsiB5YJArwJT1p1UpBqcjsnnz4M05mkskcG";
//     //Amount of BitCoin
//     var totalAmount = 0;
//     //Amount of Dollar
//     var totalCurrency = 0;
//     //From USD to Other Currency
//     var conversionRate = 0; 
//     //Final Currency 
//     var finalCurrency = 0;
    
// 		function showBTC(data){
      
//       	conversionRate = data.to_amount;
//       	finalCurrency = conversionRate * totalCurrency;
 
 
// 				var html = "<p class = 'fadeInUp animated' id = 'convertpara' style = 'border: 5px solid rgba(240,240,240, 0.725)'>" + search + " BTC = " + totalAmount + " " + finalCurrency + "<br></p>";
// 			$("#converted").html(html);
// 		}//end of showBTC function
    
//     function getConvertRate(data) {
//       totalAmount = data.total.amount;
//       totalCurrency = data.total.currency;
//       //another api call after getting btc in usd dollar amount
//       //you can add logic that if an user specify USD, don't call, but for now just get this connected.
//       $.getJSON(convertURL, showBTC)
//     }
    
//     //call urlBTC and then call another API to get conversion rate
//     //showBTC function will do the final calculation
//     //so there are two callbacks
    
// 		$.getJSON(urlBTC, getConvertRate)
    
// 	});//end of submit function
  
// });//end of ready function


// /* Click function for Exchange nav bar link */
// $("#inputfocus").click(function(){
//   $("#input").focus();
// });//end of click function



