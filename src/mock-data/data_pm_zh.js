
let cvData = {
    header: {
        greeting: '你好，我是',
        name: '袁帅',
    },
    experiences: {
        sectionName: '工作经验',
        allExperiences: [
            {
                logo: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1537750483/cv-img/download.png',
                role: '网络维护和建设 - 学生会委员会',
                company: '哥伦比亚大学 - 中国学生会',
                beginDate: '2018.09',
                endDate: '2018.12',
                activeState: false,
                detail: {
                    descrip: [
                        '作为委员会和干事参加哥伦比亚大学中国学生会的一系列活动',
                        "作为公共媒体部门的干事参与学生学者联合会的媒体宣传和制作事物，同时参与官网的维护和建设",
                    ],
                },
            },
            {
                logo: './img/tc.jpg',
                role: '课程助教 - JavaScript 编程',
                company: '哥伦比亚大学教育学院',
                beginDate: '2018.09',
                endDate: '2018.12',
                activeState: false,
                detail: {
                    descrip: [
                        '协助教师组织教学和课堂，并批改课程作业。',
                        '帮助学生解决bug，阐述并帮其理解基本的编程思维，尤其是在JavaScript的实际运用上。',
                        '创建用于课堂讲解的展示项目，以辅助课堂教学，帮助传递编程概念和作为JavaScript和交互式网页编程高阶进阶的初览。',
                    ],
                },
            },
            {
                logo: './img/atos.png',
                role: '用户体验设计实习生（UX Design Intern）',
                company: '源讯科技（Atos）- 美国',
                beginDate: '2018.05',
                endDate: '2019.01',
                activeState: false,
                detail: {
                    descrip: [
                        '参与产品的策划并使用JavaScript及相关框架Vue.js开发用户体验良好的用户界面',
                        '产品主要面向内部高层管理人员，通过邮件电话会议等形式进行用户调研，收集并分析用户使用场景和需求，有针对性的进行 产品功能设计。',
                        '协同UX设计师在用户调研基础上完成最终的界面设计.',
                        '设计拍摄并剪辑产品所需的宣传视频和产品中的MG图形动画。',
                        '协助团队完成设计规范文档网站的撰写和开发:针对文档网站的主要受众设计师和开发者设计对应的功能。',
                    ],
                },
            },
            {
                logo: './img/tc.jpg',
                role: '网络开发实习',
                company: '哥伦比亚大学教育学院',
                beginDate: '2018.03',
                endDate: '2018.05',
                activeState: false,
                detail: {
                    descrip: [
                        "在学校官网的开发中，参与不同开发和测试组的测试工作，编写测试代码和 mockup 以验证项目可行性",
                        '根据网页用户和受众的人群分类优化各页面展示内容和网站页面逻辑',
                        '参与学校官网页面的部分设计，基于优化用户体验提出一些代码和设计上的优化方案并且被采纳',
                    ],
                },
            },
            {
                logo: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1537753292/cv-img/logo.png',
                role: '前端开发',
                company: 'Renited',
                beginDate: '2017.11',
                endDate: '2018.01',
                activeState: false,
                detail: {
                    descrip: [
                        "使用 Gulp 构建工具负责公司新 Landing page 开发",
                        "使用 Element UI 结合 Vue.js 负责用户操作系统界面美化和修改，开发少数组件",
                        "使用 Bootstrap 框架修改公司旧 Landing page",
                        "和产品经理以及后端工程师沟通协作，完善用户体验",
                    ],
                },
            },
            {
                logo: './img/baicizhan.png',
                role: '内容编辑和运营',
                company: '百词斩',
                beginDate: '2017.01',
                endDate: '2017.03',
                activeState: false,
                detail: {
                    descrip: [
                        "根据需求撰写文案和教案，作为教学材料",
                        "负责教学音频媒体材料的制作和剪辑",
                        "负责微信群的活跃和答疑",
                    ],
                },
            },
        ]
    },
    // experiences: {
    //     sectionName: '工作经验',
    //     allExperiences: [
    //         {
    //             name: '仿网易云音乐（移动端）',
    //             link: {
    //                 preview: `https://sy2729.github.io/music-app/`,
    //                 repo: 'https://github.com/sy2729/music-app',
    //             },
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382448/cv-img/work/music/music-1.jpg',
    //             id: 1,
    //             descrip: [
    //                 {
    //                     content: `参照网易云音乐的移动版本，这是一个使用jQuery实现的简单复刻。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     // content: './img/work/music/music-1.jpeg',
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382448/cv-img/work/music/music-1.jpg',
    //                     type: 'img',
    //                 },
    //                 {
    //                     content: `<p class='t-center'>实现查看歌单列表和最新歌曲功能</p>`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: `https://res.cloudinary.com/shuaiyuan/image/upload/v1535382449/cv-img/work/music/music-2.jpg`,
    //                     type: 'img',
    //                 },
    //                 {
    //                     content: `<p class='t-center'>歌单界面展示</p>`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382447/cv-img/work/music/music-3.jpg',
    //                     type: 'img',
    //                 },
    //                 {
    //                     content: `<p class='t-center'>歌曲播放界面展示，最经典的——转动的黒色唱片</p>`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382447/cv-img/work/music/music-4.jpg',
    //                     type: 'img',
    //                 },
    //                 {
    //                     content: '也有歌曲搜索，展示歌词，自动滚动歌词（仅支持带有时间轴格式的歌词），切换前一首／后一首等功能。',
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: '歌曲资源和数据通过一个jQuery构建的简单内容管理后台界面管理。用户可以进行增删查改歌曲的数据。这些功能通过<a href="https://www.qiniu.com/">七牛云服务</a> and <a href="https://leancloud.cn/">leanCloud服务</a>实现。',
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382452/cv-img/work/music/music-5.png',
    //                     type: 'img',
    //                 },
    //                 {
    //                     content: `<p class='t-center'>歌单管理面板界面</p>`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382454/cv-img/work/music/music-6.png',
    //                     type: 'img',
    //                 },
    //                 {
    //                     content: `<p class='t-center'>将歌曲添加到歌单</p>`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382454/cv-img/work/music/music-7.png',
    //                     type: 'img',
    //                 },
    //             ],
    //             tags: ['网页开发', 'jQuery', '动态REM'],
    //             type: 'web',
    //         },
    //         {
    //             name: 'Atos OneSource 起飞页',
    //             link: {
    //                 preview: `https://sy2729.github.io/market-vue-reconstruct/dist/`,
    //                 repo: `https://github.com/sy2729/market-vue-reconstruct`
    //             },
    //             img: 'http://res.cloudinary.com/shuaiyuan/image/upload/q_60/v1535382853/cv-img/work/atos-landing/atos-landing-2.png',
    //             id: 2,
    //             descrip: [
    //                 {
    //                     content: `这是<a href="http://www.atosonesource.com/">Atos OneSource</a> 产品起飞页的一部分. 原网页通过自助建站工具AppDrag搭建，但是为了实现一些更高级、可自定义的功能和更佳的视觉效果，我们决定采取代码开发。`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: `最初由jQuery搭建，近期正在使用Vue重构。`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     // content: `./img/work/atos-landing/atos-landing-1.png`,
    //                     content: `http://res.cloudinary.com/shuaiyuan/image/upload/q_60/v1535382860/cv-img/work/atos-landing/atos-landing-1.png`,
    //                     type: 'img'
    //                 },
    //             ],
    //             tags: ['网页开发', '用户体验设计', 'Atos'],
    //             type: 'web',
    //         },
    //         {
    //             name: 'Atos Digital花瓣面板开发',
    //             link: {
    //                 preview: 'https://sy2729.github.io/digital-dashboard-demo/',
    //                 repo: 'https://github.com/sy2729/digital-dashboard-demo/'
    //             },
    //             // img: './img/work/atos-digital/atos-digital-dashboard-1.png',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383123/cv-img/work/atos-digital/atos-digital-dashboard-1.png',
    //             id: 3,
    //             descrip: [
    //                 {
    //                     content: `这是<a href="www.atosonesourceweb.com/">Atos OneSource Dashboard</a>用户系统的首页。客户可以在此网站管理查看日常的KPI。我们的设想是实现一个可视化的数据管理界面，同时出于用户友好度的考虑，所以最终选择了花瓣意象来代表管理面板。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: `和开发团队协作，由我提供前端视觉界面的支持，并实现移动端的自适应。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383123/cv-img/work/atos-digital/atos-digital-dashboard-1.png',
    //                     type: 'img'
    //                 }
    //             ],
    //             tags: ['网页开发', '用户体验设计', 'Atos', 'CSS'],
    //             type: 'web',
    //         },
    //         {
    //             name: 'Care Guru',
    //             link: {
    //                 preview: 'https://sy2729.github.io/careGuru/',
    //                 repo: 'https://github.com/sy2729/careGuru'
    //             },
    //             // img: './img/work/careguru/careguru-1.png',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-1.png',
    //             id: 3,
    //             descrip: [
    //                 {
    //                     content: `这是一个小组协作的课程作业。我们所要呈现的想法是“网络技术所能实现的保险知识教育”。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: `我们之中有许多对美国保险制度非常陌生的同学（包括我自己），而在遇到危急情况时，对保险的多一些了解可能会让你少很多麻烦。能够让使用者对保险中的基本常识有所了解是我们能网站的目的。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-1.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `根据课程要求，我们使用Riot作为前端MVC框架，Google Firebase作为后台数据库。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: `<p class='t-center'>用户登陆后的界面</p>`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: `https://res.cloudinary.com/shuaiyuan/image/upload/v1535383183/cv-img/work/careguru/careguru-2.png`,
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `<p class='t-center'>知识卡片</p>`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: `https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-3.png`,
    //                     type: 'img'
    //                 }
    //             ],
    //             tags: ['网页开发', 'Riot.js', 'Firebase'],
    //             type: 'web',
    //         },
    //         {
    //             name: '动态作画',
    //             link: {
    //                 preview: 'https://sy2729.github.io/dynamic-drawing/',
    //                 repo: 'https://github.com/sy2729/dynamic-drawing'
    //             },
    //             // img: './img/work/dynamic-drawing/dynamic-drawing-1.png',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383255/cv-img/work/dynamic-drawing/dynamic-drawing-1.png',
    //             id: 3,
    //             descrip: [
    //                 {
    //                     content: `一个简单的动态作画动效 -- 展示了代码修改带来视觉变化的过程，也是日常创作CSS的过程。这是一个展示CSS及其魅力的一个很好的方式。这个项目让我感觉到网络技术中一些独特的教育技巧，用于展示抽象想法以及生动的编程交互。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383255/cv-img/work/dynamic-drawing/dynamic-drawing-2.png',
    //                     type: 'img'
    //                 },
    //             ],
    //             tags: ['网页开发', 'CSS', 'JavaScript'],
    //             type: 'web',
    //         },
    //         {
    //             name: 'Canvas画板',
    //             link: {
    //                 preview: 'https://sy2729.github.io/canvas-draw/',
    //                 repo: 'https://github.com/sy2729/canvas-draw'
    //             },
    //             // img: './img/work/canvas-draw/canvas-draw-2.png',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383299/cv-img/work/canvas-draw/canvas-draw-2.png',
    //             id: 3,
    //             descrip: [
    //                 {
    //                     content: `<p class="t-center">一个用户可以作画并且保存草稿到本地图片的简单在线画板。具有调整笔画粗细，颜色以及橡皮擦和全部清除等功能。使用原生Canvas API完成。</p>`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383299/cv-img/work/canvas-draw/canvas-draw-1.png',
    //                     type: 'img'
    //                 },
    //             ],
    //             tags: ['网页开发', 'Canvas'],
    //             type: 'web',
    //         },
    //         {
    //             name: '哥大教育学院官网辅助设计',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383418/cv-img/work/tc-site/tc-site-1.png',
    //             id: 3,
    //             descrip: [
    //                 {
    //                     content: `我在哥大教育学院网络办公室的主要任务是进行内容迁移，测试<a href="tc.edu">教育学院新官网</a>,从用户体验角度提供反馈并且提供一些设计方面的CSS解决方案。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383425/cv-img/work/tc-site/tc-site-2.png',
    //                     type: 'img'
    //                 },
    //             ],
    //             tags: ['用户体验设计', 'CSS'],
    //             type: 'design',
    //         },
    //         {
    //             name: 'Code Battle卡片桌游',
    //             // img: './img/work/game-card/game-card-2.png',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383492/cv-img/work/code-battle/game-card-2.png',
    //             id: 3,
    //             link: {
    //                 preview: `https://sy2729.github.io/gameCaard/`,
    //                 repo: `https://github.com/sy2729/gameCaard`,
    //             },
    //             descrip: [
    //                 {
    //                     content: `这是游戏设计课上由我和另外两名同学联合设计的卡片桌游。我们搭建此网站作为宣传页和游戏规则手册。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'http://res.cloudinary.com/shuaiyuan/image/upload/q_49/v1535383509/cv-img/work/code-battle/game-card-1.png',
    //                     type: 'img'
    //                 },
    //             ],
    //             tags: ['用户体验设计', '网页开发', 'Riot.js'],
    //             type: 'web',
    //         },
    //         {
    //             name: 'Atos Aviva 服务器信息查询用户界面设计',
    //             // img: './img/work/atos-aviva/atos-aviva-2.png',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383565/cv-img/work/atos-aviva/atos-aviva-2.png',
    //             id: 3,
    //             descrip: [
    //                 {
    //                     content: `我们需要为客户提供服务器信息及相关信息索引的页面。除了名称索引之外，还需要提供多条件复杂索引的功能。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383565/cv-img/work/atos-aviva/atos-aviva-2.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `服务器的名称和软件的名称是多对多的映射关系，和其他相关属性，例如拥有者和服务名称的关系一样，导致了设计索引面板时相较于常规搜索页面的设置稍为复杂一些。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383569/cv-img/work/atos-aviva/atos-aviva-4.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `我们花费了很多时间和客户交流，以弄清他们想要以及他们真正需要的功能，和怎样的视觉表达和结构最适合这样的功能需求。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: `<p class='t-center'>the sketch working file screenshot</p>`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383569/cv-img/work/atos-aviva/atos-aviva-3.png',
    //                     type: 'img'
    //                 },
    //             ],
    //             tags: ['用户体验设计', 'Atos'],
    //             type: 'design',
    //         },
    //         {
    //             name: 'Atos 任务状态管理（Service Delivery Management）界面',
    //             // img: './img/work/atos-sdm/atos-sdm-1.png',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-1.png',
    //             id: 3,
    //             descrip: [
    //                 {
    //                     content: `这是一个类似于电子邮箱界面的设计。目标用户为Atos内部雇员。用户角色包含管理者和执行者两方。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-1.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: '有别于通常的邮箱应用，这款应用针对信息（也称邮件／通知）设计了5种状态，在两种用户角色的客户端都有不同的视觉呈现。',
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-3.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `<p class='t-center'>拒绝或者接收并回复来自管理者的请求。</p>`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-4.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `<p class='t-center'>用户交互流程图</p>`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-2.png',
    //                     type: 'img'
    //                 },
    //             ],
    //             tags: ['用户体验设计', 'Atos'],
    //             type: 'design',
    //         },
    //         {
    //             name: '我来自何方',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535384138/cv-img/work/where-am-I-from/where-am-I-from.png',
    //             id: 3,
    //             youtubeID: '8kWDH6cejB4',
    //             biliID: '14943823',
    //             link: {
    //                 youtube: `https://youtu.be/8kWDH6cejB4`,
    //                 bili: 'https://www.bilibili.com/video/av14943823'
    //             },
    //             descrip: [
    //                 {
    //                     content: `哥大教育学院文化、媒体和教育课堂上一个课程作业。依据诗人George Ella Lyon创作的诗‘我来自己何方’（Where Am I From）进行媒体创作。她发起了在全世界范围内搜集围绕这一主题进行的文艺创作的活动，探讨每一独立个体的起源和内省。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: {
    //                         youtube: '',
    //                         bili: '',
    //                     },
    //                     type: 'video'
    //                 },
    //             ],
    //             tags: ['视频', '生活'],
    //             type: 'video',
    //         },
    //         {
    //             name: '媒体和生活',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535431869/cv-img/work/media-life/media-life.png',
    //             id: 3,
    //             youtubeID: 'dmJO491mVao',
    //             biliID: '',
    //             link: {
    //                 youtube: `https://youtu.be/8kWDH6cejB4`,
    //                 bili: 'https://www.bilibili.com/video/av14943823'
    //             },
    //             descrip: [
    //                 {
    //                     content: `哥大教育学院文化、媒体和教育课堂上一个课程作业。一个关于来自移动设备的爆炸信息和生活本质的思考。媒体是怎样塑造我们和我们社会的生活习惯。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: {
    //                         youtube: '',
    //                         bili: '',
    //                     },
    //                     type: 'video'
    //                 },
    //             ],
    //             tags: ['视频', '生活'],
    //             type: 'video',
    //         },
    //         {
    //             name: '环保之旅',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535431905/cv-img/work/Eenvironmentalism-trip/maxresdefault.webp',
    //             id: 3,
    //             youtubeID: 'hGptZmEDqkY',
    //             biliID: '13016424',
    //             link: {
    //                 youtube: `https://youtu.be/8kWDH6cejB4`,
    //                 bili: 'https://www.bilibili.com/video/av14943823'
    //             },
    //             descrip: [
    //                 {
    //                     content: `2017年8月，我由朋友介绍，以随行摄影师的身份随一支由小学生组成的队伍深入鞍子河自然保护区去探索自然的奥秘和美丽。这次旅行实则是一次自然环保教育，由鞍子河自然保护区的工作人员也是负责保护区教育活动组织的梅子带领。活动的发起者是环境非盈利保护教育机构发起。旅行的目的在于以一种旅行的方式教育孩子如何友好地，环保地与自然相处。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: {
    //                         youtube: '',
    //                         bili: '',
    //                     },
    //                     type: 'video'
    //                 },
    //             ],
    //             tags: ['视频', '环保'],
    //             type: 'video',
    //         },
    //         {
    //             name: '采访——哥大女孩',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433480/cv-img/work/interview-columbia/interview-columbia.png',
    //             id: 3,
    //             youtubeID: 'ALUSbmb9kP4',
    //             biliID: '16099951',
    //             link: {
    //                 youtube: `https://youtu.be/8kWDH6cejB4`,
    //                 bili: 'https://www.bilibili.com/video/av14943823'
    //             },
    //             descrip: [
    //                 {
    //                     content: `这是我作为摄影师和剪辑师参与的同学的一个课程项目——采访纽约城中有趣而励志的人，记录和聆听他们的故事。后由于时间问题，只进行了一期半。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: {
    //                         youtube: '',
    //                         bili: '',
    //                     },
    //                     type: 'video'
    //                 },
    //             ],
    //             tags: ['视频', '采访'],
    //             type: 'video',
    //         },
    //         {
    //             name: '华中师范大学本科毕业视频',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433401/cv-img/work/ccnu-graduation/ccnu-graduation.webp',
    //             id: 3,
    //             youtubeID: 'ZdtILGuo6IQ',
    //             biliID: '11355324',
    //             link: {
    //                 youtube: `https://youtu.be/8kWDH6cejB4`,
    //                 bili: 'https://www.bilibili.com/video/av14943823'
    //             },
    //             descrip: [
    //                 {
    //                     content: `在我本科即将毕业之时，我开始学习摄影和视频拍摄，正好拍摄了毕业这段时光留作纪念。视频拍摄使用了滑轨，摄影灯以及微单。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: {
    //                         youtube: '',
    //                         bili: '',
    //                     },
    //                     type: 'video'
    //                 },
    //             ],
    //             tags: ['视频', '生活'],
    //             type: 'video',
    //         },
    //         {
    //             name: 'GH5开箱及样片Vlog',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433653/cv-img/work/gh5-unboxing/gh5-unboxing.png',
    //             id: 3,
    //             youtubeID: '-1ZyOfgzbkM',
    //             biliID: '20628682',
    //             link: {
    //                 youtube: `https://youtu.be/8kWDH6cejB4`,
    //                 bili: 'https://www.bilibili.com/video/av14943823'
    //             },
    //             descrip: [
    //                 {
    //                     content: `拿到了我的第一台高端微单，GH5，视频拍摄方面非常出色的一台机器。本片使用Vlog模式拍摄并进行后期调色。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: {
    //                         youtube: '',
    //                         bili: '',
    //                     },
    //                     type: 'video'
    //                 },
    //             ],
    //             tags: ['视频', '生活'],
    //             type: 'video',
    //         },
    //         {
    //             name: '哥伦比亚大学春晚微电影',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433677/cv-img/work/columbia-spring-festival-film/columbia-spring-festival-film.png',
    //             id: 3,
    //             youtubeID: 'kJ4Ere29BO0',
    //             biliID: '',
    //             link: {
    //                 youtube: `https://youtu.be/8kWDH6cejB4`,
    //                 bili: 'https://www.bilibili.com/video/av14943823'
    //             },
    //             descrip: [
    //                 {
    //                     content: `每一年，我们中国留学生都会以独特的方式庆祝自己的春节。这一次，我们拍摄了一部反映我们自己高强度生活和对未来乐观生活态度的电影。我负责拍摄掌镜。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: {
    //                         youtube: '',
    //                         bili: '',
    //                     },
    //                     type: 'video'
    //                 },
    //             ],
    //             tags: ['视频', '生活'],
    //             type: 'video',
    //         },
    //         {
    //             name: '快餐店点餐系统管理界面模拟',
    //             link: {
    //                 preview: 'https://sy2729.github.io/restaurant-pos-sys/dist/#/',
    //                 repo: 'https://github.com/sy2729/restaurant-pos-sys/'
    //             },
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1540484019/cv-img/work/pos-system/Screen_Shot_2018-10-25_at_12.13.04_PM.png',
    //             id: undefined,
    //             descrip: [
    //                 {
    //                     content: `借助饿了么Element UI框架，使用Vue-cli搭建快餐店收银点餐系统，实现点餐，计费结账等功能`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1540484019/cv-img/work/pos-system/Screen_Shot_2018-10-25_at_12.13.04_PM.png',
    //                     type: 'img'
    //                 }
    //             ],
    //             tags: ['网页开发', 'Vue', 'Element-UI'],
    //             type: 'web',
    //         },
    //         {
    //             name: '纽约时报网交互效果实现并封装开源',
    //             link: {
    //                 preview: 'https://sy2729.github.io/nytimes-scrolling/index.html',
    //                 repo: 'https://github.com/sy2729/nytimes-scrolling'
    //             },
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1540484420/cv-img/work/nytimes-scrolling/Screen_Shot_2018-10-25_at_12.19.48_PM.png',
    //             id: undefined,
    //             descrip: [
    //                 {
    //                     content: `纽约时报官网上呈现的<a href="https://www.nytimes.com/interactive/2018/10/18/nyregion/new-york-city-inequality-gentrification.html?action=click&module=Top%20Stories&pgtype=Homepage">页面滚动式动态叙事效果</a>，看了之后很喜欢，于是在jQuery的基础上仿写了该效果，并且在Github上开源`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1540484420/cv-img/work/nytimes-scrolling/Screen_Shot_2018-10-25_at_12.19.48_PM.png',
    //                     type: 'img'
    //                 }
    //             ],
    //             tags: ['Jquery', 'js插件', '网页特效'],
    //             type: 'web',
    //         },
    //         {
    //             name: 'Atos 电子管理系统UI动效设计及开发',
    //             link: {
    //                 preview: 'https://sy2729.github.io/atos-digital-dashboard-panel-transition/index.html',
    //                 repo: 'https://github.com/sy2729/atos-digital-dashboard-panel-transition'
    //             },
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548384664/cv-img/work/digital-dashboard-animation/digital_dashboard_animation_small.gif',
    //             id: 3,
    //             descrip: [
    //                 {
    //                     content: `使用ES6和jQuery开发卡片组件库，实现电子管理界面板的动画效果设计，为后端开发提供参考`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548384873/cv-img/work/digital-dashboard-animation/digital_dashboard_animation_large.gif',
    //                     type: 'img'
    //                 },
    //             ],
    //             tags: ['Web Dev', 'jQuery'],
    //             type: 'web',
    //         },
    //         {
    //             name: '原生NodeJS搭建RESTful API服务',
    //             link: {
    //                 repo: 'https://github.com/sy2729/node-master-assignments/tree/master/hw2'
    //             },
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548398617/cv-img/work/restaurant-Restful-API/console_activity.png',
    //             id: 3,
    //             descrip: [
    //                 {
    //                     content: `使用原生NodeJs搭建RESTful API服务，实现中国饭店订单系统`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/q_37/v1548398138/cv-img/work/restaurant-Restful-API/Restaurant_Restful_API.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: '使用Token实现用户注册登陆, 以及简单的菜单选项显示, 添加购物车选项, 下单结账等功能。',
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: '所有前后端交互都记录在log文件之中。',
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548398800/cv-img/work/restaurant-Restful-API/file_records.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548398617/cv-img/work/restaurant-Restful-API/console_activity.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `了解更详细的文档, 请狠狠地点击这里<a href='https://res.cloudinary.com/shuaiyuan/image/upload/v1548398618/cv-img/work/restaurant-Restful-API/detailed_documentation.png'>the Github 文档</a>`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548398618/cv-img/work/restaurant-Restful-API/detailed_documentation.png',
    //                     type: 'img'
    //                 },
    //             ],
    //             tags: ['Web Dev', 'Back-End', 'NodeJS'],
    //             type: 'web',
    //         },
    //         {
    //             name: 'Atos时间线页面',
    //             link: {
    //                 repo: 'https://github.com/sy2729/atos-second-timeline',
    //                 preview: 'https://sy2729.github.io/atos-second-timeline/index.html'
    //             },
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548399705/cv-img/work/atos-timeline/atos-time-line.png',
    //             id: 3,
    //             descrip: [
    //                 {
    //                     content: `利用Vue-Swiper搭建一个时间线活动页面, 内嵌在Digital Transformation Team的wordpress首页之中`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548399705/cv-img/work/atos-timeline/atos-time-line.png',
    //                     type: 'img'
    //                 },
    //             ],
    //             tags: ['Web Dev', 'Vue', 'Vue-Swiper'],
    //             type: 'web',
    //         },
    //         {
    //             name: 'Atos Evolve 动效设计',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548400588/cv-img/work/atos-evolve-animation/loading.gif',
    //             id: 3,
    //             descrip: [
    //                 {
    //                     content: `一个应用启动时引导页的动效`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548400586/cv-img/work/atos-evolve-animation/card-swiping.gif',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `一个用户提交完信息后显示的加载动画，用于延缓用户对时间的感知并产生数据被处理的“错觉”`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548400588/cv-img/work/atos-evolve-animation/loading.gif',
    //                     type: 'img'
    //                 },
    //             ],
    //             tags: ['Animation Design', 'After Effects'],
    //             type: 'Design',
    //         },
    //         {
    //             name: '简单新闻底部滚动条JS库',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1549468957/cv-img/work/news-bar/news-bar-cover.png',
    //             id: 3,
    //             link: {
    //                 preview: "https://sy2729.github.io/scroll-news/index.html",
    //                 repo: "https://github.com/sy2729/scroll-news"
    //             },
    //             descrip: [
    //                 {
    //                     content: `使用原生JS实现一个底部新闻滚动条，灵感来自于一天在纽约上班路上看到的巨大广告屏幕地步的广告条，心想这怎么实现的。于是动手做了一个demo。Github开源，可自定义滚动条数据和背景文字颜色，以及滚动速度。`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1549469270/cv-img/work/news-bar/news-bar.gif',
    //                     type: 'img'
    //                 }
    //             ],
    //             tags: ['Open Source Library', 'vanillina JS'],
    //             type: 'Web',
    //         },
    //         {
    //             name: '微信截图生成器',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1549473458/cv-img/work/wechat-conversation-generator/wechat-generator-cover.png',
    //             id: 3,
    //             link: {
    //                 preview: "https://sy2729.github.io/wechat-conversation-simulator/",
    //                 repo: "https://github.com/sy2729/wechat-conversation-simulator"
    //             },
    //             descrip: [
    //                 {
    //                     content: `微信截图生成器，使用React & Ant Design实现`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548848695/cv-img/work/wechat-conversation-generator/wechat-conversation-generator.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `用户界面`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1549473751/cv-img/work/wechat-conversation-generator/wechat-conversation-generator-panel-1.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `现在终于可以造假啦！`,
    //                     type: 'text'
    //                 },
    //             ],
    //             tags: ['React', 'Ant Design UI'],
    //             type: 'Web',
    //         },
    //         {
    //             name: '老滇味面馆网站首页',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1550372328/cv-img/work/laodianwei/laodianwei.png',
    //             id: 3,
    //             link: {
    //                 preview: "https://sy2729.github.io/laodianwei",
    //                 repo: "https://github.com/sy2729/laodianwei"
    //             },
    //             descrip: [
    //                 {
    //                     content: `我朋友在纽约开的老滇味面馆，托我做了一个官网首页，主要给用户查看菜单信息的。`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1550372328/cv-img/work/laodianwei/laodianwei.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `<p class="t-center">菜品</p>`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1550372402/cv-img/work/laodianwei/Screen_Shot_2019-02-16_at_9.59.34_PM.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `食品信息通过自己搭建的RESTful API获取，后端将数据存储于MongoDB。前端使用Redux和React作为数据管理和UI框架。`,
    //                     type: 'text'
    //                 },
    //             ],
    //             tags: ['React', 'Redux', 'Heroku', 'MongoDB', 'Mongoose'],
    //             type: 'Web',
    //         },
    //         {
    //             name: 'ReBlog - Express多人博客',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1551582720/cv-img/work/reblog/reblog-cover.png',
    //             id: 3,
    //             link: {
    //                 preview: "https://sy-express-blogger.herokuapp.com/#/",
    //                 repo: ""
    //             },
    //             descrip: [
    //                 {
    //                     content: `多人博客平台 - 实现了简单的前后端交互`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1551582720/cv-img/work/reblog/reblog-cover.png',
    //                     type: 'img'
    //                 },
    //                 {
    //                     content: `前端你使用React和Redux作为UI框架和数据管理。`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: `后端使用Experss搭建MVC, 使用MongoDB和Mongoose作为数据库和数据库类型检测, 使用JSON Web Token进行用户鉴权和登陆.`,
    //                     type: 'text'
    //                 },
    //                 {
    //                     content: `项目最终部署在Heroku上.`,
    //                     type: 'text'
    //                 },
    //             ],
    //             tags: ['React', 'Express', 'JWT', 'Mongoose', 'Redux'],
    //             type: 'Web',
    //         },
    //         {
    //             name: 'Atos 活动视频',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1551834981/cv-img/work/atos-workshop-video/atos-workshop-video.png',
    //             id: 3,
    //             youtubeID: 'UcUAInP2evk',
    //             biliID: '',
    //             link: {
    //                 youtube: `https://youtu.be/8kWDH6cejB4`,
    //                 bili: ''
    //             },
    //             descrip: [
    //                 {
    //                     content: `在Atos工作的时候制作的这段Video。基于上面提供的“极其糟糕”的手机拍摄视频素材，只能使用一些小动画来对其进行美化。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: {
    //                         youtube: '',
    //                         bili: '',
    //                     },
    //                     type: 'video'
    //                 },
    //             ],
    //             tags: ['Video', 'Business', 'Marketing Video'],
    //             type: 'Video',
    //         },
    //         {
    //             name: '微信小程序宣传视频',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1551835897/cv-img/work/wechat-marketing-video/wechat-marketing-video.png',
    //             id: 3,
    //             youtubeID: '8D8qXiTNI9g',
    //             biliID: '',
    //             link: {
    //                 youtube: ``,
    //                 bili: ''
    //             },
    //             descrip: [
    //                 {
    //                     content: `上移动学习这门课的时候产品做的是一个微信小程序，无奈程序做得有些粗陋，所以做了这个视频来宣传他。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: {
    //                         youtube: '',
    //                         bili: '',
    //                     },
    //                     type: 'video'
    //                 },
    //             ],
    //             tags: ['Video', 'Marketing Video'],
    //             type: 'Video',
    //         },
    //         {
    //             name: '哥大教育学院2018教堂毕业典礼',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1551838969/cv-img/work/tc-graduation-ceremony-2018/tc-graduation-ceremony-2018.png',
    //             id: 3,
    //             youtubeID: 'P5nm_txayu0',
    //             biliID: '',
    //             link: {
    //                 youtube: ``,
    //                 bili: ''
    //             },
    //             descrip: [
    //                 {
    //                     content: `在TC网络办公室工作期间作为志愿者去帮助负责毕业管理的办公室拍摄短片。`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: {
    //                         youtube: '',
    //                         bili: '',
    //                     },
    //                     type: 'video'
    //                 },
    //             ],
    //             tags: ['Video', 'Life'],
    //             type: 'Video',
    //         },
    //         {
    //             name: '纽约Vlog 2.0',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1551840721/cv-img/work/new-york-vlog2.0/new-york-vlog2.0.png',
    //             id: 3,
    //             youtubeID: '',
    //             biliID: '24166775',
    //             link: {
    //                 youtube: ``,
    //                 bili: ''
    //             },
    //             descrip: [
    //                 {
    //                     content: `简单的一个Vlog`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: {
    //                         youtube: '',
    //                         bili: '',
    //                     },
    //                     type: 'video'
    //                 },
    //             ],
    //             tags: ['Video', 'Life'],
    //             type: 'Video',
    //         },
    //         {
    //             name: '朱理桢的Vlog',
    //             img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1551843078/cv-img/work/miami-vlog/miami-vlog.png',
    //             id: 3,
    //             youtubeID: 'avqMhD6NoDc',
    //             biliID: '43516166',
    //             link: {
    //                 youtube: ``,
    //                 bili: ''
    //             },
    //             descrip: [
    //                 {
    //                     content: `她去迈阿密的一个Vlog`,
    //                     type: 'text',
    //                 },
    //                 {
    //                     content: {
    //                         youtube: '',
    //                         bili: '',
    //                     },
    //                     type: 'video'
    //                 },
    //             ],
    //             tags: ['Video', 'Life'],
    //             type: 'Video',
    //         },
    //     ]
    // },
    cvPath: {
        // en: './cv/shuai_yuan_front_end_dev.pdf',
        zh: './cv/项目经理_袁帅_哥伦比亚大学_硕士_2019应届生.pdf'
    }

}

// cvData.works.allWorks.map((i, index) => {
//     i.id = index + 1;
//     i.type = i.type.toLowerCase();

//     if (i.type === 'video') {
//         i.link.youtube = 'https://youtu.be/' + i.youtubeID;
//         i.link.bili = 'https://www.bilibili.com/video/av' + i.biliID;
//         let descript = i.descrip;
//         descript.map((j) => {
//             if (j.type === 'video') {
//                 j.content.youtube = 'https://www.youtube.com/embed/' + i.youtubeID;
//                 j.content.bili = `//player.bilibili.com/player.html?aid=${i.biliID}`;
//             }
//         })
//     }
// })

export { cvData as cvData }