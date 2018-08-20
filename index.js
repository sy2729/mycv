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
}

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
}

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
}

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
    }
})