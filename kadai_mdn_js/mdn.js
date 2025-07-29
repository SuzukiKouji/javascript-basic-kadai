const date = new Date('2024-10-12');
const year = date.getFullYear();
const month = date.getMonth() + 1; // 月は0から始まるので +1
const day = date.getDate();

console.log(`今日の日付は ${year}年${month}月${day}日です。`);