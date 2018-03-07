module.exports={
    minChar(data,size){
        if(data && data.length>=size){
            return true;
        }else{
            return false;
        }
    },
    maxChar(data,size){
        console.log(data.length);
        if(data && data.length<=size){
            return true;
        }else{
            return false;
        }
    },
    emailValidate(data){
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(data)){
            return true;
        }else {
            return false;
        }
    }
}