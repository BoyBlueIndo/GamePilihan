function makeChoice(choice) {
  const imageElement = document.getElementById('images');
  const storyElement = document.getElementById('story');
  const choicesElement = document.getElementById('choices');
  const endingElement = document.getElementById('ending');

  if (choice === 'jalan') {
    imageElement.src = 'Bagian2.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Ketika kamu sedang berjalan-jalan ke arah yang kamu sendiri tidak ketahui, kamu menemukan sebuah papan petunjuk arah. Tidak banyak yang informasi yang diberikan, hanya ada simbol silang dan simbol tambah. Kamu mau kemana?';
    choicesElement.innerHTML = `
            <button class="button" onclick="makeChoice('tambah')">Pergi ke simbol tambah</button>
            <button class="button" onclick="makeChoice('silang')">Pergi ke simbol silang</button>
        `;

    // Pilihan silang.
  } else if (choice === 'silang') {
    imageElement.src = 'BagianSilang-1.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Kamu memutuskan untuk pergi ke arah simbol silang, berharap kalau itu bukan tempat atau area yang berbahaya. Beberapa menit kemudian, kamu menemukan sebuah danau yang cukup besar. Hal itu membuatmu merasa kepo. Apakah kamu ingin mengecek airnya atau tidak?';
    choicesElement.innerHTML = `
            <button class="button" onclick="makeChoice('jalan')">Kembali ke petunjuk arah</button>
            <button class="button" onclick="makeChoice('cek')">Cek airnya</button>
        `;
    // silang-cek.
  } else if (choice === 'cek') {
    imageElement.src = 'BagianSilang-2.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Kamu memutuskan untuk mengecek airnya. Mungkin bisa digunakan untuk membersihkan dirimu. Namun...';
    choicesElement.innerHTML = `
            <button class="button" onclick="makeChoice('cek-depan')">Lihat kedepanmu..</button>
            <button class="button" onclick="makeChoice('cek-depan')">Lihat kedepanmu..</button>
        `;
    // silang-cek-cek_depan.
  } else if (choice === 'cek-depan') {
    imageElement.src = 'EndingBuaya.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Kamu melihat sekilas sebuah buaya yang sudah berhasil menyerangmu. Kamu meninggal dalam keadaan tergigit buaya.';
    choicesElement.classList.add('hidden');
    endingElement.textContent = 'Ending: Simbol Silang bukan Harta Karun.';
    endingElement.classList.remove('hidden');
    // Ending 1.

    //Pilihan Tambah.
  } else if (choice === 'tambah') {
    imageElement.src = 'Bagian3.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Kamu memutuskan untuk pergi ke arah simbol tambah, berharap lebih aman dari simbol silang tadi. Ketika kamu berjalan-jalan, terlihat seperti jejak kaki seseorang yang mengarah ke hutan. Apakah kamu ingin mengikutinya?';
    choicesElement.innerHTML = `
            <button class="button" onclick="makeChoice('ikuti')">Coba ikuti</button>
            <button class="button" onclick="makeChoice('biarkan')">Tinggalkan saja</button>
        `;
    //Ikuti.
  } else if (choice === 'ikuti') {
    imageElement.src = 'BagianJejak-1.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Ada jejak kaki, berarti ada orang yang kemungkinan bisa membantumu mencari jalan ke rumahmu. Kamu mencoba untuk mengikuti jejaknya. Namun selama perjalanan, kamu menemukan jejak-jejak yang lainnya. Sepertinya kau harus lebih fokus memilih jejak kaki yang benar apabila ingin terhindar dari.. masalah..';
    choicesElement.innerHTML = `
            <button class="button" onclick="makeChoice('kiri1')">Kiri</button>
            <button class="button" onclick="makeChoice('kanan1')">Kanan</button>
        `;
    //Ikuti-kiri1
  } else if (choice === 'kiri1') {
    imageElement.src = 'BagianJejakMerah-1.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Kamu mengikuti jejak bewarna merah, agak berbeda dari jejak sebelumnya.';
    choicesElement.innerHTML = `
            <button class="button" onclick="makeChoice('masihkiri')">lanjutkan</button>
            <button class="button" onclick="makeChoice('masihkiri')">lanjutkan</button>
        `;
    //ikuti-kiri-lanjutan
  } else if (choice === 'masihkiri') {
    imageElement.src = 'BagianJejakMerah-2.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Tiba-tiba, selama kamu berjalan mengikuti jejak tersebut, terlihat sesosok seperti manusia, yang sepertinya sedang menggiring..bangkai manusi--';
    choicesElement.innerHTML = `
            <button class="button" onclick="makeChoice('tusuk')">LARI!</button>
            <button class="button" onclick="makeChoice('tusuk')">LARI!!</button>
        `;
    //ikuti-kiri-lanjutkan-LARI!/Dekati
  } else if (choice === 'tusuk') {
    imageElement.src = 'EndingJejakMerah.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Kamu tertusuk selama kamu masih memikirkan hal yang sedang terjadi.';
    choicesElement.classList.add('hidden');
    endingElement.textContent = 'Ending: Jejak Merah.';
    endingElement.classList.remove('hidden');
  }
  //Ending 2.

  //Ikuti-kanan1
  else if (choice === 'kanan1') {
    imageElement.src = 'BagianJejakCoklat-1.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Kamu masih merasa ragu tentang mengikuti jejak ini..';
    choicesElement.innerHTML = `
            <button class="button" onclick="makeChoice('masihkanan')">Lanjutkan</button>
            <button class="button" onclick="makeChoice('masihkanan')">Lanjutkan</button>
        `;
  } else if (choice === 'masihkanan') {
    imageElement.src = 'BagianJejakCoklat-2.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Kamu melihat seseorang sedang memegang senjata. Akhirnya ada orang selama kau berjalan-jalan. Tetaapi sepertinya dia tidak memperhatikan kamu. Apa yang harus kamu';
    choicesElement.innerHTML = `
            <button class="button" onclick="makeChoice('tembak')">Memanggilnya</button>
            <button class="button" onclick="makeChoice('tembak')">Mendekatinya</button>
        `;
  } else if (choice === 'tembak') {
    imageElement.src = 'EndingTertembak.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Hal itu membuat dia kaget dan tidak sengaja menembak senjatanya ke arah mu.';
    choicesElement.classList.add('hidden');
    endingElement.textContent = 'Ending: Coklat dan Merah.';
    endingElement.classList.remove('hidden');
  }
  //Ending 3.

  else if (choice === 'biarkan') {
    imageElement.src = 'BagianLurus-1.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Kamu tidak ingin mengikuti jejak kaki yang mencurigakan, jadi kamu memutuskan untuk tetap berjalan lurus. Beberapa menit kemudian, kamu menemukan sebuah rumah tanpa jendela. Sepertinya cukup untuk kamu beristirahat sejenak. Tapi apakah kamu yakin ingin memasuki rumah tersebut?';
    choicesElement.innerHTML = `
            <button class="button" onclick="makeChoice('masukrumah')">Masuk</button>
            <button class="button" onclick="makeChoice('tidakrumah')">Tidak Masuk Rumah</button>
        `;
  // masukrumah    
  } else if (choice === 'masukrumah') {
    imageElement.src = 'EndingRumah.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Lebih baik mendapatkan tempat tinggal daripada diluar pikirmu. Sehingga kamu membuka pintu rumah tersebut dan memasukinya. Terdapat kasur dan obor di rumah tersebut. Kamu akan tinggal disitu selama beberapa saat.';
      choicesElement.classList.add('hidden');
      endingElement.textContent = 'Ending: Rumah Ditinggal Siapa?';
      endingElement.classList.remove('hidden');
  // tidakrumah
  } else if (choice === 'tidakrumah') {
    imageElement.src = 'Bagian1.png';
    imageElement.classList.remove('hidden');
    storyElement.textContent =
      'Daripada di dalam ada jebakan atau orang aneh di dalamnya, lebih baik mencari tempat tinggal lain diluar. Namun kamu seperti diintai oleh sesuatu..';
      choicesElement.classList.add('hidden');
      endingElement.textContent = 'Ending: Mimpi Buruk yang Tidak Akan Selesai.';
      endingElement.classList.remove('hidden');
  }
}
