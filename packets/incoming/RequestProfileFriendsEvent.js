const ByteBuffer = require("bytebufferjs");


class RequestProfileFriendsEvent {

    static header = 2138;

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

module.exports = RequestProfileFriendsEvent;