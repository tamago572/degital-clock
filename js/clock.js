const hElm = document.getElementById('h');
const mElm = document.getElementById('m');
const sElm = document.getElementById('s');
const dateElm = document.getElementById('date');
// setting checkbox
const showDateCheckbox = document.getElementById('showDate');

const clock = () => {
    // 日時 時刻 などを取得
    const now = new Date();

    // d の中から 時 を取得
    let h = now.getHours();
    h = ('0' + h).slice(-2)

    // d の中から 分 を取得
    let min = now.getMinutes();
    min = ('0' + min).slice(-2)

    // d の中から 秒を取得
    let s = now.getSeconds();
    s = ('0' + s).slice(-2)

    // d の中から 月を取得
    let mon = now.getMonth() + 1;
    // d の中から 日を取得
    let d = now.getDate();

    // 取得した時刻をHTMLに反映
    hElm.innerText = h;
    mElm.innerText = min;
    sElm.innerText = s;

    if (showDateCheckbox.checked == true) {
        dateElm.innerText = (mon + "/" + d);
        console.log("checked");
    }

}
setInterval(clock, 1000);