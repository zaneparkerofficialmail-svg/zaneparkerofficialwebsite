document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function(e){
  var form = e.target;
  var name = form.name.value.trim();
  var email = form.email.value.trim();
  var msg = form.message.value.trim();
  if(!name || !email || !msg){
    e.preventDefault();
    alert('Compila tutti i campi prima di inviare.');
    return false;
  }
});