// function sendMail(){
//     var params = {
//         name: document.getElementById("Name").value,
//         email: document.getElementById("Email").value,
//         message: document.getElementById("message").value,
//     };

//     const serviceID = "service_zlyurmh";
//     const templateID = "template_73l0aug";
    
//     emailjs
//     .send(serviceID, templateID, params)
//     .then((res) =>{
//         document.getElementById("Name").value="";
//         document.getElementById("Email").value="";
//         document.getElementById("message").value="";
//         console.log(res);
//         alert("your message sent successfully");
//     })
//     .catch((err) => console.log(err));
// }

function sendMail(){
    var params = {
        from_name : document.getElementById("Name").value,
        email_id : document.getElementById("Email").value,
        message : document.getElementById("message").value
}
    emailjs.send("service_zlyurmh", "template_73l0aug", params).then(function(res){
        alert("success! Email has been sent "+ res.status);
    })
}
