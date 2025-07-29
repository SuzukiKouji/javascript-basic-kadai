const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1; // 月は0から始まるので +1
const day = date.getDate();

console.log(”{year}年${month}月${day}”);
