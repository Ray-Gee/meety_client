import * as grpcWeb from 'grpc-web';

import * as proto_hello_pb from '../proto/hello_pb';


export class GreeterClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: proto_hello_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_hello_pb.HelloReply) => void
  ): grpcWeb.ClientReadableStream<proto_hello_pb.HelloReply>;

}

export class GreeterPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: proto_hello_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_hello_pb.HelloReply>;

}

