import { Stack } from "@mui/material";
import CustomAppHeader from "./CustomAppHeader";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack alignItems={"center"} width={"100vw"}>
      <Stack padding={0} maxWidth={1400} width={"100%"}>
        <CustomAppHeader />
        <Stack
          sx={{
            padding: { xs: 1.5, md: 2, lg: 3 },
          }}
        >
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default PageLayout;
