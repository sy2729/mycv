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
    <div class='section-title'>
        <p class="order">{{order}}</p>
        <p class="section-name">{{name}}</p>
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
        <section-title :order=order :name=sectionName></section-title>
        <div class='section-content'>
            <div class="content-description">{{description}}</div>
            <div class="skillBar"></div>
        </div>
    `,
    data: function(){
        return {
            order: '01',
            sectionName: 'Skills',
            description: 'lorem lopsium esf adeksm sdmamf emma da'
        }
    },

    components: {
        'section-title': sectionTitle,
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
    }
})