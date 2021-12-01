const ByteBuffer = require("bytebufferjs");


class RequestNewNavigatorDataEvent {

    static header = 2110;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RequestNewNavigatorDataEvent;