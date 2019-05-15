<template>
  <div id="perCenter">
    <headmenu></headmenu>
    <top></top>
    <div class="upPage">
      <div class="upPage-up">
        <div class="upPage-ue">
          <!-- <img src="http://img2.imgtn.bdimg.com/it/u=1960548875,2286028701&fm=26&gp=0.jpg">
                    <div class="ue">
                        <div>
                            <ul>
                                <li><p>人气</p></li>
                                <li>0</li>
                            </ul>
                            <span class="hyphen"></span>
                             <ul>
                                <li><p>人气</p></li>
                                <li>0</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><p>人气</p></li>
                                <li>0</li>
                            </ul>
                            <span class="hyphen"></span>
                             <ul>
                                <li><p>人气</p></li>
                                <li>0</li>
                            </ul>
                        </div>
          </div>-->
        </div>
      </div>
      <div class="upPage-na">
        <div class="self-photo">
          <img :src="userInfo.headImg">
        </div>
        <div class="self-name">
          <span>{{userInfo.name}}</span>
        </div>
        <div class="self-set">
          <i class="el-icon-setting"></i>
          <!-- <el-button icon="el-icon-setting"></el-button> -->
        </div>
        <div class="ue">
          <div>
            <ul>
              <li>
                <p>32</p>
              </li>
              <li>粉丝</li>
            </ul>
            <span class="hyphen"></span>
            <ul>
              <li>
                <p>7</p>
              </li>
              <li>关注</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="shoPage-center">
      <el-tabs class="tabs">
        <ElTabPane label="首页" class="shoPage">
          <div class="centerPage-down">
            <div class="centerPage-left">
                <div class="left-title">她的关注（7）</div>
                <div class="left-cont">
                    <div class="left-user" v-for="(item,key) in reContent" :key="key">
                        <div class="img">
                            <img :src="item.headImg" alt="">
                        </div>
                        <div class="name">
                            <div>{{item.name}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="centerPage-right">
              <el-row>发布动态</el-row>
              <el-row>
                <el-form :model="upform">
                  <el-form-item>
                    <el-input type="textarea" placeholder="请输入内容" :autosize="{ minRows: 4, maxRows: 10}" v-model="upform.text"></el-input>
                  </el-form-item>
                  <div class="icon">
                    <div class="ico" @click="showEmoji = !showEmoji">
                      <div class="iconImg">
                        <img src="http://i2.bvimg.com/686721/8dda6a5ad3798686t.jpg" alt>
                      </div>
                      <p>表情</p>
                    </div>
                    <div class="icupload">
                      <uploader
                        @getFiles="getImageList"
                        @removeFiles="removeImage"
                        @clear="clear"
                        ref="clear"
                      ></uploader>
                    </div>
                    <!-- jjjj -->
                  <transition name="fade" mode>
                     <div class="emoji-box" v-if="showEmoji">
                       <el-button
                         class="pop-close"
                         :plain="true"
                         type="danger"
                         size="mini"
                         icon="close"
                         @click="showEmoji = false"
                       ><i>x</i></el-button>
                       <vue-emoji @select="selectEmoji"></vue-emoji>
                       <span class="pop-arrow arrow"></span>
                     </div>
                </transition>
                <!-- jjjj -->
                  </div>
                  <el-form-item class="subminBtn">
                    <el-button type="parmisy" @click="onSubmit">发布</el-button>
                  </el-form-item>
                  
                </el-form>
              </el-row>

              

              <div class="reContent" v-for="(item,key) in reContent" :key="key">
                <div class="re-head">
                  <div class="img">
                    <img :src="item.headImg" alt>
                  </div>
                  <div class="headtd">
                    <p class="tdone">{{item.name}}</p>
                    <p>{{item.creatDate}}</p>
                  </div>
                  <div class="hebutton">
                    <el-button type="parmisy" size="small" @click="onSubmit">+ 关注</el-button>
                  </div>
                </div>

                <div class="re-content">
                    <div v-html = 'emoji(item.content)'></div>
                </div>

                <div class="re-img my-gallery">
                  <div v-for="(i,kk) in item.img" :key="kk" @click="big(key,kk)">
                    <img :src="i" alt>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ElTabPane>
        <ElTabPane label="收藏" class="shiyan">
          <!-- 实验 -->
          <!-- <el-input
            type="textarea"
            :autosize="{ minRows: 10, maxRows: 20}"
            placeholder="请输入内容"
            resize="none"
            v-model="value"
          ></el-input>
          <div class="icon clearfix">
            <i class="icon iconfont icon-face" @click="showEmoji = !showEmoji">
                表情
            </i>
            <el-button type="success" size="small" @click="submit" class="submit">提交</el-button>
            <transition name="fade" mode>
              <div class="emoji-box" v-if="showEmoji">
                <el-button
                  class="pop-close"
                  :plain="true"
                  type="danger"
                  size="mini"
                  icon="close"
                  @click="showEmoji = false"
                ><i>x</i></el-button>
                <vue-emoji @select="selectEmoji"></vue-emoji>
                <span class="pop-arrow arrow"></span>
              </div>
            </transition>
          </div>
          <transition-group tag="div" name="list" class="comment">
            <p v-for="(item,index) in data" :key="index" class="item">
              <span v-html="emoji(item)"></span>
            </p>
          </transition-group> -->
          <!-- 实验 -->
        </ElTabPane>
        <ElTabPane label="资料">
          <uploader @getFiles="getImageList" @removeFiles="removeImage"></uploader>
        </ElTabPane>
      </el-tabs>

      <!-- 图片放大弹出框 -->
      <el-dialog :visible.sync="centerDialogVisible" width="36%" center modal-append-to-body modal>
        <img :src="bigImg" alt class="diaImg" @click="centerDialogVisible = false">
      </el-dialog>
      <!-- 图片放大弹出框 -->
    </div>
    <foote></foote>
  </div>
</template>

<script>
import headmenu from "../../components/head";
import foote from "../../components/mfooter";
import top from "../../components/top";
import uploader from "../../components/upload";
import vueEmoji from "../../components/emoji";
import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
export default {
  name: "perCenter",
  components: {
    headmenu,
    foote,
    top,
    uploader,
    vueEmoji
  },
  data() {
    return {
      imgList: [],
      true: true,
      upform: {},
      reContent: [],
      bigImg: "",
      centerDialogVisible: false,
      showEmoji: false,
      value: "",
      data: [],
      userInfo: {}
    };
  },
  mounted() {
    // console.log("1111");
    // console.log(document.documentElement.scrollTop);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // console.log(document.documentElement.scrollTop);
    if (localStorage.flag) {
      this.getInfo()
    }
    this.getList();
  },
  methods: {
    selectEmoji(code) {
      this.showEmoji = false;
      this.upform.text += code;
    },
    big(e, k) {
      this.centerDialogVisible = true;
      this.bigImg = this.reContent[e].img[k];
    },
    getList() {
      let args = {
        id: 33
      };

      this.$ajax.post("/api/content/getContent", args).then(res => {
        let list = res.data.data;
        let len = list.length;
        for (let i = 0; i < len; i++) {
          list[i].img = JSON.parse(list[i].img);
          for (let y = 0; y < list[i].img.length; y++) {
            list[i].img[y] = "data:image/jpeg;base64," + list[i].img[y];
            // list[i].img[y] = this.dataURLtoBlob(list[i].img[y])
          }
        }
        // console.log(list);
        this.reContent = list;
        //  var pos = list[1].content.indexOf("\n");
        //     console.log('pos===');
        //     console.log(pos);
      });
    },
    getImageList(files) {
      this.$nextTick(() => {
        for (let i = 0, len = files.length; i < len; i++) {
          this.imgList.push(files[i].src.split("base64,")[1]);
          //   上传图片
          // this._getFileCode({
          //   Base64Str: files[i].src.split("base64,")[1],
          //   AttachmentType: this.$enums.AttachmentType.Activity
          // });
        }
      });
    },
    removeImage(index) {
      this.imgList.splice(index, 1);
    },
    clear() {
      this.imgList = [];
    },
    getInfo() {
      let args = localStorage.user
      args = JSON.parse(args)
      this.$ajax.post('/api/user/userInfo',args)
      .then((res) => {
        let userDate = res.data.data[0]
        this.userInfo = userDate
        console.log(this.userInfo)
      })
    },
    onSubmit() {
      this.upform.text = this.upform.text.replace(/\n/gm,"<br/>")
      let myDate = new Date();
      const Y = myDate.getFullYear();
      const M = myDate.getMonth() + 1;
      const D = myDate.getDate();
      const H = myDate.getHours(); //获取当前小时数(0-23)
      const MM = myDate.getMinutes(); //获取当前分钟数(0-59)
      const S = myDate.getSeconds(); //获取当前秒数(0-59)
      const curDay = Y + "-" + M + "-" + D + " " + H + ":" + MM + ":" + S;
      let img = JSON.stringify(this.imgList);

      let args = {
        userID: this.userInfo.userID,
        content: this.upform.text,
        img: img,
        creatDate: curDay
      };
      this.$ajax.post("/api/content/upload", args).then(res => {
        console.log(res.data);
        this.upform = {};
        myDate = "";
        this.$refs.clear.clear();
        this.$message({
          message: "发布成功",
          type: "success"
        });
        this.getList();
      });
    }
  }
};
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
#perCenter {
  // background-color: rgb(83, 80, 80);
  width: 100%;
  overflow-x: hidden;
  .diaImg {
    width: 100%;
  }
  #title {
    position: relative;
  }
  .upPage {
    .upPage-up {
      background-color: rgb(218, 6, 6);
      background: url("../../../static/image/KAT-TUN.jpg") repeat 0% 80%;
    }
    .upPage-ue {
      background-color: #7070706c;
      height: 166px;
      padding: 0 111px;
      img {
        width: 100%;
        height: 100%;
        z-index: -1;
      }
    }

    .upPage-na {
      // background-color: #957493;
      border-bottom: 1px solid #eeebeb;
      margin: 10px auto -1px;
      box-shadow: 2px 3px 18px #e7e7df;
      background-color: #fff;
      width: 1136px;
      height: 236px;
      position: relative;
      // padding: 0 333px;
      .self-photo {
        width: 136px;
        height: 136px;
        padding: 16px 26px;
        position: absolute;
        top: -46px;
        img {
          // border-radius: 50%;
          border: 5px solid white;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }

      .self-name {
        position: absolute;
        top: 26px;
        left: 206px;
        font-size: 21px;
        font-weight: 550;
      }

      .self-set {
        position: absolute;
        top: 16px;
        right: 36px;
        font-size: 21px;
        color: #515769de;
        cursor: pointer;
        &:hover {
          color: #22222494;
        }
      }

      .ue {
        width: 136px;
        margin: -26px 41px 0;
        position: absolute;
        top: 166px;
        .hyphen {
          display: inline-block;
          height: 46px;
          width: 1px;
          background-color: #bdbdbd;
          margin: 2px 16px;
        }
        ul {
          list-style: none;
          display: inline-block;
          margin: 0;
          padding: 0;
          li {
            text-align: center;
            font-size: 13px;
            color: rgb(128, 128, 128);
          }
          p {
            color: #494747;
            font-size: 18px;
            font-weight: 550;
            margin: 13px;
          }
        }
      }
    }
  }

  .shoPage-center {
    margin-bottom: 33px;
    .el-tabs {
      margin: 0 auto;
      background-color: #fafafa;
      border-top: #cfcfcf solid 1px;
      width: 1136px;
      .el-tabs__header {
        background-color: #fff;
        box-shadow: 2px 3px 16px #e7e7df;

        .el-tabs__nav-wrap::after {
          visibility: hidden;
        }
        .el-tabs__nav-wrap {
          .el-tabs__nav {
            margin-left: 36px;
            .el-tabs__active-bar {
              width: 23px;
            }
            .el-tabs__item {
              color: #acaca7;
              &:hover {
                color: #81848f;
              }
            }
            .is-active {
              color: #515769;
            }
            .el-tabs__active-bar {
              background-color: #515769;
            }
          }
        }
      }
      .el-tabs__content {
        // background-color: #938462;
        min-height: 666px;
      }
    }

    // .centerPage-top {
    //     background-color: #fff;
    //     min-height: 263px;
    //     margin: 0 auto;
    //     width: 1266px;
    //     box-shadow: 2px 3px 18px #e7e7df;
    // }


    // 表情样式
    // .shiyan {
    //   font-family: 'Avenir', Helvetica, Arial, sans-serif;
    //  -webkit-font-smoothing: antialiased;
    //  -moz-osx-font-smoothing: grayscale;
    //  color: #2c3e50;
    //  margin: 60px auto ;
    //  width: 500px;
    //  .icon {
    //    position: relative;
    //    margin-top: 20px;
    //    .iconfont {
    //      cursor: pointer;
    //      color: #F7BA2A;
    //    }
    //    .emoji-box {
    //      position: absolute;
    //      z-index: 10;
    //      left: -10px;
    //      top: 24px;
    //      list-style: none;
    //      box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
    //      background: white;
    //      padding-bottom: 6px;
    //      .el-button {
    //        position: absolute;
    //        border: none;
    //        color: #FF4949;
    //        right: 12px;
    //        top: 12px;
    //        z-index: 10;
    //        padding: 2px 13px 4px;
    //      }
    //      .arrow {
    //        left: 10px;
    //      }
    //      .emoji-container {
    //          margin-top: 0;
    //      }
    //    }
    //    .submit {
    //      float: right;
    //    }
    //  }
    //  .comment {
    //    margin-top: 20px;
    //    .item {
    //      margin-top: 20px;
    //      padding: 10px;
    //      margin: 0;
    //      border-top: 1px solid #bfcbd9;
    //    }
    //  }
    // }

    // .clearfix {
    //   &:after {
    //     content: '';
    //     display: block;
    //     height: 0;
    //     clear: both;
    //     visibility: hidden;
    //   }
    // }

    // .fade-enter-active, .fade-leave-active { transition: opacity .5s; }
    // .fade-enter, .fade-leave-active { opacity: 0; }
    // .fade-move { transition: transform .4s; }

    // .list-enter-active, .list-leave-active { transition: all .5s; }
    // .list-enter, .list-leave-active { opacity: 0; transform: translateX(30px); }
    // .list-leave-active { position: absolute !important; }
    // .list-move { transition: all .5s;}

    // 表情样式

    .centerPage-down {
      display: flex;
      margin: 0 auto;
      width: 1136px;
      min-height: 566px;
      justify-content: space-between;
      .centerPage-left {
        width: 20%;
        height: 447px;
        background-color: #fff;
        box-shadow: 2px 3px 18px #e7e7df;
        padding: 2px 5px;
        .left-title {
            padding: 6px 14px;
        }
        .left-cont {
            // background-color: #748596;
            padding-left: 26px;
            margin-top: 10px;
            .left-user {
                width: 66px;
                height: 86px;
                display: inline-block;
                margin:  6px 0;
                .img {
                    width: 50px;
                    height: 50px;
                    img {
                        border-radius: 50%;
                        width: 100%;
                        height: 100%;
                    }
                    margin-bottom: 1px;
                }
                .name {
                    div {
                        padding: 2px;
                        border: 2px solid white;
                        width: 44px;
                        height: 14px;
                        font-size: 12px;
                        line-height: 16px;
                        overflow: hidden;
                    }

                }
            }
        }
      }

      .centerPage-right {
        width: 70%;
        min-height: 339px;
        background-color: #fff;
        box-shadow: 2px 3px 28px #e7e7df;
        padding: 26px 46px;

        .icon {
          // background-color: pink;
          position: relative;
          width: 166px;
          min-height: 26px;
          margin-left: 36px;
          margin-bottom: 10px;
          .emoji-box {
         position: absolute;
         z-index: 9999;
         left: -10px;
         top: 24px;
         list-style: none;
         box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
         background: white;
         padding-bottom: 6px;
         .el-button {
           position: absolute;
           border: none;
           color: #FF4949;
           right: 12px;
           top: 12px;
           z-index: 10;
           padding: 2px 13px 4px;
         }
         .arrow {
           left: 10px;
         }
         .emoji-container {
             margin-top: 0;
         }
          }
          .icupload {
            position: relative;
            top: -32px;
            left: 60px;
          }
          .ico {
            cursor: pointer;
            display: inline-block;
          }
          .iconImg {
            width: 18px;
            height: 18px;
            display: inline-block;
            img {
              width: 100%;
              height: 100%;
            }
          }
          p {
            display: inline-block;
            vertical-align: top;
            margin: 0 16px 0 6px;
            font-size: 13px;
          }
        }

        .el-form {
          position: relative;
          margin-bottom: 13px;
          .subminBtn {
            position: absolute;
            right: 0px;
            top: 80px;
            width: 136px;
            // background-color: #346789;
            .el-button {
              width: 86px;
              height: 23px;
              line-height: 6px;
              font-size: 11px;
              padding: 0;
              background-color: #63c25a;
              color: white;
            }
          }
        }

        .el-form-item {
          margin: 10px 23px 11px;
        }

        .reContent {
          background-color: #fcfcfc;
          border: 1px solid #f0eded;
          padding: 36px;
          width: 560px;
          margin: 10px 23px;
          &:first-of-type {
            margin-top: -37px;
            background-color: #434524;
          }
          .re-head {
            position: relative;
            div {
              display: inline-block;
            }
            .img {
              width: 56px;
              height: 56px;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
            .headtd {
              vertical-align: top;
              margin: 0 10px;
              p {
                &:first-of-type {
                  font-size: 16px;
                  font-weight: 600;
                  margin: 6px 0;
                }
                &:last-child {
                  font-size: 13px;
                  color: #979797;
                  margin: 5px 0;
                }
              }
            }

            .hebutton {
              position: absolute;
              right: 56px;
              top: 14px;
              .el-button {
                color: #da9021;
              }
            }
          }

          .re-content {
            padding: 10px 66px;
          }

          .re-img {
            width: 60%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 0 66px;
            div {
              width: 110px;
              height: 110px;
              margin: 1px;
              cursor: pointer;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
  // .centerPage {
  //     margin: 36px 333px;
  //     background-color: #fff;
  //     min-height: 663px;
  // }
}
</style>