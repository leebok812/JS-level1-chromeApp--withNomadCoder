{///////////////////Saving the User Name part One
   


    const form = document.querySelector(".js-form"),
        input = form.querySelector("input"),
        greeting = document.querySelector(".js-greeting");

    const USER_LS = "currentUser",
        SHOWING_CN = "showing";

    function paintGreeting (text) {
        form.classList.remove(SHOWING_CN);
        greeting.classList.add(SHOWING_CN);
        greeting.innerText = `Hello ${text}`
    }


    function loadName(){
            const currentUser = localStorage.getItem(USER_LS);
            if(currentUser === null){
                    //She is not

            }else{
                //SHe is not
                paintGreeting(currentUser);


            }
    }


     function init() {

        loadName();

     }


   init();

}