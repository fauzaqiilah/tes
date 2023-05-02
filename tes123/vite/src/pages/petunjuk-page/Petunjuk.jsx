import React from "react";
import '../petunjuk-page/petunjuk.css';

const Petunjuk = () => {
  return (
    <>
    <div className="petunjuk-konten">
      <h1>PETUNJUK PENGISIAN FORM ASPIRASI</h1>
      <br/><br/>
</div>

      <div className="isi-petunjuk">
      <ol>
        <li>Silahkan akses website bemfiktiug.com/fiberoptik</li>
        <li>Pada menu navbar silahkan pilih “form”</li>
        <li>Setelah itu akan muncul halaman form pengaduan aspirasi</li>
        <li>Silahkan isikan data pada form yang diminta sesuai dengan data diri anda yang benar</li>
        <li>Cek kembali kelengkapan dan kebenaran data yang anda isikan</li>
        <li>Jika sudah yakin, klik submit</li>
        <li>Aspirasi anda berhasil di terima</li>
      </ol>
      </div>


      </>
  );
};

export default Petunjuk;
