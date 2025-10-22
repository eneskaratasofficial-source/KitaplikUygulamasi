// Arama bileşeni
function Arama(props) {
  return (
    <input
      type="text"
      placeholder="Kitap adı arayın..."
      value={props.aramaMetni}
      onChange={function (e) {
        // Arama metni değiştiğinde hem state'i hem de Local Storage'ı günceller
        props.setAramaMetniVeKaydet(e.target.value);
      }}
      style={{ display: "block", marginBottom: "10px" }}
    />
  );
} 
export default Arama