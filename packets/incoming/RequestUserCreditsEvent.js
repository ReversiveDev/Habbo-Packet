const ByteBuffer = require("../../ByteBuffer");


class RequestUserCreditsEvent {

    static header = 273;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RequestUserCreditsEvent;