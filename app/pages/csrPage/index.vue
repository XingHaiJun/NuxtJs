<template>
  <div>
    <h1>CSR 页面（客户端渲染）</h1>
    <p>渲染时间：{{ time }}</p>
  </div>
</template>

<script setup>
const time = ref("");

onMounted(() => {
  time.value = new Date().toISOString(); // 只在客户端执行
});
</script>
