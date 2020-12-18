import './styles.scss';
import { vaccins } from './src/data';

const app = document.getElementById('app');

function render() {
  // creation header
  const strHeader = `
<header class="flex">
    <h1>Vaccins COVD19</h1>
    <section class="buttonsHeader">
        <button class="btnTriPrix">Trier vaccins par prix</button>
        <button class="btnApprouve">Vaccins approuvés seulement</button>
    </section>
</header>`;

  // main partie 1
  let strMain = `
<main>
    <section class="cards flex">
`;

  // footer partie 1
  let strFooter = `<footer class="flex">
        <div class="hCommande">
            <h2>Commande:</h2> 
            <h3></h3>           
        </div>
        <div class="commande">`;

  // ------BOUCLE SUR LES DATAS-----------
  vaccins.forEach((vaccin, i) => {
    // main partie 2
    strMain += `
  <div class="card">
          <img src="${vaccin.img}" alt="">
          ${vaccin.approuve ? '<p class="approuve">Approuvé</p>' : '<p class="non_approuve">Non approuvé</p>'}
          <section class="sectionText">
            <h2>${vaccin.nom}</h2>
            <p>Inventeurs: ${vaccin.inventeurs}</p>
            <p>Lieux de production: ${vaccin.lieux_de_production}</p>
            <p>Technologie: ${vaccin.technologie}</p>
            <div class="flex qtePrix">
              <p>Quantité: ${vaccin.quantite}</p>
              <p>Prix unitaire: ${vaccin.prix_unitaire}$</p>
            </div>
            <div class="flex reserver">
              <input type="text" placeholder="Quantité" class="inputQte">
              <button class="btnReserver">Réserver</button>
            </div>
          </section>
        </div>
  `;

    // footer partie 2
    strFooter += `    
            <p class='d-none' id='commande${i}'>12 x ${vaccin.nom}</p>
        
  `;
  });

  // ---------FINALISATION CREATION STRING ET AJOUT A APP-----------------------
  // main partie 3
  strMain += `
</section>
    </main>
`;

  // footer partie 3
  strFooter += `
    </div>
    <div class="btnFooter">
        <p><button class="btnReinit">Réinitialiser la commande</button></p>
        <p><button class="btnCommander">Passer la commande</button></p>
    </div>
</footer>
`;

  app.innerHTML = strHeader + strMain + strFooter;

  //
  // -------------------BOUTON RESERVER + AJOUT COMMANDE-------------------
  const btnReserver = app.querySelectorAll('.btnReserver');
  const h3Commande = app.querySelector('footer h3');
  console.log(h3Commande);
  // console.log(btnReserver);
  btnReserver.forEach((monBouton, i) => {
    const commande = document.getElementById(`commande${i}`);
    const parent = monBouton.parentNode;
    const inputQte = parent.querySelector('.inputQte');
    // console.log(inputQte);
    // console.log(commande);

    let prix = 0;
    monBouton.addEventListener('click', () => {
      console.log();
      if (inputQte.value !== '' && inputQte.value <= vaccins[i].quantite) {
        console.log(inputQte.value);
        monBouton.disabled = true;
        inputQte.classList.add('d-none');
        commande.innerHTML = `${inputQte.value} x ${vaccins[i].nom}`;
        commande.classList.remove('d-none');
      }
      prix += inputQte.value;
      h3Commande.innerHTML = `<h3>Prix final: ${prix}$</h3>`;
    });
  });

  // -------------------CACHER VACCINS NON APPROUVES----------------
  const btnApprouve = app.querySelector('.btnApprouve');
  btnApprouve.addEventListener('click', () => {
    const cards = app.querySelectorAll('.card');
    cards.forEach((card, i) => {
      if (vaccins[i].approuve === false) {
        if (!card.classList.contains('d-none')) {
          card.classList.add('d-none');
          btnApprouve.innerHTML = 'Tous les vaccins';
        } else {
          card.classList.remove('d-none');
          btnApprouve.innerHTML = 'Vaccins approuvés seulement';
        }
      }
    });
  });

  //   ------------------PASSER COMMANDE------------------
  const btnCommander = app.querySelector('.btnCommander');
  const divCommande = app.querySelectorAll('.commande p');
  btnCommander.addEventListener('click', () => {
    // console.log(divCommande);
    divCommande.forEach((uneCommande) => {
      if (!uneCommande.classList.contains('d-none')) {
        app.querySelector('header').classList.add('d-none');
        app.querySelector('main').classList.add('d-none');
        app.querySelector('.btnReinit').classList.add('d-none');
        app.querySelector('.btnCommander').classList.add('d-none');
      }
    });
    app.querySelector('footer').innerHTML += '<p>Votre commande a bien été enregistrée!</p><button class="btnAnnuler">Annuler la commande</button>';
  });

  // ------------------REINITIALISER COMMANDE----------------
  const btnReinit = app.querySelector('.btnReinit');
  btnReinit.addEventListener('click', () => {
    render();
  });

  //   !!!!!!!!!!!!!!!BOUTON TRI PAR PRIX!!!!!!!!!!!!!!!!!!
  //   !!!!!!!!!!!!!!!Marche seulement pour l'aller et fait buguer le reste de mon app!!!!!!!!!!!!!!!!!!

//   // ------------------------TRI DES VACCINS PAR PRIX----------------------
//   const dicoPrix = new Map();
//   vaccins.forEach((vaccin, i) => {
//     dicoPrix.set(i, vaccin.prix_unitaire);
//   });
//   console.log(dicoPrix);
//   const mapSort = new Map([...dicoPrix.entries()].sort((a, b) => a[1] - b[1]));
//   console.log(mapSort);
//   const btnTriPrix = app.querySelector('.btnTriPrix');
//   btnTriPrix.addEventListener('click', () => {
//     const mainModifie = app.querySelector('main');
//     let cardsTrieesPrix = '';
//     for (const [key, value] of mapSort) {
//       console.log(key);
//       cardsTrieesPrix += `
//         <div class="card">
//             <img src="${vaccins[key].img}" alt="">
//             ${vaccins[key].approuve ? '<p class="approuve">Approuvé</p>' : '<p class="non_approuve">Non approuvé</p>'}
//             <section class="sectionText">
//                 <h2>${vaccins[key].nom}</h2>
//                 <p>Inventeurs: ${vaccins[key].inventeurs}</p>
//                 <p>Lieux de production: ${vaccins[key].lieux_de_production}</p>
//                 <p>Technologie: ${vaccins[key].technologie}</p>
//                 <div class="flex qtePrix">
//                 <p>Quantité: ${vaccins[key].quantite}</p>
//                 <p>Prix unitaire: ${vaccins[key].prix_unitaire}$</p>
//                 </div>
//                 <div class="flex reserver">
//                 <input type="text" placeholder="Quantité" class="inputQte">
//                 <button class="btnReserver">Réserver</button>
//                 </div>
//             </section>
//         </div>
//         `;
//     }
//     mainModifie.innerHTML = `
//         <section class="cards flex"> ${cardsTrieesPrix}</section>
//     `;
//   });
}

render();

// ------------------ANNULER COMMANDE---------------------------
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btnAnnuler')) {
    render();
  }
});
