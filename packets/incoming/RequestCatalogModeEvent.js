const ByteBuffer = require("bytebufferjs");


class RequestCatalogModeEvent {

    static header = 1195;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	mode: packet.readString()
        }

        return data;

    }

}

module.exports = RequestCatalogModeEvent;