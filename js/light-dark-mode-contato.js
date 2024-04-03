const modeTogglerDark = document.getElementById('dark-mode');
const modeTogglerLight = document.getElementById('light-mode');
const modeTogglerContainer6Dark = document.querySelector('.containerDark-6');
const modeTogglerContainer6light = document.querySelector('.container-6');




modeTogglerDark.addEventListener('click', () => {
  function salvarPreferenciaTema(tipoTema) {
    localStorage.setItem('tema', tipoTema);
  }
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
  modeTogglerContainer6light.classList.remove('container-6');
  modeTogglerContainer6light.classList.add('containerDark-6');

  salvarPreferenciaTema('dark-mode')
});

modeTogglerLight.addEventListener('click', () => {
  function salvarPreferenciaTema(tipoTema) {
    localStorage.setItem('tema', tipoTema);
  }
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');

  modeTogglerContainer6light.classList.remove('containerDark-6');
  modeTogglerContainer6light.classList.add('container-6');

  salvarPreferenciaTema('light-mode')
});


function aplicarTemaDark() {
  function salvarPreferenciaTema(tipoTema) {
    localStorage.setItem('tema', tipoTema);
  }
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');

  modeTogglerContainer6light.classList.remove('container-6');
  modeTogglerContainer6light.classList.add('containerDark-6');
  salvarPreferenciaTema('dark-mode')
}


function aplicarTemaLight() {
  function salvarPreferenciaTema(tipoTema) {
    localStorage.setItem('tema', tipoTema);
  }
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');

  modeTogglerContainer6light.classList.remove('containerDark-6');
  modeTogglerContainer6light.classList.add('container-6');
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