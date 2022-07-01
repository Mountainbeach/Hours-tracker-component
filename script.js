const data_url = "data.json";
const categories = document.querySelectorAll(".category");
const currenthours = document.querySelectorAll(".hours");
const previoushours = document.querySelectorAll(".last-week");


getData(data_url);

async function getData(url){
    var response = await fetch(url);
    var data = await response.json();
    return data
}

async function addData(filter){
    data = await getData(data_url);
    console.log(data);
    console.log(data[0].timeframes.daily.current);

    if (filter == "Daily"){
        for(i = 0; i < categories.length; i++){
            categories[i].innerHTML = data[i].title
            currenthours[i].innerHTML = data[i].timeframes.daily.current + "hrs"
            previoushours[i].innerHTML = "Last Week - " + data[i].timeframes.daily.previous + "hrs"
        }
    }
    else if (filter == "Weekly"){
        for(i = 0; i < categories.length; i++){
            categories[i].innerHTML = data[i].title
            currenthours[i].innerHTML = data[i].timeframes.weekly.current + "hrs"
            previoushours[i].innerHTML = "Last Week - " + data[i].timeframes.weekly.previous + "hrs"
        }
    }
    else if (filter == "Monthly"){
        for(i = 0; i < categories.length; i++){
            categories[i].innerHTML = data[i].title
            currenthours[i].innerHTML = data[i].timeframes.monthly.current + "hrs"
            previoushours[i].innerHTML = "Last Week - " + data[i].timeframes.monthly.previous + "hrs"
        }
    }
}


document.querySelector(".btn-daily").classList.add("active")
function filter(x){
    document.querySelector(".btn-daily").classList.remove("active");
    document.querySelector(".btn-weekly").classList.remove("active");
    document.querySelector(".btn-monthly").classList.remove("active");
    x.classList.add("active");
    addData(x.innerHTML);
}

addData("Daily");