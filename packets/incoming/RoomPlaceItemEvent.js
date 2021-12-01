const ByteBuffer = require("bytebufferjs");


class RoomPlaceItemEvent {

    static header = 1258;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	values: packet.readString()
        }

        return data;

    }

}

module.exports = RoomPlaceItemEvent;