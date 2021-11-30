import { ReactNode } from "react";
type Props = {
    children?: ReactNode;
  };

  export default function Layout({ children }: Props) {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
        <div className='
            flex flex-col
            bg-white
            shadow-md
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            py-8
            rounded-3xl
            w-50
            max-w-md'>
                {children}
            </div>
        </div>
    )
  }