export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export const priceFormatter = new Intl.NumberFormat('PT-br', {
    style: 'currency',
    currency: 'BRL'
})