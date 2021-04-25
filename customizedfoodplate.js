$(document).ready(function () {
    $("#ip1").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#contents-starter div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(document).ready(function () {
    $("#ip2").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#contents-maincourse div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(document).ready(function () {
    $("#ip3").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#contents-desert div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function getStarted() {
    // document.getElementsByClassName("tabcontent")[0].style.display = "block";
    document.getElementById("inputDetailBox").style.display = "block";
}

function increment() {
    document.getElementById("heads").stepUp();
}
function decrement() {
    document.getElementById("heads").stepDown();
}
function submit() {
    document.getElementById("inputDetailBox").style.display = "none";
}
function veg(item) {
    var containerDiv = item.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(containerDiv);
    var buttonDiv = item.parentElement.parentElement;
    console.log(buttonDiv);
    buttonDiv.querySelector('#non-veg').disabled = true;
    //console.log(b1.querySelector('#non-veg'));
    var button = buttonDiv.querySelector('#veg');
    console.log(button);
    if (button.checked == false) {
        //updateDiv(a);
        window.location.reload();
        buttonDiv.querySelector('#non-veg').disabled = false;
    }

    var tr = containerDiv.querySelectorAll("div #tr");
    console.log(tr);
    for (let i = 0; i < tr.length; i++) {
        let cardDiv = tr[i].querySelector('#ip');
        console.log(cardDiv);
        let y = cardDiv.dataset.food_type;
        console.log(y);
        if (y == 'non-veg') {
            cardDiv.parentElement.parentElement.parentElement.style.display = 'none';
            //console.log("Found");
        }
    }
}
function nonveg(item) {
    var containerDiv = item.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(containerDiv);
    // var sectionDiv = a.querySelector('.contents');
    var buttonDiv = item.parentElement.parentElement;
    console.log(buttonDiv);
    buttonDiv.querySelector('#veg').disabled = true;
    //console.log(b1.querySelector('#non-veg'));
    var button = buttonDiv.querySelector('#non-veg');
    console.log(button);
    if (button.checked == false) {
        window.location.reload();
        //updateDiv(sectionDiv);
        buttonDiv.querySelector('#veg').disabled = false;
    }

    var tr = containerDiv.querySelectorAll("div #tr");
    //console.log(tr);
    for (let i = 0; i < tr.length; i++) {
        let cardDiv = tr[i].querySelector('#ip');
        let y = cardDiv.dataset.food_type;
        //console.log(y);
        if (y == 'veg') {
            cardDiv.parentElement.parentElement.parentElement.style.display = 'none';
            //console.log("Found");
        }
    }
}
var food_div = [];
var food_price = [];
function lowtohigh(item) {
    var buttonDiv = item.parentElement.parentElement;
    console.log(buttonDiv);
    buttonDiv.querySelector('#hl').disabled = true;
    //console.log(buttonDiv.querySelector('#non-veg'));
    var button = buttonDiv.querySelector('#lh');
    console.log(button);
    if (button.checked == false) {
        window.location.reload();
        buttonDiv.querySelector('#hl').disabled = false;
    }
    var sortedArr = [];
    var containerDiv = item.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(containerDiv);
    var tr = containerDiv.querySelectorAll("div #tr");
    console.log(tr);
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].style.display != 'none') {
            let cardDiv = tr[i].querySelector('#ip');
            let p = cardDiv.dataset.price;
            food_price.push(p);
            let div = cardDiv.parentElement.parentElement.parentElement;
            food_div.push(div);
        }
    }
    food_price.sort(function (a, b) { return a - b });
    console.log(food_price);
    console.log(food_div);
    for (let i = 0; i < food_price.length; i++) {
        for (let j = 0; j < food_div.length; j++) {
            let p = food_div[j].querySelector('#ip').dataset.price;
            // console.log(p);
            // console.log(food_price[i]);
            if (p == food_price[i]) {
                sortedArr.push(food_div[j]);
                food_div.splice(j, 1);
            }
        }
    }
    console.log(contents_div);
    console.log(sortedArr);
    var contents_div = containerDiv.querySelector(".contents");
    for (let i = 0; i < sortedArr.length; i++) {
        contents_div.appendChild(sortedArr[i]);
    }
    console.log(contents_div);
}
function hightolow(item) {
    var buttonDiv = item.parentElement.parentElement;
    console.log(buttonDiv);
    buttonDiv.querySelector('#lh').disabled = true;
    //console.log(buttonDiv.querySelector('#non-veg'));
    var button = buttonDiv.querySelector('#hl');
    console.log(button);
    if (button.checked == false) {
        window.location.reload();
        buttonDiv.querySelector('#lh').disabled = false;
    }
    var sortedArr = [];
    var containerDiv = item.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(containerDiv);
    var tr = containerDiv.querySelectorAll("div #tr");
    console.log(tr);
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].style.display != 'none') {
            let x = tr[i].querySelector('#ip');
            let p = x.dataset.price;
            food_price.push(p);
            let div = x.parentElement.parentElement.parentElement;
            food_div.push(div);
        }
    }
    food_price.sort(function (a, b) { return b - a });
    console.log(food_price);
    // console.log(food_div);
    for (let i = 0; i < food_price.length; i++) {
        for (let j = 0; j < food_div.length; j++) {
            let p = food_div[j].querySelector('#ip').dataset.price;
            // console.log(p);
            // console.log(food_price[i]);
            if (p == food_price[i]) {
                sortedArr.push(food_div[j]);
                food_div.splice(j, 1);
            }
        }
    }
    console.log(contents_div);
    console.log(sortedArr);
    var contents_div = containerDiv.querySelector(".contents");
    for (let i = 0; i < sortedArr.length; i++) {
        contents_div.appendChild(sortedArr[i]);
    }
    console.log(contents_div);
}
var data;
window.onload = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var x = this.responseText;
            data = JSON.parse(x);
            console.log(data[0].value);
            starter = " ";
            maincourse = " ";
            desert = " ";

            for (let i = 0; i < data.length; i++) {
                if (data[i].foodkind == "starter") {
                    starter +=
                        `
                        <div id="tr" class="card" onclick="selectDiv(this)">
                        <img class="card-img-top" src=${data[i].img} alt="Card image cap">
                        <div class="card-body">
                            <p>
                            ${data[i].name}<br>
                            
                            <div style="display: flex; justify-contents:center; align-items:center;" ><h5 class="card-title">₹ ${data[i].dataprice}</h5> <input id="ip" type="checkbox" data-food_type=${data[i].foodtype} data-food_kind=${data[i].foodkind} class="item" value=${data[i].name} data-price=${data[i].dataprice}></div>
                                
                        </div>
                        </div>
                    
                    `

                }
                if (data[i].foodkind == "maincourse") {
                    maincourse +=
                        `
                        <div id="tr" class="card" onclick="selectDiv(this)">
                        <img class="card-img-top" src=${data[i].img} alt="Card image cap">
                        <div class="card-body">
                            <p>${data[i].name}<br>
                            
                            <div style="display: flex; justify-contents:center; align-items:center;" ><h5 class="card-title">₹ ${data[i].dataprice}</h5> <input id="ip" type="checkbox" data-food_type=${data[i].foodtype} data-food_kind=${data[i].foodkind} class="item" value=${data[i].name} data-price=${data[i].dataprice}></div>
                                
                        </div>
                        </div>
                    
                    `

                }
                if (data[i].foodkind == "desert") {
                    desert +=
                        `
                        <div id="tr" class="card" onclick="selectDiv(this)">
                        <img class="card-img-top" src=${data[i].img} alt="Card image cap">
                        <div class="card-body">
                            <p>${data[i].name}<br>
                            
                            <div style="display: flex; justify-contents:center; align-items:center;" ><h5 class="card-title">₹ ${data[i].dataprice}</h5> <input id="ip" type="checkbox" data-food_type=${data[i].foodtype} data-food_kind=${data[i].foodkind} class="item" value=${data[i].name} data-price=${data[i].dataprice}></div>
                                
                        </div>
                        </div>
                    
                    `
                }
            }

            var s = document.getElementById("contents-starter");
            s.innerHTML = starter;
            var m = document.getElementById("contents-maincourse");
            m.innerHTML = maincourse;
            var d = document.getElementById("contents-desert");
            d.innerHTML = desert;
        }
    };
    xhttp.open("GET", "customizedfoodplate.json", true);
    xhttp.send();
}

function selectDiv(div) {
    let ip = div.querySelector("input");
    var card = ip.parentElement.parentElement.parentElement;
    console.log(card);
    if (ip.checked == true) {
        ip.checked = false;
        card.style.backgroundColor = null;
    }
    else {
        ip.checked = true;
        card.style.backgroundColor = "rgb(0,0,0,0.66)"
    }
}




function addtoplate() {
    // $("#tab1").empty();
    $("#tab1").find("tr:not(:nth-child(1))").remove();
    $("#tab2").find("tr:not(:nth-child(1))").remove();
    $("#tab3").find("tr:not(:nth-child(1))").remove();
    heads = document.getElementById("heads").value;
    if (heads == 0) { alert("Please enter number of guests") }
    else {
        var food_list = [];
        var plate = [];
        var price = [];
        var total = [];
        var food_kind = [];
        var food = document.getElementsByClassName("item");

        for (var i = 0; i < food.length; i++) {
            if (food[i].checked) {
                var p = food[i].value;
                var s = food[i].getAttribute("data-price");
                var fk = food[i].getAttribute("data-food_kind");
                plate.push(p);
                price.push(s);
                food_kind.push(fk);
                var cost = s * heads;
                total.push(cost);
                let div = food[i].parentElement.parentElement.parentElement;
                food_list.push(div);

            }
        }

        console.log(food_list);
        var sum = 0;
        for (var i = 0; i < total.length; i++) {
            sum = sum + total[i];
        }

        console.log(plate);
        console.log(price);
        console.log(total);
        console.log(food_kind);
        console.log(sum);

        table = document.getElementsByClassName("table");
        table2 = document.getElementsByClassName("table2");
        table3 = document.getElementsByClassName("table3");

        for (var i = 0, i2 = 0, i3 = 0; i < table.length, i2 < table2.length, i3 < table3.length; i++, i2++, i3++) {
            for (var l = 0, j = 0, k = 0, f = 0; l < plate.length, j < price.length, k < total.length, f < food_kind.length; l++, j++, k++, f++) {
                if (food_kind[f] == "starter") {
                    console.log("inside");
                    var row = table[i].insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    cell1.innerHTML = plate[l];
                    cell2.innerHTML = price[j];
                    cell3.innerHTML = heads;
                    cell4.innerHTML = total[k];
                    var but = document.createElement("button");
                    but.className = "del";
                    but.value = "Delete Row";
                    but.innerHTML = "Delete";
                    cell5.appendChild(but);
                    but.onclick = function () {
                        // event.target will be the input element.
                        var td = event.target.parentNode;
                        var tr = td.parentNode; // the row to be removed
                        tr.parentNode.removeChild(tr);
                        var p = tr.cells[3].innerHTML;
                        console.log(p);
                        sum = sum - p;
                        let name = tr.cells[0].innerHTML;
                        console.log(name);
                        for (let i = 0; i < food_list.length; i++) {
                            if (name == plate[i]) {
                                let x = food_list[i].querySelector("input");
                                x.checked = false;
                                food_list[i].style.backgroundColor = null;
                                plate.splice(i, 1);
                                price.splice(i, 1);
                                total.splice(i, 1);
                                food_kind.splice(i, 1);
                                food_list.splice(i, 1)
                            }

                        }
                        document.getElementById("total").innerHTML = "Total : ₹ " + sum;

                    }
                }
                if (food_kind[f] == "maincourse") {
                    var row = table2[i2].insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    cell1.innerHTML = plate[l];
                    cell2.innerHTML = price[j];
                    cell3.innerHTML = heads;
                    cell4.innerHTML = total[k];
                    var but = document.createElement("button");
                    but.className = "del";
                    but.value = "Delete Row";
                    but.innerHTML = "Delete";
                    cell5.appendChild(but);
                    but.onclick = function () {
                        // event.target will be the input element.
                        var td = event.target.parentNode;
                        var tr = td.parentNode; // the row to be removed
                        tr.parentNode.removeChild(tr);
                        var p = tr.cells[3].innerHTML;
                        console.log(p);
                        sum = sum - p;
                        let name = tr.cells[0].innerHTML;
                        console.log(name);
                        for (let i = 0; i < food_list.length; i++) {
                            if (name == plate[i]) {
                                let x = food_list[i].querySelector("input");
                                x.checked = false;
                                food_list[i].style.backgroundColor = null;
                                plate.splice(i, 1);
                                price.splice(i, 1);
                                total.splice(i, 1);
                                food_kind.splice(i, 1);
                                food_list.splice(i, 1)
                            }

                        }


                        document.getElementById("total").innerHTML = "Total : ₹ " + sum;

                    }
                }
                if (food_kind[f] == "desert") {
                    var row = table3[i3].insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    cell1.innerHTML = plate[l];
                    cell2.innerHTML = price[j];
                    cell3.innerHTML = heads;
                    cell4.innerHTML = total[k];
                    var but = document.createElement("button");
                    but.className = "del";
                    but.value = "Delete Row";
                    but.innerHTML = "Delete";
                    cell5.appendChild(but);
                    but.onclick = function () {
                        // event.target will be the input element.
                        var td = event.target.parentNode;
                        var tr = td.parentNode; // the row to be removed
                        tr.parentNode.removeChild(tr);
                        var p = tr.cells[3].innerHTML;
                        console.log(p);
                        sum = sum - p;
                        let name = tr.cells[0].innerHTML;
                        console.log(name);
                        for (let i = 0; i < food_list.length; i++) {
                            if (name == plate[i]) {
                                let x = food_list[i].querySelector("input");
                                x.checked = false;
                                food_list[i].style.backgroundColor = null;
                                plate.splice(i, 1);
                                price.splice(i, 1);
                                total.splice(i, 1);
                                food_kind.splice(i, 1);
                                food_list.splice(i, 1)
                            }

                        }


                        document.getElementById("total").innerHTML = "Total : ₹ " + sum;

                    }
                }


            }
        }
        document.getElementById("total").innerHTML = "Total : ₹ " + sum;
        document.getElementById("but2").disabled = false;

    }

}
function closediv() {
    document.getElementById('but2').disabled = true;
    document.getElementById('order_table').style.display = 'none';
    document.getElementById("frontPage").style.display = "block";
}
function showplate() {
    heads = document.getElementById("heads").value;
    if (heads == 0) { alert("Please enter number of guests") }
    else {
        document.getElementById("frontPage").style.display = "none";
        document.getElementById("order_table").style.display = "block";
    }
}
function discardplate() {
    window.location.reload();
}
