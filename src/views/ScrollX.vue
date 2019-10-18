<template>
  <div class="scrollInX">
    <div ref="scrollInX">
     <ul class="listWrap">
      <li v-for="item of list" class="listItem">
        <img :src="item.imgUrl" alt="" />
      </li>
    </ul>
    </div>
   
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        // list 列表
        list:[
          {imgUrl:require('../assets/logo.png')},
          {imgUrl:require('../assets/logo.png')},
          {imgUrl:require('../assets/logo.png')},
          {imgUrl:require('../assets/logo.png')},
          {imgUrl:require('../assets/logo.png')},
          {imgUrl:require('../assets/logo.png')},
        ],
        scrollX:0,
      }
    },
    methods: {
      _initScroll() {
        this.scrollBox = new BScroll(this.$refs.scrollInX,{
          probeType:3,
          scrollX:true,
        });
        this.scrollBox.on("scroll", pos => {
          this.scrollX = Math.abs(Math.round(pos.x));
        })
      },
    },
    mounted() {
      this.$nextTick(()=>{
        this._initScroll();
      })
      // console.log(BScroll);
    }

  }
</script>
<style lang="css" scoped>
  .scrollInX {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
  }
  ul.listWrap {
    list-style:none;
    width: 600px;
    display: flex;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0;
  }
  li.listItem {
    /* width: 100px; */
    flex:1;
  }
  li.listItem img {
    width: 100%;
    object-fit: cover;
  }
  
  

</style>