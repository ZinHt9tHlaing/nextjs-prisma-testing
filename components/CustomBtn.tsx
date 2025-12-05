"use client";

import { useFormStatus } from "react-dom";

type CustomBtnProps = {
  submitting: string;
  label: string;
};

const CustomBtn = ({ submitting, label }: CustomBtnProps) => {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        type="submit"
        disabled={pending}
        className="bg-blue-600 text-white p-2 cursor-pointer disabled:cursor-not-allowed active:scale-90 duration-200"
      >
        {pending ? <span className="animate-pulse">{submitting}</span> : label}
      </button>
    </div>
  );
};

export default CustomBtn;
