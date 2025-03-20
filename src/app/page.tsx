"use client";

import { useState } from "react";
import Image from "next/image";
import EmailsBox from "../components/EmailsBox";

export default function EmailPage() {

  interface Email {
    id: number;
    from: string;
    image: string;
    subject: string;
    body: string;
    date: string;
  }

  const emails: Email[] = [
    {
      id: 1,
      from: "alice.dupont@gmail.com",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      subject: "Réunion d'équipe - Lundi 10h",
      body: "Bonjour, n'oubliez pas la réunion de lundi à 10h. Nous discuterons des nouveaux objectifs.",
      date: "2024-03-11T08:30:00Z",
    },
    {
      id: 2,
      from: "pierre.martin@company.com",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      subject: "Facture à régler avant le 15 mars",
      body: "Bonjour, veuillez trouver en pièce jointe la facture à régler avant le 15 mars. Merci.",
      date: "2024-03-10T14:15:00Z",
    },
    {
      id: 3,
      from: "newsletter@technews.com",
      image: "https://randomuser.me/api/portraits/lego/3.jpg",
      subject: "Les 5 nouvelles tendances technologiques en 2024",
      body: "Découvrez les tendances tech de cette année : IA, blockchain, réalité augmentée...",
      date: "2024-03-09T07:00:00Z",
    },
    {
      id: 4,
      from: "support@amazon.fr",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      subject: "Votre commande a été expédiée",
      body: "Votre commande #123456 a été expédiée et arrivera sous 2 jours ouvrés.",
      date: "2024-03-08T16:45:00Z",
    },
    {
      id: 5,
      from: "mathilde.lefevre@yahoo.fr",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      subject: "Invitation : Anniversaire de Léa 🎉",
      body: "Salut ! Tu es invité à l’anniversaire de Léa ce samedi à 18h chez moi. Viens avec plaisir !",
      date: "2024-03-07T19:20:00Z",
    },
    {
      id: 6,
      from: "recrutement@startup.io",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      subject: "Votre candidature chez Startup.io",
      body: "Bonjour, nous avons bien reçu votre candidature et nous reviendrons vers vous sous peu.",
      date: "2024-03-06T11:10:00Z",
    },
    {
      id: 7,
      from: "spotify@music.com",
      image: "https://randomuser.me/api/portraits/lego/7.jpg",
      subject: "Votre récap mensuel - Découvrez vos top titres 🎵",
      body: "Bonjour, voici votre récap musical du mois avec vos morceaux préférés.",
      date: "2024-03-05T22:00:00Z",
    },
    {
      id: 8,
      from: "julien.bernard@hotmail.com",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      subject: "Rapport de projet - Version finale",
      body: "Salut, je t’envoie la version finale du rapport de projet. Dis-moi si tu as des retours !",
      date: "2024-03-04T09:30:00Z",
    },
    {
      id: 9,
      from: "vente-privee@fashion.fr",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
      subject: "Vente privée exceptionnelle - Jusqu’à -70% !",
      body: "Ne manquez pas nos offres exclusives sur les nouvelles collections.",
      date: "2024-03-03T18:40:00Z",
    },
    {
      id: 10,
      from: "marc.durand@business.com",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      subject: "Conférence annuelle : votre inscription est confirmée",
      body: "Bonjour, votre inscription à la conférence annuelle du 25 mars est bien confirmée.",
      date: "2024-03-02T15:50:00Z",
    },
    {
      id: 11,
      from: "contact@voyages-express.com",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
      subject: "Promo exclusive : -30% sur votre prochaine destination ✈️",
      body: "Réservez maintenant et profitez d'une réduction de 30% sur votre prochain voyage.",
      date: "2024-03-01T10:20:00Z",
    },
    {
      id: 12,
      from: "noreply@linkedin.com",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      subject: "5 nouvelles personnes ont visité votre profil",
      body: "Consultez qui a récemment visité votre profil LinkedIn.",
      date: "2024-02-29T12:10:00Z",
    },
    {
      id: 13,
      from: "support@paypal.com",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      subject: "Alerte : Activité suspecte détectée sur votre compte",
      body: "Nous avons détecté une connexion inhabituelle. Si ce n'était pas vous, veuillez sécuriser votre compte.",
      date: "2024-02-28T23:50:00Z",
    },
    {
      id: 14,
      from: "paul.lambert@gmail.com",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
      subject: "Café ce week-end ? ☕",
      body: "Salut, ça te dit qu'on se retrouve pour un café samedi matin ?",
      date: "2024-02-27T16:30:00Z",
    },
    {
      id: 15,
      from: "offres@supermarché.fr",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
      subject: "Vos coupons de réduction sont prêts !",
      body: "Profitez de vos réductions sur vos produits préférés en magasin et en ligne.",
      date: "2024-02-26T14:05:00Z",
    },
    {
      id: 16,
      from: "support@apple.com",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      subject: "Mise à jour importante de votre compte Apple",
      body: "Veuillez vérifier vos informations de compte et activer l’authentification à deux facteurs.",
      date: "2024-02-24T11:30:00Z",
    },
    {
      id: 17,
      from: "amelie.tourneur@yahoo.com",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
      subject: "Soirée film vendredi chez moi 🎥",
      body: "Je propose une soirée film vendredi soir à la maison. Apporte des snacks !",
      date: "2024-02-23T19:00:00Z",
    },
    {
      id: 18,
      from: "support@apple.com",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      subject: "Mise à jour importante de votre compte Apple",
      body: "Veuillez vérifier vos informations de compte et activer l’authentification à deux facteurs.",
      date: "2024-02-24T11:30:00Z",
    },
    {
      id: 19,
      from: "support@apple.com",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      subject: "Mise à jour importante de votre compte Apple",
      body: "Veuillez vérifier vos informations de compte et activer l’authentification à deux facteurs.",
      date: "2024-02-24T11:30:00Z",
    },
    {
      id: 20,
      from: "support@apple.com",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      subject: "Mise à jour importante de votre compte Apple",
      body: "Veuillez vérifier vos informations de compte et activer l’authentification à deux facteurs.",
      date: "2024-02-24T11:30:00Z",
    },
    {
      id: 21,
      from: "support@apple.com",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      subject: "Mise à jour importante de votre compte Apple",
      body: "Veuillez vérifier vos informations de compte et activer l’authentification à deux facteurs.",
      date: "2024-02-24T11:30:00Z",
    },
    
];

  
  const [searchQuery, setSearchQuery] = useState(""); 
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const filteredEmails = emails.filter((email) =>
    `${email.from} ${email.subject} ${email.body}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  
  const [sidebarWidth, setSidebarWidth] = useState(250); 
  const minSidebarWidth = 120;
  const maxSidebarWidth = 400;

  const handleMouseDown = (e: React.MouseEvent) => {
      const startX = e.clientX;
      const startWidth = sidebarWidth;

      const handleMouseMove = (moveEvent: MouseEvent) => {
          const newWidth = Math.min(maxSidebarWidth, Math.max(minSidebarWidth, startWidth + (moveEvent.clientX - startX)));
          setSidebarWidth(newWidth);
      };

      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center p-4">
        <label className="input flex items-center p-2 border rounded-lg shadow-md w-full md:w-1/2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Rechercher un email..."
            className="ml-2 w-full outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </div>
  
      <div className="flex flex-grow overflow-hidden h-full">
        <div className="hidden sm:block flex-shrink-0 shadow-md overflow-y-auto" style={{ width: `${sidebarWidth}px` }}>
          <EmailsBox />
        </div>
  
        <div className="w-1 bg-gray-600 cursor-ew-resize" onMouseDown={handleMouseDown} />
  
        <aside 
          className={`w-full md:w-1/4 p-4 shadow-md overflow-y-auto ${selectedEmail ? "hidden md:block" : "block"}`} 
          style={{ maxHeight: 'calc(100vh - 16vh)' }}
        >
          <ul className="bg-base-100 rounded-box shadow-md">
            {filteredEmails.length > 0 ? (
              filteredEmails.map((email) => (
                <li
                  key={email.id}
                  className={`flex items-center p-3 border-b cursor-pointer ${
                    selectedEmail?.id === email.id ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => setSelectedEmail(email)}
                >
                  <Image
                    className="size-10 rounded-box"
                    src={email.image}
                    alt="Profile"
                    width={100}
                    height={100}
                  />
                  <div className="ml-2">
                    <div>{email.from}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">{email.subject}</div>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center p-4 text-gray-500">Aucun email trouvé</p>
            )}
          </ul>
        </aside>
  
        {selectedEmail && (
          <main className="flex-grow p-6 flex flex-col w-full md:w-3/4">
            <button
              className="mb-4 p-2 bg-red-500 text-white rounded-md md:hidden"
              onClick={() => setSelectedEmail(null)}
            >
              Retour
            </button>
            <div className="p-4 shadow-md rounded-md">
              <div className="flex justify-between text-sm text-gray-100">
                <h2 className="text-xl font-semibold">{selectedEmail.subject}</h2>
                <p className="text-right">Reçu le: {selectedEmail.date}</p>
              </div>
              <p className="text-gray-400">De: {selectedEmail.from}</p>
              <p className="mt-2">{selectedEmail.body}</p>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}  
