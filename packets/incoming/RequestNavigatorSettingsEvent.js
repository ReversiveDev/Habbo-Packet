const ByteBuffer = require("../../ByteBuffer");


class RequestNavigatorSettingsEvent {

    static header = 1782;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RequestNavigatorSettingsEvent;