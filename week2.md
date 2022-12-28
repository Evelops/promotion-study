/*
    MDN에서 object의 종류 확인하기

    - js는 runtime에 동적으로 타입이 변경된다.

    @ Class

    1. Class
    - object는 key와 value의 집합체이다.



    @ object 선언방법
    1-1 const obj = {name = "jjs"};

    1-2 
    class Obj{
        
        constructor(name){
            this.name = name;
        }

    }

    const obj = new Obj("jjs");


    1-3 constructor function
    function Person(name, age){
        this.name = name;
        this.age = age;
    }

    const person1 = new Person("jjs", 23);


*/

/*

    2. Literal properties
    - 속성의 추가 / 삭제를 동적으로 할 수 있다.

    - 추가
    const obj = {name = "jjs"};

    obj.age = 20;


    - 삭제
    delete obj.age;

*/


/*
    3.Computed properties

    console.log(obj.name); // Literal properties
    console.log(obj["name"]); //Computed properties


    - object의 속성을 불러오는 방식이다.
    두 방식 모두 사용이 가능하다.

    - Computed properties의 키는 string으로 
    불러와야 한다.

    - 는 속성명을 알고 있을 경우(보통의 경우)에
    접근해서 사용하는 방식

    - Computed properties는 속성명이 정해져 있지않은
    경우 접근할 때 사용된다.
    ex) 

    const obj = new Object();
    printValue(key){
        console.log(obj[key]);
    }

*/


/*
    4. in operator
    - in이라는 키워드로 
    해당 키에 값이 있는지 확인할 수 있다.

    - 결과는 true/false로 출력된다.
    ex)

    console.log('name' in obj);
    console.log('age' in obj);
    console.log('value' in obj);

*/



/*
    5. 반복문(for ..in / for ..of)

    5-1 for ..in

    - object의 모든 key에 접근하기 위한 함수

    for(key in person){
        console.log(key);
    }

    결과:
    person의 모든 key값이 출력된다.

    ex)
    class Obj{
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.hasjob = true;
        }
    }

    const person = new Obj("jjs", 28);

    for(key in person){
        console.log(key);
    }


    5-2 for ..of
    - 배열에 담긴 모든 value값에 접근하기 위한 함수

    const array = [1, 2, 5, 7];

    for(value of array){
        console.log(value);
    }

    결과:
    1 2 5 7
*/





/*
    6. cloning

    6-1. 같은 object 참조
    const user1 = {name: 'jjs', age: 20};
    const user2 = user1;
    
    user2.name = "tom";
    console.log(user1.name);
    결과: tom

    - const user2 = user1; 이것은
    user1의 속성 값이 저장된 경로를 저장하기 때문에
    user1과 user2 모두 user1에서 할당한 속성들의
    실제 값의 경로가 저장된다.
    그러므로
    user2.name = "tom"; 여기서 name 속성의 값이
    변경되었기 때문에 user1.name을 해도
    변경된 tom이 출력된다.


    6-2 object 복사

    - 예전 방식
    const user1 = {name: 'jjs', age: 20};
    const user3 = {};

    for(key in user){
        user3[key] = user[key];
    }

    console.log(user3);

    결과: {name: 'jjs', age: 20}


    - 새로운 방식
    Object.assign(저장하려는 object, 복사하려는 object);
    

    ex) 
    const user3 = {};

    Object.assign(user3, user1);
    console.log(user3);

    결과: {name: 'jjs', age: 20}



    - 응용 방식
    Object.assign(빈 object, 저장될 obj1, 저장될 obj2, 저장될 obj3 ...)
    이렇게 여러개를 입력하면 덮어쓰기 된다.
    

    const fruit1 = {color: "red"};
    const fruit2 = {color: "green", price: 1000};
    const mixed = Object.assign({}, fruit1, fruit2);

    console.log(mixed.color);
    console.log(mixed.price);

    결과: green, 1000

*/


const fruit1 = {color: "red"};
    const fruit2 = {color: "green", price: 1000};
    const mixed = Object.assign({}, fruit1, fruit2);

    console.log(mixed.color);
    console.log(mixed.price);
