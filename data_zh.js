
let cvData = {
    experiences: [
        {
            logo: './img/experience/tc.jpg',
            role: '课程助教 - JavaScript 编程',
            company: '哥伦比亚大学教育学院',
            beginDate: '2018.09',
            endDate: '现在',
            activeState: true,
            detail: {
                descrip: [
                    '协助教师组织教学和课堂，并批改课程作业。',
                    '帮助学生解决bug，阐述并帮其理解基本的编程思维，尤其是在JavaScript的实际运用上。',
                    '创建用于课堂讲解的展示项目，以辅助课堂教学，帮助传递编程概念和作为JavaScript和交互式网页编程高阶进阶的初览。',
                ],
            },
        },
        {
            logo: './img/experience/atos.png',
            role: '用户体验设计实习生（UX Design Intern）',
            company: '源讯科技（Atos）- 美国',
            beginDate: '2018.05',
            endDate: '现在',
            activeState: true,
            detail: {
                descrip: [
                    '和其他设计师协作并提供PC客户端和移动端从概念图到高保真原型图等一系列设计。',
                    '和开发团队协作并提供用户需求和问题方面的支持。',
                    '设计包括宣传手册，宣传网站，以及视频等一系列宣传材料。',
                    '协助用户调研，收集用户回馈以提升产品设计和体验。',
                ],
            },
        },
        {
            logo: './img/experience/tc.jpg',
            role: '网络开发实习',
            company: '哥伦比亚大学教育学院',
            beginDate: '2018.03',
            endDate: '2018.05',
            activeState: false,
            detail: {
                descrip: [
                    "协助教育学院网络办公室更新官网网站，通过T4内容管理系统完成从旧网站到新网站模版内容的迁移。",
                    '协助进行质量测试和内容管理测试。',
                    '进行网站样式测试和用户体验提升，提供相关CSS解决方案。',
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
            name: 'UX / UI Design - 用户体验和用户界面设计',
            extent: '60'
        },
        {
            name: 'Videography - 视频拍摄剪辑',
            extent: '60'
        },
        {
            name: 'Vue / Riot / Firebase / MVC ...',
            extent: '70'
        },
    ],
    works: [
        {
            name: '仿网易云音乐（移动端）',
            link: {
                preview: `https://sy2729.github.io/music-app/`,
                repo: 'https://github.com/sy2729/music-app',
            },
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382448/cv-img/work/music/music-1.jpg',
            id: 1,
            descrip: [
                {
                    content: `参照网易云音乐的移动版本，这是一个使用jQuery实现的简单复刻。`,
                    type: 'text',
                },
                {
                    // content: './img/work/music/music-1.jpeg',
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382448/cv-img/work/music/music-1.jpg',
                    type: 'img',
                },
                {
                    content: `<p class='t-center'>实现查看歌单列表和最新歌曲功能</p>`,
                    type: 'text',
                },
                {
                    content: `https://res.cloudinary.com/shuaiyuan/image/upload/v1535382449/cv-img/work/music/music-2.jpg`,
                    type: 'img',
                },
                {
                    content: `<p class='t-center'>歌单界面展示</p>`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382447/cv-img/work/music/music-3.jpg',
                    type: 'img',
                },
                {
                    content: `<p class='t-center'>歌曲播放界面展示，最经典的——转动的黒色唱片</p>`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382447/cv-img/work/music/music-4.jpg',
                    type: 'img',
                },
                {
                    content: '也有歌曲搜索，展示歌词，自动滚动歌词（仅支持带有时间轴格式的歌词），切换前一首／后一首等功能。',
                    type: 'text',
                },
                {
                    content: '歌曲资源和数据通过一个jQuery构建的简单内容管理后台界面管理。用户可以进行增删查改歌曲的数据。这些功能通过<a href="https://www.qiniu.com/">七牛云服务</a> and <a href="https://leancloud.cn/">leanCloud服务</a>实现。',
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382452/cv-img/work/music/music-5.png',
                    type: 'img',
                },
                {
                    content: `<p class='t-center'>歌单管理面板界面</p>`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382454/cv-img/work/music/music-6.png',
                    type: 'img',
                },
                {
                    content: `<p class='t-center'>将歌曲添加到歌单</p>`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382454/cv-img/work/music/music-7.png',
                    type: 'img',
                },
            ],
            tags: ['网页开发', 'jQuery', '动态REM'],
            type: 'web',
        },
        {
            name: 'Atos OneSource 起飞页',
            link: {
                preview: `https://sy2729.github.io/atosonesource-market/dist/MARKET.html`,
                repo: `https://github.com/sy2729/atosonesource-market`
            },
            img: 'http://res.cloudinary.com/shuaiyuan/image/upload/q_60/v1535382853/cv-img/work/atos-landing/atos-landing-2.png',
            id: 2,
            descrip: [
                {
                    content: `这是<a href="http://www.atosonesource.com/">Atos OneSource</a> 产品起飞页的一部分. 原网页通过自助建站工具AppDrag搭建，但是为了实现一些更高级、可自定义的功能和更佳的视觉效果，我们决定采取代码开发。`,
                    type: 'text'
                },
                {
                    content: `最初由jQuery搭建，近期正在使用Vue重构。`,
                    type: 'text'
                },
                {
                    // content: `./img/work/atos-landing/atos-landing-1.png`,
                    content: `http://res.cloudinary.com/shuaiyuan/image/upload/q_60/v1535382860/cv-img/work/atos-landing/atos-landing-1.png`,
                    type: 'img'
                },
            ],
            tags: ['网页开发', '用户体验设计', 'Atos'],
            type: 'web',
        },
        {
            name: 'Atos Digital花瓣面板开发',
            link: {
                preview: 'https://sy2729.github.io/digital-dashboard-demo/',
                repo: 'https://github.com/sy2729/digital-dashboard-demo/'
            },
            // img: './img/work/atos-digital/atos-digital-dashboard-1.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383123/cv-img/work/atos-digital/atos-digital-dashboard-1.png',
            id: 3,
            descrip: [
                {
                    content: `这是<a href="www.atosonesourceweb.com/">Atos OneSource Dashboard</a>用户系统的首页。客户可以在此网站管理查看日常的KPI。我们的设想是实现一个可视化的数据管理界面，同时出于用户友好度的考虑，所以最终选择了花瓣意象来代表管理面板。`,
                    type: 'text',
                },
                {
                    content: `和开发团队协作，由我提供前端视觉界面的支持，并实现移动端的自适应。`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383123/cv-img/work/atos-digital/atos-digital-dashboard-1.png',
                    type: 'img'
                }
            ],
            tags: ['网页开发', '用户体验设计', 'Atos', 'CSS'],
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
                    content: `这是一个小组协作的课程作业。我们所要呈现的想法是“网络技术所能实现的保险知识教育”。`,
                    type: 'text',
                },
                {
                    content: `我们之中有许多对美国保险制度非常陌生的同学（包括我自己），而在遇到危急情况时，对保险的多一些了解可能会让你少很多麻烦。能够让使用者对保险中的基本常识有所了解是我们能网站的目的。`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-1.png',
                    type: 'img'
                },
                {
                    content: `根据课程要求，我们使用Riot作为前端MVC框架，Google Firebase作为后台数据库。`,
                    type: 'text',
                },
                {
                    content: `<p class='t-center'>用户登陆后的界面</p>`,
                    type: 'text'
                },
                {
                    content: `https://res.cloudinary.com/shuaiyuan/image/upload/v1535383183/cv-img/work/careguru/careguru-2.png`,
                    type: 'img'
                },
                {
                    content: `<p class='t-center'>知识卡片</p>`,
                    type: 'text'
                },
                {
                    content: `https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-3.png`,
                    type: 'img'
                }
            ],
            tags: ['网页开发', 'Riot.js', 'Firebase'],
            type: 'web',
        },
        {
            name: '动态作画',
            link: {
                preview: 'https://sy2729.github.io/dynamic-drawing/',
                repo: 'https://github.com/sy2729/dynamic-drawing'
            },
            // img: './img/work/dynamic-drawing/dynamic-drawing-1.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383255/cv-img/work/dynamic-drawing/dynamic-drawing-1.png',
            id: 3,
            descrip: [
                {
                    content: `一个简单的动态作画动效 -- 展示了代码修改带来视觉变化的过程，也是日常创作CSS的过程。这是一个展示CSS及其魅力的一个很好的方式。这个项目让我感觉到网络技术中一些独特的教育技巧，用于展示抽象想法以及生动的编程交互。`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383255/cv-img/work/dynamic-drawing/dynamic-drawing-2.png',
                    type: 'img'
                },
            ],
            tags: ['网页开发', 'CSS', 'JavaScript'],
            type: 'web',
        },
        {
            name: 'Canvas画板',
            link: {
                preview: 'https://sy2729.github.io/canvas-draw/',
                repo: 'https://github.com/sy2729/canvas-draw'
            },
            // img: './img/work/canvas-draw/canvas-draw-2.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383299/cv-img/work/canvas-draw/canvas-draw-2.png',
            id: 3,
            descrip: [
                {
                    content: `<p class="t-center">一个用户可以作画并且保存草稿到本地图片的简单在线画板。具有调整笔画粗细，颜色以及橡皮擦和全部清除等功能。使用原生Canvas API完成。</p>`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383299/cv-img/work/canvas-draw/canvas-draw-1.png',
                    type: 'img'
                },
            ],
            tags: ['网页开发', 'Canvas'],
            type: 'web',
        },
        {
            name: '哥大教育学院官网辅助设计',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383418/cv-img/work/tc-site/tc-site-1.png',
            id: 3,
            descrip: [
                {
                    content: `我在哥大教育学院网络办公室的主要任务是进行内容迁移，测试<a href="tc.edu">教育学院新官网</a>,从用户体验角度提供反馈并且提供一些设计方面的CSS解决方案。`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383425/cv-img/work/tc-site/tc-site-2.png',
                    type: 'img'
                },
            ],
            tags: ['用户体验设计', 'CSS'],
            type: 'design',
        },
        {
            name: 'Code Battle卡片桌游',
            // img: './img/work/game-card/game-card-2.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383492/cv-img/work/code-battle/game-card-2.png',
            id: 3,
            link: {
                preview: `https://sy2729.github.io/gameCaard/`,
                repo: `https://github.com/sy2729/gameCaard`,
            },
            descrip: [
                {
                    content: `这是游戏设计课上由我和另外两名同学联合设计的卡片桌游。我们搭建此网站作为宣传页和游戏规则手册。`,
                    type: 'text',
                },
                {
                    content: 'http://res.cloudinary.com/shuaiyuan/image/upload/q_49/v1535383509/cv-img/work/code-battle/game-card-1.png',
                    type: 'img'
                },
            ],
            tags: ['用户体验设计', '网页开发', 'Riot.js'],
            type: 'web',
        },
        {
            name: 'Atos Aviva 服务器信息查询用户界面设计',
            // img: './img/work/atos-aviva/atos-aviva-2.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383565/cv-img/work/atos-aviva/atos-aviva-2.png',
            id: 3,
            descrip: [
                {
                    content: `我们需要为客户提供服务器信息及相关信息索引的页面。除了名称索引之外，还需要提供多条件复杂索引的功能。`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383565/cv-img/work/atos-aviva/atos-aviva-2.png',
                    type: 'img'
                },
                {
                    content: `服务器的名称和软件的名称是多对多的映射关系，和其他相关属性，例如拥有者和服务名称的关系一样，导致了设计索引面板时相较于常规搜索页面的设置稍为复杂一些。`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383569/cv-img/work/atos-aviva/atos-aviva-4.png',
                    type: 'img'
                },
                {
                    content: `我们花费了很多时间和客户交流，以弄清他们想要以及他们真正需要的功能，和怎样的视觉表达和结构最适合这样的功能需求。`,
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
            tags: ['用户体验设计', 'Atos'],
            type: 'design',
        },
        {
            name: 'Atos 任务状态管理（Service Delivery Management）界面',
            // img: './img/work/atos-sdm/atos-sdm-1.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-1.png',
            id: 3,
            descrip: [
                {
                    content: `这是一个类似于电子邮箱界面的设计。目标用户为Atos内部雇员。用户角色包含管理者和执行者两方。`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-1.png',
                    type: 'img'
                },
                {
                    content: '有别于通常的邮箱应用，这款应用针对信息（也称邮件／通知）设计了5种状态，在两种用户角色的客户端都有不同的视觉呈现。',
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-3.png',
                    type: 'img'
                },
                {
                    content: `<p class='t-center'>拒绝或者接收并回复来自管理者的请求。</p>`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-4.png',
                    type: 'img'
                },
                {
                    content: `<p class='t-center'>用户交互流程图</p>`,
                    type: 'text',
                },
                {
                    content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-2.png',
                    type: 'img'
                },
            ],
            tags: ['用户体验设计', 'Atos'],
            type: 'design',
        },
        {
            name: '我来自何方',
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
                    content: `哥大教育学院文化、媒体和教育课堂上一个课程作业。依据诗人George Ella Lyon创作的诗‘我来自己何方’（Where Am I From）进行媒体创作。她发起了在全世界范围内搜集围绕这一主题进行的文艺创作的活动，探讨每一独立个体的起源和内省。`,
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
            tags: ['视频', '生活'],
            type: 'video',
        },
        {
            name: '媒体和生活',
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
                    content: `哥大教育学院文化、媒体和教育课堂上一个课程作业。一个关于来自移动设备的爆炸信息和生活本质的思考。媒体是怎样塑造我们和我们社会的生活习惯。`,
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
            tags: ['视频', '生活'],
            type: 'video',
        },
        {
            name: '环保之旅',
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
                    content: `2017年8月，我由朋友介绍，以随行摄影师的身份随一支由小学生组成的队伍深入鞍子河自然保护区去探索自然的奥秘和美丽。这次旅行实则是一次自然环保教育，由鞍子河自然保护区的工作人员也是负责保护区教育活动组织的梅子带领。活动的发起者是环境非盈利保护教育机构发起。旅行的目的在于以一种旅行的方式教育孩子如何友好地，环保地与自然相处。`,
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
            tags: ['视频', '环保'],
            type: 'video',
        },
        {
            name: '采访——哥大女孩',
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
                    content: `这是我作为摄影师和剪辑师参与的同学的一个课程项目——采访纽约城中有趣而励志的人，记录和聆听他们的故事。后由于时间问题，只进行了一期半。`,
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
            tags: ['视频', '采访'],
            type: 'video',
        },
        {
            name: '华中师范大学本科毕业视频',
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
                    content: `在我本科即将毕业之时，我开始学习摄影和视频拍摄，正好拍摄了毕业这段时光留作纪念。视频拍摄使用了滑轨，摄影灯以及微单。`,
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
            tags: ['视频', '生活'],
            type: 'video',
        },
        {
            name: 'GH5开箱及样片Vlog',
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
                    content: `拿到了我的第一台高端微单，GH5，视频拍摄方面非常出色的一台机器。本片使用Vlog模式拍摄并进行后期调色。`,
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
            tags: ['视频', '生活'],
            type: 'video',
        },
        {
            name: '哥伦比亚大学春晚微电影',
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
                    content: `每一年，我们中国留学生都会以独特的方式庆祝自己的春节。这一次，我们拍摄了一部反映我们自己高强度生活和对未来乐观生活态度的电影。我负责拍摄掌镜。`,
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
            tags: ['视频', '生活'],
            type: 'video',
        },

    ],

}

cvData.works.map((i, index) => {
    i.id = index + 1;
    i.type = i.type.toLowerCase();

    if (i.type === 'video') {
        i.link.youtube = 'https://youtu.be/' + i.youtubeID;
        i.link.bili = 'https://www.bilibili.com/video/av' + i.biliID;
        let descript = i.descrip;
        descript.map((j) => {
            if (j.type === 'video') {
                j.content.youtube = 'https://www.youtube.com/embed/' + i.youtubeID;
                j.content.bili = `//player.bilibili.com/player.html?aid=${i.biliID}`;
            }
        })
    }
})

export { cvData as cvData }