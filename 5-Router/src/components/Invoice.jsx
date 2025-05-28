import { useNavigate, useParams } from "react-router-dom"
import { getInvoicesByNumber } from "../data";


export default function Invoice() {

    let params = useParams();
    let navigate = useNavigate();

    let invoice = getInvoicesByNumber(Number(params.invoiceId))

    return(
        <section className="invoice">
            <h1>Fatura: {invoice.name}</h1>
            <h2>Total: {invoice.amount}</h2>
            <h3>{invoice.name} - {invoice.number}</h3>
            <p>Data: {invoice.due}</p>
            <hr />

            <button onClick={ ()=> navigate('/expenses')}> Ver despesas</button><br/>
            <button onClick={ ()=> navigate(-1)}> Go Back</button><br/>
            <button onClick={ ()=> navigate('/')}> Home Page </button>
            
        </section>
    );
}