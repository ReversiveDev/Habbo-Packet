const ByteBuffer = require("bytebufferjs");


class RoomUserWalkEvent {

    static header = 3320;

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

module.exports = RoomUserWalkEvent;