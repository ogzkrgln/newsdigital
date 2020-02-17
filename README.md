# README #
Kullanılan Teknolojiler: React Native, React Navigation 5.x, Redux, style component
Aşağıdaki adımları takip ederek projeyi başlatabilirsiniz.

### Projeyi klonlama ###

Projeyi yerelinize klonlayabilir yada sağ üst bölümden indirebilirsiniz.

Klonlamak için;
```bash
git clone https://karaoglan-oguz@bitbucket.org/karaoglan-oguz/newsdigital.git
```


### İndirmeler ###
Projenin bulunduğu dizine gidip aşağıdaki adımları takip edebilirsiniz.

* İlk olarak projenin bağımlılıklarını yüklemeniz gerekmektedir.
```bash
npm install
```
* Daha önce yüklemediyseniz EXPO CLI'ı global olarak yüklemeniz gerekmektedir.
```bash
npm install -g expo-cli
```
* Projeyi android cihazınızda görmek için Google PLay Store da bulunan Expo isimli uygulamayı indirmelisiniz.
* Son olarak projenin dizininde aşağıdaki komutu ile projeyi başlatabilirsiniz.
```bash
expo start
```

## Test Aşaması
Adımları sorunsuz bir şekilde takip ettiğinizde komut satırınızda çıkan QR kodu uygulamaya taratıp uygulamayı android cihazınızda görebilirsiniz ve test edebilirsiniz.

Komut satırında QR kodu göremiyorsanız http://localhost:19002/ adresinden metro bundler'a girip oradaki QR kod ile uygulamayı cihazda görebilirsiniz.

## Uygulama hakkında

Uygulama iki ekrandan oluşmaktadır. İlk ekran haberlerin listelendiği "Home" ekranıdır. Diğer ekran ise "Home" ekranında bulunan haberlere tıklayarak gidebileceğiniz "Detail" ekranıdır.

"Home" ekranında bulunan Search bar'dan haber araması yapabilirsiniz.

## Kod Özet
* Uygulama sadece görseli olan haberleri görüntüler. Aşağıda bulunan endpointten `urlToImage:null `olanları görüntülemediğini görebilirsiniz.

* [Burada ](https://newsapi.org/) yer alan "All articles about Bitcoin from the last month, sorted by recent first" isimli API verilerini görüntüler.

 * Kullandığım API'da `id:null `olduğu için Detail ekranındaki verileri `index`lerine göre görüntüledim.

* #### Navigation : Uygulamayı geliştirmeye başladığım sıralarda React Navigation 5.x yayınlandığı için uygulamayı ona göre geliştirdim. Daha doğrusu React Navigation 4.x ile başladım fakat 5.x'in çok daha kullanışlı olduğunu görünce ona yöneldim. ^^
* Uygulamanın style'larını style componentinde bulunan `base.js`'den değiştirebilirsiniz. Daha kullanışlı olacağını düşündüğüm için css özelliklerini genel tanımlamalar olarak yaptım. (`FONT_SIZE_LARGE` vs. )
