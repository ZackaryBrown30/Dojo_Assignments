function bracesValid(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) =="(" || str.charAt(i) == "[" || str.charAt(i) == "{") {
            count++;
        }
        if (str.charAt(i) ==")" || str.charAt(i) == "}" || str.charAt(i) == "]") {
            count--;
        }
        if (count < 0 ) {
            return false;
        }
    }
    if (count !=0) {
        return false
    }
    return true;
}


bracesValid("{([])}")
if (bracesValid === "true") {console.log("true");}
else console.log(bracesValid("{([])}"))

//return statement is abit strange but it should be solid