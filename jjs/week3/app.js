// 화
// Q1. make a string out of an array
{
    // const fruits = ['apple', 'banana', 'orange'];

    // // 내가한 방식
    // let value;
    // value = fruits[0];
    // value = value + ", " + fruits[1];
    // value = value + ", " + fruits[2];
    // console.log(value);


    // // 알려준 방식
    // const result = fruits.join(", ,");
    // console.log(result);

  }
  
  // Q2. make an array out of a string
  {
    // string to array
    // const fruits = '🍎, 🥝, 🍌, 🍒';
    // const result = fruits.split(', ', 2); // ("구분자", 개수)
    // console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    // 배열 순서 역순으로 변경
    const array = [1, 2, 3, 4, 5];

    // 내가 한 방식
    // array.splice(0, 4);
    // array.push(4);
    // array.push(3);
    // array.push(2);
    // array.push(1);

    // 알려준 방식
    // const result = array.reverse();
    // console.log(result);

  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];

    // 내가 한 방식. array 자체를 변경
    // const result = array.splice(2, 3);
    // console.log(array);
    // console.log(result);

    // 알려준 방식. 원하는 부분만 따로 생성
    // const result = array.slice(2, 5);
    // console.log(array);
    // console.log(result);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];


  
  // Q5. find a student with the score 90
  {
    // 내가 한 방식
    // for(student of students){
    
    //     if(student.score >= 90){
    //         console.log(student.name);
    //     }
    // }


    // 알려준 방식. 응답을 boolean으로 하고 매개변수로 callback 함수를 받는다.
    // const resut = students.find(function(student){
    //     return student.score === 90;
    // });
    // console.log(resut);
  }
  
  // Q6. make an array of enrolled students
  {
    // for(student of students){

    //     console.log(student.name);
    
    // }
  
    // 알려준 방식
    // const result = students.filter((student) => student.enrolled);
    // console.log(result);

}
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    // let scores = [];

    // for(student of students){
    //     scores.push(student.score);
    // }
    // console.log(scores);

    // 알려준 방식. 배열의 길이 만큼 해당 index의 값을 매개변수로 받는 callback을 처리한 이후 배열을 리턴
    // const result = students.map((Student) => Student.score);
    // console.log(result);


  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    // for(student of students){
    //     if(student.score < 50){
    //       console.log("50점 미만인 학생 있습니다.");
    //       break;
    //     }
    // }


    // 알려준 방식. 배열의 인자 중 하나라도 조건에 해당하면 true, 아니면 false 리턴 
    // const result = students.some((student) => student.score < 50);
    // console.log(result);

    // // 배열의 모든 인자가 조건이 만족하면 true 아니면 false
    // const result2 = students.every((student) => student.score >= 50);
    // console.log(result2);

  }
  
  // Q9. compute students' average score
  {
//     let average_score = 0;

//   for(student of students){
//     average_score = average_score + student.score;
//     }
  
//     console.log(average_score/5);

    // 알려준 방식
    // const result = students.reduce((prev, curr) => {

    //     return prev+curr.score;
    // }, 0);
    // console.log(result/students.length);
    
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
//     let value = "";
//     let count = 0;

//   for(student of students){
//     if(count == 0){
//         value = student.score;
//     } else{
//         value = value +", "+ student.score;
//     }
//     count++;
//     }
  
//     console.log(value);


    // 알려준 방식
    // map으로 배열에서 필요한 부분만 배열로 리턴
    // join()으로 string으로 변환 
    const result = students.map((student) => student.score)
    .join(", ");
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students.map((student) => student.score)
    .sort((a, b) => a -b)
    .join(", ");
    console.log(result);
  }

// 수
/*

@ HTTP 통신을 하기 위한 API
- fetch() api
- XHR


@ XML
- 마크업 언어
- 데이터를 표현하기 위한 문서
- 가독성이 좋지 않다.

@ JSON
- key-value 형식의 데이터 포맷
- 경량
- 직렬화하고 데이터 전속을 위해 사용
- 대부분의 언어에서 사용이 가능하다.


@ object to Json 방법
- 함수는 제외된다.

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: 'small',
    jump: () =>{
        console.log("jump");
    }
}
json = JSON.stringify(rabbit);
console.log(json);

// JSON.stringify(json, property)를 하면
// property에 해당하는 원하는 속성만 넣을 수 있다.
json = JSON.stringify(rabbit, ["name"]);
console.log(json);


@ Json to Object
JSON.parse()
- object에 함수가 있는 경우 JSON으로 변환하게 되면
  함수는 제외되기 때문에 다시 JSON.parse() 메소드로
  Object로 변환하여도 함수는 포함되지 않는다.

const rabbit = {
    name: 'tori',
    color: 'white',
    size: 'small',
    jump: () =>{
        console.log("jump");
    }
}

let json = JSON.stringify(rabbit);

const obj = JSON.parse(json);

console.log(obj);
obj.jump();
*/
  
