import { createContext, useContext, useState, useEffect } from 'react'

export const InventarioContext = createContext(null)

export function InventarioProvider({ children }) {
    const [itens, setItens] = useState(() => {
        const stored = localStorage.getItem('minha-colecao')
        if (!stored) return [
            { id: 1, nome: 'Vinil Beatles - Abbey Road', categoria: 'Música', raridade: 'Raro', ano: 1969, notas: 'Edição original UK' },
            { id: 2, nome: 'Action Figure Spider-Man', categoria: 'Colecionáveis', raridade: 'Comum', ano: 2020, notas: 'Marvel Legends' },
            { id: 3, nome: 'Carta Charizard Holográfica', categoria: 'Cards', raridade: 'Ultra Raro', ano: 1999, notas: 'Primeira edição' },
        ]
        try { return JSON.parse(stored) } catch { return [] }
    })

    useEffect(() => {
        localStorage.setItem('minha-colecao', JSON.stringify(itens))
    }, [itens])

    const adicionarItem = (novoItem) => {
        setItens(prev => [...prev, novoItem])
    }

    const removerItem = (id) => {
        setItens(prev => prev.filter(item => item.id !== id))
    }

    const buscarItem = (id) => {
        return itens.find(item => item.id === Number(id))
    }

    return (
        <InventarioContext.Provider value={{
            itens,
            adicionarItem,
            removerItem,
            buscarItem,
            totalItens: itens.length
        }}>
            {children}
        </InventarioContext.Provider>
    )
}

export function useInventario() {
    const context = useContext(InventarioContext)
    if (!context) {
        throw new Error('useInventario deve ser usado dentro de um InventarioProvider')
    }
    return context
}