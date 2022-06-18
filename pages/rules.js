/** @format */

import styled from "styled-components";
import Layout from "../layout/Layout";
import { colors } from "../utils";

const Container = styled.div`
  width: 100%;

  color: ${colors.ligthGreyHEX};

  font-size: 12px;

  margin: 20px;
`;

const Paragraph = styled.p``;
const ListOrdered = styled.ol`
  margin: 20px 20px 20px 0;
`;

const Subject = styled.h3`
  text-align: center;
`;

const Rules = () => {
  return (
    <Layout>
      <Container>
        <Subject>REGULAMIN SKLEPU</Subject>
        <Paragraph>I. Postanowienia wstępne</Paragraph>
        <ListOrdered type='1'>
          <li>
            Sklep internetowy Carp Grains, dostępny pod adresem
            internetowym carpgrains.pl prowadzony jest przez Dariusza Lesznar
            prowadzącego działalność gospodarczą pod firmą
            CARP GRAINS LESZNAR DARIUSZ, wpisaną do Centralnej Ewidencji i Informacji
            o Działalności Gospodarczej (CEIDG) prowadzonej przez ministra
            właściwego ds. gospodarki, NIP 6312677833, REGON
            369272669
          </li>
          <li>
            Niniejszy regulamin skierowany jest do Konsumentów i określa zasady
            i tryb zawierania z Konsumentem Umowy Sprzedaży na odległość za
            pośrednictwem Sklepu.
          </li>
        </ListOrdered>
        <Paragraph>II. Definicje</Paragraph>
        <ListOrdered type='1'>
          <li>
            Konsument - osoba fizyczna zawierająca ze Sprzedawcą umowę w ramach
            Sklepu, której przedmiot nie jest związany bezpośrednio z jej
            działalnością gospodarczą lub zawodową.{" "}
          </li>
          <li>
            Sprzedawca - osoba fizyczna prowadząca działalność gospodarczą pod
            firmą  CARP GRAINS LESZNAR DARIUSZ, wpisaną do Centralnej Ewidencji i Informacji
            o Działalności Gospodarczej (CEIDG) prowadzonej przez ministra
            właściwego ds. gospodarki, NIP 6312677833, REGON
            369272669
          </li>
          <li>
            Klient - każdy podmiot dokonujący zakupów za pośrednictwem Sklepu.
          </li>
          <li>
            Przedsiębiorca - osoba fizyczna, osoba prawna i jednostka
            organizacyjna niebędąca osobą prawną, której odrębna ustawa
            przyznaje zdolność prawną, wykonująca we własnym imieniu działalność
            gospodarczą, która korzysta ze Sklepu.{" "}
          </li>
          <li>
            Sklep - sklep internetowy prowadzony przez Sprzedawcę pod adresem
            internetowym carpgrains.pl
          </li>
          <li>
            Umowa zawarta na odległość - umowa zawarta z Klientem w ramach
            zorganizowanego systemu zawierania umów na odległość (w ramach
            Sklepu), bez jednoczesnej fizycznej obecności stron, z wyłącznym
            wykorzystaniem jednego lub większej liczby środków porozumiewania
            się na odległość do chwili zawarcia umowy włącznie.
          </li>
          <li>Regulamin - niniejszy regulamin Sklepu.</li>
          <li>
            Zamówienie - oświadczenie woli Klienta składane za pomocą Formularza
            Zamówienia i zmierzające bezpośrednio do zawarcia Umowy Sprzedaży
            Produktu lub Produktów ze Sprzedawcą.
          </li>
          <li>
            Formularz zamówienia - interaktywny formularz dostępny w Sklepie
            umożliwiający złożenie Zamówienia, w szczególności poprzez dodanie
            Produktów do Koszyka oraz określenie warunków Umowy Sprzedaży, w tym
            sposobu dostawy i płatności.
          </li>
          <li>
            Koszyk – element oprogramowania Sklepu, w którym widoczne są wybrane
            przez Klienta Produkty do zakupu, a także istnieje możliwość
            ustalenia i modyfikacji danych Zamówienia, w szczególności ilości
            produktów.
          </li>
          <li>
            Produkt - dostępna w Sklepie rzecz ruchoma/usługa będąca przedmiotem
            Umowy Sprzedaży między Klientem a Sprzedawcą.
          </li>
          <li>
            Umowa Sprzedaży - umowa sprzedaży Produktu zawierana albo zawarta
            między Klientem a Sprzedawcą za pośrednictwem Sklepu internetowego.
            Przez Umowę Sprzedaży rozumie się też - stosowanie do cech Produktu
            - umowę o świadczenie usług i umowę o dzieło.
          </li>
        </ListOrdered>
        <Paragraph>III. Kontakt ze Sklepem</Paragraph>
        <ListOrdered type='1'>
          <li>Adres Sprzedawcy: …………..</li>
          <li>Adres e-mail Sprzedawcy: carpgrains@wp.pl</li>
          <li>Numer telefonu Sprzedawcy: 690 690 157</li>
          <li>Numer rachunku bankowego Sprzedawcy …………………………….</li>
          <li>
            Klient może porozumiewać się ze Sprzedawcą za pomocą adresów i
            numerów telefonów podanych w niniejszym paragrafie.
          </li>
          <li>
            Klient może porozumieć się telefonicznie ze Sprzedawcą w
            godzinach 9-18
          </li>
        </ListOrdered>
        <Paragraph>IV. Wymagania techniczne</Paragraph>
        <ListOrdered>
          <li>
            Do korzystania ze Sklepu, w tym przeglądania asortymentu Sklepu oraz
            składania zamówień na Produkty, niezbędne są:
            <br />
            a. urządzenie końcowe z dostępem do sieci Internet i przeglądarką
            internetową, <br />
            b. aktywne konto poczty elektronicznej (e-mail),
            <br />
            c. włączona obsługa plików cookies,
            <br />
          </li>
        </ListOrdered>
        <Paragraph>V. Informacje ogólne</Paragraph>
        <ListOrdered type='1'>
          <li>
            Sprzedawca w najszerszym dopuszczalnym przez prawo zakresie nie
            ponosi odpowiedzialności za zakłócenia w tym przerwy w
            funkcjonowaniu Sklepu spowodowane siłą wyższą, niedozwolonym
            działaniem osób trzecich lub niekompatybilnością Sklepu
            internetowego z infrastrukturą techniczną Klienta.
          </li>
          <li>
            Przeglądanie asortymentu Sklepu nie wymaga zakładania Konta.
            Składanie zamówień przez Klienta na Produkty znajdujące się w
            asortymencie Sklepu możliwe jest albo po założeniu Konta zgodnie z
            postanowieniami § 6 Regulaminu albo przez podanie niezbędnych danych
            osobowych i adresowych umożliwiających realizację Zamówienia bez
            zakładania Konta.
          </li>
          <li>
            Ceny podane w Sklepie są podane w polskich złotych i są cenami
            brutto (uwzględniają podatek VAT).
          </li>
          <li>
            Na końcową (ostateczną) kwotę do zapłaty przez Klienta składa się
            cena za Produkt oraz koszt dostawy (w tym opłaty za transport,
            dostarczenie i usługi pocztowe), o której Klient jest informowany na
            stronach Sklepu w trakcie składania Zamówienia, w tym także w chwili
            wyrażenia woli związania się Umową Sprzedaży.
          </li>
          <li>
            W przypadku Umowy obejmującej prenumeratę lub świadczenie usług na
            czas nieoznaczony końcową (ostateczną) ceną jest łączna cena
            obejmująca wszystkie płatności za okres rozliczeniowy.
          </li>
          <li>
            Gdy charakter przedmiotu Umowy nie pozwala, rozsądnie oceniając, na
            wcześniejsze obliczenie wysokości końcowej (ostatecznej) ceny,
            informacja o sposobie, w jaki cena będzie obliczana, a także o
            opłatach za transport, dostarczenie, usługi pocztowe oraz o innych
            kosztach, będzie podana w Sklepie w opisie Produktu.
          </li>
        </ListOrdered>
        <Paragraph>VI. Zakładanie Konta w Sklepie</Paragraph>
        <ListOrdered type='1'>
          <li>
            Aby założyć Konto w Sklepie, należy wypełnić Formularz rejestracji.
            Niezbędne jest podanie następujących danych imię, nazwisko, adres e-mail, adres zamieszkania
          </li>
          <li>Założenie Konta w Sklepie jest darmowe.</li>
          <li>
            Logowanie się na Konto odbywa się poprzez podanie loginu i hasła
            ustanowionych w Formularzu rejestracji.
          </li>
          <li>
            Klient ma możliwość w każdej chwili, bez podania przyczyny i bez
            ponoszenia z tego tytułu jakichkolwiek opłat usunąć Konto poprzez
            wysłanie stosownego żądania do Sprzedawcy, w szczególności za
            pośrednictwem poczty elektronicznej lub pisemnie na adresy podane w
            § 3.
          </li>
        </ListOrdered>
        <Paragraph>VII. Zasady składania Zamówienia</Paragraph>
        <Paragraph>W celu złożenia Zamówienia należy: </Paragraph>
        <ListOrdered type='1'>
          <li>zalogować się do Sklepu (opcjonalnie);</li>
          <li>
            wybrać Produkt będący przedmiotem Zamówienia, a następnie kliknąć
            przycisk „Do koszyka” (lub równoznaczny);
          </li>
          <li>
            zalogować się lub skorzystać z możliwości złożenia Zamówienia bez
            rejestracji;
          </li>
          <li>
            jeżeli wybrano możliwość złożenia Zamówienia bez rejestracji -
            wypełnić Formularz zamówienia poprzez wpisanie danych odbiorcy
            Zamówienia oraz adresu, na który ma nastąpić dostawa Produktu,
            wybrać rodzaj przesyłki (sposób dostarczenia Produktu), wpisać dane
            do faktury, jeśli są inne niż dane odbiorcy Zamówienia,
          </li>
          <li>
            kliknąć przycisk “Zamawiam i płacę”/kliknąć przycisk “Zamawiam i
            płacę” oraz potwierdzić zamówienie, klikając w link przesłany w
            wiadomości e-mail,
          </li>
          <li>
            wybrać jeden z dostępnych sposobów płatności i w zależności od
            sposobu płatności, opłacić zamówienie w określonym terminie, z
            zastrzeżeniem § 8 pkt 3.
          </li>
        </ListOrdered>
        <Paragraph>VIII. Oferowane metody dostawy oraz płatności</Paragraph>
        <ListOrdered>
          <li>
            Klient może skorzystać z następujących metod dostawy lub odbioru
            zamówionego Produktu: <br />
            a. Przesyłka pocztowa, przesyłka pocztowa pobraniowa,
            <br />
            b. Przesyłka kurierska, przesyłka kurierska pobraniowa,
            <br />
            c. Odbiór osobisty dostępny pod adresem: ……………….
          </li>
          <li>
            Klient może skorzystać z następujących metod płatności:
            <br />
            a. Płatność przy odbiorze
            <br />
            b. Płatność za pobraniem
            <br />
            c. Płatność przelewem na konto Sprzedawcy
            <br />
            d. Płatności elektroniczne
            <br />
            e. Płatność kartą płatniczą.
            <br />
          </li>
          <li>
            Szczegółowe informacje na temat metod dostawy oraz akceptowalnych
            metod płatności znajdują się za stronach Sklepu.
          </li>
        </ListOrdered>
        <Paragraph>IX. Wykonanie umowy sprzedaży</Paragraph>
        <ListOrdered type='1'>
          <li>
            Zawarcie Umowy Sprzedaży między Klientem a Sprzedawcą następuje po
            uprzednim złożeniu przez Klienta Zamówienia za pomocą Formularza
            zamówienia w Sklepie internetowym zgodnie z § 7 Regulaminu.
          </li>
          <li>
            Po złożeniu Zamówienia Sprzedawca niezwłocznie potwierdza jego
            otrzymanie oraz jednocześnie przyjmuje Zamówienie do realizacji.
            Potwierdzenie otrzymania Zamówienia i jego przyjęcie do realizacji
            następuje poprzez przesłanie przez Sprzedawcę Klientowi stosownej
            wiadomości e-mail na podany w trakcie składania Zamówienia adres
            poczty elektronicznej Klienta, która zawiera co najmniej
            oświadczenia Sprzedawcy o otrzymaniu Zamówienia i o jego przyjęciu
            do realizacji oraz potwierdzenie zawarcia Umowy Sprzedaży. Z chwilą
            otrzymania przez Klienta powyższej wiadomości e-mail zostaje zawarta
            Umowa Sprzedaży między Klientem a Sprzedawcą.
          </li>
          <li>
            W przypadku wyboru przez Klienta:
            <br /> a. płatności przelewem, płatności elektronicznych albo
            płatności kartą płatniczą, Klient obowiązany jest do dokonania
            płatności w terminie …. dni kalendarzowych od dnia zawarcia Umowy
            Sprzedaży - w przeciwnym razie zamówienie zostanie anulowane.
            <br /> b. płatności za pobraniem przy odbiorze przesyłki, Klient
            obowiązany jest do dokonania płatności przy odbiorze przesyłki.
            <br /> c. płatności gotówką przy odbiorze osobistym przesyłki,
            Klient obowiązany jest dokonać płatności przy odbiorze przesyłki w
            terminie …. dni od dnia otrzymania informacji o gotowości przesyłki
            do odbioru.
          </li>
          <li>
            Jeżeli Klient wybrał sposób dostawy inny niż odbiór osobisty,
            Produkt zostanie wysłany przez Sprzedawcę w terminie wskazanym w
            jego opisie (z zastrzeżeniem ustępu 5 niniejszego paragrafu), w
            sposób wybrany przez Klienta podczas składania Zamówienia.{" "}
          </li>
          <li>
            A W przypadku zamówienia Produktów o różnych terminach dostawy,
            terminem dostawy jest najdłuższy podany termin. B W przypadku
            zamówienia Produktów o różnych terminach dostawy, Klient ma
            możliwość żądania dostarczenia Produktów częściami lub też
            dostarczenia wszystkich Produktów po skompletowaniu całego
            zamówienia. Początek biegu terminu dostawy Produktu do Klienta liczy
            się w następujący sposób:
            <br /> a. W przypadku wyboru przez Klienta sposobu płatności
            przelewem, płatności elektroniczne lub kartą płatniczą - od dnia
            uznania rachunku bankowego Sprzedawcy.
            <br /> b. W przypadku wyboru przez Klienta sposobu płatności za
            pobraniem – od dnia zawarcia Umowy Sprzedaży,
          </li>
          <li>
            W przypadku wyboru przez Klienta odbioru osobistego Produktu,
            Produkt będzie gotowy do odbioru przez Klienta w terminie wskazanym
            w opisie Produktu. O gotowości Produktu do odbioru Klient zostanie
            dodatkowo poinformowany przez Sprzedawcę poprzez przesłanie
            stosownej wiadomości e-mail na podany w trakcie składania Zamówienia
            adres poczty elektronicznej Klienta.
          </li>
          <li>
            W przypadku zamówienia Produktów o różnych terminach gotowości do
            odbioru, terminem gotowości do odbioru jest najdłuższy podany
            termin.{" "}
          </li>
          <li>
            Początek biegu terminu gotowości Produktu do odbioru przez Klienta
            liczy się w następujący sposób:
            <br /> a. W przypadku wyboru przez Klienta sposobu płatności
            przelewem, płatności elektroniczne lub kartą płatniczą - od dnia
            uznania rachunku bankowego Sprzedawcy.
            <br /> b. W przypadku wyboru przez Klienta sposobu gotówką przy
            odbiorze osobistym – od dnia zawarcia Umowy Sprzedaży.
          </li>
          <li>
            Dostawa Produktu odbywa się na terenie Unii Europejskiej
          </li>
          <li>
            Dostawa Produktu do Klienta jest odpłatna, chyba że Umowa Sprzedaży
            stanowi inaczej. Koszty dostawy Produktu (w tym opłaty za transport,
            dostarczenie i usługi pocztowe) są wskazywane Klientowi na stronach
            Sklepu internetowego w zakładce „Koszty dostawy” oraz w trakcie
            składania Zamówienia, w tym także w chwili wyrażenia przez Klienta
            woli związania się Umową Sprzedaży.{" "}
          </li>
          <li>Odbiór osobisty Produktu przez Klienta jest bezpłatny. </li>
        </ListOrdered>
        <Paragraph>X. Prawo odstąpienia od umowy</Paragraph>
        <ListOrdered type='1'>
          <li>
            Konsument może w terminie 14 dni odstąpić od Umowy Sprzedaży bez
            podania jakiejkolwiek przyczyny.
          </li>
          <li>
            Bieg terminu określonego w ust. 1 rozpoczyna się od dostarczenia
            Produktu Konsumentowi lub wskazanej przez niego osobie innej niż
            przewoźnik.
          </li>
          <li>
            W przypadku Umowy, która obejmuje wiele Produktów, które są
            dostarczane osobno, partiami lub w częściach, termin wskazany w ust.
            1 biegnie od dostawy ostatniej rzeczy, partii lub części.
          </li>
          <li>
            W przypadku Umowy, która polega na regularnym dostarczaniu Produktów
            przez czas oznaczony (prenumerata), termin wskazany w ust. 1 biegnie
            od objęcia w posiadanie pierwszej z rzeczy.
          </li>
          <li>
            Konsument może odstąpić od Umowy, składając Sprzedawcy oświadczenie
            o odstąpieniu od Umowy. Do zachowania terminu odstąpienia od Umowy
            wystarczy wysłanie przez Konsumenta oświadczenia przed upływem tego
            terminu.
          </li>
          <li>
            Oświadczenie może być wysłane za pomocą tradycyjnej poczty, faxem
            bądź drogą elektroniczną poprzez przesłanie oświadczenia na adres
            e-mail Sprzedawcy lub przez złożenie oświadczenia na stronie
            internetowej Sprzedawcy - dane kontaktowe Sprzedawcy zostały
            określone w § 3. Oświadczenie można złożyć również na formularzu,
            którego wzór stanowi załącznik nr 1 do niniejszego Regulaminu oraz
            załącznik do ustawy z dnia 30 maja 2014 roku o prawach konsumenta,
            jednak nie jest to obowiązkowe.
          </li>
          <li>
            W przypadku przesłania oświadczenia przez Konsumenta drogą
            elektroniczną, Sprzedawca niezwłocznie prześle Konsumentowi na
            podany przez Konsumenta adres e-mail potwierdzenie otrzymania
            oświadczenia o odstąpieniu od Umowy.
          </li>
          <li>
            Skutki odstąpienia od Umowy:
            <br />
            a. W przypadku odstąpienia od Umowy zawartej na odległość Umowę
            uważa się za niezawartą.
            <br />
            b. W przypadku odstąpienia od Umowy Sprzedawca zwraca Konsumentowi
            niezwłocznie, nie później niż w terminie 14 dni od dnia otrzymania
            oświadczenia Konsumenta o odstąpieniu od Umowy, wszystkie dokonane
            przez niego płatności, w tym koszty dostarczenia rzeczy, z wyjątkiem
            dodatkowych kosztów wynikających z wybranego przez Konsumenta
            sposobu dostarczenia innego niż najtańszy zwykły sposób dostarczenia
            oferowany przez Sprzedawcę.
            <br />
            c. Zwrotu płatności Sprzedawca dokona przy użyciu takich samych
            metod płatności, jakie zostały przez Konsumenta użyte w pierwotnej
            transakcji, chyba że Konsument wyraźnie zgodził się na inne
            rozwiązanie, które nie będzie się wiązało dla niego z żadnymi
            kosztami.
            <br />
            d. Sprzedawca może wstrzymać się ze zwrotem płatności do czasu
            otrzymania Produktu z powrotem lub do czasu dostarczenia mu dowodu
            jego odesłania, w zależności od tego, które zdarzenie nastąpi
            wcześniej.
            <br />
            e. Konsument powinien odesłać Produkt na adres Sprzedawcy podany w
            niniejszym Regulaminie niezwłocznie, nie później niż 14 dni od dnia,
            w którym poinformował Sprzedawcę o odstąpieniu od Umowy. Termin
            zostanie zachowany, jeśli Konsument odeśle Produkt przed upływem
            terminu 14 dni.
            <br />
            f. Konsument ponosi bezpośrednie koszty zwrotu Produktu, także
            koszty zwrotu Produktu, jeśli ze względu na swój charakter Produkt
            ten nie mógł zostać w zwykłym trybie odesłany pocztą.
            <br />
            g. Konsument odpowiada tylko za zmniejszenie wartości Produktu
            wynikające z korzystania z niego w sposób inny niż było to konieczne
            do stwierdzenia charakteru, cech i funkcjonowania Produktu.
            <br />
          </li>
          <li>
            W przypadku gdy ze względu na charakter Produktu nie może on zostać
            odesłany w zwykłym trybie pocztą, informacja o tym, a także o
            kosztach zwrotu Produktu, będzie się znajdować w opisie Produktu w
            Sklepie.
          </li>
          <li>
            Prawo do odstąpienia od umowy zawartej na odległość nie przysługuje
            Konsumentowi w odniesieniu do Umowy:
            <br />
            a. w której przedmiotem świadczenia jest rzecz nieprefabrykowana,
            wyprodukowana według specyfikacji Konsumenta lub służąca
            zaspokojeniu jego zindywidualizowanych potrzeb,
            <br />
            b. w której przedmiotem świadczenia jest rzecz dostarczana w
            zapieczętowanym opakowaniu, której po otwarciu opakowania nie można
            zwrócić ze względu na ochronę zdrowia lub ze względów higienicznych,
            jeżeli opakowanie zostało otwarte po dostarczeniu,
            <br />
            c. w które przedmiotem świadczenia jest rzecz ulegająca szybkiemu
            zepsuciu lub mająca krótki termin przydatności do użycia,
            <br />
            d. o świadczenie usług, jeżeli Sprzedawca wykonał w pełni usługę za
            wyraźną zgodą Konsumenta, który został poinformowany przez
            rozpoczęciem świadczenia, że po spełnieniu świadczenia przez
            Sprzedawcę utraci prawo odstąpienia od Umowy,
            <br />
            e. w którym cena lub wynagrodzenie zależy od wahań na rynku
            finansowym, nad którym Sprzedawca nie sprawuje kontroli, i które
            mogą wystąpić przed upływem terminu do odstąpienia od Umowy,
            <br />
            f. w której przedmiotem świadczenia są rzeczy, które po
            dostarczeniu, ze względu na swój charakter, zostają nierozłącznie
            połączone z innymi rzeczami,
            <br />
            g. w której przedmiotem świadczenia są napoje alkoholowe, których
            cena została uzgodniona przy zawarciu umowy sprzedaży, a których
            dostarczenie może nastąpić dopiero po upływie 30 dni i których
            wartość zależy od wahań na rynku, nad którymi Sprzedawca nie ma
            kontroli,
            <br />
            h. w której przedmiotem świadczenia są nagrania dźwiękowe lub
            wizualne albo programy komputerowe dostarczane w zapieczętowanym
            opakowaniu, jeżeli opakowanie zostało otwarte po dostarczeniu,
            <br />
            i. o dostarczanie dzienników, periodyków lub czasopism, z wyjątkiem
            umowy o prenumeratę,
            <br />
            j. o dostarczenie treści cyfrowych, które nie są zapisane na nośniku
            materialnym, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną
            zgodą Konsumenta przed upływem terminu do odstąpienia od umowy i po
            poinformowaniu go przez Sprzedawcę o utracie prawa odstąpienia od
            Umowy,
            <br />
          </li>
        </ListOrdered>
        <Paragraph>XI. Reklamacja i gwarancja</Paragraph>
        <ListOrdered type='1'>
          <li> Umową Sprzedaży objęte są nowe Produkty.</li>
          <li>
            {" "}
            Sprzedawca jest obowiązany dostarczyć Klientowi rzecz wolną od wad.
          </li>
          <li>
            {" "}
            W przypadku wystąpienia wady zakupionego u Sprzedawcy towaru Klient
            ma prawo do reklamacji w oparciu o przepisy dotyczące rękojmi w
            kodeksie cywilnym.
          </li>
          <li>
            {" "}
            Reklamację należy zgłosić pisemnie lub drogą elektroniczną na podane
            w niniejszym Regulaminie adresy Sprzedawcy.{" "}
          </li>
          <li>
            {" "}
            Zaleca się, aby w reklamacji zawrzeć m.in. zwięzły opis wady,
            okoliczności (w tym datę) jej wystąpienia, dane Klienta składającego
            reklamację, oraz żądanie Klienta w związku z wadą towaru.{" "}
          </li>
          <li>
            {" "}
            Sprzedawca ustosunkuje się do żądania reklamacyjnego niezwłocznie,
            nie później niż w terminie 14 dni, a jeśli nie zrobi tego w tym
            terminie, uważa się, że żądanie Klienta uznał za uzasadnione.
          </li>
          <li>
            {" "}
            Towary odsyłane w ramach procedury reklamacyjnej należy wysyłać na
            adres podany w § 3 niniejszego Regulaminu.
          </li>
          <li>
            {" "}
            W przypadku, gdy na Produkt została udzielona gwarancja, informacja
            o niej, a także jej treść, będą zawarte przy opisie Produktu w
            Sklepie.{" "}
          </li>
        </ListOrdered>
        <Paragraph>
          XII. Pozasądowe sposoby rozpatrywania reklamacji i dochodzenia
          roszczeń
        </Paragraph>
        <ListOrdered type='1'>
          <li>
            Szczegółowe informacje dotyczące możliwości skorzystania przez
            Konsumenta z pozasądowych sposobów rozpatrywania reklamacji i
            dochodzenia roszczeń oraz zasady dostępu do tych procedur dostępne
            są w siedzibach oraz na stronach internetowych powiatowych
            (miejskich) rzeczników konsumentów, organizacji społecznych, do
            których zadań statutowych należy ochrona konsumentów, Wojewódzkich
            Inspektoratów Inspekcji Handlowej oraz pod następującymi adresami
            internetowymi Urzędu Ochrony Konkurencji i Konsumentów:
            http://www.uokik.gov.pl/spory_konsumenckie.php;
            http://www.uokik.gov.pl/sprawy_indywidualne.php oraz
            http://www.uokik.gov.pl/wazne_adresy.php.
          </li>
          <li>
            Konsument posiada następujące przykładowe możliwości skorzystania z
            pozasądowych sposobów rozpatrywania reklamacji i dochodzenia
            roszczeń:
            <br />
            a. Konsument uprawniony jest do zwrócenia się do stałego polubownego
            sądu konsumenckiego, o którym mowa w art. 37 ustawy z dnia 15
            grudnia 2000 r. o Inspekcji Handlowej (Dz.U. z 2014 r. poz. 148 z
            późn. zm.), z wnioskiem o rozstrzygnięcie sporu wynikłego z Umowy
            zawartej ze Sprzedawcą. <br />
            b. Konsument uprawniony jest do zwrócenia się do wojewódzkiego
            inspektora Inspekcji Handlowej, zgodnie z art. 36 ustawy z dnia 15
            grudnia 2000 r. o Inspekcji Handlowej (Dz.U. z 2014 r. poz. 148 z
            późn. zm.), z wnioskiem o wszczęcie postępowania mediacyjnego w
            sprawie polubownego zakończenia sporu między Konsumentem a
            Sprzedawcą. <br />
            c. Konsument może uzyskać bezpłatną pomoc w sprawie rozstrzygnięcia
            sporu między nim a Sprzedawcą, korzystając także z bezpłatnej pomocy
            powiatowego (miejskiego) rzecznika konsumentów lub organizacji
            społecznej, do której zadań statutowych należy ochrona konsumentów
            (m.in. Federacja Konsumentów, Stowarzyszenie Konsumentów Polskich).
            <br />
          </li>
        </ListOrdered>
        <Paragraph>XIII. Dane osobowe w Sklepie internetowym</Paragraph>
        <ListOrdered type='1'>
          <li>
            Administratorem danych osobowych Klientów zbieranych za
            pośrednictwem Sklepu internetowego jest Sprzedawca
          </li>
          <li>
            Dane osobowe Klientów zbierane przez administratora za pośrednictwem
            Sklepu internetowego zbierane są w celu realizacji Umowy Sprzedaży,
            a jeżeli Klient wyrazi na to zgodę - także w celu marketingowym.
          </li>
          <li>
            Odbiorcami danych osobowych Klientów Sklepu internetowego mogą być:{" "}
            <br />
            a. W przypadku Klienta, który korzysta w Sklepie internetowym ze
            sposobu dostawy przesyłką pocztową lub przesyłką kurierską,
            Administrator udostępnia zebrane dane osobowe Klienta wybranemu
            przewoźnikowi lub pośrednikowi realizującemu przesyłki na zlecenie
            Administratora. <br />
            b. W przypadku Klienta, który korzysta w Sklepie internetowym ze
            sposobu płatności elektronicznych lub kartą płatniczą Administrator
            udostępnia zebrane dane osobowe Klienta, wybranemu podmiotowi
            obsługującemu powyższe płatności w Sklepie internetowym. <br />
          </li>
          <li>
            Klient ma prawo dostępu do treści swoich danych oraz ich
            poprawiania.
          </li>
          <li>
            Podanie danych osobowych jest dobrowolne, aczkolwiek niepodanie
            wskazanych w Regulaminie danych osobowych niezbędnych do zawarcia
            Umowy Sprzedaży skutkuje brakiem możliwości zawarcia tejże umowy.
          </li>
        </ListOrdered>
        <Paragraph>XIV. Postanowienia końcowe</Paragraph>
        <ListOrdered>
          <li>
            Umowy zawierane poprzez Sklep internetowy zawierane są w języku
            polskim.
          </li>
          <li>
            Sprzedawca zastrzega sobie prawo do dokonywania zmian Regulaminu z
            ważnych przyczyn to jest: zmiany przepisów prawa, zmiany sposobów
            płatności i dostaw - w zakresie, w jakim te zmiany wpływają na
            realizację postanowień niniejszego Regulaminu. O każdej zmianie
            Sprzedawca poinformuje Klienta z co najmniej 7 dniowym
            wyprzedzeniem.
          </li>
          <li>
            W sprawach nieuregulowanych w niniejszym Regulaminie mają
            zastosowanie powszechnie obowiązujące przepisy prawa polskiego, w
            szczególności: Kodeksu cywilnego; ustawy o świadczeniu usług drogą
            elektroniczną; ustawy o prawach konsumenta, ustawy o ochronie danych
            osobowych.{" "}
          </li>
          <li>
            Klient ma prawo skorzystać z pozasądowych sposobów rozpatrywania
            reklamacji i dochodzenia roszczeń. W tym celu może złożyć skargę za
            pośrednictwem unijnej platformy internetowej ODR dostępnej pod
            adresem: http://ec.europa.eu/consumers/odr/.
          </li>
        </ListOrdered>
      </Container>
    </Layout>
  );
};
export default Rules;
