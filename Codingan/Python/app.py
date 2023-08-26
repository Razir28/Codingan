import time  # Untuk menghitung waktu


def testLoop(ax, bx):  # Fungsi bernama 'testLoop'

    start = time.time()  # Mencatat waktu awal

    for a in range(ax):
        print(bx)

    stop = time.time()  # Mencatat waktu akhir
    duration = (stop - start) * 1000  # Menghitung durasi dalam milidetik
    print("Waktu proses: ", duration, "ms")  # Menampilkan waktu proses


def main():  # Fungsi main (utama)

    pesanLoop = input("Masukkan pesan ke dalam loop: ")
    jmlhLoop = int(input("Masukkan jumlah loop: "))

    testLoop(jmlhLoop, pesanLoop)  # Memanggil fungsi 'testLoop'


if __name__ == "__main__":
    main()
