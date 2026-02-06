import { Stack } from "@mantine/core";
import { BarChart } from "@mantine/charts";

const data = [
  { month: "Jan", value: 88 },
  { month: "Feb", value: 76 },
  { month: "Mar", value: 82 },
  { month: "Apr", value: 42 },
  { month: "May", value: 88 },
  { month: "Jun", value: 78 },
  { month: "Jul", value: 54 },
  { month: "Aug", value: 88 },
  { month: "Sep", value: 80 },
  { month: "Oct", value: 52 },
  { month: "Nov", value: 88 },
  { month: "Dec", value: 80 },
];

export function PerformanceChart() {
  return (
    <Stack gap="xs" align="stretch">
      <BarChart
        h={260}
        data={data}
        dataKey="month"
        series={[
          { name: "value", color: "url(#barGradient)", label: "Performance" },
        ]}
        valueFormatter={(value) => `${value}%`}
        yScaleMax={100}
        yScaleMin={0}
        barProps={{ radius: 6 }}
        withTooltip={false}
        withLegend={false}
        withBarLabels={false}
        tickLine="none"
        gridAxis="none"
      >
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0078D7" />
            <stop offset="100%" stopColor="#f1f7fd" />
          </linearGradient>
        </defs>
      </BarChart>
    </Stack>
  );
}
