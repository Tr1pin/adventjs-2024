function calculatePrice(ornaments) {
    const values = {
        '*': 1,
        'o': 5,
        '^': 10,
        '#': 50,
        '@': 100
    };

    let total = 0;

    for (let i = 0; i < ornaments.length; i++) {
        const symbol = ornaments[i];
        const next = ornaments[i + 1];

        // Verificar si el adorno actual es válido
        if (!values.hasOwnProperty(symbol)) {
            return undefined; // Si un adorno no es válido, retornamos undefined
        }

        const value = values[symbol];
        const nextValue = values[next] || 0; // Si no hay siguiente, asumimos 0

        // Si el valor del adorno actual es menor que el del siguiente, lo restamos sino lo sumamos
        if (value < nextValue) {
            total -= value;
        } else {
            total += value;
        }
    }

    return total;
}