import { useLocation } from "react-router-dom";
import NavLayout from "../layouts/NavLayout";
import Products from "./Products";

export default function PrivacyPolicy() {
    const location = useLocation();

    const title = location.state?.title || "Privacy Policy";
    const subtitle = location.state?.user || "Home -> Privacy Policy";

    return (
        // <NavLayout title={title} subtitle={subtitle}>
            <Products comingFrom={'PrivacyPolicy'} title={title} subtitle={subtitle} />
        // </NavLayout>
    );
}