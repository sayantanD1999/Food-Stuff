var prevScroll = window.pageYOffset;
window.onscroll=function(){
    var currScroll = window.pageYOffset;
    if (prevScroll>currScroll)
    {
        document.getElementsByClassName("navbar")[0].style.top="0";
        document.getElementsByClassName("navbar")[0].style.transition="0.5s";
    }
    else{
        document.getElementsByClassName("navbar")[0].style.top="-100px";
        document.getElementsByClassName("navbar")[0].style.transition="0.5s";
    }

    prevScroll=currScroll;

}

$(document).ready(function () {
    $("#ip").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".row .card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

window.onload = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var x = this.responseText;
            data = JSON.parse(x);
            console.log(data[0].value);
            var eatery = " ";

            for (let i = 0; i < data.length; i++) {
                eatery += `
            <div class="card">
            <img class="card-img-top" src=${data[i].img} alt="Card image cap">
                <div class="card-body">
                    <p><span style="font-weight: bolder; font-size: larger;">${data[i].dishname}<br>
                        <h5 class="card-title">${data[i].name}</h5>
                        <p class="card-text"><i class="fas fa-map-marker-alt"></i> ${data[i].address}
                            <br><i class="fas fa-clock"></i> ${data[i].time} <br>
                            <i class="fas fa-rupee-sign"></i>
                                    ${data[i].cost}</span></p></p>
                        <a href="${data[i].link}" class="btn btn-primary">Check In</a>
                </div>
            </div>

        `
            }

            var s = document.getElementById("demo");
            s.innerHTML = eatery;
        }
    };
    xhttp.open("GET", "/json/restaurantsearch.json", true);
    xhttp.send();
}

function showcontent(){
    document.getElementById("template-div").style.display="none";
}