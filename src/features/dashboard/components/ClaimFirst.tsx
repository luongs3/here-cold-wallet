import { Button } from "@mui/material"
import DashboardSession from "./DashboardSession"
import { Column, Row } from "../../../themes/SComponents"

export default function ClaimFirst() {
  return (
    <DashboardSession>
        <Column sx={{backgroundImage: '/public/images/background_1.jpg'}}>
          <h5>Claim your first cold!</h5>
          <Button>Claim</Button>
        </Column>
      </DashboardSession>
  )
}