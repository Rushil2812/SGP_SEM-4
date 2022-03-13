import React from 'react'
import './Css/post.css'
import { Avatar } from "@material-ui/core";
import { ArrowUpwardOutlined } from "@material-ui/icons";
import { ArrowDownwardOutlined } from "@material-ui/icons";
import { RepeatOneOutlined } from "@material-ui/icons";
import { ChatBubbleOutlined } from "@material-ui/icons";
import { ShareOutlined } from "@material-ui/icons";
import { MoreHorizOutlined } from "@material-ui/icons";

function Post() {
  return (
    <div className='post'>
        <div className='post_info'>
            <Avatar />
            <h4>User name</h4>
            <small>Timestamp</small>
        </div>
        <div className='post_body'>
            <p>
            Test Question
            </p>
            <button className='post_btn'>Answer</button>
        </div>
        <div className='post_footer'>
            <div className='post_action'>
                <ArrowUpwardOutlined />
                <ArrowDownwardOutlined />
            </div>
            <RepeatOneOutlined />
            <ChatBubbleOutlined />
            <div className="post_footerright">
                <ShareOutlined />
                <MoreHorizOutlined />
            </div>
        </div>
        <p>1 Answer</p>
        <div className="post_answer">
            <div className="post_answercontainer">
                <div className="post_answerd">
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