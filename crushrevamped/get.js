console.clear();
var ajax = new XMLHttpRequest();
ajax.open("GET", "https://aghastmuffin.github.io/webhome/crushrevamped/crushdata.txt", true);
ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
let a = "";
let debug = 0;
ajax.onreadystatechange = function() {
    console.log("BEFORECHECK")
    if (ajax.readyState == 4){
        if (ajax.status == 200){
            debug = 1;
            console.log("starting GET request (SENT BY AJAX FUNCT)");
            a = this.responseText;
            console.log(a, ajax.responseText)
            console.log("got text successfully");
        }
        else{
            console.log("STATUS NOT 200")
        }
    } else{
        console.log("WORKER XMLHttpRequest not ready", ajax.readyState)
    }
//    exit();
};
ajax.send();

function search(){
    if (debug == 1){
        const search = document.getElementById("name").value;
        let c = "";
        b = a.split("|");
        console.log(a, b)
        i = 0;
        while (c !== search){
            i++;
            c = b[i];
        };
        document.getElementById("output").innerHTML = i;
    } else{
        console.error("WEB ERROR :: ERROR")
        console.error("--BEGIN--")
        console.error("DATA FETCH FAILED! AJAX FAILED!")
        alert("an error occured, please reload the page")
    }
}
