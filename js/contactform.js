var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.name = document.getElementById('nameinput');
    fields.email = document.getElementById('emailinput');
    fields.message = document.getElementById('messageinput');
})

class User {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
}

function sendMessage() {
    
}
