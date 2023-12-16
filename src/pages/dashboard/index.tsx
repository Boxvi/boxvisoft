import MainLayout from "@components/Layouts/MainLayout";
import {ReactElement} from "react";

const Dashboard = () => {
    return (
        <>
            <h1>DASHBOARD</h1>
        </>
    )
}


Dashboard.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout titulo="Dashboard">{page}</MainLayout>;
}

export default Dashboard;
