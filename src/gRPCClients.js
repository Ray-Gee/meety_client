import { MessengerClient } from "./messenger/MessengerServiceClientPb.ts";

// export type GRPCClients = {
//   messengerClient: MessengerClient;
// };
// export const gRPCClients = {
    //   messengerClient: new MessengerClient(`http://localhost:8080`)
    // };
    console.log("gRPCClientsの中");
export const gRPCClients = new MessengerClient('http://localhost:8080')
console.log("gRPCClients", gRPCClients);