

    let cvData = {
        experiences: [
            {
                logo: './img/experience/tc.jpg',
                role: 'Course Assistant - JavaScript Programming',
                company: 'Teachers College, Columbia University',
                beginDate: '2018.09',
                endDate: 'present',
                activeState: true,
                detail: {
                    descrip: [
                        'Assist the Instructor in scheduling and operating the class, and grading the work',
                        'Assist the students with debugging, clarify some coding concepts, especially in JavaScript',
                        'Creating demo projects in demonstrating concepts being taught in class and as intro to more advanced implementation in JavaScript and interactive web page coding',
                    ],
                },
            },
            {
                logo: './img/experience/atos.png',
                role: 'UX Designer',
                company: 'Atos',
                beginDate: '2018.05',
                endDate: 'present',
                activeState: true,
                detail: {
                    descrip: [
                        'Collaborate with other designers and design web & mobile products from concept to hi-fi prototypes ',
                        'Work with developers and support delivering / QA new features',
                        'Design marketing materials including marketing website, brochures, videos',
                        'Support user research and gather feedback from users to improve product design',
                    ],
                },
            },
            {
                logo: './img/experience/tc.jpg',
                role: 'Web Developer',
                company: 'Teachers College, Columbia University',
                beginDate: '2018.03',
                endDate: '2018.05',
                activeState: false,
                detail: {
                    descrip: [
                        "Assist the TC office of the Web in refreshing the college's website, assist the External Affairs Web Office in transferring current websites to the new site template in T4 content management system",
                        'Help with quality assurance testing, and other content migration tasks',
                        'Help with site style debugging and user experience improvement with CSS solutions',
                    ],
                },
            },

        ],
        skills: [
            {
                name: 'HTML & CSS & JavaSCript',
                extent: '70'
            },
            {
                name: 'UX / UI Design',
                extent: '60'
            },
            {
                name: 'Videography',
                extent: '60'
            },
            {
                name: 'Vue / Riot / Firebase / MVC ...',
                extent: '70'
            },
        ],
        works: [
            {
                name: 'Netease Music Redev (Mobile)',
                link: {
                    preview: `https://sy2729.github.io/music-app/`,
                    repo: 'https://github.com/sy2729/music-app',
                },
                img: './img/work/music/music-1.jpeg',
                id: 1,
                descrip: [
                    {
                        content: `Based on Netease Music's mobile version, this is a simple reproduction of the music play website via jQuery.`,
                        type: 'text',
                    },
                    {
                        content: './img/work/music/music-1.jpeg',
                        type: 'img',
                    },
                    {
                        content: `<p class='t-center'>with functionality of listen to songCollection and new song</p>`,
                        type: 'text',
                    },
                    {
                        content: `./img/work/music/music-2.jpeg`,
                        type: 'img',
                    },
                    {
                        content: `<p class='t-center'>Inside the song collection interface</p>`,
                        type: 'text',
                    },
                    {
                        content: './img/work/music/music-3.jpeg',
                        type: 'img',
                    },
                    {
                        content: `<p class='t-center'>Song play interface, the classic disc rotating sign</p>`,
                        type: 'text',
                    },
                    {
                        content: './img/work/music/music-4.jpeg',
                        type: 'img',
                    },
                    {
                        content: 'Also has features like search song via name, displaying and scrolling lyrics (only work with supported lyric format that has timestamp), and switch to the previous song and next song.',
                        type: 'text',
                    },
                    {
                        content: 'The resources and infomation of the songs are managed by a simple jQuery-based CMS, where user can view, upload, edit and delete songs. They are achieved via <a href="https://www.qiniu.com/">qiniu</a> and <a href="https://leancloud.cn/">leanCloud</a> APIs.',
                        type: 'text',
                    },
                    {
                        content: './img/work/music/music-5.png',
                        type: 'img',
                    },
                    {
                        content: `<p class='t-center'>dashboard for song collection</p>`,
                        type: 'text',
                    },
                    {
                        content: './img/work/music/music-6.png',
                        type: 'img',
                    },
                    {
                        content: `<p class='t-center'>add songs into playlist</p>`,
                        type: 'text',
                    },
                    {
                        content: './img/work/music/music-7.png',
                        type: 'img',
                    },
                ],
                tags: ['Web Dev', 'jQuery', 'Dynamic REM'],
                type: 'web',
            },
            {
                name: 'Atos OneSource Landing Page',
                link: {
                    preview: `https://sy2729.github.io/atosonesource-market/dist/MARKET.html`,
                    repo: `https://github.com/sy2729/atosonesource-market`
                },
                img: './img/work/atos-landing/atos-landing-2.png',
                id: 2,
                descrip: [
                    {
                        content: `This is part of the <a href="http://www.atosonesource.com/">Atos OneSource</a> page. The original page was built using app drag, a drag-and-drop web design and dev product. But to implement some advanced features and make the site more customizable, we chose to write the code.`,
                        type: 'text'
                    },
                    {
                        content: `It's initially built with jQuery, and we're reconstructing it with Vue.js`,
                        type: 'text'
                    },
                    {
                        content: `./img/work/atos-landing/atos-landing-1.png`,
                        type: 'img'
                    },
                ],
                tags: ['Web Dev', 'UX Design', 'Atos'],
                type: 'web',
            },
            {
                name: 'Atos Digital Dashboard Petal Dev',
                link: {
                    preview: 'https://sy2729.github.io/digital-dashboard-demo/',
                    repo: 'https://github.com/sy2729/digital-dashboard-demo/'
                },
                img: './img/work/atos-digital/atos-digital-dashboard-1.png',
                id: 3,
                descrip: [
                    {
                        content: `This is the homepage for <a href="www.atosonesourceweb.com/">Atos OneSource Dashboard</a> where clients use to manage their daily KPI. We invisioned a data visualizaed work interface so the idea of the petal representation came into our mind.`,
                        type: 'text',
                    },
                    {
                        content: `Collaborating with the developers, I provided the front-end support in creating the petal and the flower, and of course, it's mobile friendly.`,
                        type: 'text',
                    },
                    {
                        content: './img/work/atos-digital/atos-digital-dashboard-1.png',
                        type: 'img'
                    }
                ],
                tags: ['Web Dev', 'UX Design', 'Atos', 'CSS'],
                type: 'web',
            },
            {
                name: 'Care Guru',
                link: {
                    preview: 'https://sy2729.github.io/careGuru/',
                    repo: 'https://github.com/sy2729/careGuru'
                },
                img: './img/work/careguru/careguru-1.png',
                id: 3,
                descrip: [
                    {
                        content: `This is a team project in a class where I collaborate with three other classmates to present the idea of 'insurance education with web technology'.`,
                        type: 'text',
                    },
                    {
                        content: `We have many international students who are unfamiliar with the U.S insurance. Thus being able to understand the basic concepts in insurance aftering viewing this website is our goal.`,
                        type: 'text',
                    },
                    {
                        content: './img/work/careguru/careguru-1.png',
                        type: 'img'
                    },
                    {
                        content: `We use Riot.js as the MVC framework and Google Firebase as the database, according to the course requirement`,
                        type: 'text',
                    },
                    {
                        content: `<p class='t-center'>The user dashboard after login</p>`,
                        type: 'text'
                    },
                    {
                        content: `./img/work/careguru/careguru-2.png`,
                        type: 'img'
                    },
                    {
                        content: `<p class='t-center'>Knowledge card</p>`,
                        type: 'text'
                    },
                    {
                        content: `./img/work/careguru/careguru-3.png`,
                        type: 'img'
                    }
                ],
                tags: ['Web Dev', 'Riot.js', 'Firebase'],
                type: 'web',
            },
            {
                name: 'Dynamic Drawing',
                link: {
                    preview: 'https://sy2729.github.io/dynamic-drawing/',
                    repo: 'https://github.com/sy2729/dynamic-drawing'
                },
                img: './img/work/dynamic-drawing/dynamic-drawing-1.png',
                id: 3,
                descrip: [
                    {
                        content: `A Simple dynamic drawing animation -- shows how the code modification made the visual changes, a great way to demonstrate certain concepts in CSS and shows its margic. This project unveils some valuable educational techniques in web technologies that I might explore in the future.`,
                        type: 'text',
                    },
                    {
                        content: './img/work/dynamic-drawing/dynamic-drawing-2.png',
                        type: 'img'
                    },
                ],
                tags: ['Web Dev', 'CSS', 'JavaScript'],
                type: 'web',
            },
            {
                name: 'Canvas NoteBook',
                link: {
                    preview: 'https://sy2729.github.io/canvas-draw/',
                    repo: 'https://github.com/sy2729/canvas-draw'
                },
                img: './img/work/canvas-draw/canvas-draw-2.png',
                id: 3,
                descrip: [
                    {
                        content: `<p class="t-center">A simple canvas where user can draw and save the draft to local as an image. It have functions like change stoke width, color with eraser and clear feature.</p>`,
                        type: 'text',
                    },
                    {
                        content: './img/work/canvas-draw/canvas-draw-1.png',
                        type: 'img'
                    },
                ],
                tags: ['Web Dev', 'Canvas'],
                type: 'web',
            },
            {
                name: 'Teachers College Site Design Assistance',
                img: './img/work/tc-site/tc-site-1.png',
                id: 3,
                descrip: [
                    {
                        content: `My main task during working in the Web Office of Teachers College, Columbia Unievrsity was to test the new <a href="tc.edu">Teachers College Official Website</a>,provide feedbacks from a UX standppoint and write some CSS solutions for part of the design`,
                        type: 'text',
                    },
                    {
                        content: './img/work/tc-site/tc-site-2.png',
                        type: 'img'
                    },
                ],
                tags: ['UX Design', 'CSS'],
                type: 'design',
            },
            {
                name: 'Code Battle',
                img: './img/work/game-card/game-card-2.png',
                id: 3,
                link: {
                    preview: `https://sy2729.github.io/gameCaard/`,
                    repo: `https://github.com/sy2729/gameCaard`,
                },
                descrip: [
                    {
                        content: `This is a boardGame that was made in a game design class. We build up this website for both marketing and rule explanation`,
                        type: 'text',
                    },
                    {
                        content: './img/work/game-card/game-card-1.png',
                        type: 'img'
                    },
                ],
                tags: ['UX Design', 'Web Dev', 'Riot.js'],
                type: 'web',
            },
            {
                name: 'Atos Aviva Server Query User Interface Design',
                img: './img/work/atos-aviva/atos-aviva-2.png',
                id: 3,
                descrip: [
                    {
                        content: `We need to provide a solution for client to query a server and its related properties, while being able to offer functions like query on multiple and complicated properties instead of solely name.`,
                        type: 'text',
                    },
                    {
                        content: './img/work/atos-aviva/atos-aviva-2.png',
                        type: 'img'
                    },
                    {
                        content: `The relation between the server name and app name are 'many to many' as well as the server name to other properties such as owner and service name it belongs to, which makes it a little bit tricky than normal query dashboard`,
                        type: 'text',
                    },
                    {
                        content: './img/work/atos-aviva/atos-aviva-4.png',
                        type: 'img'
                    },
                    {
                        content: `We spent much time communicate back and forth with our clients to figure out their desired functions and what visual presentation would be appropriate.`,
                        type: 'text',
                    },
                    {
                        content: `<p class='t-center'>the sketch working file screenshot</p>`,
                        type: 'text',
                    },
                    {
                        content: './img/work/atos-aviva/atos-aviva-3.png',
                        type: 'img'
                    },
                ],
                tags: ['UX Design', 'Atos'],
                type: 'design',
            },
            {
                name: 'Atos Service Delivery Management',
                img: './img/work/atos-sdm/atos-sdm-1.png',
                id: 3,
                descrip: [
                    {
                        content: `This is an email-look app design for Atos internal employee use, including manager and delivery roles.`,
                        type: 'text',
                    },
                    {
                        content: './img/work/atos-sdm/atos-sdm-1.png',
                        type: 'img'
                    },
                    {
                        content: 'Different from normal email apps, there are 5 states for the message / email / notification, while each update of the state has different visuals on the two sides.',
                        type: 'text',
                    },
                    {
                        content: './img/work/atos-sdm/atos-sdm-3.png',
                        type: 'img'
                    },
                    {
                        content: `<p class='t-center'>Reject or accept and reply to the request</p>`,
                        type: 'text',
                    },
                    {
                        content: './img/work/atos-sdm/atos-sdm-4.png',
                        type: 'img'
                    },
                    {
                        content: `<p class='t-center'>the flowchart of the user interaction</p>`,
                        type: 'text',
                    },
                    {
                        content: './img/work/atos-sdm/atos-sdm-2.png',
                        type: 'img'
                    },
                ],
                tags: ['UX Design', 'Atos'],
                type: 'design',
            },
            {
                name: 'Where AM I From',
                img: 'https://i.ytimg.com/vi_webp/8kWDH6cejB4/maxresdefault.webp',
                id: 3,
                youtubeID: '8kWDH6cejB4',
                biliID: '14943823',
                link: {
                    youtube: `https://youtu.be/8kWDH6cejB4`,
                    bili: 'https://www.bilibili.com/video/av14943823'
                },
                descrip: [
                    {
                        content: `An assignment from a course in Teachers College, Columbia University named Culture, Media and Education. It's inspired by the poem of "where AM I From " by George Ella Lyon. She also initialize this activity collecting art piece from the world, narrating about each individual's origin and reflection.`,
                        type: 'text',
                    },
                    {
                        content: {
                            youtube: '',
                            bili: '',
                        },
                        type: 'video'
                    },
                ],
                tags: ['Video', 'Life'],
                type: 'video',
            },

        ],

    }
    
    cvData.works.map((i, index)=>{
        i.id = index + 1;
        i.type = i.type.toLowerCase();

        if(i.type === 'video') {
            i.link.youtube = 'https://youtu.be/' + i.youtubeID;
            i.link.bili = 'https://www.bilibili.com/video/av' + i.biliID;
            let descript = i.descrip;
            descript.map((j)=>{
                if(j.type === 'video') {
                    j.content.youtube = 'https://www.youtube.com/embed/' + i.youtubeID;
                    j.content.bili = `//player.bilibili.com/player.html?aid=${i.biliID}`;
                }
            })
        }
    })
    
export { cvData }