import { AppShell, Group, Image, ScrollArea, Box, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ReactNode } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import classes from "../styles/AppLayout.module.css";
import APP_ROUTES from "../constant/appRoutes";
import { useNavigation } from "../hooks/useNavigation";

export type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const [navbarVisible, { toggle: toggleNavbar }] = useDisclosure(true);
  const { activeScreen, onScreenChange } = useNavigation();

  const links = APP_ROUTES.map(({ label, icon: Icon, path }) => (
    <Group
      key={label}
      justify="space-between"
      gap={0}
      onClick={() => onScreenChange(path)}
      className={path === activeScreen ? classes.activeLink : classes.link}
    >
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Icon size={18} />
        <Text ml="md">{label}</Text>
      </Box>
    </Group>
  ));

  return (
    <AppShell
      navbar={navbarVisible ? { width: 300, breakpoint: "sm" } : undefined}
      padding="md"
      bg="#F5F8FA"
    >
      {navbarVisible && (
        <AppShell.Navbar p="md" bg="blue.9">
          <nav className={classes.navbar}>
            <div className={classes.header}>
              <Image src="/src/assets/icons/logo.svg" w={120} mb={5} />
            </div>

            <ScrollArea className={classes.links}>
              <div className={classes.linksInner}>{links}</div>
            </ScrollArea>
          </nav>
        </AppShell.Navbar>
      )}

      <AppShell.Main>
        {navbarVisible ? (
          <Image
            src={"/src/assets/icons/open.svg"}
            w={40}
            ml={-35}
            style={{ zIndex: 1000 }}
            pos="fixed"
            onClick={toggleNavbar}
          />
        ) : (
          <IconMenu2 size={18} onClick={toggleNavbar} />
        )}
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
