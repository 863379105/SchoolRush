<template>
  <div>
    <!-- 提问表单开始 -->
    <Form ref="Question" :model="Question" :rules="ruleValidate" :label-width="80">
      <FormItem label="专业分类" prop="preMajor">
        <Col span="24">
          <Select v-model="Question.major" filterable>
            <Option v-for="item in major['哲学']" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </Col>
      </FormItem>
      <FormItem label="问题" prop="q">
        <Input v-model="Question.q" type="textarea" :autosize="{minRows: 2,maxRows: 5}" 
        placeholder="问题标题，自行添加问号，不超过100字"></Input>
      </FormItem>
      <FormItem label="正确选项" prop="correct">
        <RadioGroup v-model="Question.correct">
          <Radio label="A">正确</Radio>
          <Radio label="B">错误</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="给答题者" prop="toAnswer">
        <Input v-model="Question.toAnswer" type="textarea" :autosize="{minRows: 2,maxRows: 5}" 
        placeholder="想要对答题者说的话..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('Question')">完成</Button>
        <Button type="ghost" @click="handleReset('Question')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
    <!-- 提问表单结束 -->
  </div>
</template>
<script>
import preMajor from "../../static/data/preMajor.js"; //所有大专业
import major from "../../static/data/Major.js" //所有专业
export default {
  data() {
    return {
      Question: {
        type: 2, //选择1 判断2 填空3
        q: "",
        major: "",
        correct: "",
        toAnswer: ""
      },
      preMajor: preMajor.data,
      major: major.data,
      QuestionBackup: {},
      ruleValidate: {
        q: [
          {
            required: true,
            message: "问题不能为空",
            trigger: "blur"
          }
        ],
        major: [
          {
            required: true,
            message: "专业不能为空",
            trigger: "change"
          }
        ],
        
        correct: [
          {
            required: true,
            message: "正确选项不能为空",
            trigger: "change"
          }
        ],
        toAnswer: [
          {
            required: true,
            message: "给答题者的话不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
   methods: {
     handleSubmit(name) {
       this.$refs[name].validate((valid) => {
            if (!valid) {
              this.$Message.error('题目信息不全!');
              return;
            }
        })
     },
     handleReset() {
       for(var i in this.Question) {
        this.$set(this.Question, i, this.QuestionBackup[i])
      }
     },
   },
   mounted() {
     this.QuestionBackup = {
        type: 2, //选择1 判断2 填空3
        q: "",
        major: "",
        correct: "",
        toAnswer: ""
      }
   },
};
</script>
