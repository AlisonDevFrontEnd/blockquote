// Seleciona o checkbox 
const toggleDarkMode = document.getElementById('darkModeToggle');

// Verifica o estado do checkbox e aplica o modo escuro 
toggleDarkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggleDarkMode.checked);
});