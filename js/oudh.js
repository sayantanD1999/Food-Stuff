// var prevScroll = window.pageYOffset;
// window.onscroll=function(){
//     var currScroll = window.pageYOffset;
//     if (prevScroll>currScroll)
//     {
//         document.getElementsByClassName("navbar")[0].style.top="0";
//         document.getElementsByClassName("navbar")[0].style.transition="0.5s";
//     }
//     else{
//         document.getElementsByClassName("navbar")[0].style.top="-100px";
//         document.getElementsByClassName("navbar")[0].style.transition="0.5s";
//     }

//     prevScroll=currScroll;

// }



function veg(item) {
    var div = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    let id = div.id;
    var filterButton = item.parentElement.parentElement;
    console.log(filterButton);
    filterButton.querySelector('#non-veg').disabled = true;
    //console.log(filterButton.querySelector('#non-veg'));
    var selectedButton = filterButton.querySelector('#veg');
    console.log(selectedButton);
    if (selectedButton.checked == false) {
        window.location.reload();

        filterButton.querySelector('#non-veg').disabled = false;
    }
    var a = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(a);
    var card = a.querySelectorAll("div .card");
    console.log(card);
    for (let i = 0; i < card.length; i++) {
        let x = card[i].querySelector('#demoInput');
        let y = x.dataset.food_type;
        console.log(y);
        if (y == 'non-veg') {
            x.parentElement.parentElement.style.display = 'none';
            //console.log("Found");
        }
    }
}
function nonveg(item) {
    var div = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    let id = div.id;
    var filterButton = item.parentElement.parentElement;
    console.log(filterButton);
    filterButton.querySelector('#veg').disabled = true;
    //console.log(filterButton.querySelector('#non-veg'));
    var selectedButton = filterButton.querySelector('#non-veg');
    console.log(selectedButton);
    if (selectedButton.checked == false) {
        window.location.reload();
        filterButton.querySelector('#veg').disabled = false;
    }
    var a = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(a);
    var card = a.querySelectorAll("div .card");
    console.log(card);
    for (let i = 0; i < card.length; i++) {
        let x = card[i].querySelector('#demoInput');
        let y = x.dataset.food_type;
        console.log(y);
        if (y == 'veg') {
            x.parentElement.parentElement.style.display = 'none';
            //console.log("Found");
        }
    }
}
var food_div = [];
var food_price = [];


function lowtohigh(item) {
    var div = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    let id = div.id;
    var filterButton = item.parentElement.parentElement;
    console.log(filterButton);
    filterButton.querySelector('#hl').disabled = true;
    //console.log(filterButton.querySelector('#non-veg'));
    var selectedButton = filterButton.querySelector('#lh');
    console.log(selectedButton);
    if (selectedButton.checked == false) {
        window.location.reload();
        filterButton.querySelector('#hl').disabled = false;
    }
    var sortedArr = [];
    var a = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(a);
    var card = a.querySelectorAll("div .card");
    console.log(card);
    for (let i = 0; i < card.length; i++) {
        if (card[i].style.display != 'none') {
            let x = card[i].querySelector('#demoInput');
            let p = x.dataset.price;
            food_price.push(p);
            let div = x.parentElement.parentElement;
            food_div.push(div);
        }
    }
    food_price.sort(function (a, b) { return a - b });
    console.log(food_price);
    // console.log(food_div);
    for (let i = 0; i < food_price.length; i++) {
        for (let j = 0; j < food_div.length; j++) {
            let p = food_div[j].querySelector('#demoInput').dataset.price;
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
    var contents_div = a.querySelector(".row");
    for (let i = 0; i < sortedArr.length; i++) {
        contents_div.appendChild(sortedArr[i]);
    }
    console.log(contents_div);
}


function hightolow(item) {
    var div = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    let id = div.id;
    console.log(div.id);
    console.log(div);
    var filterButton = item.parentElement.parentElement;
    console.log(filterButton);
    filterButton.querySelector('#lh').disabled = true;
    //console.log(filterButton.querySelector('#non-veg'));
    var selectedButton = filterButton.querySelector('#hl');
    console.log(selectedButton);
    if (selectedButton.checked == false) {
        window.location.reload();
        filterButton.querySelector('#lh').disabled = false;
    }
    var sortedArr = [];
    var a = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(a);
    var tr = a.querySelectorAll("div .card");
    console.log(tr);
    for (let i = 0; i < tr.length; i++) {
        if (tr[i].style.display != 'none') {
            let x = tr[i].querySelector('#demoInput');
            let p = x.dataset.price;
            food_price.push(p);
            let div = x.parentElement.parentElement;
            food_div.push(div);
        }
    }
    food_price.sort(function (a, b) { return b - a });
    console.log(food_price);
    // console.log(food_div);
    for (let i = 0; i < food_price.length; i++) {
        for (let j = 0; j < food_div.length; j++) {
            let p = food_div[j].querySelector('#demoInput').dataset.price;
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
    var contents_div = a.querySelector(".row");
    for (let i = 0; i < sortedArr.length; i++) {
        contents_div.appendChild(sortedArr[i]);
    }
    console.log(contents_div);
}




$(document).ready(function () {
    $("#ip1").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#starter-food div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
$(document).ready(function () {
    $("#ip2").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#chinese-food div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
$(document).ready(function () {
    $("#ip3").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#Indian-food div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
$(document).ready(function () {
    $("#ip4").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#desert-food div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

var data;
window.onload = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = this.responseText;
            //  console.log(this.responseText);
            var x = this.responseText;
            // console.log(x);
            data = JSON.parse(x)
            // console.log(data[0].type);
            starterfood = " ";
            indiancuisinefood = " ";
            chinesefood = " ";
            desertfood = " ";
            // console.log(data[0].type);

            for (var i = 0; i < data.length; i++) {

                if (data[i].type == "starter") {
                    starterfood += `
                    <div class="card">
                    <img class="card-img-top" src=${data[i].img} alt="Card image cap">
                    <div class="card-body">
                        <p><span style="font-weight: bolder; font-size: larger;">${data[i].dishname}<br>
                            <h5 class="card-title">${data[i].cost}</h5>
                    
                                            <button class="buts2" onclick="decrement(this)">-</button>
                                            <input id=demoInput placeholder="sk" type=number min=0 max=20
                                            name=${data[i].name} data-food_type=${data[i].food_type} value="0" class="q" data-price=${data[i].price}>
                                            <button class="buts2" onclick="increment(this)">+</button>
                            
                    </div>
                    </div>

    `
                }
                if (data[i].type == "Indian-Cuisine") {
                    indiancuisinefood += `
                    <div class="card">
                    <img class="card-img-top" src=${data[i].img} alt="Card image cap">
                    <div class="card-body">
                        <p><span style="font-weight: bolder; font-size: larger;">${data[i].dishname}<br>
                            <h5 class="card-title">${data[i].cost}</h5>
                            <div id="ip">
                                            <button class="buts2" onclick="decrement(this)">-</button>
                                            <input id=demoInput placeholder="sk" type=number min=0 max=20
                                            name=${data[i].dishname} data-food_type=${data[i].food_type} value="0" class="q" data-price=${data[i].price}>
                                            <button class="buts2" onclick="increment(this)">+</button>
                            </div>
                    </div>
                    </div>
    `
                }
                if (data[i].type == "chinese") {
                    chinesefood += `
                    <div class="card">
                    <img class="card-img-top" src=${data[i].img} alt="Card image cap">
                    <div class="card-body">
                        <p><span style="font-weight: bolder; font-size: larger;">${data[i].dishname}<br>
                            <h5 class="card-title">${data[i].cost}</h5>
                            <div id="ip">
                                            <button class="buts2" onclick="decrement(this)">-</button>
                                            <input id=demoInput placeholder="sk" type=number min=0 max=20
                                            name=${data[i].dishname} data-food_type=${data[i].food_type} value="0" class="q" data-price=${data[i].price}>
                                            <button class="buts2" onclick="increment(this)">+</button>
                            </div>
                    </div>
                    </div>
    
    `
                }
                if (data[i].type == "desert") {
                    desertfood += `
                    <div class="card">
                    <img class="card-img-top" src=${data[i].img} alt="Card image cap">
                    <div class="card-body">
                        <p><span style="font-weight: bolder; font-size: larger;">${data[i].dishname}<br>
                            <h5 class="card-title">${data[i].cost}</h5>
                            <div id="ip">
                                            <button class="buts2" onclick="decrement(this)">-</button>
                                            <input id=demoInput placeholder="sk" type=number min=0 max=20
                                            name=${data[i].dishname} data-food_type=${data[i].food_type} value="0" class="q" data-price=${data[i].price}>
                                            <button class="buts2" onclick="increment(this)">+</button>
                            </div>
                    </div>
                    </div>
    
    `
                }
            }

            var starter = document.getElementById("starter-food");
            starter.innerHTML = starterfood;
            var chinese = document.getElementById("chinese-food");
            chinese.innerHTML = chinesefood;
            var ic = document.getElementById("Indian-food");
            ic.innerHTML = indiancuisinefood;
            var desert = document.getElementById("desert-food");
            desert.innerHTML = desertfood;
        }
    };
    xhttp.open("GET", "/json/oudh.json", true);
    xhttp.send();
}






var ipdiv = [];
price = [];
fname = [];
quantity = [];
total = [];
//var sum = 0;

function increment(item) {
    var a = item.parentElement;
    console.log(a);
    var c = 0;
    for (let i = 0; i < ipdiv.length; i++) {
        if (ipdiv[i] == a) {
            c = c + 1;
            console.log("Checking if item is already present or not");
            console.log("c = ",c);
        }
    }
    if (c == 0) {
        console.log('New Item');
        ipdiv.push(a);
        let x = a.querySelector("#demoInput");
        let n = x.name;
        let p = x.getAttribute("data-price");
        console.log(p);
        let q = parseInt(x.value) + 1;
        let t = q * p;
        fname.push(n);
        console.log(n);
        console.log(fname);
        price.push(p);
        quantity.push(q);
        total.push(t);
    }
    if (c == 1) {
        let x = a.querySelector("#demoInput");
        var m = x.name;
        for (let j = 0, k = 0, l = 0, t = 0; j < fname.length, k < price.length, l < quantity.length, t < total.length; j++, k++, l++, t++) {
            let n = fname[j];
            if (m == n) {
                console.log('Already Present');
                let p = x.getAttribute("data-price");
                let q = parseInt(x.value) + 1;
                let nt = parseInt(p) * q;
                fname[j] = n;
                price[k] = p;
                quantity[l] = q;
                total[t] = nt;
            }
        }
    }
    var y = a.querySelector("#demoInput");
    y.stepUp();
    console.log(fname);
    UpdateCart(fname, price, quantity, total);
}
function decrement(item) {
    var a = item.parentElement;
    for (let i = 0; i < ipdiv.length; i++) {
        let x = a.querySelector("#demoInput");
        var m = x.name;
        for (let j = 0, k = 0, l = 0, t = 0, d = 0; j < fname.length, k < price.length, l < quantity.length, d < ipdiv.length, t < total.length; j++, k++, l++, t++, d++) {
            let n = fname[j];
            if (m == n) {

                let p = x.getAttribute("data-price");
                let q = parseInt(x.value) - 1;
                let y = total[t];
                let nt = q * parseInt(p);
                fname[j] = n;
                price[k] = p;
                quantity[l] = q;
                total[t] = nt;

                if (q == 0) {
                    fname.splice(j, 1);
                    price.splice(k, 1);
                    quantity.splice(l, 1);
                    total.splice(t, 1);
                    ipdiv.splice(d, 1);
                }
            }
        }
    }

    var y = a.querySelector("#demoInput");
    y.stepDown();
    console.log(fname);
    UpdateCart(fname, price, quantity, total);
}

sum = 0;

function cart(n) {
    let cart_div = document.getElementsByClassName("cart");
    let cart_circle =  document.getElementsByClassName("fa-circle");
    for (let i = 0; i < cart_div.length; i++) {
       cart_circle[i].style.color = "orange";
        cart_div[i].dataset.count = n;
        cart_div[i].classList.add("cartAnimation");
        setTimeout(function () {
            cart_div[i].classList.remove("cartAnimation");
            cart_circle[i].style.color = "#000000";
        }, 1000);
    }
}

function UpdateCart(fname, price, quantity, total) {
    let cart_length = fname.length;
    console.log(cart_length);
    cart(cart_length);
    console.log(fname);
    $("#tab1").find("tr:not(:nth-child(1))").remove();
    var table = document.getElementsByClassName("table");
    for (let i = 0; i < table.length; i++) {
        for (let n = 0, q = 0, p = 0, t = 0; n < fname.length, q < quantity.length, p < price.length, t < total.length; n++, q++, p++, t++) {
            var row1 = table[i].insertRow(1);
            var cell1 = row1.insertCell(0);
            var cell2 = row1.insertCell(1);
            var cell3 = row1.insertCell(2);
            var cell4 = row1.insertCell(3);
            var cell5 = row1.insertCell(4);
            cell1.innerHTML = fname[n];
            cell2.innerHTML = quantity[q];
            cell3.innerHTML = price[p];
            cell4.innerHTML = total[t];
            //console.log(total);
            let newsum = 0;
            for (let i = 0; i < total.length; i++) {
                newsum = newsum + parseInt(total[i]);
                //console.log('sum : ', newsum);
            }
            document.getElementById("total").innerHTML = "Total : ₹ " + newsum;
            var butdel = document.createElement("button");
            butdel.className = "del";
            butdel.value = "Delete";
            butdel.innerHTML = "-";
            cell5.appendChild(butdel);
            butdel.onclick = function () {
                // event.target will be the input element.
                var td = event.target.parentNode;
                console.log(td);
                var tr = td.parentNode; // the row to be removed
                let itemName = tr.cells[0].innerHTML;
                for (let i = 0; i < ipdiv.length; i++) {
                    let div = ipdiv[i];
                    let ip = div.querySelector('input');
                    let dish_name = ip.name;
                    if (itemName == dish_name){
                        console.log(ip);
                        ip.value = parseInt(ip.value) - 1;
                        console.log(ipdiv[i]);
                    }
                }

                let q1 = parseInt(tr.cells[1].innerHTML);//quantity
                //console.log(q);
                let up = parseInt(tr.cells[2].innerHTML);//unit price
                console.log(up);
                let tp = parseInt(tr.cells[3].innerHTML);//total price for that item
                console.log(tp);
                if (q1 == 1) {
                    for(let quan = 0,nam=0,pri=0,tot=0,div=0;quan<quantity.length,nam<fname.length,pri<price.length,tot<total.length,div<ipdiv.length;quan++,nam++,pri++,tot++,div++)
                    {
                        if(fname[nam]==itemName){
                            quantity[quan] = quantity[quan]-1;
                            q1= q1 - 1;
                            tp = tp - up;
                            total[tot] = tp;
                            tr.cells[1].innerHTML = q1;
                            fname.splice(nam,1);
                            quantity.splice(quan,1);
                            price.splice(pri,1);
                            total.splice(tot,1);
                            ipdiv.splice(div,1);
                        }
                    }

                    console.log(total[t]);
                    let newsum = 0;
                    for (let i = 0; i < total.length; i++) {
                        newsum = newsum + parseInt(total[i]);
                        console.log('sum : ', newsum);
                    }
                    document.getElementById("total").innerHTML = "Total : ₹ " + newsum;
                    //sum = sum - up;
                    tr.parentNode.removeChild(tr);
                    let rows = document.getElementsByClassName("table")[0].rows.length;
                    cart(rows - 1);
                    if(fname.length==0)
                    {
                        cart(0);
                        window.location.reload();
                    }
                }
                if (q1 > 1) {
                    for(let quan = 0,nam=0,pri=0,tot=0,div=0;quan<quantity.length,nam<fname.length,pri<price.length,tot<total.length,div<ipdiv.length;quan++,nam++,pri++,tot++,div++)
                    {
                        if(fname[nam]==itemName){
                            quantity[quan] = quantity[quan]-1;
                            q1= q1 - 1;
                            tp = tp - up;
                            total[tot] = tp;
                            tr.cells[1].innerHTML = q1;
                        }
                    }

                    console.log(fname);
                    console.log(quantity);
                    console.log(price);
                    console.log(total);
                    console.log(ipdiv);
                    tr.cells[1].innerHTML = q1;
                    tr.cells[3].innerHTML = tp;
                    let newsum = 0;
                    for (let i = 0; i < total.length; i++) {
                        newsum = newsum + parseInt(total[i]);
                        //console.log('sum : ', newsum);
                    }
                    let rows = document.getElementsByClassName("table")[0].rows.length;
                    cart(rows - 1);
                    document.getElementById("total").innerHTML = "Total : ₹ " + newsum;
                }
            }
            var butadd = document.createElement("button");
            butadd.className = "add";
            butadd.value = "Add";
            butadd.innerHTML = "+";
            cell5.appendChild(butadd);
            butadd.onclick = function () {
                // event.target will be the input element.
                let td = event.target.parentNode;
                //console.log(td);
                let tr = td.parentNode; // the row to be accessed
                console.log(tr);
                // tr.parentNode.removeChild(tr);
                let itemName = tr.cells[0].innerHTML;
                //console.log(itemName);
                for (let i = 0; i < ipdiv.length; i++) {
                    let div = ipdiv[i];
                    let ip = div.querySelector('input');
                    let dish_name = ip.name;
                    if (itemName == dish_name) {
                        console.log(ip);
                        ip.value = parseInt(ip.value) + 1;
                        //console.log(ipdiv[i]);
                    }
                }
                let q2 = parseInt(tr.cells[1].innerHTML);//quantity
                //console.log(q)
                let up = parseInt(tr.cells[2].innerHTML);//unit price
                console.log(up);
                let tp = parseInt(tr.cells[3].innerHTML);//total price for that item
                console.log(tp);
                if (q2 < 20) {
                    q2 = q2 + 1;
                    tp = tp + up;
                    total[t] = tp;
                    //sum = sum + up;
                    tr.cells[1].innerHTML = q2;
                    tr.cells[3].innerHTML = tp;
                    console.log(total);
                    let newsum = 0;
                    for (let i = 0; i < total.length; i++) {
                        newsum = newsum + parseInt(total[i]);
                        console.log('sum : ', newsum);
                    }
                    document.getElementById("total").innerHTML = "Total : ₹ " + newsum;
                }
            }
        }

        let newsum = 0;
        for (let i = 0; i < total.length; i++) {
            newsum = newsum + parseInt(total[i]);
            //console.log('sum : ', newsum);
        }
        document.getElementById("total").innerHTML = "Total : ₹ " + newsum;
    }
}

function showlist() {
    document.getElementById("tb").style.display = "block";
    document.getElementById("dishes").style.display = "none";
}
function closediv() {
    document.getElementById('tb').style.display = 'none';
    document.getElementById("dishes").style.display = "block";
}
function discard() {
    window.location.reload();
}
