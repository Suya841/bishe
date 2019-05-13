<template>
  <div class="container about">
    <!-- <div class="head"> -->
      <headmenu></headmenu>
    <!-- </div> -->
    <!-- <div class="top" @click="toTop">
      <a><i class="el-icon-upload2"></i></a>      
    </div> -->
    <top></top>

    <div class="contant">

        <div class="leftImg">
            <img :src="goodsList[6].imgSrc" />
        </div>
        <div class="detail">
            <div class="detail-item">
              <h2>{{goodsDetail[0].title}}</h2>
              <p>{{goodsDetail[0].detail}}
              </p>
              <el-button>收 藏</el-button>
            </div>
            <div class="detailLikes">
              <h2>About Me</h2>
              <span>Adobe Illustrator</span>
                <el-progress :percentage="2" color="#17bed2"></el-progress>
              <span>Adobe Illustrator</span>
                <el-progress :percentage="70" color="#17bed2"></el-progress>
              <span>Adobe Illustrator</span>
                <el-progress :percentage="80" color="#17bed2"></el-progress>
            </div>
        </div>
    </div>

        <div class="content-lg">
      <el-row>
          <el-col :span="14">
             <div class="content-left">
               <h3>Why Choose Us?</h3>
               <p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
               <el-button type="primary">EXPLORE</el-button>
             </div>
          </el-col>
          <el-col :span="10" >
            <div class="content-right">
                <el-collapse v-model="activeNames" @change="handleChange" :accordion="true">
                  <el-collapse-item title=" Exceptional Frontend Framework" name="1">
                    <p>拆除了原有分隔暗厅和厨房的墙和卫生间的部分隔断，把整个厨房空间和卫生间的洗漱空间开放出来，
                      和原来的门厅连餐桌，功能丰富的同时最大程度上保证空间感；
                    </p>
                  </el-collapse-item>
                  <el-collapse-item title="Twoooo" name="2">
                    <p>由于老房子的卫生间的管道导致了地面抬高，所以我们在连接卫生间和门厅的地方整体做了一步台阶并嵌入了灯带设计；</p>
                  </el-collapse-item>
                  <el-collapse-item title="Threeeee" name="3">
                    <p>简化流程：设计简洁直观的操作流程；把原有的生活阳台划为卫生间的一部分，作为独立的淋浴区使用；</p>
                  </el-collapse-item>
                  <el-collapse-item title="Foruuuuu" name="4">
                    <p>拆除了部分阳台的墙体和原有的窗户，把阳台打造成一个小型的休闲书房；</p>
                  </el-collapse-item>
                </el-collapse>
            </div>
          </el-col>
      </el-row>
    </div>


    <div class="masonry-grid">
      <div class="masonry-grid-item" v-for="(i,idx) in goodsList" :key="idx">
        <div class="masonry-grid-infor">
          <h2>{{i.title}}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing 
            elit sed tempor incididunt ut laboret dolore magna 
            ut consequat siad esqudiat dolor</p>
        </div>
        <div class="masonry-grid-img">
          <img :src='i.imgSrc'>
        </div>
      </div>
    </div>

    <div class="experience">
        <div class="service" @mouseover="mouseover" @mouseout="mouseout" v-for="i in 4" :key="i">
            <div class="service-element"  v-bind:class="{'show-item':showIndex == hide}">
              <i class="el-icon-edit" ></i>
            </div>
            <div class="service-infor" v-bind:class="{'show-infor':showIndex == hide}">
              <h3>Illustrator{{i}}</h3>
              <p>Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
            </div>
        </div>
    </div>

    <div class="work">
        <div class="work-head">
            <h2>Latest Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit 
              sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
        </div>
        <div class="work-row">
          <div class="work-col" v-for="i in 3" :key="i">
                <div class="work-img-responsive">
                  <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644688314,501390901&fm=26&gp=0.jpg" >
                </div>
                <el-row>
                   <h4>Triangle Roof</h4>
                </el-row>
                <div >
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing
                     elit sed tempor incdidunt ut laboret dolor magna 
                     ut consequat siad esqudiat dolor</p>
                    <a >READ MORE <span class="hyphen"></span></a> 
                </div>
          </div>
            
        </div>
    </div>



    <foote></foote>

  </div>
</template>

<script>
import headmenu from '../../components/head'
import foote from '../../components/mfooter'
import top from '../../components/top'
export default {
  name: "",
  components: {
    headmenu,
    foote,
    top
  },
  data() {
    return {
      hide: '1',
      showIndex: 'hide',
      activeNames: ['1'],
      goodsList: [{}],
      goodsDetail: []
    };
  },
  mounted() {
    this.getData()
    this.getDetail()
  },
  methods: {
    getData() {

        let args = {
          id : 0
        }

        this.$ajax.post('/api/goods/list',args)
        .then((res) => {
          console.log(res.data);
          this.goodsList = res.data.data
        })

    },
    getDetail () {
        let args = {
          PID: 1
        }

        this.$ajax.post('/api/goods/detail',args)
        .then((res) => {
          this.goodsDetail = res.data.data
        })
    },
    mouseover() {
      this.hide = 'hide'
    },
    mouseout() {
      this.hide = '1'
    },
    handleChange () {

    }
  }
};
</script>

<style lang="less">
//  @padd: 333px;
@padd: 16%;

.keyframes (@prefix,@name,@content) when (@prefix=def) {
  @keyframes @name {
    @content();
  }
}
.keyframes (@prefix,@name,@content) when (@prefix=moz) {
  @-moz-keyframes @name {
    @content();
  }
}
.keyframes (@prefix,@name,@content) when (@prefix=o) {
  @-o-keyframes @name {
    @content();
  }
}
.keyframes (@prefix,@name,@content) when (@prefix=webkit) {
  @-webkit-keyframes  @name{
    @content();
  }
}
.keyframes (@prefix,@name,@content) when (@prefix=all) {
  .keyframes(moz,@name,@content);
  .keyframes(o,@name,@content);
  .keyframes(webkit,@name,@content);
  .keyframes(def,@name,@content);
}


.keyframes(all,fadein,{
   0%{opacity:0;}
   25%{opacity: .2;}
   45%{opacity: .4;}
   60%{opacity: .6;}
   75%{opacity: .8;}
   85%{opacity: .9;}
   100%{opacity:1;}
});

html,
body {
  padding: 0;
}

body {
  transition: scroll 1s;
}

.container {
  //  width: 76%;
  //  background-color: #783793;
   height: 100%;
   margin: 10px auto;
   background-color: #fff;
}

.about {
  padding: 0;
  animation: fadein .6s;
  -moz-animation: fadein .6s;
  -webkit-animation: fadein .6s;
  -o-animation: fadein .6s;
  // transition: all 1s;
  h1,h2,h3,h4,h5, span {
        color: #515769;
      }
      p {
        color: #a6a7aa;
      }
      a {
        color: #81848f;
        font-weight: 560;
        cursor: pointer;
      }
  #title {
        z-index: 999999;
        position: fixed;
  }


  .content-lg {
    padding: 93px @padd;
    background-color: #fafafa;
    .content-left {
      padding-right: 16%;
        .el-button {
          background-color: #515769;
          border: none;
          margin: 33px 6px;
          span {
            color:white;
          }
        }
        .el-button:hover {
          background: #17bed2;
          transition: all .6s;
        }
    }


    .content-right {
      .el-collapse {
        // background-color: #387467;
          border: none;

        .el-collapse-item {
          background-color: #fff;
          border: none;
          margin: 16px;
          padding: 16px;
          box-shadow: 2px 3px 11px #abacb1;
          .el-collapse-item__header {
            border: none;
            color: #515769;
            font-size: 15px;
            font-weight: 600;

          }
          .el-collapse-item__wrap {
            border: none;
            // background-color: #17bed2;

          }
        }
      }
    }
    

  }
  
  .masonry-grid {
    padding: 33px @padd;
    position: relative;
    column-count: 3;
    column-gap: 30px;
    .masonry-grid-item {
      // width: 30%;
      margin: 16px;
      .masonry-grid-img {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }

  .work {
    padding: 33px @padd;
    .work-head {
      width: 66%;
    }
    .work-row {
      display: flex;
      justify-content: space-between;
      .work-col {
        display: inline-block;
        width: 31%;
        padding: 23px 11px;
        a {
          font-size: 14px;
          .hyphen {
            display: inline-block;
            background-color: rgb(23, 190, 210);
            height: 2px;
            width: 10px;
            margin: 4px 6px;
          }
        }
        .work-img-responsive {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  

  .contant {
    padding: 93px @padd;
    display: flex;
    flex-direction: row;
    .leftImg  {
      width: 393px;
      height: 533px;
      margin: 10px;
      img {
        width: inherit;
        height: inherit;
      }

    }

    .detail {
      margin-left: 30px;
      
      .detail-item {
        padding-bottom: 26px;
        margin-bottom: 26px;
        border-bottom: 1px solid #515769;
        .el-button {
          background-color: #f3f4f5;
          border: none;
          padding: 16px 50px;
          margin: 6px 0;
          font-weight: 600;
          &:hover {
            background-color: #17bed2;
            span {
              color: white;
            }
            transition: all 1s;
          }
        }

      }
      .detailLikes {
        padding: 0 20px;
        margin-bottom: 30px;
        .el-progress {
          width: 86%;
          margin: 16px 0;
          position: relative;
          .el-progress__text {
            color:#515769;
            position: absolute;
            top: -29px;
            left: 80%;

          }
        }

      }
    }
  }

  .experience {
    background-color: #fafafa;
    padding: 63px @padd;
    display: flex;
    justify-content: space-between;
    .service {

      &:nth-child(2) {
        background-color: #515769;
        .service-element {
              color: white;
        }
        .service-infor {
          h3,p {
            color: white;
          }
         }
      }
      width: 18%;
      height: 133px;
      display: inline-block;
      padding: 56px 33px;
      position: relative;
     .show-item {
       position: absolute;
       transition: all .1s linear;
       color: transparent!important;
       top: -3px!important;
     }
      .service-element {
      position: absolute;
      font-size: 23px;
      transition: all .4s;
      top: 33px;
      color: #515769;
      }

      .show-infor {
        position: absolute;
        transition: all .3s linear;
        top: 30px!important;
      }
      .service-infor {
        position: absolute;
        transition:  all .3s linear;
        top: 69px;
      }

      
    
    }
  }


}
</style>  