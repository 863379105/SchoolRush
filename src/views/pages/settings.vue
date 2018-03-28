<template>
  <div class="app">
    <div class="container grid-container">
      <div class="grid-no-padding card userinfo-settings-wrap col-lg-11 col-md-12 col-sm-12 col-xs-12">
          <Col class="userinfo-settings-title" span="24">个人设置</Col>
          <Col class="userinfo-settings-content-wrap" offset="4" span="16">
            <Form ref="userInfo" :model="userInfo" :rules="validInfo" :label-width="100">
              <Col class="settings-avatar" offset="11" span="13">
                  <img class="avatar" :src="userInfo.avatar">
                  <corp-image @imgData="imgDataChanged"></corp-image>
              </Col>
              <FormItem label="用户名" prop="name">
                <Input size="large" v-model="userInfo.name" placeholder="Enter your name"></Input>
              </FormItem>
              <FormItem label="性别" prop="gender">
                <RadioGroup size="large" v-model="userInfo.gender">
                    <Radio label="男">男</Radio>
                    <Radio label="女">女</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="学校" prop="campus">
                <Select size="large" v-model="userInfo.campus" filterable>
                  <Option v-for="item in campusData" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="专业" prop="major">
                <Select size="large" v-model="userInfo.major" filterable>
                  <Option v-for="item in majorData" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem size="large" label="兴趣专业" prop="vice">
                <Select v-model="userInfo.vice" filterable multiple>
                  <Option v-for="item in majorData" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem label="一句话介绍" prop="describe">
                <Input v-model="userInfo.describe" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
              </FormItem>
              <FormItem label="邮箱" prop="email">
                <Input size="large" v-model="userInfo.email" placeholder="Enter your e-mail"></Input>
              </FormItem>
              <FormItem label="电话" prop="tel">
                <Input size="large" v-model="userInfo.tel" placeholder="Enter your e-mail"></Input>
              </FormItem>
              <!-- 提交按钮 -->
              <FormItem>
                <Button class="submitBtn" type="primary" size="large" @click="handleSubmit('userInfo')">修改</Button>
              </FormItem>
            </Form>
          </Col>
      </div>
    </div>
  </div>
</template>
<script>
import corpImage from "../components/tools/corp-image";
import campusData from "../../static/data/CampusNoLocate"
import Major from "../../static/data/MajorNoPre"
export default {
  data() {
    return {
      userInfo: {
        name: "",
        email: "",
        tel: "",
        campus: "",
        major: "",
        vice: [],
        avatar: "./src/static/img/avatar.jpg",
        describe: "",
        gender: ""
      },
      campusData: campusData.data,
      majorData: Major.data,
      validInfo: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        email: [
          {
            //required: true,
            message: "请填写邮箱",
            trigger: "blur"
          },
          { type: "email", message: "邮箱格式错误", trigger: "blur" }
        ],
        tel: [
          {
            //required: true,
            message: "请填写电话",
            trigger: "bulr"
          }
        ],
        campus: [
          { required: true, message: "请选择学校", trigger: "change" }
        ],
        gender: [
          { required: true, message: "Please select gender", trigger: "change" }
        ],
        major: [
          {
            required: true,
            message: "Choose at least one hobby",
            trigger: "change"
          }
        ],
        avatar: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change"
          }
        ],
        describe: [
          {
            //required: true,
            message: "请输入一句话介绍",
            trigger: "blur"
          },
          {
            type: "string",
            max: 60,
            message: "最多30字",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          console.log(this.userInfo)
        } else {
          this.$Message.error("填写有误!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    imgDataChanged(imgData) {
      console.log(imgData)
      this.userInfo.avatar = imgData
    }
  },
  components: {
    "corp-image": corpImage
  },
  mounted() {
  }
};
</script>
<style lang="sass">
.card
  padding: 1rem 0
  background: #fff
.userinfo-settings-wrap
  margin-bottom: 6rem
.userinfo-settings-title
  border-bottom: .1rem solid #e9e9e9
  padding-left: 2rem
  padding-bottom: 1rem 
.userinfo-settings-content-wrap
  padding-top: 2rem
  .ivu-form-item
    .ivu-form-item-label
      font-size: 1.4rem
  .submitBtn
    margin-top: 1rem
  .settings-avatar
    z-index: 9999
    img.avatar
      height: 8rem
      margin-top: -1rem
      border-radius: 50%
      box-shadow: 0 0 .5rem 0 #444
.ivu-form-item
  margin-bottom: 1.7rem
.ivu-form-item-error-tip
  padding-top: .1rem
</style>
