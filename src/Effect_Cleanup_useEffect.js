import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    //This is the optional cleanup mechanism for effects.
    // Every effect may return a function that cleans up after it.
    //This lets us keep the logic for adding and removing subscriptions
    //close to each other

    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  }, [props.friend.id]); // Only re-subscribe if props.friend.id changes

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FriendStatus />, rootElement);
