<template>
  <div id="title">
    <div class="img" @click="tatget">
      <img src="../../static/image/title.png" >
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="goHome">首页</el-menu-item>
      <el-menu-item index="2" @click="user">个人中心</el-menu-item>
      <el-menu-item index="3" @click="login">登录</el-menu-item>
      <el-menu-item index="3" @click="tatget">分类</el-menu-item>
      <el-menu-item index="4">广场</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goHome () {
      this.$router.push({
        name: 'index'
      })
    },
    login () {
      this.$router.push({name:'login'})
      document.documentElement.scrollTop = 0
    },
    user () {
      this.$router.push({name:'user'})
      document.documentElement.scrollTop = 0
    },
    tatget () {
      this.$router.push({name:'classify'})
      document.documentElement.scrollTop = 0
    }
  }
};
</script>

<style lang="less">
#title {
    position: relative;
    height: 76px;
    top: 0;
    width: 100%;
    left: 0;
    background-color: white;
    border-bottom: 1px solid #e6e6e6;
    .img {
        cursor: pointer;
        margin: 13px;
        width: 113px;
        height: 53px;
        position: absolute;
        left: 363px;
        z-index: 999;
        img {
            height: inherit;
            width: inherit;
            
        }
    }

    .el-menu--horizontal>.el-menu-item.is-active {
       border-bottom: 2px solid #17bed2;
       color: #303133;
      }

    .el-menu-demo {
        

        border: none;
        top:0px;
        left: 63%;
        height: 76px;
        .el-menu-item, .el-submenu .el-submenu__title{
          height: 100%;
          line-height: 76px;
          color: #929292;
          font-size: 16px;
          font-weight: 400;
          text-transform: capitalize;
          position: relative;
        }

    }
}
</style>