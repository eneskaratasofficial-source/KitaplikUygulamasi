// Kitapları Favorilere Ekleme Butonları
function KitapBilgi(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "8px", margin: "6px" }}>
      <h3>{props.baslik}</h3>
      <p>{props.yazar}</p>
      <p>{props.kategori}</p>
      <button
        onClick={function () {
          props.toggleFavori(props.id);
        }}
      >
        {props.favorideMi ? "Favoriden Çıkar ⛔" : "Favoriye Ekle✅"}
      </button>
    </div>
  );
} 
export default KitapBilgi