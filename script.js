const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');

setInterval(() => {
  const data_now = new Date();
  const hr = data_now.getHours();
  const min = data_now.getMinutes();
  const sec = data_now.getSeconds();

  const hourText = hr < 10 ? "0"+ hr.toString() : hr
  const minuteText = min < 10 ? "0" + min.toString() : min
  const secondsText = sec <10 ? "0" + sec.toString() :sec

  hour.textContent = hourText;
  minute.textContent = minuteText;
  
  seconds.textContent = secondsText;
},1000 )
