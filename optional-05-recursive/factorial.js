function factorial(n) {
    // Basis rekursi: jika n adalah 0 atau 1 maka return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Jika n bukan 0 dan 1, maka return n * factorial(n - 1)
    return n * factorial(n - 1);
}

// Jangan hapus kode di bawah ini!
export default factorial;
