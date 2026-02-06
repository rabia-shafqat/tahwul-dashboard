import {
  Paper,
  Group,
  Text,
  Stack,
  ThemeIcon,
  Tooltip,
  Box,
  Badge,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface SubItem {
  name: string;
  statuses: string[];
}

interface MaturityCardProps {
  title: string;
  percent: number;
  subItems: SubItem[];
  url?: string;
}

export function MaturityCard({
  title,
  percent,
  subItems,
  url,
}: MaturityCardProps) {
  const navigate = useNavigate();

  const statusColors: Record<string, string> = {
    notStarted: "gray",
    inProgress: "yellow",
    completed: "#1EA54E",
    partiallyUploaded: "blue",
    fullyUploaded: "teal",
    delayed: "red",
  };

  const StatusDot = ({
    id,
    color,
    label,
  }: {
    id: any;
    color: string;
    label: string;
  }) => (
    <Tooltip label={label} withArrow>
      <ThemeIcon radius="xl" color={color} size="sm" variant="filled">
        {id + 1}
      </ThemeIcon>
    </Tooltip>
  );

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Paper
        withBorder
        shadow="sm"
        radius="md"
        p="md"
        bg="blue.9"
        c="white"
        onClick={() => navigate(`/details/${url}`)}
      >
        <Group justify="center" mb="xs">
          <Text fw={700} size="xs" ta="center">
            {title}
          </Text>
          <Badge bg="#344968" size="lg">
            {percent.toFixed(2)}%
          </Badge>
        </Group>
      </Paper>

      <Stack
        mt="md"
        style={{
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        {subItems.map((sub, i) => (
          <Paper
            key={i}
            withBorder
            shadow="sm"
            radius="md"
            p="xs"
            bg="#F5F8FB"
            style={{ flexGrow: 1 }}
          >
            <Box
              style={{
                display: "flex",
                height: subItems.length > 1 ? "100%" : "50%",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text size="xs" fw={500} mb={4} ta="center">
                {sub.name}
              </Text>
              <Group gap={6}>
                {sub.statuses.map((status, idx) => {
                  return (
                    <StatusDot
                      key={idx}
                      id={idx}
                      color={statusColors[status]}
                      label={status.replace(/([A-Z])/g, " $1")}
                    />
                  );
                })}
              </Group>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
