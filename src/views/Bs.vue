<template>
  <div>
    <div class="left">
      <ul>
        <li v-for=""></li>
      </ul>
    </div>
    <div class="right">
      <div v-if="isreFresh">刷新...</div>
      <scrolldiv
        class="wrapper"
        :data="data"
        :pulldown="pulldown"
        :pullup="pullup"
        @scrollToEnd="loadMore"
        @pulldown="loadData"
      >
        <ul class="content">
          <li v-for="item in data">{{item}}</li>
        </ul>
        <div class="loading-wrapper"></div>
      </scrolldiv>
      <div v-show="isloadMore">加载更多...</div>
      <!-- <div @click="loadData">12314314141111111111</div> -->
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import scrolldiv from "../components/Scroll.vue";
export default {
  components: {
    scrolldiv
  },
  data() {
    return {
      data: [],
      pno: 0,
      pulldown: true,
      pullup: true,
      // 下拉刷新状态(自定义,非bs组件参数)
      isreFresh: false,
      isloadMore: false
    };
  },
  created() {
    this.loadData();
    // this.loadData()
  },
  methods: {
    loadData() {
      this.axios.get("/").then(res => {
        this.data = res.data.concat(this.data);
      });
      this.isreFresh = true;
      setTimeout(() => {
        this.isreFresh = false;
      }, 1000);
    },
    loadMore() {
      this.pullup = false;
      this.pno++;
      console.log(this.pno);
      let pno = this.pno;
      let data = null;
      this.axios.get("/", { params: { pno } }).then(res => {
        data = this.data.concat(res.data);
      });
      this.isloadMore = true;
      setTimeout(() => {
        this.isloadMore = false;
        this.data = data;
        this.pullup = true;
      }, 2000);
    }
  },
  mounted() {
    // console.log(this.loadData);
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.content {
}
.content li {
  width: 100%;
  height: 700px;
  background: pink;
  overflow: hidden;
}
</style>