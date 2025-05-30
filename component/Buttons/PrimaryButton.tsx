'use client';
import React, { useState } from 'react';
import HubSpotFormPosGraduacao from '../HubSpot/FormHubSot';


export default function PrimaryButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className=" bg-[#14F708] hover:bg-lime-500 text-black font-bold py-3 px-6 rounded-full shadow-lg transition"
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
                        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                            <HubSpotFormPosGraduacao
                                curso={''}
                                cursoModalidade={''}
                                onFormSubmit={() => {
                                    console.log('Formulário enviado!')
                                }}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}