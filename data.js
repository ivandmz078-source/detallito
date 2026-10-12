// Datos textuales proporcionados por Iván para Yamileth. No son citas externas.
const smallNotes = [
  {
    "id": 1,
    "title": "Sin las palabras perfectas",
    "text": "No siempre encuentro las palabras exactas para explicar lo que siento, pero eso no significa que sienta poco. A veces, lo que llevo dentro necesita un poquito más de tiempo para convertirse en palabras."
  },
  {
    "id": 2,
    "title": "Conocerte",
    "text": "Me gusta la idea de seguir conociéndote sin prisa, descubriendo poco a poco todo eso que te hace ser tú."
  },
  {
    "id": 3,
    "title": "Tu esencia",
    "text": "No necesitas parecerte a nadie para ser especial. Quiero que tengas la libertad de ser tú misma, con tus ideas, tus sueños y tu propia manera de ver el mundo."
  },
  {
    "id": 4,
    "title": "Sin tener que ser perfecta",
    "text": "No quiero que sientas que tienes que ser perfecta para merecer cariño. También hay belleza en los días normales, en las dudas y en las pequeñas imperfecciones que nos hacen humanos."
  },
  {
    "id": 5,
    "title": "Una sonrisa",
    "text": "Ojalá alguno de estos pequeños detalles consiga sacarte una sonrisa inesperada. Sería bonito que algo que preparé para ti pudiera regalarte un momento feliz."
  },
  {
    "id": 6,
    "title": "Escucharte",
    "text": "Quiero escucharte de verdad, conocer lo que piensas y dar espacio a lo que sientes. Para mí, quererte también significa tomar en serio tu voz."
  },
  {
    "id": 7,
    "title": "Tu mundo",
    "text": "Me interesa ese universo que existe dentro de ti: tus gustos, tus ideas, las cosas que te emocionan y los sueños que todavía quieres descubrir."
  },
  {
    "id": 8,
    "title": "Tu propia luz",
    "text": "No tienes que hacer nada extraordinario para tener un brillo propio. Hay cosas que hacen especial a una persona y que no necesitan demostrarse todos los días."
  },
  {
    "id": 9,
    "title": "Los pequeños detalles",
    "text": "No todos los regalos necesitan ser grandes. A veces, un detalle preparado con cariño puede decir algo que un objeto costoso jamás sabría explicar."
  },
  {
    "id": 10,
    "title": "Hablar con sinceridad",
    "text": "Quiero que podamos hablar con honestidad, incluso cuando no encontremos las palabras perfectas. Lo bonito también se construye con paciencia y comprensión."
  },
  {
    "id": 11,
    "title": "Tus colores",
    "text": "Si pudiera convertir este cariño en una pintura, mezclaría luces rosadas, tonos cálidos y un pequeño corazón escondido entre los colores."
  },
  {
    "id": 12,
    "title": "Este pequeño universo",
    "text": "Cada luz, cada corazón y cada mensaje de esta página está aquí por una razón muy sencilla: quería prepararte algo especial y regalarte un momento que fuera solamente tuyo."
  }
];
const feelings = [
  {
    "id": 1,
    "text": "Hay veces en que quiero decirte algo bonito y termino sonriendo, porque lo que siento no siempre me sale tan bien como lo imagino."
  },
  {
    "id": 2,
    "text": "Me nace cuidar los detalles cuando pienso en ti. No porque exista una obligación, sino porque me gusta la idea de regalarte algo hecho con cariño."
  },
  {
    "id": 3,
    "text": "Me emociona la posibilidad de seguir descubriendo cosas nuevas de ti, sin prisa y sin la necesidad de tenerlo todo resuelto desde el principio."
  },
  {
    "id": 4,
    "text": "Quiero que mi cariño sea algo que puedas sentir con tranquilidad, no una presión que tengas que corresponder de una forma determinada."
  },
  {
    "id": 5,
    "text": "Me gusta imaginar todos esos pequeños momentos que todavía podríamos compartir. No necesito saber exactamente cómo serán para ilusionarme con la posibilidad."
  },
  {
    "id": 6,
    "text": "Quiero aprender a demostrarte lo que siento tanto con mis palabras como con mis acciones. Para mí, ambas cosas importan."
  },
  {
    "id": 7,
    "text": "Me gustaría ser alguien con quien puedas hablar con confianza, reírte sin pensarlo demasiado y expresar lo que llevas dentro sin miedo a tener que fingir."
  },
  {
    "id": 8,
    "text": "Hay algo bonito en saber que todavía existen tantas cosas por descubrir de una persona. Quiero que nunca nos falten la curiosidad y las ganas de conocernos."
  },
  {
    "id": 9,
    "text": "No necesito una historia perfecta para disfrutar de algo bonito. Prefiero una conexión sincera, con paciencia, respeto y espacio para que los dos podamos ser nosotros mismos."
  },
  {
    "id": 10,
    "text": "Si algún día me faltan las palabras, quiero recordar que el cariño también se demuestra escuchando, cuidando los detalles y actuando con sinceridad."
  }
];
const surprises = [
  {
    "id": 1,
    "title": "Un tulipán para ti",
    "text": "Un pequeño tulipán para recordarte que no todo lo bonito necesita ser enorme. A veces, la delicadeza de un detalle es precisamente lo que lo hace especial.",
    "effect": "un trazo luminoso dibuja un tulipán estilizado y deja pequeñas partículas rosadas."
  },
  {
    "id": 2,
    "title": "Un rincón para Snoopy",
    "text": "También hay un lugar para esas pequeñas cosas que te gustan. Porque un regalo personal no solo habla de quien lo prepara; también deja espacio para el mundo de quien lo recibe.",
    "effect": "aparece una pequeña tarjeta ilustrada, con un corazón de contorno. Utiliza únicamente ilustraciones o recursos visuales cuyo uso esté permitido."
  },
  {
    "id": 3,
    "title": "Un poquito de color",
    "text": "Para tu lado artístico: que nunca te falten colores, curiosidad y libertad para crear algo que te haga sentir orgullosa.",
    "effect": "pequeñas pinceladas luminosas atraviesan el fondo y forman un corazón incompleto que termina de dibujarse lentamente."
  },
  {
    "id": 4,
    "title": "Una pausa",
    "text": "Respira, tómate tu tiempo y disfruta de este pequeño universo sin prisa. No tienes que descubrirlo todo hoy.",
    "effect": "el movimiento del fondo se ralentiza y las partículas forman un halo suave."
  },
  {
    "id": 5,
    "title": "Un detalle invisible",
    "text": "Hay detalles que no necesitan envoltura. Este no ocupa espacio en una habitación, pero guarda algo que sí quería regalarte: un momento preparado con cariño.",
    "effect": "un corazón se dibuja en el centro y se desvanece, dejando visible el mensaje."
  },
  {
    "id": 6,
    "title": "Las cosas que todavía quedan por descubrir",
    "text": "No hace falta saberlo todo de alguien para tener ganas de conocerlo mejor. Siempre puede haber algo nuevo, bonito e inesperado por descubrir.",
    "effect": "pequeñas estrellas aparecen una por una alrededor de un corazón de neón."
  },
  {
    "id": 7,
    "title": "Sin prisas",
    "text": "Lo bonito no tiene que apresurarse. Me gusta la idea de permitir que las cosas sinceras encuentren su propio ritmo.",
    "effect": "el corazón se dibuja lentamente, con una línea suave y continua."
  },
  {
    "id": 8,
    "title": "Un lugar tranquilo",
    "text": "Ojalá las personas que queremos puedan sentirse libres de ser ellas mismas a nuestro lado. Ese es uno de los tipos de cercanía que más valoro.",
    "effect": "varias partículas se acercan al centro y forman un resplandor tranquilo."
  },
  {
    "id": 9,
    "title": "No hace falta decirlo todo",
    "text": "A veces, un pequeño gesto puede acompañar a muchas palabras. Por eso quise que esta página tuviera cosas que pudieras descubrir por ti misma.",
    "effect": "un corazón se dibuja siguiendo una trayectoria curva y revela una tarjeta."
  },
  {
    "id": 10,
    "title": "La razón de este regalo",
    "text": "No preparé esto para que fuera perfecto. Lo preparé porque quería regalarte algo personal, algo que pudieras explorar a tu ritmo y que te recordara el cariño con el que fue hecho.",
    "effect": "los diez corazones interactivos de la sección se iluminan brevemente en secuencia, sin obligar a la persona a descubrirlos todos."
  }
];
const letterText = "Mi Yami:\n\nQuería regalarte algo que fuera un poquito más especial que un mensaje escrito a la carrera. Algo que pudieras explorar con calma y en lo que encontraras pequeños detalles preparados pensando en ti.\n\nNo siempre me resulta fácil encontrar las palabras exactas para explicar lo que siento. A veces tengo muchas cosas en la cabeza y, cuando intento ponerlas en palabras bonitas, siento que todavía me falta algo. Por eso quise hacer esta página: para reunir un poquito de ese cariño en un lugar que pudiera regalarte.\n\nMe gusta la idea de seguir conociéndote, descubrir qué cosas te emocionan, qué te hace sonreír, qué sueños tienes y qué pequeños detalles forman parte de la persona que eres. No quiero quedarme solamente con una imagen bonita de ti; quiero que haya espacio para conocerte de verdad, con tu forma de pensar, tus días buenos, tus dudas y tus ilusiones.\n\nQuiero que puedas sentirte querida sin tener que convertirte en alguien diferente para merecerlo. Que tengas la libertad de ser tú, de expresar lo que piensas y de hablar con sinceridad. Para mí, el cariño no debería sentirse como una obligación ni como algo que tengas que ganarte siendo perfecta.\n\nMe ilusiona pensar en todas las cosas que todavía podríamos descubrir y en los momentos que podrían convertirse en recuerdos importantes para nosotros. No necesito inventar una historia perfecta ni prometerte que siempre tendré la respuesta correcta. Prefiero que lo que construyamos tenga algo más valioso: sinceridad, paciencia, respeto y ganas de cuidarnos.\n\nQuiero aprender a demostrarte lo que siento, no solamente a decirlo. Quiero prestar atención a los pequeños detalles, escucharte cuando necesites hablar, compartir risas contigo y tener la disposición de comprenderte incluso cuando algo requiera más paciencia.\n\nTambién quiero que sepas que no preparé esta página para impresionarte con algo perfecto. La preparé porque quería hacerte un regalo distinto, algo en lo que pudieras descubrir una parte de mi cariño sin tener que leer cien poemas difíciles ni buscar significados escondidos en palabras que no sientes cercanas.\n\nSi alguno de estos pequeños detalles consigue sacarte una sonrisa, si una de estas luces te hace detenerte un momento o si esta carta consigue transmitirte un poquito de lo que siento, entonces habrá valido la pena preparar todo esto.\n\nGracias por ser tú, Yami. Gracias por permitirme compartir contigo este cariño y por darme la oportunidad de seguir conociéndote.\n\nNo sé cuántas palabras hacen falta para explicar cuánto puedes llegar a importarle alguien a otra persona. Pero sí sé que quería que este regalo llevara algo de mí y que, al recorrerlo, pudieras sentirte especial.\n\nOjalá nunca olvides que mereces un cariño sincero, un amor que te respete y una compañía con la que puedas seguir siendo tú misma.\n\nTe amo, Yami.\n\nCon todo mi cariño,\n\nIván.";
const loveLanguages = [
  {
    "id": 1,
    "language": "Náhuatl",
    "phrase": "Nimitztlazohtla"
  },
  {
    "id": 2,
    "language": "Inglés",
    "phrase": "I love you"
  },
  {
    "id": 3,
    "language": "Francés",
    "phrase": "Je t’aime"
  },
  {
    "id": 4,
    "language": "Italiano",
    "phrase": "Ti amo"
  },
  {
    "id": 5,
    "language": "Portugués brasileño",
    "phrase": "Eu te amo"
  },
  {
    "id": 6,
    "language": "Alemán",
    "phrase": "Ich liebe dich"
  },
  {
    "id": 7,
    "language": "Neerlandés",
    "phrase": "Ik hou van jou"
  },
  {
    "id": 8,
    "language": "Afrikáans",
    "phrase": "Ek het jou lief"
  },
  {
    "id": 9,
    "language": "Catalán",
    "phrase": "T’estimo"
  },
  {
    "id": 10,
    "language": "Gallego",
    "phrase": "Quérote"
  },
  {
    "id": 11,
    "language": "Euskera",
    "phrase": "Maite zaitut"
  },
  {
    "id": 12,
    "language": "Rumano",
    "phrase": "Te iubesc"
  },
  {
    "id": 13,
    "language": "Latín",
    "phrase": "Te amo"
  },
  {
    "id": 14,
    "language": "Albanés",
    "phrase": "Të dua"
  },
  {
    "id": 15,
    "language": "Griego moderno",
    "phrase": "Σ’ αγαπώ"
  },
  {
    "id": 16,
    "language": "Búlgaro",
    "phrase": "Обичам те"
  },
  {
    "id": 17,
    "language": "Croata",
    "phrase": "Volim te"
  },
  {
    "id": 18,
    "language": "Serbio",
    "phrase": "Волим те"
  },
  {
    "id": 19,
    "language": "Macedonio",
    "phrase": "Те сакам"
  },
  {
    "id": 20,
    "language": "Esloveno",
    "phrase": "Ljubim te"
  },
  {
    "id": 21,
    "language": "Checo",
    "phrase": "Miluji tě"
  },
  {
    "id": 22,
    "language": "Eslovaco",
    "phrase": "Ľúbim ťa"
  },
  {
    "id": 23,
    "language": "Polaco",
    "phrase": "Kocham cię"
  },
  {
    "id": 24,
    "language": "Húngaro",
    "phrase": "Szeretlek"
  },
  {
    "id": 25,
    "language": "Ucraniano",
    "phrase": "Я тебе кохаю"
  },
  {
    "id": 26,
    "language": "Ruso",
    "phrase": "Я тебя люблю"
  },
  {
    "id": 27,
    "language": "Bielorruso",
    "phrase": "Я цябе кахаю"
  },
  {
    "id": 28,
    "language": "Sueco",
    "phrase": "Jag älskar dig"
  },
  {
    "id": 29,
    "language": "Noruego",
    "phrase": "Jeg elsker deg"
  },
  {
    "id": 30,
    "language": "Danés",
    "phrase": "Jeg elsker dig"
  },
  {
    "id": 31,
    "language": "Islandés",
    "phrase": "Ég elska þig"
  },
  {
    "id": 32,
    "language": "Finés",
    "phrase": "Minä rakastan sinua"
  },
  {
    "id": 33,
    "language": "Estonio",
    "phrase": "Ma armastan sind"
  },
  {
    "id": 34,
    "language": "Letón",
    "phrase": "Es tevi mīlu"
  },
  {
    "id": 35,
    "language": "Lituano",
    "phrase": "Aš tave myliu"
  },
  {
    "id": 36,
    "language": "Irlandés",
    "phrase": "Tá grá agam duit"
  },
  {
    "id": 37,
    "language": "Gaélico escocés",
    "phrase": "Tha gaol agam ort"
  },
  {
    "id": 38,
    "language": "Galés",
    "phrase": "Rwy’n dy garu di"
  },
  {
    "id": 39,
    "language": "Bretón",
    "phrase": "Me az kar"
  },
  {
    "id": 40,
    "language": "Luxemburgués",
    "phrase": "Ech hunn dech gär"
  },
  {
    "id": 41,
    "language": "Frisón occidental",
    "phrase": "Ik hâld fan dy"
  },
  {
    "id": 42,
    "language": "Occitano",
    "phrase": "T’aimi"
  },
  {
    "id": 43,
    "language": "Corso",
    "phrase": "Ti tengu caru"
  },
  {
    "id": 44,
    "language": "Sardo",
    "phrase": "T’amo"
  },
  {
    "id": 45,
    "language": "Aragonés",
    "phrase": "T’aimo"
  },
  {
    "id": 46,
    "language": "Asturiano",
    "phrase": "Quiérote"
  },
  {
    "id": 47,
    "language": "Maltés",
    "phrase": "Inħobbok"
  },
  {
    "id": 48,
    "language": "Turco",
    "phrase": "Seni seviyorum"
  },
  {
    "id": 49,
    "language": "Árabe estándar, de hombre a mujer",
    "phrase": "أُحِبُّكِ"
  },
  {
    "id": 50,
    "language": "Hebreo, de hombre a mujer",
    "phrase": "אני אוהב אותך"
  },
  {
    "id": 51,
    "language": "Persa",
    "phrase": "دوستت دارم"
  },
  {
    "id": 52,
    "language": "Kurdo kurmanji",
    "phrase": "Ez te hez dikêm"
  },
  {
    "id": 53,
    "language": "Armenio oriental",
    "phrase": "Սիրում եմ քեզ"
  },
  {
    "id": 54,
    "language": "Georgiano",
    "phrase": "მე შენ მიყვარხარ"
  },
  {
    "id": 55,
    "language": "Azerí",
    "phrase": "Mən səni sevirəm"
  },
  {
    "id": 56,
    "language": "Kazajo",
    "phrase": "Мен сені сүйемін"
  },
  {
    "id": 57,
    "language": "Kirguís",
    "phrase": "Мен сени сүйөм"
  },
  {
    "id": 58,
    "language": "Uzbeko",
    "phrase": "Men seni sevaman"
  },
  {
    "id": 59,
    "language": "Mongol",
    "phrase": "Би чамд хайртай"
  },
  {
    "id": 60,
    "language": "Chino mandarín",
    "phrase": "我爱你"
  },
  {
    "id": 61,
    "language": "Cantonés",
    "phrase": "我愛你"
  },
  {
    "id": 62,
    "language": "Igbo",
    "phrase": "A hụrụ m gị n’anya"
  },
  {
    "id": 63,
    "language": "Twi",
    "phrase": "Medɔ wo"
  },
  {
    "id": 64,
    "language": "Japonés",
    "phrase": "愛してるよ"
  },
  {
    "id": 65,
    "language": "Coreano",
    "phrase": "사랑해"
  },
  {
    "id": 66,
    "language": "Vietnamita, de hombre a mujer",
    "phrase": "Anh yêu em"
  },
  {
    "id": 67,
    "language": "Tailandés, de hombre a mujer",
    "phrase": "ผมรักคุณ"
  },
  {
    "id": 68,
    "language": "Laosiano",
    "phrase": "ຂ້ອຍຮັກເຈົ້າ"
  },
  {
    "id": 69,
    "language": "Jemer, de hombre a mujer",
    "phrase": "ខ្ញុំស្រឡាញ់បង"
  },
  {
    "id": 70,
    "language": "Birmano, transliteración",
    "phrase": "cha-nor kin-mya go chit-teh"
  },
  {
    "id": 71,
    "language": "Indonesio",
    "phrase": "Aku cinta kamu"
  },
  {
    "id": 72,
    "language": "Malayo",
    "phrase": "Saya sayang kamu"
  },
  {
    "id": 73,
    "language": "Javanés",
    "phrase": "Kula tresna panjenengan"
  },
  {
    "id": 74,
    "language": "Balinés",
    "phrase": "Titiyang tresna sareng ragane"
  },
  {
    "id": 75,
    "language": "Sundanés",
    "phrase": "Abdi bogoh ka anjeun"
  },
  {
    "id": 76,
    "language": "Tagalo",
    "phrase": "Mahal kita"
  },
  {
    "id": 77,
    "language": "Cebuano",
    "phrase": "Gihigugma ko ikaw"
  },
  {
    "id": 78,
    "language": "Hiligaynon",
    "phrase": "Palangga ko ikaw"
  },
  {
    "id": 79,
    "language": "Ilocano",
    "phrase": "Ayayatenka"
  },
  {
    "id": 80,
    "language": "Hindi, de hombre a mujer",
    "phrase": "मैं तुमसे प्यार करता हूँ"
  },
  {
    "id": 81,
    "language": "Urdu, de hombre a mujer",
    "phrase": "میں آپ سے محبت کرتا ہوں"
  },
  {
    "id": 82,
    "language": "Bengalí",
    "phrase": "আমি তোমাকে ভালোবাসি"
  },
  {
    "id": 83,
    "language": "Asamés",
    "phrase": "মই তোমাক ভাল পাওঁ"
  },
  {
    "id": 84,
    "language": "Guyaratí",
    "phrase": "હું તને પ્રેમ કરું છું"
  },
  {
    "id": 85,
    "language": "Maratí",
    "phrase": "माझं तुझ्यावर प्रेम आहे"
  },
  {
    "id": 86,
    "language": "Nepalí",
    "phrase": "म तिमीलाई माया गर्छु"
  },
  {
    "id": 87,
    "language": "Cingalés",
    "phrase": "මම ඔයාට ආදරෙයි"
  },
  {
    "id": 88,
    "language": "Tamil",
    "phrase": "நான் உன்னை காதலிக்கிறேன்"
  },
  {
    "id": 89,
    "language": "Telugu",
    "phrase": "నేను నిన్ను ప్రేమిస్తున్నాను"
  },
  {
    "id": 90,
    "language": "Canarés",
    "phrase": "ನಾ ನಿನ್ನ ಪ್ರೀತಿಸ್ತೀನಿ"
  },
  {
    "id": 91,
    "language": "Malayalam",
    "phrase": "ഞാന്‍ നിന്നെ പ്രേമിക്കുന്നു"
  },
  {
    "id": 92,
    "language": "Odia",
    "phrase": "ମୁଁ ତୁମକୁ ଭଲ ପାଏ"
  },
  {
    "id": 93,
    "language": "Punyabí, de hombre a mujer",
    "phrase": "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ"
  },
  {
    "id": 94,
    "language": "Suajili",
    "phrase": "Ninakupenda"
  },
  {
    "id": 95,
    "language": "Zulú",
    "phrase": "Ngiyakuthanda"
  },
  {
    "id": 96,
    "language": "Xhosa",
    "phrase": "Ndiyakuthanda"
  },
  {
    "id": 97,
    "language": "Shona",
    "phrase": "Ndinokuda"
  },
  {
    "id": 98,
    "language": "Kinyarwanda",
    "phrase": "Ndagukunda"
  },
  {
    "id": 99,
    "language": "Malgache",
    "phrase": "Tiako ianao"
  },
  {
    "id": 100,
    "language": "Maorí",
    "phrase": "Kei te aroha au ki a koe"
  }
];


