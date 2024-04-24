interface TableBoxProps {
  title: string;
  children: React.ReactNode;
}

export const TableBox = ({ title, children }: TableBoxProps) => {
  return (
    <div className="flex flex-col gap-y-2 shadow-md p-6 bg-gray-600 rounded-md hover:scale-110 cursor-pointer">
      <p className="text-center text-lg">{title}</p>
      <span className="text-center mt-auto">{children}</span>
    </div>
  );
};
