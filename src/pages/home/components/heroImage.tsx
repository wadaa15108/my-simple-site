import { useEffect, useState } from "react";
import { Image, Container, Text } from "@mantine/core";

export const HeroImage = ({ text, src }: { text: string; src: string }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container style={{ position: "relative", overflow: "hidden" }}>
      <Image
        src={src}
        style={{
          borderRadius: "12px",
          filter: "grayscale(100%)",
          objectFit: "fill",
        }}
      />

      <Text
        size="32px"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          opacity: fadeIn ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      >
        {text}
      </Text>
    </Container>
  );
};
