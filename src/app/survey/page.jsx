import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Agenda from "../components/templates/Agenda";

export default function Question() {
    return (
        <>
        <SignedIn>
        <Agenda/>
        </SignedIn>
        <SignedOut>
        <h1>Please sign in to continue</h1>
        </SignedOut>
        </>
    )
}