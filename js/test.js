const num1 = document.getElementById("num1"); // 요소 추적 O, 값, 속성 추적 X
const num2 = document.getElementById("num2");
const result = document.getElementById("result");


function plus() {

    // 함수가 호출 되었을 때 내부 코드가 해석되면서 수행.
    const plus = Number(num1.value) + Number(num2.value);
    result.innerText = plus;
}

function minus() {
    const minus = Number(num1.value) - Number(num2.value);
    result.innerHTML = minus;
}
function multi() {
    const multi = Number(num1.value) * Number(num2.value);
    result.innerHTML = multi;
}
function divied() {
    const divied = Number(num1.value) / Number(num2.value);
    result.innerHTML = divied;
}
function percent() {
    const percent = Number(num1.value) % Number(num2.value);
    result.innerHTML = percent;
}


