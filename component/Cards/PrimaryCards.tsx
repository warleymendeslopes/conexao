import Image from "next/image";
export default function Cards({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex flex-col gap-4 items-start">
      <div className="text-2xl text-[#791919]">
        <Image
          src={`/icons/${icon}`}
          alt="Logo da Faculdade Conexão - Educação de Qualidade"
          width={30}
          height={15}
          priority
          className="mx-auto"
        />
      </div>
      <div>
        <h3 className="font-semibold text-[#791919]">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}