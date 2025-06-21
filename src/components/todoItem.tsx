import React from 'react';

interface Props {
  text: string;
  onDelete: () => void;
}

const TodoItem: React.FC<Props> = ({ text, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span>{text}</span>
      <button onClick={onDelete} className="text-red-500">Delete</button>
    </div>
  );
};

export default TodoItem;
