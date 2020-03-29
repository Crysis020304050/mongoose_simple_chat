const chatRouter = require('express').Router();
const ChatController = require('../controllers/chat.controller.js');
const UserController = require('../controllers/user.controller.js');

chatRouter.route('/chat_list')
    .get(ChatController.getAllChats);

chatRouter.route('/chat(/:chatId)?')
    .post(ChatController.createChat)
    .get(ChatController.getChat);

chatRouter.route('/chat/:chatId/users')
    .post(ChatController.findChatById,
        UserController.fundUserById,
        ChatController.joinToChat);

chatRouter.route('/chat/:chatId/message(/:messageId)?')
    .post(ChatController.findChatById,
        ChatController.addMessageToChat);

module.exports = chatRouter;