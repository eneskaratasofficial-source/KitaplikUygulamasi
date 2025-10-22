// Kitap listesi
import KitapBilgi from "./KitapBilgi";
function KitapListesi(props) {
  return (
    <div>
      {props.kitaplar.map(function (k) {
        return (
          <KitapBilgi
            key={k.id}
            id={k.id}
            baslik={k.baslik}
            yazar={k.yazar}
            kategori={k.kategori}
            favorideMi={props.favoriler.includes(k.id)}
            toggleFavori={props.toggleFavori}
          />
        );
      })}
    </div>
  );
}
export default KitapListesi
