'use client'
import { useEffect, useState, useCallback } from 'react'
import './hubSpotForm.css'
import { pushActiveCampaign } from '@/util/sendDb'

type HubSpotFormPosGraduacaoProps = {
  curso: string
  cursoModalidade: string
  onFormSubmit: () => void
  classForm?: string
  formId: string
}

const applyPhoneMask = () => {
  const phoneInput = document.querySelector('input[name="phone"]')
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      const inputElement = e.target as HTMLInputElement
      if (inputElement && inputElement.dataset) {
        const inputValue = inputElement.value
        let unformattedValue = inputElement.dataset.unformattedValue || ''

        let digitValue = inputValue.replace(/\D/g, '')
        if (digitValue.startsWith('55')) {
          digitValue = digitValue.substring(2)
        }

        if (digitValue.length < unformattedValue.length) {
          unformattedValue = digitValue
        } else {
          const newChars = digitValue.substring(unformattedValue.length)
          unformattedValue += newChars
        }
        unformattedValue = unformattedValue.substring(0, 11)

        let formattedValue = '+55-'

        if (unformattedValue.length > 0) {
          if (unformattedValue.length >= 2) {
            formattedValue += unformattedValue.substring(0, 2) + '-'
            if (unformattedValue.length >= 7) {
              formattedValue += unformattedValue.substring(2, 7) + '-'
              formattedValue += unformattedValue.substring(7)
            } else {
              formattedValue += unformattedValue.substring(2)
            }
          } else {
            formattedValue += unformattedValue
          }
        }

        inputElement.value = formattedValue
        inputElement.dataset.unformattedValue = unformattedValue
      }
    })
  }
}

const HubSpotFormPosGraduacao = ({
  curso,
  cursoModalidade,
  onFormSubmit,
  classForm,
  formId
}: HubSpotFormPosGraduacaoProps) => {
  const [, setFormSent] = useState(false)

  useEffect(() => {
    // Verificar se o script já foi carregado
    if (document.querySelector('script[src="https://js.hsforms.net/forms/embed/v2.js"]')) {
      return
    }

    const loadHubSpotForm = () => {
      if (typeof window !== 'undefined') {
        const script = document.createElement('script')
        script.src = 'https://js.hsforms.net/forms/embed/v2.js'
        script.async = true
        script.onload = () => {
          if (window.hbspt) {
            console.log('Carregando o formulário do HubSpot...')
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ; (window.hbspt.forms.create as any)({
                portalId: '47678762',
                formId: formId,
                target: '#hubspotForm',
                onFormReady: function () {
                  const cursoField = document.querySelector(
                    'input[name="curso"]',
                  ) as HTMLInputElement
                  if (cursoField) {
                    cursoField.value = curso
                  }
                },
                onFormSubmit: function (form: {
                  querySelector: (arg0: string) => HTMLInputElement
                }) {
                  console.log('Formulário enviado!')

                  const certificadoraField = document.querySelector(
                    'input[name="certificadora"]',
                  ) as HTMLInputElement

                  if (certificadoraField) {
                    certificadoraField.value = 'faculdade-conexao'
                    console.log(
                      'Valor associado ao campo certificadora:',
                      certificadoraField.value,
                    )
                  } else {
                    console.error('Campo com o ID especificado não encontrado.')
                  }

                  const formData = {
                    curso,
                    cursoModalidade,
                    phone: (
                      form.querySelector(
                        'input[name="phone"]',
                      ) as HTMLInputElement
                    )?.value,
                    email: (
                      form.querySelector(
                        'input[name="email"]',
                      ) as HTMLInputElement
                    )?.value,
                    nome: (
                      form.querySelector(
                        'input[name="firstname"]',
                      ) as HTMLInputElement
                    )?.value,
                  }

                  setFormSent(true)

                  setTimeout(() => {
                    onFormSubmit()
                  }, 2500)

                  if (cursoModalidade) {
                    const whatsappMessage = `Olá! Tenho interesse no curso de ${curso}.`
                    window.open(
                      `https://wa.me/5508007242300?text=${encodeURIComponent(whatsappMessage)}`,
                      '_blank',
                    )
                  } else {
                    setTimeout(() => {
                      window.scrollTo({
                        top: window.scrollY + 1000,
                        behavior: 'smooth',
                      })
                    }, 100)
                  }


                  pushActiveCampaign({
                    idform: 359,
                    codForm: '2b7012fe6051bec79b48886ba678224d',
                    dataLayer: cursoModalidade,
                    courseModality: cursoModalidade,
                    data: {
                      fullname: formData.nome,
                      email: formData.email,
                      phone: formData.phone,
                      nome_do_curso: curso,
                    },
                  })


                  const whatsappMessage = encodeURIComponent(
                    'Olá! Tenho interesse nos cursos de pós-graduação.',
                  )
                  window.open(
                    `https://api.whatsapp.com/send?phone=553198673277&text=${whatsappMessage}`,
                    '_blank',
                  )
                },
              })
          } else {
            console.error('O objeto hbspt não está disponível.')
          }
        }
        script.onerror = () => {
          console.error('Erro ao carregar o script do HubSpot.')
        }
        document.body.appendChild(script)
      }
    }

    loadHubSpotForm()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      applyPhoneMask()
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`FormHubSpot mx-auto mt-4 max-w-md ${classForm}`}>
      <h1 className="FormHubSpot H1 text-center font-bold">
        Dê o primeiro passo para o sucesso profissional
      </h1>
      <div id="hubspotForm" className="FormHubSpot p-6" />
      <input type="hidden" name="curso" value={curso} />
    </div>
  )
}

export default HubSpotFormPosGraduacao