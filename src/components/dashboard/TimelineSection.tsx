import {
  Timeline,
  Text,
  Badge,
  Stepper,
  Progress,
  Box,
  Flex,
  Paper,
} from "@mantine/core";

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  status: string;
}

interface TimelineSectionProps {
  items: TimelineItem[];
}
const steps = [
  { date: "Mar 17", label: "Kickoff Workshop", status: "done" },
  { date: "Mar 18", label: "Data Collection", status: "done" },
  { date: "May 8", label: "Initial Phase", status: "upcoming" },
  { date: "May 9–July 12", label: "Verification", status: "upcoming" },
  { date: "July 13", label: "Completion Reviews", status: "upcoming" },
  { date: "Aug 21", label: "Cycle Conclusion", status: "upcoming" },
];
export function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <>
      <Flex align="center" gap="sm">
        <Progress value={33} color="green" style={{ flex: 1, height: 14 }} />
      </Flex>
      <Flex justify="space-between" mt="sm">
        {steps.map((step, i) => (
          <Box key={i} ta="center" w={100} mt={-24} style={{ zIndex: 1 }}>
            <Box
              mx="auto"
              w={10}
              h={10}
              style={{
                borderRadius: "50%",
                backgroundColor: step.status === "done" ? "white" : "red",
              }}
            />
            <Text fz="xs" c="dimmed" mt={17}>
              {step.date}
            </Text>
            <Text fz="sm">{step.label}</Text>
          </Box>
        ))}
      </Flex>
    </>
  );
}
