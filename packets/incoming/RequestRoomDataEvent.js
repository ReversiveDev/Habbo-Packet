const ByteBuffer = require("bytebufferjs");


class RequestRoomDataEvent {

    static header = 2230;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	roomId: packet.readInt(),
        	something: packet.readInt(),
        	something2: packet.readInt()
        }

        return data;

    }

}

module.exports = RequestRoomDataEvent;