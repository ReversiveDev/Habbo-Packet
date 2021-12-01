const ByteBuffer = require("bytebufferjs");


class HotelViewEvent {

    static header = 105;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = HotelViewEvent;