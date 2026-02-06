import { Table, Badge } from "@mantine/core";

export function EvidenceTable() {
  return (
    <Table
      verticalSpacing="md"
      horizontalSpacing="lg"
      // Optional: global style override for thead
      styles={{
        thead: {
          backgroundColor: "var(--mantine-color-gray-1)", // light gray highlight
        },
        th: {
          color: "var(--mantine-color-dark-8)",
          fontWeight: 400,
          textTransform: "uppercase",
          fontSize: "12px",
        },
        td: {
          fontSize: "12px",
        },
      }}
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Document Number</Table.Th>
          <Table.Th>Document Name</Table.Th>
          <Table.Th>Document Lead</Table.Th>
          <Table.Th>Document Preparer</Table.Th>
          <Table.Th>Date</Table.Th>
          <Table.Th>Due Date</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        <Table.Tr>
          <Table.Td>5.4.1.1</Table.Td>
          <Table.Td>Digital_Transformation_Plan.Pdf</Table.Td>
          <Table.Td>Ahmed Khaled</Table.Td>
          <Table.Td>Ahmed Khaled</Table.Td>
          <Table.Td>2025-08-01</Table.Td>
          <Table.Td>2025-08-01</Table.Td>
          <Table.Td>
            <Badge color="teal" variant="light">
              Approved
            </Badge>
          </Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Td>5.4.1.1</Table.Td>
          <Table.Td>Digital_Transformation_Plan.Pdf</Table.Td>
          <Table.Td>Ahmed Khaled</Table.Td>
          <Table.Td>Ahmed Khaled</Table.Td>
          <Table.Td>2025-08-01</Table.Td>
          <Table.Td>2025-08-01</Table.Td>
          <Table.Td>
            <Badge color="teal" variant="light">
              Approved
            </Badge>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>5.4.1.1</Table.Td>
          <Table.Td>Digital_Transformation_Plan.Pdf</Table.Td>
          <Table.Td>Ahmed Khaled</Table.Td>
          <Table.Td>Ahmed Khaled</Table.Td>
          <Table.Td>2025-08-01</Table.Td>
          <Table.Td>2025-08-01</Table.Td>
          <Table.Td>
            <Badge color="yellow" variant="light">
              Pending Review
            </Badge>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
