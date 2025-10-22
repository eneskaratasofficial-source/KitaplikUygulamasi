// Favoriler paneli
function FavoriEkle(props) {
  var favoriKitaplar = props.kitaplar.filter(function (k) {
    return props.favoriler.includes(k.id);
  });

  return (
    <div style={{ border: "1px solid gray", padding: "8px", margin: "6px" }}>
      <h4>Favoriler ({favoriKitaplar.length})</h4>
      {favoriKitaplar.length === 0 ? (
        <p>Henüz favori kitabını seçmedin.</p>
      ) : (
        <ul>
          {favoriKitaplar.map(function (k) {
            return <li key={k.id}>{k.baslik}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
export default FavoriEkle