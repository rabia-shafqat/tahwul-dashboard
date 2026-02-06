import { Card, Group, Text, Image } from "@mantine/core";

interface StatsCardProps {
  title: string;
  value: number;
  icon: string;
}

export function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Group>
        <Image src={icon} w={24} />
        <div>
          <Text fw={700} size="xl">
            {value}
          </Text>
          <Text size="sm" c="dimmed">
            {title}
          </Text>
        </div>
      </Group>
    </Card>
  );
}
