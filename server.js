const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const manifest = {
    id: "org.koc.vnaddon",
    version: "1.0.0",
    name: "VN Movie Sources",
    description: "Addon cho OPhim / PhimAPI / NguonC",
    resources: ["stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"]
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(async ({ type, id }) => {

    // TODO:
    // Tự map IMDb -> slug phim VN

    return {
        streams: [
            {
                title: "OPhim",
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            },
            {
                title: "PhimAPI",
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            },
            {
                title: "NguonC",
                url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
            }
        ]
    };
});

serveHTTP(builder.getInterface(), { port: 7000 });

console.log("Addon running on http://localhost:7000/manifest.json");
