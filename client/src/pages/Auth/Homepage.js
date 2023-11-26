import react from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const HomePage = () => {
    const [auth,setauth] = useauth()
    return (
        <Layout title={"Best offers"}>
            <h1>Home page</h1>
            <pre>{JSON.stringify(auth, nuth, 4)}</pre>
        </Layout>
    );
}
export default HomePage;