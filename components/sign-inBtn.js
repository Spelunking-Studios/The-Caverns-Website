import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInButton() {
    const { data: session } = useSession();
    if (session) {
        return (
            <button onClick={() => signOut()}>Signed in as {session.user.email} - Sign Out</button>
        )
    } else {
        return (
            <button onClick={() => signIn()}>Sign In</button>
        )
    }
}