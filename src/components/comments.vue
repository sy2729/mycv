<template>
<div class="component-wrap p-t-3 p-b-3">
  <div class="comment-wrap">
    <h2>{{langSet.commentBoard}}</h2>
    <div class="loadng relative" v-if="comments.length === 0">
      loading...
    </div>
    <div class="comments" v-else>
      <ul>
        <li class="each-comment relative m-1 p-1" v-for="i in comments" :key=i._id>
          <p>
            <span class="m-r-1 name">{{i.name}}</span>
            <!-- <span>{{i.email}}</span> -->
          </p>
          <p class="time">{{timeConvert(i.created)}}</p>
          <p class="m-t-1">
            {{i.content}}
          </p>
        </li>
        <li :class="['each-comment', 'relative', 'm-1', 'p-1', 'pointer', 'loadMsgPrompt', {'time': langSet.loadMoreMsg === langSet.loadMoreMsgEnd}]" @click="loadMore">
          {{langSet.loadMoreMsg}}
        </li>
      </ul>
    </div>

    <button class="reveal-button m-t-1 m-b-3" @click="showForm" v-if="!formShow">{{langSet.commentPromptButton}}</button>
    <form class="comment-form m-t-3" v-if="formShow" @submit="submitComment" ref="form">
      <div>
        <label for="name">
          <input name="name" class="m-r-1 m-t-1" type="text" :placeholder="langSet.namePlaceholder">
        </label>
        <label for="email">
          <input name="email" type="text" class="m-t-1" :placeholder="langSet.emailPlaceholder">
        </label>
      </div>
      <div>
        <textarea class="m-t-1" name="content" id="" cols="30" rows="10" :placeholder="langSet.contentPlaceholder"></textarea>
      </div>
      <div class="flex flex-wrap">
        <input type="text" name="code" class="m-r-1 m-t-1" :placeholder="langSet.codePlaceholder">
        <div class="code pointer m-t-1" v-html="code" @click="fillCode"></div>
      </div>
      <input class="m-t-1" type="submit" :value='langSet.submit'>
    </form>
  </div>
</div>
</template>

<script>
import { getComments, postComments, getCode } from "@/api";
import moment from "moment";
import '../assets/form.scss';

export default {
  data(){
    return {
      formShow: false,
      limit: 7,
      currentPage: 0,
      comments: [],
      code: null,
      // loadMoreMsg: 'Load More',
      langSet: {
        // commentBoard: "Comment Board",
        // commentPromptButton: "Leave your comment",
        // loadMoreMsg: 'Load More',
        // loadMoreMsgEnd: 'No More Comments',
        // namePlaceholder: 'name',
        // emailPlaceholder: 'email',
        // contentPlaceholder: 'I just wanna say...',
        // codePlaceholder: "enter the code",
        // submit: "submit"
      }
    }
  },
  props: ['currentLanguage'],
  watch:{
    currentLanguage(a,b) {
      console.log(a);
      this.importLangSet(a)
    }
  },


  created(){
    getComments({from: this.currentPage, num: this.limit})
      .then((data)=>{
        // console.log(data)
        this.comments = data;
      })

    //import Language JSON
    this.importLangSet(this.$props.currentLanguage)
    
  },

  methods: {
    timeConvert(time) {
      return moment(new Date(time)).format('MMMM Do YYYY, h:mm:ss a')
    },
    submitComment(e){
      e.preventDefault();
      let form = this.$refs.form;
      let content = form.content.value;
      let name = form.name.value;
      let email = form.email.value;
      let code = form.code.value;
      if (content && name && email && code) {
        postComments({name, email, content, code})
        .then((data)=>{
          // console.log(data)
          if(data.code === 0) { //if the code is not correct
            this.fillCode();
            this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Error',
              text: data.msg
            });  
          }else {//post successfully
            this.comments.push(data)
            this.clearForm()
          }
        })
        .catch(e=>{
          console.log('error')
          console.log(e)
        })
      }else {
        //alert
      }
      
    },
    clearForm(){
      let form = this.$refs.form;
      form.content.value = '';
      form.name.value = '';
      form.email.value = '';
      this.formShow = false;
    },
    showForm(){
      this.formShow = true;
      this.fillCode();
    },
    fillCode(){
      getCode()
        .then(data=>{
          this.code = data
        })
    },
    loadMore(){
      this.currentPage += 1 * this.limit
      getComments({from: this.currentPage, num: this.limit})
        .then((data)=>{
          if(data.length > 0) {
            data.forEach(e=>{
              this.comments.push(e);
            })
          }else {
            this.langSet.loadMoreMsg = this.langSet.loadMoreMsgEnd;
          }
        })
        .catch(e=>{
          this.$notify({
              group: 'foo',
              type: 'error',
              title: 'Error',
              text: 'something wrong happened'
            });
        })
    },
    importLangSet(lang){
      import(`../lang/${lang}.json`)
        .then(data=>{
          this.langSet = Object.assign({},this.langSet, data)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .loadMsgPrompt {color: $theme;}
  .time {color: #4D4D4D;}
  p, h2, span, li {color: #A6A6A6;}
  .reveal-button {width: 250px;padding: 10px 15px;}
  .component-wrap {background: #242424; width: 100%;}
  .code {background: #fff;}
  .comment-wrap {
    width: 50%;
    margin-left: auto;
    margin-right: auto;

    .each-comment {
      list-style: none;
      margin-left: 0;
      padding-left: 0;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 40%;
        height: 1px;
        background: #2F2F2F;
      }

      .name {text-transform: capitalize;}
    }

    @media screen and (max-width: 600px) {
      width: 90%;

      form {
        input[type="submit"] {
          width: 100%;
        }
      }
    }
  }
</style>


