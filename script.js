const oquvchilar = [1, 7, 19, 22, 45, 88, 44, 21, 77, 33, 98];
const juft = [];
const toq = [];

for (let boshlash = 0; boshlash < oquvchilar.length; boshlash++) {
    if (oquvchilar[boshlash] % 2 === 0) {
        juft.push(oquvchilar[boshlash]);
    } else {
        toq.push(oquvchilar[boshlash]);
    }
}

console.log(`Juft sonlar: ${juft}`);
console.log(`Toq sonlar: ${toq}`);
