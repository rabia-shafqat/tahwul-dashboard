import { Text, Group, Avatar, rem, Stack, Box } from "@mantine/core";

interface Leaders {
  name: string;
  perspective: string;
  avatarUrl?: string;
}
interface LeadersSectionProps {
  mockLeaders: Leaders[];
}

export function LeadersSection({ mockLeaders }: LeadersSectionProps) {
  return (
    <Group>
      {mockLeaders.map((leader) => (
        <Box key={leader.name}>
          <Group
            wrap="nowrap"
            align="center"
            gap="md"
            p="xs"
            style={{
              borderRadius: "8px",
              backgroundColor: "#98aec01a",
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
              </Group>

              <Text size="sm" c="dimmed">
                {leader.perspective}
              </Text>
            </Stack>
          </Group>
        </Box>
      ))}
    </Group>
  );
}
