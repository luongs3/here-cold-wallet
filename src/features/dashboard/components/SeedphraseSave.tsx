import { Button } from "@mui/material"
import DashboardSession from "./DashboardSession"
import { Column, Row } from "../../../themes/SComponents"

export default function SeedPhraseSave() {
  return (
    <DashboardSession>
        <Column>
          <h4>Save your seed phrase</h4>
          <Button>Go to settings</Button>
        </Column>
      </DashboardSession>
  )
}