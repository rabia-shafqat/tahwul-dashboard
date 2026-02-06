import { Divider, Group, Indicator, rem, Stack, Text } from "@mantine/core";

interface Activity {
  id: number;
  action: string;
  detail: string;
  timeAgo: string;
}

interface RecentActivitiesProps {
  activities: Activity[];
}

export function RecentActivities({ activities }: RecentActivitiesProps) {
  return (
    <Stack gap={0}>
      <Divider my="xs" />
      {activities.map((activity, index) => (
        <div key={activity.id}>
          {index > 0 && <Divider my="xs" />}

          <Group
            gap="md"
            wrap="nowrap"
            style={{
              padding: `${rem(8)} 0`,
            }}
          >
            <Indicator color="red" />

            <Stack gap={rem(1)} style={{ flex: 1 }}>
              <Group justify="space-between" wrap="nowrap" align="baseline">
                <Text fw={500} size="sm">
                  {activity.action} {activity.detail}
                </Text>

                <Text
                  size="xs"
                  c="dimmed"
                  fw={500}
                  ta="right"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {activity.timeAgo}
                </Text>
              </Group>
            </Stack>
          </Group>
        </div>
      ))}
    </Stack>
  );
}
