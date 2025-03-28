'use client';

import { useState } from "react";

const EmailsBox = () => {
  const [selected, setSelected] = useState("inbox");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: "inbox", label: "Boîte de réception", icon: "inbox" },
    { id: "send", label: "Envoyés", icon: "send" },
    { id: "drafts", label: "Brouillons", icon: "drafts" },
    { id: "spam", label: "Spam", icon: "report" },
    { id: "trash", label: "Corbeille", icon: "delete" }
  ];

  return (
    <div className="flex">

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden p-4 text-white fixed top-30 left-4 z-10"
      >
        ☰
      </button>

      <div
        className={`fixed left-0 top-0 w-40 p-2 flex flex-col gap-1 shadow-md z-20 transition-transform 
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}
      >
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-xs transition-all 
                        ${selected === item.id ? "bg-primary text-white" : "hover:bg-gray-600 hover:text-white"}`}
          >

            <span className="material-symbols-outlined text-base">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default EmailsBox;
