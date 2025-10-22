import React, { useState, useEffect } from "react";
import Arama from "./Arama";
import FavoriEkle from "./favoriEkle";
import KitapBilgi from "./kitapbilgi";
import KitapListesi from "./kitapListesi";
import Kategoriler from "./kategoriler";

function App() {
  var kitaplar = [
    { id: 1, baslik: "Java Öğreniyorum", yazar: "Enes", kategori: "Klasik" },
    { id: 2, baslik: "CSS Dünyası", yazar: "Enes (2321032069)", kategori: "Bilim Kurgu" },
    { id: 3, baslik: "Hello World", yazar: "Elon MUSK", kategori: "Bilim Kurgu" },
    { id: 4, baslik: "Yapay Zeka Yardımıyla Site Tasarlama", yazar: "Enes KARATAŞ ve ChatGPT", kategori: "Fantastik" },
  ];

  var [aramaMetni, setAramaMetni] = useState("");
  var [kategori, setKategori] = useState("Tümü");
  var [favoriler, setFavoriler] = useState([]);

  // GÜVENLİ VERİ YÜKLEME (Sadece bir useEffect kaldı)
  useEffect(function () {
    const kayitliArama = localStorage.getItem("aramaMetni");
    const kayitliFavoriler = localStorage.getItem("favoriler");

    if (kayitliArama) {
      setAramaMetni(kayitliArama);
    }

    if (kayitliFavoriler) { // bu kısmı yapay zekadan aldım cunku sayfa yenılendıgınde sılınıyordu kayıtlar
      try {
        const parsedFavorites = JSON.parse(kayitliFavoriler);
        if (Array.isArray(parsedFavorites)) {
          setFavoriler(parsedFavorites);
        }
      } catch (e) {
        console.error("Favoriler yüklenirken JSON parse hatası:", e);
      }
    }
  }, []);

  // Arama metnini günceller ve hemen kaydeder
  function setAramaMetniVeKaydet(metin) {
    setAramaMetni(metin);
    localStorage.setItem("aramaMetni", metin);
  }

  // Favori ekle/çıkar 
  function toggleFavori(id) {
    let yeniFavoriler;
    
    if (favoriler.includes(id)) {
      yeniFavoriler = favoriler.filter(function (f) { return f !== id; });
    } else {
      yeniFavoriler = favoriler.concat(id);
    }

   
    setFavoriler(yeniFavoriler);
    
    // 2. Local Storage'a ANINDA YAZMA ZORLAMASI: bu kısımda da yapay zeka kullanıldı
    localStorage.setItem("favoriler", JSON.stringify(yeniFavoriler));
  }

  // Filtreleme yapma
  var filtreliKitaplar = kitaplar.filter(function (k) {
    var baslikUygun = k.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    var kategoriUygun = kategori === "Tümü" || k.kategori === kategori;
    return baslikUygun && kategoriUygun;
  });

  // Görünüm
  return (
    <div style={{ padding: "20px" }}>
      <h2> ☺️ KİTAPLIK 📚</h2>
      <Arama 
        aramaMetni={aramaMetni} 
        setAramaMetniVeKaydet={setAramaMetniVeKaydet} // Yeni fonksiyonu gönderiyoruz
      />
      <Kategoriler kategori={kategori} setKategori={setKategori} />
      <FavoriEkle kitaplar={kitaplar} favoriler={favoriler} />
      <KitapListesi
        kitaplar={filtreliKitaplar}
        favoriler={favoriler}
        toggleFavori={toggleFavori}
      />
    </div>
  );
}

export default App;