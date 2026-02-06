import { Text, Group, Avatar, rem, Stack, Box, Divider } from "@mantine/core";

interface Leaders {
  name: string;
  perspective: string;
  percentage: number;
  avatarUrl?: string;
}
interface TopLeadersProps {
  mockLeaders: Leaders[];
}

export function TopLeaders({ mockLeaders }: TopLeadersProps) {
  return (
    <Stack gap={0}>
      {mockLeaders.map((leader, index) => (
        <Box key={leader.name}>
          <Group
            wrap="nowrap"
            align="center"
            gap="md"
            style={{
              padding: "var(--mantine-spacing-sm) 0",
            }}
          >
            <Avatar
              src={leader.avatarUrl}
              size={rem(47)}
              radius="xl"
              color="blue"
            >
              {leader.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </Avatar>

            <Stack gap={rem(1)} style={{ flex: 1 }}>
              <Group justify="space-between" align="baseline" wrap="nowrap">
                <Text fw={600} size="md">
                  {leader.name}
                </Text>

                <Text fw={700} size="xl">
                  {leader.percentage}%
                </Text>
              </Group>

              <Text size="sm" c="dimmed">
                {leader.perspective}
              </Text>
            </Stack>
          </Group>

          {index < mockLeaders.length - 1 && <Divider />}
        </Box>
      ))}
    </Stack>
  );
}
