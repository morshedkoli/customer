export default async function UserItem() {
  let data = await fetch("http://localhost:3000/api/user");
  let user = await data.json();

  return (
    <div className="flex items-center justify-center gap-2 border rounded-[16px] p-2">
      <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-bold flex items-center justify-center">
        <p>UN</p>
      </div>

      <div>
        <p className="text-[16px] font-bold">
          {user["name"] || "Your Name Here"}
        </p>
        <p className="text-[12px] text-neutral-500">
          {user["email"] || "yourmail@gmail.com"}
        </p>
      </div>
    </div>
  );
}
