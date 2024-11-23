import axios from 'axios';

const API_KEY = 'xai-WJRo2RpStN73y2tGC8qg2QRqBlQxbKWSK6ki9u1E9pQxTyen8N3zaWd5vklgCsOFocNhuJ3XlbW6uo65';
const BASE_URL = 'https://api.x.ai/v1';

// 创建axios实例
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
});

// 基础聊天请求
export const chatCompletion = async (prompt, options = {}) => {
    try {
        const defaultOptions = {
            model: 'grok-beta',
            temperature: 0,
            stream: false
        };

        const messages = [
            {
                role: 'system',
                content: options.systemMessage || 'You are a helpful assistant.'
            },
            {
                role: 'user',
                content: prompt
            }
        ];

        const response = await apiClient.post('/chat/completions', {
            ...defaultOptions,
            ...options,
            messages
        });

        return {
            success: true,
            data: response.data,
            message: response.data.choices[0]?.message?.content || ''
        };
    } catch (error) {
        console.error('API Error:', error);
        return {
            success: false,
            error: error.response?.data || error.message,
            status: error.response?.status
        };
    }
};

// 高级聊天请求（支持对话历史）
export const chatWithHistory = async (messages, options = {}) => {
    try {
        const defaultOptions = {
            model: 'grok-beta',
            temperature: 0,
            stream: false
        };

        const response = await apiClient.post('/chat/completions', {
            ...defaultOptions,
            ...options,
            messages
        });

        return {
            success: true,
            data: response.data,
            message: response.data.choices[0]?.message?.content || ''
        };
    } catch (error) {
        console.error('API Error:', error);
        return {
            success: false,
            error: error.response?.data || error.message,
            status: error.response?.status
        };
    }
};

// 简单测试函数
export const testAPI = async () => {
    const testPrompt = 'Say hello and introduce yourself briefly.';
    const result = await chatCompletion(testPrompt);
    console.log('API Test Result:', result);
    return result;
};

// 创建消息对象的辅助函数
export const createMessage = (role, content) => ({
    role,
    content
});

// 示例用法：
/*
// 基础聊天示例
const simpleChat = async () => {
    const response = await chatCompletion('Hello, how are you?');
    console.log(response.message);
};

// 带历史记录的对话示例
const conversationChat = async () => {
    const messages = [
        createMessage('system', 'You are a helpful assistant.'),
        createMessage('user', 'What is your favorite color?'),
        createMessage('assistant', 'I don\'t have personal preferences, but I can discuss colors!'),
        createMessage('user', 'Tell me more about that color.')
    ];
    
    const response = await chatWithHistory(messages);
    console.log(response.message);
};
*/
