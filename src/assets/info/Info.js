import self from '../img/self.jpg';
import { colors } from '../colors/mainGradient';

export const info = {
    firstName: 'Arthur',
    lastName: 'Maurício',
    initials: 'AM', // the example uses first and last, but feel free to use three or more if you like.
    position: 'Full Stack Developer',
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🇧🇷',
            text: 'Goiânia',
        },
        {
            emoji: '📧',
            text: 'arhurdeveloper@gmail.com',
        },
    ],
    socials: [
        {
            link: './curriculo.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
            icon: 'fa fa-file',
            label: 'resume',
        },
        {
            link: 'https://github.com/arthurcommodore',
            icon: 'fa fa-github',
            label: 'github',
        },
        {
            link: 'https://www.linkedin.com/in/arthur-maur%C3%ADcio-santos-amaral-6b5859217/',
            icon: 'fa fa-linkedin',
            label: 'linkedin',
        },
    ],
    bio: `Programador há mais de 6 anos, nesse período fui evoluindo muito como profissional com dezenas de cursos
  profissionalizantes na área, e também tive diversas oportunidades de colocar tudo em prática, realizei muitas soluções
  digitais, como: web e desktop.`,
    skills: {
        // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
        // but the structure should be the same, an array of strings and the key should be one word, no spaces.
        languages: ['TypeScript', 'JavaScript', 'Java', 'Delphi', 'Elixir', 'HTML/CSS'],
        frameworks: [
            'React',
            'Redux',
            'Express',
            'NestJS',
            'Bootstrap/jQuery',
        ],
        databases: ['MySQl', 'MongoDB', 'PostgreSQL', 'Microsoft SQL Server', 'MariaDB'],
        cloudServices: ['AWS S3', 'Azure', 'Google Analytics', 'Heroku', 'Netlify'],
        tools: [
            'Git',
            'Postman',
            'Docker',
            'npm',
            'yarn',
            'Github',
            'Mongodb Compass '
        ],
    },
    hobbies: [

        {
            label: 'Tocar Guitarra/Baixo',
            emoji: '🎸',
        },
        {
            label: 'Cozinhar',
            emoji: '🍳',
        },
        {
            label: 'Viajar',
            emoji: '✈️',
        },
        {
            label: 'Fazer planos',
            emoji: '🤔',
        },
        {
            label: 'Momentos de sossego e silêncio',
            emoji: '🧘',
        },
        {
            label: 'Criar ideias e desenvolvê-las',
            emoji: '💡',
        },

        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [
        // This is where your portfolio projects will be detailed
        //   for the null ones, the button will not show up
        {
            title: 'CryptoGoGo - Online Cryptocurrency Community and Trading platform',
            live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: 'https://github.com/Andy8647/CryptoGoGo', // this should be a link to the **repository** of the project, where the code is hosted.
            image: 'https://i.ibb.co/6BsWs6f/01.jpg',
        },
        {
            title: 'Dynrank.js - High-performance dynamic bar chart visualization library',
            live: null,
            source: 'https://github.com/Andy8647/dynrank',
            image: 'https://i.ibb.co/HFkMKtH/02.jpg',
        },
    ],
};
