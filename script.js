// --- Jogo da velha (tags) ---
// Usa let para evitar conflito de escopo, e só define se ainda não existe
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
        ['#Superação', '#Força', '#Coragem', '#Vencer', '#Desafio', '#Resiliência', '#Determinação', '#Motivação', '#Persistência', '#Conquista'],
        ['#Superar', '#Superacao', '#Desafios', '#Vitoria', '#Luta', '#NuncaDesista', '#Acredite', '#Foco', '#Meta', '#Objetivo'],
        ['#FrasesDeSuperação', '#SuperaçãoÉTudo', '#SuperaçãoÉVida', '#SuperaçãoÉForça', '#SuperaçãoÉCoragem', '#SuperaçãoÉVencer', '#SuperaçãoÉDesafio', '#SuperaçãoÉResiliência', '#SuperaçãoÉDeterminação', '#SuperaçãoÉMotivação']
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

if (btnTags) {
    btnTags.addEventListener('click', () => {
        const tema = temaSelect.value;
        const frase = fraseDiv.textContent;
        tagsLacunas.innerHTML = '';
        let tagsTema = tagsPorTema[tema] || tagsPorTema['motivacional'];
        tagsTema.forEach((tags, idx) => {
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
    });
}
if (fecharTags) {
    fecharTags.addEventListener('click', () => {
        tagsModal.style.display = 'none';
    });
}
const btnCopiarFrase = document.getElementById('btnCopiarFrase');
const btnCopiarFavoritos = document.getElementById('btnCopiarFavoritos');
// Copiar frase atual com fonte
if (btnCopiarFrase) {
    btnCopiarFrase.addEventListener('click', () => {
        const frase = fraseDiv.textContent;
        const fonte = fonteSelect.value;
        copiarTextoComFonte(frase, fonte);
    });
}

// Copiar todos os favoritos com fonte
if (btnCopiarFavoritos) {
    btnCopiarFavoritos.addEventListener('click', () => {
        const fonte = fonteSelect.value;
        const texto = favoritos.length
            ? favoritos.map(fav => fav.frase + (fav.fonte ? ` [${fav.fonte}]` : '')).join('\n')
            : '';
        copiarTextoComFonte(texto, fonte);
    });
}

function copiarTextoComFonte(texto, fonte) {
    // Copia como texto simples, mas pode ser adaptado para copiar como rich text (HTML) se necessário
    if (!texto) return;
    const el = document.createElement('textarea');
    el.value = texto;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    // Opcional: feedback visual
    alert('Copiado para a área de transferência!\nFonte: ' + fonte);
}
// Agora cada favorito é um objeto: { frase: string, fonte: string }
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
        "Acredite no seu potencial e vá além.",
        "A disciplina é o caminho para o sucesso.",
        "Grandes jornadas começam com um passo.",
        "A motivação te faz começar, a Disciplina te faz continuar.",
        "Seja a sua melhor versão todos os dias.",
        "A vitória pertence a quem não desiste.",
        "Acredite nos seus sonhos e lute por eles.",
        "O esforço de hoje é o sucesso de amanhã.",
        "A cada queda, levante-se mais forte.",
        "A determinação constrói conquistas.",
        "O medo é só um degrau para a coragem.",
        "Acredite: você pode ir além.",
        "A ação é o segredo do progresso.",
        "O sucesso é feito de tentativas.",
        "A motivação é o combustível da realização.",
        "Acredite no processo, confie no tempo.",
        "A força de vontade move montanhas.",
        "A persistência vence o impossível.",
        "Acredite no seu valor.",
        "O futuro pertence a quem acredita.",
        "A motivação transforma vidas.",
        "Acredite, tente, conquiste.",
        "A superação é diária.",
        "A motivação é a chave do sucesso.",
        "Acredite no seu potencial.",
        "A vitória é de quem insiste.",
        "A motivação é o início de tudo.",
        "Acredite em dias melhores.",
        "A motivação é a força do recomeço.",
        "Acredite, você é capaz.",
        "A motivação é o segredo da conquista.",
        "Acredite, tudo é possível.",
        "A motivação é o motor da vida.",
        "Acredite, você vai conseguir.",
        "A motivação é a luz do caminho.",
        "Acredite, o melhor está por vir.",
        "A motivação é a energia da alma.",
        "Acredite, você nasceu para vencer.",
        "A motivação é a ponte para o sucesso.",
        "Acredite, você faz a diferença."
    ],
    amor: [
        "O amor é a resposta para tudo.",
        "Amar é enxergar o outro com o coração.",
        "O amor verdadeiro não se desgasta.",
        "Onde há amor, há vida.",
        "O amor transforma o mundo.",
        "O amor se multiplica quando compartilhado.",
        "Amar é cuidar, respeitar e valorizar.",
        "O amor supera qualquer distância.",
        "O amor floresce nos pequenos gestos.",
        "O amor é o sentimento mais puro.",
        "O amor é a base de tudo.",
        "O amor é o elo que une corações.",
        "O amor é o melhor remédio.",
        "O amor é a essência da vida.",
        "O amor é o que nos faz humanos.",
        "O amor é o maior presente.",
        "O amor é a força que move o mundo.",
        "O amor é o sentido da existência.",
        "O amor é o caminho da felicidade.",
        "O amor é o segredo da paz.",
        "O amor é o que nos completa.",
        "O amor é o que nos faz crescer.",
        "O amor é o que nos faz sorrir.",
        "O amor é o que nos faz sonhar.",
        "O amor é o que nos faz viver.",
        "O amor é o que nos faz acreditar.",
        "O amor é o que nos faz lutar.",
        "O amor é o que nos faz vencer.",
        "O amor é o que nos faz recomeçar.",
        "O amor é o que nos faz perdoar.",
        "O amor é o que nos faz agradecer.",
        "O amor é o que nos faz evoluir.",
        "O amor é o que nos faz aprender.",
        "O amor é o que nos faz compartilhar.",
        "O amor é o que nos faz respeitar.",
        "O amor é o que nos faz cuidar.",
        "O amor é o que nos faz proteger.",
        "O amor é o que nos faz confiar.",
        "O amor é o que nos faz esperar.",
        "O amor é o que nos faz persistir.",
        "O amor é o que nos faz superar.",
        "O amor é o que nos faz celebrar.",
        "O amor é o que nos faz agradecer.",
        "O amor é o que nos faz ser melhores.",
        "O amor é o que nos faz ser felizes.",
        "O amor é o que nos faz ser livres.",
        "O amor é o que nos faz ser únicos.",
        "O amor é o que nos faz ser eternos."
    ],
    amizade: [
        "Amigos tornam os momentos especiais.",
        "A amizade é o conforto de saber que existe alguém por você.",
        "Amizade verdadeira é para sempre.",
        "Rir com amigos é o melhor remédio.",
        "Amigos são a família que escolhemos.",
        "A amizade multiplica as alegrias e divide as tristezas.",
        "Amizade é lealdade sem esperar nada em troca.",
        "Amigos de verdade são raros e preciosos.",
        "A amizade é o maior presente da vida.",
        "Amizade é estar junto mesmo distante.",
        "Amizade é o melhor remédio para a solidão.",
        "Amizade é o tesouro mais valioso.",
        "Amizade é o alicerce da felicidade.",
        "Amizade é o elo que une corações.",
        "Amizade é o que dá sentido à vida.",
        "Amizade é o que nos faz sorrir.",
        "Amizade é o que nos faz crescer.",
        "Amizade é o que nos faz sonhar.",
        "Amizade é o que nos faz viver.",
        "Amizade é o que nos faz acreditar.",
        "Amizade é o que nos faz lutar.",
        "Amizade é o que nos faz vencer.",
        "Amizade é o que nos faz recomeçar.",
        "Amizade é o que nos faz perdoar.",
        "Amizade é o que nos faz agradecer.",
        "Amizade é o que nos faz evoluir.",
        "Amizade é o que nos faz aprender.",
        "Amizade é o que nos faz compartilhar.",
        "Amizade é o que nos faz respeitar.",
        "Amizade é o que nos faz cuidar.",
        "Amizade é o que nos faz proteger.",
        "Amizade é o que nos faz confiar.",
        "Amizade é o que nos faz esperar.",
        "Amizade é o que nos faz persistir.",
        "Amizade é o que nos faz superar.",
        "Amizade é o que nos faz celebrar.",
        "Amizade é o que nos faz ser melhores.",
        "Amizade é o que nos faz ser felizes.",
        "Amizade é o que nos faz ser livres.",
        "Amizade é o que nos faz ser únicos.",
        "Amizade é o que nos faz ser eternos.",
        "Amizade é o que nos faz ser verdadeiros.",
        "Amizade é o que nos faz ser leais.",
        "Amizade é o que nos faz ser companheiros.",
        "Amizade é o que nos faz ser irmãos.",
        "Amizade é o que nos faz ser parceiros."
    ],
    felicidade: [
        "A felicidade está nas pequenas coisas.",
        "Sorria, a vida retribui.",
        "Ser feliz é uma escolha diária.",
        "A felicidade contagia quem está por perto.",
        "A gratidão é o caminho para a felicidade.",
        "Felicidade é viver o presente.",
        "A felicidade mora dentro de você.",
        "Espalhe felicidade por onde passar.",
        "A felicidade é feita de momentos simples.",
        "Felicidade é estar em paz consigo mesmo.",
        "Felicidade é o melhor sentimento.",
        "Felicidade é o que nos faz sorrir.",
        "Felicidade é o que nos faz viver.",
        "Felicidade é o que nos faz sonhar.",
        "Felicidade é o que nos faz acreditar.",
        "Felicidade é o que nos faz lutar.",
        "Felicidade é o que nos faz vencer.",
        "Felicidade é o que nos faz recomeçar.",
        "Felicidade é o que nos faz perdoar.",
        "Felicidade é o que nos faz agradecer.",
        "Felicidade é o que nos faz evoluir.",
        "Felicidade é o que nos faz aprender.",
        "Felicidade é o que nos faz compartilhar.",
        "Felicidade é o que nos faz respeitar.",
        "Felicidade é o que nos faz cuidar.",
        "Felicidade é o que nos faz proteger.",
        "Felicidade é o que nos faz confiar.",
        "Felicidade é o que nos faz esperar.",
        "Felicidade é o que nos faz persistir.",
        "Felicidade é o que nos faz superar.",
        "Felicidade é o que nos faz celebrar.",
        "Felicidade é o que nos faz ser melhores.",
        "Felicidade é o que nos faz ser felizes.",
        "Felicidade é o que nos faz ser livres.",
        "Felicidade é o que nos faz ser únicos.",
        "Felicidade é o que nos faz ser eternos.",
        "Felicidade é o que nos faz ser verdadeiros.",
        "Felicidade é o que nos faz ser leais.",
        "Felicidade é o que nos faz ser companheiros.",
        "Felicidade é o que nos faz ser irmãos.",
        "Felicidade é o que nos faz ser parceiros."
    ],
    superacao: [
        "A superação começa com a decisão de tentar.",
        "Desafios existem para serem vencidos.",
        "Cada obstáculo é uma oportunidade de crescer.",
        "A força está dentro de você.",
        "Acredite: você é capaz de superar tudo.",
        "A vitória nasce da persistência.",
        "Superar é transformar dor em aprendizado.",
        "A superação é o caminho para o sucesso.",
        "Não há limites para quem acredita.",
        "A cada queda, levante-se mais forte.",
        "Superar é aprender com os erros.",
        "Superar é acreditar no impossível.",
        "Superar é crescer com as dificuldades.",
        "Superar é vencer a si mesmo.",
        "Superar é nunca desistir.",
        "Superar é ter coragem de recomeçar.",
        "Superar é transformar dor em força.",
        "Superar é seguir em frente.",
        "Superar é confiar no seu potencial.",
        "Superar é acreditar em dias melhores.",
        "Superar é ser resiliente.",
        "Superar é ser forte.",
        "Superar é ser persistente.",
        "Superar é ser determinado.",
        "Superar é ser corajoso.",
        "Superar é ser otimista.",
        "Superar é ser confiante.",
        "Superar é ser vencedor.",
        "Superar é ser guerreiro.",
        "Superar é ser campeão.",
        "Superar é ser exemplo.",
        "Superar é ser inspiração.",
        "Superar é ser motivação.",
        "Superar é ser esperança.",
        "Superar é ser luz.",
        "Superar é ser paz.",
        "Superar é ser amor.",
        "Superar é ser gratidão.",
        "Superar é ser felicidade.",
        "Superar é ser sucesso."
    ],
    gratidao: [
        "A gratidão transforma o que temos em suficiente.",
        "Ser grato é reconhecer o valor de cada momento.",
        "Agradeça mais, reclame menos.",
        "A gratidão abre portas para a felicidade.",
        "Gratidão é a memória do coração.",
        "A gratidão atrai coisas boas.",
        "A vida é mais leve com gratidão.",
        "A gratidão multiplica bênçãos.",
        "Agradeça até pelas dificuldades, elas ensinam.",
        "Gratidão é um ato de amor.",
        "Gratidão é reconhecer o valor da vida.",
        "Gratidão é agradecer por cada novo dia.",
        "Gratidão é agradecer pelas pequenas coisas.",
        "Gratidão é agradecer pelas grandes conquistas.",
        "Gratidão é agradecer pelas pessoas que amamos.",
        "Gratidão é agradecer pelas oportunidades.",
        "Gratidão é agradecer pelos aprendizados.",
        "Gratidão é agradecer pelos desafios.",
        "Gratidão é agradecer pelas vitórias.",
        "Gratidão é agradecer pelas derrotas.",
        "Gratidão é agradecer pela saúde.",
        "Gratidão é agradecer pela família.",
        "Gratidão é agradecer pelos amigos.",
        "Gratidão é agradecer pelo trabalho.",
        "Gratidão é agradecer pelo amor.",
        "Gratidão é agradecer pela paz.",
        "Gratidão é agradecer pela felicidade.",
        "Gratidão é agradecer pela esperança.",
        "Gratidão é agradecer pela fé.",
        "Gratidão é agradecer pela força.",
        "Gratidão é agradecer pela coragem.",
        "Gratidão é agradecer pela determinação.",
        "Gratidão é agradecer pela persistência.",
        "Gratidão é agradecer pela superação.",
        "Gratidão é agradecer pelo sucesso.",
        "Gratidão é agradecer pela inspiração.",
        "Gratidão é agradecer pela motivação.",
        "Gratidão é agradecer pela luz.",
        "Gratidão é agradecer pela vida."
    ],
    reflexao: [
        "Refletir é crescer por dentro.",
        "A reflexão traz clareza para a vida.",
        "Pensar antes de agir é sabedoria.",
        "A vida pede pausas para reflexão.",
        "Reflexão é o início da mudança.",
        "Aprenda com o passado, viva o presente.",
        "A reflexão nos aproxima de nós mesmos.",
        "Refletir é buscar sentido em cada experiência.",
        "A reflexão é o caminho do autoconhecimento.",
        "Refletir é transformar o olhar sobre a vida.",
        "Reflexão é o que nos faz evoluir.",
        "Reflexão é o que nos faz aprender.",
        "Reflexão é o que nos faz crescer.",
        "Reflexão é o que nos faz mudar.",
        "Reflexão é o que nos faz melhorar.",
        "Reflexão é o que nos faz amadurecer.",
        "Reflexão é o que nos faz entender.",
        "Reflexão é o que nos faz aceitar.",
        "Reflexão é o que nos faz perdoar.",
        "Reflexão é o que nos faz agradecer.",
        "Reflexão é o que nos faz respeitar.",
        "Reflexão é o que nos faz compartilhar.",
        "Reflexão é o que nos faz confiar.",
        "Reflexão é o que nos faz esperar.",
        "Reflexão é o que nos faz persistir.",
        "Reflexão é o que nos faz superar.",
        "Reflexão é o que nos faz celebrar.",
        "Reflexão é o que nos faz ser melhores.",
        "Reflexão é o que nos faz ser felizes.",
        "Reflexão é o que nos faz ser livres.",
        "Reflexão é o que nos faz ser únicos.",
        "Reflexão é o que nos faz ser eternos.",
        "Reflexão é o que nos faz ser verdadeiros.",
        "Reflexão é o que nos faz ser leais.",
        "Reflexão é o que nos faz ser companheiros.",
        "Reflexão é o que nos faz ser irmãos.",
        "Reflexão é o que nos faz ser parceiros."
    ],
    sucesso: [
        "O sucesso é resultado de esforço e dedicação.",
        "Acredite no seu sucesso e trabalhe por ele.",
        "O sucesso começa com um sonho.",
        "O sucesso é feito de pequenas conquistas.",
        "O sucesso é para quem não desiste.",
        "O sucesso é consequência de boas escolhas.",
        "O sucesso é a soma de disciplina e paixão.",
        "O sucesso é ser feliz com o que se faz.",
        "O sucesso é construído dia após dia.",
        "O sucesso é ser melhor do que ontem.",
        "Sucesso é acreditar em si mesmo.",
        "Sucesso é nunca desistir.",
        "Sucesso é aprender com os erros.",
        "Sucesso é persistir diante das dificuldades.",
        "Sucesso é ter coragem de arriscar.",
        "Sucesso é ter humildade para recomeçar.",
        "Sucesso é ter gratidão pelas conquistas.",
        "Sucesso é ter fé no futuro.",
        "Sucesso é ter paixão pelo que faz.",
        "Sucesso é ter disciplina para continuar.",
        "Sucesso é ter foco nos objetivos.",
        "Sucesso é ter determinação para vencer.",
        "Sucesso é ter resiliência para superar.",
        "Sucesso é ter paciência para esperar.",
        "Sucesso é ter sabedoria para decidir.",
        "Sucesso é ter equilíbrio para agir.",
        "Sucesso é ter criatividade para inovar.",
        "Sucesso é ter generosidade para compartilhar.",
        "Sucesso é ter empatia para compreender.",
        "Sucesso é ter respeito para conviver.",
        "Sucesso é ter amor para viver.",
        "Sucesso é ter alegria para celebrar.",
        "Sucesso é ter esperança para acreditar.",
        "Sucesso é ter luz para iluminar.",
        "Sucesso é ter paz para descansar.",
        "Sucesso é ter saúde para aproveitar.",
        "Sucesso é ter amigos para compartilhar.",
        "Sucesso é ter família para apoiar.",
        "Sucesso é ter sonhos para realizar."
    ],
    familia: [
        "Família é o nosso maior tesouro.",
        "O amor da família é incondicional.",
        "Família é base, porto seguro e amor.",
        "Família é onde a vida começa e o amor nunca termina.",
        "Família é sinônimo de união.",
        "Família é o alicerce da felicidade.",
        "Família é lar, é aconchego.",
        "Família é tudo de mais precioso.",
        "Família é amor multiplicado.",
        "Família é o melhor lugar do mundo.",
        "Família é o que nos faz sorrir.",
        "Família é o que nos faz viver.",
        "Família é o que nos faz sonhar.",
        "Família é o que nos faz acreditar.",
        "Família é o que nos faz lutar.",
        "Família é o que nos faz vencer.",
        "Família é o que nos faz recomeçar.",
        "Família é o que nos faz perdoar.",
        "Família é o que nos faz agradecer.",
        "Família é o que nos faz evoluir.",
        "Família é o que nos faz aprender.",
        "Família é o que nos faz compartilhar.",
        "Família é o que nos faz respeitar.",
        "Família é o que nos faz cuidar.",
        "Família é o que nos faz proteger.",
        "Família é o que nos faz confiar.",
        "Família é o que nos faz esperar.",
        "Família é o que nos faz persistir.",
        "Família é o que nos faz superar.",
        "Família é o que nos faz celebrar.",
        "Família é o que nos faz ser melhores.",
        "Família é o que nos faz ser felizes.",
        "Família é o que nos faz ser livres.",
        "Família é o que nos faz ser únicos.",
        "Família é o que nos faz ser eternos.",
        "Família é o que nos faz ser verdadeiros.",
        "Família é o que nos faz ser leais.",
        "Família é o que nos faz ser companheiros.",
        "Família é o que nos faz ser irmãos.",
        "Família é o que nos faz ser parceiros."
    ],
    inspiração: [
        "A inspiração move a criatividade.",
        "Inspire-se e inspire o mundo.",
        "A inspiração está nos detalhes.",
        "Busque inspiração em cada amanhecer.",
        "A inspiração transforma ideias em ações.",
        "A inspiração é o combustível dos sonhos.",
        "Inspiração é enxergar além do óbvio.",
        "A inspiração está em todo lugar.",
        "Deixe-se inspirar pela vida.",
        "A inspiração é a luz da mente.",
        "Inspiração é o que nos faz criar.",
        "Inspiração é o que nos faz sonhar.",
        "Inspiração é o que nos faz acreditar.",
        "Inspiração é o que nos faz lutar.",
        "Inspiração é o que nos faz vencer.",
        "Inspiração é o que nos faz recomeçar.",
        "Inspiração é o que nos faz perdoar.",
        "Inspiração é o que nos faz agradecer.",
        "Inspiração é o que nos faz evoluir.",
        "Inspiração é o que nos faz aprender.",
        "Inspiração é o que nos faz compartilhar.",
        "Inspiração é o que nos faz respeitar.",
        "Inspiração é o que nos faz cuidar.",
        "Inspiração é o que nos faz proteger.",
        "Inspiração é o que nos faz confiar.",
        "Inspiração é o que nos faz esperar.",
        "Inspiração é o que nos faz persistir.",
        "Inspiração é o que nos faz superar.",
        "Inspiração é o que nos faz celebrar.",
        "Inspiração é o que nos faz ser melhores.",
        "Inspiração é o que nos faz ser felizes.",
        "Inspiração é o que nos faz ser livres.",
        "Inspiração é o que nos faz ser únicos.",
        "Inspiração é o que nos faz ser eternos.",
        "Inspiração é o que nos faz ser verdadeiros.",
        "Inspiração é o que nos faz ser leais.",
        "Inspiração é o que nos faz ser companheiros.",
        "Inspiração é o que nos faz ser irmãos.",
        "Inspiração é o que nos faz ser parceiros."
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

const temaSelect = document.getElementById('temaSelect');
const fonteSelect = document.getElementById('fonteSelect');
const fraseDiv = document.getElementById('frase');
const novaFraseBtn = document.getElementById('novaFrase');
const voltarFraseBtn = document.getElementById('voltarFrase');
const btnFavoritar = document.getElementById('btnFavoritar');
const coracaoIcon = document.getElementById('coracaoIcon');
const btnFavoritos = document.getElementById('btnFavoritos');
const favoritosModal = document.getElementById('favoritosModal');
const favoritosLista = document.getElementById('favoritosLista');
const fecharFavoritos = document.getElementById('fecharFavoritos');

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
        // Se todas as frases já foram exibidas, reinicia o ciclo (impressão de infinitude)
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
} // <-- ESTA CHAVE FALTAVA AQUI!
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
        if (document.getElementById('favoritosModal').classList.contains('ativo')) {
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
                // Busca o índice real do favorito (caso duplicados ou reordenação)
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
    // Remove event listeners duplicados
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
  // Temas extras padronizados
  default: `url('data:image/svg+xml;utf8,<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="140" height="140" rx="40" fill="%230d47a1" fill-opacity="0.13"/></svg>')`,
};

const bgSVGs = {
  amor: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 64 64" fill="none" stroke="%23e53935" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M32 56s-20-13.6-20-28A12 12 0 0 1 32 16a12 12 0 0 1 20 12c0 14.4-20 28-20 28z"/></svg>')`,
  superacao: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 64 64" fill="none" stroke="%231976d2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 56l16-32 16 32 16-24"/><path d="M40 24V8h12v8z"/></svg>')`,
  gratidao: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 64 64" fill="none" stroke="%23ff9800" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 40c0 8 8 16 12 16s12-8 12-16"/><path d="M32 56V32"/><path d="M12 32c0-8 8-16 20-16s20 8 20 16"/></svg>')`,
  reflexao: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 64 64" fill="none" stroke="%231976d2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="32" cy="36" rx="20" ry="12"/><ellipse cx="16" cy="48" rx="4" ry="2"/><ellipse cx="48" cy="48" rx="4" ry="2"/></svg>')`,
  sucesso: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 64 64" fill="none" stroke="%231976d2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="8" width="24" height="24" rx="8"/><path d="M32 32v16"/><path d="M24 48h16"/><path d="M12 16v4a12 12 0 0 0 12 12"/><path d="M52 16v4a12 12 0 0 1-12 12"/></svg>')`,
  familia: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 64 64" fill="none" stroke="%231976d2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="20" cy="28" r="6"/><circle cx="44" cy="28" r="6"/><circle cx="32" cy="44" r="8"/><path d="M20 34v10M44 34v10"/></svg>')`,
  inspiração: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 64 64" fill="none" stroke="%231976d2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="32" cy="28" rx="16" ry="16"/><rect x="24" y="44" width="16" height="8" rx="4"/><path d="M32 52v4"/></svg>')`
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
mostrarFrase();
mudarFonte();
atualizarCoracao();

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
