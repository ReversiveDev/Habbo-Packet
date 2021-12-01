const ByteBuffer = require("bytebufferjs");


class RequestRoomLoadEvent {

    static header = 2312;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	roomId: packet.readInt(),
        	password: packet.readString()
        }

        return data;

    }

}

module.exports = RequestRoomLoadEvent;