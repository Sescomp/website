$(document).ready(function(){
    let scheduleMonday = [
        {
            "name": "Credenciamento",
            "room": "-",
            "hour": "14:00-16:00",
            "label": "Credenciamento"
        },
        {
            "name": "Abertura",
            "room": "Espaço Bill Gates",
            "hour": "16:00-17:00",
            "label": "Abertura"
        },
    ];

    let scheduleMondayTable = '';

    for (const item of scheduleMonday) {
        scheduleMondayTable += `<tr>
            <th class="text-white bg-dark text-center">${item.hour}</th>
            <td class="text-center">${item.label}</td>
            <td class="text-center">${item.name}</td>
            <td class="text-center">${item.room}</td>
        </tr>`
    }

    $('#schedule-monday').append(scheduleMondayTable);

    let scheduleTuesday = [
        {
            "name": "Débora Ruth da Silva Valentim ",
            "room": "Videoconferência",
            "hour": "08:00-09:00",
            "label": "Computação Forense no Ambito Criminal "
        },
        {
            "name": "Allan Wariss",
            "room": "Room 7",
            "hour": "08:00-10:00",
            "label": "Minicurso de Python"
        },
        {
            "name": "Anna Beatriz dos Santos Marques",
            "room": "Room 2",
            "hour": "08:00-11:00",
            "label": "Modelando a interação e navegação do usuário com foco na usabilidade"
        },
        {
            "name": "Liana Mara Carvalho de Menezes",
            "room": "Videoconferência",
            "hour": "09:00-10:00",
            "label": "Uma viagem ao mundo da Internet das Coisas"
        },
        {
            "name": "Rafael Evangelista Caminha Silva",
            "room": "Laboratório 4B",
            "hour": "09:00-12:00",
            "label": "Criando testes automatizados com Robot Framework"
        },
        {
            "name": "Marcel Bastos Bleasby",
            "room": "LAB 2A",
            "hour": "09:00-12:00",
            "label": "Descomplicando o figma"
        },
        {
            "name": "Israely Lima de Oliveira",
            "room": "LAB 2A",
            "hour": "09:00-12:00",
            "label": "Descomplicando o figma"
        },
        {
            "name": "Diana Lara de Sousa Costa",
            "room": "Videoconferência",
            "hour": "10:00-11:00",
            "label": "Diversificar e Incluir para Inovar: mercado de trabalho do mundo Tech"
        },
        {
            "name": "Karine Silva Sousa ",
            "room": "Room 6",
            "hour": "10:00-12:00",
            "label": "Importância do design nas tecnologias do sistema de saúde pública"
        },
        {
            "name": "Rhenara Alves Oliveira",
            "room": "Videoconferência",
            "hour": "11:00 - 12:00",
            "label": "Desafios da mulher na área da TI: Um relato de experiência"
        },
        {
            "name": "Ana Iza de Sousa Alencar",
            "room": "Videoconferência",
            "hour": "11:00 - 12:00",
            "label": "Desafios da mulher na área da TI: Um relato de experiência"
        },
        {
            "name": "Maria Elanne Mendes Rodrigues",
            "room": "Videoconferência",
            "hour": "11:00 - 12:00",
            "label": "Desafios da mulher na área da TI: Um relato de experiência"
        },
        {
            "name": "Karina da Silva Castelo Branco",
            "room": "Videoconferência",
            "hour": "11:00-12:00",
            "label": "Desafios da mulher na área da TI: Um relato de experiência"
        },
        {
            "name": "Gabriel Barros Aragão Silva",
            "room": "sala 2",
            "hour": "11:00-12:00",
            "label": "Soft e Hard skills: Potencializar a transição da universidade para o mercado de trabalho"
        },
        {
            "name": "Wesley Santos",
            "room": "LAB1A",
            "hour": "13:30 - 17:30",
            "label": "Introdução ao Desenvolvimento de Jogos com Unity"
        },
        {
            "name": "Sara Girão Guimarães",
            "room": "sala 2",
            "hour": "14:30-15:30",
            "label": "Como me desenvolver na Área de Qualidade de Software?"
        },
        {
            "name": "Lucinara Kecia Silva Fernandes",
            "room": "Room 6",
            "hour": "14:30-15:30",
            "label": "Metodologias Ágeis no Desenvolvimento de Software"
        },
        {
            "name": "Anna Victoria Ferreira da Silva",
            "room": "Videoconferência",
            "hour": "14:30-15:30",
            "label": "O que faz um Engenheiro de Software com foco em Testes?"
        },
        {
            "name": "Vinícius Soares Barbosa",
            "room": "Videoconferência",
            "hour": "15:30 - 16:30",
            "label": "O que é nano e como se envolver neste laboratório open source vivo"
        },
        {
            "name": "Luiza Jorgiana Moura da Silva ",
            "room": "Room 1",
            "hour": "15:30-16:30",
            "label": "O que saber sobre saúde mental e como posso cuidar de mim e ajudar aos outros."
        },
        {
            "name": "Lucinara Kecia Silva Fernandes",
            "room": "Laboratório 4B",
            "hour": "15:30-17:30",
            "label": "Kanban na prática"
        },
        {
            "name": "Luiza Fernanda de Oliveira Albano Carvalho ",
            "room": "Room 7",
            "hour": "15:30-17:30",
            "label": "Libras em Campus."
        },
        {
            "name": "Bianca Tiane de Carvalho dos Santos ",
            "room": "Room 6",
            "hour": "15:30-17:30",
            "label": "Aplicacão prática de metodologias de UX Design"
        },
        {
            "name": "Rebeca Alves Sousa",
            "room": "Room 1",
            "hour": "16:30-17:30",
            "label": "Como conseguir seu primeiro emprego em tecnologia"
        }
    ]
    let scheduleTuesdayTable = '';

    for (const item of scheduleTuesday) {
        scheduleTuesdayTable += `<tr>
            <th class="text-white bg-dark text-center">${item.hour}</th>
            <td class="text-center">${item.label}</td>
            <td class="text-center">${item.name}</td>
            <td class="text-center">${item.room}</td>
        </tr>`
    }

    $('#schedule-tuesday').append(scheduleTuesdayTable);

    let scheduleWednesday = [
        {
            "name": "Mário Wedney de Lima Moreira",
            "room": "Room 1",
            "hour": "08:00 - 09:00",
            "label": "Redes Neurais Convolucionais para Contagem Automática em Carcinicultura"
        },
        {
            "name": "Rubens Abraão da Silva Sousa",
            "room": "sala 2",
            "hour": "08:00 - 10:00",
            "label": "Gestão hibrida e suas diferentes formas de aplicações"
        },
        {
            "name": "Geovanna de Araújo Silva",
            "room": "sala 2",
            "hour": "09:00 - 10:00",
            "label": "Tecnologia e Sustentabilidade: a integração da TI no desenvolvimento sustentável"
        },
        {
            "name": "Lydiana Rodrigues de Oliveira",
            "room": "sala 2",
            "hour": "09:00 - 12:00",
            "label": "Tecnologia e Sustentabilidade: a integração da TI no Desenvolvimento Sustentávevl"
        },
        {
            "name": "Matheus Henrique Esteves Paixão",
            "room": "LAB1A",
            "hour": "10:00 - 11:00",
            "label": "MicroFrontEnds: Conceitos e Prática"
        },
        {
            "name": "Matheus Henrique Esteves Paixão(mudaram a atividade)",
            "room": "Room 1",
            "hour": "10:00 - 12:00",
            "label": "Uso de IA no processo de software: ajuda ou ameaça?"
        },
        {
            "name": "Dayana Mazete Cordeiro",
            "room": "Videoconferência",
            "hour": "10:00 - 12:00",
            "label": "Indo além do técnico - A importância das soft skill no mundo tech"
        },
        {
            "name": "José Lassance de Castro Silva ",
            "room": "Room 7",
            "hour": "10:00- 11:00",
            "label": "Infraestrutura de TIC do estado do Ceará "
        },
        {
            "name": "Lucas Antônio Calixto Ferreira",
            "room": "Videoconferência",
            "hour": "10:00-11:00",
            "label": "Diversidade na prática: como a gestão de DE&I impacta positivamente os resultados"
        },
        {
            "name": "Andreza Fernandes de Oliveira",
            "room": "Videoconferência",
            "hour": "10:00-12:00",
            "label": "O Caminho das Pedras: da universidade ao Mercado de Trabalho. O que esperam de mim?"
        },
        {
            "name": "Pedro Lucas Luna Araujo Vieira",
            "room": "Auditório I",
            "hour": "10:00-12:00",
            "label": "Abri uma startup, e aí?"
        },
        {
            "name": "Sandra Regina Rocha",
            "room": "Room 6",
            "hour": "11:00-12:00",
            "label": "Inteligência emocional e roda da vida"
        },
        {
            "name": "Emilly Maryelle Xavier Pereira",
            "room": "Videoconferência",
            "hour": "13:30  - 14:30",
            "label": "Desenvolvimento de jogos e a qualidade de processos nos produtos de software"
        },
        {
            "name": "Sidevaldo Vinícius Paulino de Souza(junto com Emilly)",
            "room": "Videoconferência",
            "hour": "13:30 - 14:30",
            "label": "Desenvolvimento de jogos e a qualidade de processos nos produtos de software"
        },
        {
            "name": "Francisco Olavo do Nascimento Silva Melo(junto com Emilly)",
            "room": "Videoconferência",
            "hour": "13:30 - 14:30",
            "label": "Desenvolvimento de jogos e a qualidade de processos nos produtos de software"
        },
        {
            "name": "Lucas José Sousa Lima(junto com Emilly)",
            "room": "Videoconferência",
            "hour": "13:30 - 14:30",
            "label": "Desenvolvimento de jogos e a qualidade de processos nos produtos de software."
        },
        {
            "name": "Mayk Jadam Salustiano dantas",
            "room": "Auditório 1",
            "hour": "13:30 - 15:30",
            "label": "Palestra sobre sua startup, Demonstração da sua startup, roda de conversa "
        },
        {
            "name": "Carlos Gabriel Leite Barros",
            "room": "LAB 2A",
            "hour": "13:30 - 15:30",
            "label": "Criando suas próprias ferramentas no Vscode"
        },
        {
            "name": "Adriana Lopes Damian",
            "room": "Room 2",
            "hour": "13:30 - 15:30",
            "label": "Análise da Experiência de Usuários por meio da Abordagem Dogfooding"
        },
        {
            "name": "Fernanda Ferreira do Nascimento",
            "room": "LAB 2A",
            "hour": "13:30 - 16:30",
            "label": "Nuances para o desenvolvimento Backend com NodeJS"
        },
        {
            "name": "DANIEL DIEGO LACERDA CIRILO",
            "room": "Room 7",
            "hour": "13:30 - 17:30",
            "label": "Jornada do Desenvolvedor de Jogos Indie"
        },
        {
            "name": "Igor Mendes",
            "room": "Room 2",
            "hour": "14:30 - 16:30",
            "label": "Programadores e a Síndrome do Impostor, um casamento indesejado"
        },
        {
            "name": "Williana Luzia Sousa Leite",
            "room": "Room 1",
            "hour": "14:30 - 16:30",
            "label": "Ciência de dados no mercado de trabalho"
        },
        {
            "name": "Katieli Bianca Dieter",
            "room": "Videoconferência",
            "hour": "14:30 - 16:30",
            "label": "Bate papo sobre mercado de trabalho e carreira em Data Science"
        },
        {
            "name": "Williana Luzia Sousa Leite",
            "room": "Videoconferência",
            "hour": "14:30 - 16:30",
            "label": "Bate papo sobre mercado de trabalho e carreira em Data Science"
        },
        {
            "name": "Veronica Vannini",
            "room": "Videoconferência",
            "hour": "14:30 - 16:30",
            "label": "Bate papo sobre mercado de trabalho e carreira em Data Science"
        },
        {
            "name": "Izequiel Pereira de Norões",
            "room": "Room 6",
            "hour": "14:30 - 16:30",
            "label": "A WEB 3, o Metaverso e os Games"
        },
        {
            "name": "Jacilane de Holanda Rabelo",
            "room": "Room 6",
            "hour": "14:30 - 17:30",
            "label": "Desbravando a Gestão do Conhecimento em Engenharia de Software: Vamos nessa?"
        },
        {
            "name": "Luísa Souza Moura",
            "room": "Videoconferência",
            "hour": "15:30 - 16:30",
            "label": "Jornada além das fronteiras: um caminho pela carreira em tecnologia dentro e fora do Brasil"
        },
        {
            "name": "Rafael Fernandes Ivo",
            "room": "Room 2",
            "hour": "15:30 - 17:30",
            "label": "Aplicações de Renderização Não Fotorrealista"
        },
        {
            "name": "Jordas Felipe da Silva",
            "room": "Room 6",
            "hour": "15:30 - 17:30",
            "label": "Desbravando a Gestão do Conhecimento em Engenharia de Software: Vamos nessa?"
        },
        {
            "name": "Ana Paula Assis Buosi",
            "room": "Auditório I",
            "hour": "16:30 - 17:30",
            "label": "Lei Geral de Proteção de Dados Pessoais e cibercrimes: impactos jurídicos no contexto tecnológico"
        },
        {
            "name": "Deborah Rabay Nogueira",
            "room": "Auditório I",
            "hour": "16:30 - 17:30",
            "label": "Lei Geral de Proteção de Dados Pessoais e cibercrimes: impactos jurídicos no contexto tecnológico"
        },
        {
            "name": "Érika Alcântara Gondim Castro",
            "room": "Room 1",
            "hour": "16:30 - 17:30",
            "label": "Descomplicando o Inglês - como perder o medo de conseguir uma vaga de emprego."
        },
        {
            "name": "Carlos Renan Moreira",
            "room": "Room 7",
            "hour": "16:30 - 17:30",
            "label": "Ainda vale a pena ser desenvolvedor PHP?"
        },
        {
            "name": "Dmontier Pinheiro Aragão Junior",
            "room": "Auditório 1",
            "hour": "16:30-17:30",
            "label": "Logistica 5.0"
        }
    ]
    let scheduleWednesdayTable = '';

    for (const item of scheduleWednesday) {
        scheduleWednesdayTable += `<tr>
            <th class="text-white bg-dark text-center">${item.hour}</th>
            <td class="text-center">${item.label}</td>
            <td class="text-center">${item.name}</td>
            <td class="text-center">${item.room}</td>
        </tr>`
    }

    $('#schedule-wednesday').append(scheduleWednesdayTable);

    let scheduleThursday = [
        {
            "name": "Rubens Abraão da Silva Sousa",
            "room": "Auditório",
            "hour": "08:00 - 10:00",
            "label": "Gestão do Tradicional do ágil"
        },
        {
            "name": "Dayana Mazete Cordeiro",
            "room": "Videoconferência",
            "hour": "08:00 - 10:00",
            "label": "Segurança psicológica e sua importância para a inovação."
        },
        {
            "name": "Francisco Matheus Ricelly Pinto de Sena",
            "room": "Room 7 ",
            "hour": "08:00 - 10:00",
            "label": "Introdução aos testes - desmistificando os testes automatizados em aplicações web"
        },
        {
            "name": "Ana Paula Lourenço dos Santos ",
            "room": "sala 2",
            "hour": "08:00 - 10:00",
            "label": "Phishing, você sabe identificar esta ameaça? "
        },
        {
            "name": "Júlio César Silva Araújo",
            "room": "Room 6",
            "hour": "08:00 - 12:00",
            "label": "Problemas de otimização em grafos: da teoria à prática"
        },
        {
            "name": "Thaís Gaudencio do Rêgo",
            "room": "Videoconferência",
            "hour": "08:00- 09:00",
            "label": "Introdução à Inteligência Artificial"
        },
        {
            "name": "Andreina Maria Mendes da Silva",
            "room": "Room 1",
            "hour": "09:00 - 10:00",
            "label": "Processamento de Imagens e Visão Computacional: Conceitos e Cases"
        },
        {
            "name": "Hinessa Dantas Caminha",
            "room": "Videoconferência",
            "hour": "10:00 - 11:00",
            "label": "Um bate-papo sobre como a academia e o mercado embora sejam tratados como coisas antagonistas, suas experiências em ambas as áreas podem te ajudar a se tornar um profissional único e qualificado."
        },
        {
            "name": "Carlos Gabriel Leite Barros",
            "room": "Room 1",
            "hour": "10:00 - 12:00",
            "label": "Do inicio ao fim, como o desenvolvimento funciona na prática"
        },
        {
            "name": "Pedro Lucas Alves de Lima",
            "room": "Room 1",
            "hour": "10:00 - 12:00",
            "label": "Sinergia entre design, marketing e tecnologia: a chave para a diferenciação no mercado"
        },
        {
            "name": "Reuber Regis de Melo",
            "room": "Room 2",
            "hour": "10:00-12:00",
            "label": "Tecnologias para a Agricultura Inteligente"
        },
        {
            "name": "FRANCISCO FLAVIO VALENTIM DA SILVA FILHO",
            "room": "Lab 4B",
            "hour": "13:30 - 14:30",
            "label": "Mine Curso Desenvolvimento Minecraft"
        },
        {
            "name": "Ana Lara Silva Oliveira",
            "room": "Room 6",
            "hour": "13:30 - 15;30",
            "label": "Fundamentos do SCRUM - Rápido e Prático"
        },
        {
            "name": "Yan Vancelis de Araújo Lima",
            "room": "Room 2",
            "hour": "13:30 15:30",
            "label": "UX Design: Alinhando expectativas para construção do produto ideal"
        },
        {
            "name": "Carla Ilane Moreira Bezerra",
            "room": "Room 7",
            "hour": "13:30-14:30",
            "label": "Quero ser pesquisador (a), e agora?"
        },
        {
            "name": "Karen Raiany Brito de Pinho",
            "room": "Videoconferência",
            "hour": "13:30-15:30",
            "label": "Empreender: o uso da tecnologia para inovação"
        },
        {
            "name": "Iury Lima Nogueira",
            "room": "Room 2",
            "hour": "14:30 - 15:30",
            "label": "Desafios e benefícios da implementação de um Design System na Brisanet"
        },
        {
            "name": "Francisco Carlos de Mattos Brito Oliveira ",
            "room": "Room 7",
            "hour": "14:30-16:30",
            "label": "Viabilizando protótipos de altissima qualidade com o Laum"
        },
        {
            "name": "Kelvia Viana - Coordenadora Geral da APAE/Russas",
            "room": "Hall Princial",
            "hour": "15:30 - 16:30",
            "label": " Educação Inclusiva para pessoas com TEA"
        },
        {
            "name": "Érika Alcântara Gondim Castro",
            "room": "Room 6",
            "hour": "15:30 - 16:30",
            "label": "Inglês instrumental voltado para tecnologia"
        },
        {
            "name": "Thiago Amarantes",
            "room": "Auditório 1",
            "hour": "15:30 - 17:30",
            "label": "IA: Tendência ou realidade?"
        },
        {
            "name": "Alessandro Feitoza",
            "room": "Room 7",
            "hour": "16:30 - 17:30",
            "label": "Como o chatGPT afeta minha vida como desenvolvedor"
        }
    ]
    let scheduleThursdayTable = '';

    for (const item of scheduleThursday) {
        scheduleThursdayTable += `<tr>
            <th class="text-white bg-dark text-center">${item.hour}</th>
            <td class="text-center">${item.label}</td>
            <td class="text-center">${item.name}</td>
            <td class="text-center">${item.room}</td>
        </tr>`
    }

    $('#schedule-thursday').append(scheduleThursdayTable);
});
