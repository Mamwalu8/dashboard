<script lang="ts">
  import { goto } from '$app/navigation';

  function goToDash() {
  goto('/project/dashboard');
  }
  function goToWeaving() {
  goto('/project/weaving');
  }
  function goToComparison() {
  goto('/project/comparison');
  }

  let eleRoot: HTMLCanvasElement;

</script>

<div class="root">
  <div class="nav">
      <h2>🍀 Chain Weavers</h2>
      <ul class="navList">
          <li class="navBtn" on:click={goToDash}>Dashboard</li>
          <li class="navBtn" on:click={goToWeaving} style='color: #7DEE73'>Weaving</li>
          <li class="navBtn" on:click={goToComparison}>Comparison</li>
      </ul>
  </div>
  <div class="body">
      <h1>Weaving</h1>
      <div class="container">
          <section class="total">
            <h3>종합 신뢰도</h3>
          </section>
          <section class="content">
            <div class="change">
                <h3>신뢰도 및 세부요인 변화 추이</h3>
            </div>
            <section class="detail">
                <div class="compare1">
                    <h3>평균대비 세부 요인 비교</h3>
                </div>
                <div class="compare2">
                    <h3>시기별 신뢰도 및 세부요인 비율</h3>
            </section>
        </section>
      </div>
  </div>

</div>

<style lang="scss">
      .root {
      margin: 20;
      padding: 0;
      width: 1920px;
      height: 100%;
      background-color: #212431;
      border-radius: 20px;
      font-family: 'pretendard';
      display: flex;
  }
  .nav{
      width: 240px;
      height: 1080px;
      padding: 15px;
      color: #E3E3E3;
      background-color: #0D0F1C;
      box-shadow: 5px 0px 15px 0px #0D0F1C;
      border-radius: 20px 0px 0px 20px;
      border-right: solid 0.5px #50505010;
      z-index: 2;
  }
  h2{
      padding-top: 8px;
      font-size: 24px;
  }
  h3{
      font-size: 20px;
  }
  .navList{
      margin-top: 60px;
  }
  .navBtn{
      border-radius: 8px;
      margin-top: 20px;
      padding: 20px;
      width: 100%;
      height: 60px;
      font-size: 20px;
      font-weight: 500;
  }
  .navBtn:hover{
      background-color: #161829;
      cursor: pointer;
  }
  .body{
      flex-direction: row;
      width: 1200px;
      height: 100%;
      padding: 30px 55px;
      background-color: #212431;
      border-radius: 0px 20px 20px 0px;
  }
  h1{
      padding-bottom: 24px;
      color: #E3E3E3;
      font-weight: 500;
      font-size: 32px;
  }
  .container{
      width: 1440px;
      height: 810px;
      color: #E3E3E3;
      display: flex;
  }
    .total{
        width: 360px;
        height: 690px;
        padding: 24px;
        // margin-right: 10px;
        background-color: #0D0F1C;
        border-radius: 20px;
    }
    .content{
        width: 730px;
        height: 690px;
        margin-left: 10px;
    }
    .change{
        width: 100%;
        height: 320px;
        padding: 24px;
        margin-bottom: 10px;
        background-color: #0D0F1C;
        border-radius: 20px;
    }
    .detail{
        width: 730px;
        height: 500px;
        display: flex;
    }
    .compare1{
        width: 360px;
        height: 360px;
        padding: 24px;
        margin-right: 10px;
        background-color: #0D0F1C;
        border-radius: 20px;
    }
    .compare2{
        width: 360px;
        height: 360px;
        padding: 24px;
        background-color: #0D0F1C;
        border-radius: 20px;
    }
    
  
</style>