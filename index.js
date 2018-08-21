// import {  } from "./index.scss";

// create component
var nav = {
    template: `
        <nav>
            <img :src=logoImg>
            <ul class='nav-options'>
                <li v-for='i in navList'>{{i.name}}</li>
            </ul>
        </nav>
    `,

    data: function(){
        return {
            logoImg: './img/logo.svg',
            navList: [
                {
                    name: 'Home'
                },
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
    }
};

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
                <div class="skill-wrap">
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
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            sectionColor: '#C93639',
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
            ]

        }
    },

    components: {
        'section-title': sectionTitle,
    }
};

var eachExperience = {
    template: `
        <div class="each-experience">
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
    `,
    props: ['logo', 'role', 'company','beginDate', 'endDate']
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
            experiences: [
                {
                    logo: './img/experience/tc.jpg',
                    role: 'Course Assistant',
                    company: 'Teachers College, Columbia University',
                    beginDate: '2018.09',
                    endDate: '2018.12',
                },
                {
                    logo: './img/experience/atos.png',
                    role: 'UX Designer',
                    company: 'Atos',
                    beginDate: '2018.05',
                    endDate: '2018.08',
                },
                {
                    logo: './img/experience/tc.jpg',
                    role: 'Web Developer',
                    company: 'Teachers College, Columbia University',
                    beginDate: '2018.03',
                    endDate: '2018.05',
                },
        
            ]
        }
    },
    components: {
        'section-title': sectionTitle,
        'each-experience': eachExperience,
    }
};

// education component
var eachEducation = {
    template: `
        <div class="each-education">
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
    props: ['school', 'degree', 'major', 'startDate', 'endDate']
};

var educationSection = {
    template: `
        <div class="education-section each-section" :style="{background: sectionColor}">
             <section-title :order=order :name=sectionName></section-title>
             <div class='section-content'>
                <each-education v-for='(i, index) in educations' :key=index v-bind='i'></each-experience>
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
        <div class="each-work" :style="{ 'background-image': 'url(' + img + ')'}">
            <div class='work-cover'>
                <div class="work-info-wrap">
                    <p class='work-name'>{{name}}</p>
                    <a :href='link'>View Project</a>
                </div>
            </div>
        </div>
    `,
    props: ['img', 'name', 'descrip', 'link'],
}

var progressBar = {
    template: `
        <div class='progress-out' ref='progressBar'>
            <div class="progress-in" :style="{width: (viewLength/totalLength) * 100 + '%', left: ((15 - scrolledDistance) / progressBarLength) * 100 + '%'}"></div>
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
            console.log(scrolledDistance)
        }
    },
    mounted(){
        let width = this.$refs.progressBar.getBoundingClientRect().width;  
        this.progressBarLength = width;
    }
}

var workSection = {
    template: `
        <div class="work-section each-section" :style="{background: sectionColor}" ref='currentSection'>
             <section-title :order=order :name=sectionName></section-title>
             <div class='section-content' ref='works'>
                <each-work v-for='(i, index) in works' :key=index v-bind='i'></each-work>
             </div>
             <progress-bar :totalLength=allWorkLength :viewLength=viewLength :scrolledDistance=scrolledDistance></progress-bar>
        </div>
    `,

    data: function(){
        return {
            sectionColor: '#F5F5F5',
            order: '04',
            sectionName: 'Portfolio',
            works: [
                {
                    name: 'Atos Style Guide',
                    link: 'https://sy2729.github.io/style-guide-atos/style-guide.html',
                    img: 'https://z1.muscache.cn/im/pictures/3fabaa30-4aff-49c5-9ee4-2eb96d149886.jpg?aki_policy=large',
                    descrip:'xxxxxxxx',
                },
                {
                    name: 'Work 2',
                    link: 'https://sy2729.github.io/style-guide-atos/style-guide.html',
                    img: 'https://z1.muscache.cn/im/pictures/fd5fb67e-9cdc-4111-b8e6-373727c75669.jpg?aki_policy=large',
                    descrip:'xxxxxxxx',
                },
                {
                    name: 'work 3',
                    link: 'https://sy2729.github.io/style-guide-atos/style-guide.html',
                    img: 'https://z1.muscache.cn/im/pictures/d254f055-afbf-466f-ad24-28e1f678671d.jpg?aki_policy=x_large',
                    descrip:'xxxxxxxx',
                },
                
            ],
            allWorkLength: 0,
            viewLength: 20,
            scrolledDistance: 0,
        }
    },
    methods: {
        detectScrollDistance(){
            value = document.querySelectorAll('.each-work')[0].getBoundingClientRect().left;
            this.scrolledDistance = value;
        }
    },
    components: {
        'section-title': sectionTitle,
        'each-work': eachWork,
        'progress-bar': progressBar,
    },
    mounted(){
        // get alllength and view length of the work
        let allLength = this.$refs.works.scrollWidth;
        let viewLength = this.$refs.currentSection.getBoundingClientRect().width;
        this.viewLength = viewLength;
        this.allWorkLength = allLength;

        // watch the work scroll
        this.$refs.works.onscroll = this.detectScrollDistance;

    }
}


// initialize Vue
new Vue({
    el: "#app",
    data: {

    },

    methods: {

    },

    computed: {

    },

    components: {
        'cv-nav': nav,
        'skill-section': skillSection,
        'experience-section': experienceSection,
        'education-section': educationSection,
        'work-section': workSection,
    }
})