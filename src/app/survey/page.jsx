import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Header from "../components/organisms/header";
import Topic from "../components/templates/topics";

export default function Question() {
    return (
        <>
        <SignedIn>
        <UserButton />
        <Header/>
        <Topic/>
        </SignedIn>
        <SignedOut>
        <h1>Please sign in to continue</h1>
        </SignedOut>
        </>
    )
}