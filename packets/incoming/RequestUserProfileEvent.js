const ByteBuffer = require("bytebufferjs");


class RequestUserProfileEvent {

    static header = 3265;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	habboId: packet.readInt()
        }

        return data;

    }

}

module.exports = RequestUserProfileEvent;