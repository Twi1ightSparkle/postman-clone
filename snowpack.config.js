// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/",
  },
  buildOptions: {
    out: "build" // This is src folder of the nodejs app (in the parent dir)  
  },
};
