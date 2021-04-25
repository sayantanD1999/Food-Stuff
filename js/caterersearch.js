var prevScroll = window.pageYOffset;
window.onscroll = function () {
    var currScroll = window.pageYOffset;
    if (prevScroll > currScroll) {
        document.getElementsByClassName("navbar")[0].style.top = "0";
        document.getElementsByClassName("navbar")[0].style.transition = "0.5s";
    }
    else {
        document.getElementsByClassName("navbar")[0].style.top = "-100px";
        document.getElementsByClassName("navbar")[0].style.transition = "0.5s";
    }
    prevScroll = currScroll;
}

$(document).ready(function () {
    $("#ip").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".container .card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});


function showcontent() {
    document.getElementById("template-div").style.display = "none";
}
window.onload = () => {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            // data = JSON.parse(xhttp.response);
            x = this.responseText;
            data = JSON.parse(x);

            var html = " "
            for (var i = 0; i < data.length; i++) {
                html += `
                        <div class="card mb-3 catererDiv">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src=${data[i].img} class="card-img" alt="...">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"><strong>${data[i].name}</strong></h5>
                                <p class="card-text"><i class="fas fa-map-marker-alt"></i> ${data[i].address}
                                <h5 id="location" data-city=${data[i].city}><i class="fas fa-map-marker-alt"></i> ${data[i].city}</h5>
                                <h4 id="price" data-price=${data[i].cost}>₹ ${data[i].cost} Per Plate</h4>
                                <a href="${data[i].link}" class="btn btn-primary">Check In</a>
                            </div>
                            </div>
                        </div>
                        </div>

        `
            }

            var div = document.getElementById("caterer-filter");
            div.innerHTML = html;

        }
    }

    xhttp.open("GET", "/json/caterersearch.json", true);
    xhttp.send();

}


function city() {
    document.getElementById("filter-btn").disabled = false;
    var city = document.getElementsByName("city");
    for (var i = 0; i < city.length; i++) {
        if (city[i].checked) {
            v = city[i].value;
        }
    }

    console.log(v);
    for (var i = 0; i < city.length; i++) {
        if (city[i].value != v) {
            city[i].disabled = true;
        }
    }
    var but = document.getElementsByName("city");
    for (var i = 0; i < but.length; i++) {
        if (but[i].value == v) {
            if (but[i].checked == false) {
                window.location.reload();
                document.getElementById("filter-btn").disabled = true;
                for (var j = 0; j < city.length; j++) {
                    city[j].disabled = false;
                }
            }
        }
    }

    var div = document.getElementsByClassName("catererDiv");
    console.log(div)
    var place = [];
    for (var i = 0; i < div.length; i++) {
        var x = div[i];
        let city = x.querySelector("#location").dataset.city;
        console.log(city);
        if (city != v) {
            x.style.display = "none";
        }

    }
    console.log(place);
}


function lowtohigh() {
    document.getElementById("hl").disabled = true;
    var but = document.getElementById("lh");
    if (but.checked == false) {
        window.location.reload();
        document.getElementById("hl").disabled = false;
    }

    var city = document.getElementsByName("city");
    for (var i = 0; i < city.length; i++) {
        if (city[i].checked) {
            z = city[i].value;
        }
    }
    console.log(z);
    var container = document.getElementById("caterer-filter");
    var div = container.querySelectorAll(".catererDiv");
    console.log(div)
    var place = [];
    var price = [];
    for (let i = 0; i < div.length; i++) {
        console.log(div[i]);
        if (div[i].style.display != "none") {
            place.push(div[i]);
            price.push(div[i].querySelector("#price").dataset.price);
        }
    }
    console.log(place);
    console.log(price);

    var sorted_price = price.sort(function (a, b) { return a - b });
    console.log(sorted_price);
    for (let i = 0; i < sorted_price.length; i++) {
        for (let j = 0; j < place.length; j++) {
            if (place[j].querySelector("#price").dataset.price == sorted_price[i]) {
                container.appendChild(place[j]);
                place.splice(j, 1);
            }
        }
    }
}


function hightolow() {
    document.getElementById("lh").disabled = true;
    var but = document.getElementById("hl");
    if (but.checked == false) {
        window.location.reload();
        document.getElementById("lh").disabled = false;
    }

    var city = document.getElementsByName("city");
    for (var i = 0; i < city.length; i++) {
        if (city[i].checked) {
            z = city[i].value;
        }
    }
    console.log(z);
    var container = document.getElementById("caterer-filter");
    var div = container.querySelectorAll(".catererDiv");
    console.log(div)
    var place = [];
    var price = [];
    for (let i = 0; i < div.length; i++) {
        console.log(div[i]);
        if (div[i].style.display != "none") {
            place.push(div[i]);
            price.push(div[i].querySelector("#price").dataset.price);
        }
    }
    console.log(place);
    console.log(price);

    var sorted_price = price.sort(function (a, b) { return b - a });
    console.log(sorted_price);
    for (let i = 0; i < sorted_price.length; i++) {
        for (let j = 0; j < place.length; j++) {
            if (place[j].querySelector("#price").dataset.price == sorted_price[i]) {
                container.appendChild(place[j]);
                place.splice(j, 1);
            }
        }
    }
}