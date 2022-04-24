function greet(){
    let name = document.getElementById("name").value;
    if (name === ''){
        name = "world"
    }
    alert("Thank you, " +name )
}