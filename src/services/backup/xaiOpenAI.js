import OpenAI from 'openai';

const API_KEY = 'xai-WJRo2RpStN73y2tGC8qg2QRqBlQxbKWSK6ki9u1E9pQxTyen8N3zaWd5vklgCsOFocNhuJ3XlbW6uo65';

// 创建OpenAI客户端实例
const xai = new OpenAI({
    apiKey: API_KEY,
    baseURL: 'https://api.x.ai/v1'
});

// 基础聊天请求
export const chatCompletion = async (prompt, options = {}) => {
    try {
        const defaultOptions = {
            model: 'grok-beta',
            messages: [
                {
                    role: 'system',
                    content: options.systemMessage || 'You are a helpful assistant.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ]
        };

        const completion = await xai.chat.completions.create({
            ...defaultOptions,
            ...options
        });

        return {
            success: true,
            message: completion.choices[0].message,
            data: completion
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

// 支持对话历史的聊天请求
export const chatWithHistory = async (messages, options = {}) => {
    try {
        const completion = await xai.chat.completions.create({
            model: options.model || 'grok-beta',
            messages,
            ...options
        });

        return {
            success: true,
            message: completion.choices[0].message,
            data: completion
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

// 创建消息对象的辅助函数
export const createMessage = (role, content) => ({
    role,
    content
});

// 测试示例
export const testAPI = async () => {
    const messages = [
        createMessage('system', 'You are Grok, a chatbot inspired by the Hitchhiker\'s Guide to the Galaxy.'),
        createMessage('user', 'What is the meaning of life, the universe, and everything?')
    ];

    try {
        const completion = await xai.chat.completions.create({
            model: 'grok-beta',
            messages
        });

        console.log('Test Response:', completion.choices[0].message);
        return {
            success: true,
            message: completion.choices[0].message,
            data: completion
        };
    } catch (error) {
        console.error('Test Error:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

// 使用示例：
/*
// 基础聊天
const simpleChat = async () => {
    const response = await chatCompletion('Tell me a joke');
    console.log(response.message.content);
};

// 多轮对话
const conversation = async () => {
    const messages = [
        createMessage('system', 'You are a helpful assistant.'),
        createMessage('user', 'What is quantum computing?'),
        createMessage('assistant', 'Quantum computing is a type of computing that uses quantum phenomena...'),
        createMessage('user', 'Can you explain more about quantum entanglement?')
    ];
    
    const response = await chatWithHistory(messages);
    console.log(response.message.content);
};
*/
