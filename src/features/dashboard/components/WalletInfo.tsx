import { Button } from "@mui/material"
import DashboardSession from "./DashboardSession"
import { Column, Row } from "../../../themes/SComponents"

export default function WalletInfo() {
  return (
    <DashboardSession>
        <Column $alignItems='flex-start'>
          <Row>Total Balance: </Row>
          <Row>
            <Button variant="contained">Swap</Button>
            <Button variant="contained">Transfer</Button>
          </Row>
        </Column>
      </DashboardSession>
  )
}