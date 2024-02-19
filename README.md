# Nöbetçi Eczane Sitesi

Bu proje, Bursa'daki nöbetçi eczaneleri listeleyen ve kullanıcıya en yakın eczaneyi bulma imkanı sunan bir web uygulamasını içerir.
## Geliştirenler

- Nefise Tanrıkulu  
- Şiyar Hüseyin BALCI 
## Amaç

Bu projenin temel amacı, kullanıcılara Bursa'da bulunan nöbetçi eczanelerin bilgilerini kolayca erişebilmelerini sağlamaktır. Ayrıca, kullanıcının konumunu algılayarak en yakın eczaneyi bulmasına yardımcı olur.

## Özellikler

- **Nöbetçi Eczane Listesi:** Bursa'da bulunan nöbetçi eczanelerin detaylı bilgilerini listeleyebilirsiniz.
- **En Yakın Eczane Bulma:** Kullanıcının konumunu algılayarak en yakın eczaneyi bulma özelliği.
- **Haritada Göster ve Yol Tarifi:** Her eczane için haritada gösterme ve yol tarifi alma imkanı.

## Kullanım

Proje dosyalarını bilgisayarınıza indirin ve terminal veya komut istemcisinde projenin bulunduğu dizine giderek aşağıdaki adımları takip edin:

1. Projeyi yüklemek için: `npm install`
2. Projeyi başlatmak için: `npm start`


## CORS Hatası ve Çözümü

Proje geliştirilirken, tarayıcı güvenlik politikaları nedeniyle farklı alanlardan (origin) veri çekme işlemlerinde CORS (Cross-Origin Resource Sharing) hatası alabilirsiniz. Bu durum, tarayıcıların güvenlik önlemleri gereği, bir kaynağın başka bir orijinden yüklenmesini önlemek amacıyla ortaya çıkar.

Eğer proje geliştirme aşamasındaysanız veya geçici bir çözüm arıyorsanız, tarayıcılar için CORS eklentileri kullanabilirsiniz. Örneğin, [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino) eklentisini tarayıcınıza ekleyerek bu hatayı geçici olarak aşabilirsiniz.

Lütfen unutmayın ki, bu sadece geliştirme aşamasında geçici bir çözümdür. Gerçek bir üretim ortamında CORS hatası yaşamamak için, sunucu tarafında gerekli CORS başlıklarının düzenlenmesi gerekmektedir.

## İletişim ve Yardım

Herhangi bir sorunuz veya yardıma ihtiyacınız varsa, aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz:

- Proje Geliştiricileri: [Nefise Tanrıkulu](mailto:nefisetanrikulu@gmail.com), [Şiyar Hüseyin BALCI](mailto:teknokoz.com@gmail.com)

Not: CORS hatasıyla ilgili sorunları aşabilmek için sunucu tarafında gerekli düzenlemelerin yapılması önemlidir. Bu konuda sunucu tarafındaki sorumlulara ulaşmaya çalışmalısınız.
