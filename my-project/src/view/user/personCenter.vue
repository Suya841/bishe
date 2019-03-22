<template>
    <div id="perCenter">
        <headmenu></headmenu>
        <top></top>
        <div class="upPage">
            <div class="upPage-ue">
                <!-- <img src="http://img2.imgtn.bdimg.com/it/u=1960548875,2286028701&fm=26&gp=0.jpg"> -->
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
                </div>
            </div>
            <div class="upPage-na">
                <div class="self-photo">
                    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3879378629,1590255920&fm=26&gp=0.jpg" />
                </div>
                <!-- <el-tabs class="tabs">
                  <ElTabPane label="首页" class="shoPage">
                       
                  </ElTabPane>
                  <ElTabPane label="资料">jin</ElTabPane>
                  <ElTabPane label="收藏">junno</ElTabPane>
                  <ElTabPane label="关注">koki</ElTabPane>
                </el-tabs> -->
            </div>
        </div>

        <div class="shoPage-center">
            <div class="centerPage-top">
            jhdksndk
            </div>
            <div class="centerPage-down">
                <div class="centerPage-left">
                    关注的人
                 </div>
                 <div class="centerPage-right">
                 自己的动态
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
            background-color: #fff;
            .upPage-ue {
                background-color: #515769;
                background-image: url('http://img2.imgtn.bdimg.com/it/u=1960548875,2286028701&fm=26&gp=0.jpg');
                // background-color: #847392;
                height: 336px;
                padding: 0 111px;
                img {
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }
                .ue {
                    width: 100%;
                    height: 96%;
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-end;
                }
                .hyphen {
                    display: inline-block;
                    height: 46px;
                    width: 2px;
                    background-color: #dadad4;
                    margin: 2px 69px;
                }
                ul {
                    list-style: none;
                    display: inline-block;
                    margin: 0;
                    padding: 0;
                    // margin: 233px 46px 0;
                    // &:first-child {
                    //     margin-left: 10%;
                    // }
                    // &:nth-of-type(3) {
                    //     margin-left: 23%;
                    // }
                    li {
                        font-weight: 550;
                        text-align: center;
                        font-size: 21px;
                        color: white;
                    }
                    p {
                        color: #b9b9b6;
                        font-size: 16px;
                        font-weight: 500;
                    }
                }
            }

            .upPage-na {
                // background-color: #957493;
                border-bottom: 1px solid #eeebeb;
                height: 260px;
                position: relative;
                // padding: 0 333px;
                .self-photo {
                    width: 96px;
                    height: 96px;
                    padding: 4px;
                    position: absolute;
                    top: -46px;
                    left: 46%;
                    // margin: -33px auto;
                    // border-radius: 50%;
                    // background-color: #fff;
                    img {
                        border-radius: 50%;
                        border: 5px solid white;
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                    }
                }

                

                .el-tabs {
                    // margin: 240px;
                    // margin-top: 33px;
                    position: absolute;
                    // top: 22px;
                    bottom: 0;
                    background-color: #fafafa;
                // padding: 0 333px;
                    width: 100%;
                    .el-tabs__header {
                        background-color: #fff;
                       
                        .el-tabs__nav-wrap {
                            // background-color: #094678;
                        border: none;
                        margin: 0;
                        padding: 0 333px;
                        .el-tabs__nav {
                            margin-left: 197px;
                            .el-tabs__active-bar {
                                // background-color: #837522;
                                width: 23px;
                            }
                            .el-tabs__item {
                                // margin: 3px 33px;
                                font-size: 17px;
                                padding: 2px 40px 3px 29px;
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
                        background-color: #938462;
                        margin: 33px 333px;
                    }


                }

            }
        }

                    .shoPage-center {
                        padding: 0 333px;
                        margin-top: 33px;
                        margin-bottom: 33px;
                        // float: left;
                        .centerPage-top {
                            background-color: #fff;
                            min-height: 263px;
                            box-shadow: 2px 3px 18px #e7e7df;
                        }

                        .centerPage-down {
                            display: flex;
                            padding-top: 33px;
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
                            box-shadow: 2px 3px 18px #e7e7df;

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