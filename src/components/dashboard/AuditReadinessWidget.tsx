import { Text, Divider, Group } from "@mantine/core";
import { SemiCircleProgress } from "react-semicircle-progressbar";

export function AuditReadinessWidget() {
  return (
    <div>
      <SemiCircleProgress
        percentage={80}
        size={{
          width: 300,
          height: 300,
        }}
        strokeWidth={6}
        strokeColor="#1EA54E"
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
        Readiness Level
      </Text>

      <Divider my="md" />

      <Group justify="space-around">
        <div>
          <Text fw={700} fz={24} ta="center">
            12
          </Text>
          <Text size="sm" c="dimmed">
            Overdue Stds
          </Text>
        </div>
        <div>
          <Text fw={700} fz={24} ta="center">
            5
          </Text>
          <Text size="sm" c="dimmed">
            Missing Evidence
          </Text>
        </div>
      </Group>
    </div>
  );
}
