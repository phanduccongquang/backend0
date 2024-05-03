let n = prompt(" nhap vao so nguyen n tu 1 den 99");
console.log(n);
while (isNaN(n) || n > 99 || n < 1 || n % 1 !== 0) {
    n = Number(prompt(" so ban nhap ko hop le vui long nhap lai"));
}
alert("ban da nhap so" + n);
console.log('quangh');
console.log('quangh');