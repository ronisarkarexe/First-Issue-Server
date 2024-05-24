import app from "./app";
import config from "./config";

async function main() {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
}
main();
