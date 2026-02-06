import { Text } from "@mantine/core";
import { SemiCircleProgress } from "react-semicircle-progressbar";

export function ComplianceScore() {
  return (
    <div>
      <SemiCircleProgress
        percentage={64}
        size={{
          width: 300,
          height: 300,
        }}
        strokeWidth={7}
        strokeColor="#DB1F26"
        hasBackground={true}
        bgStrokeColor="#F5F8FB"
        fontStyle={{
          fontFamily: "cairo",
          fontWeight: "bold",
          fontSize: "18",
          fill: "",
        }}
      />
      <Text ta="center" mt={-95} c="dimmed">
        Basic Standards 2025
      </Text>
    </div>
  );
}
