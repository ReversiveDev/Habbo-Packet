const ByteBuffer = require("bytebufferjs");


class RequestNewNavigatorRoomsEvent {

    static header = 249;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	view: packet.readString(),
        	query: packet.readString()
        }

        return data;

    }

}

module.exports = RequestNewNavigatorRoomsEvent;