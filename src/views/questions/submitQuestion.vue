<template>
    <div id="submit-panel">
        <Row>
            <Col span="24">
                <a href="###" id="question-titel">我的问题</a>
            </Col>
        </Row>
        <Row>
            <Col span="24">
                <Icon type="checkmark-round" size = "15" color = "#2d8cf0"></Icon>
                <a href="123" id="question-msg">发布成功，点击查看问题</a>
            </Col>
        </Row>
        <Row>
            <Col span="24">
                <ul id="share-list">
                    <li><Button type="primary" shape="circle" size="large" ><span class="question-share">复制链接</span></Button></li>
                    <li><Button type="primary" shape="circle" size="large" ><span class="question-share">复制链接</span></Button></li>
                    <li><Button type="primary" shape="circle" size="large" ><span class="question-share">复制链接</span></Button></li>
                    <li><Button type="primary" shape="circle" size="large" ><span class="question-share">复制链接</span></Button></li>
                </ul>
            </Col>
        </Row>
        <Row id="edge">
            <Col span="24">

            </Col>
        </Row>
    </div>
</template>

<script>
export default {
  props:[

  ]
}
</script>
<style>
    #submit-panel{
        margin-top: 5rem;
        text-align: center;
        color: #495060;
        
    }
    #question-titel{
        font-weight: bolder;
        color: black;   
        font-size: 1.75em;
    }
    #question-msg{
        font-weight: bold;
    }
    .ivu-col{
        margin: 1.75rem 0;
    }
    #share-list{
        text-align: center;
    }
    #share-list li{
        display: inline-block;
        margin: 0 1.5rem;
        cursor: pointer;
    }
    .question-share{
        padding: 0 1.5rem;
        font-weight: bolder;
    }
    #edge{
        background: rgb(250,250,250);
        height: 8rem;
        border-radius: 50% 50% 0 0;
    }
</style>

