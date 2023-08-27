#include <iostream>
#include <string>
#include <random>
// Biasakan tanpa menggunakan 'using namespace std'
int main()
{
  bool aktif = true; // Untuk sistem looping bekerja

  std::cout << "Sistem Random Number Generator" << std::endl;

  // Memulai sistem looping
  while (aktif)
  {
    int ax;
    std::cout << "Masukkan jumlah loop: ";
    std::cin >> ax;

    int jmlh_call = 1;
    for (int a = 0; a < ax; a++)
    {
      // Membuat generator RNG
      std::random_device rd;
      std::mt19937 generator(rd()); // Menggunakan mersenner twister sbg generator

      // Set rentang angka
      int min_value = 1;
      int max_value = 100;

      // Mendefinisikan distribusi angka acak
      std::uniform_int_distribution<int> distribusi(min_value, max_value);

      // Menghasilkan angka acak
      int randm_num = distribusi(generator);

      std::cout << "[" << jmlh_call++ << "]"
                << " Angka acak: " << randm_num << std::endl;
    }

    // Untuk mengecek apakah user ingin mengulang program atau tidak
    char prompt;
    std::cout << "Ulang pengacakan? (y/n) ";
    std::cin >> prompt;
    if (prompt == 'N' || prompt == 'n')
    {
      break; // Memberhentikan loop
    }
  }
  std::cout << "Program berhenti" << std::endl;
  return 0;
}