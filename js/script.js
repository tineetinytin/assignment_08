let form = document.getElementById('empForm');
let id = document.getElementById('id').value;
let name = document.getElementById('name').value;
let ext = document.getElementById('ext').value;
let email = document.getElementById('email').value;
let department = document.getElementById('department').value;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`ID: ${id}`);
    console.log(`Name: ${name}`);
    console.log(`Extesion: ${ext}`);
    console.log(`Email: ${email}`);
    console.log(`Department: ${department}`);
});







