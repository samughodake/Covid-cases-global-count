
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        console.log(json["Global"]); //only global dta
        var global = json.Global; //taking global object
        console.log(global);
        console.log(global.Date); //printing date property from global object
        document.querySelector("#date").innerHTML += global.Date;
        document.querySelector("#newc").innerHTML += global.NewConfirmed;
        document.querySelector("#newd").innerHTML += global.NewDeaths;
        document.querySelector("#newr").innerHTML += global.NewRecovered;
        document.querySelector("#totc").innerHTML += global.TotalConfirmed;
        document.querySelector("#totd").innerHTML += global.TotalDeaths;
        document.querySelector("#totr").innerHTML += global.TotalRecovered;

    }
});

xhr.open("GET", "https://api.covid19api.com/summary");

xhr.send();