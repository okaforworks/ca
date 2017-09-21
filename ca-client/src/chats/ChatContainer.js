import React, { Component } from 'react';
import SideBar from './SideBar'

class ChatContainer extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            chats: [],
            activeChat: null
        };
    }

    setActiveChat = (activeChat) => {
        this.setState({activeChat})
    }
    

    render() {
        const { user, logout } = this.props
        const { activeChat, chats } = this.state
        return (
            <div className="container">
                <SideBar 
                    logout={logout}
                    chats={chats}
                    user={user}
                    activeChat={activeChat}
                    setActiveChat={this.setActiveChat} 
                    />
                    Changesss
            </div>
        );
    }
}

export default ChatContainer;