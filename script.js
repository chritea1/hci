function submitForm(e){
    e.preventDefault(); 
    console.log("submit");

    let form = e.target;
    let Name = form.elements["Name"].value;
    let Email = form.elements["Email"].value;
    let Password = form.elements["Password"].value;
    let ConfirmPass = form.elements["ConfirmPass"].value;
    let MemberType = form.elements["ConfirmPass"].value;
    let Gender = form.elements["Gender"].value;
    let Agree = form.elements["Agree"].checked;
    // let Submit = form.elements["Submit"].checked;

    let error = document.getElementById("error");
    let success = document.getElementById("success");
    // success.innerHTML="";
    //Nama
    if(Name==""){
       alert("we need your name!!!");
        return;
    }
    if(Name.length < 5 || Name.length > 50){
        // error.innerHTML = "Nama minimal 5 max 50";
        alert("MAX 50");
        return;
    }
    //Email
    if(Email.length < 5 || Name.length > 50){
        // error.innerHTML = "Nama minimal 5 max 50";
        alert("Nama minimal 5 max 50");
        return;
    }
    if(Email.indexOf('@')<=0){
        // document.getElementById("Message").innerHTML="**Invalid @position";
        alert("Invalid @position");
        return;
    }
    if((Email.charAt(Email.length-4)!='.')&& (Email.charAt(Email.length-3)!='.')){
        // document.getElementById("Message").innerHTML="**Invalid. position";
        alert("Invalid. position ")
        return;
    }
    //Password
    if(Password < 8 || Password > 20 ){
        // error.innerHTML = "Password minimal 8 max 20";
        alert("Password Minimal 8 max 20");
        return;
    }
    if(ConfirmPass < 8 || ConfirmPass > 20 ){
        // error.innerHTML = "Password minimal 8 max 20";
        alert("Password minimal 8 max 20");
        return;
    }
   
   //Gender
    if(Gender==""){
        // error.innerHTML = "Gender  harus dipilih";
        alert("Gender harus dipilih");
        return;
    }
    if(!Agree){
        // error.innerHTML = "You Must Agree!!";
        alert("You Must Aggree!!")
        
        return;
    }
//masukin data
let results = document.getElementById("results");
//ini ditamabahin style=display
results.innerHTML+=`
<div class="main-regristasi" style="display:none">
            <div>
                <div>${Name} (${MemberType})</div>
                <div>Gender : ${Gender}</div>
                <div>Email : ${Email}</div>
            </div>
            <div>
            <button onclick="deleteData(event)">X</button>
            </div>
        </div>`;
    $("#results").children(":last").slideDown();

        
    error.innerHTML = "";
    success.innerHTML = "Success Register  " + Name;
    form.reset();
 
}
function deleteData(e){
    // let r=confirm("Are you suer?");
    let r=true;
    if(r){
    
    // e.target.parentNode.parentNode.remove();
    $(e.target.parentNode.parentNode).slideUp();
    (function(){
        $(this).remove();
    });
    }
}
