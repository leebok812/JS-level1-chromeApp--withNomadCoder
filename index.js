{
    alert('Im working. Im JS. Im Beautiful. Im worth it');
}

{ ////////// 1. Your first JS Variable(변수!)
     console.log("===================1번===================");
     let a = 221; //a를 생성하고 숫자 221로 초기화한것.
     let b = a -5; // 여기 a에 let을 쓰지 않은 이유는 위에서 생성된 a를 참조 하기 때문이다. 즉, 같은a라는 것.
    a = 4 ;  // 위에서 선언한 a를 다시 4로 업데이트 해줌.
     console.log(b,a);


}

{////////////// let, const, var
    console.log("===================2번===================");
    const a = 221; //const는 상수(constant) 변하지 않음!
    let b = a - 5; // 여기 a에 let을 쓰지 않은 이유는 위에서 생성된 a를 참조 하기 때문이다. 즉, 같은a라는 것.
   //a = 4 ;  // 위에서 선언한 a를 다시 4로 업데이트하려 했으나 위에 a를  const로 지정했기에 오류발생!
   var c = a + b;
   
    b = 7;

   c = 5; // var도 let 처럼  변환가능!
   
   
   console.log(a,b,c);





}



{///////////////////Data Types on JS
    console.log("===================3번===================");
    //첫번째 사용은 const로 let은 진짜 필요할때만
    //String
    const what  = "Nicolas";

    console.log(what);

    //Boolean
    const wat = false;

    //Number
    const watt = 777;

    //Float
    const bj = 55.1;
    




}