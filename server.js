const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const manifest = {
  id: "org.vn.test",
  version: "1.0.0",
  name: "VN Test",
  description: "VN addon",
  resources: ["stream"],
  types: ["movie"],
  idPrefixes: ["tt"],
  catalogs: []
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(() => ({
  streams: [
    {
      title: "Test Stream",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }
  ]
}));

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 });
