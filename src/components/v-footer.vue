<template>
    <footer class="sticky" :style="{background: sectionColor}">
            <div class="footer-content w-100 flex justify-center align-center">
                <p>Get in touch with me!<a class="contact-button" :href="'mailto:' + email">Click Here</a></p>
            </div>
            <div class="footer-footer flex justify-space-around align-center relative">
                <ul class="social-media flex">
                    <li v-for='(i, index) in media' :key='index'><a target='_blank' :href='i.link'>{{i.name}}</a></li>
                </ul>

                <img :src=logoImg>

                <p class='creat-stamp'>&copy; 2018-2019</p>

                <div class="credit-sign absolute flex align-center justify-center pointer" @click='openCredit'>?</div>
                <transition name='jump'>
                    <credit-widget v-if="creditOpened" @closeWidget=closeWidget></credit-widget>
                </transition>

            </div>
    </footer>
</template>

<script>
import creditWidget from './basic/credit-widget';

export default {
    name: 'vFooter',
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
        creditWidget,
    }
}
</script>

<style lang="scss" scoped>
    footer {
        top: -210px;
        z-index: 4;
        .footer-content {
            height: 210px;
            color: #f4f4f4;
            
            p {
                font-size: 1.2em;

                a {
                    color: inherit;
                    padding: 10px 15px;
                    background: $theme;
                    background-image: linear-gradient(-226deg, #B52B28 0%, #CA4B48 31%, #BA423F 100%);
                    border-radius: 25px;
                    margin-left: 10px;
                }
            }
        }

        .footer-footer {
            color: #A0A0A0;
            height: 60px;
            background: #1D1D1D;

            .social-media {
                li {
                    margin: 0 10px;
                    list-style: none;

                    a {
                        color: inherit;
                        text-decoration: none;
                    }
                }
            }

            img {
                width: 30px;
            }

            .creat-stamp {
                text-transform: uppercase;
            }

            .credit-sign {
                height: 15px;
                width: 15px;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                border-radius: 50%;
                background: #A0A0A0;
                color: #1D1D1D;
                font-size: 13px;
            }
        }
    }
</style>

