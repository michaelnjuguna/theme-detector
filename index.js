function checkTheme(){
    if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
        return "dark"
    }else{
        return "light"
    }
}
module.exports = checkTheme