const hospitalListings = [
  {
    name: "Doon Medical College & Hospital",
    address: "Parade Ground, Dehradun, Uttarakhand",
    contact: "0135-2711177",
    image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus-image_knzJgLb69m.webp?tr=w-3840",
  },
  {
    name: "Combined Medical Institute (CMI Hospital)",
    address: "Haridwar Bypass Road, Dehradun, Uttarakhand",
    contact: "0135-2726692",
    image: "https://lh7-us.googleusercontent.com/GFFuIQOakYFDbelsvtVjEzxPjgNRnn7g6xov3SuDDD1eUwNFwZQbhk2Ek0l-XeM_lDix8ZvU8oAqWa71SsR0dQd1aDl6QWPKvvo8D56XouJuw6lURyNqQm3Wpe4k2CYz30u2bJQvT-2lvIHRMoHQhx4",
  },
  {
    name: "Shri Mahant Indiresh Hospital",
    address: "Patel Nagar, Dehradun, Uttarakhand",
    contact: "0135-2743474",
    image: "https://best20.in/wp-content/uploads/2023/03/Shri-Mahant-Indiresh-Hospital-Image-768x428.jpg",
  },
  {
    name: "Kailash Hospital",
    address: "Haridwar Road, Near ISBT, Dehradun, Uttarakhand",
    contact: "0135-6675555",
    image: "https://doctorlistingingestionpr.blob.core.windows.net/doctorprofilepic/1646459271456_HospitalFacilityImages_1.png",
  },
  {
    name: "Himalayan Hospital (Jolly Grant)",
    address: "Swami Ram Nagar, Jolly Grant, Dehradun, Uttarakhand",
    contact: "0135-2471600",
    image: "https://www.pioneeredge.in/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-25-at-3.53.26-PM.jpeg",
  },
  {
    name: "The Hans Foundation Hospital",
    address: "Rajpur Road, Jakhan, Dehradun, Uttarakhand",
    contact: "0135-2658888",
    image: "https://www.joonsquare.com/usermanage/image/business/the-hans-foundation-general-hospital-pauri-garhwal-4515/the-hans-foundation-general-hospital-pauri-garhwal-hans7.jpg",
  },
  {
    name: "Artemis Hospital",
    address: "Near IT Park, Sahastradhara Road, Dehradun, Uttarakhand",
    contact: "0135-3988888",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Subharti Hospital",
    address: "Selaqui, Dehradun, Uttarakhand",
    contact: "0135-2607000",
    image: "http://gbcm.in/images/hospital/subharti-hospital-13.JPG",
  },
  {
    name: "Max Super Speciality Hospital",
    address: "Malsi, Dehradun, Uttarakhand",
    contact: "0135-3500000",
    image: "https://content.jdmagicbox.com/comp/dehradun/s7/9999px135.x135.110804184045.v2s7/catalogue/max-super-speciality-hospital-dehradun-hospitals-0ybx3psytm.jpg",
  },
  {
    name: "Synergy Hospital",
    address: "G.M.S Road, Near Ballupur Chowk, Dehradun, Uttarakhand",
    contact: "0135-6671111",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Government Doon Hospital",
    address: "Haridwar Bypass, Dehradun, Uttarakhand",
    contact: "0135-2653085",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "AIIMS Rishikesh",
    address: "Virbhadra Road, Rishikesh, Uttarakhand",
    contact: "0135-2462924",
    image: "https://aiimsrishikesh.edu.in/wp-content/uploads/2021/10/AIIMS-Rishikesh-Building.jpg",
  },
  {
    name: "Seema Dental College & Hospital",
    address: "P.O Pashulok, Rishikesh, Uttarakhand",
    contact: "0135-2453465",
    image: "https://www.collegebatch.com/static/clg-gallery/seema-dental-college-hospital-rishikesh-224468.jpg",
  },
  {
    name: "Haridwar District Hospital",
    address: "Roshnabad, Haridwar, Uttarakhand",
    contact: "01334-239000",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Jolly Grant Eye Hospital",
    address: "Doiwala, Dehradun, Uttarakhand",
    contact: "0135-2471360",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Columbia Asia Hospital",
    address: "Haridwar Bypass, Dehradun, Uttarakhand",
    contact: "0135-3503333",
    image: "https://www.columbiaindiahospitals.com/sites/default/files/styles/slider/public/2021-03/columbia-asia-hospital-pune.jpg",
  },
  {
    name: "Sai Hospital",
    address: "Prem Nagar, Dehradun, Uttarakhand",
    contact: "0135-2698001",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Maya Super Speciality Hospital",
    address: "Rajpur Road, Dehradun, Uttarakhand",
    contact: "0135-2656789",
    image: "https://mayahospitaldehradun.com/wp-content/uploads/2021/02/Maya-Hospital-Dehradun.jpg",
  },
  {
    name: "City Heart Centre & Hospital",
    address: "Clock Tower, Dehradun, Uttarakhand",
    contact: "0135-2625242",
    image: "https://images.unsplash.com/photo-1580281658629-79a50b5429a9?auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Mahant Hospital & Research Centre",
    address: "Patel Nagar, Dehradun, Uttarakhand",
    contact: "0135-2745678",
    image: "https://images.unsplash.com/photo-1576765607924-3eec9c1e66d7?auto=format&fit=crop&w=800&q=60",
  },
];

module.exports = hospitalListings;
