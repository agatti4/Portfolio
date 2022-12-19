// import self from "../img/self.png"
// import mock1 from "../img/mock1.png"
// import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Anthony",
    lastName: "Gatti",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    // selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Systems Engineer at Google"
        },
        {
            emoji: "📧",
            text: "johnsmith@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hey! I'm Anthony. I'm a senior at Wheaton College MA majoring in Compsci and Math-Economics planning to become a software engineer. I'm always out running and listening to the newest music. Check out my projects!",
    skills:
        {
            proficientWith: ['python', 'c/c++', 'R', 'java', 'sql/nosql', 'javascript', 'typescript', 'html/css', 'jquery', 'php', 'react', 'git', 'firebase', 'jira', 'androidsdk']
        }
    ,
    classes:
        {
            myClasses: ['Data Structures', 'Web Development', 'Database Systems', 'AI/Machine Learning', 'Computer Organization', 'Algorithms', 'Systems and Multiprogramming', 'Discrete Math', 'Linear Algebra', 'Cryptography']
        }
    ,
    exper: [
        {
            label: 'research assistant',
            emoji: '🔬'
        },
        {
            label: 'digital training operations intern',
            emoji: '📟'
        },
        {
            label: 'peer tutor',
            emoji: 'ℹ️'
        },
        {
            label: 'computer science teaching assistant',
            emoji: '👨‍🏫'
        }
    ],
    hobbies: [
        {
            label: 'running',
            emoji: '🏃‍♂️'
        },
        {
            label: 'music',
            emoji: '🎧'
        },
        {
            label: 'games',
            emoji: '🕹️'
        },
        {
            label: 'food',
            emoji: '🥘'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            // image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            // image: mock5
        }
    ]
}