import { Stack, Text, List, ListItem, Box } from "@mantine/core";
import { FaReact, FaGithub } from "react-icons/fa"; // アイコンを使ってみます

export const About = () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100dvh",
      }}
    >
      <Stack align="center">
        <Text
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          About
        </Text>

        <List spacing="md">
          <ListItem
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "24px",
            }}
          >
            <FaReact style={{ marginRight: "10px", color: "#61dafb" }} />
            このページはMantineの学習を目的として作成しています
          </ListItem>
          <ListItem
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "24px",
            }}
          >
            <FaGithub style={{ marginRight: "10px", color: "#333" }} />
            使用技術はTypescript/React/Mantineです
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};
