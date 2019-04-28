import TiieObject from "Tiie/Object";

import Loader from "Tiie/Loader/Loader";

const cn = 'Service';

/**
 * @class
 *
 * @param {Tiie.Frames.Service} frames
 */
class Service extends TiieObject {
    constructor(frames) {
        super();

        let p = this.__private(cn, {
            frames,
            attached : new WeakMap(),
        });
    }

    /**
     * Attach loader to given target.
     *
     * @param {jQuery}  target
     * @param {boolean} [params.fixed]
     * @param {number}  [params.zIndex]
     *
     * @return {Tiie/Loader/Loader}
     */
    attach(target, params = {}) {
        let p = this.__private(cn);

        let loader = new Loader(p.frames, target, {
            fixed : params.fixed,
            zIndex : params.zIndex,
        });

        if(p.attached.get(target)) {
            p.attached.get(target).push(loader);
        } else {
            p.attached.set(target, [loader]);
        }

        return loader;
    }
}

export default Service;
