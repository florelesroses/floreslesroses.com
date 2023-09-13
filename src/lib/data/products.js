const PRODUCTS = [
    {
        id:1,
        name: "Globo 'te Amo'",
        image: "Screenshot_1.png",
        price: "15000",
        description: "globo 'te amo' x1 (una) unidad",
        category: "Globos Y Bombas",
        state: 1
    },
    {
        id:2,
        name: "Bonsaí De Jade ",
        image: "Screenshot_2.png",
        price: "90000",
        description: " Bonsaí de Jade. Bonsaí mediano x1 (una) unidad",
        category: "Bonsai ",
        state: 1
    },
    {
        id:3,
        name: "Bonsaí De Pino",
        image: "Screenshot_3.png",
        price: "90000",
        description: "Bonsaí de Pino. Bonsaí de pino mediano x1 (una) unidad y; mensaje personalizado",
        category: "Bonsaí",
        state: 1
    },
    {
        id:4,
        name: "Bonsaí Carbonero",
        image: "Screenshot_4.png",
        price: "90000",
        description: " Bonsái Carbonero: Bonsái Carbonero mediano x1 (una) unidad ",
        category: "Bonsaí",
        state: 1
    },
    {
        id:5,
        name: "Bonsai Carbonero Caliandra",
        image: "Screenshot_5.png",
        price: "90000",
        description: "Bonsai de tipo carbonero caliandra",
        category: "Bonsaí",
        state: 1
    },
    {
        id:6,
        name: "Anturio Blanco",
        image: "Screenshot_6.png",
        price: "60000",
        description: "Planta de anturio blanco perfecto para decorar tus espacios o para regalar.",
        category: "Bonsaí",
        state: 1
    },
    {
        id:7,
        name: "Flores De Rosas En Bouquet",
        image: "Screenshot_7.png",
        price: "55000",
        description: "Flores de Rosas 12 Doce Unidades en Bouquet Con Mensaje Personalizado",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:8,
        name: "Flores De Lirio, Gerberas Rosas Y Astromelias.",
        image: "Screenshot_8.png",
        price: "80000",
        description: "Bouquet de flores de lirio, gerberas rosas y astromelias.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:9,
        name: "Flores De Hortensias En Bouquet ",
        image: "Screenshot_9.png",
        price: "55000",
        description: "Bouquet de 2(und) de hortensias blancas y 2(und) de hortensias azules.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:10,
        name: "Flores De Lirio Y Rosas En Bouquet",
        image: "Screenshot_10.png",
        price: "89000",
        description: "Bouquet escalonado de 3 varas de lirios blancos, con 12(und) de rosas blancas más follaje.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:11,
        name: "Flores De Gerberas Surtidas En Bouquet",
        image: "Screenshot_11.png",
        price: "72000",
        description: "Bouquet de 15 (und) de Gerberas surtidas, perfectas para cualquier ocasión. ",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:12,
        name: "Flores De Rosas Y Astromelias.",
        image: "Screenshot_12.png",
        price: "98000",
        description: "Ramo Floral de 24 Rosas Rojas y Astromelias",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:13,
        name: "Flores De Rosas X12 Unidades",
        image: "Screenshot_13.png",
        price: "75000",
        description: "Bouquet de 12 rosas rosas, perfecto para cualquier ocasión",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:14,
        name: "Flores De Astromelias En Bouquet",
        image: "Screenshot_14.png",
        price: "48000",
        description: "Bouquet de 2 paquetes surtido de astromelias de colores",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:15,
        name: "Flores De Rosas Blancas En Ramo",
        image: "Screenshot_15.png",
        price: "90000",
        description: "Flores de Rosas Blancas 20 Veinte Unidades en Ramo",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:16,
        name: "Flores De Gerberas Y Rosas En Cesta",
        image: "Screenshot_16.png",
        price: "105000",
        description: "Canasta surtida de flores de rosas y gerberas",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:17,
        name: "Bouquet De Girasol Y Rosa Con 3 Chocolates",
        image: "Screenshot_17.png",
        price: "55000",
        description: "Bouquet de girasol y rosa con 3 chocolates. Bouquet que contiene: Girasol x1 (una) unidad, Chocolates Ferrero Rocher x1 (una) unidad",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:18,
        name: "Flores De Rosas En Jarrón",
        image: "Screenshot_18.png",
        price: "130000",
        description: " Flores de Rosas 20 Veinte Unidades en Jarro",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:19,
        name: "Flor De Girasol En Solitario",
        image: "Screenshot_19.png",
        price: "19000",
        description: "Solitario de hermoso girasol.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:20,
        name: "Rosas Supreme",
        image: "Screenshot_20.png",
        price: "280000",
        description: "Rosas Rojas Por 100 Unidades.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:21,
        name: "Rosas Amarillas En Bouquet ",
        image: "Screenshot_21.png",
        price: "70000",
        description: "Rosas Amarillas Por Veinte 20 Unidades Con Mensaje Personalizado",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:22,
        name: "Rosa En Botón ",
        image: "Screenshot_22.png",
        price: "15000",
        description: "Rosa Roja en Papel ",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:23,
        name: "Flores De Astromelias Y Rosas Surtidas",
        image: "Screenshot_23.png",
        price: "180000",
        description: "Caja premium de 24 rosas surtidas, con 3 paquetes de astromelias surtidas",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:24,
        name: "Flores De Rosas Rosadas En Jarrón",
        image: "Screenshot_24.png",
        price: "120000",
        description: "Flores de Rosas Rosadas 16 Dieciséis Unidades en Jarrón",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:25,
        name: "Flores De Rosas En Estuche ",
        image: "Screenshot_25.png",
        price: "63000",
        description: "Flores de rosas por 12 unidades en estuche conico. ",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:26,
        name: "Rosas Rojas En Bouquet",
        image: "Screenshot_26.png",
        price: "60000",
        description: "Rosas Rojas En Bouquet",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:27,
        name: "Flores De Girasoles Y Rosas En Cesta ",
        image: "Screenshot_27.png",
        price: "135000",
        description: "Canasta de 24 (und) de rosas rojas, con 8 (und) de girasoles",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:28,
        name: "Bouquet De 3 Girasoles",
        image: "Screenshot_28.png",
        price: "45000",
        description: "Bouquet de 3 unidades de girasoles",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:29,
        name: "Flores De Hortensias En Bouquet",
        image: "Screenshot_29.png",
        price: "64000",
        description: "Dos (2) hortensias rosadas; Dos (2) Hortensias blancas; Seis (6) rosas rosadas y; Seis (6) blancas con follaje",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:30,
        name: "Rosas Y Hortensias En Jarrón ",
        image: "Screenshot_30.png",
        price: "120000",
        description: "rosas y hortensias en jarrón. Jarrón que contiene: rosas blancas varias; hortensias rosadas varias",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:31,
        name: "Flor De Girasol Mas Otras Flores",
        image: "Screenshot_31.png",
        price: "72000",
        description: "Flor De Girasol ",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:32,
        name: "Rosas Coquetas En Bouquet",
        image: "Screenshot_32.png",
        price: "60000",
        description: "Rosas Rojas en Bouquet Por Seis 06 Unidades en Cartulina Negra.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:33,
        name: "Rosas Para Tu Amor",
        image: "Screenshot_33.png",
        price: "150000",
        description: "Rosas Rojas y Astromelias. ",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:34,
        name: "Flores De Claveles En Forma De Mochila",
        image: "Screenshot_34.png",
        price: "37500",
        description: "Bouquet surtido de claveles de colores perfecto para cargar en forma de mochila.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:35,
        name: "Flores De Hortensias En Jarra De Cristal",
        image: "Screenshot_35.png",
        price: "70000",
        description: "Jarra de cristal de 4 hortensias surtidas.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:36,
        name: "Flores De Girasol Y Rosas En Bouquet Con Oso De Peluche",
        image: "Screenshot_36.png",
        price: "160000",
        description: "flores de margaritas x12 (doce) unidades; flores de rosas x20 (veinte) unidades en bouquet; oso de peluche x1 (una) unidad",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:37,
        name: "Flores Canasta De Girasoles Con Corona",
        image: "Screenshot_37.png",
        price: "127500",
        description: "Arreglo de girasoles, con lirio, 1 cerveza corona y Ferrero Rocher x8 unidades",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:38,
        name: "Flores De Girasoles En Cristal",
        image: "Screenshot_38.png",
        price: "117000",
        description: "Girasoles Grandes Por Doce (12) Unidades. color Amarilla perfectas para el Agradecimiento",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:39,
        name: "Flores Y Rosas En Jarrón",
        image: "Screenshot_39.png",
        price: "120000",
        description: "Flores le Roses: Flores Variadas y Rosas en Jarrón de Cristal",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:40,
        name: "Margaritas En Colores Surtidos En Bouquet",
        image: "Screenshot_40.png",
        price: "42500",
        description: "Flores Les Roses, Bouquet de 2 paquetes de margaritas en colores surtidos con decoración.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:41,
        name: "Flores De Girasoles En Caja",
        image: "Screenshot_41.png",
        price: "110000",
        description: "Caja de girasoles (6 und) decorada.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:42,
        name: "Chocolates Rosas Y Girasol",
        image: "Screenshot_42.png",
        price: "90000",
        description: "Flores le Roses: jarrón solitario de 6(und) Rosas y 1 (und) Girasol, con Ferrero Rocher x8 unidades.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:43,
        name: "Bouquet De 3 Rosas Rojas",
        image: "Screenshot_43.png",
        price: "40000",
        description: "Bouquet De 3 Rosas Rojas",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:44,
        name: "Flores De Girasoles Y Margaritas",
        image: "Screenshot_44.png",
        price: "150000",
        description: "Flores en Canasta Con Girasoles, Margaritas y Demás Complementos. de color Amarillo ideal para el Agradecimiento",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:45,
        name: "Rosas De Colores En Estuche 24 Unidades Surtidas",
        image: "Screenshot_45.png",
        price: "80000",
        description: "24 unidades de rosas en colores surtidos, empacadas en bonito estuche",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:46,
        name: "Jarrón De Hortensias Surtidas",
        image: "Screenshot_46.png",
        price: "95000",
        description: "Jarrón de cristal que contiene: Hortensia azul x4 (cuatro) unidades; Hortensia blanca x4 (cuatro) unidades; Vara de lirio blanco x4 (cuatro) unidades",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:47,
        name: "Bouquet De 5 Girasoles Y 12 Rosas Con Follaje",
        image: "Screenshot_47.png",
        price: "81000",
        description: "Bouquet decorado con follaje que contiene: Girasoles x5 (cinco) unidades; Rosas amarillas x12 (doce) unidades",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:48,
        name: "Rosas Blanca Y Rojas En Bouquet",
        image: "Screenshot_48.png",
        price: "100000",
        description: "Flores le Roses: Rosas de Temporada Rojiblanca Navidad Por Veinticuatro 24 Unidades.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:49,
        name: "Rosas Rojas Y Rosadas En Jarrón",
        image: "Screenshot_49.png",
        price: "130000",
        description: "Rosas Rosadas en Jarrón.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:50,
        name: "Flores De Margaritas Multicolor",
        image: "Screenshot_50.png",
        price: "44000",
        description: "Bouquet de margaritas surtidas en diferentes tonos.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:51,
        name: "Rosa En Solitario",
        image: "Screenshot_51.png",
        price: "35000",
        description: "Solitario de rosa con chocolate ferrero",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:52,
        name: "Flores Y Snickers San Valentín",
        image: "Screenshot_52.png",
        price: "78000",
        description: "Flores y Snickers San Valentín. Bouquet que contiene: Girasoles x3 (tres) unidades, Chocolates Ferrero Rocher x6 (seis) unidades, Barras de Chocolate Snickers x3 (tres) unidades",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:53,
        name: "Jarrón De 24 Rosas Amarillas",
        image: "Screenshot_53.png",
        price: "84000",
        description: "Jarrón de cristal decorado",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:54,
        name: "Rosas Multicolor En Cono",
        image: "Screenshot_54.png",
        price: "56000",
        description: "Cono de 12 rosas multicolor para dar vida a tus fechas especiales.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:55,
        name: "Rosas De Colores En Estuche 12 Unidades Surtidas",
        image: "Screenshot_55.png",
        price: "60000",
        description: "12 unidades de rosas de colores surtidas, empacadas en bonito estuche.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:56,
        name: "Margaritas Y Astromelias En Cono",
        image: "Screenshot_56.png",
        price: "42000",
        description: "Cono de Margaritas y astromelias, para regalar en tus momentos especiales.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:57,
        name: "Flores Surtidas De Claveles Y Oso Surtido",
        image: "Screenshot_57.png",
        price: "150000",
        description: "Bouquet de claveles surtidos, se envia con oso surtido de 40 cm",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:58,
        name: "Bouquet De Rosas Con 4 Colores",
        image: "Screenshot_58.png",
        price: "63000",
        description: "Bouquet que contiene: Rosas x12 (doce) unidades ",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:59,
        name: "Flores De Rosas Y Hershey's ",
        image: "Screenshot_59.png",
        price: "100000",
        description: "Bouquet de 12 rosas surtidas blancas y rojas con 1 chocolate de Hershey's",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:60,
        name: "Girasoles Que Te Mejores",
        image: "Screenshot_60.png",
        price: "120000",
        description: "Caja de 3 girasoles con flores surtidas, con globo que te mejores surtido, y frutas.",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:61,
        name: "Gerberas Y Mas En Bouquet Surtido",
        image: "Screenshot_61.png",
        price: "70000",
        description: "Bouquet surtido de gerberas de colores, con 1 vara de lirio en color surtido, con claveles. ",
        category: "Ramos Y Bouquets",
        state: 1
    },
    {
        id:62,
        name: "Rosas Rojas Romance En Caja",
        image: "Screenshot_62.png",
        price: "160000",
        description: "Rosas Rojas en caja Por Veinticuatro 24 Unidades Más Chocolates Ferrero Roche Por Ocho 8 Unidades",
        category: "Cajas florales",
        state: 1
    },
    {
        id:63,
        name: "Rosas Rosadas En Caja Decorada Con Mensaje",
        image: "Screenshot_63.png",
        price: "60000",
        description: "rosas rosadas en caja decorada con mensaje Caja decorada con moño que contiene: Rosas rosadas x6 (seis) unidades",
        category: "Cajas florales",
        state: 1
    },
    {
        id:64,
        name: "Rosas Rosadas En Estuche 12 Unidades",
        image: "Screenshot_64.png",
        price: "80000",
        description: "12 rosas rosadas empacadas en estuche decorado con follaje incluido",
        category: "Cajas florales",
        state: 1
    },
    {
        id:65,
        name: "Caja De Rosas Especiales",
        image: "Screenshot_65.png",
        price: "100000",
        description: "Hermosa caja de Rosas Rojas Doce (x12) Unidades",
        category: "Cajas florales",
        state: 1
    },
    {
        id:66,
        name: "Flores De Rosas En Caja Con Forma De Corazón, Flores De Girasol, Chocolates Ferrero Rocher",
        image: "Screenshot_66.png",
        price: "220000",
        description: "Flores les Roses: Flores de Rosas 12 Unidades en Caja Con Forma de Corazón. Girasol 1 Una Unidad. Chocolate Ferrero Rocher 8 Ocho Unidades",
        category: "Cajas florales",
        state: 1
    },
    {
        id:67,
        name: "Rosas Rosadas En Cono 12 Unidades",
        image: "Screenshot_67.png",
        price: "61000",
        description: "12 rosas rosadas en cono decorado con follaje incluido",
        category: "Cajas florales",
        state: 1
    },
    {
        id:68,
        name: "Flores De Rosa En Caja De Corazón, 24 Rosas Y Ferreros X8",
        image: "Screenshot_68.png",
        price: "200000",
        description: "Caja en forma de corazón con 24 (und) de rosas rojas con Chocolates Ferrero Rocher de 8(und)",
        category: "Cajas florales",
        state: 1
    },
    {
        id:69,
        name: "Flores Dali.",
        image: "Screenshot_69.png",
        price: "120000",
        description: "Hermosa caja de flores surtidas, de girasoles, rosas y Gerberas perfectas para cualquier ocasión.",
        category: "Cajas florales",
        state: 1
    },
    {
        id:70,
        name: "Flores De Gerberas, Hortensias, Lirios Y Rosas En Cesta Con Chocolates Ferrero Rocher",
        image: "Screenshot_70.png",
        price: "150000",
        description: "flores de gerberas x3 (tres) unidades; flores de rosas x 4 (cuatro) unidades; flor de hortensia; caja con 8 chocolates ferrero rocher x1 (una) unidad",
        category: "Cajas florales",
        state: 1
    },
    {
        id:71,
        name: "Rosas Amarillas En Estuche 12 Unidades",
        image: "Screenshot_71.png",
        price: "79700",
        description: "12 rosas amarillas empacadas en estuche decorado con follaje incluido",
        category: "Cajas florales",
        state: 1
    },
    {
        id:72,
        name: "Girasoles En Corazón",
        image: "Screenshot_72.png",
        price: "200000",
        description: "Caja decorativa en forma de corazón que contiene Girasoles ,Chocolates Ferrero Rocher X8 Y 12 Rosas Rojas",
        category: "Cajas florales",
        state: 1
    },
    {
        id:73,
        name: "Rosas Rojas En Estuche 24 Unidades",
        image: "Screenshot_73.png",
        price: "144000",
        description: "24 rosas rojas empacadas en estuche decorado con follaje incluido",
        category: "Cajas florales",
        state: 1
    },
    {
        id:74,
        name: "Rosas En Caja Con Forma De Corazón",
        image: "Screenshot_74.png",
        price: "180000",
        description: "Rosas en caja con forma de corazón  Caja con forma de corazón que contiene: rosas 24) unidades",
        category: "Cajas florales",
        state: 1
    },
    {
        id:75,
        name: "Rosas Rojas En Estuche 12 Unidades ",
        image: "Screenshot_75.png",
        price: "79700",
        description: "12 rosas rojas empacadas en estuche decorado con follaje incluido",
        category: "Cajas florales",
        state: 1
    },
    {
        id:76,
        name: "Rosas Blancas En Caja Premium",
        image: "Screenshot_76.png",
        price: "140000",
        description: "Caja de 12 rosas blancas más caja de Ferrero Rocher de 8 unidades y 4 unidades.",
        category: "Cajas florales",
        state: 1
    },
    {
        id:77,
        name: "Rosas Rojas En Cono 12 Unidades",
        image: "Screenshot_77.png",
        price: "61000",
        description: "12 rosas rojas en cono decorado con follaje incluido",
        category: "Cajas florales",
        state: 1
    },
    {
        id:78,
        name: "Flores De Rosas En Caja Decorativa X60",
        image: "Screenshot_78.png",
        price: "320000",
        description: "Caja decorativa de 60(und) de rosas rojas, con hermoso moño.",
        category: "Cajas florales",
        state: 1
    },
    {
        id:79,
        name: "Flores De Girasol En Caja",
        image: "Screenshot_79.png",
        price: "98000",
        description: "Caja premium de 9 (und) de Girasoles. Perfectas para cualquier ocasión.",
        category: "Cajas florales",
        state: 1
    },
    {
        id:80,
        name: "Flores De Rosas Rosadas En Caja",
        image: "Screenshot_80.png",
        price: "150000",
        description: "Caja Floral de 18(und) de rosas rosadas y 8 (und) de Ferrero Rocher. ",
        category: "Cajas florales",
        state: 1
    },
    {
        id:81,
        name: "Rosas Blancas Y Amarillas En Cono 12 Unidades ",
        image: "Screenshot_81.png",
        price: "61000",
        description: "12 rosas amarillas y blancas en cono decorado con follaje incluido",
        category: "Cajas florales",
        state: 1
    },
    {
        id:82,
        name: "Lirios En Estuche 5 Unidades",
        image: "Screenshot_82.png",
        price: "79700",
        description: "5 lirios empacadas en estuche decorado con follaje incluido",
        category: "Cajas florales",
        state: 1
    },
    {
        id:83,
        name: "Rosas En Caja Con Mensaje",
        image: "Screenshot_83.png",
        price: "300000",
        description: "Rosas en caja con mensaje Hermosa caja decorada que contiene: rosas x100 (cien) unidades ",
        category: "Cajas florales",
        state: 1
    },
    {
        id:84,
        name: "Rosas Amarillas En Cono 12 Unidades",
        image: "Screenshot_84.png",
        price: "61000",
        description: "12 rosas amarillas en cono decorado con follaje incluido",
        category: "Cajas florales",
        state: 1
    },
    {
        id:85,
        name: "Flores De Girasoles En Caja De Corazón Con Botella De Vino 375 Ml",
        image: "Screenshot_85.png",
        price: "95000",
        description: "Flores de margarita en caja con botella JP chante Caja que contiene: girasoles x3 (tres) unidades; Botella JP chante x1 (una) unidad ",
        category: "Cajas florales",
        state: 1
    },
    {
        id:86,
        name: "Hortensias y lirios",
        image: "Screenshot_86.png",
        price: "87000",
        description: "jarron de cristal con hortensias y lirios (no incluye la base de madera)",
        category: "Cajas florales",
        state: 1
    },
    {
        id:87,
        name: "Flores De Hortensias Variadas Para Tu Hogar",
        image: "Screenshot_87.png",
        price: "18000",
        description: "Flores de hortensias para tu hogar. Hortensia x2 (dos) unidades para decorar tu hogar",
        category: "Otros Arreglos Florales",
        state: 1
    },
    {
        id:88,
        name: "Flores De Margarita Variada Para Tu Hogar",
        image: "Screenshot_88.png",
        price: "15000",
        description: " Flores de margarita variada para tu hogar. 5 tallos de margarita variada para decorar tu hogar",
        category: "Otros Arreglos Florales",
        state: 1
    },
    {
        id:89,
        name: "Flores De Margarita Blanca Para Tu Hogar",
        image: "Screenshot_89.png",
        price: "12000",
        description: "Flores de margarita blanca para tu hogar. 5 tallos de margarita blanca para decorar tu hogar",
        category: "Otros Arreglos Florales",
        state: 1
    },
    {
        id:90,
        name: "Flores De Astromelias Surtidas Para Tu Hogar",
        image: "Screenshot_90.png",
        price: "10000",
        description: "Flores de astromelias surtidas para tu hogar. Paquete de astromelia surtida para decorar tu hogar",
        category: "Otros Arreglos Florales",
        state: 1
    },
    {
        id:91,
        name: "Flores De Margarita Amarilla Para Tu Hogar",
        image: "Screenshot_91.png",
        price: "12000",
        description: "Flores de margarita amarilla para tu hogar. 5 tallos de margarita amarilla para decorar tu hogar",
        category: "Otros Arreglos Florales",
        state: 1
    },
    {
        id:92,
        name: "Caja Corazón Pareja De Peluches Patos Donald Y Chocolates",
        image: "Screenshot_92.png",
        price: "130000",
        description: "Tierna pareja de peluches pato Donald en caja madera corazón con chocolates y flor de (gerbera, rosa o girasol)",
        category: "Otros Arreglos Florales",
        state: 1
    },
    {
        id:93,
        name: "Caja Decorativa Con Rosa Lila Y Girasoles",
        image: "Screenshot_93.png",
        price: "110000",
        description: "Hermosa caja decorativa que contiene 12 rosas lilas y 3 girasoles",
        category: "Otros Arreglos Florales",
        state: 1
    },
    {
        id:94,
        name: "Flores De Rosas, Peluche",
        image: "Screenshot_94.png",
        price: "72000",
        description: "Flores de Rosas 8 Ocho Unidades. Oso de Peluche 1 Una Unidad",
        category: "Peluches",
        state: 1
    },
    {
        id:95,
        name: "Rosas Ternura En Caja Peluche Y Ferreros",
        image: "Screenshot_95.png",
        price: "120000",
        description: "Rosas Por Seis 06 Unidades Más Peluche de Temporada Sujeto a Disponibilidad y Ferrero Roche Por Ocho 08 Unidades",
        category: "Peluches",
        state: 1
    },
    {
        id:96,
        name: "Peluche Hello Kitty",
        image: "Screenshot_96.png",
        price: "50000",
        description: "Peluche de Hello Kity pequeña.",
        category: "Peluches",
        state: 1
    },
    {
        id:97,
        name: "Flores De Rosas, Hortensias, Lirios Y Gerberas En Cesta Con Oso De Peluche",
        image: "Screenshot_97.png",
        price: "150000",
        description: "Canasta de flores 3 (und) de rosas, con 3 (und) de gerbera y 1 vara de lirio rosados, más peluche surtido",
        category: "Peluches",
        state: 1
    },
    {
        id:98,
        name: "Peluche Mini Love",
        image: "Screenshot_98.png",
        price: "30000",
        description: "Peluche surtido mini love",
        category: "Peluches",
        state: 1
    },
    {
        id:99,
        name: "Peluche Oso Jaspeado Pequeño",
        image: "Screenshot_99.png",
        price: "49000",
        description: "Peluche de oso jaspeado surtido pequeño",
        category: "Peluches",
        state: 1
    },
    {
        id:100,
        name: "Flores De Lirio, Peluche Y Globo",
        image: "Screenshot_100.png",
        price: "130000",
        description: " Bouquet de lirios rosados, oso de peluche surtido, globo x1 (una) unidad",
        category: "Peluches",
        state: 1
    },
    {
        id:101,
        name: "Peluche De Unicornio Sentado",
        image: "Screenshot_101.png",
        price: "48000",
        description: "Peluche de unicornio se envia en color surtido dependiendo de la disponibilidad de colores en la tienda",
        category: "Peluches",
        state: 1
    },
    {
        id:102,
        name: "Flores De Rosas En Caja, Peluche, Vino Gato Negro, Chocolates Ferrero, Globo",
        image: "Screenshot_102.png",
        price: "200000",
        description: "Flores de Rosas 3 Tres Unidades en Caja. Oso de Peluche 1 Una Unidad. Vino Gato Negro de 375 mL 1 Una Unidad. Caja Con 8 Chocolates Ferrero Rocher 1 Una Unidad. Globo 1 Una Unidad",
        category: "Peluches",
        state: 1
    },
    {
        id:103,
        name: "Flores De Rosas, Gerberas Y Hortensias En Cesta Con Peluche Y Ferrero Rocher",
        image: "Screenshot_103.png",
        price: "189000",
        description: "Canasta de flores de hortensias, gerberas y rosas en cesta; caja con 8 chocolates ferrero rocher x1 (una) unidad; oso de pleuche x1 (una) unidad.",
        category: "Peluches",
        state: 1
    },
    {
        id:104,
        name: "Caja De Ferreros Cantidad X8",
        image: "Screenshot_104.png",
        price: "45000",
        description: "Caja de Ferreros Cantidad X8",
        category: "Chocolates Y Confitería",
        state: 1
    },
    {
        id:105,
        name: "Orquideas En Matera",
        image: "Screenshot_105.png",
        price: "100000",
        description: "Vara de orquidea x2 (dos) unidades y , Mensaje personalizado. *Color de matera sujeto a disponibilidad. Orquidea de color Blanco con Matera decorativa Si, de 2 espigas",
        category: "Orquídeas",
        state: 1
    },
    {
        id:106,
        name: "Orquidea Amarilla En Matera",
        image: "Screenshot_106.png",
        price: "110000",
        description: "Vara de orquidea amarilla x1 (una) unidad y , Mensaje personalizado. *Color de matera sujeto a disponibilidad. Orquidea de color Amarilla con Matera decorativa Si, de 1 espigas",
        category: "Orquídeas",
        state: 1
    },
    {
        id:107,
        name: "Orquidea Rosada En Matera",
        image: "Screenshot_107.png",
        price: "100000",
        description: "Vara de orquidea rosada x1 (una) unidad y , Mensaje personalizado. *Color de matera sujeto a disponibilidad. Orquidea de color Rosa con Matera decorativa Si, de 1 espigas",
        category: "Orquídeas",
        state: 1
    },
    {
        id:108,
        name: "Jarrón de margaritas y otras flores.",
        image: "Screenshot_108.png",
        price: "100000",
        description: "Jarrón de margaritas y otras flores.",
        category: "Orquídeas",
        state: 1
    },
    {
        id:109,
        name: "Flores De Rosas Y Astromelias.",
        image: "Screenshot_109.png",
        price: "98000",
        description: "Ramo Floral de 24 Rosas Rojas y Astromelias. ",
        category: "Amor",
        state: 1
    },
    {
        id:110,
        name: "Flores De Rosas En Jarrón",
        image: "Screenshot_110.png",
        price: "104000",
        description: " Flores de Rosas 20 Veinte Unidades en Jarro ",
        category: "Amor",
        state: 1
    },
    {
        id:111,
        name: "Rosas Para Tu Amor",
        image: "Screenshot_111.png",
        price: "105000",
        description: "Rosas Rojas y Astromelias.",
        category: "Amor",
        state: 1
    },
    {
        id:112,
        name: "Flores Surtidas De Claveles Y Oso Surtido",
        image: "Screenshot_112.png",
        price: "120000",
        description: "Bouquet de claveles surtidos, se envia con oso surtido de 40 cm",
        category: "Amor",
        state: 1
    },
    {
        id:113,
        name: "Flores De Lirio, Gerberas Rosas Y Astromelias.",
        image: "Screenshot_113.png",
        price: "64000",
        description: "Bouquet de flores de lirio, gerberas rosas y astromelias.",
        category: "Felicitaciones",
        state: 1
    },
    {
        id:114,
        name: "Flores De Astromelias En Bouquet",
        image: "Screenshot_114.png",
        price: "60000",
        description: "Bouquet de 2 paquetes surtido de astromelias de colores",
        category: "Felicitaciones",
        state: 1
    },
    {
        id:115,
        name: "Bouquet De Girasol Y Rosa Con 3 Chocolates",
        image: "Screenshot_115.png",
        price: "44000",
        description: "Bouquet de girasol y rosa con 3 chocolates. Bouquet que contiene: Girasol x1 (una) unidad, Chocolates Ferrero Rocher x1 (una) unidad",
        category: "Felicitaciones",
        state: 1
    },
    {
        id:116,
        name: "Flores De Astromelias Y Rosas Surtidas",
        image: "Screenshot_116.png",
        price: "180000",
        description: "Caja premium de 24 rosas surtidas, con 3 paquetes de astromelias surtidas. ",
        category: "Felicitaciones",
        state: 1
    },
    {
        id:117,
        name: "Flores De Girasoles Y Rosas En Cesta ",
        image: "Screenshot_117.png",
        price: "135000",
        description: "Canasta de 24 (und) de rosas rojas, con 8 (und) de girasoles",
        category: "Felicitaciones",
        state: 1
    },
    {
        id:118,
        name: "Margaritas En Colores Surtidos En Bouquet",
        image: "Screenshot_118.png",
        price: "42500",
        description: "Bouquet de 2 paquetes de margaritas en colores surtidos con decoración. ",
        category: "Felicitaciones",
        state: 1
    },
    {
        id:119,
        name: "Rosas Multicolor En Cono",
        image: "Screenshot_119.png",
        price: "56000",
        description: "Flores Les Roses: Cono de 12 rosas multicolor para dar vida a tus fechas especiales.",
        category: "Felicitaciones",
        state: 1
    },
    {
        id:120,
        name: "Margaritas Y Astromelias En Cono",
        image: "Screenshot_120.png",
        price: "54000",
        description: "Cono de Margaritas y astromelias, para regalar en tus momentos especiales.",
        category: "Felicitaciones",
        state: 1
    },
    {
        id:121,
        name: "Girasoles Que Te Mejores",
        image: "Screenshot_121.png",
        price: "120000",
        description: "Caja de 3 girasoles con flores surtidas, con globo que te mejores surtido, y frutas",
        category: "Felicitaciones",
        state: 1
    },
    {
        id:122,
        name: "Gerberas Y Mas En Bouquet Surtido",
        image: "Screenshot_122.png",
        price: "70000",
        description: "Bouquet surtido de gerberas de colores, con 1 vara de lirio en color surtido, con claveles",
        category: "Felicitaciones",
        state: 1
    }
]

export default PRODUCTS