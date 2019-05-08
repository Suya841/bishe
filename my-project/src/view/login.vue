<template>
    <div id="login" :style="{height: Loginheight + 'px'}" @keydown.enter="handleSubmit">
        <div class="head">
            <img src="../../static/image/mc-logo.png">
        </div>
        <div class="login-content">
            <el-row>
                <h2>用户{{btn}}</h2>
            </el-row>
            <ElForm :model="form" ref="loginForm" :rules="rules">
              <ElFormItem prop="userName">
                <el-input placeholder="用户名" v-model="form.userName" clearable >
                    <i
                      class="el-icon-edit el-input__icon"
                      slot="prefix"
                     >
                    </i>
                </el-input>
              </ElFormItem>
              <ElFormItem prop="password">
                <el-input placeholder="密码" v-model="form.password"  show-password>
                  <i
                    class="el-icon-bell el-input__icon"
                    slot="prefix"
                   >
                  </i>    
                    <!-- <span >
                    <Icon :size="16" type="el-icon-edit"></Icon>
                </span> -->
                </el-input>
              </ElFormItem>
              <ElFormItem prop="newPassword" v-if="report">
                <el-input placeholder="确认密码" v-model="form.newPassword"  show-password>
                    <i
                      class="el-icon-bell el-input__icon"
                      slot="prefix"
                     >
                    </i>
                    <!-- <span >
                    <Icon :size="16" type="el-icon-edit"></Icon>
                </span> -->
                </el-input>
              </ElFormItem>
            </ElForm>
                <!-- <el-input placeholder="用户名" v-model="form.userName" clearable ></el-input> -->
                <!-- <el-input placeholder="密码" v-model="form.password"  show-password></el-input> -->
                <!-- <el-input placeholder="确认密码" v-model="form.newPassword"  show-password v-if="report"></el-input> -->
                <div class="login-other">
                    <a @click="goHome">回到首页</a>
                    <a v-if="report" @click="userLogin">已有账户登录</a>
                    <a @click="join" v-else>立即注册</a>
                </div>
            <div>
                <el-button  @click="handleSubmit(btn)">{{btn}}</el-button>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
    export default {
        name: 'login',
        layout: 'empty',
        middleware: ['noauth'],
        data() {
            var pass = (rule,value,callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                }else if (value !== this.form.password) {
                    callback(new Error('两次密码输入不一致'))
                }else {
                    callback()
                }
            }
            return {
                // userName: '',
                // password: '',
                btn: "登录",
                report: false,
                Loginheight: document.documentElement.clientHeight,
                type: "",
                form: {
                  userName: "",
                  password: "",
                  newPassword: ""
                },
                rules: {
                  userName: [
                    { required: true, message: "账号不能为空", trigger: "blur" }
                  ],
                  password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
                  newPassword: [{ validator: pass,trigger: "blur" }]
                },
                nowYear: ""
            }
        },
        mounted () {
          this.nowYear = new Date().getFullYear()
        },
        methods: {
            goHome () {
              this.$router.push({
                name: 'HelloWorld'
              })
            },
            join() {
                this.btn = "注册"
                this.report = true
                this.form = {}
            },
            userLogin() {
                this.btn = "登录"
                this.report = false
                this.form = {}
            },
            ...mapActions({
              authLogin: 'login'
            }),
            async handleSubmit (e) {
              console.log(e)
              console.log(this.$refs.loginForm)
              this.$refs.loginForm.validate(async (valid) => {
              console.log('eeee==')
                  console.log(this.$refs.loginForm.validate)
                  console.log(valid)



              console.log('join=====')
               let args = {
                  userName: this.form.userName,
                  password: this.form.password
                }
                console.log(args)
                this.$http.post('api/user/addUser',args)
                .then((res) => {
                  console.log(res)
                })
                .catch((err) => {
                  console.log(err)
                })

                // if (valid) {
                //   try {
                //     await this.authLogin({
                //       userName: this.form.userName,
                //       password: this.form.password
                //     })

                //     const { redirect } = this.$route.query
                //     console.log('redirect======')
                //     console.log(redirect)
                //     const url = redirect || '/#/'
                //     if (window.$hashRedirect) {
                //       window.$hashRedirect(url)
                //     } else {
                //       window.location = url
                //     }
                //   } catch (e) {
                //       console.log("233333====")
                //       this.$message.error('cuola')
                //       console.log(e)
                //     // this.axios.$onError(e)
                //   }
                // }
              })
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
        // height: 300px;
        margin: 119px auto;
        // background-color: #837498;
        box-shadow: 4px 4px 16px #aca8b4;

        .el-form-item__error {
            margin-left: 33px;
            margin-top: -6px;
        }

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

        .login-other {
            float: right;
            margin-right: 26px;
            a {
                margin-left: 23px;
                color: #696969;
                font-size: 13px;
                cursor: pointer;
                &:hover {
                    color: #17bed2;
                    text-decoration: underline;
                }
            }
        }

    }
}
    
</style>