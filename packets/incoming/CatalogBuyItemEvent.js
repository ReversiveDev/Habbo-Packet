const ByteBuffer = require("bytebufferjs");


class CatalogBuyItemEvent {

    static header = 3492;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	pageId: packet.readInt(),
        	itemId: packet.readInt(),
        	extraData: packet.readString(),
        	count: packet.readInt()
        }

        return data;

    }

}

module.exports = CatalogBuyItemEvent;