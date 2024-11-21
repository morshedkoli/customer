import React from "react";

export default function UserItem() {
  return (
    <div className="flex items-center justify-center gap-2 border rounded-[16px] p-2">
      <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-bold flex items-center justify-center">
        <p>UN</p>
      </div>

      <div>
        <p className="text-[16px] font-bold">Murshed al Main</p>
        <p className="text-[12px] text-neutral-500">murshedkoli@gmail.com</p>
      </div>
    </div>
  );
}
