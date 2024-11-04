
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();  //this function will return the number of months
}

//below is a function for calculating the age 

let user_input = document.getElementById("date")
user_input.max = new Date().toISOString().split("T")[0]
let result = document.getElementById("result")

let calculate_age = document.getElementById('calculate_age')

calculate_age.addEventListener('click', function(e){
    let birth_date = new Date(user_input.value);

    let d1 = birth_date.getDate()
    let m1 = birth_date.getMonth() + 1;
    let y1 = birth_date.getFullYear()

    let today = new Date();

    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()

    let d3, m3, y3;
    y3 = y2 - y1;

    if ((m2 - m1) >= 0) {
        m3 = m2 - m1;
    }

    else {
        m3 = m2 - m1 + 12;
        y3--;
    }


    if (d2 - d1 >= 0) {
        d3 = d2 - d1;
    }

    else {
        m3--;
        d3 = getDaysInMonth(m1, y1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;

});

//function calculate_age() {
    // let birth_date = new Date(user_input.value);

    // let d1 = birth_date.getDate()
    // let m1 = birth_date.getMonth() + 1;
    // let y1 = birth_date.getFullYear()

    // let today = new Date();

    // let d2 = today.getDate()
    // let m2 = today.getMonth() + 1
    // let y2 = today.getFullYear()

    // let d3, m3, y3;
    // y3 = y2 - y1;

    // if ((m2 - m1) >= 0) {
    //     m3 = m2 - m1;
    // }

    // else {
    //     m3 = m2 - m1 + 12;
    //     y3--;
    // }


    // if (d2 - d1 >= 0) {
    //     d3 = d2 - d1;
    // }

    // else {
    //     m3--;
    //     d3 = getDaysInMonth(m1, y1) + d2 - d1;
    // }

    // if (m3 < 0) {
    //     m3 = 11;
    //     y3--;
    // }

    // result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;

//}
 