import { describe, expect, it } from "vitest";
import type { JobMode, JobStatus } from "./domain";

describe("extension domain scaffold", () => {
  it("exposes the first supported workflow and queue status", () => {
    const mode: JobMode = "TEXT_TO_VIDEO";
    const status: JobStatus = "PENDING";
    expect({ mode, status }).toEqual({ mode: "TEXT_TO_VIDEO", status: "PENDING" });
  });
});
