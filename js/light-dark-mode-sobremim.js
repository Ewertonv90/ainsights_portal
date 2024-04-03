const modeTogglerDark = document.getElementById('dark-mode');
const modeTogglerLight = document.getElementById('light-mode');
const modeTogglerContainer5Dark = document.querySelector('.containerDark-5');
const modeTogglerContainer5light = document.querySelector('.container-5');




modeTogglerDark.addEventListener('click', () => {
  function salvarPreferenciaTema(tipoTema) {
    localStorage.setItem('tema', tipoTema);
  }
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
  modeTogglerContainer5light.classList.remove('container-5');
  modeTogglerContainer5light.classList.add('containerDark-5');

  salvarPreferenciaTema('dark-mode')
});

modeTogglerLight.addEventListener('click', () => {
  function salvarPreferenciaTema(tipoTema) {
    localStorage.setItem('tema', tipoTema);
  }
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');

  modeTogglerContainer5light.classList.remove('containerDark-5');
  modeTogglerContainer5light.classList.add('container-5');

  salvarPreferenciaTema('light-mode')
});


function aplicarTemaDark() {
  function salvarPreferenciaTema(tipoTema) {
    localStorage.setItem('tema', tipoTema);
  }
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');

  modeTogglerContainer5light.classList.remove('container-5');
  modeTogglerContainer5light.classList.add('containerDark-5');
  salvarPreferenciaTema('dark-mode')
}


function aplicarTemaLight() {
  function salvarPreferenciaTema(tipoTema) {
    localStorage.setItem('tema', tipoTema);
  }
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');

  modeTogglerContainer5light.classList.remove('containerDark-5');
  modeTogglerContainer5light.classList.add('container-5');
  salvarPreferenciaTema('light-mode')
}

function aplicarPreferenciaTema() {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'dark-mode') {
    aplicarTemaDark();
  } else {
    aplicarTemaLight();
  }
}

window.addEventListener('load', aplicarPreferenciaTema);