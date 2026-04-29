function scrollToForm() {
  document.getElementById("gabung").scrollIntoView({
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("formGabung");

  if (!form) return; // biar gak error kalau belum ada

  form.addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let kampus = document.getElementById("kampus").value;
    let semester = document.getElementById("semester").value;
    let minat = document.getElementById("minat").value;

    if (!nama || !kampus || !semester || !minat) {
      alert("Harap isi semua data!");
      return;
    }

    let pesan = `Halo, saya ingin gabung PERMIKOMNAS VI%0A
Nama: ${nama}%0A
Kampus: ${kampus}%0A
Semester: ${semester}%0A
Minat: ${minat}`;

    window.open(`https://wa.me/62895366867128?text=${pesan}`, "_blank");
  });

});