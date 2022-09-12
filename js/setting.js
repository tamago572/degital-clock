// clock.js の方で宣言されているのでコメントアウト
// const showDateCheckbox = document.getElementById('showDate');
// const dateElm = document.getElementById('date');

const bgInput = document.getElementById('bgColor');
const textInput = document.getElementById('textColor');
const body = document.getElementsByTagName('body')[0];

// 文字色のInputのValueを変更
textInput.value = '#ffffff';


function showDate() {
    if (showDateCheckbox.checked == true) {
        // 日付を表示
        console.log("設定はオンです");
        dateElm.style.display = "block";
    } else {
        // 日付を非表示
        console.log("設定はオフです");
        dateElm.style.display = "none";

    }
}
console.log(body);
console.log(bgInput.value);

function changeBgColor() {
    body.style.backgroundColor = bgInput.value;
    console.log(bgInput.value);

}

function changeTextColor() {
    body.style.color = textInput.value;
    console.log(textInput.value);

}

showDate();