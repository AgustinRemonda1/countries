import { useState, useEffect, useCallback } from "react";

interface IEvent {
  target: {
    name: string;
    value: string;
  };
}

interface IProps {
  value: string;
  onChange: (value: string) => void;
  debounce: number;
}

const useSearcher = ({ value, onChange, debounce }: IProps) => {
  const [draft, setDraft] = useState<string>(value);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  const onTyping = useCallback((e: IEvent) => {
    setDraft(e.target.value);
  }, []);

  useEffect(() => {
    if (draft === value) return;
    const clear = setTimeout(() => {
      onChange(draft);
    }, debounce);

    return () => {
      clearTimeout(clear);
    };
  }, [draft]);

  return { draft, onTyping };
};

export default useSearcher;
