import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        workTypes: ['all', 'web', 'design', 'video'],
        files: {
            dev: {
                zh: 'data_zh',
                en: 'data_en',
            },
            pm: {
                zh: 'data_pm_zh',
                en: 'data_pm_en'
            }
            // ...
        },
        cvData: {},
        currentLanguage: undefined,
    },
    getters: {
        cvData: state => {return state.cvData}
    },
    mutations: {
        importData(data, fileContent){
            if(this.state.currentLanguage === 'en') {
                import(`@/mock-data/${fileContent['en']}.js`).then((e) => {
                     this.state.cvData = e.cvData;
                })
            }else {
                import(`@/mock-data/${fileContent['zh']}.js`).then((e) => {
                    this.state.cvData = e.cvData;
               })
            }
        },

    },

    actions: {
        judgeSystemLanguage(context, data) {
            var type = navigator.appName;
            if (type == "Netscape") {
                var lang = navigator.language;//获取浏览器配置语言，支持非IE浏览器
            } else {
                var lang = navigator.userLanguage;//获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
            };
            var lang = lang.substr(0, 2);//获取浏览器配置语言前两位
            if (lang == "zh") {
                this.state.currentLanguage = 'zh';
            } else {
                this.state.currentLanguage = 'en';
            }
            let fileContent = this.state.files[data];
            context.commit('importData', fileContent);
        },

        switchLanguage(context, data){
            let {language, route_name} = data;
            this.state.currentLanguage = language;
            let fileContent = this.state.files[route_name];
            context.commit('importData', fileContent);
        }
    }
})