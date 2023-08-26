#include <iostream>
#include <string>
#include <chrono> // Untuk menghitung waktu
using namespace std;
using namespace chrono;
void testLooping(int ax, string bx) // Fungsi bernama 'testLoop'
{
  auto start = high_resolution_clock::now(); // Mencatat waktu awal

  for (int a = 0; a < ax; a++)
  {
    cout << bx << endl;
  }

  auto stop = high_resolution_clock::now();                     // Mencatat waktu akhir
  auto duration = duration_cast<milliseconds>(stop - start);    // Menghitung durasi dalam milidetik
  cout << "Waktu proses: " << duration.count() << "ms" << endl; // Menampilkan waktu proses
}
int main()
{
  int jmlhLoop;
  string pesanLoop;

  cout << "Masukkan pesan ke dalam loop: ";
  getline(cin, pesanLoop);

  cout << "Masukkan jumlah loop: ";
  cin >> jmlhLoop;

  testLooping(jmlhLoop, pesanLoop); // Memanggil fungsi 'testLoop'

  return 0;
}