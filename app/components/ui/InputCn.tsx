import React from "react";
import { Input } from "@/components/ui/input";

interface InputCnProps {
  text: string;
  setText: (value: string) => void;
  fetchData: (searchText: string) => void;
}

function InputCn({ text, setText, fetchData }: InputCnProps) {
  const handleChange = (e: { target: { value: any } }) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    fetchData(text);
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <Input
        placeholder="Search for a character..."
        value={text}
        onChange={handleChange}
        className="dark:bg-stone-900 lg:w-2/5"
      />
    </form>
  );
}

export default InputCn;
