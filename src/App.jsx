import React, { useState, useEffect } from 'react';
import './App.css';
import './Cart.css';

const App = () => {
  const [eczaneler, setEczaneler] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Kullanıcının konumunu algıla
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Konum alınamadı:', error);
        }
      );
    } else {
      console.error('Tarayıcı konum algılamayı desteklemiyor.');
    }
  }, []);

  useEffect(() => {
    // Konum alındıktan sonra en yakın eczaneleri sırala
    if (userLocation) {
      fetch('https://www.beo.org.tr/nobet-belediye', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const eczaneDizisi = Object.values(data).filter((item) => typeof item === 'object');

          // En yakın eczaneleri sırala
          const sortedEczaneler = eczaneDizisi.sort((a, b) => {
            const distanceA = calculateDistance(userLocation.latitude, userLocation.longitude, a.enlem, a.boylam);
            const distanceB = calculateDistance(userLocation.latitude, userLocation.longitude, b.enlem, b.boylam);
            return distanceA - distanceB;
          });

          setEczaneler(sortedEczaneler);
        })
        .catch((error) => {
          console.error('Fetch error:', error);
        });
    }
  }, [userLocation]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    // İki nokta arasındaki mesafeyi hesapla (örneğin, haversine formülü kullanabilirsiniz)
    // Bu örnek fonksiyon sadece demonstrasyon amaçlı basitleştirilmiştir
    return Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lon2 - lon1, 2));
  };

  const showDirections = (eczane) => {
    const destination = `${eczane.enlem},${eczane.boylam}`;
    const apiKey = '9b4ccfeeb1cd31df5c5a04def60afe5846977faa';
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&key=${apiKey}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div>
      <h1 className='redHeader'>BURSA NÖBETCİ ECZANE LİSTESİ</h1>
      <div className='cart-container'>
        {eczaneler.map((eczane, index) => (
          <div key={index} className='cart-item'>
            <strong className='header'>{eczane.eczane}</strong>
            <p>{`${eczane.ilce}, ${eczane.bolge}`}</p>
            <p>{`Adres: ${eczane.adres}`}</p>
            <p>{`Telefon: ${eczane.tel}`}</p>
            <button onClick={() => showDirections(eczane)}>
              Haritada Göster ve Yol Tarifi Al
            </button>
          </div>
        ))}
      </div>
      <footer className='footer'>
        <p>2024 © Nefise TANRIKULU ∞ Şiyar Hüseyin BALCI</p>
      </footer>
    </div>
  );
};

export default App;
