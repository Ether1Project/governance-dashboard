//MARKET DATA

//ETHER-1 PRICE JS

function updatePriceData1()
{
    $.getJSON('https://www.coincalculators.io/api.aspx?name=ether1&hashrate=38000000&power=175&poolfee=0&powercost=0.1', function(data) {
        var text = `${data.price_usd}`
        var text= "$" + Math.round(data.price_usd*100000)/100000 + " USD"

        $(".price").html(text);

        setTimeout(updatePriceData1(), 100000);
    });
}

setTimeout(updatePriceData1(), 100000);

//BTC PRICE

function updatePriceData2()
{
$.getJSON('https://www.coincalculators.io/api.aspx?name=bitcoin&hashrate=76000000000000&power=4000&poolfee=0&powercost=0.1', function(data) {
    var text = `${data.price_usd}`
    var text= "$" + Math.round(data.price_usd) + " USD"

    $(".price2").html(text);

    setTimeout(updatePriceData2(), 100000);
});
}

setTimeout(updatePriceData2(), 100000);

//ETH PRICE

function updatePriceData3()
{
$.getJSON('https://www.coincalculators.io/api.aspx?name=ethereum&hashrate=76000000000000&power=4000&poolfee=0&powercost=0.1', function(data) {
var text = `${data.price_usd}`
var text= "$" + Math.round(data.price_usd) + " USD"

$(".price3").html(text);

setTimeout(updatePriceData3(), 100000);
});
}

setTimeout(updatePriceData3(), 100000);

//ETHER-1 24H %
function updateDiff()
{
$.getJSON('https://api.coingecko.com/api/v3/coins/ether-1?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true', function(data) {

var text = `${data.market_data.price_change_percentage_24h}`
var text=Math.round(data.market_data.price_change_percentage_24h*100)/100 + "%"

$(".etho").html(text);
setTimeout(updateDiff(), 10000);

});
}

setTimeout(updateDiff(), 10000);

//BTC 24H %

function updateDiff1()
{
$.getJSON('https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true', function(data) {

    var text = `${data.market_data.price_change_percentage_24h}`
    var text=Math.round(data.market_data.price_change_percentage_24h*100)/100 + "%"

$(".btc").html(text);
setTimeout(updateDiff1(), 10000);

});
}

setTimeout(updateDiff1(), 10000);

//ETH 24H %

function updateDiff2()
{
      $.getJSON('https://api.coingecko.com/api/v3/coins/ethereum?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true', function(data) {

          var text = `${data.market_data.price_change_percentage_24h}`
          var text=Math.round(data.market_data.price_change_percentage_24h*100)/100 + "%"

$(".eth").html(text);
setTimeout(updateDiff2(), 10000);

      });
    }

    setTimeout(updateDiff2(), 10000);
