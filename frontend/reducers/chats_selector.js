

const structureChatName = (directMessageChannel, users, currentUser) => {
  const userIds = directMessageChannel.name.split('.');
  const currentUserId = currentUser.id;
  let channelName = '';

  for (let index = 1; index < userIds.length; index++){
    const id = parseInt(userIds[index]);
    if (users[id] && id !== currentUserId) { 
      const userName = users[id].username
      channelName +=  !channelName ? `${userName}` : `, ${userName}`;
    }
  }
  directMessageChannel.name = channelName ? channelName : directMessageChannel.name;
  return directMessageChannel;
}


const chatsSelector = (chats, users, currentUser) => {
  const directMessages = []; 
  const channels = []; 

  Object.values(chats).map((chat) => {
    if (chat.channelType === 0) { 
      channels.push(chat)
    } else { 
      
      directMessages.push(structureChatName(chat, users, currentUser))
    }
  })

  return {channels, directMessages}
} 

export default chatsSelector; 