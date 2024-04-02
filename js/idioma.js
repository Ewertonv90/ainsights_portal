function changeLanguage(lang) {
  // Define um objeto com as traduções para cada idioma
  const translations = {
    'pt-br': {
      'buttonText': 'Português',
      'flagImage': 'img/brazil.png',
      'text1' :'Home',
      'text2'  : 'Sobre mim',
      'text3' :'Portifólio',
      'text4'  : 'Contato',
      'text5' :'Construindo estradas digitais para o futuro, através dos dados.',
      'text6'  : 'Por que arriscar seus dados com profissionais de qualificação duvidosa e sem experiência? Deixe a AInsights cuidar de tudo para que você possa se concentrar no que realmente importa: os seus negócios!',
      'text7' :'Profissional certificado e experiente em soluções na nuvem da AWS',
      'text8'  : 'Profissional altamente qualificado em uma variedade de ferramentas open source amplamente adotadas no mercado',
      'text9' :'Navegar pelo site',
      'text10'  : 'Redes Sociais e contatos',
      'text11' :'Me mande um E-mail',
      'text12'  : 'Fale comigo no WhatsApp',
      'text13' :'Fale comigo no Instagram',
      'text14'  : 'Buscar',
      'text15' :'Buscar no site',
      'text16'  : '',
      'text17' :'',
      'text18'  : ''
    },
    'en-us': {
      'buttonText': 'English',
      'flagImage': 'img/estados-unidos.png',
      'text1' :'Home',
      'text2'  : 'About me',
      'text3' :'Portfolio',
      'text4'  : 'Contact',
      'text5' :'Building digital roads for the future, through data.',
      'text6'  : 'Why risk your data with professionals with dubious qualifications and no experience? Let AInsights take care of everything so you can focus on what really matters: your business!',
      'text7' :'Certified Professional and Experienced in AWS New Solutions',
      'text8'  : 'Highly qualified professional in a variety of open source tools widely used on the market',
      'text9' :'Navigate the website',
      'text10'  : 'Social networks and contacts',
      'text11' :'Send me an email',
      'text12'  : 'talk to me on WhatsApp',
      'text13' :'Talk to me on Instagram',
      'text14'  : 'Search',
      'text15' :'search the website',
      'text16'  : '',
      'text17' :'',
      'text18'  : ''
    },
    'es-es': {
      'buttonText': 'Español',
      'flagImage': 'img/espanha.png',
      'text1' :'Home',
      'text2'  : 'Sobre mi',
      'text3' :'Portafolio',
      'text4'  : 'Contacto',
      'text5' :'Construyendo caminos digitales para el futuro, a través de los datos.',
      'text6'  : '¿Por qué arriesgar tus datos con profesionales de dudosa cualificación y sin experiencia? Deje que AInsights se encargue de todo para que usted pueda centrarse en lo que realmente importa: ¡su negocio!',
      'text7' :'Profesional certificado y con experiencia en soluciones en la nube de AWS',
      'text8'  : 'Profesional altamente calificado en una variedad de herramientas de código abierto ampliamente adaptadas al mercado',
      'text9' :'Navegar por el sitio web',
      'text10'  : 'Redes sociales y contactos',
      'text11' :'Me manda un correo electrónico',
      'text12'  : 'Hablame por WhatsApp',
      'text13' :'Hablame por Instagram',
      'text14'  : 'Buscar',
      'text15' :'buscar en el sitio web',
      'text16'  : '',
      'text17' :'',
      'text18'  : ''
    }
  };

  // Atualiza o conteúdo do botão para refletir o idioma selecionado
  const button = document.getElementById('languageButton');
  var imagem = document.createElement("img");
  imagem.src = translations[lang]["flagImage"];
  imagem.alt = "bandeira do idioma escolhido";
  imagem.width = "20";
  button.textContent = translations[lang]['buttonText'] + " " ;
  button.appendChild(imagem)
  
  

  // Atualiza o conteúdo dos elementos com base no idioma selecionado
  const elements = document.querySelectorAll('[id^="texto"]');
  elements.forEach(element => {
    element.textContent = translations[lang][element.id];
  });

  const elementos = document.querySelectorAll('[id^="text"]');
  elementos.forEach(element => {
    // Armazena o conteúdo HTML original do elemento
    const originalHTML = element.innerHTML;
    
    // Substitui apenas o conteúdo de texto, mantendo as tags <img> intactas
    element.innerHTML = translations[lang][element.id];
    
    // Restaura as tags <img> do conteúdo original
    const originalImages = originalHTML.match(/<img[^>]*>/g);
    if (originalImages) {
      originalImages.forEach(img => {
        element.innerHTML = img +" "+ element.innerHTML;
      });
    }
  });
  const inputElement = document.getElementById('text15'); 
  inputElement.placeholder = translations[lang]['text15']; 


}