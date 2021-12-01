const ByteBuffer = require("bytebufferjs");


class RequestGiftConfigurationEvent {

	static header = 418;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RequestGiftConfigurationEvent;