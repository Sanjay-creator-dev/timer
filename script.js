const endDate = "5 July 2024 9:13 PM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    console.log(diff);
    if(diff<0) return;
    //convert into days
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = (Math.floor(diff/3600)%24);
    inputs[2].value = (Math.floor(diff/60) % 60);
    inputs[3].value = (Math.floor(diff)% 60);


}

clock();

setInterval(
    () => {
        clock();
    },1000
)

//1 day =24hours
// 1hour =60mins
//60mins --3600sec