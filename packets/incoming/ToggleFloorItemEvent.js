const ByteBuffer = require("bytebufferjs");


class ToggleFloorItemEvent {

    static header = 99;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	itemId: packet.readInt(),
        	state: packet.readInt()
        }

        return data;

    }

}

module.exports = ToggleFloorItemEvent;