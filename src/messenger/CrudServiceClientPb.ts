/**
 * @fileoverview gRPC-Web generated client stub for crud
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as google_api_annotations_pb from './google/api/annotations_pb';

import {
  CreateUserRequest,
  DeleteUserRequest,
  Empty,
  GetUserRequest,
  ListUserRequest,
  ListUsersResponses,
  UpdateUserRequest,
  User} from './crud_pb';

export class UserServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    ListUsersResponses,
    (request: ListUserRequest) => {
      return request.serializeBinary();
    },
    ListUsersResponses.deserializeBinary
  );

  listUsers(
    request: ListUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListUsersResponses) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/crud.UserService/ListUsers',
      request,
      metadata || {},
      this.methodInfoListUsers,
      callback);
  }

  methodInfoGetUser = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: GetUserRequest) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  getUser(
    request: GetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/crud.UserService/GetUser',
      request,
      metadata || {},
      this.methodInfoGetUser,
      callback);
  }

  methodInfoCreateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: CreateUserRequest) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  createUser(
    request: CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/crud.UserService/CreateUser',
      request,
      metadata || {},
      this.methodInfoCreateUser,
      callback);
  }

  methodInfoUpdateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    User,
    (request: UpdateUserRequest) => {
      return request.serializeBinary();
    },
    User.deserializeBinary
  );

  updateUser(
    request: UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: User) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/crud.UserService/UpdateUser',
      request,
      metadata || {},
      this.methodInfoUpdateUser,
      callback);
  }

  methodInfoDeleteUser = new grpcWeb.AbstractClientBase.MethodInfo(
    Empty,
    (request: DeleteUserRequest) => {
      return request.serializeBinary();
    },
    Empty.deserializeBinary
  );

  deleteUser(
    request: DeleteUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: Empty) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/crud.UserService/DeleteUser',
      request,
      metadata || {},
      this.methodInfoDeleteUser,
      callback);
  }

}

