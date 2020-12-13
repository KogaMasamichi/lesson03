/*lesson03-01*/

for (let point = 0; point <= 100; point++) {
    if (point >= 90) {
        console.log(point, "秀");
    } else if (point >= 75) {
        console.log(point, "優");
    } else if (point >= 60) {
        console.log(point, "良");
    } else if (point >= 30) {
        console.log(point, "可");
    } else {
        console.log(point, "不可");
    }
}

const points = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65];

function scoring(point) {
    if (point >= 90) {
        console.log(point, "秀");
    } else if (point >= 75) {
        console.log(point, "優");
    } else if (point >= 60) {
        console.log(point, "良");
    } else if (point >= 30) {
        console.log(point, "可");
    } else {
        console.log(point, "不可");
    }
}

points.forEach((point) => {
    scoring(point);
});





/*lesson03-02*/
const num = Math.random();

if (num >= 0.5) {
    console.log("表");
} else if (num < 0.5) {
    console.log("裏");
}


function cointoss() {
    const num = Math.random();
    if (num >= 0.5) {
        console.log("表");
    } else if (num < 0.5) {
        console.log("裏");
    }

}

for (let i = 0; i < 10; i++) {
    cointoss();
}
