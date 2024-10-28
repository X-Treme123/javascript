function fibonacci(n) {
    const result = []; // Array untuk menyimpan deret Fibonacci

    // Basis kasus: untuk 0, tambahkan 0 ke array
    if (n >= 0) {
        result.push(0);
    }

    //Jika n lebih dari 1, maka tambahkan 1 ke array
    if(n >= 1) {
        result.push(1);
    }

    // perhitungan loop rekursif untuk mengisi array result fibonacci
    for (let i = 2; i <= n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    // Mengembalikan array
    return result
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
