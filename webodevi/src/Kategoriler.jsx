// Kategori seçme 
function Kategoriler(props) {
  return (
    <select
      value={props.kategori}
      onChange={function (e) {
        props.setKategori(e.target.value);
      }}
      style={{ display: "block", marginBottom: "10px" }}
    >
      <option value="Tümü">Tümü</option>
      <option value="Klasik">Klasik</option>
      <option value="Bilim Kurgu">Bilim Kurgu</option>
      <option value="Eğitim">Eğitim</option>
    </select>
  );
}
export default Kategoriler