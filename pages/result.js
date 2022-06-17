import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import PrintObject from "../components/layoutComponents/PrintObject";
import { fetchGetJSON } from "../utils/apiHelpers";
import Layout from "../layout/Layout";

const ResultPage = () => {
    const router = useRouter();
    // Fetch CheckoutSession from static page via
    // https://nextjs.org/docs/basic-features/data-fetching#static-generation
    const { data, error } = useSWR(
        router.query.session_id
            ? `/api/checkout_sessions/${router.query.session_id}`
            : null,
        fetchGetJSON
    );

    if (error) {
        return <div>failed to load</div>;
    }

    return (
        <Layout>
        <div className="page-container">
            Congrats
            <h1>Checkout Payment Result</h1>
            <p>
                With the data below, you can display a custom confirmation message to
                your customer.
            </p>
            <p>For example:</p>
            <hr />
            {/*<h3>*/}
            {/*    Thank you, {data?.payment_intent.charges.data[0].billing_details.name}.*/}
            {/*</h3>*/}
            {/*<p>*/}
            {/*    Confirmation email sent to{" "}*/}
            {/*    {data?.payment_intent.charges.data[0].billing_details.email}.*/}
            {/*</p>*/}
            <hr />

            <Link href="/">
                <a>Back home</a>
            </Link>
        </div>
        </Layout>
    );
};


export default ResultPage;