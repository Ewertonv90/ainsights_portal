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
      'text12' : 'Fale comigo no WhatsApp',
      'text13' :'Fale comigo no Instagram',
      'text14' : 'Formado em Análise e Desenvolvimento de Sistemas, minha paixão pela tecnologia começou cedo. Desde que iniciei como técnico em informática em 2013, fui fascinado pela programação. Ao ingressar na faculdade, esse fascínio só cresceu, levando-me a explorar oportunidades em plataformas de freelancers como Workana, Freelancer.com e GetNinjas.',
      'text15' : 'Minha carreira oficialmente começou como Cientista de Dados, mas logo me vi assumindo desafios em Engenharia de Dados. Ao longo do tempo, tive a oportunidade de arquitetar, refinar, criar e melhorar uma variedade de projetos de dados. Estes incluíram desde pequenas fontes de dados de CRM e preferências de usuários até volumes massivos de dados de instituições financeiras de grande porte no Brasil.',
      'text16' : 'Atualmente, atuo como consultor de dados com uma ampla experiência em projetos de migração, arquitetura e desenvolvimento de ambientes Big Data, tanto on-premise quanto em nuvem. Minha especialização está na plataforma AWS, e minhas certificações validam meu profundo conhecimento nesse domínio.',
      'text17' : 'Além disso, trago experiência em Machine Learning, adquirida durante minha jornada como Cientista de Dados. Também tenho habilidades em desenvolvimento web, utilizando tecnologias como Django, Flask e Fast API, juntamente com Python. Tenho experiência em ferramentas de manipulação de dados paralelizados, como Spark, e em ferramentas líderes de mercado para ingestão e orquestração de tarefas de dados.',
      'text18' : 'Nome:',
      'text19' : 'E-mail:',
      'text20' : 'Assunto:',
      'text21' : 'Mensagem:',
      'text22' : 'Enviar',
      'nome' : 'Digite seu nome',
      'email' : 'Digite seu E-mail',
      'assunto' : 'Digite o assunto da mensagem',
      'mensagem' : 'Digite sua mensagem'
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
      'text14'  : 'Graduated in Analysis and Systems Development, my passion for technology began early. Since starting as a computer technician in 2013, I have been fascinated by programming. Upon entering college, this fascination only grew, leading me to explore opportunities on freelancer platforms like Workana, Freelancer.com, and GetNinjas.',
      'text15' :'My career officially began as a Data Scientist, but soon I found myself taking on challenges in Data Engineering. Over time, I had the opportunity to architect, refine, create, and improve a variety of data projects. These ranged from small CRM data sources and user preference datasets to massive volumes of data from large financial institutions in Brazil.',
      'text16'  : 'Currently, I work as a data consultant with extensive experience in migration projects, architecture, and development of both on-premise and cloud Big Data environments. My specialization lies in the AWS platform, and my certifications validate my deep knowledge in this domain.',
      'text17' :'Furthermore, I bring experience in Machine Learning, gained during my tenure as a Data Scientist. I also have skills in web development, utilizing technologies such as Django, Flask, and Fast API, along with Python. I have experience with parallelized data manipulation tools like Spark and leading market tools for data ingestion and task orchestration.',
      'text18': 'Name:',
      'text19': 'Email:',
      'text20': 'Subject:',
      'text21': 'Message:',
      'text22': 'Send',
      'nome': 'Enter your name',
      'email': 'Enter your email',
      'assunto': 'Enter the subject of the message',
      'mensagem': 'Enter your message'
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
      'text14'  : 'Graduado en Análisis y Desarrollo de Sistemas, mi pasión por la tecnología comenzó temprano. Desde que empecé como técnico en informática en 2013, me fascinó la programación. Al ingresar a la universidad, esta fascinación solo creció, llevándome a explorar oportunidades en plataformas de freelancers como Workana, Freelancer.com y GetNinjas.',
      'text15' :'Mi carrera comenzó oficialmente como Científico de Datos, pero pronto me vi asumiendo desafíos en Ingeniería de Datos. Con el tiempo, tuve la oportunidad de arquitecturar, refinar, crear y mejorar una variedad de proyectos de datos. Estos van desde pequeñas fuentes de datos de CRM y conjuntos de datos de preferencias de usuarios hasta volúmenes masivos de datos de grandes instituciones financieras en Brasil.',
      'text16'  : 'Actualmente, trabajo como consultor de datos con amplia experiencia en proyectos de migración, arquitectura y desarrollo de entornos de Big Data tanto on-premise como en la nube. Mi especialización se encuentra en la plataforma AWS, y mis certificaciones validan mi profundo conocimiento en este dominio.',
      'text17' :'Además, aporto experiencia en Machine Learning, adquirida durante mi tiempo como Científico de Datos. También tengo habilidades en desarrollo web, utilizando tecnologías como Django, Flask y Fast API, junto con Python. Tengo experiencia en herramientas de manipulación de datos paralelizados como Spark y en las principales herramientas del mercado para la ingestión de datos y la orquestación de tareas.',
      'text18': 'Nombre:',
      'text19': 'Correo electrónico:',
      'text20': 'Asunto:',
      'text21': 'Mensaje:',
      'text22': 'Enviar',
      'nome': 'Ingrese su nombre',
      'email': 'Ingrese su correo electrónico',
      'assunto': 'Ingrese el asunto del mensaje',
      'mensagem': 'Ingrese su mensaje'
    }
  };

  localStorage.setItem('idioma', lang);

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
  if(window.location.pathname === '../contato.html' || window.location.pathname === '/controle.html') {

  }else{
        // Executa a troca de palceholder apenas se estiver na página contato
    //placeholders do for de contato
    console.log(window.location.pathname)
    var placeholder6 = document.getElementById('nome');
    var placeholder7 = document.getElementById('email');
    var placeholder8 = document.getElementById('assunto');
    var placeholder9 = document.getElementById('mensagem');

    // Altera o placeholder para um novo valor
    placeholder6.placeholder = translations[lang]['nome'];
    placeholder7.placeholder = translations[lang]['email'];
    placeholder8.placeholder = translations[lang]['assunto'];
    placeholder9.placeholder = translations[lang]['mensagem'];  
  }
  
}



const idiomaSalvo = localStorage.getItem('idioma');
if (idiomaSalvo) {
  // Se houver, aplica o idioma salvo
  changeLanguage(idiomaSalvo);
}