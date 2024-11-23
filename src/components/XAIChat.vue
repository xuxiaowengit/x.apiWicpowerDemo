<template>
  <div class="chat-container">
    <el-card class="chat-card">
      <template #header>
        <div class="card-header">
          <span>X.AI Chat</span>
          <el-button type="primary" :loading="loading" @click="handleClearChat">Clear Chat</el-button>
        </div>
      </template>
      
      <!-- 聊天记录区域 -->
      <div class="chat-messages" ref="messagesContainer">
        <div v-for="(message, index) in messages" :key="index" 
             :class="['message', message.role === 'user' ? 'user-message' : 'ai-message']">
          <el-avatar :icon="message.role === 'user' ? 'el-icon-user' : 'el-icon-chat-dot-round'"
                    :size="40"
                    :class="message.role">
            {{ message.role === 'user' ? 'You' : 'AI' }}
          </el-avatar>
          <div class="message-content">
            {{ message.content }}
          </div>
        </div>
      </div>

      <!-- 输入区域 -->
      <div class="chat-input">
        <el-input
          v-model="userInput"
          type="textarea"
          :rows="3"
          placeholder="Type your message here..."
          @keyup.enter.ctrl="handleSend"
        />
        <el-button 
          type="primary" 
          :loading="loading"
          @click="handleSend"
          :disabled="!userInput.trim()">
          Send
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { sendMessage as sendXAIMessage, createSystemMessage, createUserMessage } from '../services/xaiService';

const messages = ref([
  createSystemMessage("You are a helpful assistant.")
]);
const userInput = ref('');
const loading = ref(false);
const messagesContainer = ref(null);

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const handleSend = async () => {
  if (!userInput.value.trim() || loading.value) return;
  
  const userMessage = createUserMessage(userInput.value);
  messages.value.push(userMessage);
  
  loading.value = true;
  userInput.value = '';
  
  try {
    const response = await sendXAIMessage(messages.value);
    if (response.choices && response.choices[0]) {
      messages.value.push(response.choices[0].message);
    }
  } catch (error) {
    console.error('Failed to send message:', error);
    ElMessage.error('Failed to send message. Please try again.');
  } finally {
    loading.value = false;
    await scrollToBottom();
  }
};

const handleClearChat = () => {
  messages.value = [
    createSystemMessage("You are a helpful assistant.")
  ];
};

onMounted(() => {
  scrollToBottom();
});
</script>

<style scoped>
.chat-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.chat-card {
  height: 600px;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  margin-bottom: 20px;
}

.message {
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
}

.message-content {
  margin-left: 12px;
  padding: 10px;
  border-radius: 8px;
  max-width: 70%;
  word-wrap: break-word;
}

.user-message {
  flex-direction: row;
  
  .message-content {
    background-color: #e8f5fe;
  }
  
  .el-avatar {
    background-color: #409EFF;
  }
}

.ai-message {
  flex-direction: row;
  
  .message-content {
    background-color: #f4f4f5;
  }
  
  .el-avatar {
    background-color: #67c23a;
  }
}

.chat-input {
  padding: 20px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
  
  .el-input {
    flex-grow: 1;
  }
}
</style>
