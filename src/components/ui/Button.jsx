export default function Button({ children }) {
  return (
    <button className="
      border
      border-[#D6B36A]
      text-[#D6B36A]
      px-10
      py-4
      uppercase
      tracking-[0.35em]
      transition-all
      duration-500
      hover:bg-[#D6B36A]
      hover:text-black
    ">
      {children}
    </button>
  );
}