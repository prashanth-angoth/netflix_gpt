const validation = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[^A-Za-z0-9]).{4,}$/;
    
    if(email === '' || password === ''){
        return "Please fill all the fields";
    }
    if(!emailRegex.test(email)){
        return "Please enter a valid email address";
    }
    if(!passwordRegex.test(password)){
        return "Password must be at least 4 characters long and contain at least one special character and one number";
    }
    return "Valid";
}
export default validation;