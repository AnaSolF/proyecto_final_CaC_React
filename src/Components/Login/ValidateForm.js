/*  Your password must contain at least one capital letter, one
    *number and one lowercase letter, and it must contain at least 8
    *characters*/
    function validateForm ( event ) {
        let pass = event.target.value;
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
        let test = reg.test(pass);
        if(!test){
            alert("Password not valid... Please try again");
        }
        return test;
    }
    
    export { validateForm }