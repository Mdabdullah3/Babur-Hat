import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedPage = ({ session }) => {
    const router = useRouter();

    useEffect(() => {
        if (!session) {
            router.push("/auth/login");
        }
    }, [session, router]);

    if (!session) return <p>Loading...</p>;

    return <div>Protected content goes here</div>;
};

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions);

    if (!session) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
}

export default ProtectedPage;
