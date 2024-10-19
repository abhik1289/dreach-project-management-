import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <main className="w-full max-w-md">
        <Image
          className="mx-auto mb-8"
          src="/favicon.ico"
          alt="Dr. Reach Insights logo"
          width={180}
          height={38}
          priority
        />
        <LoginForm />
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </main>
    </div>
  );
}
