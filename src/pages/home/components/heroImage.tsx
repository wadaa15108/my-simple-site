import { useEffect, useState } from "react";
import { Text, Box } from "@mantine/core";
import { MAIN_HEIGHT } from "../../../components/ui/layout";

export const HeroImage = ({ text, src }: { text: string; src: string }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      style={{
        backgroundImage: `linear-gradient(rgba(224, 247, 250, 0.5), rgba(255, 255, 255, 0.5)), url(${src})`, // 明るいグラデーションを追加
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: MAIN_HEIGHT,
        width: "100%",
      }}
    >
      <Text
        size="40px"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          opacity: fadeIn ? 1 : 0,
          transition: "opacity 1s ease-in-out",
          textShadow: "0 4px 10px rgba(0, 0, 0, 0.7)",
        }}
      >
        {text}
      </Text>
    </Box>
  );
};
