// http://www.bloomberg.com/markets/chart/data/1D/TSLA:US

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = process;
xhr.open("GET", "http://www.bloomberg.com/markets/chart/data/1D/TSLA:US", true);
xhr.send();
var output;

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