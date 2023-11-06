
let age = document.getElementById("date");
age.max = new Date().toISOString().split("T")[0];

function calculateAge(){

    let birthDate = new Date(age.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();

    const today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let y3 = y2-y1;
    let m3,d3;
    if(m2>=m1){
        m3 = m2-m1;
    }
    else{
        y3--;
        m3 =12+m2-m1;
    }
    if(d2>=d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        d3 = getEdjectDate(y1,m1)+d2-d1;
    }

    function getEdjectDate(year,month){
        return new Date(year,month,0).getDate();
    }
let display = document.getElementById("show");

display.innerHTML = `You are <span> ${y3} </span> years,<span> ${m3}</span> months  and <span>${d3}</span> days  old`;
}
