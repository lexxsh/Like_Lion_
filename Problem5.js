// 5번 문제.

let user = {
  name: "윤정",
  age: 20,
};
let json = JSON.stringify(user);
alert(json);
let ans = JSON.parse(json);
alert(ans.name);
alert(ans.age);