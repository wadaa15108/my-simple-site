import { Stack, Skeleton } from "@mantine/core";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <Stack>
        <Link to="/">Home</Link>
      </Stack>
      {Array(15)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={28} mt="sm" animate={false} />
        ))}
    </>
  );
};
