import { Stack } from "@mui/material";
import CustomAppHeader from "./CustomAppHeader";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack padding={0} maxWidth={1400} alignContent={"center"}>
      <CustomAppHeader />
      <Stack
        sx={{
          padding: { xs: 1.5, md: 2, lg: 3 },
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};
export default PageLayout;
