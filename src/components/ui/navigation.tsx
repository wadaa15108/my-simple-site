import { Stack, NavLink } from "@mantine/core";
import { FaExternalLinkAlt, FaGithub, FaWordpress } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { GIT_URL, WP_URL } from "../../constants/link";

export const Navigation = () => {
  return (
    <Stack>
      <NavLink
        component={Link}
        to="/"
        label="Home"
        leftSection={<MdHome size="32px" />}
      />
      {/* リンクを追加 */}
      <LinkNavigation />
    </Stack>
  );
};

const LinkNavigation = () => {
  return (
    <Stack gap="4px">
      <NavLink
        href={GIT_URL}
        label="GitHub"
        target="_blank"
        leftSection={<FaGithub size="32px" />}
        rightSection={<FaExternalLinkAlt />}
        variant="subtle"
        active
        style={{ borderRadius: "12px" }}
      />
      <NavLink
        href={WP_URL}
        label="WordPress"
        target="_blank"
        leftSection={<FaWordpress size="32px" />}
        rightSection={<FaExternalLinkAlt />}
        variant="subtle"
        active
        style={{ borderRadius: "12px" }}
      />
      {/* リンクを追加 */}
    </Stack>
  );
};
