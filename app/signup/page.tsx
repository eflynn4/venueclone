import Link from "next/link";

export default function SignUpPage() {
    return (
        <main className="relative min-h-[calc(100vh-60px)] flex justify-center">
        <div className="relative w-fit min-w-md h-fit flex flex-col items-center justify-center rounded-2xl bg-white mt-12 p-12">
            <h1 className="w-full text-left text-4xl font-bold text-black">Sign Up</h1>
            <p className="w-full mt-4 text-left text-gray-500">View your bookings and plan with ease.</p>
            <form className="mt-8 w-full space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="block w-full rounded-lg border-2 border-gray-300 text-base text-slate-700 placeholder:text-slate-500 active:border-gray-500 px-4 py-3"
                />
                <input
                    type="username"
                    placeholder="Username"
                    className="block w-full rounded-lg border-2 border-gray-300 text-base text-slate-700 placeholder:text-slate-500 active:border-gray-500 px-4 py-3"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="block w-full rounded-lg border-2 border-gray-300 text-base text-slate-700 placeholder:text-slate-500 active:border-gray-500 px-4 py-3"
                />
                <div className="flex flex-row">
                    <input type="checkbox" id="rememberMe" className="mr-2" />
                    <label htmlFor="rememberMe" className="text-gray-700">
                        I agree to the{" "}
                        <Link href="/terms" className="font-semibold text-[var(--color-navyblue)] hover:text-[var(--color-navyblue-light)] hover:underline">
                            Terms of Service
                        </Link>
                    </label>
                </div>
                <button
                    type="submit" className="w-full px-12 py-4 rounded-lg bg-[var(--color-navyblue)] hover:bg-[var(--color-navyblue-light)] text-white ">
                    Sign Up
                </button>
                <p className="text-center text-gray-700">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[var(--color-navyblue)] hover:text-[var(--color-navyblue-light)] hover:underline">
                        Log In
                    </Link>
                </p>
            </form>
        </div>
        </main>
    );
}