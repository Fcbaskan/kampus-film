# 🍿 Kampüs Film Kulübü

Süleyman Demirel Üniversitesi Film Kulübü için TVMaze API'sini kullanarak  dizileri aramaya, filtrelemeye ve bir "Gösterim Listesi" oluşturmaya olanak tanıyan web tabanlı bir React uygulamasıdır.

Bu proje, Web Teknolojileri ve Programlama dersi ödevi kapsamında geliştirilmiştir.

## 🚀 Vercel Demo

**Projenin canlı demosunu görmek için buraya tıklayın:**

[https://kendi-vercel-linkinizi-buraya-yapistirin.vercel.app](https://kendi-vercel-linkinizi-buraya-yapistirin.vercel.app)


---

## ✨ Temel Özellikler

Proje, ödev senaryosunda belirtilen tüm ana işlevleri içermektedir:

* **Dizi Arama:** TVMaze API'sini kullanarak dinamik arama yapma.
* **Filtreleme:** Arama sonuçlarını Türe, Dile ve Minimum Puana göre filtreleme.
* **Gösterim Listesi (Watchlist):** `useReducer` ile yönetilen, seçilen dizilerin eklendiği/çıkarıldığı bir "Gösterime Girecekler" paneli.
* **Detay Sayfası:** Her dizi için dizi bilgileri ve bölüm listesinin ayrı bir API çağrısıylaçekildiği dinamik `/show/:id` sayfası.
* **Sayfalama (Pagination):** Uzun sonuç listelerini (her sayfada 6 dizi [cite: 38][cite_start]) gezinmek için "İlk, Son, İleri, Geri" butonları.
* **Dinamik Arayüz:** Veri yüklenirken (`isLoading`), hata oluştuğunda (`isError`) veya sonuç bulunamadığında (`Boş sonuç`) kullanıcıya bilgi   veren koşullu render (Conditional Rendering) yapısı.

---

## 🛠️ Kullanılan Teknolojiler ve Kavramlar

Bu proje, modern React özelliklerini kullanarak geliştirilmiştir:

* **React:** Kullanıcı arayüzü kütüphanesi.
* **Axios:** TVMaze API'sine asenkron HTTP istekleri göndermek için[cite: 8].
* **React Router DOM:** Ana sayfa (`Home`) ve `ShowDetail` sayfası arasındaki geçişleri (routing) yönetmek için.
* **React Hooks:**
    * `useEffect`: Bileşen yüklendiğinde veya arama sorgusu değiştiğinde API'den veri çekmek (side effect) için[cite: 9].
    * `useReducer`: Gösterim listesi, filtreler, sayfalama ve API durumları (`FETCH_INIT`, `FETCH_SUCCESS` vb.) dahil olmak üzere uygulamanın tüm merkezi state'ini yönetmek için.
    * `useState`: (Detay sayfasının kendi yerel durumu için kullanıldı).
* **Bileşen Mimarisi (Composition):** Proje, ödevde istendiği gibi küçük ve yeniden kullanılabilir bileşenlere (`SearchBox`, `TVList`, `TVCard`, `Filters` vb.) ayrılmıştır.

---

## 📡 Kullanılan API

Tüm veriler, halka açık **TVMaze Public REST API**  kullanılarak çekilmiştir.

* **Arama:** `https://api.tvmaze.com/search/shows?q=<query>`
* **Detay:** `https://api.tvmaze.com/shows/:id` 
* **Bölümler:** `https://api.tvmaze.com/shows/:id/episodes`

---

## 🖥️ Yerel Geliştirme Ortamı Kurulumu

Projeyi kendi bilgisayarınızda çalıştırmak için:

1.  Bu repoyu klonlayın:
    ```bash
    git clone [REPO_URL]
    ```
2.  Proje dizinine gidin:
    ```bash
    cd kampus-film-kulubu
    ```
3.  Gerekli NPM paketlerini yükleyin:
    ```bash
    npm install
    ```
4.  Geliştirme sunucusunu başlatın:
    ```bash
    npm run dev
    ```

---

## 🧑‍💻 Geliştirici

* **FURKAN ÇAĞRI BAŞKAN**