<template>
  <div class="openai-test-view">
    <el-row justify="center">
      <el-col :span="24">
        <h1 class="text-center">OpenAI Client Test</h1>
        <OpenAITest />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import OpenAITest from '../components/OpenAITest.vue';
</script>

<style scoped>
.openai-test-view {
  padding: 20px;
}

.text-center {
  text-align: center;
  margin-bottom: 30px;
}
</style>
