const ByteBuffer = require("bytebufferjs");


class RequestMarketplaceConfigEvent {

    static header = 2597;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RequestMarketplaceConfigEvent;