const ByteBuffer = require("bytebufferjs");


class FloorPlanEditorRequestBlockedTilesEvent {

    static header = 1687;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = FloorPlanEditorRequestBlockedTilesEvent;