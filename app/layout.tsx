import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import SupabaseLogo from "@/components/supabase-logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Project Management App",
	description: "A comprehensive project and employee management system",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body className="bg-background text-foreground">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<main className="min-h-screen">
						<div className="">
							{/* <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
								<div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
									<div className="flex gap-5 items-center font-semibold">
										<Link href={"/"}>Next.js Supabase Starter</Link>
										<div className="flex items-center gap-2">
											<DeployButton />
										</div>
									</div>
									{!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
								</div>
							</nav> */}
							<nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 top-0 z-20">
								<div className="container mx-auto flex justify-between items-center">
									<a href="/" className="text-xl font-bold">
										Dr. Reach Project Management
									</a>
									<div>
										<a href="/dashboard" className={`mr-4`}>
											Dashboard
										</a>
										<a href="/projects" className="mr-4">
											Projects
										</a>
										<a href="/employees" className="mr-4">Employees</a>
										<a href="/payroll" className="mr-4">Payroll</a>
									</div>
								</div>
							</nav>
							<div className="flex flex-col justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto p-8">
								{children}
							</div>

							<footer className="w-full flex flex-col items-center justify-center border-t text-center text-xs gap-4 py-2 bottom-0 absolute">
								<div className={`flex items-center mt-4`}>
									<p className={`text-xs`}>
										©️Copyright 2024 All rights reserved | Dr. Reach -
										Healthunity Solutions Pvt. Ltd.
									</p>
								</div>
								<div className={`flex`}>
									<p className={`flex items-center gap-2`}>
										Powered by{" "}
										<a
											href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
											target="_blank"
											rel="noreferrer">
											<SupabaseLogo width="120" height="20" />
										</a>
									</p>
									<ThemeSwitcher />
								</div>
							</footer>
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
