import TiieObject from "Tiie/Object";

import Loader from "Tiie/Loader/Loader";

const cn = 'Service';
class Service extends TiieObject {
    constructor(frames) {
        super();

        let p = this.__private(cn, {
            frames,
            attached : new WeakMap(),
        });
    }

    attach(target, params = {}) {
        let p = this.__private(cn),
            loader
        ;

        if(!p.attached.has(target)) {
            loader = new Loader(p.frames, target, params);

            p.attached.set(target, loader);
        } else {
            loader = p.attached.get(target);
        }

        return loader;

    }
}

export default Service;
