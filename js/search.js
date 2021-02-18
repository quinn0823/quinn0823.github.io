function search() {
    var search = document.getElementById('search').value;
    if (search == "Quinn's secret page") {
        self.location = 'https://quinn0823.github.io/secret';
    } else {
        alert("Error");
    }
}