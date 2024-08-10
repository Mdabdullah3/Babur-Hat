// components/GoogleCallbackHandler.js
import { useEffect } from 'react';
import { useRouter } from 'next/router'; // or 'react-router-dom' in plain React
import { toast } from 'react-toastify';
import useUserStore from '../store/userStore';

const GoogleCallbackHandler = () => {
    const { fetchUser } = useUserStore();
    const router = useRouter();

    useEffect(() => {
        const handleGoogleLogin = async () => {
            try {
                await fetchUser(); // Fetch the user data after successful Google login
                toast.success('Login successful!');
                router.push('/'); // Redirect to home page
            } catch (error) {
                toast.error('Login failed. Please try again.');
                router.push('/auth/login'); // Redirect to login page on failure
            }
        };

        handleGoogleLogin();
    }, [fetchUser, router]);

    return null;
};

export default GoogleCallbackHandler;
