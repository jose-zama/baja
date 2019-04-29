/**
 * Created by jose.zamudio on 4/27/19.
 */
import {
  Equipment
} from './equipment';

export let equipmentList: Equipment[] = [{
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
    id: 3,
    name: "Gammacámara gamma de SPECT/TC",
    model: "DiscoveryTM NM/CT 670 Pro",
    manufacturer: "General Electric",
    price: 25000000,
    type: "Gammacámara",
    image: "http://www3.gehealthcare.es/~/media/images/product/product-categories/nuclear-medicine/spect-ct%20scanners/discovery%20670%20new/banner%20image%201.jpg?h=578&la=es-ES&w=1466",
    location: "Monterrey, Nuevo León",
    currentInvestment: 15000000,
    pricePerUse: 100000,
  },
  {
    id: 4,
    name: "Litrotriptor intracorpóreo electromecánico",
    model: "LITHOBOX",
    manufacturer: "LITHOBOX",
    price: 7000765.95,
    type: "Litotriptor",
    image: "http://img.medicalexpo.es/images_me/photo-g/101132-13720833.jpg",
    location: "León, Guanajuato",
    currentInvestment: 120000,
    pricePerUse: 20000,    
  }
];
