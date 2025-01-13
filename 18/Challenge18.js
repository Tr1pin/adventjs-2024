function findInAgenda(agenda, phone) {
    const data = [];

    for (const entry of agenda.split("\n")) {
        const [matchedPhone] = entry.match(/\+[-\d]+/) || [];
        const [_, name] = entry.match(/<([^>]+)>/) || [];

        if (!matchedPhone.includes(phone)) continue;

        const address = entry
            .replace(matchedPhone, "")
            .replace(`<${name}>`, "");

        data.push({
            address: address.trim(),
            name: name.trim()
        });
    }

    return data.length === 1 ? data[0] : null;
}


const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

console.log(findInAgenda(agenda, '34-600-123-456')); // { name: "Juan Perez", address: "Calle Gran Via 12" }
console.log(findInAgenda(agenda, '600-987')); // { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }
console.log(findInAgenda(agenda, '111')); // null
console.log(findInAgenda(agenda, '1')); // null