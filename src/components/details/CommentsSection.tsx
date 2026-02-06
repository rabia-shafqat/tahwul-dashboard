import {
  Paper,
  Text,
  Group,
  Avatar,
  Stack,
  Image,
  Textarea,
  Button,
  rem,
} from "@mantine/core";

interface Comment {
  author: string;
  initials: string;
  date: string;
  text: string;
}

const mockComments: Comment[] = [
  {
    author: "Sara Ibrahim",
    initials: "E",

    date: "2025-08-05",
    text: "Ensure The Plan Includes A Clear Governance Model.",
  },
  {
    author: "Mona Hamed",
    initials: "M",

    date: "2025-08-05",
    text: "Ensure The Plan Includes A Clear Governance Model.",
  },
];

export function CommentsSection() {
  return (
    <Stack gap="md">
      {mockComments.map((comment, index) => (
        <Paper
          key={index}
          withBorder
          p="md"
          radius="md"
          style={{
            backgroundColor: "var(--mantine-color-body)",
          }}
        >
          <Group align="flex-start" gap="md" wrap="nowrap">
            {/* Avatar with initials */}
            <Avatar color={"dimmed"} radius="xl" size="md">
              {comment.initials}
            </Avatar>

            <div style={{ flex: 1 }}>
              {/* Author + Date */}
              <Group justify="space-between" mb={rem(4)} wrap="nowrap">
                <Group gap="xs">
                  <Text fw={600} size="sm">
                    {comment.author}
                  </Text>
                </Group>

                <Text size="xs" c="dimmed">
                  {comment.date}
                </Text>
              </Group>

              {/* Comment text */}
              <Text size="sm" c="dimmed" lh={1.5}>
                {comment.text}
              </Text>
            </div>
          </Group>
        </Paper>
      ))}

      {/* Empty state / new comment input area */}
      <Textarea
        minRows={3}
        autosize
        styles={{
          input: {
            borderColor: "var(--mantine-color-gray-3)",
          },
        }}
      />

      <Group justify="flex-start" mt="sm">
        <Button
          leftSection={<Image src="/src/assets/icons/sent.svg" w={20} mb={5} />}
          variant="filled"
          bg="blue.9"
          size="sm"
        >
          Post Comment
        </Button>
      </Group>
    </Stack>
  );
}
