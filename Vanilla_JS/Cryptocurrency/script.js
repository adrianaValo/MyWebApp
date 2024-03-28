

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://coingecko.p.rapidapi.com/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'example',
		'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
    //next print the data that we receive from the API
    console.log(response);
	btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
});