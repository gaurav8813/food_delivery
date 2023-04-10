
const firebaseConfig = {
    apiKey: "AIzaSyAYRXopywLD550RvmT-z_nghSQY9zETkbs",
    authDomain: "contact-form-fooddelivery.firebaseapp.com",
    databaseURL: "https://contact-form-fooddelivery-default-rtdb.firebaseio.com",
    projectId: "contact-form-fooddelivery",
    storageBucket: "contact-form-fooddelivery.appspot.com",
    messagingSenderId: "415870547900",
    appId: "1:415870547900:web:a05eb5dd4293bbf9591db9"
  };

 firebase.initializeApp(firebaseConfig);

  let contactFormDB = firebase.database().ref('contactForm')

document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault();
   let name = getElementVal("name");
   let order = getElementVal("order");
   let phone = getElementVal("phone");
   let message = getElementVal("message");

   saveData(name, order, phone, message);

   document.querySelector(".alert").style.display = "block";
}

const saveData = (name, order, phone, message)=>{
    let newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        order: order,
        phone: phone,
        message: message
    });
    
}
const getElementVal = (id) =>{
    return document.getElementById(id).value;
}
