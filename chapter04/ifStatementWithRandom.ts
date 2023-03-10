export{}

const num = Math.round(Math.random() * 100);
console.log(`numの値${num}`);
if(num > 50) {
  console.log("50より大きい");
}
console.log("処理終了");

// Math object random() method -> 0以上1未満の乱数を発生させるメソッド

// round() method -> ()内に記述した数値に対して四捨五入を行うメソッド