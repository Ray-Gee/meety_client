import { MessageRequest } from "../../../messenger/messenger_pb";
import { useState, useCallback, SyntheticEvent } from "react";
// import { MessengerClient } from "/client/src/messenger/messenger_grpc_web_pb.js";

export const useMessageForm = (client) => {
  const [message, setMessage] = useState("");

  const onChange = useCallback(
    (event) => {
      const target = event.target;
      setMessage(target.value);
    },
    [setMessage]
  );

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const req = new MessageRequest();
      req.setMessage(message);
      client.createMessage(req, null, res => console.log("ここです", res));
      setMessage("");
    },
    [client, message]
  );

  return {
    message,
    onChange,
    onSubmit
  };
};