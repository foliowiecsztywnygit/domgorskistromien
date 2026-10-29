// Wszystkie treści i dane kontaktowe pochodzą ze strony http://domekgorskistrumien.pl
const IMG = '/assets/images';

export const contact = {
  name: 'Domek Górski Strumień',
  owners: 'Łucja Kozińska',
  street: 'ul. Leśna 2',
  city: 'Stronie Śląskie – Wieś',
  region: 'Ziemia Kłodzka, rejon Czarnej Góry',
  phone: '+48 509 725 055',
  phoneHref: 'tel:+48509725055',
  smsHref: 'sms:+48509725055',
  email: 'domekgorskistrumien@gmail.com',
  emails: ['domekgorskistrumien@gmail.com'],
  bankName: 'mBank',
  bankAccount: '23 1140 2004 0000 3402 2874 5444',
  depositInfo: 'Preferujemy wpłatę zadatku w wysokości minimum 30% wartości rezerwacji na konto',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10197.836494065641!2d16.850038!3d50.283357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x87f61638dd79362!2sdomek+g%C3%B3rski+strumie%C5%84!5e0!3m2!1spl!2spl!4v1510792790422',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Domek+G%C3%B3rski+Strumie%C5%84+Stronie+%C5%9Al%C4%85skie',
};

export const images = {
  hero: `${IMG}/ogrod-altana.webp`,
  logo: `${IMG}/logo.png`,
  winter: `${IMG}/okolica-zima.webp`,
  dojazd: `${IMG}/dojazd.webp`,
};

export const intro = {
  title: 'Witamy Serdecznie',
  lead:
    'i zapraszamy w góry o każdej porze roku w rejon Czarnej Góry na Ziemi Kłodzkiej do domku „Domek Górski Strumień” (w Stroniu Śląskim Wieś).',
  forGuests: 'W domku jest przygotowane dla gości:',
  location:
    'Domek usytuowany jest na słonecznym wzgórzu, pośród łąk i blisko lasów, przy drodze ze Stronia Śląskiego do Siennej.',
};

export const highlights = [
  { icon: 'BedDouble', title: '16 miejsc noclegowych', text: 'w 5 pokojach z łazienkami' },
  { icon: 'Mountain', title: 'Widok na stoki', text: '3 pokoje z widokiem na trasy zjazdowe na Czarnej Górze' },
  { icon: 'Home', title: 'Studio „Łowicki Akcent”', text: 'z aneksem kuchennym, łazienką i balkonem dla max. 4 osób' },
  { icon: 'CookingPot', title: 'Kuchnia z jadalnią', text: 'w pełni wyposażona, z wyjściem na taras' },
  { icon: 'Flame', title: 'Salonik z kominkiem', text: 'na parterze, do dyspozycji gości' },
  { icon: 'Gamepad2', title: 'Pokój zabaw', text: 'z piłkarzykami i TV' },
  { icon: 'Wifi', title: 'Bezpłatne Wi-Fi', text: 'oraz TV w każdym pokoju' },
  { icon: 'Car', title: 'Bezpłatny parking', text: 'miejsca postojowe przed domkiem, posesja ogrodzona' },
];

export const about = {
  title: 'O Nas',
  paragraphs: [
    'W malowniczej dolinie potoku Janówka, położonego wzdłuż drogi ze Stronia Śląskiego na Sienną, rozpościera się Stronie Śląskie Wieś. To mała wieś, ale urocza. Jedno z zabudowań, przy ul. Leśnej 2, należy do mnie – Łucji Kozińskiej – i nazywa się „Domek Górski Strumień”.',
    'Są tutaj piękne zimy i wspaniałe warunki do uprawiania sportów zimowych oraz letnich, jelenie, które dokarmiają się pod oknami domku, cisza taka, że słychać skrzekot derkaczy, kukanie kukułek, rykowiska jeleni w jesienną noc, cudowne widoki na Kotlinę Strońską i otaczające ją góry oraz możliwość obserwacji gwiazd na czarnym nocnym niebie. Ale to tylko kilka z bardzo wielu pozytywnych stron mieszkania w górskiej wsi. Aby je poznać, wystarczy tu przyjechać.',
    'Domek usytuowany jest wśród łąk, na których były wypasane byki i krowy, co spowodowało, że teraz na tych łąkach rośnie sporo kani. W okolicznych lasach jest raj dla grzybiarzy. Wokół domku są piękne widoki na pasmo gór w Masywie Śnieżnika i na miasteczko Stronie Śląskie. Do domku prowadzi asfaltowa, oświetlona droga. Przed domkiem są bezpłatne miejsca postojowe. Domek otoczony jest ogrodem z altanką, grillem i wędzarnią.',
  ],
};

// Informacje wspólne dla wszystkich pokoi (z podstron pokoi)
export const houseInfo = [
  {
    title: 'Parter – do dyspozycji gości',
    icon: 'CookingPot',
    items: [
      'Na parterze w korytarzu jest stojak na narty.',
      'Do wyłącznej dyspozycji gości jest duża, w pełni wyposażona kuchnia z jadalnią (duża lodówka, kuchenka 4-palnikowa na gaz) z wyjściem na taras, gdzie jest kącik jadalny i strefa wypoczynku na świeżym powietrzu.',
      'Na parterze jest też salonik z kominkiem oraz pokój rekreacyjny ze stołem do piłkarzyków.',
    ],
  },
  {
    title: 'Zasady pobytu i wiek gości',
    icon: 'ShieldCheck',
    items: [
      'Dla zapewnienia ciszy, komfortu i bezpieczeństwa, zapraszamy osoby dorosłe oraz dzieci od 10. roku życia.',
      'Obiekt nie przyjmuje dzieci poniżej 10 lat.',
      'Wynajem dotyczy poszczególnych pokoi gościnnych z łazienkami (nie prowadzimy wynajmu całego domu na wyłączność).',
    ],
  },
  {
    title: 'Ogrzewanie i posesja',
    icon: 'Flame',
    items: [
      'Cały domek jest ogrzewany wydajnym piecem na ekogroszek.',
      'Cała posesja jest ogrodzona, przed domkiem są miejsca postojowe.',
      'Wokół domku jest bardzo dużo zieleni: trawniki, kwiaty, drzewa, krzewy, altana z grillem, wędzarnia.',
    ],
  },
  {
    title: 'Informacje dodatkowe',
    icon: 'Mountain',
    items: [
      'Z okien domku rozpościera się piękna panorama na pasmo gór „Czarna Góra” i „Żmijowiec”, łąki, lasy i miasteczko Stronie Śląskie.',
    ],
  },
  {
    title: 'Sklepy',
    icon: 'ShoppingBag',
    items: [
      'Do miasteczka jest ok. 2 km – jest tam sporo marketów (Biedronka, Dino, Polo, Pepco), kryta pływalnia, apteki i przychodnie lekarskie.',
    ],
  },
  {
    title: 'Informacje turystyczne',
    icon: 'Trees',
    items: [
      'W rejonie jest sporo tras turystycznych do górskich wędrówek, tras rowerowych, tras narciarskich oraz lasów, w których jest dużo grzybów, jagód i jeżyn.',
      'Huta Szkła Kryształowego „Violetta” jest udostępniona do zwiedzania.',
      'Niedaleko od domku, ok. 3 km, jest piękne kąpielisko oraz ośrodek sportów zimowych „Czarna Góra”.',
    ],
  },
];

const img = (file, caption) => ({ src: `${IMG}/${file}.webp`, caption });

export const rooms = [
  {
    id: 1,
    slug: 'pokoj-siwka-i-kasztanki',
    number: 'Nr 1',
    name: 'Siwka i kasztanki',
    fullName: 'Pokój „Siwka i kasztanki”',
    capacity: 5,
    capacityLabel: 'Pokój 5-osobowy',
    short: 'Przestronny pokój z łóżkiem małżeńskim, łóżkiem pojedynczym i rozkładaną sofą – idealny dla rodziny.',
    features: [
      'Pokój 5-osobowy',
      'łóżko małżeńskie, łóżko pojedyncze i rozkładana 2-osobowa sofa',
      'możliwość dostawki',
      'stolik, 2 krzesła, szafki nocne',
      'garderoba, regał',
      'TV, Wi-Fi',
      'łazienka',
    ],
    cover: img('siwka-2', 'Pokój „Siwka i kasztanki” – łóżko małżeńskie i łóżko pojedyncze'),
    gallery: [
      img('siwka-1', 'Pokój „Siwka i kasztanki” – kącik wypoczynkowy przy oknie'),
      img('siwka-2', 'Pokój „Siwka i kasztanki” – łóżko małżeńskie i łóżko pojedyncze'),
      img('siwka-3', 'Pokój „Siwka i kasztanki” – widok na część sypialną'),
      img('siwka-4', 'Pokój „Siwka i kasztanki” – garderoba i TV'),
      img('siwka-5', 'Pokój „Siwka i kasztanki” – stolik z fotelem'),
      img('siwka-6', 'Pokój „Siwka i kasztanki” – rozkładana sofa i stolik'),
      img('siwka-7', 'Pokój „Siwka i kasztanki” – sofa i wejście do łazienki'),
      img('siwka-lazienka', 'Pokój „Siwka i kasztanki” – prywatna łazienka z prysznicem'),
    ],
  },
  {
    id: 2,
    slug: 'pokoj-wiklinowy',
    number: 'Nr 2',
    name: 'Wiklinowy',
    fullName: 'Pokój „Wiklinowy”',
    capacity: 4,
    capacityLabel: 'Pokój 4-osobowy',
    short: 'Klimatyczny pokój z wiklinowymi meblami, łóżkiem małżeńskim i rozkładaną sofą.',
    features: [
      'Pokój 4-osobowy',
      'łóżko małżeńskie, rozkładana sofa 2-osobowa',
      'szafa, komoda i regał wiklinowy',
      'stolik wiklinowy, 2 pufy',
      'TV, Wi-Fi',
      'łazienka',
    ],
    cover: img('wiklinowy-7', 'Pokój „Wiklinowy” – łóżko małżeńskie pod skosem'),
    gallery: [
      img('wiklinowy-1', 'Pokój „Wiklinowy” – łóżko małżeńskie'),
      img('wiklinowy-2', 'Pokój „Wiklinowy” – wiklinowy regał i łóżko'),
      img('wiklinowy-3', 'Pokój „Wiklinowy” – sypialnia w zieleni paproci'),
      img('wiklinowy-4', 'Pokój „Wiklinowy” – wiklinowy stolik i pufy'),
      img('wiklinowy-5', 'Pokój „Wiklinowy” – TV i wejście'),
      img('wiklinowy-6', 'Pokój „Wiklinowy” – widok na wejście do łazienki'),
      img('wiklinowy-7', 'Pokój „Wiklinowy” – łóżko małżeńskie pod skosem'),
      img('wiklinowy-8', 'Pokój „Wiklinowy” – rozkładana sofa i wiklinowy regał'),
      img('wiklinowy-9', 'Pokój „Wiklinowy” – wiklinowe meble'),
      img('wiklinowy-lazienka', 'Pokój „Wiklinowy” – łazienka'),
    ],
  },
  {
    id: 3,
    slug: 'w-lowickim-akcencie',
    number: 'Nr 3',
    name: 'Studio „W łowickim akcencie”',
    fullName: 'Pokój studio „W łowickim akcencie”',
    capacity: 5,
    capacityLabel: 'Studio 5-osobowe',
    short: 'Studio z aneksem kuchennym, balkonem i łazienką, urządzone w kolorowym łowickim stylu.',
    features: [
      'Studio 5-osobowe',
      'aneks kuchenny: lodówka, zlewozmywak, czajnik elektryczny, naczynia',
      '3 łóżka pojedyncze, rozkładana 2-osobowa sofa',
      'garderoba, sekretarzyk',
      'szafka nocna, stolik z 2 krzesłami',
      'balkon',
      'TV, Wi-Fi',
      'łazienka',
    ],
    cover: img('lowicki-1', 'Studio „W łowickim akcencie” – łóżka z łowicką pościelą'),
    gallery: [
      img('lowicki-1', 'Studio „W łowickim akcencie” – łóżka z łowicką pościelą'),
      img('lowicki-2', 'Studio „W łowickim akcencie” – część sypialna i aneks'),
      img('lowicki-3', 'Studio „W łowickim akcencie” – śniadanie do łóżka'),
      img('lowicki-4', 'Studio „W łowickim akcencie” – sofa, stolik i wyjście na balkon'),
      img('lowicki-5', 'Studio „W łowickim akcencie” – sekretarzyk i balkon'),
      img('lowicki-6', 'Studio „W łowickim akcencie” – 3 łóżka pojedyncze'),
      img('lowicki-aneks', 'Studio „W łowickim akcencie” – aneks kuchenny'),
      img('lowicki-lazienka', 'Studio „W łowickim akcencie” – łazienka'),
    ],
  },
  {
    id: 4,
    slug: 'pokoj-migdalowy-poranek',
    number: 'Nr 4',
    name: 'Migdałowy poranek',
    fullName: 'Pokój „Migdałowy poranek”',
    capacity: 4,
    capacityLabel: 'Pokój 4-osobowy',
    short: 'Jasny pokój z balkonem i widokiem na góry, 3 łóżkami pojedynczymi i sofą.',
    features: [
      'Pokój 4-osobowy, możliwość dostawki',
      '3 łóżka pojedyncze',
      'rozkładana 2-osobowa sofa',
      'garderoba',
      'szafki nocne, stolik, 2 foteliki',
      'balkon',
      'TV, Wi-Fi',
      'łazienka',
    ],
    cover: img('migdalowy-2', 'Pokój „Migdałowy poranek” – łóżka i kącik wypoczynkowy'),
    gallery: [
      img('migdalowy-1', 'Pokój „Migdałowy poranek” – łóżka pojedyncze'),
      img('migdalowy-2', 'Pokój „Migdałowy poranek” – łóżka i kącik wypoczynkowy'),
      img('migdalowy-3', 'Pokój „Migdałowy poranek” – wnętrze z wyjściem na balkon'),
      img('migdalowy-4', 'Pokój „Migdałowy poranek” – garderoba i TV'),
      img('migdalowy-5', 'Pokój „Migdałowy poranek” – foteliki przy balkonie z widokiem na góry'),
      img('migdalowy-6', 'Pokój „Migdałowy poranek” – rozkładana sofa'),
      img('migdalowy-7', 'Pokój „Migdałowy poranek” – sofa i TV'),
      img('migdalowy-8', 'Pokój „Migdałowy poranek” – balkon i foteliki'),
      img('migdalowy-9', 'Pokój „Migdałowy poranek” – łóżka pojedyncze'),
      img('migdalowy-lazienka', 'Pokój „Migdałowy poranek” – łazienka'),
    ],
  },
  {
    id: 5,
    slug: 'pokoj-dla-zakochanych',
    number: 'Nr 5',
    name: 'Dla zakochanych',
    fullName: 'Pokój „Dla zakochanych”',
    capacity: 2,
    capacityLabel: 'Pokój 2-osobowy',
    short: 'Mały, przytulny pokoik dla dwojga z łóżkiem małżeńskim.',
    features: [
      'Mały pokoik 2-osobowy z łóżkiem małżeńskim',
      'stolik, 2 foteliki',
      'komoda, półki, wieszak',
      'TV, Wi-Fi',
      'łazienka',
    ],
    cover: img('zakochanych-1', 'Pokój „Dla zakochanych” – łóżko małżeńskie'),
    gallery: [
      img('zakochanych-1', 'Pokój „Dla zakochanych” – łóżko małżeńskie'),
      img('zakochanych-2', 'Pokój „Dla zakochanych” – sypialnia pod skosem'),
      img('zakochanych-3', 'Pokój „Dla zakochanych” – fotelik i łóżko'),
      img('zakochanych-4', 'Pokój „Dla zakochanych” – foteliki, półki i TV'),
      img('zakochanych-5', 'Pokój „Dla zakochanych” – kącik z TV'),
      img('zakochanych-6', 'Pokój „Dla zakochanych” – fotelik przy oknie'),
      img('zakochanych-lazienka', 'Pokój „Dla zakochanych” – łazienka'),
    ],
  },
];

export const commonAreas = [
  img('wnetrze-kuchnia-jadalnia', 'Kuchnia z jadalnią na parterze'),
  img('wnetrze-salonik', 'Salonik na parterze'),
  img('wnetrze-salonik-pianino', 'Salonik – zabytkowe pianino'),
  img('wnetrze-salonik-wozek', 'Salonik – stylowe dekoracje'),
  img('wnetrze-pokoj-zabaw', 'Pokój zabaw z piłkarzykami i TV'),
  img('wnetrze-korytarz', 'Korytarz na parterze'),
  img('wnetrze-hol', 'Hol przy wejściu'),
];

export const garden = [
  img('ogrod-altana', 'Ogród z altaną i widokiem na góry'),
  img('ogrod-altana-skalniak', 'Altana i skalniak'),
  img('ogrod-altana-wnetrze', 'Wnętrze altany – miejsce na wspólne posiłki'),
  img('ogrod-dziedziniec', 'Dziedziniec przed domkiem'),
  img('ogrod-kwiaty', 'Kwiaty w ogrodzie na tle gór'),
  img('ogrod-skalniak', 'Ogród skalny'),
  img('ogrod-woz', 'Drewniany wóz w ogrodzie'),
  img('ogrod-hamak', 'Hamak wśród kwitnących krzewów'),
  img('ogrod-laki', 'Ogród z widokiem na łąki i lasy'),
  img('ogrod-pergola', 'Pergola różana'),
];

export const surroundings = [
  img('okolica-zima', 'Zimowy krajobraz wokół domku'),
  img('okolica-grzyby', 'Grzyby w okolicznych lasach – raj dla grzybiarzy'),
];

export const galleryCategories = [
  { id: 'pokoje', label: 'Pokoje', items: rooms.flatMap((r) => r.gallery) },
  { id: 'wnetrza', label: 'Części wspólne', items: commonAreas },
  { id: 'ogrod', label: 'Ogród', items: garden },
  { id: 'okolica', label: 'Okolica', items: surroundings },
];

export const distances = [
  { km: 2, text: 'od zalewu z kąpieliskiem w Starej Morawie' },
  { km: 2, text: 'od krytego basenu w Stroniu Śląskim' },
  { km: 2, text: 'od ośrodka jeździeckiego' },
  { km: 3, text: 'od ośrodka narciarskiego Czarna Góra' },
  { km: 7, text: 'od Jaskini Niedźwiedziej i Kopalni Uranu w Kletnie' },
  { km: 7, text: 'od parku linowego w Kletnie' },
  { km: 9, text: 'od uzdrowiska Lądek-Zdrój' },
  { km: 15, text: 'od Międzygórza – wodospad Wilczki, Ogród Bajek' },
  { km: 20, text: 'od Złotego Stoku – kopalnia złota' },
  { km: 25, text: 'od Jawornika i od Starego Mesta w Czechach' },
  { km: 35, text: 'od Wieży – Spacer w Chmurach w Dolnej Morawie w Czechach' },
  { km: 40, text: 'od Szczelińca / Góry Stołowe' },
];

// Cennik – w kolejności pokoi jak na oryginalnej stronie
export const pricing = {
  validity: 'Ceny obowiązujące od 10.2020 do 30.06.2021',
  rooms: [
    { id: 5, label: 'Nr 5 Dla zakochanych' },
    { id: 4, label: 'Nr 4 Migdałowy poranek' },
    { id: 3, label: 'Nr 3 Studio łowicki akcent' },
    { id: 2, label: 'Nr 2 Wiklinowy' },
    { id: 1, label: 'Nr 1 Siwka i kasztanki' },
  ],
  groups: [
    {
      periods: ['Wielkanoc – pobyt min. 4 doby', 'Weekend majowy – pobyt min. 4 doby'],
      prices: [
        '120 zł / noc, dla jednej osoby 75 zł / noc',
        '65 zł os./noc przy 4 os., 70 zł os./noc przy 3 os., 80 zł os./noc przy 2 os.',
        '70 zł os./noc przy 4 os., 75 zł os./noc przy 3 os., 85 zł os./noc przy 2 os.',
        '65 zł os./noc przy 4 os., 70 zł os./noc przy 3 os., 80 zł os./noc przy 2 os.',
        '65 zł os./noc przy 4 os., 70 zł os./noc przy 3 os., 80 zł os./noc przy 2 os.',
      ],
    },
    {
      periods: [
        'Boże Ciało – pobyt min. 4 doby',
        'Weekendy – pobyt min. 3 doby',
        'Święta Bożego Narodzenia – pobyt min. 4 doby',
      ],
      prices: [
        '130 zł / noc, dla jednej osoby 80 zł / noc',
        '75 zł os./noc przy 4 os., 80 zł os./noc przy 3 os., 85 zł os./noc przy 2 os.',
        '80 zł os./noc przy 4 os., 85 zł os./noc przy 3 os., 90 zł os./noc przy 2 os.',
        '70 zł os./noc przy 4 os., 75 zł os./noc przy 3 os., 85 zł os./noc przy 2 os.',
        '70 zł os./noc przy 4 os., 75 zł os./noc przy 3 os., 85 zł os./noc przy 2 os.',
      ],
    },
    {
      periods: ['Sylwester – pobyt min. 4 doby'],
      prices: [
        '140 zł / noc, dla jednej osoby 85 zł / noc',
        '80 zł os./noc przy 4 os., 85 zł os./noc przy 3 os., 90 zł os./noc przy 2 os.',
        '85 zł os./noc przy 4 os., 90 zł os./noc przy 3 os., 95 zł os./noc przy 2 os.',
        '75 zł os./noc przy 4 os., 85 zł os./noc przy 3 os., 90 zł os./noc przy 2 os.',
        '75 zł os./noc przy 4 os., 85 zł os./noc przy 3 os., 90 zł os./noc przy 2 os.',
      ],
    },
  ],
};

export const navLinks = [
  { name: 'Strona Główna', path: '/' },
  { name: 'O nas', path: '/o-nas' },
  { name: 'Pokoje', path: '/pokoje', children: rooms.map((r) => ({ name: r.fullName, path: `/pokoje/${r.slug}` })) },
  { name: 'Cennik', path: '/cennik' },
  { name: 'Galeria', path: '/galeria' },
  { name: 'Okolica', path: '/okolica' },
  { name: 'Kontakt', path: '/kontakt' },
];
