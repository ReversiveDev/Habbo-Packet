const ByteBuffer = require("bytebufferjs");


class ChangeChatBubbleEvent {

    static header = 1030;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	styleId: packet.readInt()
        }

        return data;

    }

}

module.exports = ChangeChatBubbleEvent;