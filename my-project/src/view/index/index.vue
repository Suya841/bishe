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
            <el-dropdown-item command="login"><i class="el-icon-menu"></i>登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="coverflow" style="visibility: visible" ref="bian">
        <div class="long coverflow-holder" style="transform: translate3d(-139px,0px,0px)" ref="gun">
          <ul class="coverflow__images">
            <li
            v-for="(item,index) in photoClass" :key="item.id"
            class="coverflow__image"
            v-bind:style="{backgroundColor: item.bgColor}"
            @mouseover="enter(item)"
            @mouseleave="out(item)"
          >
            <a @click="detailPage">
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
      screenWidth: document.body.clientWidth,
      elWidth: 0,
      bgColor: '',
      showIndex: -1,
      showFade: false,
      changeWidth: 'calc(65vh * 21 / 29.7)',
      index: 0,
      photoClasslength: 0,
      inHeight: document.documentElement.clientHeight,
      photoClass: []
      // photoClass: [
      //   {
      //     id: 0,
      //     // imgSrc: 'http://img2.imgtn.bdimg.com/it/u=549403656,1051390214&fm=26&gp=0.jpg',
      //     bgColor: '#344447',
      //     title: 'Ueda Tatsuya',
      //     href: ''
      //   },
      //   {
      //     id: 1,
      //     // imgSrc: 'http://img0.imgtn.bdimg.com/it/u=1695338843,625967257&fm=26&gp=0.jpg',
      //     bgColor: '#878787',
      //     title: 'Nakamaru Yuichi',
      //     href: ''
      //   },
      //   {
      //     id: 2,
      //     // imgSrc: 'http://img3.imgtn.bdimg.com/it/u=1528278318,1576433799&fm=26&gp=0.jpg',
      //     bgColor: '#aa3434',
      //     title: 'Ueda Tatsuya',
      //     href: ''
      //   },
      //   {
      //     id: 3,
      //     imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2604471531,828309643&fm=26&gp=0.jpg',
      //     bgColor: '#c3a182',
      //     title: 'Kamenashi Kazuya',
      //     href: ''
      //   },
      //   {
      //     id: 4,
      //     // imgSrc: 'http://img0.imgtn.bdimg.com/it/u=1463080326,3271525510&fm=26&gp=0.jpg',
      //     bgColor: '#e4544a',
      //     title: 'Akanishi Jin',
      //     href: ''
      //   },
      //   {
      //     id: 5,
      //     imgSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=901491739,4077729798&fm=26&gp=0.jpg',
      //     bgColor: '#778d9b',
      //     title: 'Taguchi Junnosuke',
      //     href: ''
      //   },
      //   {
      //     id: 6,
      //     imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=681381804,3579575908&fm=26&gp=0.jpg',
      //     bgColor: '#244b67',
      //     title: 'Tanaka Koki',
      //     href: ''
      //   },
      //   {
      //     id: 7,
      //     imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=681381804,3579575908&fm=26&gp=0.jpg',
      //     bgColor: '#b55243',
      //     title: 'Kanmenashi Kazuya',
      //     href: ''
      //   },
      //   {
      //     id: 8,
      //     // imgSrc: 'http://img0.imgtn.bdimg.com/it/u=1526489120,3313435496&fm=26&gp=0.jpg',
      //     bgColor: '#e6d7c3',
      //     title: 'Kanmenashi Kazuya',
      //     href: ''
      //   },
      //   {
      //     id: 9,
      //     imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=681381804,3579575908&fm=26&gp=0.jpg',
      //     bgColor: '#efbaae',
      //     title: 'Kanmenashi Kazuya',
      //     href: ''
      //   },
      //   {
      //     id: 10,
      //     imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=681381804,3579575908&fm=26&gp=0.jpg',
      //     bgColor: '#6681a3',
      //     title: 'Kanmenashi Kazuya',
      //     href: ''
      //   },
      //   {
      //     id: 11,
      //     imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=681381804,3579575908&fm=26&gp=0.jpg',
      //     bgColor: '#e0bda1',
      //     title: 'Kanmenashi Kazuya',
      //     href: ''
      //   }
      // ]
    }
  },
  mounted () {
    let that = this
    this.$nextTick(function () {
      // console.log('eee')
      that.elWidth = that.$refs.gun.clientWidth // 父元素的宽度
    })
    window.addEventListener('resize', this.handle, true)
    // window.addEventListener('mousewheel', this.mouse, true)
    this.photoClasslength = this.photoClass.length
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
          console.log(res.data);
          this.photoClass = res.data.data
        })

    },
    target(command) {
        this.$router.push({name:command})
    },
    enter (e) {
      this.$refs.hello.style.backgroundColor = e.bgColor
      this.showIndex = e.id
    },
    out (e) {
      this.showIndex = -1
    },
    handle () {
      window.fullHeight = document.documentElement.clientHeight
      this.inHeight = window.fullHeight
      this.elWidth = this.$refs.gun.clientWidth
    },
    mouse () {
      console.log('aaa===')
    },
    test () {
      let i = this.befor()
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
      this.$refs.bian.style.transform = 'translate3d(' + this.l + 'px,0px,0px)'
      this.$refs.bian.style.transition = 'all 1s ease'
      this.$refs.hello.style.backgroundColor = this.photoClass[this.index].bgColor
    },
    detailPage () {
        this.$router.push({
          name: 'goods'
        })
    },
    befor (e) {
      e = e || window.event
      let ca = this.elWidth - this.screenWidth
      let cl = Math.abs(this.l)
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
        } else if (e.detail < 0 < 0 && cl < ca) {
          // 当滑轮向下滚动时
          this.l -= 160
          return 1
        }
      }
    }
  }
}
</script>
