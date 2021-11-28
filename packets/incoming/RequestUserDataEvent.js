const ByteBuffer = require("../../ByteBuffer");


class RequestUserDataEvent {

    static header = 357;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RequestUserDataEvent;