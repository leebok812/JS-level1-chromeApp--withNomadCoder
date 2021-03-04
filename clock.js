
{///////////////////Making a JS Clock part one
    console.log("===================12번===================");
    
    
    const clockContainer1 = document.querySelector(".js-clock1");
    const clockTitle = clockContainer1.querySelector("h1");
    
    function getTime(){
    
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        clockTitle.innerText = `${hours}:${minutes}:${seconds}`
    
    }
    
    
    function init() {
    
        getTime();
    
    }
    
    init();
    




    


}


{///////////////////Making a JS Clock part two
    console.log("===================13번===================");
  


    

    const clockContainer2 = document.querySelector(".js-clock2");
    const clockTitle = clockContainer2.querySelector("h2");
    
    function getTime(){
    
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    
    }
    
    
    function init() {
    
        getTime();
        setInterval(getTime,1000);
    }
    
    init();
    





}


