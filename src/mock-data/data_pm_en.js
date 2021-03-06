

    let cvData = {
        header: {
            greeting: `Hello, I'm`,
            name: 'Shuai Yuan',
        },
        experiences: {
            sectionName: 'experiences',
            allExperiences: [
                {
                    logo: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1537750483/cv-img/download.png',
                    role: 'Web Technologist - Association committee',
                    company: 'Columbia University - CUSSCA',
                    beginDate: '2018.09',
                    endDate: 'present',
                    activeState: true,
                    detail: {
                        descrip: [
                            'Participate in affairs of Columbia University Chinese Students Association',
                            "Work as technologist and maintain the association's official website",
                        ],
                    },
                },
                {
                    logo: './img/tc.jpg',
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
                    logo: './img/atos.png',
                    role: 'UX Design Intern',
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
                    logo: './img/tc.jpg',
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
                {
                    logo: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1537753292/cv-img/logo.png',
                    role: 'Front-End Developer',
                    company: 'Renited',
                    beginDate: '2017.11',
                    endDate: '2018.01',
                    activeState: false,
                    detail: {
                        descrip: [
                            "Build company’s new landing page through the Streaming Building System Gulp",
                            "Utilize Element UI in combined with Vue.js to beautify the user system, take part in the development of several components",
                            "Use CSS framework Bootstrap to modify company’s previous landing page",
                            "Communicate and collaborate with the back-end developer and product manager to enhance the user experience",
                        ],
                    },
                },
                {
                    logo: './img/baicizhan.png',
                    role: 'Content Operation',
                    company: 'Chaoyouai Technology',
                    beginDate: '2017.01',
                    endDate: '2017.03',
                    activeState: false,
                    detail: {
                        descrip: [
                            "Produced audio media and graphic materials for users of the company’s educational application.",
                        ],
                    },
                },

            ],
        },
        skills: {
            sectionName: 'Skills',
            description: `I’m passionate about Web Development and User Interface design, with close observation of the latest trends in those design fields. I have solid skills in creating design prototype through front-end development and proficiency of using design software. With my pursuit of aesthetic details, I am able to precisely communicate my idea and design thoughts with my clients and partners.`,
            allSkills: [
                {
                    name: 'Front-end Dev: HTML & CSS & JavaSCript & jQuery & Vue & Webpack',
                    extent: '70'
                },
                {
                    name: 'UX / UI Design',
                    extent: '60'
                },
                {
                    name: 'Prototyping and Project Management',
                    extent: '60'
                },
                {
                    name: 'Videography',
                    extent: '60'
                },
                {
                    name: 'Search Engine Optimization (SEO)',
                    extent: '60'
                },
            ],
        },
        educations: {
            sectionName: 'educations',
            allEducations: [
                {
                    school: 'Teachers College, Columbia University',
                    degree: 'Master',
                    major: 'Instructional Technology and Media',
                    startDate: '2017.09',
                    endDate: '2019.05',
                    activeState: true,
                },
                {
                    school: 'Central China Normal University',
                    degree: 'Bachelor',
                    major: 'Chinese International Education',
                    startDate: '2013.09',
                    endDate: '2017.06',
                },
                {
                    school: 'University of California, Berkeley',
                    degree: 'Exchange',
                    major: 'General Study',
                    startDate: '2016.01',
                    endDate: '2016.06',
                },
            ]
        },
        works: {
            sectionName: 'works',
            allWorks: [
                {
                    name: 'Netease Music Redev (Mobile)',
                    link: {
                        preview: `https://sy2729.github.io/music-app/`,
                        repo: 'https://github.com/sy2729/music-app',
                    },
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382448/cv-img/work/music/music-1.jpg',
                    id: 1,
                    descrip: [
                        {
                            content: `Based on Netease Music's mobile version, this is a simple reproduction of the music play website via jQuery.`,
                            type: 'text',
                        },
                        {
                            // content: './img/work/music/music-1.jpeg',
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382448/cv-img/work/music/music-1.jpg',
                            type: 'img',
                        },
                        {
                            content: `<p class='t-center'>with functionality of listen to songCollection and new song</p>`,
                            type: 'text',
                        },
                        {
                            content: `https://res.cloudinary.com/shuaiyuan/image/upload/v1535382449/cv-img/work/music/music-2.jpg`,
                            type: 'img',
                        },
                        {
                            content: `<p class='t-center'>Inside the song collection interface</p>`,
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382447/cv-img/work/music/music-3.jpg',
                            type: 'img',
                        },
                        {
                            content: `<p class='t-center'>Song play interface, the classic disc rotating sign</p>`,
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382447/cv-img/work/music/music-4.jpg',
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
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382452/cv-img/work/music/music-5.png',
                            type: 'img',
                        },
                        {
                            content: `<p class='t-center'>dashboard for song collection</p>`,
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382454/cv-img/work/music/music-6.png',
                            type: 'img',
                        },
                        {
                            content: `<p class='t-center'>add songs into playlist</p>`,
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382454/cv-img/work/music/music-7.png',
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
                    img: 'http://res.cloudinary.com/shuaiyuan/image/upload/q_60/v1535382853/cv-img/work/atos-landing/atos-landing-2.png',
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
                            // content: `./img/work/atos-landing/atos-landing-1.png`,
                            content: `http://res.cloudinary.com/shuaiyuan/image/upload/q_60/v1535382860/cv-img/work/atos-landing/atos-landing-1.png`,
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
                    // img: './img/work/atos-digital/atos-digital-dashboard-1.png',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383123/cv-img/work/atos-digital/atos-digital-dashboard-1.png',
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
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383123/cv-img/work/atos-digital/atos-digital-dashboard-1.png',
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
                    // img: './img/work/careguru/careguru-1.png',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-1.png',
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
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-1.png',
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
                            content: `https://res.cloudinary.com/shuaiyuan/image/upload/v1535383183/cv-img/work/careguru/careguru-2.png`,
                            type: 'img'
                        },
                        {
                            content: `<p class='t-center'>Knowledge card</p>`,
                            type: 'text'
                        },
                        {
                            content: `https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-3.png`,
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
                    // img: './img/work/dynamic-drawing/dynamic-drawing-1.png',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383255/cv-img/work/dynamic-drawing/dynamic-drawing-1.png',
                    id: 3,
                    descrip: [
                        {
                            content: `A Simple dynamic drawing animation -- shows how the code modification made the visual changes, a great way to demonstrate certain concepts in CSS and shows its margic. This project unveils some valuable educational techniques in web technologies that I might explore in the future.`,
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383255/cv-img/work/dynamic-drawing/dynamic-drawing-2.png',
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
                    // img: './img/work/canvas-draw/canvas-draw-2.png',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383299/cv-img/work/canvas-draw/canvas-draw-2.png',
                    id: 3,
                    descrip: [
                        {
                            content: `<p class="t-center">A simple canvas where user can draw and save the draft to local as an image. It have functions like change stoke width, color with eraser and clear feature.</p>`,
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383299/cv-img/work/canvas-draw/canvas-draw-1.png',
                            type: 'img'
                        },
                    ],
                    tags: ['Web Dev', 'Canvas'],
                    type: 'web',
                },
                {
                    name: 'Teachers College Site Design Assistance',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383418/cv-img/work/tc-site/tc-site-1.png',
                    id: 3,
                    descrip: [
                        {
                            content: `My main task during working in the Web Office of Teachers College, Columbia Unievrsity was to test the new <a href="tc.edu">Teachers College Official Website</a>,provide feedbacks from a UX standppoint and write some CSS solutions for part of the design`,
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383425/cv-img/work/tc-site/tc-site-2.png',
                            type: 'img'
                        },
                    ],
                    tags: ['UX Design', 'CSS'],
                    type: 'design',
                },
                {
                    name: 'Code Battle',
                    // img: './img/work/game-card/game-card-2.png',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383492/cv-img/work/code-battle/game-card-2.png',
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
                            content: 'http://res.cloudinary.com/shuaiyuan/image/upload/q_49/v1535383509/cv-img/work/code-battle/game-card-1.png',
                            type: 'img'
                        },
                    ],
                    tags: ['UX Design', 'Web Dev', 'Riot.js'],
                    type: 'web',
                },
                {
                    name: 'Atos Aviva Server Query User Interface Design',
                    // img: './img/work/atos-aviva/atos-aviva-2.png',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383565/cv-img/work/atos-aviva/atos-aviva-2.png',
                    id: 3,
                    descrip: [
                        {
                            content: `We need to provide a solution for client to query a server and its related properties, while being able to offer functions like query on multiple and complicated properties instead of solely name.`,
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383565/cv-img/work/atos-aviva/atos-aviva-2.png',
                            type: 'img'
                        },
                        {
                            content: `The relation between the server name and app name are 'many to many' as well as the server name to other properties such as owner and service name it belongs to, which makes it a little bit tricky than normal query dashboard`,
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383569/cv-img/work/atos-aviva/atos-aviva-4.png',
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
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383569/cv-img/work/atos-aviva/atos-aviva-3.png',
                            type: 'img'
                        },
                    ],
                    tags: ['UX Design', 'Atos'],
                    type: 'design',
                },
                {
                    name: 'Atos Service Delivery Management',
                    // img: './img/work/atos-sdm/atos-sdm-1.png',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-1.png',
                    id: 3,
                    descrip: [
                        {
                            content: `This is an email-look app design for Atos internal employee use, including manager and delivery roles.`,
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-1.png',
                            type: 'img'
                        },
                        {
                            content: 'Different from normal email apps, there are 5 states for the message / email / notification, while each update of the state has different visuals on the two sides.',
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-3.png',
                            type: 'img'
                        },
                        {
                            content: `<p class='t-center'>Reject or accept and reply to the request</p>`,
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-4.png',
                            type: 'img'
                        },
                        {
                            content: `<p class='t-center'>the flowchart of the user interaction</p>`,
                            type: 'text',
                        },
                        {
                            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-2.png',
                            type: 'img'
                        },
                    ],
                    tags: ['UX Design', 'Atos'],
                    type: 'design',
                },
                {
                    name: 'Where AM I From',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535384138/cv-img/work/where-am-I-from/where-am-I-from.png',
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
                {
                    name: 'Media and Life',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535431869/cv-img/work/media-life/media-life.png',
                    id: 3,
                    youtubeID: 'dmJO491mVao',
                    biliID: '',
                    link: {
                        youtube: `https://youtu.be/8kWDH6cejB4`,
                        bili: 'https://www.bilibili.com/video/av14943823'
                    },
                    descrip: [
                        {
                            content: `A reflection on the overwhelming information from our mobile devices and the essence of life. How the media and technology is shaping us and our society.`,
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
                {
                    name: 'Environmentalism Trip',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535431905/cv-img/work/Eenvironmentalism-trip/maxresdefault.webp',
                    id: 3,
                    youtubeID: 'hGptZmEDqkY',
                    biliID: '13016424',
                    link: {
                        youtube: `https://youtu.be/8kWDH6cejB4`,
                        bili: 'https://www.bilibili.com/video/av14943823'
                    },
                    descrip: [
                        {
                            content: `In August 2017, I accompanied with a team of young kids as a photographer to explore the beauty of nature and unveil the mistery of the forest. Leaded by several staffs of the environmental nonprofit conservation and education organization, the goal of this trip is to educate the kids about the environmentally friendly way of living with the nature.`,
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
                {
                    name: 'Interviewing the Dilligent Chinese Girl in Columbia University',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433480/cv-img/work/interview-columbia/interview-columbia.png',
                    id: 3,
                    youtubeID: 'ALUSbmb9kP4',
                    biliID: '16099951',
                    link: {
                        youtube: `https://youtu.be/8kWDH6cejB4`,
                        bili: 'https://www.bilibili.com/video/av14943823'
                    },
                    descrip: [
                        {
                            content: `This is my friend's course project on interviewing interesting and inspiring people in NYC, listening to their stories, documenting them and learning from them.`,
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
                {
                    name: 'Bachelor Graduation Ceremony Video in CCNU',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433401/cv-img/work/ccnu-graduation/ccnu-graduation.webp',
                    id: 3,
                    youtubeID: 'ZdtILGuo6IQ',
                    biliID: '11355324',
                    link: {
                        youtube: `https://youtu.be/8kWDH6cejB4`,
                        bili: 'https://www.bilibili.com/video/av14943823'
                    },
                    descrip: [
                        {
                            content: `Right before I graduate from my undergraduate school, I started to learn photography and videography and then made this video to record the great memories of the four years. I used sliders, photography lights, triapod, DSLR to accomplish this video production.`,
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
                {
                    name: 'GH5 Unboxing & Sample Shot Vlog',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433653/cv-img/work/gh5-unboxing/gh5-unboxing.png',
                    id: 3,
                    youtubeID: '-1ZyOfgzbkM',
                    biliID: '20628682',
                    link: {
                        youtube: `https://youtu.be/8kWDH6cejB4`,
                        bili: 'https://www.bilibili.com/video/av14943823'
                    },
                    descrip: [
                        {
                            content: `I got my first GH5, which is a really great video-shooting camera. I shot some great sample videos in V-log mode and color graded them.`,
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
                {
                    name: 'Columbia University Chinese Spring Festival Celebration Micro Film',
                    img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433677/cv-img/work/columbia-spring-festival-film/columbia-spring-festival-film.png',
                    id: 3,
                    youtubeID: 'kJ4Ere29BO0',
                    biliID: '',
                    link: {
                        youtube: `https://youtu.be/8kWDH6cejB4`,
                        bili: 'https://www.bilibili.com/video/av14943823'
                    },
                    descrip: [
                        {
                            content: `Every year, we Chinese International Students celebrate our Spring Festival in our unique way. This time, we shot a short film reflecting on our intensive life and optimistic attitude towards the future. I was responsible for shooting.`,
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
        },
        cvPath: {
            // en: './cv/shuai_yuan_front_end_dev.pdf',
            zh: './cv/项目经理_袁帅_哥伦比亚大学_硕士_2019应届生.pdf'
        }

    }
    
    cvData.works.allWorks.map((i, index)=>{
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
    
export {cvData as cvData}