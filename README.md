Features:-

 Add tasks with title and date

 Task statuses:

Pending – default status when added

Completed – when marked done

Due – if the date passes while still pending

 Filter tasks by status: All, Pending, Completed, Due

 Delete tasks anytime

How it Looks
The app layout takes up 70% of the screen width, centered on the page with a sleek black background, modern buttons, and neat task cards.




todo-app/
│
├── public/
├── src/
│   ├── App.tsx         // Main component
│   ├── main.tsx        // Entry point
│   ├── index.css       // Custom styles
│
├── tailwind.config.js
├── package.json
├── tsconfig.json
└── README.md
How It Works:-

When you add a task, it’s marked as pending by default.

Every time the app runs, it checks if any pending task’s date has passed. If it has, the task status automatically changes to due.

You can:

✔️ Mark tasks as Completed

🗑️ Delete tasks

Filter buttons let you quickly view All, Pending, Completed, or Due tasks.

Tech Used:-
React 

TypeScript

Tailwind CSS 

Vite 


