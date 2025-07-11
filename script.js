// --- Jogo da velha (tags) ---
let iconeJogoDaVelha = document.getElementById('iconeJogoDaVelha');
if (!window._tagsBtnHandlerAdded) {
  window._tagsBtnHandlerAdded = true;
  let btnTags = document.getElementById('btnTags');
  let tagsModal = document.getElementById('tagsModal');
  let fecharTags = document.getElementById('fecharTags');
  btnTags.addEventListener('click', function() {
    iconeJogoDaVelha.style.color = '#444';
    tagsModal.style.display = 'flex';
  });
  fecharTags.addEventListener('click', function() {
    tagsModal.style.display = 'none';
    iconeJogoDaVelha.style.color = '#222';
  });
}
// --- TAGS SUGERIDAS POR TEMA ---
// --- TAGS SUGERIDAS POR TEMA ---
const tagsPorTema = {
    motivacional: [
        ['#Motivação', '#Inspiração', '#Foco', '#Sucesso', '#Determinação', '#Acredite', '#Persistência', '#Atitude', '#Força', '#Vencer'],
        ['#Motivation', '#Mindset', '#NeverGiveUp', '#DreamBig', '#Goal', '#Power', '#Believe', '#Growth', '#Discipline', '#Action'],
        ['#Motivacional', '#FrasesMotivacionais', '#Autoestima', '#Superação', '#Desenvolvimento', '#Confiança', '#Coragem', '#Meta', '#Progresso', '#Realização']
    ],
    amor: [
        ['#Amor', '#Love', '#Romance', '#Coração', '#Paixão', '#Sentimento', '#Juntos', '#Casal', '#Carinho', '#TeAmo'],
        ['#Relacionamento', '#Namorados', '#AmorEterno', '#AmorPróprio', '#Felicidade', '#Companheirismo', '#Beijo', '#AmorVerdadeiro', '#AmorDaMinhaVida', '#AmorSemFim'],
        ['#FrasesDeAmor', '#AmorInfinito', '#AmorÉTudo', '#AmorReal', '#AmorPraVidaToda', '#AmorQueInspira', '#AmorQueTransborda', '#AmorSimples', '#AmorPuro', '#AmorSincero']
    ],
    amizade: [
        ['#Amizade', '#Amigos', '#Friendship', '#Parceiros', '#Companheirismo', '#Confiança', '#Diversão', '#Risos', '#Lealdade', '#Gratidão'],
        ['#BestFriends', '#BFF', '#AmizadeVerdadeira', '#AmigosParaSempre', '#AmizadeÉTudo', '#AmizadeSincera', '#AmizadeReal', '#AmigosDeVerdade', '#AmizadeColorida', '#AmizadeLinda'],
        ['#FrasesDeAmizade', '#AmizadeForte', '#AmizadeÉAmor', '#AmizadeInfinita', '#AmizadeTop', '#AmizadeÉVida', '#AmizadeÉAlegria', '#AmizadeÉCompanhia', '#AmizadeÉConfiança', '#AmizadeÉLealdade']
    ],
    felicidade: [
        ['#Felicidade', '#Sorriso', '#Alegria', '#ViverBem', '#Gratidão', '#Feliz', '#GoodVibes', '#Paz', '#Leveza', '#BemEstar'],
        ['#Happy', '#Smile', '#Happiness', '#Joy', '#PositiveVibes', '#FelicidadePlena', '#FelicidadeÉTudo', '#FelicidadeReal', '#FelicidadeSempre', '#FelicidadeSimples'],
        ['#FrasesDeFelicidade', '#FelicidadeÉ', '#FelicidadeÉAmor', '#FelicidadeÉVida', '#FelicidadeÉAlegria', '#FelicidadeÉPaz', '#FelicidadeÉGratidão', '#FelicidadeÉSorrir', '#FelicidadeÉSer', '#FelicidadeÉEstar']
    ],
    superacao: [
        ['#Superação', '#Força', '#Coragem', '#Vencer', '#Desafio', '#Resiliência', '#Determinação', '#Motivação', '#Persistência', '#Superar'],
        ['#Superar', '#Superacao', '#Desafios', '#Vitoria', '#Luta', '#NuncaDesista', '#Acredite', '#Foco', '#Meta', '#Objetivo'],
        ['#FrasesDeSuperação', '#SuperaçãoÉTudo', '#SuperaçãoÉVida', '#SuperaçãoÉForça', '#SuperaçãoÉCoragem', '#SuperaçãoÉFé', '#SuperaçãoÉEsperança', '#SuperaçãoÉDeterminação', '#SuperaçãoÉMotivação', '#SuperaçãoÉConquista']
    ],
    gratidao: [
        ['#Gratidão', '#Agradecer', '#Blessed', '#Thankful', '#Grateful', '#Vida', '#Felicidade', '#Paz', '#Amor', '#Alegria'],
        ['#GratidãoSempre', '#GratidãoÉTudo', '#GratidãoÉVida', '#GratidãoÉAmor', '#GratidãoÉFelicidade', '#GratidãoÉPaz', '#GratidãoÉAlegria', '#GratidãoÉSer', '#GratidãoÉEstar', '#GratidãoÉSorrir'],
        ['#FrasesDeGratidão', '#GratidãoNoCoração', '#GratidãoPelaVida', '#GratidãoPeloAmor', '#GratidãoPelaFamília', '#GratidãoPelosAmigos', '#GratidãoPelasBênçãos', '#GratidãoPelosMomentos', '#GratidãoPelasConquistas', '#GratidãoPelosDesafios']
    ],
    reflexao: [
        ['#Reflexão', '#Pensar', '#Sabedoria', '#Aprendizado', '#Crescimento', '#Autoconhecimento', '#Mente', '#Vida', '#Paz', '#Inspiração'],
        ['#Refletir', '#Reflexao', '#Pensamentos', '#FrasesDeReflexão', '#ReflexãoDoDia', '#ReflexãoDaVida', '#ReflexãoÉTudo', '#ReflexãoÉVida', '#ReflexãoÉAmor', '#ReflexãoÉFelicidade'],
        ['#ReflexãoÉPaz', '#ReflexãoÉSabedoria', '#ReflexãoÉAprendizado', '#ReflexãoÉCrescimento', '#ReflexãoÉAutoconhecimento', '#ReflexãoÉMente', '#ReflexãoÉInspiração', '#ReflexãoÉPensar', '#ReflexãoÉSer', '#ReflexãoÉEstar']
    ],
    sucesso: [
        ['#Sucesso', '#Vencer', '#Conquista', '#Meta', '#Objetivo', '#Foco', '#Determinação', '#Motivação', '#Trabalho', '#Realização'],
        ['#SucessoProfissional', '#SucessoPessoal', '#SucessoNaVida', '#SucessoÉTudo', '#SucessoÉVida', '#SucessoÉAmor', '#SucessoÉFelicidade', '#SucessoÉPaz', '#SucessoÉAlegria', '#SucessoÉSer'],
        ['#FrasesDeSucesso', '#SucessoNoTrabalho', '#SucessoNosNegócios', '#SucessoNaCarreira', '#SucessoNosEstudos', '#SucessoNosProjetos', '#SucessoNosSonhos', '#SucessoNasMetas', '#SucessoNasConquistas', '#SucessoNasVitórias']
    ],
    familia: [
        ['#Família', '#Amor', '#União', '#Lar', '#Proteção', '#Cuidado', '#Gratidão', '#Felicidade', '#Apoio', '#Companheirismo'],
        ['#FamíliaÉTudo', '#FamíliaÉAmor', '#FamíliaÉUnião', '#FamíliaÉLar', '#FamíliaÉProteção', '#FamíliaÉCuidado', '#FamíliaÉGratidão', '#FamíliaÉFelicidade', '#FamíliaÉApoio', '#FamíliaÉCompanheirismo'],
        ['#FrasesDeFamília', '#FamíliaLinda', '#FamíliaFeliz', '#FamíliaUnida', '#FamíliaAbençoada', '#FamíliaMaravilhosa', '#FamíliaQuerida', '#FamíliaEspecial', '#FamíliaTop', '#FamíliaNota10']
    ],
    inspiração: [
        ['#Inspiração', '#Motivação', '#Criatividade', '#Ideias', '#Sonhos', '#Objetivos', '#Foco', '#Determinação', '#Sucesso', '#Realização'],
        ['#Inspirar', '#Inspiracao', '#Inspire', '#InspireSe', '#InspiraçãoDoDia', '#InspiraçãoDaVida', '#InspiraçãoÉTudo', '#InspiraçãoÉVida', '#InspiraçãoÉAmor', '#InspiraçãoÉFelicidade'],
        ['#FrasesDeInspiração', '#InspiraçãoNoTrabalho', '#InspiraçãoNosEstudos', '#InspiraçãoNaVida', '#InspiraçãoNosSonhos', '#InspiraçãoNosProjetos', '#InspiraçãoNosDesafios', '#InspiraçãoNosMomentos', '#InspiraçãoNasConquistas', '#InspiraçãoNasVitórias']
    ]
};

const btnTags = document.getElementById('btnTags');
const tagsModal = document.getElementById('tagsModal');
const tagsLacunas = document.getElementById('tagsLacunas');
const fecharTags = document.getElementById('fecharTags');
const temaSelect = document.getElementById('temaSelect');
const fraseDiv = document.getElementById('frase');
const fonteSelect = document.getElementById('fonteSelect');
const novaFraseBtn = document.getElementById('novaFrase');
const voltarFraseBtn = document.getElementById('voltarFrase');
const btnFavoritar = document.getElementById('btnFavoritar');
const coracaoIcon = document.getElementById('coracaoIcon');
const btnFavoritos = document.getElementById('btnFavoritos');
const favoritosModal = document.getElementById('favoritosModal');
const favoritosLista = document.getElementById('favoritosLista');
const fecharFavoritos = document.getElementById('fecharFavoritos');

// --- Função para exibir hashtags ---
if (btnTags) {
    btnTags.addEventListener('click', () => {
        const tema = temaSelect.value;
        tagsLacunas.innerHTML = '';
        let tagsTema = tagsPorTema[tema] || tagsPorTema['motivacional'];
        tagsTema.forEach((tags) => {
            const div = document.createElement('div');
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.justifyContent = 'space-between';
            div.style.gap = '0.5rem';
            div.style.background = '#f7f7f7';
            div.style.borderRadius = '0.7rem';
            div.style.padding = '0.7rem 0.7rem 0.7rem 1rem';
            div.style.fontSize = '0.98rem';
            div.style.marginBottom = '0.2rem';
            const tagsStr = tags.join(' ');
            const span = document.createElement('span');
            span.textContent = tagsStr;
            span.style.flex = '1';
            const btnCopiar = document.createElement('button');
            btnCopiar.className = 'copiar-fav-btn';
            btnCopiar.title = 'Copiar tags';
            btnCopiar.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
            btnCopiar.addEventListener('click', () => {
                copiarTextoComFonte(tagsStr, '');
            });
            div.appendChild(span);
            div.appendChild(btnCopiar);
            tagsLacunas.appendChild(div);
        });
        tagsModal.style.display = 'flex';
        if (typeof iconeJogoDaVelha !== 'undefined' && iconeJogoDaVelha) {
          iconeJogoDaVelha.style.color = '#444';
        }
    });
}
if (fecharTags) {
    fecharTags.addEventListener('click', () => {
        tagsModal.style.display = 'none';
        if (typeof iconeJogoDaVelha !== 'undefined' && iconeJogoDaVelha) {
          iconeJogoDaVelha.style.color = '#222';
        }
    });
}

function copiarTextoComFonte(texto, fonte) {
    if (!texto) return;
    const el = document.createElement('textarea');
    el.value = texto;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Copiado para a área de transferência!' + (fonte ? `\nFonte: ${fonte}` : ''));
}

// --- Frases por tema ---
const frases = {
    motivacional: [
        "Acredite em você e tudo será possível.",
        "O sucesso é a soma de pequenos esforços repetidos diariamente.",
        "Não desista, grandes coisas levam tempo.",
        "A persistência realiza o impossível.",
        "Você é mais forte do que imagina.",
        "Transforme sonhos em metas e metas em conquistas.",
        "A coragem é a chave para grandes realizações.",
        "Cada dia é uma nova chance de recomeçar.",
        "O impossível é apenas uma opinião.",
        "Acredite no seu potencial e vá além."
    ],
    amor: [
        "O amor é a resposta para tudo.",
        "Amar é enxergar o outro com o coração.",
        "O amor verdadeiro não se desgasta.",
        "Onde há amor, há vida.",
        "O amor transforma o mundo."
    ],
    amizade: [
        "Amigos tornam os momentos especiais.",
        "A amizade é o conforto de saber que existe alguém por você.",
        "Amizade verdadeira é para sempre.",
        "Rir com amigos é o melhor remédio.",
        "Amigos são a família que escolhemos."
    ],
    felicidade: [
        "A felicidade está nas pequenas coisas.",
        "Sorria, a vida retribui.",
        "Ser feliz é uma escolha diária.",
        "A felicidade contagia quem está por perto.",
        "A gratidão é o caminho para a felicidade."
    ],
    superacao: [
        "A superação começa com a decisão de tentar.",
        "Desafios existem para serem vencidos.",
        "Cada obstáculo é uma oportunidade de crescer.",
        "A força está dentro de você.",
        "Acredite: você é capaz de superar tudo."
    ],
    gratidao: [
        "A gratidão transforma o que temos em suficiente.",
        "Ser grato é reconhecer o valor de cada momento.",
        "Agradeça mais, reclame menos.",
        "A gratidão abre portas para a felicidade.",
        "Gratidão é a memória do coração."
    ],
    reflexao: [
        "Refletir é crescer por dentro.",
        "A reflexão traz clareza para a vida.",
        "Pensar antes de agir é sabedoria.",
        "A vida pede pausas para reflexão.",
        "Reflexão é o início da mudança."
    ],
    sucesso: [
        "O sucesso é resultado de esforço e dedicação.",
        "Acredite no seu sucesso e trabalhe por ele.",
        "O sucesso começa com um sonho.",
        "O sucesso é feito de pequenas conquistas.",
        "O sucesso é para quem não desiste."
    ],
    familia: [
        "Família é o nosso maior tesouro.",
        "O amor da família é incondicional.",
        "Família é base, porto seguro e amor.",
        "Família é onde a vida começa e o amor nunca termina.",
        "Família é sinônimo de união."
    ],
    inspiração: [
        "A inspiração move a criatividade.",
        "Inspire-se e inspire o mundo.",
        "A inspiração está nos detalhes.",
        "Busque inspiração em cada amanhecer.",
        "A inspiração transforma ideias em ações."
    ]
};

const fontes = {
    'Roboto': 'Roboto, sans-serif',
    'Montserrat': 'Montserrat, sans-serif',
    'Lato': 'Lato, sans-serif',
    'Inter': 'Inter, sans-serif',
    'Open Sans': 'Open Sans, sans-serif',
    'Space Mono': 'Space Mono, monospace'
};

let favoritos = JSON.parse(localStorage.getItem('favoritosAppFrases') || '[]');
if (favoritos.length && typeof favoritos[0] === 'string') {
    favoritos = favoritos.map(f => ({ frase: f, fonte: 'Roboto' }));
    localStorage.setItem('favoritosAppFrases', JSON.stringify(favoritos));
}
let historico = [];
let indiceHistorico = -1;

function mostrarFrase(nova = true) {
    const tema = temaSelect.value;
    const frasesTema = frases[tema];
    if (nova) {
        if (historico.length === frasesTema.length && indiceHistorico === historico.length - 1) {
            historico = [];
            indiceHistorico = -1;
        }
        let frase;
        let tentativas = 0;
        do {
            frase = frasesTema[Math.floor(Math.random() * frasesTema.length)];
            tentativas++;
        } while (historico.includes(frase) && tentativas < 20);
        historico = historico.slice(0, indiceHistorico + 1);
        historico.push(frase);
        indiceHistorico++;
    }
    fraseDiv.textContent = historico[indiceHistorico];
    setTimeout(() => {
        atualizarCoracao();
        atualizarBotoes();
    }, 0);
}
function atualizarCoracao() {
    if (!btnFavoritar) return;
    const fraseAtual = fraseDiv.textContent;
    const fonteAtual = fonteSelect.value;
    if (favoritos.some(fav => fav.frase === fraseAtual && fav.fonte === fonteAtual)) {
        btnFavoritar.classList.add('favorito');
    } else {
        btnFavoritar.classList.remove('favorito');
    }
}

if (btnFavoritar) {
    btnFavoritar.addEventListener('click', () => {
        const fraseAtual = fraseDiv.textContent;
        const fonteAtual = fonteSelect.value;
        const jaFavoritado = favoritos.some(fav => fav.frase === fraseAtual && fav.fonte === fonteAtual);
        if (jaFavoritado) {
            favoritos = favoritos.filter(fav => !(fav.frase === fraseAtual && fav.fonte === fonteAtual));
        } else {
            favoritos.push({ frase: fraseAtual, fonte: fonteAtual });
        }
        localStorage.setItem('favoritosAppFrases', JSON.stringify(favoritos));
        atualizarCoracao();
        if (favoritosModal && favoritosModal.classList.contains('ativo')) {
            renderizarFavoritos();
        }
    });
}

if (btnFavoritos) {
    btnFavoritos.addEventListener('click', () => {
        btnFavoritos.classList.add('ativo');
        abrirFavoritosModal();
    });
}

function abrirFavoritosModal() {
    if (!favoritosModal) return;
    favoritosModal.classList.add('ativo');
    renderizarFavoritos();
}

function fecharFavoritosModal() {
    if (!favoritosModal) return;
    favoritosModal.classList.remove('ativo');
    btnFavoritos.classList.remove('ativo');
}

if (fecharFavoritos) {
    fecharFavoritos.addEventListener('click', fecharFavoritosModal);
}

function renderizarFavoritos() {
    if (!favoritosLista) return;
    favoritosLista.innerHTML = '';
    const btnRemoverTodosFavs = document.getElementById('btnRemoverTodosFavs');
    if (!favoritos.length) {
        favoritosLista.innerHTML = '<li>Nenhuma frase favoritada ainda.</li>';
        if (btnRemoverTodosFavs) btnRemoverTodosFavs.style.visibility = 'hidden';
        return;
    } else {
        if (btnRemoverTodosFavs) btnRemoverTodosFavs.style.visibility = 'visible';
    }
    favoritos.forEach((fav, idx) => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.justifyContent = 'space-between';
        const span = document.createElement('span');
        span.textContent = fav.frase;
        span.style.fontFamily = fontes[fav.fonte] || 'Roboto, sans-serif';
        li.appendChild(span);
        const btnCopiar = document.createElement('button');
        btnCopiar.className = 'copiar-fav-btn';
        btnCopiar.title = 'Copiar frase';
        btnCopiar.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
        btnCopiar.addEventListener('click', () => {
            copiarTextoComFonte(fav.frase, fav.fonte);
        });
        li.appendChild(btnCopiar);
        const btnEditar = document.createElement('button');
        btnEditar.className = 'copiar-fav-btn';
        btnEditar.title = 'Editar frase';
        btnEditar.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976d2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>`;
        btnEditar.addEventListener('click', () => {
            fecharFavoritosModal();
            fraseDiv.textContent = fav.frase;
            fonteSelect.value = fav.fonte;
            mudarFonte();
            atualizarCoracao();
        });
        li.appendChild(btnEditar);
        const btnRemover = document.createElement('button');
        btnRemover.className = 'remover-fav-btn';
        btnRemover.title = 'Remover dos favoritos';
        btnRemover.innerHTML = `<svg viewBox="0 0 64 64" fill="none" stroke="#e53935" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
  <path d="M32 56s-20-13.6-20-28A12 12 0 0 1 32 16a12 12 0 0 1 20 12c0 14.4-20 28-20 28z"/>
</svg>`;
        btnRemover.addEventListener('click', () => {
            if (confirm('Remover esta frase dos favoritos?')) {
                const realIdx = favoritos.findIndex(f => f.frase === fav.frase && f.fonte === fav.fonte);
                if (realIdx !== -1) {
                    favoritos.splice(realIdx, 1);
                    localStorage.setItem('favoritosAppFrases', JSON.stringify(favoritos));
                    renderizarFavoritos();
                    atualizarCoracao();
                }
            }
        });
        li.appendChild(btnRemover);
        favoritosLista.appendChild(li);
    });
}
// Remover todos os favoritos (confirmação só uma vez)
const btnRemoverTodosFavs = document.getElementById('btnRemoverTodosFavs');
if (btnRemoverTodosFavs) {
    btnRemoverTodosFavs.replaceWith(btnRemoverTodosFavs.cloneNode(true));
    const novoBtnRemoverTodosFavs = document.getElementById('btnRemoverTodosFavs');
    novoBtnRemoverTodosFavs.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja remover todos os favoritos?')) {
            favoritos = [];
            localStorage.setItem('favoritosAppFrases', JSON.stringify(favoritos));
            renderizarFavoritos();
            atualizarCoracao();
        }
    });
}

function voltarFrase() {
    if (indiceHistorico > 0) {
        indiceHistorico--;
        fraseDiv.textContent = historico[indiceHistorico];
        atualizarBotoes();
    }
}

function atualizarBotoes() {
    voltarFraseBtn.disabled = indiceHistorico <= 0;
}

function mudarFonte() {
    const fonte = fonteSelect.value;
    fraseDiv.style.fontFamily = fontes[fonte];
}

temaSelect.addEventListener('change', () => {
    historico = [];
    indiceHistorico = -1;
    mostrarFrase();
});
fonteSelect.addEventListener('change', mudarFonte);
novaFraseBtn.addEventListener('click', () => mostrarFrase(true));
voltarFraseBtn.addEventListener('click', voltarFrase);

// --- Marca d'água temática ---
const bgWatermark = document.querySelector('.bg-watermark');
var temaSelectWatermark = window.temaSelect || document.getElementById('temaSelect');

const watermarks = {
  motivacional: `url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="90" r="80" fill="%230d47a1" fill-opacity="0.13"/><path d="M90 40v60l40 20" stroke="%230d47a1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>')`,
  amor: `url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M90 150s-50-30-50-70a30 30 0 0 1 60 0 30 30 0 0 1 60 0c0 40-50 70-50 70z" fill="%230d47a1" fill-opacity="0.13" stroke="%230d47a1" stroke-width="6"/></svg>')`,
  amizade: `url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="80" r="24" fill="%230d47a1" fill-opacity="0.13"/><circle cx="120" cy="80" r="24" fill="%230d47a1" fill-opacity="0.13"/><rect x="40" y="110" width="100" height="30" rx="15" fill="%230d47a1" fill-opacity="0.13"/></svg>')`,
  felicidade: `url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="90" r="70" fill="%230d47a1" fill-opacity="0.13"/><path d="M65 100c5 10 25 20 50 0" stroke="%230d47a1" stroke-width="6" stroke-linecap="round"/><circle cx="70" cy="80" r="6" fill="%230d47a1"/><circle cx="110" cy="80" r="6" fill="%230d47a1"/></svg>')`,
  superacao: `url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="120" width="100" height="20" rx="10" fill="%230d47a1" fill-opacity="0.13"/><rect x="80" y="60" width="20" height="60" rx="10" fill="%230d47a1" fill-opacity="0.13"/><circle cx="90" cy="50" r="12" fill="%230d47a1" fill-opacity="0.13"/></svg>')`,
  gratidao: `url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M90 140c-30-20-50-40-50-60a30 30 0 0 1 60 0 30 30 0 0 1 60 0c0 20-20 40-50 60z" fill="%230d47a1" fill-opacity="0.13"/></svg>')`,
  reflexao: `url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="90" cy="110" rx="60" ry="30" fill="%230d47a1" fill-opacity="0.13"/><ellipse cx="90" cy="70" rx="30" ry="15" fill="%230d47a1" fill-opacity="0.13"/></svg>')`,
  sucesso: `url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="100" width="60" height="40" rx="20" fill="%230d47a1" fill-opacity="0.13"/><polygon points="90,40 110,100 70,100" fill="%230d47a1" fill-opacity="0.13"/></svg>')`,
  familia: `url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="110" r="18" fill="%230d47a1" fill-opacity="0.13"/><circle cx="120" cy="110" r="18" fill="%230d47a1" fill-opacity="0.13"/><rect x="60" y="110" width="60" height="30" rx="15" fill="%230d47a1" fill-opacity="0.13"/></svg>')`,
  inspiração: `url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="90" cy="120" rx="40" ry="18" fill="%230d47a1" fill-opacity="0.13"/><rect x="80" y="40" width="20" height="60" rx="10" fill="%230d47a1" fill-opacity="0.13"/><circle cx="90" cy="35" r="10" fill="%230d47a1" fill-opacity="0.13"/></svg>')`,
  default: `url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="140" height="140" rx="40" fill="%230d47a1" fill-opacity="0.13"/></svg>')`,
};

function atualizarMarcaDagua() {
  if (!bgWatermark || !temaSelectWatermark) return;
  const tema = temaSelectWatermark.value;
  bgWatermark.style.backgroundImage = watermarks[tema] || watermarks['default'];
}
if (temaSelectWatermark) {
  temaSelectWatermark.addEventListener('change', atualizarMarcaDagua);
  window.addEventListener('DOMContentLoaded', atualizarMarcaDagua);
  atualizarMarcaDagua();
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    mostrarFrase();
    mudarFonte();
    atualizarCoracao();
});

// Ativar modo escuro
const btnDarkMode = document.getElementById('btnDarkMode');
btnDarkMode?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Print da área principal
const btnPrint = document.getElementById('btnPrint');
btnPrint?.addEventListener('click', () => {
    const fraseBox = document.querySelector('.frase-box');
    if (!fraseBox) return;
    html2canvas(fraseBox, {backgroundColor: null}).then(canvas => {
        const link = document.createElement('a');
        link.download = 'frasego.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
const btnCopiarFrase = document.getElementById('btnCopiarFrase');
if (btnCopiarFrase) {
    btnCopiarFrase.addEventListener('click', () => {
        const frase = fraseDiv.textContent;
        if (!frase) return;
        const el = document.createElement('textarea');
        el.value = frase;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Frase copiada para a área de transferência!');
    });
}
copiarTextoComFonte(fraseDiv.textContent, fonteSelect.value);