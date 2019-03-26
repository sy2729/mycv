

    let cvData = {
        header: {
            greeting: `Hello, I'm`,
            name: 'Shuai Yuan',
        },

        skills: {
            sectionName: 'Skills',
            description: `I’m passionate about Web Development and User Interface design, with close observation of the latest trends in those design fields. I have solid skills in creating design prototype through front-end development and proficiency of using design software. With my pursuit of aesthetic details, I am able to precisely communicate my idea and design thoughts with my clients and partners.`,
            allSkills: [
                {
                    name: 'HTML & CSS & JavaSCript',
                    extent: '80'
                },
                {
                    name: 'Sass / Parcel / Webpack',
                    extent: '70'
                },
                {
                    name: 'Node.js/Express',
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
                    name: 'Vue&Vuex / React',
                    extent: '70'
                },
            ],
        },
        

    }
    
    // cvData.works.allWorks.map((i, index)=>{
    //     i.id = index + 1;
    //     i.type = i.type.toLowerCase();

    //     if(i.type === 'video') {
    //         i.link.youtube = 'https://youtu.be/' + i.youtubeID;
    //         i.link.bili = 'https://www.bilibili.com/video/av' + i.biliID;
    //         let descript = i.descrip;
    //         descript.map((j)=>{
    //             if(j.type === 'video') {
    //                 j.content.youtube = 'https://www.youtube.com/embed/' + i.youtubeID;
    //                 j.content.bili = `//player.bilibili.com/player.html?aid=${i.biliID}`;
    //             }
    //         })
    //     }
    // })

    // cvData.badges.forEach((i)=>{
    //     i.url = './img/' + i.url + '.png';
    // })
    
export {cvData as cvData}