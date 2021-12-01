const ByteBuffer = require("bytebufferjs");


class RoomUserGiveRespectEvent {

    static header = 2694;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	userId: packet.readInt()
        }

        return data;

    }

}

module.exports = RoomUserGiveRespectEvent;