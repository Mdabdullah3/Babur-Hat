/* eslint-disable react/display-name */
import { useEffect } from 'react';
import useAuthStore from '../store/authStore';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const { user, isLoading } = useAuthStore();

        useEffect(() => {
            if (!isLoading && !user) {
                router.push('/auth/login');
            }
        }, [isLoading, user, router]);

        if (isLoading || !user) {
            return <div>Loading...</div>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
