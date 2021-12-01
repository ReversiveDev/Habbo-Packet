const ByteBuffer = require("bytebufferjs");


class RoomUserTalkEvent {

    static header = 1314;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	message: packet.readString(),
        	styleId: packet.readInt()
        }

        return data;

    }

}

module.exports = RoomUserTalkEvent;