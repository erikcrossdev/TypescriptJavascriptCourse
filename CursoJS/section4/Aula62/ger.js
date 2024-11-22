function* geradora5() {
  yield function () {
    console.log("Vim do y1");
  };

  yield function () {
    console.log("Vim do y2");
  };
}

const g5 = geradora5();
const f1 = g5.next().value;
const f2 = g5.next().value;

f1();
f2();
