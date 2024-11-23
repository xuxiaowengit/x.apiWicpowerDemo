import axios from 'axios';

const XAI_API_URL = 'https://api.x.ai/v1/chat/completions';
const XAI_API_KEY = import.meta.env.VITE_XAI_API_KEY;

const xaiApi = axios.create({
    baseURL: XAI_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${XAI_API_KEY}`
    }
});

export const sendMessage = async (messages, model = 'grok-beta', temperature = 0) => {
    try {
        const response = await xaiApi.post('', {
            messages,
            model,
            stream: false,
            temperature
        });
        return response.data;
    } catch (error) {
        console.error('X.AI API Error:', error);
        throw error;
    }
};

export const createSystemMessage = (content) => ({
    role: 'system',
    content
});

export const createUserMessage = (content) => ({
    role: 'user',
    content
});

export const createAssistantMessage = (content) => ({
    role: 'assistant',
    content
});
