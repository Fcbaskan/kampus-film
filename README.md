# Ödev-2: Mini Kitaplık (React)

Bu proje, "Web Teknolojileri ve Programlama" dersi kapsamında React.js kullanılarak geliştirilmiş küçük bir web kitaplığı uygulamasıdır.

![Mini Kitaplık Arayüzü]

---

## 🚀 Vercel Linki


**https://web-proje-taupe.vercel.app/**

---

## 📋 Proje Özellikleri

* **Kitap Listeleme:** Önceden tanımlanmış bir kitap listesini gösterir.
* **Arama (Filtreleme):** Arama çubuğuna yazılan metne göre kitapları başlık veya yazara göre anlık olarak filtreler.
* **Kategoriye Göre Filtreleme:** Açılır menüden seçilen kategoriye (Web, CS, Tasarım, Tümü) göre kitapları filtreler.
* **Favorilere Ekleme/Çıkarma:** Kullanıcılar "Favori Ekle" butonu ile kitapları favori listesine alabilir ve "Favoride" butonu ile listeden çıkarabilir.
* **Favori Paneli:** Sağ taraftaki panelde favoriye eklenen kitaplar listelenir ve "Kaldır" butonu ile bu listeden de çıkarılabilir.
* **Hafıza (localStorage):** Uygulama kapatılıp açıldığında [cite: 506] kullanıcının:
    * En son girdiği **arama metni**
    * **Favori kitap listesi**
    tarayıcı hafızasından (`localStorage`) geri yüklenir.

---

## 🛠️ Kullanılan Teknolojiler ve Konseptler

* **React.js:** Kullanıcı arayüzü kütüphanesi.
* **Vite:** Hızlı proje başlatma ve geliştirme sunucusu.
* **JSX:** JavaScript ve HTML'i birleştiren söz dizimi.
* **Bileşen (Component) Mimarisi:**
    * `App` (Ana bileşen, state'lerin merkezi)
    * `AramaCubugu`
    * `KategoriFiltre`
    * `KitapListe`
    * `KitapKarti`
    * `FavoriPaneli`
* **State ve Props:** Bileşenler arası veri akışı.
* **Lifting State Up:** State'in en yakın ortak ata bileşene (App) taşınması.
* **Controlled Components (Kontrollü Bileşenler):** Form elemanlarının (input, select) değerlerinin React state'i tarafından kontrol edilmesi.
* **useEffect Hook:** Tarayıcı hafızasına (`localStorage`) veri yazma gibi yan etkileri (side-effects) yönetmek için kullanıldı.
* **Props Destructuring:** `KitapKarti` bileşeninde prop'ların daha okunaklı alınması sağlandı.

---

## 📦 Proje Kurulumu ve Çalıştırma

Proje dosyalarını yerel makinenizde çalıştırmak için:

1.  **Projeyi klonlayın (veya ZIP olarak indirin):**
    ```bash
    git clone [PROJENIZIN-GITHUB-LINKI]
    ```

2.  **Proje klasörüne gidin:**
    ```bash
    cd mini-kitaplik
    ```

3.  **Gerekli paketleri yükleyin:**
    ```bash
    npm install
    ```

4.  **Projeyi geliştirme modunda başlatın:**
    ```bash
    npm run dev
    ```

5.  Tarayıcınızda `http://localhost:5173` (veya terminalde gösterilen) adresi açın.