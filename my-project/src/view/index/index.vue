<style lang="less">
@import '../../../static/css/styleDesktop.less'; 
</style>

<template>
  <div id="hello" @mousewheel="test" ref="hello" :style="{height: this.inHeight +'px'}">
      <div class="indexTit">
        <el-dropdown @command="target">
             <div class="inbutton">
                  <i class="el-icon-menu"></i>
              </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="classify"><i class="el-icon-document"></i>分类</el-dropdown-item>
            <el-dropdown-item command="user" v-if="islogin =='isLogin'"><i class="el-icon-menu"></i>个人中心</el-dropdown-item>
            <el-dropdown-item command="login" v-else><i class="el-icon-menu"></i>登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="coverflow" style="visibility: visible" ref="bian">
        <div class="long coverflow-holder" style="transform: translate3d(-139px,0px,0px),min-width: 1200px" ref="gun">
          <ul class="coverflow__images">
            <li
            v-for="(item,index) in photoClass" :key="item.id"
            class="coverflow__image"
            v-bind:style="{backgroundColor: item.bgColor}"
            @mouseover="enter(item)"
            @mouseleave="out(item)"
          >
            <a @click="target('goods')">
            <div class="coverflow__image-title_container">
                <div v-bind:class="{'show-title':showIndex == index}" class="coverflow__image-title">
                  {{item.title}}
                </div>
              </div>
              <div class="coverflow__image-bg_container">
                <div class="coverflow__image-bg_container-rot">
                  <img
                    class="coverflow__image-bg"
                    :src="item.imgSrc"
                  />
                </div>
              </div>
            </a>
          </li>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
// import Title from '../../components/head'
export default {
  name: 'HelloWorld',
  // components: {
  //   Title
  // },
  data () {
    return {
      l: 0,
      tt: '',
      screenWidth: document.body.clientWidth,
      elWidth: this.$refs.gun,
      bgColor: '',
      showIndex: -1,
      showFade: false,
      changeWidth: 'calc(65vh * 21 / 29.7)',
      index: 0,
      photoClasslength: 0,
      inHeight: document.documentElement.clientHeight,
      photoClass: [],
      islogin: ''
    }
  },
  mounted () {
    // console.log('localStorage.flag==')
    // console.log(localStorage)
    this.islogin = localStorage.flag
    // let that = this
      setTimeout(() => {
        // console.log('eee')
        // console.log(that.$refs.gun)
        this.elWidth = this.$refs.gun.clientWidth // 父元素的宽度
        // console.log( this.elWidth)
      }, 1000);
      
       window.addEventListener('resize', this.handle, false)
    // window.addEventListener('mousewheel', this.mouse, true)
    this.$refs.hello.style.backgroundColor = '#fafafa'

    this.getData()
  },
  watch: {
      inHeight(val) {
        if(!this.timer) {
          this.inHeight = val
          this.timer = true
          let that = this
          setTimeout(function (){
            that.timer = false
          },400)
        }
      },
      elWidth(val) {
        if(!this.timee) {
          this.$refs.bian.style.transform = 'translate3d(0px,0px,0px)'
          this.timee = true
          let that = this
          setTimeout(function (){
            that.timee = false
          },400)
        }
      }
  },
  methods: {
    getData() {

        let args = {
          id : 0
        }

        this.$ajax.post('/api/goods/list',args)
        .then((res) => {
          // console.log(res.data);
          let data = res.data.data
          for (let i = 0; i < data.length; i++) {
            data[i].color = JSON.parse(data[i].color)
          }
          this.photoClass = data
          this.photoClasslength = this.photoClass.length

        })

    },
    target(command) {
      window.removeEventListener("resize", this.handle,false);
      let num = ''
      if (command == 'classify') {
        num = '2'
      }else if (command == 'user') {
        num = '3'
      } 

        this.$router.push({name:command,
        query: {
                 num: num
               }
        })
    },
    enter (e) {
      this.$refs.hello.style.backgroundColor = e.bgColor
      this.showIndex = e.id
    },
    out (e) {
      this.showIndex = -1
    },
    handle () {
      // console.log('clientHeight====')
      // console.log(document.documentElement)
      window.fullHeight = document.documentElement.clientHeight
      this.inHeight = window.fullHeight
      // console.log("??????")
      // console.log(this.$refs.gun)
      this.elWidth = this.$refs.gun.clientWidth
    },
    mouse () {
      console.log('aaa===')
    },
    test () {//滚轮事件
      // console.log('test====')
      let i = this.befor() //判断滚轮动作 计算范围动作是否生效
      if(!i) {
        return
      }
      if(!this.tt) {
        this.index += i
          this.tt = true
          let that = this
          setTimeout(function (){
            that.tt = false
          },400)
        }

      if (this.index >= this.photoClasslength - 1) {
        this.index = this.photoClasslength - 1
      }
      if(this.index <= 0) {
        this.index = 0
      }
      // console.log(this.index)
      // console.log(this.$refs.bian.style)
      // console.log('this.l====' + this.index)
      this.$refs.bian.style.transform = 'translate3d(' + this.l + 'px,0px,0px)'
      this.$refs.bian.style.transition = 'all 1s ease'
      this.$refs.hello.style.backgroundColor = this.photoClass[this.index].bgColor
    },
    befor (e) {
      e = e || window.event
      let ca = this.elWidth - this.screenWidth //元素宽度 屏幕宽度
      let cl = Math.abs(this.l) //滚动的长度
      ca = parseInt(ca / 100) * 100 - 123 // 移到最后一张时停止
      // console.log(ca)
      if (e.wheelDelta) {
        // 判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0 && this.l < 0) {
          // 当滑轮向上滚动时
          this.l += 100
          return -1
        } else if (e.wheelDelta < 0 && cl < ca) {
          // 当滑轮向下滚动时
          this.l -= 100
          return 1
        }
      } else if (e.detail) {
        // Firefox滑轮事件
        if (e.detail > 0 && this.l < 0) {
          // 当滑轮向上滚动时
          this.l += 160
          return -1
        } else if (e.detail < 0 && cl < ca) {
          // 当滑轮向下滚动时
          this.l -= 160
          return 1
        }
      }
    }
  }
}
</script>
