import { AppShell, Avatar, Burger, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { Navigation } from "./navigation";
import { useMediaQuery } from "@mantine/hooks";
import avatar from "/cat.jpg";

export const HEADER_HEIGHT = "60px";
export const MAIN_HEIGHT = "100vh";

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
      <AppShell.Header
        style={{
          background: "linear-gradient(to right, #487CA3, #2a77d1)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Group justify="space-between" px="12px" align="center" h="100%">
          <Group justify="flex-start">
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
          <Avatar src={avatar} />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" bg="#BAC1C7">
        <Navigation />
      </AppShell.Navbar>

      <AppShell.Main
        style={{
          alignItems: "center",
          padding: 0,
          margin: 0,
          width: "100%",
          maxWidth: "100%",
        }}
      >
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
