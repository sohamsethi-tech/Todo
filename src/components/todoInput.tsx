import React, { useState } from 'react';

interface Props {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<Props> = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Add a task and press Enter"
      className="p-2 w-full border rounded"
    />
  );
};

export default TodoInput;
