# Laravel PHP Developer Mini Project Test

Deskripsi singkat tentang proyek ini.

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal proyek Laravel ini:

1.  **Clone Repositori**

    Gunakan perintah `git` untuk meng-clone repositori:

    ```bash
    git clone https://github.com/username/maspos.git
    cd maspos
    ```

2.  **Instal Dependensi**

    Setelah berada di dalam direktori proyek, jalankan perintah berikut untuk menginstal dependensi menggunakan Composer:

    ```bash
    composer install
    ```

    ```bash
    npm install
    ```

    ```bash
    npm run dev
    ```

    ```bash
    npm run build
    ```

3.  **Buat File `.env`**

    Salin file `.env.example` menjadi `.env`:

    ```bash
    cp .env.example .env
    ```

4.  **Konfigurasi Database**

    Buka file `.env` dan sesuaikan konfigurasi database sesuai dengan pengaturan Anda:

    ```plaintext
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=nama_database
    DB_USERNAME=username
    DB_PASSWORD=password
    ```

5.  **Generate Kunci Aplikasi**

    Jalankan perintah berikut untuk menghasilkan kunci aplikasi:

    ```bash
    php artisan key:generate
    ```

6.  **Migrasi Database**

        Jika Anda memiliki migrasi, jalankan perintah berikut untuk memindahkan tabel ke database:

        ```bash
        php artisan migrate
        ```
        ```bash
         php artisan db:seed --class=DatabaseSeeder
        ```

    atau
    import file sql yang ada di folder public/database

## Menjalankan Aplikasi

Setelah semua langkah di atas selesai, Anda bisa menjalankan server lokal menggunakan Artisan:

```bash
php artisan serve
```

Aplikasi Anda akan dapat diakses di `http://localhost:8000`.

## Preview

dapat mengunjungi [maspos](http://maspos.junxwebdev.my.id/) atau [junx](https://maspos.junxwebdev.my.id/)

-- email:junx@example.com
-- password:12345678
