<template>
      <div id="msgCart">
        <div id="msgPanel">
        <div id="title">
            <img src="../../static/img/avatar.jpg" alt="">
            <div id="titleText">
                <p id="id">Onnow</p>
                <p id="signature">大家好，我是渣渣辉。</p>
            </div>
        </div>

        <div id="cartItem">
            <ul>
                <li><div>
                    <p> 男</p>
                </div></li>
                <li><div>
                    <p>中央民族大学</p>
                </div></li>
            </ul>
        </div>
        <div class="hr"></div>
        <div id="cartItem">
            <ul>
                <li><div>
                    <p> 答题</p>
                    <p><strong>34</strong></p>
                </div></li>
                <li><div>
                    <p>出题</p>
                    <p><strong>34</strong></p>
                </div></li>
                <li><div>
                    <p>关注者</p>
                    <p><strong>34</strong></p>
                </div></li>
            </ul>
        </div>
        <div id="button">
            <Button type="primary" size="large">关注他{{ addCARE()}}</Button>
            <Button size="large">私信他{{sendMSG()}}</Button>
        </div>
    </div>

      </div>
</template>
<script>
export default {
   methods: {
        addCARE(){

        },
        sendMSG(){

        },
   },
   props:{

   }
}
</script>


<style>
    #msgCart #msgPanel{
        margin-top: 10rem;
        width: 31rem;
        height: 21rem;
        background: rgb(245, 245, 245);
        border: 3px white solid;
        border-radius: 10px; 
        overflow: hidden;
    }
    #title img{
        margin-top: 0.5rem;
        margin-left: 1rem;
        border: 1px white solid;
        border-radius: 100%;
        width:8rem;
        height: 8rem;
        overflow: hidden;
    }
    #titleText{
        width: 60%;
        float: right;
        overflow: hidden;
        padding: 0.8rem;
    }
    #id{
        display: block;
        font-size: 2em; 
    }
    #signature{
        display: block;
        font-size: 0.8em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .hr{
        margin: 0 auto;
        width: 92%;
        height:1px ;
        background: rgb(230, 229, 229);
    }
    #cartItem ul{
        text-align: center;
        margin-top: 1rem;
    }
    #cartItem ul li{
        margin: 0 2rem;
        display: inline-block;
    }
    #button{
        margin-top: 1rem;
        text-align: center;
    }
    #button Button{
        margin-left:2rem;
        margin-right:2rem;
    }
</style>

