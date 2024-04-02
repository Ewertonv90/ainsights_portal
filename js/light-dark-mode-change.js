const modeTogglerDark = document.getElementById('dark-mode');
const modeTogglerLight = document.getElementById('light-mode');
const modeTogglerContainer1Dark = document.querySelector('.containerDark-1');
const modeTogglerContainer2Dark = document.querySelector('.containerDark-2');
const modeTogglerContainer3Dark = document.querySelector('.containerDark-3');
const modeTogglerContainer4Dark = document.querySelector('.containerDark-4');
const modeTogglerContainer1light = document.querySelector('.container-1');
const modeTogglerContainer2light = document.querySelector('.container-2');
const modeTogglerContainer3light = document.querySelector('.container-3');
const modeTogglerContainer4light = document.querySelector('.container-4');



modeTogglerDark.addEventListener('click', () => {
  function salvarPreferenciaTema(tipoTema) {
    localStorage.setItem('tema', tipoTema);
  }
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
  modeTogglerContainer1light.classList.remove('container-1');
  modeTogglerContainer2light.classList.remove('container-2');
  modeTogglerContainer3light.classList.remove('container-3');
  modeTogglerContainer4light.classList.remove('container-4');
  modeTogglerContainer1light.classList.add('containerDark-1');
  modeTogglerContainer2light.classList.add('containerDark-2');
  modeTogglerContainer3light.classList.add('containerDark-3');
  modeTogglerContainer4light.classList.add('containerDark-4');
  salvarPreferenciaTema('dark-mode')
});

modeTogglerLight.addEventListener('click', () => {
  function salvarPreferenciaTema(tipoTema) {
    localStorage.setItem('tema', tipoTema);
  }
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');
  modeTogglerContainer1light.classList.remove('containerDark-1');
  modeTogglerContainer2light.classList.remove('containerDark-2');
  modeTogglerContainer3light.classList.remove('containerDark-3');
  modeTogglerContainer4light.classList.remove('containerDark-4');
  modeTogglerContainer1light.classList.add('container-1');
  modeTogglerContainer2light.classList.add('container-2');
  modeTogglerContainer3light.classList.add('container-3');
  modeTogglerContainer4light.classList.add('container-4');
  salvarPreferenciaTema('light-mode')
});


function aplicarTemaDark() {
  function salvarPreferenciaTema(tipoTema) {
    localStorage.setItem('tema', tipoTema);
  }
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
  modeTogglerContainer1light.classList.remove('container-1');
  modeTogglerContainer2light.classList.remove('container-2');
  modeTogglerContainer3light.classList.remove('container-3');
  modeTogglerContainer4light.classList.remove('container-4');
  modeTogglerContainer1light.classList.add('containerDark-1');
  modeTogglerContainer2light.classList.add('containerDark-2');
  modeTogglerContainer3light.classList.add('containerDark-3');
  modeTogglerContainer4light.classList.add('containerDark-4');
  salvarPreferenciaTema('dark-mode')
}


function aplicarTemaLight() {
  function salvarPreferenciaTema(tipoTema) {
    localStorage.setItem('tema', tipoTema);
  }
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');
  modeTogglerContainer1light.classList.remove('containerDark-1');
  modeTogglerContainer2light.classList.remove('containerDark-2');
  modeTogglerContainer3light.classList.remove('containerDark-3');
  modeTogglerContainer4light.classList.remove('containerDark-4');
  modeTogglerContainer1light.classList.add('container-1');
  modeTogglerContainer2light.classList.add('container-2');
  modeTogglerContainer3light.classList.add('container-3');
  modeTogglerContainer4light.classList.add('container-4');
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