/*------------- This plugin autofills a form  -------------*/
/*--- http://www.stichtingpv.nl/aanvraag-proces-verbaal ---*/
/* - Marold k - Maroldkloosterboer@gmail.com*/
var js = document.getElementsByTagName("script");
//URL !Important
var url = window.location.href;
var domain = window.location.hostname;
console.log(domain);
//Var declaration
var clean;
var cut;
var geslacht;

var spaceCleaner;

switch(domain){
	case "www.stichtingpv.nl":
		stichting();
		break;
	case "www.rialtoverzekeringenonline.nl":
		rialto();
		break;
	default:
		console.log("This domain is not in supported")
		break;
}

function rialto()
{
	var js = document.createElement("js");
	js.type = "text/javascript";
	js.src = "https://www.rialtoverzekeringenonline.nl/prod/scripts/FormGeneratorScript.js";
	document.body.appendChild(js);
	
	var Naam = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600233_0_0");
	var Voorletters = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600235_0_0");
	var Voorvoegsel = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600236_0_0");
	var Adres = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600240_0_0");
	var Postcode = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600242_0_0");
	var Woonplaats = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600244_0_0");
	var KVK = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600334_0_0");
	var Geslacht = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600246_0_0");
	var Soort = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600248_0_0");
	var Datum = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600250_0_0");
	var Geldig = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600252_0_0");
	var Rijbewijs = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600254_0_0");
	var Telefoon = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600256_0_0");
	var Mobiel = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600258_0_0");
	var Email = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600260_0_0");
	var Nationaliteit = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600262_0_0");
	var Beroep = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600264_0_0");
	var IBAN = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600329_0_0");
	var BSN = document.getElementById("ctl00_ctl00_MainFrame_MainContent_Field_600268_0_0");
	
	var _rialto = 	[
						Naam, Voorletters, Voorvoegsel,
						Adres, Postcode, Woonplaats,
						KVK, Geslacht, Soort,
						Datum, Geldig, Rijbewijs,
						Telefoon, Mobiel, Email,
						Nationaliteit, Beroep, IBAN,
						BSN,
					];
					
	clean = url.split("?");
	cut = clean[1].split("&");
	cut.splice(0, 4);
	for(var i = 0; i < _rialto.length; i++)
	{
		var switched = false;
		
		spaceCleaner = cut[i].split("%20");
		var output = spaceCleaner.join(" ");
		
		cut[i] = output;
		
		if(i > cut.length -1)
			break;
		if(_rialto[i] == Geslacht)
		{
			switched = true;
			var G = cut[i];
			switch(G)
			{
				case "heer":
					_rialto[i].value = "M";
					geslacht = "M";
					_rialto[i].onchange();
					break;
				case "mevrouw":
					_rialto[i].value = "V";
					geslacht = "V";
					_rialto[i].onchange();
					break;
				case "Rechtspersoon":
					_rialto[i].value = "R";
					_rialto[i].onchange();
					break;
				default:
					console.log("This is a non supported value");
					break;
			}
		}
		if(_rialto[i] == Soort)
		{
			switched = true;
			if(geslacht == "M" || geslacht == "V"){/*Silence*/}else{
				var S = cut[i];
				switch(S)
				{
					case "Aannemersbedrijf":
						_rialto[i].value = "10";
						_rialto[i].onchange();
						break;
					case "Agrarisch":
						_rialto[i].value = "20";
						_rialto[i].onchange();
						break;
					case "Antiquair":
						_rialto[i].value = "30";
						_rialto[i].onchange();
						break;
					case "Apotheek":
						_rialto[i].value = "40";
						_rialto[i].onchange();
						break;
					case "Artsenpraktijk":
						_rialto[i].value = "50";
						_rialto[i].onchange();
						break;
					case "Automatiekhal":
						_rialto[i].value = "60";
						_rialto[i].onchange();
						break;
					case "Autorijschool":
						_rialto[i].value = "70";
						_rialto[i].onchange();
						break;
					case "Autoverhuurbedrijf":
						_rialto[i].value = "80";
						_rialto[i].onchange();
						break;
					case "Bakkerij":
						_rialto[i].value = "90";
						_rialto[i].onchange();
						break;
					case "Bar":
						_rialto[i].value = "100";
						_rialto[i].onchange();
						break;
					case "Begrafenisonderneming":
						_rialto[i].value = "110";
						_rialto[i].onchange();
						break;
					case "Bejaardentehuis":
						_rialto[i].value = "120";
						_rialto[i].onchange();
						break;
					case "Benzinepompstation":
						_rialto[i].value = "130";
						_rialto[i].onchange();
						break;
					case "Bloemen-plantenhandel":
						_rialto[i].value = "140";
						_rialto[i].onchange();
						break;
					case "Boekhandel":
						_rialto[i].value = "160";
						_rialto[i].onchange();
						break;
					case "Bonthandel":
						_rialto[i].value = "180";
						_rialto[i].onchange();
						break;
					case "Brood-banketzaak":
						_rialto[i].value = "200";
						_rialto[i].onchange();
						break;
					case "Broodjeszaak":
						_rialto[i].value = "220";
						_rialto[i].onchange();
						break;
					case "Cafe":
						_rialto[i].value = "240";
						_rialto[i].onchange();
						break;
					case "Cafetaria":
						_rialto[i].value = "260";
						_rialto[i].onchange();
						break;
					case "Camping":
						_rialto[i].value = "280";
						_rialto[i].onchange();
						break;
					case "Concertzaal":
						_rialto[i].value = "300";
						_rialto[i].onchange();
						break;
					case "Confectie-atelier":
						_rialto[i].value = "320";
						_rialto[i].onchange();
						break;
					case "Creche":
						_rialto[i].value = "340";
						_rialto[i].onchange();
						break;
					case "Dancing":
						_rialto[i].value = "360";
						_rialto[i].onchange();
						break;
					case "Dansschool":
						_rialto[i].value = "380";
						_rialto[i].onchange();
						break;
					case "Delicatessenzaak":
						_rialto[i].value = "400";
						_rialto[i].onchange();
						break;
					case "Dierenartspraktijk":
						_rialto[i].value = "420";
						_rialto[i].onchange();
						break;
					case "Dierenspeciaalzaak":
						_rialto[i].value = "440";
						_rialto[i].onchange();
						break;
					case "Discotheek":
						_rialto[i].value = "460";
						_rialto[i].onchange();
						break;
					case "Doe-het-zelf-zaak":
						_rialto[i].value = "480";
						_rialto[i].onchange();
						break;
					case "Drogist-parfumerie":
						_rialto[i].value = "500";
						_rialto[i].onchange();
						break;
					case "Drukkerij":
						_rialto[i].value = "520";
						_rialto[i].onchange();
						break;
					case "Fietsen-bromfietsenhandel":
						_rialto[i].value = "540";
						_rialto[i].onchange();
						break;
					case "Fourniturenzaak":
						_rialto[i].value = "560";
						_rialto[i].onchange();
						break;
					case "Galerie":
						_rialto[i].value = "580";
						_rialto[i].onchange();
						break;
					case "Garagebedrijf":
						_rialto[i].value = "600";
						_rialto[i].onchange();
						break;
					case "Grammofoonplatenzaak":
						_rialto[i].value = "620";
						_rialto[i].onchange();
						break;
					case "Groentewinkel":
						_rialto[i].value = "640";
						_rialto[i].onchange();
						break;
					case "Hotel":
						_rialto[i].value = "660";
						_rialto[i].onchange();
						break;
					case "Houthandel":
						_rialto[i].value = "680";
						_rialto[i].onchange();
						break;
					case "Juwelier":
						_rialto[i].value = "700";
						_rialto[i].onchange();
						break;
					case "Jachtwerf-haven":
						_rialto[i].value = "720";
						_rialto[i].onchange();
						break;
					case "Kaaswinkel":
						_rialto[i].value = "740";
						_rialto[i].onchange();
						break;
					case "Kantine":
						_rialto[i].value = "760";
						_rialto[i].onchange();
						break;
					case "Kantooerboekhandel":
						_rialto[i].value = "780";
						_rialto[i].onchange();
						break;
					case "Kantoor":
						_rialto[i].value = "790";
						_rialto[i].onchange();
						break;
					case "Kantoor-woonhuis":
						_rialto[i].value = "795";
						_rialto[i].onchange();
						break;
					case "Kapsalon":
						_rialto[i].value = "800";
						_rialto[i].onchange();
						break;
					case "Kerk":
						_rialto[i].value = "820";
						_rialto[i].onchange();
						break;
					case "Kledingwinkel":
						_rialto[i].value = "840";
						_rialto[i].onchange();
						break;
					case "Koeriersbedrijf":
						_rialto[i].value = "1483";
						_rialto[i].onchange();
						break;
					case "Kruidenierswinkel":
						_rialto[i].value = "860";
						_rialto[i].onchange();
						break;
					case "Kwekerij":
						_rialto[i].value = "880";
						_rialto[i].onchange();
						break;
					case "Lederwarenwinkel":
						_rialto[i].value = "900";
						_rialto[i].onchange();
						break;
					case "Manege":
						_rialto[i].value = "920";
						_rialto[i].onchange();
						break;
					case "Medische praktijk":
						_rialto[i].value = "940";
						_rialto[i].onchange();
						break;
					case "Muziekinstrumentenhandel":
						_rialto[i].value = "960";
						_rialto[i].onchange();
						break;
					case "Naaimachinehandel":
						_rialto[i].value = "980";
						_rialto[i].onchange();
						break;
					case "Nachtclub":
						_rialto[i].value = "1000";
						_rialto[i].onchange();
						break;
					case "Onbekend":
						_rialto[i].value = "9999";
						_rialto[i].onchange();
						break;
					case "Restaurant":
						_rialto[i].value = "1020";
						_rialto[i].onchange();
						break;
					case "Schoenenzaak":
						_rialto[i].value = "1040";
						_rialto[i].onchange();
						break;
					case "Schoenmakerij":
						_rialto[i].value = "1060";
						_rialto[i].onchange();
						break;
					case "School":
						_rialto[i].value = "1080";
						_rialto[i].onchange();
						break;
					case "Schoonheidssalon":
						_rialto[i].value = "1100";
						_rialto[i].onchange();
						break;
					case "Slagerij":
						_rialto[i].value = "1120";
						_rialto[i].onchange();
						break;
					case "Slijterij":
						_rialto[i].value = "1140";
						_rialto[i].onchange();
						break;
					case "Snackbar":
						_rialto[i].value = "1160";
						_rialto[i].onchange();
						break;
					case "Speelgoedwinkel":
						_rialto[i].value = "1180";
						_rialto[i].onchange();
						break;
					case "Sportartikelenwinkel":
						_rialto[i].value = "1200";
						_rialto[i].onchange();
						break;
					case "Sportschool":
						_rialto[i].value = "1220";
						_rialto[i].onchange();
						break;
					case "Sportverningingsgebouw":
						_rialto[i].value = "1240";
						_rialto[i].onchange();
						break;
					case "Stomerij":
						_rialto[i].value = "1260";
						_rialto[i].onchange();
						break;
					case "Tabakswarenzaak":
						_rialto[i].value = "1280";
						_rialto[i].onchange();
						break;
					case "Taxibedrijf":
						_rialto[i].value = "1481";
						_rialto[i].onchange();
						break;
					case "Timmerbedrijf-werkplaats":
						_rialto[i].value = "1300";
						_rialto[i].onchange();
						break;
					case "Transportbedrijf":
						_rialto[i].value = "1482";
						_rialto[i].onchange();
						break;
					case "Tuincentrum":
						_rialto[i].value = "1320";
						_rialto[i].onchange();
						break;
					case "Uitzendbureau":
						_rialto[i].value = "1484";
						_rialto[i].onchange();
						break;
					case "Viswinkel":
						_rialto[i].value = "1340";
						_rialto[i].onchange();
						break;
					case "Videotheek":
						_rialto[i].value = "1360";
						_rialto[i].onchange();
						break;
					case "Wasserette":
						_rialto[i].value = "1380";
						_rialto[i].onchange();
						break;
					case "Winkel":
						_rialto[i].value = "1400";
						_rialto[i].onchange();
						break;
					case "Ijssalon":
						_rialto[i].value = "1480";
						_rialto[i].onchange();
						break;
					default:
						console.log("Unsupported value");
						break;
				}
			}
		}
		if(_rialto[i] == Geldig)
		{
			switched = true;
			var Q = cut[i];
			switch(Q)
			{
				case "Ja":
					_rialto[i].value = "J";
					_rialto[i].onchange();
					break;
				case "Nee":
					_rialto[i].value = "N";
					_rialto[i].onchange();
					break;
				default:
					console.log("this is an unsupported value");
					break;
			}
		}
		if(_rialto[i] == Nationaliteit)
		{
			switched = true;
			var N = cut[i];
			switch(N)
			{
				case "Albanië":
					_rialto[i].value = "AL";
					_rialto[i].onchange();
					break;
				case "Andorra":
					_rialto[i].value = "AND";
					_rialto[i].onchange();
					break;
				case "België":
					_rialto[i].value = "BE";
					_rialto[i].onchange();
					break;
				case "Bosnië-Herzegovina":
					_rialto[i].value = "BIH";
					_rialto[i].onchange();
					break;
				case "Bulgarije":
					_rialto[i].value = "BG";
					_rialto[i].onchange();
					break;
				case "Croatië":
					_rialto[i].value = "HR";
					_rialto[i].onchange();
					break;
				case "Cyprus":
					_rialto[i].value = "CY";
					_rialto[i].onchange();
					break;
				case "Denemarken":
					_rialto[i].value = "DK";
					_rialto[i].onchange();
					break;
				case "Duitsland":
					_rialto[i].value = "D";
					_rialto[i].onchange();
					break;
				case "Estland":
					_rialto[i].value = "EST";
					_rialto[i].onchange();
					break;
				case "Finland":
					_rialto[i].value = "FIN";
					_rialto[i].onchange();
					break;
				case "Frankrijk":
					_rialto[i].value = "FR";
					_rialto[i].onchange();
					break;
				case "FYROM":
					_rialto[i].value = "MK";
					_rialto[i].onchange();
					break;
				case "Griekenland":
					_rialto[i].value = "GR";
					_rialto[i].onchange();
					break;
				case "Hongarije":
					_rialto[i].value = "HU";
					_rialto[i].onchange();
					break;
				case "Ierland":
					_rialto[i].value = "IRL";
					_rialto[i].onchange();
					break;
				case "Irak":
					_rialto[i].value = "IRQ";
					_rialto[i].onchange();
					break;
				case "Iran":
					_rialto[i].value = "IR";
					_rialto[i].onchange();
					break;
				case "Israël":
					_rialto[i].value = "IL";
					_rialto[i].onchange();
					break;
				case "Italië":
					_rialto[i].value = "IT";
					_rialto[i].onchange();
					break;
				case "Ijsland":
					_rialto[i].value = "IS";
					_rialto[i].onchange();
					break;
				case "Joegoslavië":
					_rialto[i].value = "YU";
					_rialto[i].onchange();
					break;
				case "Letland":
					_rialto[i].value = "LV";
					_rialto[i].onchange();
					break;
				case "Luxemburg":
					_rialto[i].value = "LU";
					_rialto[i].onchange();
					break;
				case "Malta":
					_rialto[i].value = "MT";
					_rialto[i].onchange();
					break;
				case "Marokko":
					_rialto[i].value = "MA";
					_rialto[i].onchange();
					break;
				case "Moldavië":
					_rialto[i].value = "MD";
					_rialto[i].onchange();
					break;
				case "Nederland":
					_rialto[i].value = "NL";
					_rialto[i].onchange();
					break;
				case "Noorwegen":
					_rialto[i].value = "NO";
					_rialto[i].onchange();
					break;
				case "Oekraïne":
					_rialto[i].value = "UA";
					_rialto[i].onchange();
					break;
				case "Oostenrijk":
					_rialto[i].value = "AT";
					_rialto[i].onchange();
					break;
				case "Polen":
					_rialto[i].value = "PL";
					_rialto[i].onchange();
					break;
				case "Portugal":
					_rialto[i].value = "PT";
					_rialto[i].onchange();
					break;
				case "Roemenië":
					_rialto[i].value = "RO";
					_rialto[i].onchange();
					break;
				case "Slovenië":
					_rialto[i].value = "SLO";
					_rialto[i].onchange();
					break;
				case "Slowaakse Republiek":
					_rialto[i].value = "SK";
					_rialto[i].onchange();
					break;
				case "Spanje":
					_rialto[i].value = "ES";
					_rialto[i].onchange();
					break;
				case "Tsjechische Republiek":
					_rialto[i].value = "CZ";
					_rialto[i].onchange();
					break;
				case "Tunesië":
					_rialto[i].value = "TN";
					_rialto[i].onchange();
					break;
				case "Turkije":
					_rialto[i].value = "TR";
					_rialto[i].onchange();
					break;
				case "Verenigd Koninkrijk":
					_rialto[i].value = "GB";
					_rialto[i].onchange();
					break;
				case "Zweden":
					_rialto[i].value = "SE";
					_rialto[i].onchange();
					break;
				case "Zwitserland":
					_rialto[i].value = "CH";
					_rialto[i].onchange();
					break;
				default:
					console.log("unsupported value");
					break;
			}
		}
		if(_rialto[i] == Beroep)
		{
			switched = true;
			var B = cut[i];
			switch(B)
			{
				case "Aannemer":
					_rialto[i].value = "6";
					_rialto[i].onchange();
					break;
				case "Administratie medewerken":
					_rialto[i].value = "8";
					_rialto[i].onchange();
					break;
				case "Anders":
					_rialto[i].value = "24";
					_rialto[i].onchange();
					break;
				case "Bouwvakker":
					_rialto[i].value = "9";
					_rialto[i].onchange();
					break;
				case "Chauffeur":
					_rialto[i].value = "11";
					_rialto[i].onchange();
					break;
				case "Geen beroep":
					_rialto[i].value = "25";
					_rialto[i].onchange();
					break;
				case "Horeca medewerker":
					_rialto[i].value = "1";
					_rialto[i].onchange();
					break;
				case "Horeca zelfstandige":
					_rialto[i].value = "4";
					_rialto[i].onchange();
					break;
				case "Huisvrouw":
					_rialto[i].value = "10";
					_rialto[i].onchange();
					break;
				case "Koerier":
					_rialto[i].value = "26";
					_rialto[i].onchange();
					break;
				case "Koopman":
					_rialto[i].value = "5";
					_rialto[i].onchange();
					break;
				case "Marktkoopman":
					_rialto[i].value = "12";
					_rialto[i].onchange();
					break;
				case "Medewerker detailhandel":
					_rialto[i].value = "19";
					_rialto[i].onchange();
					break;
				case "Medewerker erotische sector":
					_rialto[i].value = "2";
					_rialto[i].onchange();
					break;
				case "Medewerker grafische sector":
					_rialto[i].value = "7";
					_rialto[i].onchange();
					break;
				case "Medewerker medische sector":
					_rialto[i].value = "13";
					_rialto[i].onchange();
					break;
				case "Medewerker verzorgende sector":
					_rialto[i].value = "22";
					_rialto[i].onchange();
					break;
				case "Productiemedewerker":
					_rialto[i].value = "14";
					_rialto[i].onchange();
					break;
				case "Schilder":
					_rialto[i].value = "15";
					_rialto[i].onchange();
					break;
				case "Student":
					_rialto[i].value = "16";
					_rialto[i].onchange();
					break;
				case "Taxichauffeur":
					_rialto[i].value = "27";
					_rialto[i].onchange();
					break;
				case "Uitkeringsgerechtigde":
					_rialto[i].value = "17";
					_rialto[i].onchange();
					break;
				case "Uitzendbureau-gedetacheerd":
					_rialto[i].value = "20";
					_rialto[i].onchange();
					break;
				case "Uitzendbureau medewerker":
					_rialto[i].value = "18";
					_rialto[i].onchange();
					break;
				case "Uitzendbureau zelfstandige":
					_rialto[i].value = "3";
					_rialto[i].onchange();
					break;
				case "Vertegenwoordiger":
					_rialto[i].value = "21";
					_rialto[i].onchange();
					break;
				case "Winkelbediende":
					_rialto[i].value = "23";
					_rialto[i].onchange();
					break;
				default:
					console.log("Unsupported value");
					break;
			}
		}	
		if(!switched)
		{
			_rialto[i].value = cut[i];
			ClientOnChangedValidate(_rialto[i]);
		}
	}
}

function stichting()
{
	/*--------------------Relevant DOM elements--------------------*/
	var Gemeente = document.getElementById("aanvraag_Gemeente_Value");
	var Kenmerk = document.getElementById("aanvraag_Reference_Value");
	var Naam = document.getElementById("aanvraag_Naam_Value");
	var TAV = document.getElementById("aanvraag_Tav_Value");
	var Adres = document.getElementById("aanvraag_Adres_Value");
	var Postcode = document.getElementById("aanvraag_Postcode_Value");
	var Plaats = document.getElementById("aanvraag_Plaats_Value");
	var Land = document.getElementById("aanvraag_Land_Value");
	var Datum = document.getElementById("aanvraag_Datum_Date");
	var Kenteken_1 = document.getElementById("aanvraag_Kenteken_Value");
	var Kenteken_2 = document.getElementById("aanvraag_Kenteken2_Value");
	var Kenteken_3 = document.getElementById("aanvraag_Kenteken3_Value");
	var Kenteken_4 = document.getElementById("aanvraag_Kenteken4_Value");
	var Kenteken_5 = document.getElementById("aanvraag_Kenteken5_Value");
	var Kenteken_6 = document.getElementById("aanvraag_Kenteken6_Value");
	//---------------------------------------------------------------//

	//Array for all elements//
	var _elements = [	
						Gemeente, Kenmerk, Naam,
						TAV, Adres, Postcode,
						Plaats, Land, Datum,
						Kenteken_1, Kenteken_2,
						Kenteken_3, Kenteken_4,
						Kenteken_5, Kenteken_6, 
					];

	clean = url.split("=");
	cut = clean[1].split("&");

	//Fill in the form
	for(i = 0; i < _elements.length; i++)
	{
		if(i > cut.length -1)
			break;
		
		_elements[i].value = cut[i];
	}
}