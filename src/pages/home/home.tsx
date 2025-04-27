import {
  Container,
  Text,
  Button,
  Stack,
  Group,
  Box,
  Anchor,
  List,
  ListItem,
} from "@mantine/core";
import { GIT_URL } from "../../constants/link";
import { HeroImage } from "./components/heroImage";
import image from "/cat.jpg";
import { BoldText } from "../../components/text/text";

export const Home = () => {
  return (
    <Container size="lg" style={{ padding: "20px" }}>
      <Stack align="center" gap="xs" style={{ marginBottom: "40px" }}>
        <HeroImage text="Welcome To My Homepage" src={image} />
      </Stack>

      <Stack style={{ marginBottom: "40px" }} align="center">
        <BoldText>About</BoldText>
        <List>
          <ListItem>
            このページはMantineの学習を目的として作成されています
          </ListItem>
          <ListItem>使用技術はTypescript/React/Mantineです</ListItem>
        </List>
      </Stack>

      <Stack align="center">
        <Anchor href={GIT_URL} target="_blank">
          <Button variant="outline">GitHub</Button>
        </Anchor>
      </Stack>
    </Container>
  );
};
