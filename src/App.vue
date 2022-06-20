<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <SButton type="primary" size="small">primary</SButton>
  <SButton type="primary" size="medium">primary</SButton>
  <SButton type="primary" size="large">primary</SButton><br>
  <SButton type="secondary" size="small">secondary</SButton>
  <SButton type="secondary" size="medium">secondary</SButton>
  <SButton type="secondary" size="large">secondary</SButton><br>
  <SButton type="text" size="small">text</SButton>
  <SButton type="text" size="medium">text</SButton>
  <SButton type="text" size="large">text</SButton>
  <SButton type="primary" size="large" block>确定</SButton>
  <SButton type="primary" size="large" block disabled>取消</SButton>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
