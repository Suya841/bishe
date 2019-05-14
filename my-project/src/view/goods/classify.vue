<template>
    <div id="class">
        <headmenu></headmenu>
        <top></top>
        <div class="page-heade">
            <div class="page-head-content">

            </div>
        </div>

        <div class="properties-area">
            <div class="container">
                <el-row>
                    <el-col :span="6">
                        <div class="blog-asside">
                            <div class="panel sidebar-menu">
                                <div class="panel-heading">
                                    <h3>Smart search</h3>
                                </div>
                                <div class="panel-body search-widget">
                                    <el-form :model="searchForm">
                                      <ElFormItem label="">
                                          <el-input v-model="searchForm.title" placeholder="关键字"></el-input>
                                      </ElFormItem>
                                      <ElFormItem label="">
                                          <ElCheckboxGroup v-model="searchForm.checkList">
                                            <ElCheckbox label="原木"></ElCheckbox>
                                            <ElCheckbox label="地中海"></ElCheckbox>
                                            <ElCheckbox label="日式"></ElCheckbox>
                                            <ElCheckbox label="公寓"></ElCheckbox>
                                            <ElCheckbox label="北欧"></ElCheckbox>
                                          </ElCheckboxGroup>
                                      </ElFormItem>
                                      <ElFormItem label="">
                                          <el-button type="parmisy" @click="search">搜索</el-button>
                                      </ElFormItem>
                                    </el-form>
                                </div>
                            </div>

                            <div class="panel search-widget">
                                <div class="panel-heading">
                                    <h3>Smart search</h3>
                                </div>
                                <div class="panel-body recent-property-widget">
                                    <ul>
                                        <li v-for="(item,key) in rankingList" :key="key">
                                            <ElRow>
                                              <ElCol :span="8">
                                                  <div class="blg-thumb" @click="detail">
                                                    <img :src="item.imgSrc">
                                                    <span class="property-seeker"></span>
                                                  </div>
                                              </ElCol>
                                              <ElCol :span="14">
                                                  <div class="blg-entry">
                                                      <h6 @click="detail">{{item.title}}</h6>
                                                      <span class="property-price">content</span>
                                                  </div>
                                              </ElCol>
                                            </ElRow>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div class="clear">
                            <div class="proerty" v-for="(item,key) in goodsList" :key="key">
                                <div class="proerty-item" >
                                    <div class="item-thumb" @click="detail">
                                        <img :src="item.imgSrc" alt="">
                                    </div>
                                    <div class="item-entry">
                                        <div class="item-entry-title">
                                            <h4 @click="detail">{{item.title}}</h4>
                                        </div>
                                        <div class="item-entry-content">
                                            <div class="style">风格</div>
                                            <div class="biao">
                                                <!-- <img src="../../../static/image/biao.png" alt="biaoqian"> -->
                                                {{item.style}}  </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pagination">
                            <el-pagination
                              background
                              layout="total,prev, pager, next"
                              :total="totla">
                            </el-pagination>
                        </div>
                    </el-col>
                </el-row>
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
        name: 'class',
        components: {
            headmenu,
            foote,
            top
        },
        data() {
            return {
                searchForm: {
                    checkList: []
                },
                goodsList:[],
                rankingList: [],
                totla: 0
            }
        },
        mounted () {
            this.getData()
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
                  this.totla = res.data.cuur
                })

                this.$ajax.post('/api/goods/ranking',args)
                .then((res) => {
                  console.log(res.data);
                  this.rankingList = res.data.data
                })

            },
            detail() {
                this.$router.push({name:'goods'})
            },
            search() {
               let list = this.searchForm
               let rul = [] 

               if (list.title) {
                   rul.push(list.title)
               }
               if (list.checkList) {
                   rul = rul.concat(list.checkList)
               }
               if(!list.title && list.checkList.length == 0) {
                   this.$message({
                         message: '请输入检索字段',
                         type: 'warning'
                       });
                       return
               }

               let args = {
                   rul: rul
               }

               this.$ajax.post('/api/goods/checkStyle',args)
               .then((res) => {
                   console.log(res.data);
                  this.goodsList = res.data.data
                  this.totla = res.data.cuur
               })

            }
        }
    }
</script>

<style lang="less">
    #class {
        overflow-x: hidden;
        background-color: white;
        .page-heade {
            background: #494C53 url(../../../static/image/page-header.jpg) no-repeat scroll center top / cover;
            color: white;
            position: relative;
            min-height: 140px;
        }

        .properties-area {
            width: 100%;
            // height: 112px;
            // background-color: #872398;
            .container {
                padding: 6px 15px;
                margin: 6px auto;
                width: 1136px;
                // background-color: #948233;

                .blog-asside {
                    .panel {
                        .panel-heading {
                            h3 {
                                display: inline-block;
                                border-bottom: solid 3px #17bed2;
                                line-height: 1.1;
                                margin-bottom: 0;
                                padding: 0 6px 10px;
                            }
                        }

                        .panel-body {
                            margin: 16px 0;
                            ul {
                                padding: 0;
                                li {
                                    list-style: none;
                                    // background-color: #938475;
                                    margin-bottom: 6px;
                                    .blg-thumb {
                                         width: 76px;
                                         height: 76px;
                                         cursor: pointer;
                                         background-color: #932345;
                                        img {
                                            width: inherit;
                                            height: inherit;
                                        }
                                    }
                                    .blg-entry {
                                        h6 {
                                            font-size: 13px;
                                            text-transform: uppercase;
                                            margin: 10px 0;
                                            color: #48a3ad;
                                            cursor: pointer;
                                        }
                                        span {
                                            color: #494C53;
                                        }
                                    }
                                }
                            }

                            .el-input__inner:focus {
                                border-color: #49c2cf;
                            }
                            .el-button {
                                width: 100%;
                                height: 36px;
                                border: none;
                                line-height: 3px;
                                background-color: #17bed2;
                                color: #fff;
                                font-size: 16px;
                                &:hover {
                                    background-color: #17bfd2c2;
                                    transition: .9s all;
                                }
                            }
                            .is-focus .el-checkbox__inner,.el-checkbox__inner:hover {
                                        border-color: #17bed2;
                                }
                            .is-checked {
                                .el-checkbox__input.is-checked+.el-checkbox__label {
                                        color: #17bed2;
                                    }
                                
                                .is-checked {
                                    .el-checkbox__inner {
                                        background-color: #17bed2;
                                        border-color: #17bed2;
                                    }
                                    
                                }
                            }
                        }
                    }
                }

                .clear {
                    min-height: 160px;
                    margin-left: 26px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    .proerty {
                        margin-bottom: 16px;
                        height: 356px;
                        .proerty-item {
                            border: 1px solid #cacaca6e;
                            width: 248px;
                            .item-thumb {
                                width: 100%;
                                height: 230px;
                                cursor: pointer;
                                img {
                                    height: inherit;
                                    width: inherit;
                                }
                            }

                            .item-entry {
                                .item-entry-title {
                                    padding: 6px 6px;
                                    margin: 6px 10px;
                                    border-bottom: dotted 1px rgb(163, 166, 173);
                                    height: 36px;
                                    // width: 666px;
                                    h4 {
                                         cursor: pointer;
                                    }
                                }
                                .item-entry-content {
                                    .style {
                                        padding: 0 6px;
                                    }
                                    .biao {
                                        font-size: 12px;
                                        // width: 39px;
                                        // height: 24px;
                                        line-height: 26px;
                                        text-align: right;
                                        margin-right: 13px;
                                        // background: url(../../../static/image/biao.png) no-repeat;
                                        // background-size: 100%;
                                        // padding-right: 3px;
                                        // img {
                                        //     width: inherit;
                                        //     height: inherit;
                                        // }
                                    }
                                }
                            }
                        }
                    }
                }

                .pagination {
                    .el-pagination.is-background .el-pager li:not(.disabled).active {
                        background-color: #17bed2;
                    }
                    margin: 16px;
                    float: right;
                }

            }

           


        }
    }
</style>