$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
    } else {
        $("nav").removeClass("black");
    }
});

function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '5px';
    }
}

var firebaseConfig = {
    apiKey: "AIzaSyCG0SXuosgkJ9TrgzLQ85exCYut60N-JH0",
    authDomain: "portfolio-contact-7d31c.firebaseapp.com",
    projectId: "portfolio-contact-7d31c",
    storageBucket: "portfolio-contact-7d31c.appspot.com",
    messagingSenderId: "819904932650",
    appId: "1:819904932650:web:9b409cbc5b1a8e157b0c53"
};
firebase.initializeApp(firebaseConfig);
document.getElementById('contact-form').addEventListener('submit', saveMessage);

function saveMessage(e) {
    e.preventDefault();
    let userName = getInputVal('name');
    let userEmail = getInputVal('email');
    let userPhone = getInputVal('phone');
    let userRole = document.getElementById('role').value;
    saveData(userName, userEmail, userRole, userPhone);
    //location.reload();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

let message = firebase.database().ref('Message');

function saveData(userName, userEmail, userRole, userPhone) {
    let newMessage = message.push();
    newMessage.set({
        userName,
        userEmail,
        userRole,
        userPhone,
    });

    document.querySelector('.toast').style.display = 'block';

    setTimeout(function () {
        document.querySelector('.toast').style.display = 'none';
    }, 6000);
}

