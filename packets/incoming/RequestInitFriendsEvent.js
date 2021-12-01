const ByteBuffer = require("bytebufferjs");


class RequestInitFriendsEvent {

    static header = 2781;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RequestInitFriendsEvent;