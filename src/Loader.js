import TiieObject from "Tiie/Object";
import FramesLayer from "Tiie/Frames/Layer";

import templateLoader from "./resources/loader.html";

const cn = "Loader";
class Loader extends TiieObject {
    constructor(frames, target, params = {}) {
        super();

        let p = this.__private(cn, {
            frame : null,
            frames : null,
            framesLayer : null,
            framesLayerName : `loader${this.id()}`,
        });

        // Attach frames to loader.
        p.frames = frames.attach(target);

        p.framesLayer = p.frames.createLayer(p.framesLayerName, {
            marginTop : 200,
            level : 2,
            modal : 1,
        });
    }

    show() {
        let p = this.__private(cn);

        if(p.frame == null) {
            p.frame = p.frames.create(p.framesLayerName, {
                height : 50,
                width : 150,
            });

            p.frame.element().html(templateLoader);
        }

        p.frame.show();

        return this;
    }

    hide() {
        let p = this.__private(cn);

        if(p.frame) {
            p.frame.hide();
        }

        return this;
    }
}

export default Loader;
