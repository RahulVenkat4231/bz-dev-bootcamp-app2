let s = "";
async function getData(url) {
    try {
        let data = await fetch(url)

        data = await data.json()
        for (let i = 0; i < data.products.length; i++) {
            // console. log (data. products [i] . brand)
            s += "<tr>" + "<td>" + data.products[i].brand + "</td>" + "<td>" + data.products[i].category + "</td>" + "<td>" + data.products[i].description + "</td>" + "</tr>";

        }
        console.log(s)
        document.getElementById("getdata").innerHTML=s;
    }
    catch (error) {
        console.log(error);
    }
}
getData("https://dummyjson.com/products")
