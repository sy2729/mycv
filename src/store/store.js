import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        workTypes: ['web', 'design', 'video'],
        files: {
            dev: {
                zh: 'data_zh',
                en: 'data_en',
            },
            pm: {
                zh: 'data_pm_zh',
                en: 'data_pm_en',
                mafengwo: {
                    zh: 'data_pm_mafengwo_zh',
                    en: 'data_pm_mafengwo_en',
                },
                aiqiyi: {
                    zh: 'data_pm_aiqiyi_zh',
                    // en: 'data_pm_mafengwo_en',
                },
                byteDance: {
                    zh: 'data_pm_byteDance_zh',
                    // en: 'data_pm_mafengwo_en',
                },
                bilibili: {
                    zh: 'data_pm_bilibili_zh',
                    // en: 'data_pm_mafengwo_en',
                },
                chaoyouai: {
                    zh: 'data_pm_chaoyouai_zh',
                    // en: 'data_pm_mafengwo_en',
                },

            },
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
            this.loopDataIn = (newD, oldD)=>{
                for(let key in oldD.base) {
                    if(!newD.cvData[key]) {
                        newD.cvData[key] = oldD.base[key];
                    }
                };
                return newD.cvData;
            }

            if(this.state.currentLanguage === 'en') {
                if(fileContent.en) {
                    // import the old data (base data)
                    import(`@/mock-data/${fileContent['en']}.js`).then((e) => {
                        // import the new data
                        import('@/mock-data/data_base_en.js').then((f)=>{
                            this.state.cvData = this.loopDataIn(e,f)
                        })
                   })
                }else {
                    this.state.currentLanguage = 'zh'
                    import(`@/mock-data/${fileContent['zh']}.js`).then((e) => {
                        import('@/mock-data/data_base_zh.js').then((f)=>{
                            this.state.cvData = this.loopDataIn(e,f)
                        })
                   })
                };
            }else {
                if(fileContent.zh) {
                    import(`@/mock-data/${fileContent['zh']}.js`).then((e) => {
                        import('@/mock-data/data_base_zh.js').then((f)=>{
                            this.state.cvData = this.loopDataIn(e,f)
                        })
                   })
                }else {
                    this.state.currentLanguage = 'en'
                    import(`@/mock-data/${fileContent['en']}.js`).then((e) => {
                        import('@/mock-data/data_base_en.js').then((f)=>{
                            this.state.cvData = this.loopDataIn(e,f)
                        })
                   })
                }
            }
        },

        analyseRoute(data, routeData){
            let fileContent;
            
            let route = routeData.split('/')
            if (route.length <= 1){
                fileContent = this.state.files[route[0]];
            }else {
                route.shift();
                fileContent = this.state.files;
                route.forEach((i)=>{
                    fileContent = fileContent[i];
                })
            }
            this.state.fileContent = fileContent;
            // return fileContent
        }

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

            // console.log(data)
            context.commit('analyseRoute', data)
            context.commit('importData', this.state.fileContent)
        },

        switchLanguage(context, data){
            let {language, route_name} = data;
            this.state.currentLanguage = language;

            context.commit('analyseRoute', route_name);
            context.commit('importData', this.state.fileContent);
        }
    }
})