// app/login-sign-up-page/page.tsx
import { login, signup } from '../auth/actions'
import { logout } from '@/app/auth/actions'
import { createClient } from '@/utils/supabase/server'

export default async function LoginPage() {
    // Server-side check
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">

            {/* Display status if logged in */}
            {user && (
                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm text-green-700 border border-green-200">
                    Currently signed in. {/* Currently signed in as: <strong>{user.email}</strong> */}
                </div>
            )}

            <div className="w-full max-w-[448px] rounded-xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
                {/* Brand/Logo */}
                <div className="mb-8 flex flex-col items-center text-center">
                    <div className="flex items-center gap-1 mb-2">
                        <div className="rounded-lg bg-red-600 px-1.5 py-0.5 text-xl font-bold text-white">
                            Video
                        </div>
                        <span className="text-xl font-semibold tracking-tight">Tube</span>
                    </div>
                    <h1 className="text-2xl font-normal text-gray-900">Sign in</h1>
                    {/* <p className="mt-2 text-base text-gray-600">Use your Google Account</p> */}
                </div>

                <form className="space-y-4">
                    <div className="space-y-1">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email or phone"
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-focus placeholder:text-gray-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-focus placeholder:text-gray-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none"
                            required
                        />
                        <div className="pt-1">
                            <button type="button" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                                Forgot password?
                            </button>
                        </div>
                    </div>

                    {/* UPDATED BUTTON SECTION: Removed Signup, Centered Login */}
                    <div className="flex flex-col items-center justify-end pt-6 sm:flex-row">
                        <button
                            formAction={login}
                            className="w-full rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>

            {/* Only show logout button if user is signed in */}
            {user && (
                <form action={logout} className="mt-4">
                    <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                        Sign Out
                    </button>
                </form>
            )}

            {/* Footer Links */}
            <div className="mt-8 flex w-full max-w-[448px] justify-between text-xs text-gray-500">
                <div className="flex gap-4">
                    <span>English (United States)</span>
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:underline">Help</a>
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Terms</a>
                </div>
            </div>
        </div>
    )
}