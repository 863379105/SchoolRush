<template>
  <div>
    <!-- 提问表单开始 -->
    <Form ref="Question" :model="Question" :rules="ruleValidate" :label-width="80">
      <FormItem label="专业分类" prop="major">
        <Select v-model="Question.major" filterable>
          <Option v-for="item in majorData['哲学']" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      <FormItem label="问题" prop="q">
        <Input v-model="Question.q" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
        placeholder="问题标题，自行添加问号，不超过100字"></Input>
      </FormItem>
      <FormItem label="选项A" prop="A">
        <Input v-model="Question.A" placeholder="选项A"></Input>
      </FormItem>
      <FormItem label="选项B" prop="B">
        <Input v-model="Question.B" placeholder="选项B"></Input>
      </FormItem>
      <FormItem label="选项C" prop="C">
        <Input v-model="Question.C" placeholder="选项C"></Input>
      </FormItem>
      <FormItem label="选项D" prop="D">
        <Input v-model="Question.D" placeholder="选项D"></Input>
      </FormItem>
      <FormItem label="正确选项" prop="correct">
        <RadioGroup v-model="Question.correct">
          <Radio label="A">A</Radio>
          <Radio label="B">B</Radio>
          <Radio label="C">C</Radio>
          <Radio label="D">D</Radio>
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
import major from "../../static/data/Major.js" //所有专业
export default {
  data() {
    console.log(major.data)
    return {
      value: "566",
      Question: {
        type: 1, //选择1 判断2 填空3
        major: "",
        q: "",
        A: "",
        B: "",
        C: "",
        D: [],
        correct: "",
        toAnswer: ""
      },
      majorData: major.data,
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
            trigger: "blur"
          }
        ],
        A: [
          {
            required: true,
            message: "选项A不能为空",
            trigger: "blur"
          }
        ],
        B: [
          {
            required: true,
            message: "选项B不能为空",
            trigger: "blur"
          }
        ],
        C: [
          {
            required: true,
            message: "选项C不能为空",
            trigger: "blur"
          }
        ],
        D: [
          {
            required: true,
            message: "选项D不能为空",
            trigger: "blur"
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
        type: 1, //选择1 判断2 填空3
        major: "",
        q: "",
        A: "",
        B: "",
        C: "",
        D: [],
        correct: ""
      }
   },
};
</script>
