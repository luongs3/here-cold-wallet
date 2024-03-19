import { Button } from "@mui/material"
import { Column, Row } from "../../themes/SComponents"
import DashboardSession from "./components/DashboardSession"
import WalletInfo from "./components/WalletInfo"
import SeedPhraseSave from "./components/SeedphraseSave"
import ClaimFirst from "./components/ClaimFirst"

const Dashboard = () => {
  return (
    <Column>
      <WalletInfo />
      <SeedPhraseSave />
      <ClaimFirst />
    </Column>
  )
}

export default Dashboard