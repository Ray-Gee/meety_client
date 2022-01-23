/**
 * @fileoverview gRPC-Web generated client stub for messenger
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.messenger = require('./messenger_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.messenger.MessengerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.messenger.MessengerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.messenger.MessageRequest>}
 */
const methodDescriptor_Messenger_GetMessages = new grpc.web.MethodDescriptor(
  '/messenger.Messenger/GetMessages',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.messenger.MessageRequest,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.messenger.MessageRequest.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.messenger.MessageRequest>}
 */
const methodInfo_Messenger_GetMessages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.messenger.MessageRequest,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.messenger.MessageRequest.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.messenger.MessageRequest>}
 *     The XHR Node Readable Stream
 */
proto.messenger.MessengerClient.prototype.getMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/messenger.Messenger/GetMessages',
      request,
      metadata || {},
      methodDescriptor_Messenger_GetMessages);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.messenger.MessageRequest>}
 *     The XHR Node Readable Stream
 */
proto.messenger.MessengerPromiseClient.prototype.getMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/messenger.Messenger/GetMessages',
      request,
      metadata || {},
      methodDescriptor_Messenger_GetMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.messenger.MessageRequest,
 *   !proto.messenger.MessageResponse>}
 */
const methodDescriptor_Messenger_CreateMessages = new grpc.web.MethodDescriptor(
  '/messenger.Messenger/CreateMessages',
  grpc.web.MethodType.UNARY,
  proto.messenger.MessageRequest,
  proto.messenger.MessageResponse,
  /**
   * @param {!proto.messenger.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.messenger.MessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.messenger.MessageRequest,
 *   !proto.messenger.MessageResponse>}
 */
const methodInfo_Messenger_CreateMessages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.messenger.MessageResponse,
  /**
   * @param {!proto.messenger.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.messenger.MessageResponse.deserializeBinary
);


/**
 * @param {!proto.messenger.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.messenger.MessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.messenger.MessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.messenger.MessengerClient.prototype.createMessages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/messenger.Messenger/CreateMessages',
      request,
      metadata || {},
      methodDescriptor_Messenger_CreateMessages,
      callback);
};


/**
 * @param {!proto.messenger.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.messenger.MessageResponse>}
 *     A native promise that resolves to the response
 */
proto.messenger.MessengerPromiseClient.prototype.createMessages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/messenger.Messenger/CreateMessages',
      request,
      metadata || {},
      methodDescriptor_Messenger_CreateMessages);
};


module.exports = proto.messenger;

