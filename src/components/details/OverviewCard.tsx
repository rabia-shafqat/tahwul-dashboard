import { rem, Stack, Table, List } from "@mantine/core";
import classes from "../../styles/OverviewCard.module.css";

interface StrategicRequirement {
  label: string;
  value: string;
  items?: string[];
}

interface OverviewCardProps {
  strategicRequirements: StrategicRequirement[];
}

export function OverviewCard({ strategicRequirements }: OverviewCardProps) {
  return (
    <Stack gap="md">
      <Table
        withColumnBorders
        withRowBorders={false}
        verticalSpacing="md"
        horizontalSpacing="lg"
        highlightOnHover
        style={
          {
            "--mantine-table-striped-color": "var(--mantine-color-gray-0)",
            "--mantine-table-hover-color": "var(--mantine-color-blue-0)",
          } as React.CSSProperties
        }
      >
        <Table.Tbody>
          {/* Objective Row */}
          <Table.Tr>
            <Table.Td
              w={rem(220)}
              style={{ verticalAlign: "top", padding: "12px" }}
            >
              <div className={classes.cellhighlight}>Objective</div>
            </Table.Td>
            <Table.Td style={{ verticalAlign: "top", padding: "12px" }}>
              <div className={classes.cellhighlight}>
                Develop a digital transformation strategy aligned with the
                organization’s strategy and the objectives of Saudi Vision 2030.
              </div>
            </Table.Td>
          </Table.Tr>

          {/* Dynamic Requirements */}
          {strategicRequirements.map((item, index) => (
            <Table.Tr key={index}>
              <Table.Td
                w={rem(220)}
                style={{ verticalAlign: "top", padding: "12px" }}
              >
                <div className={classes.cellhighlight}>{item.label}</div>
              </Table.Td>

              <Table.Td style={{ verticalAlign: "top", padding: "12px" }}>
                <div className={classes.cellhighlight}>
                  {item.value && <div>{item.value}</div>}
                  {item.items && item.items.length > 0 && (
                    <List size="sm" spacing="xs" pl="md" mt="xs">
                      {item.items.map((point, i) => (
                        <List.Item key={i}>{point}</List.Item>
                      ))}
                    </List>
                  )}
                </div>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
}
