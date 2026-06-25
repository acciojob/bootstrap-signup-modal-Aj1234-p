//your JS code here. If required.
const button = document.querySelector("#btn");
const forms = document.querySelectorAll('.needs-validation')
button.addEventListener('click',()=>{
	forms.classList.remove("d-none");
})