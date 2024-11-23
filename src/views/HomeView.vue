<template>
  <div class="home">
    <el-row justify="center">
      <el-col :span="24">
        <h1 class="text-center">X.AI Chat</h1>
        <XAIChat />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import XAIChat from '../components/XAIChat.vue';
</script>

<style scoped>
.home {
  padding: 20px;
}

.text-center {
  text-align: center;
  margin-bottom: 30px;
}
</style>
