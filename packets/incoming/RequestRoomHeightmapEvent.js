const ByteBuffer = require("bytebufferjs");


class RequestRoomHeightmapEvent {

    static header = 2300;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RequestRoomHeightmapEvent;