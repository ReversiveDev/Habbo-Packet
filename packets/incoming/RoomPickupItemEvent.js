const ByteBuffer = require("bytebufferjs");


class RoomPickupItemEvent {

    static header = 3456;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	category: packet.readInt(),
        	itemId: packet.readInt()
        }

        return data;

    }

}

module.exports = RoomPickupItemEvent;