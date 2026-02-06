// components/StrategicPlanningCard.tsx
import { Badge, Text, RingProgress, Group, Stack } from "@mantine/core";

interface StrategicPlanningProps {
  title?: string;
  description?: string;
  progress?: number;
  category?: string;
}

export function StrategicPlanningCard({
  title = "Digital Transformation Strategic Planning",
  description = "Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals",
  progress = 100,
  category = "Strategy & Planning",
}: StrategicPlanningProps) {
  return (
    <Stack gap={0}>
      <Group justify="space-between" gap="lg" wrap="nowrap">
        <div>
          <Badge color="gray.5" size="md" radius="xl" variant="outline">
            {category}
          </Badge>
          <Text fw="bold" mt="sm">
            {title}
          </Text>

          <Text size="sm" c="dimmed" ta="center" lh={1.5}>
            {description}
          </Text>
        </div>
        <RingProgress
          roundCaps
          thickness={10}
          size={100}
          sections={[{ value: progress, color: "teal.6" }]}
          label={
            <div style={{ textAlign: "center" }}>
              <Text fw={700} size="xl" lh={1}>
                {progress}%
              </Text>
            </div>
          }
        />
      </Group>
    </Stack>
  );
}
