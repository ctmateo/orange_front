const translateTypeId = (item: string) => {
  switch (item) {
    case "lasagna":
      return "Lasagna";
    case "burguer":
      return "Hamburguesa";
    case "saupotato":
      return "Salchipapa";
    case "corn":
      return "Mazorcada";
    case "milkshake":
      return "Malteada";
    case "grilled":
      return "Carnes";
    case "latte":
      return "Latte";
    case "juice":
      return "Jugo";
    case "drinks":
      return "Bebidas";
    case "beef":
      return "Cerveza";
    case "lemonade":
      return "Limonada";
    case "hotdog":
      return "Hot Dog";
    case "bbq":
      return "BBQ";
  }
};

export default translateTypeId;