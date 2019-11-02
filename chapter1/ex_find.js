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


// find
function find(list, callback) {
  for(let i = 0; i < list.length; i++) {
    if(callback(list[i])) return list[i];
  }
}

console.log(find(users2, function(user) { return user.getAge() === 25; }).getName()); // HA
console.log(find(users2, function(user) { return user.getAge() < 30; }).getName()); // HA
