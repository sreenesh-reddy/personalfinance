import useFetch from "../hooks/useFetch"
import { Box } from "@chakra-ui/react";
export default function Tips() {
    const { tran } = useFetch();
    const curMonthNo = new Date().getMonth() + 1;
    const curMonTrans = tran.filter((x) => (x.createdAt.toDate().getMonth() + 1 === curMonthNo))

    const totalincome = curMonTrans.filter((x) => (x.type === '1')).reduce((sum, x) => sum + Number(x.amount), 0)
    const totalexpense = curMonTrans.filter((x) => (x.type === '0')).reduce((sum, x) => sum + Number(x.amount), 0)

    const twentypercent = totalincome * 0.20 - totalexpense



    return (<section className="viz" style={{transform:"scale(0.9)"}}>
        <div className="Box">
        <Box display='flex' stlyle={{ backgroundColor: "transparent", backdropFilter: "blur(20px)" }} flexDirection={'column'}>

<span style={{fontWeight:"550", fontSize:"50px", marginBottom:"20px"}}>💡 The 20% Rule</span>
<span style={{fontWeight:"450", fontSize:"30px", marginBottom:"10px"}}>A smart way to manage your finances!</span>
<p>It’s recommended that you spend only 20% of your monthly income on discretionary expenses (your wants). This ensures you’re saving and investing wisely for your future.
</p>
<br/>
{twentypercent > 0 ?
    <div>
        <p style={{color:"Green",fontWeight:"450", fontSize:"30px", marginBottom:"10px" }}> 20% month that you can spend is: {twentypercent}</p>
    </div>
    :
    <div>
        <p style={{color:"red",fontWeight:"450", fontSize:"30px", marginBottom:"10px" }}> You’ve Reached Your 20% Limit!</p>
        <br/>
        <p>Based on your income, you’ve already used up 20% of your monthly earnings. To stay on track:</p>
        <p><b>Income:</b>  Rs<span style={{color:"green", marginLeft:"10px"}}>{totalincome}</span></p>
        <p><b>Expense: </b>Rs<span style={{color:"red", marginLeft:"10px"}}>{totalexpense}</span></p>
        <br/>
        <p><b>Note:</b> Your current expenses have exceeded the 20% threshold. It's time to reconsider and avoid overspending.</p>
    </div>
}
</Box>
        </div>
    </section>

    )
}