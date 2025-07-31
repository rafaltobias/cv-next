# Portfolio Rafała Adamczyka

Nowoczesne portfolio zbudowane w Next.js 14 z wykorzystaniem shadcn/ui i Tailwind CSS.

## 🚀 Funkcje

- **Responsywny design** - działa na wszystkich urządzeniach
- **Nowoczesne komponenty** - zbudowane z shadcn/ui
- **Optymalizacja wydajności** - szybkie ładowanie i płynne animacje
- **Sekcje portfolio:**
  - Hero z informacjami kontaktowymi
  - O mnie - historia i doświadczenie
  - Umiejętności - technologie i narzędzia
  - Projekty - portfolio prac
  - Kontakt - informacje kontaktowe

## 🛠️ Technologie

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Komponenty:** shadcn/ui
- **Język:** TypeScript
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## 🚀 Uruchomienie

Sklonuj repozytorium i zainstaluj zależności:

```bash
git clone <repository-url>
cd cv-next
npm install
```

Uruchom serwer deweloperski:

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## 📝 Struktura Projektu

```
src/
├── app/
│   ├── layout.tsx      # Layout aplikacji
│   ├── page.tsx        # Strona główna
│   └── globals.css     # Style globalne
├── components/
│   ├── ui/             # Komponenty shadcn/ui
│   ├── Header.tsx      # Nawigacja
│   ├── Hero.tsx        # Sekcja powitalna
│   ├── About.tsx       # O mnie
│   ├── Skills.tsx      # Umiejętności
│   ├── Projects.tsx    # Projekty
│   ├── Contact.tsx     # Kontakt
│   └── Footer.tsx      # Stopka
└── lib/
    └── utils.ts        # Utilities
```

## 🎨 Dostosowywanie

### Zmiana treści
Edytuj poszczególne komponenty w katalogu `src/components/` aby zmienić treść portfolio.

### Zmiana stylów
Kolory i style można dostosować w:
- `src/app/globals.css` - zmienne CSS
- `tailwind.config.js` - konfiguracja Tailwind
- `components.json` - konfiguracja shadcn/ui

### Dodawanie nowych sekcji
1. Utwórz nowy komponent w `src/components/`
2. Zaimportuj go w `src/app/page.tsx`
3. Dodaj link w nawigacji (`src/components/Header.tsx`)

## 📦 Build i Deploy

Zbuduj aplikację dla produkcji:

```bash
npm run build
```

Uruchom wersję produkcyjną lokalnie:

```bash
npm run start
```

## 📱 Responsive Design

Portfolio jest w pełni responsywne i optymalizowane dla:
- Mobile (< 768px)
- Tablet (768px - 1024px)  
- Desktop (> 1024px)

## 🔧 Konfiguracja

### Metadata SEO
Edytuj `src/app/layout.tsx` aby zmienić:
- Tytuł strony
- Opis meta
- Słowa kluczowe
- Open Graph tags

### Kolory motywu
Zmień kolory w `src/app/globals.css`:
```css
:root {
  --primary: your-color;
  --secondary: your-color;
  /* ... */}
```

## 📄 Licencja

Ten projekt jest open source i dostępny na licencji MIT.

## 📞 Kontakt

- **Email:** rafaladamczyk333@gmail.com
- **GitHub:** [rafaltobias](https://github.com/rafaltobias)
- **Lokalizacja:** Wrocław, Polska

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
