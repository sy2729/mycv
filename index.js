// import {  } from "./index.scss";
import { cvData } from "./data";
import "./index.scss";

// create component
var nav = {
    template: `
        <nav>
            <img :src=logoImg>
            <ul class='nav-options'>
                <li v-for='i in navList' @click='chooseToView(i.name)'>{{i.name}}</li>
            </ul>
        </nav>
    `,

    data: function(){
        return {
            logoImg: './img/logo.png',
            navList: [
                {
                    name: 'Web'
                },
                {
                    name: 'Video'
                },
                {
                    name: 'Design'
                },
                {
                    name: 'Blog'
                },
            ]
        }
    },
    methods: {
        chooseToView(data){
            if(data.toLowerCase() !== 'blog') {
                this.$emit('choose-to-view', data.toLowerCase());
            }else {
                console.log('choose blog');
            }
        }
    }
};

var header = {
    template: `
        <div class="header">
            <div class="header-layer" ref='overlay'></div>
            <cv-nav @choose-to-view='headerSelect'></cv-nav>

            <div class="title-wrap" ref='titleWrap'>
                <h4 class="subtitle">Hello, I'm</h4>
                <h1 class="title">Shuai Yuan</h1>
                <div class='arrow-wrap' @click=arrowScroll ref='arrow'><i class="fa fa-arrow-down"></i></div>
            </div>
        </div>
    `,
    data: function(){
        return {

        }
    },

    methods: {
        scrollTo(position, timeout){
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                    direction = position - scrollTop > 0 ? 1 : -1,
                    distance = Math.abs(position - scrollTop),
                    split = distance / 50,
                    _timeout;

                if (position !== scrollTop) {
                    timeout = timeout || 1000;
                    split *= direction;

                    _timeout = setInterval(function () {
                        scrollTop += split;
                        distance -= Math.abs(split);
                        if (0 >= distance) {
                            window.scrollTo(0, position);
                            clearInterval(_timeout);
                            _timeout = null;
                        } else {
                            window.scrollTo(0, scrollTop);
                        }
                    }, timeout / 100);
                }
        },
        arrowScroll(){
            let value = document.querySelector('.skill-section').offsetTop;
            this.scrollTo(value, 500);
        },
        myCallback(){
            this.$refs.arrow.classList.add('active');
        },
        detectLayerLoading(){
            // detect the layer loading
            let img = document.createElement('img');
            img.setAttribute("src", './img/hero-layer.png');
            img.onload = ()=>{
                img = null;
                this.loadText();
            }
        },
        loadText(){
            this.$refs.titleWrap.classList.add('active')
        },
        headerSelect(data){
            let value = document.querySelector('.work-section').offsetTop;
            this.scrollTo(value, 500);
        }
    },

    components: {
        'cv-nav': nav,
    },

    mounted(){
        ScrollReveal().reveal('.arrow-wrap', { afterReveal: this.myCallback });
        this.detectLayerLoading();

    }
}

var sectionTitle = {
    template: `
    <div class='section-title-wrap'>
        <div class='section-title'>
            <p class="order">{{order}}.</p>
            <p class="section-name">{{name}}</p>
        </div>
    </div>
    `,
    data: function(){
        return {

        }
    },
    props:['order', 'name']
};

var skillSection = {
    template: `
        <div class="skill-section each-section" :style="{background: sectionColor}">
            <section-title :order=order :name=sectionName></section-title>
            <div class='section-content'>
                <p class="content-description">{{description}}</p>
                <div :class="['skill-wrap', {active: skillBarShort}]">
                    <div class="each-skill" v-for='i in skills'>
                        <div class="bar-info-wrap">
                            <p class='skill-name'>{{i.name}}</p>
                            <p class="skill-extent">{{i.extent}}%</p>
                        </div>
                        <div class="bar-outter">
                            <div class="bar-inner" :style="{width: i.extent + '%'}"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    `,
    data: function(){
        return {
            order: '01',
            sectionName: 'Skills',
            description: `I’m passionate about Web Development and User Interface design, with close observation of the latest trends in those design fields. I have solid skills in creating design prototype through front-end development and proficiency of using design software. With my pursuit of aesthetic details, I am able to precisely communicate my idea and design thoughts with my clients and partners.`,
            sectionColor: '#C93639',
            skillBarShort: true,
            skills: [],
        }
    },

    components: {
        'section-title': sectionTitle,
    },

    methods: {
        removeActive(){
            this.skillBarShort = false;
        }
    },
    beforeMount(){
        this.skills = cvData.skills;
    },

    mounted(){
        ScrollReveal().reveal('.skill-wrap', { afterReveal: this.removeActive});
    }
};

var eachExperience = {
    template: `
        <div :class="['each-experience', 'each-clickable',{active: activeState, viewDetail: viewDetailState}]" @click=viewEach>
             <transition name='show-content'>
                <div class="summary-wrap" v-if=!viewDetailState>
                    <div class='experience-logo-wrap'>
                        <img :src=logo class='experience-logo'>
                    </div>
                    <div class="experience-info-wrap">
                        <div class="experience-info">
                            <p class='company'>{{company}}</p>
                            <p class='role'>{{role}}</p>
                        </div>

                        <p class='experience-date'>
                            <span>{{beginDate}}</span>
                                -
                            <span>{{endDate}}</span>
                        </p>   
                    </div>
                </div>
             </transition>

            <transition name='show-content'>
                <div class='experience-detail' v-if=viewDetailState>
                    <ul>
                        <li v-for='i in detail.descrip'>{{i}}</li>
                    </ul>
                </div>
            </transition>

            <div class='change-state view-summary' v-if=viewDetailState>Back</div>
        </div>
    `,
    props: ['logo', 'role', 'company', 'beginDate', 'endDate', 'activeState', 'detail'],
    data: function(){
        return {
            viewDetailState: false,

        }
    },
    methods: {
        viewEach(){
            this.viewDetailState = !this.viewDetailState;
        }
    }
};

var experienceSection = {
    template: `
        <div class="experience-section each-section" :style="{background: sectionColor}">
             <section-title :order=order :name=sectionName></section-title>
             <div class='section-content'>
                <each-experience v-for='(i, index) in experiences' :key=index v-bind='i'></each-experience>
             </div>
        </div>
    `,
    data: function(){
        return {
            sectionColor: '#FFFFFF',
            order:'02',
            sectionName: 'Experience',
            experiences: [],
        }
    },
    components: {
        'section-title': sectionTitle,
        'each-experience': eachExperience,
    },
    beforeMount(){
        this.experiences = cvData.experiences;
    }
};

// education component
var eachEducation = {
    template: `
        <div :class="['each-education', {active: activeState}]">
            <div class="school-info-wrap">
                <div class="school-info-sub-wrap">
                    <p class="school">{{school}}</p>
                    <p class="major">{{major}}</p>
                </div>
                <p class="degree">{{degree}}</p>
            </div>
            <p class="education-date">
                <span>{{startDate}}</span>
                    -
                <span>{{endDate}}</span>
            </p>
        </div>
    `,
    props: ['school', 'degree', 'major', 'startDate', 'endDate', 'activeState']
};

var educationSection = {
    template: `
        <div class="education-section each-section" :style="{background: sectionColor}">
             <section-title :order=order :name=sectionName></section-title>
             <div class='section-content'>
                <each-education v-for='(i, index) in educations' :key=index v-bind='i'></each-education>
             </div>
        </div>
    `,
    data: function(){
        return {
            sectionColor: '#fff',
            order: '03',
            sectionName: 'Education',
            educations: [
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
        }
    },
    components: {
        'section-title': sectionTitle,
        'each-education': eachEducation,
    }
};


var eachWork = {
    template: `
        <div class="each-work" :style="{ 'background-image': 'url(' + img + ')'}" @click=viewEachWork>
            <div class='work-cover'>
                <div class="work-info-wrap">
                    <h3 class='work-name'>{{name}}</h3>
                    <span class='current-type'><i :class="typeIconCode[type]"></i></span>
                </div>
            </div>
        </div>
    `,
    props: ['img', 'name', 'descrip', 'link', 'tags', 'id', 'type'],
    data: function(){
        return {
            typeIconCode: {
                'web': 'fa fa-code',
                'video': 'fa fa-play-circle',
                'design': 'fa fa-paint-brush',
            }
        }
    },
    methods: {
        viewEachWork(){
            let data = JSON.parse(JSON.stringify(this.$props));
            this.$emit('view-work-detail', data);
        }
    }

}

var progressBar = {
    template: `
        <div class='progress-out' ref='progressBar'>
            <div class="progress-in" :style="{width: (viewLength/totalLength) * 100 + '%', left: (scrolledDistance / totalLength) * 100 + '%'}"></div>
        </div>
    `,
    props: ['totalLength', 'viewLength', 'scrolledDistance'],
    data: function(){
        return {
            progressBarLength: 0,
        }
    },
    computed: {
        calcScrollDistance(){
            
        }
    },
    mounted(){
        let width = this.$refs.progressBar.getBoundingClientRect().width;  
        this.progressBarLength = width;
    }
}

var sideBarInWorkDetail = {
    template: `
        <aside class='sideBar'>
            <ul>
                <li v-for='i in allwork' :class="{'header-bar': i.id === currentId}" @click='switchWork(i.id)' :data-id=i.id>{{i.name}}</li>
            </ul>
        </aside>
    `,
    data: function () {
        return {

        }
    },
    methods: {
        switchWork(data){
            this.$props.allwork.map((i)=>{
                if(data === i.id) {
                    this.$emit('switch-work-detail', i)
                }
            })
        }
    },
    props: ['allwork', 'currentId'],
    mounted(){
        
    }

}

var workDetail = {
    template: `
            <div class='work-detail'>
                <section class='current-content-wrap'>
                    <div class='title-wrap'>
                        <h2 class='title'>{{currentWork.name}}</h2>
                        <div class="work-link-wrap">
                            <a class='link-preview' :href='currentWork.link.preview' title="preivew"><span><i class='fa fa-eye'></i>preview</span></a>
                            <a :href='currentWork.link.repo' title="repo"><span><i class='fa fa-github'></i>repo</span></a>
                        </div>
                        <ul class='tags'>
                            <li v-for='i in currentWork.tags'>{{i}}</li>
                        </ul>
                    </div>
                    <div class='work-content'>
                        <div v-for="i in currentWork.descrip" :class="{'each-descrip-img': i.type==='img'}">
                            <img :src='i.content' v-if="i.type==='img'">
                            <p v-html='i.content' v-if="i.type==='text'"></p>
                        </div>
                    </div>
                </section>
                <side-bar-in-work-detail :allwork=allwork :currentId=currentWork.id @switch-work-detail="switchWork"></side-bar-in-work-detail>
                <div class="close" @click="$emit('close-detail')">
                    <span><i class="fa fa-times"></i></span>
                </div>
            </div>
    `,
    data: function(){
        return {
            currentWork: {},
        }
    },
    props: ['detail', 'allwork'],

    components: {
        "side-bar-in-work-detail": sideBarInWorkDetail,
    },
    methods: {
        switchWork(data){
            this.currentWork = data;
        }
    },
    beforeMount(){
        this.currentWork = this.$props.detail;
    }
}

const switchType = {
    template: `
        <div class='switch-type clearfix'>
            <ul class='type-wrap'>
                <li :class="{'active': i === typeChosen}" v-for='(i, index) in types' @click='switchType(i)'>{{i}}<span v-if='index !== types.length - 1' class='type-divide'> /</span></li>
            </ul>
        </div>
    `,
    data: function(){
        return {
            typeChosen: 'all',
        }
    },
    methods: {
        switchType(data){
            this.typeChosen = data;
            this.$emit('switch-type', data);
        }
    },
    props: ['types'],
}

var workSection = {
    template: `
        <div class="work-section each-section" :style="{background: sectionColor}">
            <switch-type :types=workTypes @switch-type=switchType></switch-type>
             <section-title :order=order :name=sectionName></section-title>
             <div class='section-content' ref='works'>
                <each-work v-for='(i, index) in filteredWorks' :key=index v-bind='i' @view-work-detail=viewWorkDetail></each-work>
             </div>
             <button class='next-btn' @click=scrollRight><i class='fa fa-angle-right'></i></button>
             <progress-bar :totalLength=allWorkLength :viewLength=viewLength :scrolledDistance=scrolledDistance></progress-bar>
        </div>
    `,

    data: function(){
        return {
            sectionColor: '#F5F5F5',
            order: '04',
            sectionName: 'Portfolio',
            workTypes: ['all','web', 'design', 'video'],
            filteredWorks: [],
            works: [],
            allWorkLength: 0,
            viewLength: 20,
            scrolledDistance: 0,
        }
    },
    methods: {
        detectScrollDistance(){
            let value = this.getScrollDistance();
            this.scrolledDistance = this.initialDistanceBeforeScroll - value;
        },

        getScrollDistance(){
            return document.querySelectorAll('.each-work')[0].getBoundingClientRect().left;
        },

        getInitialScrollDistance(){
            return document.querySelector('.section-content').getBoundingClientRect().left;
        },
        getBarStyle(){
            let allLength = this.$refs.works.scrollWidth;
            let viewLength = this.$refs.works.getBoundingClientRect().width;
            this.viewLength = viewLength;
            this.allWorkLength = allLength;
        },
        scrollRight(){
            this.scrollHorizontal(this.$refs.works, this.$refs.works.scrollLeft + 280, 500);
            // this.$refs.works.scrollLeft = this.$refs.works.scrollLeft + 280;
        },
        viewWorkDetail(data){
            this.$emit('view-work-detail', data)
        },
        scrollHorizontal(node, position, timeout){
            var scrollLeft = node.scrollLeft,
                direction = position - scrollLeft > 0 ? 1 : -1,
                distance = Math.abs(position - scrollLeft),
                split = distance / 50,
                _timeout;

            if (position !== scrollLeft) {
                timeout = timeout || 1000;
                split *= direction;

                _timeout = setInterval(function () {
                    scrollLeft += split;
                    distance -= Math.abs(split);
                    if (0 >= distance) {
                        node.scrollLeft = position;
                        clearInterval(_timeout);
                        _timeout = null;
                    } else {
                        node.scrollLeft = scrollLeft;
                    }
                }, timeout / 100);
            }
        },

        switchType(data){
            if(data.toLowerCase() === 'all') {
                this.filteredWorks = this.works;
            }else {
                let results = this.works.filter((i) => {
                    if (i.type.toLowerCase() === data.toLowerCase()) {
                        return i
                    }
                });
                this.filteredWorks = results;
            }

        }
    },
    components: {
        'section-title': sectionTitle,
        'each-work': eachWork,
        'progress-bar': progressBar,
        'switch-type': switchType,
    },
    beforeMount(){
        this.works = cvData.works;
        // use all works by default
        this.filteredWorks = this.works;
    },
    mounted(){
        // get alllength and view length of the work
        this.getBarStyle();

        // watch the work scroll
        this.$refs.works.onscroll = this.detectScrollDistance;
        // get the initial left value to calculate how long scrolled
        this.initialDistanceBeforeScroll = this.getInitialScrollDistance();

        // watch the browser resize to recalculate the initial left value
        window.addEventListener('resize', ()=>{
            this.getBarStyle();
            this.initialDistanceBeforeScroll = this.getInitialScrollDistance();
        });

        // pass all work data to root
        this.$emit('all-work', this.works)
    },
    updated(){
        // update the scrollbar visual everytime change the work content
        this.getBarStyle();
    },
}

var creditWidget = {
    template: `
        <div class='credit-wrap'>
            <p>Credit to XXXXX's Design on Dribbble</p>
            <div class='close' @click="$emit('closeWidget')">X</div>
        </div>
    `,

}

var footer = {
    template: `
        <footer :style="{background: sectionColor}">
            <div class="footer-content">
                <p>Get in touch with me!<a :href="'mailto:' + email">Click Here</a></p>
            </div>
            <div class="footer-footer">
                <ul class="social-media">
                    <li v-for='i in media'><a :href='i.link'>{{i.name}}</a></li>
                </ul>

                <img :src=logoImg>

                <p class='creat-stamp'>&copy 2018 Made in China</p>

                <div class="credit-sign" @click='openCredit'>?</div>
                <transition name='jump'>
                    <credit-widget v-if="creditOpened" @closeWidget=closeWidget></credit-widget>
                </transition>

            </div>
        </footer>
    `,
    data: function(){
        return {
            sectionColor: '#202020',
            email: 'sy2729@tc.columbia.edu',
            logoImg: './img/logo.png',
            media: [
                {
                    name: 'Blog',
                    link: 'https://sy2729.github.io/',
                },
                {
                    name: 'Github',
                    link: 'https://github.com/sy2729',
                },
            ],
            creditOpened: false,
        }
    },
    methods: {
        openCredit(){
            this.creditOpened = true;
        },
        closeWidget(){
            this.creditOpened = false;
        }
    },

    components: {
        'credit-widget': creditWidget,
    }
}

// initialize Vue
new Vue({
    el: "#app",
    data: {
        workDetail: {},
        workDetailOpened: false,
        allWorks: null,
    },

    methods: {
        viewWorkDetail(data){
            this.workDetail = data;
            this.workDetailOpened = true;
            document.body.style.overflow = 'hidden';
        },
        closeDetail(){
            this.workDetailOpened = false;
            document.body.style.overflow = 'unset';
        },
        getAllWork(data){
            this.allWorks = data;
        },
    },

    computed: {

    },

    components: {
        'header-section': header,
        'skill-section': skillSection,
        'experience-section': experienceSection,
        'education-section': educationSection,
        'work-section': workSection,
        'footer-section': footer,
        'work-detail': workDetail,
    }
})