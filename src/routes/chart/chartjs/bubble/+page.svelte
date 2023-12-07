<div class="values">
  <span id="range-1">0</span>
  <span id="range-2">100</span>
</div>
<div class="slider">
  <input type="range" min="0" max="100" value="33" id="slider-1">
  <input type="range" min="0" max="100" value="66" id="slider-2">
</div>

<style lang="scss">
  input[type="range"]{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    outline: none;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: transparent;
    pointer-events: none;
  }
  .slider{
    width: 50%;
    height: 5px;
    background-color: #eee;
    position: absolute;
    margin: auto;
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
    height: 25px;
    width: 15px;
    background-color: #222;
    cursor: pointer;
    border-radius: 20px;
    pointer-events: auto;
    margin-top: -9px;
  }
  input[type="range"]::-moz-range-thumb{
    -webkit-appearance: none;
    height: 25px;
    width: 15px;
    cursor: pointer;
    border-radius: 20px;
    background-color: #222;
  }
  input[type="range"]::-ms-thumb{
    appearance: none;
    height: 25px;
    width: 15px;
    cursor: pointer;
    border-radius: 20px;
    background-color: #222; 
  }
  input[type="range"]:active::-webkit-slider-thumb{
    background-color: #fff;
    border: 3px solid #222;
  }
  .values{
    position: relative;
    margin: auto;
    padding: 10px 0px;

  }
</style> 