import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            /* Navbar ------------------------------------------------------------ */
            "navbar-brand": "NPS Calculator",
            "navbar-home": "Home",
            "navbar-about": "About",
            "navbar-lang": "Language",
            "navbar-lang1": "Portuguese",
            "navbar-lang2": "English",
            /* Main page ------------------------------------------------------------ */
            // buttons
            "mainpage-cta": "Paste and Continue",
            "mainpage-clearBtn": "Clear",
            "mainpage-clearAndContinueBtn": "Remove invalid values and continue",
            // headings
            "mainpage-heading1": "Paste your data directly from your sheet to calculate NPS",
            "mainpage-heading2": "How to use the NPS Calculator?",
            "mainpage-heading3": "What is NPS?",
            // texts
            "mainpage-step1": "First, copy the data from your sheet:",
            "mainpage-step2": "Paste the column into the text box area and wait the results.",
            "mainpage-auxText": ` If there is any empty cells or with text a warning will show and you will have the
            option to continue without the invalid values, but i recommend that your data is already right!`,
            "mainpage-netscore": `
            Net Promoter Score (NPS) is a metric to measure the loyalty of your clients, created by Fred Heichheld in 2003
            through the publication of an article called The One Number You Need to Grow, for Harvard's magazine, with the goal of
            measuring the loyalty of clients of any market segment, bringing insights of the user experience and satisfaction.`,
            "mainpage-font": "Reference",
            /* Errors ------------------------------------------------------------ */
            "invalidElError": "Invalid element: ",
            "notEnoughtError": "Insert at least two rows.",
            "blankCellsError": "Blank values are invalid",
            "error": "Something went wrong",
            "pasteError": "An error ocurried while pasting, verify your browser permissions and try again. You can also paste directly in the box.",
            /* Results page ------------------------------------------------------------ */
            "results-goback": "Go back",
            "results-heading1": "Your NPS is:",
            "results-heading2": "What does it mean to have an NPS score of {{nps}}?",
            "results-detractors": "Detractors",
            "results-passives": "Passives",
            "results-promotors": "Promotors",
            /* ------------------------------------------------------------ */
            "results-bellow0": `
            A negative Net Promoter Score indicates that the majority of your clients are detractors,
            in other words, they are unsatified with your product or service and is improbable that they will recommend you to others. In this case, the number of clients that classify your organization with low reviews (0-6 in a 0-10 scale) overcome the number of which give high scores (9 or 10).
            A negative NPS is a worrying situation to any organization, because it means serious problems in the client satisfaction and experience. It can mean that your clients are unsatisfied to the point of expressing criticism about the company, product or service to other people, which can bring prejudice to your reputation and affect the customer retention. It is critical to act quickly to identify and resolve issues that are leading to customer dissatisfaction. This may involve substantial improvements in product or service quality, more effective customer service, resolving customer problems or complaints, and generally a serious commitment to improving the customer experience.
            `,
            /* ------------------------------------------------------------ */
            "results-bellow30": `
            A large part of polls fall in the range of 0 to 30, but this largely depends on the context of the poll.
            An NPS below 30 suggests that many customers are not satisfied with your product or service and, in some cases, may be expressing negative reviews to others. This can be damaging to your company's reputation and affect customer retention. It's important to consider meaningful actions to improve the customer experience. This may involve identifying problems, improving products or services, training customer service teams, and implementing changes based on customer feedback. Improving NPS and increasing customer satisfaction can be challenging, but it is critical to the long-term success of any company.
            `,
            /* ------------------------------------------------------------ */
            "results-bellow50": `
            A score between 30 and 50 indicates that you have a higher proportion of your brand promoters among
            your customers. This means that more people are likely to recommend your product or service
            but there is room for improvement in the customer experience and increasing the number of promoters. It's important to continue to collect customer feedback and take steps to improve the quality of your product or service, as well as the customer experience, to increase NPS over time.
            `,
            /* ------------------------------------------------------------ */
            "results-bellow70": `
            A score above 50 is considered very positive. This means that the majority
            of your customers have a positive bias towards your product or service and more people are likely to recommend your product or service, this is a great indication for your business.
            This score generally suggests that a good proportion of your users are enthusiastic promoters
            of its products and is an indicator of high customer retention.
            Achieving a high NPS means that the organization maintains a customer-centric culture and actively
            listens to customer feedback, and are among the market leaders in terms of customer satisfaction
            client.
            `,
        }
    },
    pt: {
        translation: {
            /* Navbar ------------------------------------------------------------ */
            "navbar-brand": "Calculadora de NPS",
            "navbar-home": "Início",
            "navbar-about": "Sobre",
            "navbar-lang": "Português",
            "navbar-lang1": "Português",
            "navbar-lang2": "Inglês",
            /* Main page ------------------------------------------------------------ */
            // buttons
            "mainpage-cta": "Colar e Calcular",
            "mainpage-clearBtn": "Limpar",
            "mainpage-clearAndContinueBtn": "Remover valores inválidos e continuar",
            // headings
            "mainpage-heading1": "Cole diretamente da sua planilha os dados para calcular o NPS:",
            "mainpage-heading2": "Como usar a Calculadora de NPS?",
            "mainpage-heading3": "O que é o NPS?",
            // texts
            "mainpage-step1": "Primeiramente copie a coluna com os dados da sua planilha:",
            "mainpage-step2": "Cole a coluna copiada na caixa e espere os resultados.",
            "mainpage-auxText": `Se houverem células vazias ou com texto, você será alertado e terá a opção de remover
            os valores inválidos automaticamente e calcular, contudo eu recomendo que seus dados já estejam ok!`,
            "mainpage-netscore": `O Net Promoter Score (NPS) é uma métrica de lealdade do cliente criada por Fred Heichheld em 2003 através de uma publicação de um artigo chamado The One Number You Need to Grow na revista da Universidade Harvard, com o objetivo de medir o grau de lealdade dos clientes das empresas de qualquer segmento, trazendo reflexos da experiência e satisfação dos clientes.`,
            "mainpage-font": "Fonte",
            /* Errors ------------------------------------------------------------ */
            "invalidElError": "Elemento inválido: ",
            "notEnoughtError": "Insira ao menos duas linhas",
            "blankCellsError": "Valores em branco são inválidos",
            "error": "Algo deu errado",
            "pasteError": "Houve um erro ao colar, verifique as permissões do seu navegador. Você pode também colar diretamente na caixa de texto",
            /* Results page ------------------------------------------------------------ */
            "results-goback": "Voltar",
            "results-heading1": "Seu NPS é:",
            "results-heading2": "O que significa ter um NPS de {{nps}}?",
            "results-detractors": "Detratores",
            "results-passives": "Neutros",
            "results-promotors": "Promotores",
            /* ------------------------------------------------------------ */
            "results-bellow0": `Um NPS (Net Promoter Score) negativo indica que a maioria dos seus clientes são detratores, ou seja, estão insatisfeitos com seu produto ou serviço e são improváveis de recomendá-lo a outras pessoas. Nesse caso, o número de clientes que classificam sua empresa com notas baixas (geralmente de 0 a 6 em uma escala de 0 a 10) supera significativamente o número de clientes que lhe dão notas altas (geralmente 9 ou 10).
            Um NPS negativo é uma situação preocupante para qualquer empresa, pois indica problemas sérios na satisfação e na experiência do cliente. Pode significar que seus clientes estão insatisfeitos a ponto de expressar críticas negativas sobre sua empresa, produto ou serviço para outras pessoas, o que pode prejudicar sua reputação e afetar a retenção de clientes.
            É fundamental agir rapidamente para identificar e resolver os problemas que estão levando à insatisfação dos clientes. Isso pode envolver melhorias substanciais na qualidade do produto ou serviço, atendimento ao cliente mais eficaz, resolução de problemas ou reclamações dos clientes e, em geral, um compromisso sério em melhorar a experiência do cliente.`,
            /* ------------------------------------------------------------ */
            "results-bellow30": `Uma grande parte das pesquisas ficam na faixa de 0 a 30, mas isso depende muito do contexto da pesquisa.
            Um NPS abaixo de 30 sugere que muitos clientes não estão satisfeitos com seu produto ou serviço e, em alguns casos, podem estar expressando críticas negativas a outras pessoas. Isso pode ser prejudicial para a reputação de sua empresa e afetar a retenção de clientes. É importante considerar ações significativas para melhorar a experiência do cliente. Isso pode envolver a identificação de problemas, aprimoramento de produtos ou serviços, treinamento de equipes de atendimento ao cliente e implementação de mudanças com base no feedback dos clientes. Melhorar o NPS e aumentar a satisfação do cliente pode ser um desafio, mas é fundamental para o sucesso a longo prazo de qualquer empresa.`,
            /* ------------------------------------------------------------ */
            "results-bellow50": `
            Uma pontuação entre 30 e 50 indica que você possui uma proporção maior de promotores da sua marca dentre
            seus clientes. Isso significa que mais pessoas estão sucetíveis a recomendar o seu produto ou serviço
            mas há espaço para melhorias na experiência do cliente e aumentar o número de promotores. É importante continuar a coletar feedback dos clientes e tomar medidas para aprimorar a qualidade do seu produto ou serviço, bem como a experiência do cliente, para aumentar o NPS ao longo do tempo.
            `,
            /* ------------------------------------------------------------ */
            "results-bellow70": `
            Uma pontuação superior a 50 é considerada bastante positiva. Isto significa que a maioria
            dos seus clientes tem um viés positivo em relação ao seu produto ou serviço e mais pessoas estão sucetíveis a recomendar o seu produto ou serviço, isso é uma ótima indicação para seu negócio.
            Essa pontuação geralmente sugere que uma boa proporção dos seus usuários são promotores entusiastas
            dos seus produtos e é indicador de uma alta retenção de clientes.
            Alcançar uma um NPS alto propõe que a organização mantém uma cultura cliente-cêntrica e ativamente
            escuta o feedback dos clientes, e estão dentre os líderes de mercado no quesito de satisfação do
            cliente.
            `,
        }
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'pt',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;