<template>
<div id="goTop">
    <div class="top" @click="toTop">
      <a><i class="el-icon-upload2"></i></a>      
    </div>
</div>
    
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            toTop () {
                let timer = null;
                timer = setInterval(() => {
                  let osTop = document.documentElement.scrollTop || document.body.scrollTop
                  let ispeed = Math.floor(-osTop / 5)
                  document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
                  // this.isTop = true
                  if (osTop === 0) {
                    clearInterval(timer)
                  }
                }, 56);
            }
        }
    }
</script>

<style lang="less">
#goTop {
    .top {
        width: 42px;
        height: 42px;
        background-color: #b6b9c0;
        position: fixed;
        top: 88%;
        right: 0;
        z-index: 999;
        border-radius: 4px;
        &:hover {
          background-color: #515769;
          transition: all .4s;
        }
        a {
          width: 100%;
          height: 100%;
          display: inline-block;
          color: white;
          font-size: 26px;
          text-align: center;
          line-height: 42px;
        }
    }
}
</style>