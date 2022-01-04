<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="less" scoped>
.gutter-box {
  background: #00a0e9;
}
</style>
