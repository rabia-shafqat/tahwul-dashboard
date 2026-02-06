import { Badge } from "@mantine/core";

interface StatusBadgesProps {
  status: Record<string, string>;
}

export function StatusBadges({ status }: StatusBadgesProps) {
  return (
    <div>
      {Object.entries(status).map(([status, color]) => (
        <Badge
          key={status}
          color={color}
          variant="dot"
          mt={6}
          style={{ border: "none" }}
        >
          {status.replace(/([A-Z])/g, " $1")}
        </Badge>
      ))}
    </div>
  );
}
