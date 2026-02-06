import { Card, Text, Group, Image } from "@mantine/core";
interface StatCardProps {
  title: string;
  value: number;
  icon: string;
}

export function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Group justify="space-between">
        <Text fw={700} size="xl">
          {value}
        </Text>
        <Image src={icon} w={24} />
      </Group>
      <div>
        <Text size="sm" c="dimmed">
          {title}
        </Text>
      </div>
    </Card>
  );
}
