// JEDYNE ŹRÓDŁO WIDOCZNEJ TREŚCI — cały tekst strony docelowej znajduje się tutaj.
// Komponenty nie powinny zawierać hardkodowanych ciągów znaków.
export const copy = {
  metadata: {
    title: "500 Zdrowych Wypieków — Babcia Zosia",
    description:
      "500 przepisów na miękkie, puszyste i pyszne wypieki, całkowicie bez glutenu, nabiału i cukru.",
    productName: "Książka „500 wypieków Babci Zosi”",
  },

  hero: {
    urgencyBar: "OFERTA WYGASA DZIŚ · 90% ZNIŻKI tylko na dziś",
    badge: "Nowa książka z przepisami · +3 200 zadowolonych kursantów",
    headline: {
      before: "NIGDY WIĘCEJ NIE SPOJRZYSZ NA ",
      accent: "ZDROWE WYPIEKI",
      after: " W TEN SAM SPOSÓB, GDY TO ZOBACZYSZ.",
    },
    subheadline:
      "Odkryj 500 przepisów na miękkie, puszyste i pyszne ciasta, całkowicie bez glutenu, nabiału i cukru. Ciesz się każdym kęsem bez wyrzutów sumienia czy ograniczeń.",
    ctaLabel: "TAK, CHCĘ PRZEPISY",
    starsAriaLabel: "Ocena 5 z 5 gwiazdek",
    starsRating: "5.0",
    socialProof: "+3 200 certyfikowanych kursantów",
    trustChips: [
      { icon: "🌾", text: "Bez glutenu" },
      { icon: "🥛", text: "Bez nabiału" },
      { icon: "🍬", text: "Bez cukru" },
    ],
    image: {
      src: "/hero-mockup.webp",
      alt: "Książka 500 zdrowych wypieków Babci Zosi",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Gotowe w", bottom: "20 min" },
      discount: { icon: "🔥", top: "Dziś", bottom: "90% ZNIŻKI" },
    },
  },

  preview: {
    kicker: "Krótki podgląd",
    headline: "ZOBACZ PYSZNOŚCI, KTÓRE NAUCZYSZ SIĘ PIEC",
    items: [
      { src: "/preview/3-6.webp", alt: "Zdrowy wypiek 1" },
      { src: "/preview/2-7.webp", alt: "Zdrowy wypiek 2" },
      { src: "/preview/4-3.webp", alt: "Zdrowy wypiek 3" },
      { src: "/preview/3-5-1.webp", alt: "Zdrowy wypiek 4" },
      { src: "/preview/1-7.webp", alt: "Zdrowy wypiek 5" },
      { src: "/preview/4-2.webp", alt: "Zdrowy wypiek 6" },
      { src: "/preview/7-1-2-2.webp", alt: "Zdrowy wypiek 7" },
      { src: "/preview/1-5-1.webp", alt: "Zdrowy wypiek 8" },
      { src: "/preview/3-3.webp", alt: "Zdrowy wypiek 9" },
      { src: "/preview/2-4.webp", alt: "Zdrowy wypiek 10" },
      { src: "/preview/1-4.webp", alt: "Zdrowy wypiek 11" },
      { src: "/preview/1-6-1.webp", alt: "Zdrowy wypiek 12" },
      { src: "/preview/2-3.webp", alt: "Zdrowy wypiek 13" },
      { src: "/preview/chocolate.webp", alt: "Zdrowe ciasto czekoladowe" },
      { src: "/preview/ce2f26de6ce5f6b237a4-1.webp", alt: "Zdrowy wypiek 15" },
      { src: "/preview/Design-sem-nome-5-1.webp", alt: "Zdrowy wypiek 16" },
      { src: "/preview/12-1-2.webp", alt: "Zdrowy wypiek 17" },
      { src: "/preview/2-6.webp", alt: "Zdrowy wypiek 18" },
      { src: "/preview/1-8.webp", alt: "Zdrowy wypiek 19" },
    ],
  },

  benefits: {
    kicker: "Dlaczego się zakochasz",
    headline: "Zdrowe wypieki bez kompromisów w smaku",
    items: [
      { icon: "🎂", title: "500 smaków, żeby nigdy Ci się nie znudziło" },
      { icon: "✨", title: "Idealna konsystencja nawet bez glutenu" },
      { icon: "🌾", title: "Nie potrzebujesz specjalnych mąk" },
      { icon: "⚡", title: "Błyskawiczne ciasta w 20 minut" },
      { icon: "💚", title: "Bez mleka i bez cukru" },
      { icon: "📖", title: "Proste instrukcje krok po kroku" },
    ],
  },

  samples: {
    kicker: "Spróbuj ich najpierw",
    headline: "NIEZIEMSKO PYSZNE CIASTA (ZDROWA WERSJA):",
    badge: "Bez cukru, glutenu i laktozy",
    items: [
      {
        name: "CIASTO CZEKOLADOWE",
        variant: "(FIT I PUSZYSTE)",
        kcal: "88",
        time: "20 min",
        src: "/samples/pastel-chocolate.gif",
        alt: "Czekoladowe ciasto fit",
      },
      {
        name: "CIASTO MARCHEWKOWE",
        variant: "(Z CZEKOLADOWĄ POLEWĄ FIT)",
        kcal: "120",
        time: "20 min",
        src: "/samples/pastel-zanahoria.gif",
        alt: "Ciasto marchewkowe z czekoladą",
      },
      {
        name: "CHLEBEK BANANOWY",
        variant: "(FIT)",
        kcal: "90",
        time: "20 min",
        src: "/samples/pastel-platano.gif",
        alt: "Chlebek bananowy fit",
      },
      {
        name: "CIASTO TRES LECHES",
        variant: "(BEZ LAKTOZY)",
        kcal: "100",
        time: "20 min",
        src: "/samples/pastel-tres-leches.gif",
        alt: "Ciasto Tres leches bez laktozy",
      },
      {
        name: "TORT CZEKOLADOWY",
        variant: "(Z 5 SKŁADNIKÓW)",
        kcal: "108",
        time: "20 min",
        src: "/samples/chocotorta.gif",
        alt: "Zdrowy tort czekoladowy",
      },
      {
        name: "CIASTO CYTRYNOWE",
        variant: "(Z BLENDERA)",
        kcal: "100",
        time: "20 min",
        src: "/samples/pastel-limon.gif",
        alt: "Ciasto cytrynowe",
      },
      {
        name: "TORT RED VELVET",
        variant: "(FIT)",
        kcal: "105",
        time: "19 min",
        src: "/samples/pastel-red-velvet.gif",
        alt: "Tort Red Velvet fit",
      },
    ],
    caloriesLabel: "Kalorie",
    timeLabel: "Czas",
  },

  moreRecipesCta: {
    pretitle: "I jeszcze ponad",
    big: "493",
    post: "PRZEPISÓW NA WYPIEKI...",
    ctaLabel: "POBIERZ SWÓJ EGZEMPLARZ TERAZ",
  },

  testimonials: {
    kicker: "Prawdziwe opinie",
    headline: "ZOBACZ, CO MÓWIĄ CI, KTÓRZY JUŻ PIEKĄ Z NAMI",
    subheadline: "Czym dzielą się nasi kursanci",
    studentsBadge: "+ 3 200 certyfikowanych kursantów",
    items: [
      {
        text: "Wczoraj zrobiłam ciasto czekoladowe i nie został ani jeden kawałek 😍 Rodzina już mnie prosi, żebym upiekła je znowu w ten weekend. Bez cukru i bez glutenu... to po prostu niesamowite!!",
        time: "10:23",
      },
      {
        text: "Nie rozumiałam, jak to może być takie pyszne bez mleka i cukru. Ciasto Tres leches bez laktozy odebrało mi mowę 🤯 Od 3 dni piekę bez przerwy.",
        time: "11:47",
      },
      {
        text: "Od 10 lat choruję na celiakię i nigdy nie mogłam zjeść prawdziwego tortu. Dzięki tej książce w końcu mogę cieszyć się smakiem jak wszyscy inni 😭❤️",
        time: "14:02",
      },
      {
        text: "Ciasto marchewkowe z polewą czekoladową wyszło IDENTYCZNIE jak z cukierni, ale bez mąki i cukru. Zaniosłam do biura i nikt nie uwierzył, że jest zdrowe hahaha.",
        time: "09:15",
      },
      {
        text: "Mam tę książkę od miesiąca i zrobiłam już ponad 15 przepisów. Fit Red Velvet wychodzi puszyste i ma ten przepiękny kolor 🎂 W 100% polecam każdemu!!",
        time: "16:38",
      },
      {
        text: "Na początku miałam wątpliwości... ale pierwsze ciasto od razu mnie kupiło. Fit chlebek bananowy w 20 minut to prawdziwy cud ⭐⭐⭐⭐⭐ Dobrze, że jesteście.",
        time: "20:54",
      },
    ],
    mockup: {
      src: "/testimonials/mockup-grande.webp",
      alt: "Książka z przepisami na telefonie, komputerze i tablecie",
    },
  },

  categories: {
    kicker: "Koniec z nudą",
    headline: "PRZEPISY PODZIELONE NA KATEGORIE",
    groups: [
      {
        title: "100 Ciast z nadzieniem",
        items: [
          { src: "/preview/1-4.webp", alt: "Ciasto z nadzieniem 1" },
          { src: "/preview/7-1-2-2.webp", alt: "Ciasto z nadzieniem 2" },
          { src: "/preview/12-1-2.webp", alt: "Ciasto z nadzieniem 3" },
          { src: "/preview/2-3.webp", alt: "Ciasto z nadzieniem 4" },
          { src: "/preview/7-1-2-1.webp", alt: "Ciasto z nadzieniem 5" },
        ],
      },
      {
        title: "100 Ciast owocowych",
        items: [
          { src: "/preview/1-5-1.webp", alt: "Ciasto owocowe 1" },
          { src: "/preview/2-4.webp", alt: "Ciasto owocowe 2" },
          { src: "/preview/3-3.webp", alt: "Ciasto owocowe 3" },
          { src: "/preview/Design-sem-nome-5-1.webp", alt: "Ciasto owocowe 4" },
          { src: "/preview/Design-sem-nome-6-1.webp", alt: "Ciasto owocowe 5" },
        ],
      },
      {
        title: "100 Klasycznych ciast",
        items: [
          { src: "/preview/1-6-1.webp", alt: "Klasyczne ciasto 1" },
          { src: "/preview/2-5-1.webp", alt: "Klasyczne ciasto 2" },
          { src: "/preview/4-2.webp", alt: "Klasyczne ciasto 3" },
        ],
      },
      {
        title: "100 Nowoczesnych wypieków",
        items: [
          { src: "/preview/1-7.webp", alt: "Wypiek nowoczesny 1" },
          { src: "/preview/2-6.webp", alt: "Wypiek nowoczesny 2" },
          { src: "/preview/3-5-1.webp", alt: "Wypiek nowoczesny 3" },
          { src: "/preview/4-3.webp", alt: "Wypiek nowoczesny 4" },
        ],
      },
      {
        title: "100 Deserów na zimno",
        items: [
          { src: "/preview/1-8.webp", alt: "Deser na zimno 1" },
          { src: "/preview/2-7.webp", alt: "Deser na zimno 2" },
          { src: "/preview/3-6.webp", alt: "Deser na zimno 3" },
          { src: "/preview/4-4.webp", alt: "Deser na zimno 4" },
        ],
      },
    ],
    ctaLabel: "CHCĘ TE PRZEPISY",
  },

  story: {
    kicker: "Historia kryjąca się za książką",
    headline: "JAK POWSTAŁA TA KSIĄŻKA Z PRZEPISAMI?",
    paragraphs: [
      "Babcia Zosia zawsze wypełniała nasz dom zapachem wypieków, które łączyły rodzinę. Ale kiedy moja córka Ania dowiedziała się, że nie może jeść glutenu, wszystko się zmieniło.",
      "Jako dietetyczka postanowiłam razem z mamą przerobić te przepisy na bezpieczne wersje: bez cukru, bez glutenu i bez laktoze. Po wielu próbach osiągnęłyśmy rezultaty, które zaskoczyły nawet samą Babcię Zosię.",
      "Tak narodziła się ta książka: rodzinne dziedzictwo, pełne smaku i miłości, które teraz może stać się częścią również Twojej historii.",
    ],
    image: {
      src: "/story.webp",
      alt: "Babcia Zosia i jej wnuczka w kuchni",
    },
  },

  bonuses: {
    kicker: "Prezenty w zestawie",
    headline: "OTRZYMUJESZ +5 DARMOWYCH BONUSÓW",
    items: [
      {
        label: "BONUSOWA KSIĄŻKA 1",
        name: "CIASTECZKA I MUFFINKI",
        desc: "20 nieodpartych przepisów na chrupiące ciasteczka i puszyste muffinki, pyszne i zdrowe.",
        price: "89 zł",
        freeLabel: "DZIŚ ZA DARMO",
        image: { src: "/bonuses/bonus-galletas.webp", alt: "Bonus Ciasteczka i Muffinki" },
      },
      {
        label: "BONUSOWA KSIĄŻKA 2",
        name: "PRZEPISY BIAŁKOWE Z AIR FRYERA",
        desc: "20 przepisów na szybkie, zdrowe i bogate w białko posiłki, przygotowane w air fryerze.",
        price: "89 zł",
        freeLabel: "DZIŚ ZA DARMO",
        image: { src: "/bonuses/bonus-freidora.webp", alt: "Bonus Air Fryer" },
      },
      {
        label: "BONUSOWA KSIĄŻKA 3",
        name: "PRZEPISY NA ZDROWE PĄCZKI",
        desc: "Chrupiące przekąski bez wyrzutów sumienia, zdrowe i pełne smaku w każdym kęsie.",
        price: "89 zł",
        freeLabel: "DZIŚ ZA DARMO",
        image: { src: "/bonuses/bonus-bunuelos.webp", alt: "Bonus Zdrowe Pączki" },
      },
      {
        label: "BONUSOWA KSIĄŻKA 4",
        name: "PRZEPISY NA PYSZNE SAŁATKI",
        desc: "Świeże, proste i zdrowe sałatki, aby każdego dnia cieszyć się smakiem i równowagą.",
        price: "89 zł",
        freeLabel: "DZIŚ ZA DARMO",
        image: { src: "/bonuses/bonus-ensaladas.webp", alt: "Bonus Sałatki" },
      },
      {
        label: "BONUSOWA KSIĄŻKA 5",
        name: "67 SOKÓW DETOKSYKUJĄCYCH",
        desc: "Odzyskaj energię dzięki 67 przepisom na naturalne, orzeźwiające i pożywne soki detoksykujące.",
        price: "89 zł",
        freeLabel: "DZIŚ ZA DARMO",
        image: { src: "/bonuses/bonus-sucos.webp", alt: "Bonus 67 Soków Detoksykujących" },
      },
    ],
    secretBonus: {
      label: "+3 TAJNE BONUSY",
      name: "Ekskluziwne niespodzianki dla tych, którzy kupią książkę z przepisami już dziś",
      price: "250 zł",
      freeLabel: "DZIŚ ZA DARMO",
      image: { src: "/bonuses/bonus-secreto.webp", alt: "Pudełko z tajnymi bonusami" },
    },
    ctaLabel: "CHCĘ TE PRZEPISY",
  },

  audience: {
    kicker: "Czy to dla Ciebie?",
    headline: "DLA OSÓB, KTÓRE SZUKAJĄ:",
    items: [
      "Zdrowszych przepisów",
      "Zmiany nawyków żywieniowych",
      "Mają nietolerancję laktozy",
      "Cierpią na celiakię",
      "Są diabetykami",
    ],
  },

  finalCta: {
    flagline: "Pierwszych 100 klientów otrzymuje 20 darmowych lekcji wideo",
    headline: "KSIĄŻKA 500 WYPIEKÓW BABCI ZOSI ®",
    subheadline: "Wszystko, czego potrzebujesz, by piec bez wyrzutów sumienia",
    includesTitle: "+5 DARMOWYCH KSIĄŻEK:",
    includes: [
      "+ PRZEPISY NA PYSZNE SAŁATKI I DRESSINGI",
      "+ PRZEPISY NA ZDROWE PĄCZKI",
      "+ PRZEPISY NA CIASTECZKA I MUFFINKI",
      "+ PRZEPISY BIAŁKOWE Z AIR FRYERA",
      "+ 67 PRZEPISÓW NA SOKI DETOKSYKUJĄCE",
    ],
    secretTitle: "+3 TAJNE BONUSY:",
    discountLabel: "90% ZNIŻKI",
    regularPriceLabel: "STARA CENA:",
    regularPrice: "250 zł",
    regularPriceSuffix: "...",
    offerPriceLabel: "Tylko za",
    offerCurrency: "",
    offerPrice: "30 zł",
    button: "TAK, CHCĘ JĄ",
    urgencyNote: "**OFERTA WYGASA DZIŚ**",
    paymentLabel: "METODY PŁATNOŚCI",
    paymentImage: { src: "/payment-methods.webp", alt: "Metody płatności" },
    secureLabel: "W 100% BEZPIECZNA STRONA",
    secureImage: { src: "/secure-site.webp", alt: "W 100% bezpieczna strona" },
    image: { src: "/final-mockup.webp", alt: "Książki z przepisami na wszystkich platformach" },
    bonusesBadge: "+8 darmowych bonusów",
    discountStickerLabel: "Zniżka",
    discountStickerValue: "90% ZNIŻKI",
  },

  delivery: {
    kicker: "Dostawa",
    headline: "JAK OTRZYMAM PRZEPISY?",
    items: [
      { icon: "🖨️", text: "Można je wydrukować na papierze." },
      { icon: "📱", text: "Możesz je przeglądać na telefonie." },
      { icon: "💻", text: "Możesz je czytać na komputerze." },
      { icon: "✅", text: "Możesz je przeglądać również na tablecie." },
      { icon: "♾️", text: "Dożywotni dostęp: w tym do wszystkich nowych przepisów." },
      { icon: "📩", text: "Zgubiłeś przepis? Wyślemy Ci go ponownie." },
      { icon: "📚", text: "Otrzymuj nowe książki każdego miesiąca." },
    ],
  },

  guarantee: {
    kicker: "Bez ryzyka",
    headline: "WYPRÓBUJ BEZ RYZYKA — 14-dniowa bezwarunkowa gwarancja.",
    body: "Masz 14 dni na ich przetestowanie. Jeśli przepisy Cię nie przekonają, zwrócę Ci pieniądze co do grosza. Bez komplikacji. Bez stresu.",
    alt: "Pieczęć 14-dniowej bezwarunkowej gwarancji",
    image: { src: "/guarantee-badge.webp", alt: "14 dni gwarancji" },
  },

  faq: {
    kicker: "Pytania i odpowiedzi",
    headline: "FAQ — o to pytają wszyscy",
    items: [
      {
        q: "Czy składniki są drogie?",
        a: "Nie! Używamy prostych składników, które już masz w domu: żadnych skomplikowanych czy drogich produktów.",
      },
      {
        q: "Czy ciasto bez pszenicy, mleka, laktozy i cukru jest naprawdę smaczne?",
        a: "Tak, a co najlepsze: przygotowuje się je niezwykle łatwo! Przepisy zostały stworzone tak, aby zachować smak, który uwielbiasz, używając lekkich i łatwo dostępnych składników.",
      },
      {
        q: "Czy przepisy są łatwe dla początkujących (którzy nigdy nie piekli ciasta)?",
        a: "Są idealne dla początkujących! Wszystko jest wyjaśnione krok po kroku, z użyciem zwykłych składników i prostych instrukcji. Jeśli wiesz, jak włączyć piekarnik, to znaczy, że potrafisz je upiec.",
      },
      {
        q: "Czym słodzi się wypieki?",
        a: "Możesz wybrać to, co wolisz: owoce (banany lub daktyle), miód lub słodziki takie jak stewia czy erytrytol. W każdym przepisie podana jest dokładna ilość dla każdej z opcji.",
      },
      {
        q: "Czy mogę zastąpić cukier owocami (bananem, daktylami)? Jak to zrobić?",
        a: "Tak, możesz! I jest to prostsze niż się wydaje: przepis mówi Ci, jakiego owocu użyć, ile go dodać i jak stworzyć idealny, wilgotny i słodki deser.",
      },
      {
        q: "Jakich mąk używacie?",
        a: "Używamy mieszanki mąk, takich jak ryżowa, owsiana czy migdałowa, które znajdziesz w każdym supermarkecie, często nawet taniej niż mąkę pszenną.",
      },
      {
        q: "W ile minut ciasto jest gotowe?",
        a: "Większość zajmuje 20 lub 30 minut. Zanim zrobisz sobie kawę, ciasto już będzie pachnieć w całej kuchni.",
      },
    ],
  },

  footer: {
    brand: "Babcia Zosia",
    links: [
      { label: "Polityka prywatności", href: "https://grandmateresa.com/politica-de-privacidad/" },
      { label: "Warunki korzystania", href: "https://grandmateresa.com/condiciones-de-uso/" },
      { label: "Polityka zwrotów", href: "https://grandmateresa.com/politica-de-devoluciones/" },
    ],
    copyright: "© 2026 / Babcia Zosia – Wszelkie prawa zastrzeżone.",
  },

  stickyCta: {
    priceLabel: "Dziś",
    offerPrice: "30 zł",
    strikePrice: "250 zł",
    ctaLabel: "CHCĘ JĄ",
  },
};