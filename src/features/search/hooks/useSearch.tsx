import { useRouter } from "@cher1shrxd/loading";
import { useState } from "react";

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      router.push(`/search?query=${query}`);
    }
  };

  return {
    query,
    onChange,
    onEnter,
  };
}