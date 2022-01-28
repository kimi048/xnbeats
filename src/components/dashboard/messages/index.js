import React, { Component } from "react";
import DashLayout from "../../../utils/dash_layout";
import { messagesCollection } from "../../../utils/firebase";
import CardMessage from "./card";

class Messages extends Component {
  state = {
    posts: [],
    limit: 2,
  };

  componentDidMount() {
    messagesCollection
      .orderBy("createdAt")
      .limit(this.state.limit)
      .get()
      .then((snapshot) => {
        this.handleVars(snapshot);
      });
  }

  handleVars = (snapshot) => {
    const { docs } = snapshot;
    const posts = docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    this.setState((prev) => ({
      posts: posts,
    }));
  };

  render() {
    return (
      <DashLayout auth={this.props.auth} title="Messages">
        {
          this.state.posts.map(item=>(
            <CardMessage
            data={item} 
            key={item.id}/>
          ))
        }
        <div className="mt-3">
          <div className="btn btn-primary mr-2">PREV</div>
          <div className="btn btn-primary mr-2">NEXT</div>
        </div>
      </DashLayout>
    );
  }
}
export default Messages;
