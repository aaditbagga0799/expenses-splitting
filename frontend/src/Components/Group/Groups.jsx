import React from "react";
import "../../sass/styles.scss";
import GroupList from "./GroupList.jsx";
import { Link } from "react-router-dom";

class Groups extends React.Component {
  onHandleClickedGroup = (clickedGroup, clickedIndx) => {
    this.props.onHandleClickedGroup(clickedGroup, clickedIndx);
  };

  render() {
    return (
      <div className="bgm2">
        <div className="menu">
          <h1>All groups</h1>
          <Link className="exitBtn" to="/">
            Home
          </Link>
          <Link className="addGroupBtn" to="/setting">
            Setting
          </Link>
        </div>
       
        <GroupList
          arrayOfGroups={this.props.arrayOfGroups}
          onHandleClickedGroup={this.onHandleClickedGroup}
        />
      </div>
    );
  }
}

export default Groups;
