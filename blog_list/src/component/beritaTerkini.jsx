import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

let isiBeritaTerkini = [
    "Gabung Alpha Tech Academy Sekarang!","Ada apa dengan Kobar dan Hasan?",
    "Mengenal Arafat sang Master Python", "Belajar react.Js itu seru. Kamu setuju?", 
    "sudahkah kamu sehat mental?"
  ]

class beritaTerkini extends React.Component {
    render() {
      return (
        <div className="col-md-5">
            <div className="berita_terkini">
                <h5>BERITA TERKINI</h5>
                <a href="about_me.html">lihat semua</a>
            </div>
            {isiBeritaTerkini.map((isi,i) =>
                <div className="isi_berita_terkini">
                <div className="col-md-2 nomor">
                    <h6>#{i+1}</h6>
                </div>
                <div className="judul">
                    <p>{isi}</p>
                </div>
                </div>
            )}
        </div>
        );
    }
  }
  
  export default beritaTerkini;