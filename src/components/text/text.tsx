import { Text } from "@mantine/core";
import { ReactNode } from "react";

export const BoldText = ({ children }: { children: ReactNode }) => {
  return (
    <Text size="24px" style={{ fontWeight: "bold" }}>
      {children}
    </Text>
  );
};
