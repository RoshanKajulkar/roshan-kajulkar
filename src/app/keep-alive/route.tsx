import { NextResponse } from "next/server";
import axios from "axios";
import cron from "node-cron";

let isTaskRunning = false;
let lastPingTime: string | null = null;

const keepSiteAlive = async (): Promise<void> => {
  try {
    await axios.get("https://roshan-kajulkar.onrender.com");
    lastPingTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error pinging the site:", error.message);
  }
};

if (!isTaskRunning) {
  cron.schedule("*/1 * * * *", () => {
    keepSiteAlive();
  });
  isTaskRunning = true;
}

export async function GET() {
  return NextResponse.json({
    message: "Keep-alive task running.",
    lastPingTime: lastPingTime || "Task has not run yet.",
  });
}
