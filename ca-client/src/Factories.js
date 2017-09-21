const uuidv4 = require('uuid/v4');

// CREATE USER
const createUser = ({name = ""} = {}) => (
    {
        id: uuidv4(),
        name
    }
)



//CREATE MESSAGE
const createMessage = ({message = "", sender = ""} = {}) => (
    {
        id: uuidv4(),
        time:getTime(new Date(Date.now())),
        message,
        sender 
    }
)

//CREATECHAT
const createChat = ({messages = [], name = "Communitiy", users: []} = {}) => (
    {
        id: uuidv4(),
        name,
        messages,
        users,
        typingUser: []
    }
)





// GET DATE
const getTime = (date) => {
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

module.exports = {
    createMessage,
    createChat,
    createUser
}