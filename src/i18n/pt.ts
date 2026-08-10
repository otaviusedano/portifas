import type { Dictionary } from './types'

/**
 * Job titles, framework names and established loanwords (Product Designer,
 * Design System, benchmark, kickoff, marketplace, churn, lifetime value,
 * wireframe, streak) are kept in English on purpose — that is how they are
 * used day to day in the Brazilian UX/UI market.
 */
export const pt: Dictionary = {
  nav: {
    home: 'Início',
    projects: 'Meus projetos',
    about: 'Sobre mim',
    contact: 'Fale comigo',
    menu: 'Abrir menu',
  },
  language: {
    label: 'Idioma',
    en: 'EN',
    pt: 'PT',
  },
  hero: {
    role: 'Product & UX/UI Designer',
    headline:
      'Criando interfaces intuitivas e visualmente atraentes. +3 anos como Product & UX/UI Designer.',
  },
  clients: {
    label: 'Clientes com quem já trabalhei',
  },
  projects: {
    eyebrow: 'Trabalhos selecionados',
    featured: 'Projetos em destaque',
    all: 'Meus projetos',
    items: {
      '1': {
        title: 'Gamificando uma Plataforma de Ensino Online',
        category: 'Product Designer',
        description:
          'A Fpass é uma plataforma de ensino online que reúne cursos das mais diversas áreas, em um modelo parecido com o da Hotmart, onde criadores de conteúdo e alunos se encontram dentro de um único ecossistema digital.',
        tags: ['Web', 'Responsivo', 'Design System', 'Gamificação'],
      },
      '2': {
        title: 'Criando um design system para ser usado com IA na Topaz Consórcios',
        category: 'Product Designer',
        description:
          'Design system que pode ser usado para criar qualquer página com o apoio de IA e prompts',
        tags: ['Design System', 'IA', 'Prompts'],
      },
    },
  },
  about: {
    titlePrefix: 'Olá, eu sou o',
    greeting: 'Prazer em conhecer você.',
    paragraphs: [
      'Minha jornada não começou com um caderno de esboços. Começou com linhas de código. Como desenvolvedor, aprendi como os produtos são construídos de dentro para fora, mas logo percebi que o que realmente me movia não era apenas fazer as coisas funcionarem — era fazer com que elas parecessem certas. Foi isso que me levou ao Design UX/UI, e nunca mais olhei para trás.',
      'Hoje, trago uma perspectiva rara: desenho pensando tanto no usuário quanto no desenvolvedor, cuidando de cada pixel e de cada interação para criar interfaces que não são apenas funcionais, mas genuinamente bonitas e intuitivas.',
      'Fora do trabalho, divido meu espaço com meus gatos, encontro inspiração na música e na arte, e passo os fins de semana torcendo apaixonadamente pelo Palmeiras — porque um bom design, assim como um grande clube de futebol, é feito de visão, trabalho em equipe e de nunca se contentar com o mediano.',
    ],
    stats: ['Anos de experiência', 'Projetos entregues', 'Horas trabalhadas'],
  },
  testimonials: {
    title: 'O que meus colegas dizem sobre mim',
    hint: 'Arraste para ver mais depoimentos →',
    items: {
      '1': {
        quote:
          'Trabalhei com o Otávio na Manobra Studio, principalmente no projeto da Caixa Econômica Federal. Quando entrei no time, ele foi muito acolhedor e sempre disposto a orientar e compartilhar seu conhecimento, o que fez uma enorme diferença no meu período de adaptação.\n\nÉ um profissional competente, colaborativo e sempre pronto a ajudar. Foi um prazer trabalhar com ele, e com certeza o recomendo.',
        role: 'UX/UI & Graphic Designer — Manobra Studio',
      },
      '2': {
        quote:
          'Trabalhar com o Otávio é ter um parceiro de produto supersolícito e aberto a experimentar coisas novas, sempre dando o seu melhor para alcançarmos nossos objetivos! Juntos, atuamos em diversos projetos, de aplicações de autoatendimento a sistemas ERP complexos, e ele sempre trouxe uma visão e uma entrega muito boas, mesmo com poucos inputs.\n\nUma lembrança marcante foi quando desenhei as telas do app em uma folha de papel e ele me entregou um trabalho excepcional! O Otávio é, sem dúvida, um profissional muito criativo, resiliente, capaz de superar qualquer desafio, e uma pessoa muito agradável de se trabalhar junto!',
        role: 'Product Manager — Topaz Consórcios',
      },
      '3': {
        quote:
          'O Otávio passou mais de três anos no time que liderei na Manobra Studio. Atuou em diversos projetos de design de interface com bons resultados e, em alguns deles, também contribuiu na parte de pesquisa.\n\nMais recentemente, começou a incorporar IA no seu fluxo de trabalho diário.',
        role: 'CEO/Founder — Manobra Studio',
      },
    },
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos construir algo incrível.',
    description: (email) =>
      `Tem um projeto em mente? Fale comigo em ${email} ou deixe uma mensagem abaixo.`,
    name: 'Nome',
    namePlaceholder: 'Seu nome',
    email: 'E-mail',
    emailPlaceholder: 'voce@email.com',
    message: 'Mensagem',
    messagePlaceholder: 'Conte sobre o seu projeto…',
    submit: 'Enviar mensagem',
    success: 'Obrigado — sua mensagem foi enviada. Retorno para você em breve.',
  },
  footer: {
    title: 'Vamos construir algo notável',
    subtitle:
      'Estou sempre pronto para novos desafios ou conversas transformadoras. Entre em contato.',
    linkedin: 'Linkedin',
    whatsapp: 'Whatsapp',
  },
  notFound: {
    title: 'Página não encontrada',
    text: 'A página que você procura não existe ou foi movida.',
    back: 'Voltar para o início',
  },
  caseFpass: {
    title: 'Gamificando uma Plataforma de Ensino Online',
    role: 'Product Designer',
    tags: ['Manobra Studio', 'Web', 'Responsivo', 'Design System', 'Gamificação'],
    heroMedia: 'Fpass — visão geral da plataforma',
    star: {
      situation: 'Situação',
      task: 'Tarefa',
      action: 'Ação',
      result: 'Resultado',
    },
    context: {
      heading: 'Início & Contexto',
      paragraphs: [
        'A Fpass é uma plataforma de ensino online que reúne cursos das mais diversas áreas, em um modelo parecido com o da Hotmart, onde criadores de conteúdo e alunos se encontram dentro de um único ecossistema digital.',
        'A plataforma havia crescido rápido em aquisição, mas a experiência depois da compra era totalmente passiva. Os alunos compravam um curso, assistiam às primeiras aulas e desapareciam aos poucos — e o produto não tinha nenhum mecanismo para trazê-los de volta.',
      ],
      media: 'fpass',
    },
    kickoff: {
      heading: 'Kickoff',
      paragraphs: [
        'O projeto começou com um workshop de alinhamento envolvendo os times de produto, marketing e conteúdo. Mapeamos a jornada atual de ponta a ponta, definimos o que engajamento realmente significava para o negócio e delimitamos as fronteiras de uma camada de gamificação que pudesse ser construída sobre a plataforma existente, sem reescrevê-la.',
        'Essa sessão produziu o primeiro retrato compartilhado do problema: a plataforma era excelente em vender um curso e não tinha nada desenhado para as semanas seguintes.',
      ],
    },
    goals: {
      heading: 'Objetivos',
      intro:
        'O conceito do projeto era transformar a experiência passiva de consumir aulas em uma jornada ativa — em que o progresso é visível, recompensado e vale a pena retomar. Três objetivos guiaram cada decisão, da pesquisa ao design final:',
      items: [
        'Criar gatilhos que trouxessem os usuários de volta à plataforma com consistência',
        'Construir uma sensação de progresso contínuo e de pertencimento',
        'Agregar valor percebido além do conteúdo dos cursos, aumentando o lifetime value do usuário para o negócio',
      ],
    },
    pains: {
      heading: 'Dores & Frustrações',
      intro:
        'Mapeei as dores a partir de duas frentes, para que a solução tivesse que responder às duas ao mesmo tempo: o que estava prejudicando o negócio e o que faltava para o aluno.',
      businessHeading: 'Dores do negócio',
      business: [
        {
          title: 'Baixa conclusão dos cursos',
          text: 'A maioria dos alunos parava de assistir nas primeiras semanas, o que enfraquecia resultados, depoimentos e renovações.',
        },
        {
          title: 'Retorno apenas nos lançamentos',
          text: 'O tráfego tinha pico quando um novo curso entrava no ar e ficava plano no intervalo, deixando a plataforma vazia na maior parte do mês.',
        },
        {
          title: 'Churn nos primeiros 30 dias',
          text: 'Os cancelamentos se concentravam logo após a compra, antes de o aluno criar qualquer hábito em torno do produto.',
        },
        {
          title: 'Nenhum motivo para ficar',
          text: 'Quando um curso terminava, não restava nada prendendo o usuário ao ecossistema — a relação acabava com a última aula.',
        },
      ],
      userHeading: 'Dores do usuário identificadas no benchmark',
      user: [
        {
          title: 'O progresso era invisível',
          text: 'Uma aula marcada como concluída era o único retorno que a plataforma dava, então o esforço de longo prazo nunca somava em nada visível.',
        },
        {
          title: 'Nada para conquistar ou exibir',
          text: 'Não havia recompensa, coleção ou status atrelado às horas investidas nos estudos.',
        },
        {
          title: 'Estudar era solitário',
          text: 'Os alunos não tinham a sensação de fazer parte de um grupo caminhando na mesma direção.',
        },
        {
          title: 'Nenhum atrativo nos dias comuns',
          text: 'Sem uma aula agendada, não havia motivo algum para abrir a plataforma.',
        },
      ],
    },
    research: {
      heading: 'Pesquisa',
      subheading: 'Análise de Concorrentes (Benchmarking de Gamificação)',
      text: 'Fiz um benchmark de produtos que já resolvem retenção com mecânicas de jogo — de apps de idiomas e trackers de hábitos a comunidades de fitness e jogos mobile — em busca de padrões que pudessem ser adaptados a um contexto de aprendizagem sem transformar a plataforma em um jogo.',
      media: 'Painel de benchmark de gamificação',
      calloutTitle: 'O que analisamos',
      calloutText:
        'Seis mecânicas apareceram de forma consistente em todos os produtos do benchmark. Destrinchei cada uma para entender o que ela recompensa, quanto custa construir e se sobreviveria em uma plataforma onde o conteúdo — e não o jogo — é o produto.',
    },
    benchmark: [
      {
        title: 'Personalização de conta e avatar',
        text: 'Produtos que deixam as pessoas moldarem um avatar criam senso de propriedade desde a primeira sessão. O personagem vira um pequeno investimento pessoal, e tudo o que é conquistado depois passa a ter onde ser vestido e exibido.',
        media: 'Personalização de avatar — benchmark',
      },
      {
        title: 'Sistemas de progressão por nível',
        text: 'Níveis transformam atividades dispersas em um único número legível. Cada aula alimenta uma barra que nunca zera, então o esforço se acumula mesmo quando o aluno alterna entre cursos.',
        media: 'Progressão por nível — benchmark',
      },
      {
        title: 'Moeda virtual',
        text: 'Uma moeda virtual recompensa ações que o produto quer ver repetidas e dá a elas um retorno imediato e tangível — sem envolver dinheiro real nem dar desconto na oferta principal.',
        media: 'Moeda virtual — benchmark',
      },
      {
        title: 'Marketplace de acessórios e vantagens',
        text: 'Um lugar para gastar o que foi conquistado fecha o ciclo. Itens cosméticos e vantagens práticas dão sentido à moeda e dão ao usuário um objetivo para o qual poupar.',
        media: 'Marketplace — benchmark',
      },
      {
        title: 'Ranking de usuários',
        text: 'O ranking introduz comparação social e pertencimento. Bem conduzido, motiva; mal conduzido, desanima os iniciantes — por isso as regras de escopo e de reset importam mais do que o placar em si.',
        media: 'Ranking de usuários — benchmark',
      },
      {
        title: 'Sequência de dias consecutivos',
        text: 'A sequência (streak) é o gatilho de retorno mais forte de todo o conjunto. Cria um pequeno compromisso diário e algo que o usuário não quer perder, que é exatamente o hábito que faltava à plataforma.',
        media: 'Sequência de dias — benchmark',
      },
    ],
    goalsCompare: {
      heading: 'Objetivos do negócio & Objetivos do usuário',
      intro:
        'Coloquei as duas listas lado a lado para encontrar a sobreposição. As mecânicas que serviam ao aluno e ao negócio ao mesmo tempo foram as que entraram na primeira release — todo o resto ficou para uma fase posterior.',
      businessTitle: 'Objetivos do negócio',
      business: [
        'Aumentar a retenção e o lifetime value de toda a base',
        'Elevar as taxas de conclusão dos cursos',
        'Transformar visitas mensais em sessões semanais e diárias',
        'Gerar boca a boca orgânico em torno da plataforma',
      ],
      userTitle: 'Objetivos do usuário',
      user: [
        'Ver um progresso que se acumula e nunca zera',
        'Ser recompensado pela consistência, não apenas por concluir',
        'Pertencer a uma comunidade que estuda na mesma direção',
        'Ter um motivo para abrir a plataforma nos dias comuns',
      ],
    },
    highFidelity: {
      title: 'Alta fidelidade',
      text: 'Com as mecânicas definidas, fui direto para protótipos de alta fidelidade. O Design System da Fpass já estava consolidado e eu conhecia o contexto do produto a fundo, eles eram clientes do Manobra Studio desde o início, então a estrutura das telas não precisava ser descoberta em wireframe. A pergunta que sobrava era onde cada novo sinal, nível, moeda, sequência e conquistas, poderia viver sem competir com a própria aula.',
      media: 'Protótipos de alta fidelidade',
    },
    headerComponent: {
      title: 'Novo componente de header',
      text: 'O header se tornou a casa permanente da camada de gamificação. Ele carrega nível, saldo de moedas e sequência em todas as telas, perto o suficiente para ser consultado o tempo todo e discreto o bastante para não roubar a atenção da navegação.',
      media: 'Novo componente de header',
    },
    profile: {
      title: 'Página de perfil',
      text: 'A página de perfil virou o lugar onde tudo o que o aluno conquistou vive junto — a recompensa pela consistência, em uma tela que vale a pena revisitar e compartilhar.',
      media: 'Página de perfil',
      blocks: [
        'Avatar e personalização que pertencem de fato ao usuário',
        'Nível e barra de experiência como destaque da página',
        'Conquistas obtidas e as que ainda estão bloqueadas',
        'Saldo de moedas com caminho direto para o marketplace',
        'Posição no ranking dentro do grupo do próprio usuário',
        'Calendário de sequência mostrando os dias consecutivos de estudo',
      ],
    },
    validation: {
      heading: 'Validação & Design final',
      paragraphs: [
        'O protótipo foi testado com alunos ativos de cursos diferentes, incluindo tanto pessoas que tinham comprado havia pouco tempo quanto pessoas que já haviam se afastado. A sequência e as conquistas foram compreendidas de imediato; o marketplace precisou de uma ligação mais clara entre o que cada ação rende e o que é possível comprar.',
        'O design final aplicou esse retorno em quatro telas, cada uma respondendo a uma parte específica do ciclo: conquistar, colecionar, progredir e retornar.',
      ],
    },
    finalDesign: [
      {
        title: 'Marketplace',
        text: 'Tudo o que é conquistado na plataforma é gasto aqui — itens cosméticos para o avatar e vantagens práticas, como tempo extra de curso ou conteúdo exclusivo. O catálogo é organizado para que um iniciante sempre veja algo alcançável em poucos dias de estudo.',
        media: 'Marketplace — design final',
      },
      {
        title: 'Conquistas',
        text: 'As conquistas reconhecem comportamentos que o produto quer reforçar: concluir um módulo, voltar depois de uma pausa, estudar temas diferentes. As conquistas bloqueadas continuam visíveis, para que haja sempre um próximo alvo na tela.',
        media: 'Conquistas — design final',
      },
      {
        title: 'Subindo de nível',
        text: 'Subir de nível é o momento em que todo o sistema compensa. Interrompe o fluxo apenas o suficiente para celebrar, entrega moedas e aponta o que o próximo nível desbloqueia.',
        media: 'Subindo de nível — design final',
      },
      {
        title: 'Missões',
        text: 'As missões quebram a longa jornada de um curso em objetivos curtos e diários. Dão à sequência algo concreto para fazer a cada dia e conectam a camada de gamificação de volta ao conteúdo de aprendizagem.',
        media: 'Missões — design final',
      },
    ],
  },
  caseDesignSystem: {
    title: 'Criando um design system para ser usado com IA na Topaz Consórcios',
    role: 'Product Designer',
    tags: [
      'Manobra Studio',
      'Topaz Consórcios',
      'Design System',
      'Design Tokens',
      'IA Generativa',
    ],
    heroMedia: 'Design System da Topaz Consórcios — visão geral',
    situation: {
      label: 'Situação',
      heading: 'O problema que ninguém queria admitir',
      paragraphs: [
        'Quando a Topaz nos procurou, o cenário era familiar: uma empresa em crescimento, vários sistemas digitais construídos ao longo dos anos, cada um com sua própria personalidade, suas próprias cores, seus próprios botões. Era como se diferentes arquitetos tivessem construído salas de um mesmo hotel sem nunca terem se falado.',
        'Mas havia uma camada a mais nesse desafio. A Topaz não queria apenas padronizar o que já existia — ela queria ir além. A ambição era usar inteligência artificial para criar novas interfaces digitais do zero, a partir de um simples prompt. E fazer isso sem que a IA inventasse soluções desconectadas da identidade visual que eles levaram anos para construir.',
      ],
      media: 'Sistemas digitais existentes da Topaz',
      quoteTitle: 'O pedido do cliente',
      quoteText:
        'Queremos que a IA crie interfaces como se fosse um designer sênior que trabalha na Topaz há dez anos. Que ela conheça nossa linguagem, nossas cores, nossa forma de falar com o usuário.',
      painsHeading: 'Dores mapeadas',
      pains: [
        {
          title: 'Identidade fragmentada',
          text: 'Cada sistema digital carregava fragmentos de uma identidade que nunca havia sido plenamente articulada, com cores, tipografia e componentes divergindo entre produtos.',
        },
        {
          title: 'Design ilegível para máquinas',
          text: 'A documentação existia para olhos humanos. Nenhuma IA conseguiria interpretar aquela intenção visual e transformá-la em interface consistente.',
        },
        {
          title: 'IA sem contexto improvisa',
          text: 'Sem uma fonte de verdade estruturada, qualquer geração a partir de prompt produzia soluções desconectadas da marca.',
        },
        {
          title: 'Escala dependente de pessoas',
          text: 'Toda nova interface precisava passar por um designer, o que travava o crescimento do time e dos produtos.',
        },
      ],
    },
    task: {
      label: 'Tarefa',
      heading: 'Provar que era possível — e definir o que precisava existir',
      paragraphs: [
        'Antes de qualquer pixel, qualquer componente, qualquer linha de código, mergulhamos em pesquisa. Queríamos entender se as IAs disponíveis no mercado eram capazes de utilizar um Design System como base real para a geração de interfaces — e não apenas como referência vaga.',
        'A resposta foi sim. Com a estrutura certa, seria totalmente possível. Mas havia uma condição: o Design System precisaria ser mais do que belo no Figma. Ele precisaria ser legível para máquinas.',
        'Esse insight mudou o enquadramento do projeto. Não estávamos apenas criando um guia de estilo — estávamos construindo uma linguagem. Uma linguagem que designers humanos e inteligências artificiais precisariam falar com a mesma fluência.',
      ],
      goalsHeading: 'Objetivos',
      goals: [
        'Unificar em um único sistema a linguagem visual dispersa entre os produtos digitais da Topaz',
        'Documentar a identidade da marca com profundidade suficiente para que uma IA entenda o porquê de cada decisão, e não apenas o valor a aplicar',
        'Permitir que novas interfaces nasçam de um prompt sem improviso e sem desvio da identidade',
      ],
    },
    action: {
      label: 'Ação',
      heading: 'Seis meses construindo uma linguagem',
      intro:
        'A construção seguiu quatro frentes encadeadas: escutar o que já existia, criar a fundação de tokens, documentar cada componente e — depois de um teste frustrado — reconstruir tudo no formato que a IA realmente lê.',
      stats: [
        { value: '6', label: 'meses de construção contínua' },
        { value: '35+', label: 'componentes com variações' },
        { value: '2', label: 'tipos de tokens criados' },
      ],
      audit: {
        heading: 'Antes de criar, precisávamos escutar',
        paragraphs: [
          'A primeira coisa que fizemos foi mergulhar no passado da Topaz. Analisamos cada sistema digital que eles já haviam construído — aplicativos, plataformas web, painéis internos. Cada um carregava fragmentos de uma identidade que ainda não havia sido plenamente articulada.',
          'Desse mapeamento profundo saíram as respostas para perguntas que pareciam simples, mas eram fundamentais: quais cores realmente representam a Topaz? Qual é a tipografia que melhor expressa sua personalidade? Como a marca fala com seus usuários — com autoridade, com proximidade, com técnica? E quais eram os componentes que realmente faziam sentido existir?',
          'Não partimos do zero. Partimos da história deles.',
        ],
        media: 'Auditoria dos sistemas digitais existentes',
      },
      tokens: {
        heading: 'A fundação invisível: tokens que carregam significado',
        intro:
          'Todo sistema visual começa pela fundação. E a fundação de qualquer Design System robusto são os tokens — valores que transformam decisões de design em código. Criamos dois tipos, cada um com um propósito muito claro.',
        primitive: {
          label: 'Camada base',
          name: 'Tokens primitivos',
          text: 'São os valores brutos da marca — as cores exatas, os tamanhos de fonte, os espaçamentos. Eles não carregam contexto de uso; são a paleta de tinta antes de tocar a tela.',
        },
        semantic: {
          label: 'Camada de sentido',
          name: 'Tokens semânticos',
          text: 'São os primitivos com propósito. Em vez de uma cor em hexadecimal, dizem cor de ação primária. Em vez de 16px, dizem espaçamento interno de botão. Eles traduzem valores em intenção.',
        },
        examples: [
          '--color-brand-500',
          '--color-action-primary',
          '--spacing-4',
          '--spacing-button-inner',
          '--font-size-base',
          '--font-size-heading-lg',
          '--radius-sm',
          '--radius-interactive',
        ],
        closing:
          'Essa dupla camada foi decisiva. Os tokens primitivos garantem que a marca nunca seja distorcida. Os tokens semânticos garantem que qualquer pessoa — ou qualquer IA — compreenda por que usar cada valor, e não apenas qual valor usar. É a diferença entre dar a alguém um dicionário e dar-lhe a gramática da língua.',
        media: 'Estrutura de tokens primitivos e semânticos',
      },
      components: {
        heading: '35 componentes e a disciplina de documentar cada detalhe',
        intro:
          'Com os tokens estabelecidos, começamos a construção dos componentes no Figma. Mais de 35 peças, cada uma tratada com a seriedade de um projeto dentro do projeto. Para cada componente, a documentação seguia uma estrutura rígida e deliberada:',
        steps: [
          {
            title: 'Anatomia',
            text: 'Mapeamento de cada parte do componente, nomeando camadas e propriedades com precisão cirúrgica.',
          },
          {
            title: 'Estados',
            text: 'Default, hover, focus, active, disabled, error — nenhum estado ficou sem definição visual e de comportamento.',
          },
          {
            title: 'Variações',
            text: 'Tamanhos, hierarquias, tipos e contextos de uso — cada variação com critérios claros de quando e por que aplicá-la.',
          },
          {
            title: 'Layout & Styles',
            text: 'Regras de espaçamento interno, alinhamento, grid e vínculos diretos com os tokens semânticos da fundação.',
          },
          {
            title: 'Guia de usabilidade',
            text: 'O porquê de cada decisão. Quando usar, quando evitar, armadilhas comuns e boas práticas de acessibilidade.',
          },
        ],
        closing:
          'Durante todos os seis meses, realizamos reuniões semanais com o time da Topaz. Não apenas para apresentar o progresso, mas para validar decisões, ouvir o contexto do negócio e garantir que o que estávamos construindo era, de fato, deles.',
        media: 'Biblioteca de componentes documentada no Figma',
      },
      pivot: {
        heading: 'O teste, o tropeço e o recomeço necessário',
        intro:
          'O Design System no Figma estava completo. Era hora do grande teste: pedir à IA que acessasse o arquivo e criasse uma interface simples — campos de formulário, textos, títulos, botões. Os componentes mais fundamentais.',
        calloutLabel: 'Ponto de virada',
        calloutText:
          'O resultado não foi o que esperávamos. A IA entendia o design, mas não conseguia traduzir aquela intenção visual em código funcional e consistente. O Figma era um museu bonito — e as IAs de código precisavam de uma fábrica.',
        paragraphs: [
          'Em vez de encarar isso como um fracasso, encaramos como informação. Junto ao time da Topaz, revisamos a estratégia. A conclusão foi clara: para que uma IA pudesse gerar interfaces fidedignas à marca, os componentes precisavam existir como código real — HTML, CSS e JavaScript — não apenas como frames visuais.',
          'Começamos de novo. Dessa vez, com o Cursor como aliado — uma ferramenta que potencializa a escrita de código com assistência de IA. O Figma deixou de ser o destino final e passou a ser o mapa de referência para a construção do que seria o verdadeiro produto entregável.',
        ],
        media: 'Primeiro teste de geração de interface via Figma',
      },
    },
    result: {
      label: 'Resultado',
      heading: 'Do Figma para o GitHub: a IA encontra sua língua nativa',
      intro:
        'Com todos os componentes e tokens traduzidos para código e publicados em um repositório no GitHub, era hora de fechar o ciclo. Pedimos a uma IA que lesse e analisasse o repositório — e então criasse a mesma interface que havia falhado meses antes.',
      calloutLabel: 'Resultado validado',
      calloutText:
        'O resultado foi satisfatório, coeso e surpreendentemente fidedigno ao que havíamos imaginado. A IA não só entendeu os componentes — ela entendeu a lógica por trás deles. Com um prompt, ela montou uma interface que parecia ter sido feita por um designer que conhecia profundamente a Topaz.',
      paragraphs: [
        'O repositório se tornou muito mais do que um arquivo de código. Tornou-se a memória viva da identidade visual da Topaz — um recurso que qualquer IA, em qualquer momento, pode consultar para criar novas interfaces sem improvisar, sem inventar, sem se perder.',
        'O Design System havia encontrado sua forma final: não apenas visual, não apenas documentado, mas executável. Uma linguagem completa, pronta para ser falada por humanos e máquinas com igual precisão.',
      ],
      media: 'Interface gerada por IA a partir do repositório',
      outcomesHeading: 'O que a Topaz levou do projeto',
      outcomes: [
        'Interfaces digitais da Topaz criadas do zero a partir de um único prompt',
        'Componentes e tokens executáveis em HTML, CSS e JavaScript, versionados no GitHub',
        'Identidade visual preservada sem depender de revisão manual a cada nova tela',
        'Capacidade de escalar a marca sem que toda decisão passe por um designer',
        'Resultado final validado pelo time da Topaz ao fim dos seis meses',
      ],
    },
    timeline: {
      heading: 'Linha do tempo',
      items: [
        {
          phase: 'Mês 1',
          text: 'Análise dos sistemas existentes e definição de cores, tipografia e voz da marca',
        },
        {
          phase: 'Meses 1–2',
          text: 'Criação dos tokens primitivos e semânticos no Figma',
        },
        {
          phase: 'Meses 2–5',
          text: 'Construção dos 35+ componentes com anatomia, estados e guias de uso',
        },
        {
          phase: 'Mês 6',
          text: 'Teste com IA via Figma revela a necessidade de código real',
        },
        {
          phase: 'Pivô',
          text: 'Componentes recriados em HTML, CSS e JS com auxílio do Cursor',
        },
        {
          phase: 'Conclusão',
          text: 'Repositório no GitHub e teste de IA com resultado validado pela Topaz',
        },
      ],
    },
    stack: {
      heading: 'Ferramentas utilizadas',
      text: 'Um processo híbrido entre design e engenharia, com IA generativa como copiloto nas duas pontas — do desenho dos design tokens no Figma até o código versionado no GitHub.',
    },
    learnings: {
      heading: 'O que aprendemos sobre design, código e confiança',
      paragraphs: [
        'Esse projeto nos ensinou que um Design System não é um entregável — é um contrato. Um contrato entre a marca e quem a executa, seja um designer júnior, um desenvolvedor ou uma inteligência artificial.',
        'Aprendemos também que a IA não substitui a visão humana — ela a amplifica. Mas para isso, essa visão precisa estar documentada com profundidade, com intenção, com a coragem de dizer não apenas o que fazer, mas por quê.',
        'A Topaz saiu desse projeto com algo que vai muito além de componentes bonitos e tokens bem nomeados. Saiu com um sistema que cresce com ela.',
      ],
      quoteTitle: 'Aprendizado principal',
      quoteText:
        'A melhor IA de design não é aquela que sabe tudo — é aquela que tem acesso ao contexto certo, na estrutura certa, na hora certa.',
    },
  },
}
