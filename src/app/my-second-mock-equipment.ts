/**
 * Created by jose.zamudio on 4/27/19.
 */
import {
  Equipment
} from './equipment';

export let equipmentList: Equipment[] = [
  {
    id: 4,
    name: "Gamma Knife Perfexion",
    model: "Selenia Dimensions System 9000 Package",
    manufacturer: "Hologic",
    price: 73000000,
    type: "Equipo de neurocirugía",
    image: "https://5.imimg.com/data5/RR/IG/MY-3883832/elekta-leksell-gamma-knife-perfexion-radiosurgery-500x500.jpg",
    location: "Xalapa, Veracruz",
    currentInvestment: 43233000,
    pricePerUse: 80000,
  },
  {
    id: 3,
    name: "Mastógrafo digital con estereotaxia y tomosíntesis",
    model: "Selenia Dimensions System 9000 Package",
    manufacturer: "Hologic",
    price: 10911453,
    type: "Mastografo",
    image: "https://catalogomedicomx.s3.amazonaws.com/produccion/img/p/3/3/3/0/1/33301-large_default.jpg",
    location: "Tuxtla, Gutierrez, Chiapas",
    currentInvestment: 8633000,
    pricePerUse: 400,
  },
  {
    id: 2,
    name: "Acelerador Lineal Clinac 600c",
    model: "Acelerador Lineal Clinac 600c",
    manufacturer: "Clinac",
    price: 90000000,
    type: "Resonancia Magnetica",
    image: "https://i2.wp.com/www.radonic-cri.com/wp-content/uploads/2013/12/image-1.jpeg?w=650&ssl=1",
    location: "Hermosillo, Sonora",
    currentInvestment: 0,
    pricePerUse: 100000,
  },
  {
    id: 1,
    name: "Signa Premier para Tijuana",
    model: "Resonador magnetico 100390",
    manufacturer: "GE healthcare",
    price: 3000000,
    type: "Resonancia Magnetica",
    image: "http://www3.gehealthcare.es/es-es/productos/categorias/resonancia_magnetica/~/media/images/product/product-categories/magnetic-resonance-imaging/signa%20premier/banner5.png?la=en",
    location: "Tijuana Zona Rio",
    currentInvestment: 200000,
    pricePerUse: 1000,
  },
];