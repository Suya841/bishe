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
      <el-menu-item index="2" @click="tatget">分类</el-menu-item>
      <el-menu-item index="3" @click="user" v-if="islogin =='isLogin'">
        <div class="user">
          <img :src="headImg" alt="">
        </div>
      </el-menu-item>
      <el-menu-item index="4" @click="login" v-if="islogin !='isLogin'">登录</el-menu-item>
      <el-menu-item index="4" @click="loginOut" v-else>退出登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      activeIndex: "",
      islogin: '',
      headImg: ''
    };
  },
  created() {
    this.islogin = localStorage.flag
    if (this.islogin) {
      this.userInfo()
    }
  },
  mounted() {
      this.activeIndex = this.$route.query.num
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    userInfo() {
      let args = localStorage.user
      args = JSON.parse(args)
      this.$ajax.post('/api/user/userInfo',args)
      .then((res) => {
        let userDate = res.data.data[0]
        this.headImg = userDate.headImg
      })
    },
    goHome () {
      this.$router.push({
        name: 'index'
      })
    },
    login () {
      this.$router.push({name:'login',
      query: {
        num: '4'
      }})
      document.documentElement.scrollTop = 0
    },
    loginOut() {
      this.$message({
        message: '退出当前用户'
      });
      localStorage.removeItem("flag")
      this.$store.dispatch('logout')
      this.login()
    },
    user () {
      this.$router.push({
        name:'user',
        query: {
                 num: '3'
               }
        })
      document.documentElement.scrollTop = 0
    },
    tatget () {
      this.$router.push({
        name:'classify',
        query: {
          num: '2'
        }
      })
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

    .el-menu-item  {
        .user {
          width: 50px;
          height: 50px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
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