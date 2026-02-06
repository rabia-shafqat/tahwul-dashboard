import type { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  primaryColor: "blue",
  fontFamily: '"Cairo", sans-serif',
  defaultRadius: "md",
  colors: {
    // Add custom if Figma has specific greens/oranges/reds
    success: [
      "#e7f5ff",
      "#b2f5ea",
      "#81e6d9",
      "#4fd1c5",
      "#38b2ac",
      "#319795",
      "#2c7a7b",
      "#285e61",
      "#7B9FC3",
      "#1D3557",
    ],
    warning: [
      "#fffaf0",
      "#feebc8",
      "#fbd38d",
      "#f6ad55",
      "#ed8936",
      "#dd6b20",
      "#c05621",
      "#9c4221",
      "#7b341e",
      "#652b19",
    ],
    error: [
      "#fff5f5",
      "#fed7d7",
      "#feb2b2",
      "#fc8181",
      "#f56565",
      "#e53e3e",
      "#c53030",
      "#9b2c2c",
      "#742a2a",
      "#5a1e1e",
    ],

    blue: [
      "#f0f4fa",
      "#dfe5ee",
      "#bac9de",
      "#92abcf",
      "#7B9FC3",
      "#5d81bb",
      "#5179b9",
      "#4268a3",
      "#395c92",
      "#1d3557",
    ],
  },
};
