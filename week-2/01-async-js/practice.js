function showTime(){
    const time=new Date();
    const hrs=time.getHours();
    const min=time.getMinutes();
    const sec=time.getSeconds();
    console.log("Current time is : ",hrs," : ",min," : ",sec);
}

setInterval(showTime,1000);