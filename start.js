// (() => {
//     const SECOND = 1000;
//     const MINUTE = SECOND * 60;
//     const HOUR = MINUTE * 60;
//     const DAY = HOUR * 24;

//     function setElementInnerText(id, text) {
//         const element = document.getElementById(id);
//         element.innerText = text;
//     }

//     function countDown() {
//         const now = new Date().getTime();
//         //console.time(now)
//         var newYear = new Date('December 31, 2020 23:59:59').getTime();
//         const unixTimeleft = newYear - now;

//         setElementInnerText('days', Math.floor(unixTimeleft / DAY));
//         setElementInnerText('hours', Math.floor(unixTimeleft % DAY / HOUR));
//         setElementInnerText('minutes', Math.floor(unixTimeleft % HOUR / MINUTE));
//         setElementInnerText('seconds', Math.floor(unixTimeleft % MINUTE / SECOND));
//     }




//       function  run() {
//             countDown();
//             console.log(countDown, "true")
//             setInterval(countDown, SECOND)
//         }
//         run();


// })();

// Simple CountDown Clock

const comingdate = new Date("Dec 31, 2020 23:59:59");

const d = document.getElementById("d");
const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");

const countdown = setInterval(() => {
  const now   = new Date();
  const des   = comingdate.getTime() - now.getTime();
  const days  = Math.floor(des / (1000 * 60 * 60 * 24));
  const hours = Math.floor((des % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((des % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((des % (1000 * 60)) / 1000);

  d.innerHTML = getTrueNumber(days);
  h.innerHTML = getTrueNumber(hours);
  m.innerHTML = getTrueNumber(mins);
  s.innerHTML = getTrueNumber(secs);

  x = null;
  if (x <= 0) clearInterval(x);
}, 1000);

const getTrueNumber = x => (x < 1 ? '0' : x);