## Filter

```
function filter(list, func) {
  const new_list = [];
  for(let i = 0; i < list.length; i++) {
    if (func(list[i])) {
      new_list.push(list[i]);
    }
  }
  return new_list;
}

const users_under_30 = filter(users, function(user) { return user.age < 30});
console.log('users_under_30: ', users_under_30.length); // users_under_30:  4
```

1. filter 함수는 인자로 배열과 선언문을 받는다.
2. list의 length만큼 루프를 돌고
3. 선언문에 list배열의 객체 하나씩 대입되어서 `true`인 경우 `new_list` 배열에 출력

인자로 받는 `func`에서는 `true/false`의 결과값만 filter 함수에 전달해준다.

**중요!!**

* 기존의 배열을 수정하지않고, `func`조건에 맞는 새로운 배열을 return
* 항상 동일하게 동작하는 함수를 만들고, 넘겨진 인자에만 의존한다.
* 동일한 인자가 들어온 경우엔 동일한 결과값을 리턴한다.
