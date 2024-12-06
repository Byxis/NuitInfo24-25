import { useState } from 'react';

// Tableaux de tout les charactères que l'on veut que l'utilisateur puisse choisir
// Pas utilisé d'énum puisque ça nous rends la vie façile plus tard lorsq'il faut "piocher" un de ces charactères aléatoirement
const lowercaseStrings: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const specialCharacters: string[] = ["!", "#", "$", "%", "&", "'", "*", "/", "_", "(", ")", ",", ":", ";", "<", ">", "@", "[", "]", "."];

const integersAsStrings: string[] = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


function callRNG(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Appelé comme ça puisque l'on réplique les jeus de machines à sous :)
function Slots() {
    
    let [randomNumber, setRandomNumber] = useState<number | null>(null);

    // Initialise le rang auquel on va "piocher" le charactère plus tard
    const generateNumber = () => {
        setRandomNumber(callRNG(0, selectedArray.length - 1));
    };

    // Distinction entre Catégorie et Array: 
    // Catégorie est un string que renvoie le dropdown menu (id="DropdownMenu")
    // Array est le tableau auquel correspond ce string
    // Ex: la catégorie "lowercase" renvoie au tableau lowercaseStrings
    const [selectedCategory, setSelectedCategory] = useState< string >( "lowercase" );

    const [selectedArray, setSelectedArray] = useState< string[]>(  lowercaseStrings );

    // Appelé à chaque fois que l'on change de catégorie(id="DropdownMenu")
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let selectedArray: string[]

        // On assigne selectedArray au tableau correspondant à la catégorie choisie par l'utilisateur
        if (event.target.value === 'lowercase') {
            selectedArray = lowercaseStrings
        } else if (event.target.value === 'special') {
            selectedArray = specialCharacters
        } else {
            selectedArray = integersAsStrings
        }

        setSelectedCategory(event.target.value)

        // À chaque changement de catégorie(et dont du tableau selectionné) 
        // on remets l'index généré aléatoirement à sa valeur initiale(null) pour éviter
        // des erreurs du type indexOutOfRange  puisque les 3 tableaux que l'on utilise ont une taille différénte
        setRandomNumber(null)

        setSelectedArray(selectedArray);
    };

    // Exécuté lorsque l'utilisateur envoie un input au champ de texte(id="UserInputField")
    // bloque l'envoi de toutes les touches de clavier possible SAUF backspace
    // Oblige ainsi l'utilisateur de passer par la RNG pour remplir le champ
    // S'il commet une erreur, il recommence dès le début
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== "Backspace") {
            event.preventDefault(); 
        } else {
            // Vide l'ensemble des inputs de l'utilisateur. >:)
            setTypedString("");
        }
    };

    // On conserve l'ensemble des inputs de l'utilisateur dans cette variable
    let [typedString, setTypedString] = useState<string>(""); 

    // Evident: on concatène le charactère choisi par l'utilisateur à la fin de la variable typedString
    const appendCharacter = () => {
        if (randomNumber != null) {
            setTypedString(typedString.concat(selectedArray[randomNumber]))
        }
    };

    const rick = () => {
        location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    };

    return (
        <div className="UserInputWrapper">
            <h1>Formulaire de Contact</h1>
            <div id="DropdownMenuCategoryWrapper">
                <select id="DropdownMenu" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="lowercase">Lettres</option>
                    <option value="special">Caractères</option>
                    <option value="chiffres">Chiffres</option>
                </select>
            </div>
            
            <div id="DisplayRNGResultWrapper">
                <h2>Nombre Aléatoire</h2>
                <button id="TriggerRNGButton" 
                        onClick={generateNumber}>Générateur de nombre</button>
                <p>{randomNumber !== null ? `Nombre généré : ${randomNumber + 1}.` : "Appuyez sur le bouton pour générer un nombre !"}</p>
                <p>{randomNumber !== null ? `Ce qui correspond au caractère : ${selectedArray[randomNumber]}` : ""}</p>
            </div>
            

            <button id="SendRNGResultToInputFieldButton" onClick={appendCharacter}>Envoyer le caractère dans la zone !</button>


            <div id="UserInputFieldWrapper">
                <input id="UserInputField"
                    type="email"
                    onKeyDown={handleKeyDown}
                    value={typedString}
                />
            </div>
            
            <button id="myButton" onClick={rick} className="float-left submit-button" >S'abonner a la newsletter !</button>
        </div>
    );
};

export default Slots;
