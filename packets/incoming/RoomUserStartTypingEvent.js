const ByteBuffer = require("bytebufferjs");


class RoomUserStartTypingEvent {

    static header = 1597;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RoomUserStartTypingEvent;