const hour = document.getElementById('clock-hour'),
    minutes = document.getElementById('clock-minutes'),
    seconds = document.getElementById('clock-seconds');

const clock = () => {
    const now = new Date();
    const hh = now.getHours() * 30,
        mm = now.getMinutes() * 6,
        ss = now.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;

    textHour.innerText = hh;
    textMinutes.innerText = mm;
};

setInterval(clock, 1000);

const textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    textAmPm = document.getElementById('text-ampm'),
    textDay = document.getElementById('date-day'),
    textMonth = document.getElementById('date-month'),
    textYear = document.getElementById('date-year');

const clockText = () => {
    const now = new Date();

    const hour =
        now.getHours() >= 12 ? `0${now.getHours() - 12}`.slice(-2) : `0${now.getHours()}`.slice(-2);
    const ampm = now.getHours() >= 12 ? 'pm' : 'am';
    const minutes = `0${now.getMinutes()}`.slice(-2);
    const date = `0${now.getDate()}`.slice(-2);
    const month = now.getMonth();
    const year = now.getFullYear();

    textHour.innerText = `${hour}:`;
    textMinutes.innerText = minutes;
    textAmPm.innerText = ampm;

    let months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    textDay.innerText = date;
    textMonth.innerText = months[month];
    textYear.innerText = year;
};
setInterval(clockText, 1000);

/*==================== DARK/LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-sun';

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
});
