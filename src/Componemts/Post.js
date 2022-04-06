import React , {useState} from 'react'
import './Css/post.css'
import { Avatar } from "@material-ui/core";
import { ArrowUpwardOutlined } from "@material-ui/icons";
import { ArrowDownwardOutlined } from "@material-ui/icons";
import { RepeatOneOutlined } from "@material-ui/icons";
import { ChatBubbleOutlined } from "@material-ui/icons";
import { ShareOutlined } from "@material-ui/icons";
import { MoreHorizOutlined } from "@material-ui/icons";
import Modal from 'react-responsive-modal';
import CloseIcon from '@material-ui/icons/Close'
import 'react-responsive-modal/styles.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function Post() {
    const [isModalOpen,setIsModalOpen]=useState(false);
    const Close=<CloseIcon />;
  return (
    <div className='post'>
        <div className='post__info'>
            <Avatar />
            <h4>User name</h4>
            <small>Timestamp</small>
        </div>
        <div className='post__body'>
            <p>
            Test Question
            </p>
            <button onClick={()=>setIsModalOpen(true)}className='post_btn'>Answer</button>
            <Modal
            open={isModalOpen} 
            closeIcon = {Close} 
            onClose={()=>setIsModalOpen(false)} 
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={
                {
                    overlay:{
                        height:"auto",
                    }
                }
            }
            >
                <div className="modal__question">
                    <h1>This is Test Question.</h1>
                    <p>asked by {" "} <span className="name">Username</span>on<span className="name">Timestamp</span></p>
                </div>
                <div className="modal__answer">
                    <ReactQuill placeholder='Enter your answer' />
                </div>
                <div className="modal__button">
                <button className='cancle' onClick={()=>setIsModalOpen(false)}>
                        Cancle
                    </button>
                    <button type='submit' className='add'>
                        Add Question
                    </button>
                </div>
            </Modal>
        </div>
        <div className='post__footer'>
            <div className='post__footerAction'>
                <ArrowUpwardOutlined />
                <ArrowDownwardOutlined />
            </div>
            <RepeatOneOutlined />
            <ChatBubbleOutlined />
            <div className="post__footerright">
                <ShareOutlined />
                <MoreHorizOutlined />
            </div>
        </div>
        <p>1 Answer</p>
        <div className="post__answer">
            <div className="post-answer-container">
                <div className="post-answerd">
                    <Avatar />
                        <div className="post-info">
                            <p>
                                Username
                            </p>
                            <span>Timestamp</span>
                        </div>
                </div>
                <div className="post-answer">
                    This is test Answer
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post