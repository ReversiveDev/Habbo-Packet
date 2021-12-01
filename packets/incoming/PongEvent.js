const ByteBuffer = require("bytebufferjs");


class PongEvent {

    static header = 2596;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = PongEvent;