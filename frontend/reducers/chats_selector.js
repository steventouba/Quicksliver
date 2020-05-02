
const chatsSelector = (chats) => {
  const directMessages = []; 
  const channels = []; 

  Object.values(chats).map((chat) => {
    if (chat.channelType === 0) { 
      channels.push(chat)
    } else { 
      directMessages.push(chat)
    }
  })

  return {channels, directMessages}
} 

export default chatsSelector; 