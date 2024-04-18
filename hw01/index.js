let a = +prompt("Введите коэффициент a");
let b = +prompt("Введите коэффициент b");
let c = +prompt("Введите коэффициент c");
let d = (b ** 2) - (4 * a * c);
if (d < 0) {
    console.log("Корней нет");
} else if (d == 0) {
    console.log("Есть 1 корень");
} else if (d > 0) {
    console.log("Есть 2 корня");
} else {
    console.log("Ввод некорректен");
}