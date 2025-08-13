<template>
  <div>
    <h1>SSR 页面（服务端渲染）</h1>
    <p>渲染时间：{{ new Date().toISOString() }}</p>
  </div>
</template>

<script setup>
// 默认就是 SSR，无需额外配置
</script>