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
            <li class="navBtn" on:click={goToDash} style='color: #7DEE73'>Dashboard</li>
            <li class="navBtn" on:click={goToWeaving}>Weaving</li>
            <li class="navBtn" on:click={goToComparison}>Comparison</li>
        </ul>
    </div>
    <div class="body">
        <h1>Overview</h1>
        <form>
            <select style="color: #222">
                <option value="americano" id="cosmos">아메리카노</option>
                <option value="caffe latte">카페라테</option>
                <option value="cafe au lait">카페오레</option>
                <option value="espresso">에스프레소</option>
                <option selected style="background-color: red; color:#eee">선택 안 함</option>
            </select>
            <!-- <input type="button" value="선택"> -->
            <button value="선택">tjsxor</button>
            
        </form>
        <div class="container">
            <section class="chainGraph">
                <h3>=== 그래프 영역입니다===</h3>
            </section>
            <section class="content">
                <div class="top5">
                    <h3>top 5</h3>
                </div>
                <section class="graph">
                    <div class="reliability">
                        <h3>종합신뢰도</h3>
                    </div>
                    <div class="detail">
                        <div class="elements">
                            <p>수익성</p>
                        </div>
                        <div class="elements">
                            <p>건강도</p>
                        </div>
                        <div class="elements">
                            <p>탈중앙화</p>
                        </div>
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
    .chainGraph{
        width: 440px;
        height: 690px;
        background-color: #0D0F1C;
    }
    .content{
        width: 640px;
        height: 690px;
        margin-left: 10px;
    }
    .top5{
        width: 100%;
        height: 320px;
        padding: 24px;
        margin-bottom: 10px;
        background-color: #0D0F1C;
        border-radius: 20px;
    }
    .graph{
        width: 640px;
        height: 500px;
        display: flex;
    }
    .reliability{
        width: 360px;
        height: 360px;
        padding: 24px;
        margin-right: 10px;
        background-color: #0D0F1C;
        border-radius: 20px;
    }
    .detail{
        width: 270px;
        height: 360px;
    }
    .elements{
        width: 270px;
        height: 113px;
        margin-bottom: 10px;
        background-color: #0D0F1C;
        border-radius: 20px;
        padding: 14px;
    }
    p{
        font-size: 14px;
    }
  </style>