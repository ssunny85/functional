// for 문으로 필터링
const users = [
  { id: 1, name: 'ID', age: 32},
  { id: 2, name: 'HA', age: 25},
  { id: 3, name: 'BJ', age: 32},
  { id: 4, name: 'PJ', age: 28},
  { id: 5, name: 'JE', age: 27},
  { id: 6, name: 'JM', age: 32},
  { id: 7, name: 'HI', age: 24},
];

// 1. users중 age가 30 미만이 몇명인지 출력
const temp_users = [];
for(let i = 0; i < users.length; i++) {
  if(users[i].age < 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users.length); // 4

// 2. 30 미만인 그들의 나이만 다시 출력
const ages = [];
for(let i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages); // [ 25, 28, 27, 24 ]

// 3. 나이가 30 이상이 몇 명인지 출력
const temp_users_30 = [];
for(let i = 0; i < users.length; i++) {
  if(users[i].age >= 30) {
    temp_users_30.push(users[i]);
  }
}
console.log(temp_users_30.length); // 3

// 4. 나이가 30 이상인 사람들의 이름만 모아서 출력
const names = [];
for(let i = 0; i < temp_users_30.length; i++) {
  names.push(temp_users_30[i].name);
}
console.log(names); // [ 'ID', 'BJ', 'JM' ]

// filter 함수 만들기
function filter(list, func) {
  const new_list = [];
  for(let i = 0; i < list.length; i++) {
    if (func(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}

// filter 함수를 이용해 리팩토링
// 1. users중 age가 30 미만이 몇명인지 출력
const users_under_30 = filter(users, function(user) { return user.age < 30});
console.log('users_under_30: ', users_under_30.length); // users_under_30:  4

// 3. 나이가 30 이상이 몇 명인지 출력
const users_higher_30 = filter(users, function(user) { return user.age >= 30});
console.log('users_higher_30: ', users_higher_30.length); // users_higher_30:  3
