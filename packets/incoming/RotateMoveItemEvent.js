const ByteBuffer = require("bytebufferjs");


class RotateMoveItemEvent {

    static header = 248;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	furniId: packet.readInt(),
        	x: packet.readInt(),
        	y: packet.readInt(),
        	rotation: packet.readInt()
        }

        return data;

    }

}

module.exports = RotateMoveItemEvent;