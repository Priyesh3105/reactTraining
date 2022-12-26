const user =[];


function showResult(){
    
    var userLength = user.length+1;
    user.push("User no. "+ userLength +"<br>" +
    document.getElementById("name").value +"<br>" +
    document.getElementById("mail").value +"<br>" +
    document.getElementById("cnum").value +"<br><br>" );
    
    document.getElementById("p1").innerHTML = user;
}
