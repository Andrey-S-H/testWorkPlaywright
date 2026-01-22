import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: process.env.BASE_URL || "https://todomvc.com/examples/react/#/",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  reporter: [["html"], ["list"]],
  retries: 0,
  workers: 4,
});
