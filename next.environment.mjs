// next.environment.mjs
export default {
  webpack(config) {
    config.infrastructureLogging = {
      level: "error",
    };
  },
};
