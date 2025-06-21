import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  date: string;
  status: 'pending' | 'completed' | 'due';
}

const App: React.FC = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [statusFilter, setStatusFilter] = useState<'pending' | 'completed' | 'due' | 'All'>('All');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [idCounter, setIdCounter] = useState(1);

  const handleAdd = () => {
    if (title.trim() !== '' && date !== '') {
      const newTask: Task = {
        id: idCounter,
        title,
        date,
        status: 'pending',
      };
      setTasks([...tasks, newTask]);
      setIdCounter(idCounter + 1);
      setTitle('');
      setDate('');
    }
  };

  const markTask = (id: number) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, status: 'completed' } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const today = new Date().toISOString().split('T')[0];

  const updatedTasks = tasks.map(task => {
    if (task.status === 'pending' && task.date < today) {
      return { ...task, status: 'due' };
    }
    return task;
  });

  const filteredTasks =
    statusFilter === 'All'
      ? updatedTasks
      : updatedTasks.filter((task) => task.status === statusFilter);

  return (
    <div className="h-screen w-screen bg-black text-white">
      <div className="h-full w-[70%] mx-auto p-6 bg-gray-950 rounded-xl">

        <h1 className="text-4xl font-bold text-center mb-6 text-purple-400">Todo</h1>

        <div className="flex flex-col sm:flex-row gap-2 mb-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="flex-1 bg-black text-white border border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleAdd}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-200"
          >
            Add
          </button>
        </div>

        <div className="flex justify-center gap-3 mb-6">
          <button
            className={`px-4 py-1 rounded-full transition ${
              statusFilter === 'All' ? 'bg-purple-500 text-white' : 'bg-gray-700 text-white'
            }`}
            onClick={() => setStatusFilter('All')}
          >
            All
          </button>
          <button
            className={`px-4 py-1 rounded-full transition ${
              statusFilter === 'pending' ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-white'
            }`}
            onClick={() => setStatusFilter('pending')}
          >
            Pending
          </button>
          <button
            className={`px-4 py-1 rounded-full transition ${
              statusFilter === 'completed' ? 'bg-green-500 text-black' : 'bg-gray-700 text-white'
            }`}
            onClick={() => setStatusFilter('completed')}
          >
            Completed
          </button>
          <button
            className={`px-4 py-1 rounded-full transition ${
              statusFilter === 'due' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'
            }`}
            onClick={() => setStatusFilter('due')}
          >
               Due
          </button>
        </div>

        <h3 className="text-2xl font-semibold mb-3 text-purple-300">
          {statusFilter.toUpperCase()} Tasks
        </h3>

        {filteredTasks.length === 0 ? (
          <p className="text-gray-400">No {statusFilter} tasks</p>
        ) : (
          <ul className="space-y-3">
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center p-4 bg-gray-800 rounded-lg border border-gray-700"
              >
                <div>
                  <div className="text-lg font-medium">{task.title}</div>
                  <div className="text-sm text-gray-400">{task.date}</div>
                </div>

                <div className="flex gap-2">
                  {task.status === 'pending' && (
                    <button
                      onClick={() => markTask(task.id)}
                      className="bg-green-500 text-black px-2 py-1 rounded hover:bg-green-600"
                    >
                      ✔️
                    </button>
                  )}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    🗑️ 
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
