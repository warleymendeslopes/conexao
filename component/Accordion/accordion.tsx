"use client"
import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

interface AccordionItem {
    id: string
    title: string
    content: string
}

interface AccordionProps {
    items: AccordionItem[]
    allowMultiple?: boolean
    className?: string
    modality?: string
}

export default function Accordion(
    { items, allowMultiple = false, className = "", modality = "pos-graduacao" }: AccordionProps) {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set())
    const toggleItem = (id: string) => {
        setOpenItems((prev) => {
            const newOpenItems = new Set(prev)

            if (newOpenItems.has(id)) {
                newOpenItems.delete(id)
            } else {
                if (!allowMultiple) {
                    newOpenItems.clear()
                }
                newOpenItems.add(id)
            }

            return newOpenItems
        })
    }

    return (
        <div className={`w-full ${className}`}>
            {items.map((item, index) => {
                const isOpen = openItems.has(item.id)
                const isLast = index === items.length - 1

                return (
                    <div key={item.id} className="border-b border-zinc-700 last:border-b-0">
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-500/50 transition-colors"
                        >
                            <span className="text-zinc-900 font-medium">{item.title}</span>
                            <div className="flex-shrink-0 ml-4">
                                {isOpen ? (
                                    <ChevronDown size={20} className="text-zinc-900" />
                                ) : (
                                    <ChevronRight size={20} className="text-zinc-900" />
                                )}
                            </div>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="p-4 pt-0 text-zinc-900 leading-relaxed">{item.content}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


