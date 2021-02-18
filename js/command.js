function command() {
    var command = document.getElementById('command').value;
    if (command == "Home" || command == "home") {
        self.location = '/';
    } else if (command == "About" || command == "about") {
        self.location = '/about';
    } else if (command == "Test" || command == "test") {
        self.location = '/test';
    } else {
        alert("Error");
    }
}