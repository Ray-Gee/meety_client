import React from "react";
import {Messages} from "../../components/Messages.js";
import { MessageForm } from "../../components/MessageForm.js";
import { useMessages } from "./hooks/useMessages.js";
import { useMessageForm } from "./hooks/useMessageForm.js";
// import { GRPCClients } from "gRPCClients";

// type Props = {
//   clients: GRPCClients;
// };

export const MessagesContainer = ({ clients }) => {
  // console.log("/container/Messages/index.js");
  // const messengerClient = clients.messengerClient;
  const client = clients;
  // const messagesState = useMessages(messengerClient);
  // const messageFormState = useMessageForm(messengerClient);
  const messagesState = useMessages(client);
  const messageFormState = useMessageForm(client);
  // console.log("clients: ", clients)
  console.log("...messageFormState: ", {...messageFormState})
  console.log("...messagesState: ", {...messagesState})
  // console.log("messengerClient: ", messengerClient)
  return (
    <div>
      <MessageForm {...messageFormState} />
      <Messages {...messagesState} />
    </div>
  );
};