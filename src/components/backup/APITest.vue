<template>
  <div class="api-test">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>API Test</span>
        </div>
      </template>
      
      <div class="test-controls">
        <el-input
          v-model="prompt"
          type="textarea"
          :rows="3"
          placeholder="Enter your message here..."
        />
        
        <div class="buttons">
          <el-button 
            type="primary" 
            @click="runSimpleTest"
            :loading="loading">
            Simple Test
          </el-button>
          
          <el-button 
            type="success" 
            @click="runConversationTest"
            :loading="loading">
            Conversation Test
          </el-button>
        </div>
      </div>

      <div v-if="result" class="result">
        <h3>Response:</h3>
        <pre>{{ JSON.stringify(result, null, 2) }}</pre>
      </div>

      <div v-if="error" class="error">
        <el-alert
          :title="error"
          type="error"
          :closable="false"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { chatCompletion, chatWithHistory, createMessage } from '../services/api';

const prompt = ref('');
const result = ref(null);
const error = ref('');
const loading = ref(false);

const runSimpleTest = async () => {
  if (!prompt.value.trim()) {
    error.value = 'Please enter a message';
    return;
  }

  loading.value = true;
  error.value = '';
  result.value = null;

  try {
    const response = await chatCompletion(prompt.value);
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

const runConversationTest = async () => {
  if (!prompt.value.trim()) {
    error.value = 'Please enter a message';
    return;
  }

  loading.value = true;
  error.value = '';
  result.value = null;

  try {
    const messages = [
      createMessage('system', 'You are a helpful assistant.'),
      createMessage('user', 'Let\'s have a conversation about technology.'),
      createMessage('assistant', 'I\'d be happy to discuss technology! What specific aspect would you like to explore?'),
      createMessage('user', prompt.value)
    ];

    const response = await chatWithHistory(messages);
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
</script>

<style scoped>
.api-test {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.test-controls {
  margin-bottom: 20px;
}

.buttons {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.result {
  margin-top: 20px;
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 4px;
}

.result pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.error {
  margin-top: 20px;
}
</style>
