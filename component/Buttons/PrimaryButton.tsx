'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import HubSpotFormPosGraduacao from '../HubSpot/FormHubSot';

export default function PrimaryButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formId, setFormId] = useState('');
  const [curso, setCurso] = useState('');
  const [cursoModalidade, setCursoModalidade] = useState('');

  const searchParams = useSearchParams();

  useEffect(() => {
    const modality = searchParams.get('modality');

    switch (modality) {
      case 'graduacao':
        setFormId('caa403a8-2b98-48aa-bf70-438761e89243');
        setCurso('graduação');
        setCursoModalidade('graduação');
        break;
      case 'segunda-graduacao':
        setFormId('35903b3b-be2b-46e5-9da4-dc466159a2a0');
        setCurso('segunda graduação');
        setCursoModalidade('segunda graduação');
        break;
      case 'pos-graduacao':
        setFormId('07ed6974-53d8-49b1-8d6c-1f30efdb3c06');
        setCurso('pós-graduação');
        setCursoModalidade('pós-graduação');
        break;
      case 'disciplina-isolada':
        setFormId('151d36f1-f588-42cd-aa35-848f21d1a10d');
        setCurso('disciplina isolada');
        setCursoModalidade('disciplina isolada');
        break;
      default:
        // fallback para pós-graduação
        setFormId('07ed6974-53d8-49b1-8d6c-1f30efdb3c06');
        setCurso('pós-graduação');
        setCursoModalidade('pós-graduação');
        break;
    }
  }, [searchParams]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#14F708] hover:bg-lime-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition"
      >
        GARANTIR DESCONTO DA BLACK
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-[#00000042] backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black rounded-lg shadow-lg p-6 max-w-md w-full">
              <HubSpotFormPosGraduacao
                classForm="form-page-course-conexao"
                curso={curso}
                cursoModalidade={cursoModalidade}
                onFormSubmit={() => console.log('Formulário enviado!')}
                formId={formId}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
