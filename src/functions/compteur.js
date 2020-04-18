import React from 'react'

function nbJours(date1, date2){
    var dt1 = new Date(date1);
    console.log(dt1);
    var dt2 = new Date(date2);
    console.log(dt2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
};

function currentdate(){
    var today = new Date();
    var date = '0'+(today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
    date.toString();
    return date;
}

class Compteur extends React.Component {
    render() {
    
    var datemtn=currentdate();
    console.log(datemtn);

    var nbjours=nbJours('03/17/2020', datemtn);

    return <p>Tu es confiné(e) depuis : {nbjours} jours 🔥</p>;
    }
  }

export default Compteur;