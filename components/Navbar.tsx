import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogIn, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
	const session = await auth();
	// console.log("session details: ", session);

	return (
		<header className="px-6 py-4 fixed z-10 top-0 right-0 left-0 bg-white shadow-md font-work-sans">
			<nav className="flex justify-between items-center">
				<Link href="/">
					<Image src="/logo.svg" alt="logo" width={144} height={30} />
				</Link>

				<div className="flex items-center gap-5 text-black">
					{session && session?.user ? (
						<>
							<Link href="/startup/create">
								<span className="flex gap-1 items-center max-sm:hidden font-semibold transition hover:text-emerald-700">
									<BadgePlus className="size-5" />
									Create
								</span>
								<BadgePlus className="size-6 sm:hidden" />
							</Link>
							<form
								action={async () => {
									"use server";

									await signOut({ redirectTo: "/" });
								}}
							>
								<button type="submit">
									<span className="flex gap-1 mt-[0.4rem] items-center max-sm:hidden text-red-400 hover:text-red-500">
										<LogOut className="size-5" />
										Logout
									</span>
									<LogOut className="size-6 sm:hidden text-red-400" />
								</button>
							</form>
							<Link href={`/user/${session?.id}`}>
								<Avatar className="size-10">
									<AvatarImage
										src={session?.user?.image || ""}
										alt={session?.user?.name || ""}
									/>
									<AvatarFallback>
										{session?.user?.name}
									</AvatarFallback>
								</Avatar>
							</Link>
						</>
					) : (
						<form
							action={async () => {
								"use server";

								await signIn("github");
							}}
						>
							<button
								type="submit"
								className="flex items-center gap-1 font-semibold hover:text-emerald-700 transition duration-300"
							>
								<LogIn className="size-5" />
								Login
							</button>
						</form>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
