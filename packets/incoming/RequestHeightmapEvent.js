const ByteBuffer = require("bytebufferjs");


class RequestHeightmapEvent {

    static header = 3898;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RequestHeightmapEvent;