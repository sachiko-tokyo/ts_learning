export{}

const score = Math.round(Math.random() * 100);
console.log(`点数は${score}点です。`);
if(score >= 80) {
  console.log("A");
} else if(score >= 70) {
  console.log("B");
} else if(score >= 60) {
  console.log("C");
} else {
  console.log("D");
} 
console.log("判定終了");