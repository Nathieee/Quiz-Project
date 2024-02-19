let countDown = document.getElementById('countDown');



const timer  = () => {
    const closingDay = new Date("June 04, 2023 18:00:00");
    const closingTime = closingDay.getTime();
    const today = new Date();
    const thisMoment = today.getTime();

    
    let timeLeft = closingTime - thisMoment;
    // console.log(timeLeft);

    let days = Math.floor((timeLeft/(1000 * 60 * 60 * 24)))
    // console.log(days);
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24) ) / (1000 * 60 * 60) )
    // console.log(hours)
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    // console.log(minutes);
    let seconds = Math.floor((timeLeft % (1000 * 60)) / (1000))
    // console.log(seconds);


    countDown .innerHTML = days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s"
}


setInterval(timer, 1000);














































