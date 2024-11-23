<template>
  <div class="openai-test">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>OpenAI Client Test</span>
          <el-button type="warning" @click="runTest" :loading="loading">
            Run Test
          </el-button>
        </div>
      </template>

      <!-- 系统消息设置 -->
      <div class="input-section">
        <h4>System Message:</h4>
        <el-input
          v-model="systemMessage"
          type="textarea"
          :rows="2"
          placeholder="Enter system message..."
        />
      </div>

      <!-- 用户输入 -->
      <div class="input-section">
        <h4>User Message:</h4>
        <el-input
          v-model="userMessage"
          type="textarea"
          :rows="3"
          placeholder="Enter your message..."
        />
      </div>

      <!-- 响应展示 -->
      <div v-if="result" class="response-section">
        <h4>Response:</h4>
        <el-card class="response-card" shadow="never">
          <pre class="response-content">{{ formatResponse(result) }}</pre>
        </el-card>
      </div>

      <!-- 错误提示 -->
      <el-alert
        v-if="error"
        :title="error"
        type="error"
        :closable="false"
        show-icon
        class="error-alert"
      />
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { testAPI, chatCompletion, createMessage } from '../services/xaiOpenAI';

const systemMessage = ref('You are Grok, a chatbot inspired by the Hitchhiker\'s Guide to the Galaxy.');
const userMessage = ref('What is the meaning of life, the universe, and everything?');
const result = ref(null);
const error = ref('');
const loading = ref(false);

const runTest = async () => {
  if (!userMessage.value.trim()) {
    error.value = 'Please enter a message';
    return;
  }

  loading.value = true;
  error.value = '';
  result.value = null;

  try {
    const response = await chatCompletion(userMessage.value, {
      systemMessage: systemMessage.value
    });
    
    if (response.success) {
      result.value = response;
    } else {
      error.value = response.error || 'An error occurred';
    }
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
};

const formatResponse = (response) => {
  if (!response) return '';
  
  return JSON.stringify({
    role: response.message.role,
    content: response.message.content
  }, null, 2);
};
</script>

<style scoped>
.openai-test {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-section {
  margin-bottom: 20px;

  h4 {
    margin: 10px 0;
    color: #606266;
  }
}

.response-section {
  margin-top: 20px;

  h4 {
    margin: 10px 0;
    color: #606266;
  }
}

.response-card {
  background-color: #f8f9fa;
}

.response-content {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: monospace;
  color: #2c3e50;
}

.error-alert {
  margin-top: 20px;
}
</style>
