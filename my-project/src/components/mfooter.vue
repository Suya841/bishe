<template>
    <div id="foote">
        <div class="about">
            <ul class="inwai">
                <li v-for="(item,idx) in list" :key="idx" class="litit">{{item.title}}
                    <ul class="ini">
                        <li v-for="(item,idx) in list" :key="idx">{{item.title}}</li>
                    </ul>
                </li>
            </ul>
        </div>
        
        <div class="foo">
              <p>Copyright &nbsp; &copy;&nbsp;{{author}} - 2018 All rights reserved</p>
              <p>盘CPI 19980322号-6 杰尼斯安备 2006032223374112911510494号 横杠专属版权拥有</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'foote',
        data() {
            return {
                list: [
                    {title: 'Kamenashi'},
                    {title: 'Akanishi'},
                    {title: 'Taguchi'},
                    {title: 'Tanaka'},
                    {title: 'Ueda'},
                    {title: 'Nakamaru'}
                ]
            }
        },
        computed: {
            author () {
                return this.$store.state.author
            }
        }
    }
</script>

<style lang="less">

#foote {
    // width: 100%;
    // background-color: #f4f4f4;
    background-color: #fff;
    padding: 10px 333px;
    border-top:  1px solid #e6e6e6;
    ul,li {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .about {
        .inwai {
            display: flex;
            justify-content: space-between;
            margin-top: 36px;
            .litit {
                display: inline-block;
                // margin: 10px;
                font-size: 17px;
                color: #333744;
                // width: 33px;
                .ini {
                    font-size: 14px;
                    margin: 23px 0px;
                    color: #8d8e94;
                }
            }
        }
    }

    .foo {
        text-align: center;
        padding: 46px;
        font-size: 12px;
        p {
            color: #4d515e;
        }
    }
    
}
    
</style>