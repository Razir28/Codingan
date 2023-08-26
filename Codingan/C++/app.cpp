#include <iostream>
#include <string>
#include <chrono> //Untuk menghitung waktu
using namespace std;
using namespace chrono;
void looping(int ax, string bx)
{
  auto start = high_resolution_clock::now(); //Mencatat waktu awal
  
  for (int a = 0; a < ax; a++)
  {
    cout<<bx<<endl;
  }
  
  auto stop = high_resolution_clock::now(); //Mencatat waktu akhir
  auto duration = duration_cast<milliseconds>(stop - start); //Menghitung durasi dalam milidetik
  cout<<"Waktu yang dibutuhkan: "<<duration.count()<<" ms"<<endl;
}
int main()
{
  int jmlh_loop;
  string pesan_loop;

  cout<<"Masukkan pesan ke dalam loop: ";
  getline(cin, pesan_loop);

  cout<<"Masukkan jumlah loop: ";
  cin>>jmlh_loop;

  looping(jmlh_loop, pesan_loop);
  
  return 0;
}