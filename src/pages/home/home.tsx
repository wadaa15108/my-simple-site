import { Stack, Box } from "@mantine/core";
import { HeroImage } from "./components/heroImage";
import image from "/hero.jpg";
import { About } from "./components/about";

export const Home = () => {
  return (
    <Box w="100%" bg="#f9f9f9">
      <Stack align="center" mb="40px">
        <HeroImage text="Welcome To My Homepage" src={image} />
      </Stack>

      <Stack align="center" w="100%">
        <About />
      </Stack>
    </Box>
  );
};
