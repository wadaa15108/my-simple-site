import { AppShell, Burger, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { Navigation } from "./navigation";
import { useMediaQuery } from "@mantine/hooks";

const HEADER_HEIGHT = "60px";

export function Layout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 576px)");

  return (
    <AppShell
      header={{ height: HEADER_HEIGHT }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header style={{ backgroundColor: "#487CA3" }}>
        <Group justify="flex-start" align="center" h="100%" px="12px">
          {isMobile && (
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
            />
          )}
          <Text size="24px" style={{ color: "#FFFFFF", fontWeight: "bold" }}>
            {title}
          </Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" bg="#BAC1C7">
        <Navigation />
      </AppShell.Navbar>

      <AppShell.Main style={{ alignItems: "center" }}>{children}</AppShell.Main>
    </AppShell>
  );
}
