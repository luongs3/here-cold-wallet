import { Box } from "@mui/material";

export default function DashboardSession({styles, children} : {styles?: object, children: any}) {
  return (
    <Box sx={{backgroundColor: 'white', border: 'solic 1px #818087', borderRadius: '10px', padding: '10px', minWidth: '30vw'}}>
      {children}
    </Box>
  )
}