## Filter

```
function filter(list, predicate) {
  const new_list = [];
  for(let i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
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
3. predicate 보조함수에 list배열의 객체 하나씩 대입되어서 `true`인 경우 `new_list` 배열에 출력

인자로 받는 `predicate`에서는 `true/false`의 결과값만 filter 함수에 전달해준다.


## Map

```
function map(list, interatee) {
    const new_list = [];
    for(let i = 0; i < list.length; i++) {
        new_list.push(interatee(list[i]));
    }
    return new_list;
}

const users_under_30_age = map(users_under_30, function(user) { return user.age; });
console.log('users_under_30_age: ', users_under_30_age); // users_under_30_ages:  [ 25, 28, 27, 24 ]
```

1. map 함수는 인자로 배열과 반복문을 받는다.
2. list의 length만큼 루프를 돌고
3. interatee 조건에 따라 새로운 배열 new_list에 값을 push한다.
4. 기존의 인자로 받은 list는 변경되지 않고, 새로운 값의 배열을 반환한다.


## Find

```
function(list, predicate) {
    for(let i = 0; i < list.length; i++) {
        if(predicate(list[i])) return list[i];
    }
}
```

1. 인자로 배열과 보조함수를 받는다.
2. 배열을 순차적으로 돌리면서 보조함수의 조건에 맞으면 바로 return



## 함수형 프로그래밍 중요!!

* 기존의 배열을 수정하지않고, 보조함수 조건에 맞는 새로운 배열을 return한다.
* 항상 동일하게 동작하는 함수를 만들고, 넘겨진 인자에만 의존한다.
* 동일한 인자가 들어온 경우엔 동일한 결과값을 리턴한다.
* 보조함수를 통해 완전히 위힘하는 방식으로 취함으로 높은 다형성, 안정성을 보장.


## 함수와 관련된 개념과 기능

### 일급함수

* 함수는 일급 객체이나 일급 함수이다.
* 조건
    1. 함수를 변수에 담을 수 있다.
    2. 함수의 인자로 넘길 수 있다.
    3. 함수에서 값으로 함수를 리턴할 수 있다. 

### 클로저


### 콜백함수

* ajax와 같이 서버와 통신할 때(비동기) 사용한다.
* 콜백함수는 한번 실행 후 컨텍스트를 돌려준다.
* 많은 사람들이 함수에 익명함수를 인자로 넘겨주는 것을 모두 콜백이라고 칭하지만 사용하는 곳에 따라 명칭을 다르게 하자.

```
button.click(function() {
....
}) // 콜백함수가 아니라 이벤트리스너

예제에서 살펴본 filter, find 함수에서는 predicate.
map함수에서는 interatee
```

### 고차함수

* 함수를 인자로 받거나, 함수를 리턴하는 함수를 말한다.
* map, filter, find, findIndex 같은 함수.


