import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 md:px-7 lg:px-8 bg-gray-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/images/logo.png"
          alt="logo"
          height="50"
          width="50"
          className="mx-auto w-auto"
        />
        <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-800">
          Ingresar
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
