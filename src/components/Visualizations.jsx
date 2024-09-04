import ExpensePieChart from "./Piecharts/ExpensePieChart";
import PieChart from "./Piecharts/PieChart";
import IncomePieChart from "./Piecharts/IncomePieChart";
import { Box } from "@chakra-ui/react";
export default function Visualizations() {
    return (<section className="viz">
        <div className="Box">
            <div className="PieBox">
            <Box  p={4} borderRadius={"30px"} _hover={{ boxShadow: 'xl' }} transition={"0.5s ease-in-out"}>                    
                <div className="title">
                        Breakdown of Cumulative Expenses and Income
                    </div>
                    <PieChart />
                    </Box>
                <Box  p={4} borderRadius={"30px"} _hover={{ boxShadow: 'xl' }} transition={"0.5s ease-in-out"}>                    <div className="title">
                        Breakdown of Expenses:
                    </div>
                    <ExpensePieChart />
                    </Box>
                <Box  p={4} borderRadius={"30px"} _hover={{ boxShadow: 'xl' }} transition={"0.5s ease-in-out"}>
                    <div className="title">
                        Breakdown of Incomes:
                    </div>
                <IncomePieChart />
                </Box>
            </div>
        </div>
    </section>)
}