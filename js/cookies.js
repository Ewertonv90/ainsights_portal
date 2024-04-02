// Função para salvar as preferências no localStorage
function salvarPreferencias(preferencias) {
    localStorage.setItem('preferencias', JSON.stringify(preferencias));
  }
  
  // Função para recuperar as preferências do localStorage
  function recuperarPreferencias() {
    const preferencias = localStorage.getItem('preferencias');
    return preferencias ? JSON.parse(preferencias) : null;
  }
  
  // Exemplo de uso:
  const preferenciasAtuais = recuperarPreferencias();
  
  // Se não houver preferências armazenadas, utilize um valor padrão
  const preferenciasPadrao = {
    modo: 'light', // ou 'dark'
    idioma: 'pt-br', // ou outro idioma desejado
    aceitouCookies: false
  };
  
  // Se as preferências atuais forem nulas, utilize as preferências padrão
  const preferencias = preferenciasAtuais || preferenciasPadrao;
  
  // Aqui você pode acessar as preferências individualmente
  const modo = preferencias.modo; // 'light' ou 'dark'
  const idioma = preferencias.idioma; // 'pt-br' ou outro idioma
  const aceitouCookies = preferencias.aceitouCookies; // true ou false
  
  // Exemplo de atualização de preferências
  const novasPreferencias = {
    modo: 'dark',
    idioma: 'en-us',
    aceitouCookies: true
  };
  
  salvarPreferencias(novasPreferencias);
  