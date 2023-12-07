<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  let s1: number = 33;
  let s2: number = 66;
  let s3: number = 100;

  let r1: HTMLElement;
  let r2: HTMLElement;
  let r3: HTMLElement;

  let minGap = 1;

  function toMain() {
    goto('/');
  }

  function slider1() {
    if (s2 - s1 <= minGap) {
      s1 = s2 - minGap;
    }
    r1.textContent = s1.toString();
  }

  function slider2() {
    if (s3 - s2 <= minGap) {
      s2 = s3 - minGap;
    }
    r2.textContent = s2.toString();
  }

  function slider3() {
    if(s3 > 100){
      r3.textContent = s3.toString();
    }
    // r3.textContent = s3.toString();
  }

  onMount(() => {
    r1 = document.getElementById("range-1");
    r2 = document.getElementById("range-2");
    r3 = document.getElementById("range-3");
  });
</script>

<div class="root">
    <div class="container">
      <section class="top">
        <div class="logo">
          <a on:click={toMain}>🍀 Chain Weavers</a>
        </div>
        <section class="slide">
          <div class="slider">
            <input type="range" min="0" max="100" bind:value={s1} on:input={slider1}>
            <input type="range" min="0" max="100" bind:value={s2} on:input={slider2}>
            <input type="range" min="0" max="100" bind:value={s3} on:input={slider3} hidden>
          </div>
          <div class="values">
            <span id="range-1">{s1}</span>
            <span id="range-2">{s2 - s1}</span>
            <span id="range-3">{100- s2}</span>
          </div>
        </section>
      </section>
      <section class="body">
        <section class="left">
          <div class="ranking">
            <h3>암호화폐 순위</h3>
            <form class="rankingSelect" action="/">
              <select name="option" id="">
                  <option value="all" id="0">전체 신뢰도</option>
                  <option value="1" id="1">수익성</option>
                  <option value="2" id="2">탈중앙화</option>
                  <option value="3" id="3">건강도</option>
                  <option value="4" id="4">가격</option>
                  <option value="5" id="5">수익률</option>
                  <option value="6" id="6">커미션</option>
                  <option value="7" id="7">거버넌스 참여율</option>
                  <option value="8" id="8">나카모토 계수</option>
                  <option value="8" id="9">지니 계수</option>
                  <option value="8" id="10">관심도</option>
                  <option value="8" id="11">블록 미스 수</option>
                  <!-- <option selected style="background-color: red; color:#eee">선택 안 함</option> -->
              </select>
              <input type="submit" value="선택">
            </form>
          </div>
          <div class="blockSelect">
            <h3>암호화폐 선택</h3>
            <form class="form1">
              <input type="search" name="name">
              <input type="submit" value="검색">
              <div class="checkbox">
                <label><input type="checkbox" name="name" value="1"> 1번</label>
                <label><input type="checkbox" name="name" value="2"> 2번</label>
                <label><input type="checkbox" name="name" value="3"> 3번</label>
                <label><input type="checkbox" name="name" value="4"> 4번</label>
                <label><input type="checkbox" name="name" value="5"> 5번</label>
                <label><input type="checkbox" name="name" value="6"> 6번</label>
                <label><input type="checkbox" name="name" value="7"> 7번</label>
                <label><input type="checkbox" name="name" value="8"> 8번</label>
                <label><input type="checkbox" name="name" value="9"> 9번</label>
                <!-- <label style="background-color: #666; color:#eee"><input type="checkbox" name="name" value="9"> 9번</label> -->
                <label><input type="checkbox" name="name" value="10"> 10번</label>
                <label><input type="checkbox" name="name" value="11"> 11번</label>
                <label><input type="checkbox" name="name" value="12"> 12번</label>
                <label><input type="checkbox" name="name" value="13"> 13번</label>
                <label><input type="checkbox" name="name" value="14"> 14번</label>
                <label><input type="checkbox" name="name" value="15"> 15번</label>
                <label><input type="checkbox" name="name" value="16"> 16번</label>
                <label><input type="checkbox" name="name" value="17"> 17번</label>
                <label><input type="checkbox" name="name" value="18"> 18번</label>
                <label><input type="checkbox" name="name" value="19"> 19번</label>
                <label><input type="checkbox" name="name" value="20"> 20번</label>
                <label><input type="checkbox" name="name" value="21"> 21번</label>
                <label><input type="checkbox" name="name" value="22"> 22번</label>
                <label><input type="checkbox" name="name" value="23"> 23번</label>
                <label><input type="checkbox" name="name" value="24"> 24번</label>
                <label><input type="checkbox" name="name" value="25"> 25번</label>
                <label><input type="checkbox" name="name" value="26"> 26번</label>
                <label><input type="checkbox" name="name" value="27"> 27번</label>
                <label><input type="checkbox" name="name" value="28"> 28번</label>
                <label><input type="checkbox" name="name" value="29"> 29번</label>
                <label><input type="checkbox" name="name" value="30"> 30번</label>
                <label><input type="checkbox" name="name" value="31"> 31번</label>
                <label><input type="checkbox" name="name" value="32"> 32번</label>
                <label><input type="checkbox" name="name" value="33"> 33번</label>
                <label><input type="checkbox" name="name" value="34"> 34번</label>

              </div>
              <input type="reset" value="선택 취소">
            </form>
          </div>
        </section>
        <section class="chart1">
          <div class="bubble">
            버블 차트 영역입니다.
          </div>
        </section>
        <!-- <section class="chart2">
          <div class="bar">
            막대 차트 영역입니다.
          </div>
          <div class="rader">
            레이더 차트 영역입니다.
          </div>
        </section> -->
      </section>
    </div>
</div>

<style lang="scss">
  .root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 1080px;
    font-family: 'pretendard';
    grid-template-columns: auto;
  }
  .container{
    margin: auto;
    padding: 20px 20px;
    width: 1440px;
    height: 900px;
    background-color: #000000;
  }
  .top{
    width: 100%;
    height: 5%;
    background-color: #444;
    display: flex;
  }
  .logo{
    width: 260px;
    height: 100%;
    background-color: #fff;
    padding: 14px;
    font-size: 18px;
    font-weight: 600;
  }
  .logo a:hover{
    cursor: pointer;
  }
  .slide{
    width: 1140px;
    height: 100%;
    background-color: #ccc;
  }
    input[type="range"]{
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 100%;
      outline: none;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      background-color: transparent;
      pointer-events: none;
    }
    .slider{
      width: 400px;
      height: 5px;
      background-color: #eee;
      position: absolute;
      margin: 35px;
      top: 0;
      bottom: 5px;
      border-radius: 5px;
    }
    input[type='range']::-webkit-slider-runnable-track{
      -webkit-appearance: none;
      height: 5px;
    }
    input[type='range']::-moz-range-track{
      -moz-appearance: none;
      height: 5px;
    }
    input[type="range"]::-ms-track{
      appearance: none;
      height: 5px;
    }
    input[type="range"]::-webkit-slider-thumb{
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      background-color: #222;
      cursor: pointer;
      border-radius: 20px;
      pointer-events: auto;
      margin-top: -9px;
    }
    input[type="range"]::-moz-range-thumb{
      // -webkit-appearance: none;
      height: 20px;
      width: 20px;
      cursor: pointer;
      border-radius: 20px;
      background-color: #222;
    }
    input[type="range"]::-ms-thumb{
      appearance: none;
      height: 20px;
      width: 20px;
      cursor: pointer;
      border-radius: 20px;
      background-color: #222; 
    }
    input[type="range"]:active::-webkit-slider-thumb{
      background-color: #fff;
      border: 3px solid #222;
    }
  .value{
    
  }
  .body{
    width: 100%;
    height: 95%;
    background-color: #222;
    display: flex;
  }
  .left{
  
  }
  .ranking{
    width: 260px;
    height: 320px;
    background-color: #fff;
    padding: 10px 10px;
  }
  .ranking h3{
    font-size: 16px;
    margin-bottom: 5px;
    padding-left: 10px;
    font-weight: 600;
  }
  .rankingSelect{
    padding: 10px;
  }
  .rankingSelect select{
    background-color: #2179f417;
    width: 160px;
    padding: 5px;
  }
  .rankingSelect input[type="submit"]{
    padding: 5px 8px;
    background-color: #222;
    color: #fff;
    border-radius: 5px;
  }
  .blockSelect{
    width: 260px;
    height: 500px;
    background-color: #fff;
    padding: 10px 10px;
  }
  .blockSelect h3{
    font-size: 16px;
    margin-bottom: 5px;
    padding-left: 10px;
    font-weight: 600;
  }
  .form1{
    margin: auto;
    width: 220px;
    height: 440px;
    background-color: #fff;
    border: #555 2px solid;
    border-radius: 10px;
    padding: 9px;
  }
  .form1 input[type="search"]{
    width: 150px;
    padding: 5px;
    border: #666 1px solid;
    border-radius: 5px;
  }
  .form1 input[type="submit"]{
    padding: 5px 8px;
    background-color: #222;
    color: #fff;
    border-radius: 5px;
  }
  .form1 input[type="reset"]{
    float: right;
    margin-top: 5px;
    padding: 2px 8px;
    border-radius: 5px;
  }
  .form1 input[type="reset"]:hover{
    background-color: #eee;
    cursor: pointer;
  }
  .checkbox{
    margin-top: 10px;
    width: 100%;
    height: 340px;
    background-color: #fff;
    border: #ccc 1px solid;
    border-radius: 5px;
    overflow: scroll;
  }
  .checkbox::-webkit-scrollbar{
    width: 5px;
  }
  .checkbox::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background-color: #217af4; /* 스크롤바의 색상 */
    border-radius: 10px;
  }
  .checkbox label{
    margin-top: 5px;
    padding-left: 5px;
  }
  .checkbox label:hover{
    cursor: pointer;
    color: #217af4;
    background-color: #2179f417;
  }
  // .chart1{
  //   flex-direction: row;
  //   width: 860px;
  //   height: 100%;
  //   background-color: #ddd;
  // }
  .chart1{
    
    width: 1140px;
    height: 60%;
    background-color: #ddd;
  }
  .chart2{
    
  }
  // .chart2{
  //   flex-direction: row;
  //   width: 280px;
  //   height: 100%;
  // }
  // .bar{
  //   width: 280px;
  //   height: 540px;
  //   background-color: #aaa;
  // }
  // .rader{
  //   width: 280px;
  //   height: 280px;
  //   background-color: #ccc;
  // }
</style>