import { v4 as uuidv4 } from 'uuid';
import { NEW_MESSAGE, SET_USERNAME } from './types';

export const newMessage = ({ text, username }) => ({
    type: NEW_MESSAGE,
    item: { id: uuidv4(), text, username, timestamp: Date.now() }
});

export const setUsername = username => ({
    type: SET_USERNAME, username
});

export const createReaction = ({ type, emoji, username, messageId }) => ({
    type,
    item: { id: uuidv4(), timestamp: Date.now(), emoji, username, messageId }
});
