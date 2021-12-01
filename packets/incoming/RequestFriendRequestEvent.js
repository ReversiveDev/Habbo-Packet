const ByteBuffer = require("bytebufferjs");


class RequestFriendRequestEvent {

    static header = 2448;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RequestFriendRequestEvent;