

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
                tags: ['Web Dev', 'jQuery'],
                type: 'web',
            },
            {
                name: 'Work 2',
                link: 'https://sy2729.github.io/style-guide-atos/style-guide.html',
                img: 'https://z1.muscache.cn/im/pictures/fd5fb67e-9cdc-4111-b8e6-373727c75669.jpg?aki_policy=large',
                id: 2,
                descrip: 'xxxxxxxx',
                tags: ['Web Dev', 'UX Design', 'UI Design'],
                type: 'video',
            },
            {
                name: 'work 3',
                link: 'https://sy2729.github.io/style-guide-atos/style-guide.html',
                img: 'https://z1.muscache.cn/im/pictures/d254f055-afbf-466f-ad24-28e1f678671d.jpg?aki_policy=x_large',
                id: 3,
                descrip: 'xxxxxxxx',
                tags: ['Web Dev', 'UX Design', 'UI Design'],
                type: 'design',
            },

        ],

    }
    
    

export { cvData }