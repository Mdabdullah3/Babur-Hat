/* eslint-disable react/display-name */
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useUserStore from '../store/userStore';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const { user } = useUserStore();
        useEffect(() => {
            if (!user) {
                router.push('/auth/login');
            }
        }, [user, router]);
        if (!user) {
            return <div>Loading...</div>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
