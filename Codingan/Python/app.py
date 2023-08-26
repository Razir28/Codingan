import time

def looping(ax, bx):
    start = time.time()

    for a in range(ax):
      print(bx)

    stop = time.time()
    duration = (stop - start) * 1000
    print("Waktu yang dibutuhkan: ", duration, "ms")

def main():
    pesan_loop = input("Masukkan pesan ke dalam loop: ")
    jmlh_loop = int(input("Masukkan jumlah loop: "))

    looping(jmlh_loop, pesan_loop)

if __name__ == "__main__":
    main()