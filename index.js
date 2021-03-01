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

{///////////////////Organizing Data with Arrays 
    console.log("===================4번===================");

    

        const monday = "Mon";
        const tue = "Tue";
        const wed = "Wed";
        const thu = "Thu";
        const fri = "Fri";

         console.log (monday,tue,wed,thu,fri);


         const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]; // camelCase 첫 글자는 소문자로 이어지는 부분은 대문자로
         console.log(daysOfWeek);
         console.log(daysOfWeek[2]);

        

         const someThing = "something";
         const whatEver=["Mon","Tue","Wed",54,true,someThing];
        console.log(whatEver);

}


{///////////////////Organizing Data with Objects 
    console.log("===================5번===================");


    const nicoInfo = {
    
        name:"Nico",
        age:33,
        gender:"male",
        isHandsome:true,
        favMovies: ["Alongthe gods","LOTR","Oldboy"],
        favFood: [{name:"Kimchi",fatty:false},{name:"Cheese burger", fatty:true}]
    
    }

    console.log(nicoInfo);
    
    console.log(nicoInfo.gender); // 본래의 값
    
    nicoInfo.gender = "female";
    
    console.log(nicoInfo.gender); // female로 바꾼 후 교체값

    console.log(nicoInfo.favFood[0].fatty); //  [] 대괄호안에  첫번째중괄호의 fatty 값 




    
}


{///////////////////Your first JS Function 

    console.log("===================5번===================");


        function sayHello(potato,chicken){ // 여기서 potato와 chcicken는 argument(인자)- 이름을아무거나지음 name,age 가능
            console.log('Hello!',potato,"you have",chicken,"years of age.");
        }

        sayHello("Nicolas",15); //Nicolas = potato | chicken = 15

}


{///////////////////More Function Fun 
    console.log("===================5번===================");

    // //첫번째 표현법
    // function sayHello(name,age){
    //     console.log("Hello"+name+"you are"+ age+"years old"); //자바스크립트에서는"", '' 둘다스트링임
    // }

    //두번째 표현법
    function sayHello(name, age){
        console.log(`Hello ${name} you are ${age} years old`); //쌍따옴표, 홑따옴표가 아니라 백틱임
    }

    sayHello("Nicolas",15);

    {

        function sayHello(name,age){
            return `Hello ${name} you are ${age} years old`;

        }

        const greetNicolas = sayHello("Nicolas",14)// sayHello function값을 const greetNicolas에 넣어주고 

        console.log(greetNicolas); // 여기서출력!



    }



        {


            const calculator ={

                plus : function(a,b){
                    return a+b;
                },
                minus : function(a,b){
                    return a-b;
                },
                multiplication: function(a,b){
                    return a*b;
                },
                division : function(a,b){
                    return a/b;
                },
                squareRoot : function(a,b){
                    return a**b;
                }


            }
                const plus = calculator.plus(5,5)
                console.log(plus);
               
                const minus = calculator.minus(10,2)
                console.log(minus);
                
                const multiplication = calculator.multiplication(10,10)
                console.log(multiplication);
                
                const division = calculator.division(10,2)
                console.log(division);
                
                const squareRoot = calculator.squareRoot(5,2)
                console.log(squareRoot);


        }



}


{///////////////////JS DOM Functions
    console.log("===================6번===================");


    const title = document.getElementById("title");

    title.innerHTML ="Hi! From JS";

    console.log(title);

}


{///////////////////Modifying the DOM with JS   

     console.log("===================7번===================");


    const title = document.querySelector("#title");

    title.innerHTML ="Hi! From JS";


    title.style.color="red";

    document.title ="I own you now";






}

{///////////////////Events and event handlers
    console.log("===================8번===================");


        const title = document.querySelector('#title');

    function handleResize(event){
            console.log(event); // 이벤트가 발생할때마다 console에 출력 
    }

    function handleClick(){
        title.style.color ="blue";
    }


       window.addEventListener("resize", handleResize); // 이벤트가 발생할때 호출
       // window.addEventListener("resize", handleResize()); // 바로 호출

    title.addEventListener("click",handleClick);


}

{///////////////////If, else, and, or

    console.log("===================9번===================");

            {
    if("10" === 10){
        console.log("hi");
    }else if("10" === "10"){
        console.log("lalala");
    }else{
        console.log("ho");
    }
            }

            {
    if(20 > 5 && "nico" ==="nico"){
        console.log("yes");
    }else {
        console.log("no")
    }




            }
            

            {
                if(20 > 5 || "nico" ==="mico"){
                    console.log("yes");
                }else {
                    console.log("no")
                }
            
            
            
            
                        }


                        {

                            const age = prompt("How old are you"); // prompt 는 오래된 javascript 문법

                            if(age >= 18 && age <= 21){
                                console.log('you can drink but you should not');
                            }else if( age > 21){
                                console.log("go ahead");
                            }
                            
                            else{
                                console.log('too  young');
                            }



                        }









}


{///////////////////DOM - If else - Function practice
    console.log("===================10번===================");


    // javascript dom event mdn
    const ccc = document.querySelector("#ccc");

    const BASE_COLOR="red";
    const OTHER_COLOR="blue";

    function handleClick() {
      const currentColor = ccc.style.color;
        if(currentColor === BASE_COLOR){
            ccc.style.color = OTHER_COLOR;
        }else{
            ccc.style.color = BASE_COLOR;
        }
    }
    
    function init(){
        
        ccc.style.color = BASE_COLOR;
        
    }
    
    ccc.addEventListener("click",handleClick);
    init();


    function handleOffline(){ // 와이파이꺼지면출력
        console.log("Bye Bye");
    }

    function handleOnline(){ 
        console.log ("Welcome back")
    
    }


    window.addEventListener("offline",handleOffline);
    window.addEventListener("online",handleOnline);

}

{///////////////////DOM - If else - Function practice Two
    console.log("===================11번===================");

    const title = document.querySelector("#click");

    const CLICKED_CLASS = "clicked";

    function handleClick() {
        title.classList.toggle(CLICKED_CLASS);
        //togle이 밑에 구문의 기능을 함
        // const hasClass = title.classList.contains(CLICKED_CLASS);
        // if(hasClass) {
        //     title.classList.remove(CLICKED_CLASS);
        // }else{
        //     title.classList.add(CLICKED_CLASS);
        // }
    }

     function init() {
         title.addEventListener("click", handleClick);
     }
     init();
}

