import Image from "next/image";

function EmptyState() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-200">
      <div className="text-center items-center flex flex-col">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            src="/images/logo.png"
            alt="logo"
            height="100"
            width="100"
            className="mx-auto w-auto"
          />
          <h3 className="mt-2 text-2xl font-semibold text-gray-900">
            Seleccione un chat o un usuario!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default EmptyState;
