// http://www.bloomberg.com/markets/chart/data/1D/TSLA:US

var companies=["TSLA","AAPL","MSFT","AMZN","EBAY"]
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = process;

for (var i; i ++; i < companies.length){
    var url="http://www.bloomberg.com/markets/chart/data/1D/company:US"
    url.replace("companies",companies[i])
    xhr.open("GET", url, true);
    xhr.send();
}

var output;
var url="http://www.bloomberg.com/markets/chart/data/1D/company:US"
xhr.open("GET", url, true);
xhr.send();
function process()
{
  if (xhr.readyState == 4) {
    var resp = JSON.parse(xhr.responseText);

    // resp now has the text and you can process it.
    output= resp.data_values[resp.data_values.length-1];
    output= output[1];
    document.getElementById('price').innerHTML=output;
  }
}

// http://www.bloomberg.com/markets/chart/data/1D/TSLA:US

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = process;
// xhr.open("GET", "http://www.bloomberg.com/markets/chart/data/1D/TSLA:US", true);
// xhr.send();
// var output;

// function process()
// {
//   if (xhr.readyState == 4) {
//     var resp = JSON.parse(xhr.responseText);

//     // resp now has the text and you can process it.
//     output= resp.data_values[resp.data_values.length-1];
//     output= output[1];
//     document.getElementById('price').innerHTML=output;
//   }
// }