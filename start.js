(() => {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    function setElementInnerText(id, text) {
        const element = document.getElementById(id);
        element.innerText = text;
    }

    function countDown() {
        const now = new Date().getTime();
        //console.time(now)
        var newYear = new Date('November 29, 2020 04:01:59').getTime();
        const unixTimeleft = newYear - now;

        setElementInnerText('days', Math.floor(unixTimeleft / DAY));
        setElementInnerText('hours', Math.floor(unixTimeleft % DAY / HOUR));
        setElementInnerText('minutes', Math.floor(unixTimeleft % HOUR / MINUTE));
        setElementInnerText('seconds', Math.floor(unixTimeleft % MINUTE / SECOND));
    }
    

    if (countDown() !== new Date('November 29, 2020 04:01:59').getTime()) {
        function run() {
            countDown();
            console.log(countDown, "true")
            setInterval(countDown, SECOND)
        }
        run();
    } else {
        console.log("HAPPY NEW YEAR 2021")
        clearInterval(countDown)
        console.log(countDown, "fales")

    }

})();
