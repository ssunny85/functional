function User(id, name, age) {
  this.getId = function() {
    return id;
  };
  this.getName = function() {
    return name;
  };
  this.getAge = function() {
    return age;
  };
}

const users2 = [
  new User(1, 'ID', 32),
  new User(2, 'HA', 25),
  new User(3, 'BJ', 32),
  new User(4, 'PJ', 28),
  new User(5, 'JE', 27),
  new User(6, 'JM', 32),
  new User(7, 'HI', 24),
];


// find: 보조함수에 맞는 조건의 경우 바로 return 함으로써 함수가 종료된다. -> 결과값이 배열이 아닌 객체
function find(list, callback) {
  for(let i = 0; i < list.length; i++) {
    if(callback(list[i])) return list[i];
  }
}

console.log(find(users2, function(user) { return user.getAge() === 25; }).getName()); // HA
console.log(find(users2, function(user) { return user.getAge() < 30; }).getName()); // HA


// findIndex: -1값은 매칭되는 값이 없는 경우, i는 보조함수에 맞는 조건의 경우 index를 리턴한다.
function findIndex(list, predicate) {
  for(let i = 0; i < list.length; i++) {
    if(predicate(list[i])) return i;
  }
  return -1;
}
