<template>
  <div>
    <h1>混合渲染（SSR + CSR）</h1>
    <p>SSR 时间：{{ ssrTime }}</p>
    <p>CSR 时间：{{ csrTime }}</p>
  </div>
</template>

<script setup>
const ssrTime = new Date().toISOString(); // SSR 阶段执行
const csrTime = ref("");

onMounted(() => {
  csrTime.value = new Date().toISOString(); // CSR 阶段执行
});
</script>