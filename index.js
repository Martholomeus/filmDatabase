console.log('test');

function submitForm(event) {
    event.preventDefault()
    var title = document.getElementById('title');
    console.log(title.value);
}