function command() {
    var command = document.getElementById('command').value;
    if (command == "Quinn's secret page") {
        self.location = 'https://quinn0823.github.io/secret';
    } else {
        alert("Error");
    }
}