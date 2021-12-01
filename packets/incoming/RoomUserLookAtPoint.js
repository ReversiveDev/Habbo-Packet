const ByteBuffer = require("bytebufferjs");


class RoomUserLookAtPoint {

    static header = 3301;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	x: packet.readInt(),
        	y: packet.readInt()
        }

        return data;

    }

}

module.exports = RoomUserLookAtPoint;