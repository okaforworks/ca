import React, { Component } from 'react';
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from '../Events.js';
import LoginForm from './LoginForm';
import ChatContainer from '../chats/ChatContainer';

const socketUrl = "http://10.41.68.100:3231"
class Layout extends Component {

    constructor(props){
        super(props);

        this.state = {
          socket: null,
          user: null
        };
      }
      
      componentWillMount() {
          this.initSocket()
      }
      
      initSocket = () => {
        const socket = io(socketUrl)
        socket.on('connect', () => {
            console.log('connected');
        })
        this.setState({socket})
      }
    
    
    // SET THE USER PROPERTY IN STATE
    // @param user {id: number, name: string}

    setUser = (user) => {
        const { socket } = this.state
        socket.emit(USER_CONNECTED, user);
        this.setState({user})
    }

    logout = () => {
        const { socket } = this.state
        socket.emit(LOGOUT);
        this.setState({user:null})
    }

    render() {

        const { title } = this.props
        const { socket, user } = this.state
        return (
            // may need to change this.socket back to socket.
            <div className="container">
                {
                    !user ?
                    <LoginForm socket={socket} setUser={this.setUser} />
                    :
                    <ChatContainer socket={socket} user={user} logout={this.logout} />
                }
            </div>
        );
    }
}

export default Layout;