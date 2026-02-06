import {
  Container,
  Grid,
  Text,
  Paper,
  Image,
  Group,
  SimpleGrid,
  SegmentedControl,
} from "@mantine/core";
import { useMockData } from "../../hooks/useMockData";
import { useNavigate } from "react-router-dom";
import { StrategicPlanningCard } from "../../components/details/StrategicPlanningCard";
import { StatsCard } from "../../components/details/StatsCard";
import { OverviewCard } from "../../components/details/OverviewCard";
import { LeadersSection } from "../../components/details/LeadersSection";
import { useState } from "react";
import { EvidenceTable } from "../../components/details/EvidenceTable";
import { RecentActivities } from "../../components/common/RecentActivities";
import { CommentsSection } from "../../components/details/CommentsSection";

interface StrategicPlanningData {
  stats: any[];
  strategicRequirements: any[];
  mockLeaders: any[];
  recentActivities: any[];
}

export default function StrategicPlanning() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Overview");
  const data = useMockData<StrategicPlanningData>("details.json");

  if (!data) return <div>Loading...</div>;

  return (
    <Container size="xl" p="md">
      {/* Header */}
      <Group mb="md">
        <Image
          src="/src/assets/icons/back.svg"
          w={24}
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
        <Text fw="bold" fz="lg">
          Digital Transformation Strategic Planning
        </Text>
      </Group>

      <Grid gutter="md">
        {/* Top Card */}
        <Grid.Col span={12}>
          <Paper shadow="xs" p="md">
            <StrategicPlanningCard />
          </Paper>
        </Grid.Col>

        {/* Stats Cards */}
        <Grid.Col span={12}>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} mt="md">
            {data.stats.map((stat, i) => (
              <StatsCard key={i} {...stat} />
            ))}
          </SimpleGrid>
        </Grid.Col>

        {/* Tabs */}
        <Grid.Col span={12}>
          <SegmentedControl
            data={["Overview", "Evidence"]}
            size="md"
            value={activeTab}
            onChange={setActiveTab}
          />
        </Grid.Col>

        {/* Conditional Sections */}
        {activeTab === "Overview" ? (
          <>
            <Grid.Col span={12}>
              <Paper shadow="xs" p="md" mt="md">
                <OverviewCard
                  strategicRequirements={data.strategicRequirements}
                />
              </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
              <Paper shadow="xs" p="md" mt="md">
                <LeadersSection mockLeaders={data.mockLeaders} />
              </Paper>
            </Grid.Col>
          </>
        ) : (
          <>
            <Grid.Col span={12}>
              <Paper shadow="xs" p="md" mt="md">
                <EvidenceTable />
              </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8 }}>
              <Paper shadow="xs" p="md" mt="md">
                <Text fw="bold" fz={16} mb="sm">
                  Comments
                </Text>
                <CommentsSection />
              </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Paper shadow="xs" p="md" mt="md">
                <Text fw="bold" fz={16} mb="sm">
                  Recent Activities
                </Text>
                <RecentActivities activities={data.recentActivities} />
              </Paper>
            </Grid.Col>
          </>
        )}
      </Grid>
    </Container>
  );
}
