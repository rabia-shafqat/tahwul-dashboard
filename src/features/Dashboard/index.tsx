import {
  Container,
  Grid,
  Text,
  Title,
  Paper,
  SimpleGrid,
  Group,
} from "@mantine/core";
import { useMockData } from "../../hooks/useMockData";
import { StatCard } from "../../components/common/StatCard";
import { TimelineSection } from "../../components/dashboard/TimelineSection";
import { MaturityCard } from "../../components/dashboard/MaturityCard";
import { ComplianceScore } from "../../components/dashboard/ComplianceScore";
import { TopLeaders } from "../../components/dashboard/TopLeaders";
import { PerformanceChart } from "../../components/dashboard/PerformanceChart";
import { AuditReadinessWidget } from "../../components/dashboard/AuditReadinessWidget";
import { RecentActivities } from "../../components/common/RecentActivities";
import { StatusBadges } from "../../components/dashboard/StatusBadges";

interface DashboardData {
  timeline: any[];
  stats: any[];
  status: Record<string, string>;
  progressPerspectives: any[];
  recentActivities: any[];
  mockLeaders: any[];
  auditReadiness: { overall: number; details: any[] };
}

export default function Dashboard() {
  const data = useMockData<DashboardData>("dashboard.json");

  if (!data) return <div>Loading...</div>;

  return (
    <Container size="xl" p="md">
      {/* Page Title */}
      <Title order={2} mb="xl">
        Audit Dashboard
      </Title>

      <Grid gutter="md">
        {/* Project Timeline */}
        <Grid.Col span={12}>
          <Paper shadow="xs" p="md">
            <Text fw="bold" fz={16} mb="sm">
              Project Timeline
            </Text>
            <TimelineSection items={data.timeline} />
          </Paper>
        </Grid.Col>

        {/* Summary Stats */}
        <Grid.Col span={12}>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 6 }} mt="md">
            {data.stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </SimpleGrid>
        </Grid.Col>

        {/* Progress by Perspectives */}
        <Grid.Col span={12}>
          <Paper shadow="xs" p="lg" radius="lg">
            <Group justify="space-between">
              <Text fw="bold" fz={16}>
                Progress Status
              </Text>
              <StatusBadges status={data.status} />
            </Group>

            <SimpleGrid
              cols={{ base: 1, sm: 2, md: 3, lg: 5, xl: 10 }}
              mt="lg"
              spacing="md"
            >
              {data.progressPerspectives.map((p: any, i: number) => (
                <MaturityCard key={i} {...p} />
              ))}
            </SimpleGrid>
          </Paper>
        </Grid.Col>

        {/* Compliance, Leaders, and Activities */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper shadow="xs" p="md" h="100%">
            <Text fw="bold" fz={16} mb="sm">
              Overall Compliance Score
            </Text>
            <ComplianceScore />
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper shadow="xs" p="md" h="100%">
            <Text fw="bold" fz={16} mb="sm">
              Top Performing Perspective Leaders
            </Text>
            <TopLeaders mockLeaders={data.mockLeaders} />
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper shadow="xs" p="md" h="100%">
            <Text fw="bold" fz={16} mb="sm">
              Recent Activities
            </Text>
            <RecentActivities activities={data.recentActivities} />
          </Paper>
        </Grid.Col>

        {/* Charts & Readiness Widgets */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Paper
            shadow="xs"
            p="md"
            h="100%"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text fw="bold" fz={16} mb="sm">
              12-Month Performance
            </Text>
            <PerformanceChart />
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper shadow="xs" p="md" h="100%">
            <Text fw="bold" fz={16} mb="sm">
              Audit Readiness
            </Text>
            <AuditReadinessWidget />
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
