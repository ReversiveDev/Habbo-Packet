const ByteBuffer = require("bytebufferjs");


class RoomUserStopTypingEvent {

    static header = 1474;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RoomUserStopTypingEvent;