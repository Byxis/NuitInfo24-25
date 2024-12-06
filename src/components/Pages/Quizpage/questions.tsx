import QuizInterface from './Interface/QuizInterface.tsx';

const list = 
[
  {
      "title": "Quels parallèles peut-on établir entre les systèmes du corps humain et les mécanismes océaniques ?",
      "desc": "Cochez les réponses qui vous semblent justes.",
      "reponses": [
          {
              "contenu": "Le cœur et les courants océaniques transportent des fluides et des nutriments.",
              "isValid": true
          },
          {
              "contenu": "Les poumons et le plancton échangent des gaz avec l'atmosphère.",
              "isValid": true
          },
          {
              "contenu": "Le système nerveux et les récifs coralliens protègent contre les agressions extérieures.",
              "isValid": false
          },
          {
              "contenu": "La peau et la surface de l’océan régulent les échanges thermiques et gazeux.",
              "isValid": true
          }
      ],
      "explication": "Le cœur est comparé aux courants océaniques qui transportent des nutriments, les poumons au phytoplancton pour l’échange gazeux, et la peau à la surface de l’océan pour la régulation thermique."
  },
  {
      "title": "Quelles sont les principales menaces pesant sur les océans et leur impact ?",
      "desc": "Cochez les réponses qui vous semblent justes.",
      "reponses": [
          {
              "contenu": "La pollution plastique endommage les écosystèmes marins.",
              "isValid": true
          },
          {
              "contenu": "La surpêche déséquilibre la chaîne alimentaire marine.",
              "isValid": true
          },
          {
              "contenu": "La dissolution accrue de CO2 dans les océans accélère leur acidification.",
              "isValid": true
          },
          {
              "contenu": "Les marées influencent les écosystèmes côtiers.",
              "isValid": false
          }
      ],
      "explication": "Les menaces majeures incluent la pollution plastique, la surpêche, et l'acidification des océans due au CO2, qui perturbent gravement les écosystèmes marins."
  },
  {
      "title": "Quelles actions entreprises par la Fondation Race for Water contribuent à la préservation des océans ?",
      "desc": "Cochez les réponses qui vous semblent justes.",
      "reponses": [
          {
              "contenu": "Sensibilisation du public à la pollution plastique.",
              "isValid": true
          },
          {
              "contenu": "Développement de navires à zéro émission de CO2.",
              "isValid": true
          },
          {
              "contenu": "Construction de barrages pour limiter les courants océaniques.",
              "isValid": false
          },
          {
              "contenu": "Programmes éducatifs pour promouvoir la durabilité.",
              "isValid": true
          }
      ],
      "explication": "La Fondation agit via la sensibilisation, l’innovation technologique avec des navires zéro émission, et des programmes éducatifs pour protéger les océans."
  },
  {
      "title": "Quels rôles les courants océaniques jouent-ils dans la régulation du climat ?",
      "desc": "Cochez les réponses qui vous semblent justes.",
      "reponses": [
          {
              "contenu": "Transport de chaleur entre les régions équatoriales et polaires.",
              "isValid": true
          },
          {
              "contenu": "Redistribution des nutriments pour soutenir les écosystèmes marins.",
              "isValid": false
          },
          {
              "contenu": "Absorption des gaz à effet de serre comme le CO2.",
              "isValid": true
          },
          {
              "contenu": "Stabilisation des températures atmosphériques mondiales.",
              "isValid": true
          }
      ],
      "explication": "Les courants océaniques transportent la chaleur et absorbent du CO2, contribuant à stabiliser les températures globales et à atténuer les variations climatiques."
  },
  {
      "title": "Pourquoi le phytoplancton est-il crucial pour l’écosystème terrestre ?",
      "desc": "Cochez les réponses qui vous semblent justes.",
      "reponses": [
          {
              "contenu": "Il constitue la base de la chaîne alimentaire marine.",
              "isValid": true
          },
          {
              "contenu": "Il produit une grande partie de l’oxygène atmosphérique.",
              "isValid": true
          },
          {
              "contenu": "Il absorbe des quantités significatives de dioxyde de carbone.",
              "isValid": true
          },
          {
              "contenu": "Il ralentit la formation des marées.",
              "isValid": false
          }
      ],
      "explication": "Le phytoplancton est essentiel car il soutient la chaîne alimentaire marine, produit une part importante de l'oxygène terrestre, et absorbe le CO2 atmosphérique."
  },
  {
    "title": "Quels impacts le changement climatique a-t-il sur les courants océaniques ?",
    "desc": "Cochez les réponses qui vous semblent justes.",
    "reponses": [
        {
            "contenu": "Ralentissement de certains courants comme l'AMOC.",
            "isValid": true
        },
        {
            "contenu": "Acidification accrue des eaux marines.",
            "isValid": false
        },
        {
            "contenu": "Modification des flux de chaleur et des précipitations globales.",
            "isValid": true
        },
        {
            "contenu": "Augmentation des courants marins en profondeur.",
            "isValid": false
        }
    ],
    "explication": "Le changement climatique ralentit certains courants comme l'AMOC, entraînant des modifications des flux de chaleur et affectant les précipitations globales."
},
{
    "title": "Quels rôles jouent les océans dans la régulation du climat global ?",
    "desc": "Cochez les réponses qui vous semblent justes.",
    "reponses": [
        {
            "contenu": "Ils stockent une grande partie de l’excès de chaleur de l’atmosphère.",
            "isValid": true
        },
        {
            "contenu": "Ils produisent l’intégralité de l’oxygène terrestre.",
            "isValid": false
        },
        {
            "contenu": "Ils absorbent une partie des émissions de CO2.",
            "isValid": true
        },
        {
            "contenu": "Ils redistribuent la chaleur entre les régions du globe via les courants.",
            "isValid": true
        }
    ],
    "explication": "Les océans stockent la chaleur, absorbent le CO2 et redistribuent la chaleur grâce aux courants, jouant un rôle clé dans la régulation climatique."
},
{
    "title": "Pourquoi les barrières naturelles comme les récifs coralliens et les mangroves sont-elles importantes ?",
    "desc": "Cochez les réponses qui vous semblent justes.",
    "reponses": [
        {
            "contenu": "Elles protègent les écosystèmes marins contre les tempêtes.",
            "isValid": true
        },
        {
            "contenu": "Elles abritent une grande diversité de vie marine.",
            "isValid": true
        },
        {
            "contenu": "Elles augmentent la salinité de l’eau de mer.",
            "isValid": false
        },
        {
            "contenu": "Elles contribuent à la stabilité des côtes contre l’érosion.",
            "isValid": true
        }
    ],
    "explication": "Les récifs et les mangroves protègent des tempêtes, abritent une biodiversité unique, et stabilisent les côtes contre l’érosion, ce qui est vital pour les écosystèmes côtiers."
},
{
    "title": "Quels parallèles peuvent être faits entre les systèmes immunitaires humains et les défenses naturelles de l'océan ?",
    "desc": "Cochez les réponses qui vous semblent justes.",
    "reponses": [
        {
            "contenu": "Le système immunitaire combat les infections, tandis que les océans n’ont pas de mécanismes de défense.",
            "isValid": false
        },
        {
            "contenu": "Les récifs coralliens agissent comme une barrière protectrice naturelle.",
            "isValid": true
        },
        {
            "contenu": "Les mangroves atténuent les impacts des tempêtes et de l'érosion.",
            "isValid": true
        },
        {
            "contenu": "Les océans ne disposent d'aucune protection contre la pollution plastique.",
            "isValid": false
        }
    ],
    "explication": "Les récifs coralliens et les mangroves jouent des rôles de défense pour l'océan, tout comme le système immunitaire protège le corps humain contre les agressions."
  }
];

function GetQuestion(n: number): QuizInterface
{
    return list[n];
}

export default GetQuestion;