<template>
    <div id="login" :style="{height: Loginheight + 'px'}">
        <div class="head">
            <img src="../../static/image/mc-logo.png">
        </div>
        <div class="login-content">
            <el-row>
                <h2>用户登录</h2>
            </el-row>
            <div>
                <el-input placeholder="用户名" v-model="userName" clearable ></el-input>
                <el-input placeholder="密码" v-model="password"  show-password></el-input>
            </div>
            <div>
                <el-button>denglu</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                userName: '',
                password: '',
                Loginheight: document.documentElement.clientHeight
            }
        }
    }
</script>

<style lang="less">
body,html {
    padding: 0;
    margin: 0;
    background-color: #fafafa;
}
#login {
    // background-image: url('');
    // background-repeat: no-repeat;
    // background-size: 100%;
    padding: 0;
    margin: 0;
    width: 100%;

    .head {
        width: 100%;
        // background-color: #947393;
            // margin: 10px auto;
            // position: fixed;
            padding: 38px 0;

        img {
            display: block;
            width: 130px;
            height: 43px;
            // padding: 50px auto;
            margin: 0 auto;
        }
    }
    .login-content {
        text-align: center;
        width: 436px;;
        height: 300px;
        margin: 119px auto;
        // background-color: #837498;
        box-shadow: 4px 4px 16px #aca8b4;

        .el-input {
            // margin: 10px;
            width: 90%;
            padding: 13px;
        }
        
          .el-input__prefix {
              left: 16px;
          }
          .el-input__suffix {
              right: 19px;
          }

        // .el-button {
        //     width: 90%;
        //     margin: 20px 0;
        // }
        .el-button {
            width: 90%;
            margin: 20px 0;
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
}
    
</style>