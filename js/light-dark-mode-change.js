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
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
});

modeTogglerLight.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');
});

function addClickEventToDarkContainers(container, darkClass) {
  container.addEventListener('click', () => {
    container.classList.remove('container-1', 'container-2', 'container-3', 'container-4');
    container.classList.add(darkClass);
  });
}


addClickEventToDarkContainers(modeTogglerContainer1light, 'containerDark-1');
addClickEventToDarkContainers(modeTogglerContainer2light, 'containerDark-2');
addClickEventToDarkContainers(modeTogglerContainer3light, 'containerDark-3');
addClickEventToDarkContainers(modeTogglerContainer4light, 'containerDark-4');
