"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useSignIn from 'react-auth-kit/hooks/useSignIn';

const Page = () => {
    const [emailToken, setEmailToken] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const router = useRouter();
    const signIn = useSignIn();

    const handleTokenChange = (e) => {
        setEmailToken(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        const getEmail = localStorage.getItem("userEmail");

        try {
            const response = await fetch('/api/auth/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: emailToken, email: getEmail }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }
            setSuccess(true);

            setTimeout(() => {
                localStorage.removeItem("userEmail");
                if (signIn({
                    auth: {
                        token: data.token,
                        type: 'Bearer'
                    },
                    userState: data.payload
                })) {
                    router.push('/dashboard/admin');
                } else {
                    setError("Failed to log in after verification.");
                }
            }, 2000);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResendToken = async () => {
        setResendLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/auth/resend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            alert('Token resent!');
        } catch (error) {
            setError(error.message);
        } finally {
            setResendLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center p-4 sm:p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Confirmation Token</h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">Token verified successfully!</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        name="email_token"
                        type="text"
                        placeholder="Enter your 6 digit token"
                        value={emailToken}
                        onChange={handleTokenChange}
                        className="block w-full border-2 border-slate-700 py-2 px-3 mb-4 rounded-lg focus:outline-none"
                        required
                    />
                    <div className="mb-4 text-center">
                        <p>
                            Didn't receive a token?{' '}
                            <span
                                className={`text-blue-800 cursor-pointer ${resendLoading ? 'opacity-50' : ''}`}
                                onClick={!resendLoading ? handleResendToken : null}
                            >
                                {resendLoading ? 'Resending...' : 'Resend'}
                            </span>
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-black text-white rounded-full mt-5 hover:bg-[#FA9090] transition duration-300"
                    >
                        Check
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
