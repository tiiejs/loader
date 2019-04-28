import LoaderService from "Tiie/Loader/Service";
import style from "./resources/style.scss";

export default function(app) {

    if (!app.components().exists("@frames")) {
        this.log("Loader extension needs Frames extension.", "warn", "Tiie.Extensions");

        return 0;
    }

    let service = new LoaderService(app.components().get("@frames"));

    app.components().set("@loader", service);

    app.components().set("@loader.window", service.attach(app.target(), {

    }));

    return 1;
}
