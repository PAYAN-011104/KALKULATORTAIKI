const display = document.getElementById('display');

// Tambah karakter ke display
function appendValue(value) {
  display.value += value;
}

// Hapus semua isi display
function clearDisplay() {
  display.value = '';
}

// Hapus 1 karakter terakhir
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Hitung hasil akhir
function calculateResult() {
  try {
    // eval digunakan untuk contoh sederhana
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
