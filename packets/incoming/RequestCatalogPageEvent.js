const ByteBuffer = require("bytebufferjs");


class RequestCatalogPageEvent {

    static header = 412;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	catalogPageId: packet.readInt(),
        	unknown: packet.readInt(),
        	mode: packet.readString()
        }

        return data;

    }

}

module.exports = RequestCatalogPageEvent;