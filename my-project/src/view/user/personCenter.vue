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
                    </div> -->
                </div>
            </div>
            <div class="upPage-na">
                <div class="self-photo">
                    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3879378629,1590255920&fm=26&gp=0.jpg" />
                </div>
                <div class="self-name">
                    <span>Kamenashi Kazuya</span>
                </div>
                <div class="self-set">
                       <i class="el-icon-setting"></i>
                       <!-- <el-button icon="el-icon-setting"></el-button> -->
                </div>
                <div class="ue">
                        <div>
                            <ul>
                                <li><p>0</p></li>
                                <li>粉丝</li>
                            </ul>
                            <span class="hyphen"></span>
                             <ul>
                                <li><p>0</p></li>
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
                    关注的人
                 </div>
                 <div class="centerPage-right">
                 自己的动态
                 </div>
            </div>
                  </ElTabPane>
                  <ElTabPane label="资料">jin</ElTabPane>
                  <ElTabPane label="收藏">junno</ElTabPane>
                  <ElTabPane label="关注">koki</ElTabPane>
                </el-tabs>
           
            
        </div>
        
       

        <foote></foote>
    </div>
</template>

<script>
import headmenu from '../../components/head'
import foote from '../../components/mfooter'
import top from '../../components/top'
    export default {
        name: 'perCenter',
        components: {
            headmenu,
            foote,
            top
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="less">
html,body {
    margin: 0;
    padding: 0;

}
    #perCenter {
        // background-color: rgb(83, 80, 80);
        width: 100%;
        overflow-x: hidden;
        #title {
            position: relative;
        }
        .upPage {
             .upPage-up {
                 background-color: rgb(218, 6, 6);
                background: url('http://img.hb.aicdn.com/82e9cfd9768084316e15d842a2185d3f9a99889ae864-wV0yxM_fw658') repeat 0% 80%;
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
                margin: 10px auto -1px;;
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

                        .centerPage-down {
                            display: flex;
                            margin: 0 auto;
                            width: 1136px;
                            min-height: 566px;
                            justify-content: space-between;
                             .centerPage-left {
                                width: 26%;
                                height: 236px;
                                background-color: #fff;
                                box-shadow: 2px 3px 18px #e7e7df;
                             }
     
                             .centerPage-right {
                                width: 70%;
                                min-height: 339px;
                                background-color: #fff;
                                box-shadow: 2px 3px 28px #e7e7df;
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