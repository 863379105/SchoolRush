<template>
  <div class="error-container">
    <div class="nofound">
      <div class="error-panel">
        
        <div id="nofound-panel">
          <div id="error-text">
            <h1>问题不见了?!</h1>
          </div>
          <div id="rollback-btn">
          <router-link to="/index">
            <Button type="primary" size="large" id="btn">返回首页</Button>
          </router-link>     
          </div>
        </div>

        <div class="img_nofound">
          <img src="../../static/img/formula.jpg" alt="" id="blackman">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
};
</script>
<style>
  .error-container{
    margin-top:8rem;
    background: rgb(250,250,250);
    overflow: hidden;
  }
  .nofound{
    width: 77%;
    background-color: rgb(246,246,246);
    margin:  0 auto;
    border-radius: 10px;
    overflow: hidden;
  }
  .error-panel{
    overflow: hidden;
    
  }
  .img_nofound{
    overflow: hidden;
  }
  #blackman{ 
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
  #nofound-panel{
    padding-left: 3rem;
    overflow: hidden;
    background-color: rgb(246,246,246);
    border-radius:15px; 
    overflow: hidden;
  }
  #error-text{
    width: 60%;
    height: 100px;
    float: left;
    font-weight: bolder;
    line-height: 1000x;
    overflow: hidden;
  }
  h1{
    position: relative;
    top: 50%;
    left: 60%;
    transform: translateY(-50%);
  }
  #rollback-btn{
    height: 100px;
    float: left;
    }
  #btn{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
</style>





