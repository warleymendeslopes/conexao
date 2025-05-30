import Accordion from "@/component/Accordion/accordion";
import ListAreas from "@/layouts/Area/page";
import PrimaryButton from "@/component/Buttons/PrimaryButton";
import Cards from "@/component/Cards/PrimaryCards";
import OfferPos from "@/component/Offers/pos";
import BestCourses from "@/layouts/Slider/BestCourses";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="banner h-[130vh] sm:h-[80vh]">
        <div className="container mx-auto px-4 ">
          <div className="w-full lg:w-130 flex justify-center">
            <div className="flex flex-col w-full ">
              <OfferPos />
              <Suspense fallback={<div>Carregando botão...</div>}>
                <PrimaryButton />
              </Suspense>
              <div className="flex justify-center mb-20 mt-5 ">
                <p className="text-center text-sm w-100">*Você só poderá ser matriculado se tiver Graduação e Colação de Grau!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListAreas />
      <div className="py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className=" ms:w-full ">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#A31711] mb-4 text-center sm:text-left">
              Por que fazer minha Pós na Faculdade Conexão?
            </h2>
            <p className="text-gray-700 mb-6 text-center sm:text-left">
              A Faculdade Conexão é uma instituição de ensino superior credenciada junto ao MEC,
              com cursos autorizados e reconhecidos na modalidade EaD, permitindo que atendamos
              alunos em todo o Brasil.
            </p>
            <div className="hidden sm:flex justify-center sm:justify-start">
              <Suspense fallback={<div>Carregando botão...</div>}>
                <PrimaryButton />
              </Suspense>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-6">
            <Cards
              title="RECONHECIMENTO DO MEC"
              description="Tenha ao final do seu curso, um certificado reconhecido pelo MEC, que vai te possibilitar atuar em qualquer lugar do Brasil."
              icon="reconhecimentomec.svg"
            />
            <Cards
              title="TCC OPCIONAL"
              description="Você escolhe se realiza o trabalho de conclusão de curso ou não. Adaptamos a nossa metodologia às suas necessidades."
              icon="tccopcional.svg"
            />
            <Cards
              title="CONCLUSÃO EM 4 MESES"
              description="Aqui a conclusão é em tempo recorde! Esteja preparado para ampliar suas conquistas profissionais em apenas 4 meses."
              icon="4meses.svg"
            />
            <Cards
              title="CERTIFICADO EM 24 HORAS"
              description="Após a conclusão do seu curso, você recebe seu certificado de conclusão digital em até 24 horas, com a mesma validade de um certificado presencial."
              icon="em24h.svg"
            />
            <div className="flex sm:hidden justify-center">
              <Suspense fallback={<div>Carregando botão...</div>}>
                <PrimaryButton />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto px-4 sm:px-40 mt-10 mb-10">
          <div className="content-cards mt-5">
            <BestCourses />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-40 mt-10 mb-10">
        <div className="content-cards mt-5">
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#A31711] mb-4 text-center sm:text-left">
              Perguntas Frequentes
            </h2>
            <div className="bg-zinc-200/80 rounded-lg overflow-hidden backdrop-blur-sm">
              <Accordion
                items={[
                  {
                    id: "faq1",
                    title: "Como funciona o sistema de pagamento?",
                    content:
                      "Aceitamos cartões de crédito, débito, PIX e boleto bancário. O pagamento é processado de forma segura através de nossa plataforma.",
                  },
                  {
                    id: "faq2",
                    title: "Posso cancelar minha assinatura a qualquer momento?",
                    content:
                      "Sim, você pode cancelar sua assinatura a qualquer momento através do painel de controle ou entrando em contato com nosso suporte.",
                  },
                  {
                    id: "faq3",
                    title: "Há garantia de reembolso?",
                    content: "Oferecemos garantia de reembolso de 30 dias para todos os nossos planos, sem perguntas.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


