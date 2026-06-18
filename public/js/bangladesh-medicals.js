/**
 * Bangladesh Medical / Hospital Database
 * Organized by District → Upazila → [Hospital/Clinic List]
 * Used for the cascading hospital dropdown in the blood request form.
 */
const bangladeshMedicals = {
  "Dhaka": {
    "Adabor": ["Adabor General Hospital", "Medicare Hospital Adabor", "Green Life Hospital (Branch)", "Adabor Health Complex"],
    "Badda": ["Badda General Hospital", "Medinova Medical Services (Badda)", "Delta Hospital (Badda)", "Badda Upazila Health Complex"],
    "Bangshal": ["Bangshal Health Complex", "Popular Diagnostic Centre (Bangshal)", "Islami Bank Hospital (Old Dhaka)", "Bangshal General Clinic"],
    "Bimanbandar": ["Airport Health Centre", "Bimanbandar Upazila Health Complex", "Square Hospital (nearby)", "Bimanbandar Clinic"],
    "Cantonment": ["Combined Military Hospital (CMH) Dhaka", "Cantonment Board Clinic", "Army Hospital Dhaka", "Cantonment General Hospital"],
    "Chawkbazar": ["Mitford Hospital (Sir Salimullah Medical College)", "Chawkbazar General Hospital", "Old Dhaka Diagnostic Centre", "National Medical Institute Chawkbazar"],
    "Dakshinkhan": ["Dakshinkhan Upazila Health Complex", "Dakshinkhan General Hospital", "North Dhaka Diagnostic Centre", "Dakshinkhan Community Clinic"],
    "Darus Salam": ["Darus Salam Health Complex", "Darus Salam General Hospital", "North West Dhaka Clinic", "Community Health Centre Darus Salam"],
    "Demra": ["Demra Upazila Health Complex", "Demra General Hospital", "Demra Diagnostic Centre", "Eastern Dhaka Community Hospital"],
    "Dhamrai": ["Dhamrai Upazila Health Complex", "Dhamrai General Hospital", "Dhamrai District Hospital", "Dhamrai Primary Healthcare Centre"],
    "Dhanmondi": ["Popular Medical College Hospital", "Ibn Sina Hospital Dhanmondi", "Labaid Hospital", "Gonoshasthaya Nagar Hospital", "Bangladesh Specialised Hospital"],
    "Dohar": ["Dohar Upazila Health Complex", "Dohar General Hospital", "Dohar Diagnostic & Clinic", "Dohar Community Health Centre"],
    "Gendaria": ["Gendaria Health Complex", "Dhaka Medical College Hospital (nearby)", "Gendaria General Hospital", "Gendaria Diagnostic Centre"],
    "Gulshan": ["United Hospital Gulshan", "Evercare Hospital Dhaka", "Apollo Hospitals Dhaka", "North East Medical College Hospital"],
    "Hazaribagh": ["Hazaribagh Health Complex", "Hazaribagh General Hospital", "Popular Diagnostic Hazaribagh", "Hazaribagh Community Clinic"],
    "Jatrabari": ["Jatrabari General Hospital", "Jatrabari Upazila Health Complex", "South Dhaka Diagnostic Centre", "Jatrabari Community Hospital"],
    "Kadamtali": ["Kadamtali Upazila Health Complex", "Kadamtali General Hospital", "South East Dhaka Clinic", "Kadamtali Diagnostic Centre"],
    "Kafrul": ["Kafrul General Hospital", "Sher-E-Bangla Medical College Hospital (nearby)", "Kafrul Health Complex", "Kafrul Diagnostic Centre"],
    "Kalabagan": ["Kalabagan General Hospital", "Ibn Sina Kalabagan", "Kalabagan Diagnostic Centre", "Central Dhaka Medical Centre"],
    "Kamrangirchar": ["Kamrangirchar Upazila Health Complex", "Kamrangirchar General Hospital", "Buriganga Riverside Clinic", "Kamrangirchar Community Health"],
    "Keraniganj": ["Keraniganj Upazila Health Complex", "Keraniganj General Hospital", "South Dhaka Hospital", "Keraniganj Diagnostic & Hospital"],
    "Khilgaon": ["Khilgaon General Hospital", "Khilgaon Health Complex", "East Dhaka Diagnostic Centre", "Khilgaon Community Clinic"],
    "Khilkhet": ["Khilkhet General Hospital", "Khilkhet Health Complex", "Khilkhet Diagnostic Centre", "North East Dhaka Medical Centre"],
    "Kotwali": ["Dhaka Medical College Hospital", "Sir Salimullah Medical College Hospital", "National Institute of Cancer Research & Hospital", "Kotwali Community Clinic"],
    "Lalbagh": ["Lalbagh Health Complex", "Dhaka Medical College Hospital (nearby)", "Lalbagh General Hospital", "Lalbagh Diagnostic Centre"],
    "Mirpur": ["National Institute of Neurosciences", "Mirpur General Hospital", "Sher-E-Bangla Medical College & Hospital", "Mirpur Diagnostic Centre"],
    "Mohammadpur": ["Mohammadpur General Hospital", "Ad-Din Medical College Hospital", "Central Hospital Mohammadpur", "Mohammadpur Diagnostic Centre"],
    "Motijheel": ["Motijheel General Hospital", "BIRDEM General Hospital", "Bangladesh Medical College Hospital", "Islami Bank Central Hospital"],
    "Nawabganj": ["Nawabganj Upazila Health Complex", "Nawabganj General Hospital", "Nawabganj Diagnostic Centre", "Rural Health Centre Nawabganj"],
    "New Market": ["Dhaka Central International Medical College Hospital", "New Market Diagnostic Centre", "Popular Medical Centre", "New Market General Hospital"],
    "Pallabi": ["Pallabi Upazila Health Complex", "Pallabi General Hospital", "Pallabi Diagnostic Centre", "Pallabi Community Hospital"],
    "Paltan": ["Paltan General Hospital", "Paltan Health Complex", "Holy Family Red Crescent Medical College Hospital", "Paltan Diagnostic Centre"],
    "Ramna": ["Ramna General Hospital", "Ramna Health Complex", "National Heart Foundation Hospital & Research Institute", "Ramna Diagnostic Centre"],
    "Rampura": ["Rampura General Hospital", "Rampura Health Complex", "East Dhaka Medical Centre", "Rampura Diagnostic Centre"],
    "Sabujbagh": ["Sabujbagh General Hospital", "Sabujbagh Health Complex", "East Dhaka Clinic", "Sabujbagh Community Hospital"],
    "Savar": ["Enam Medical College & Hospital", "Savar Upazila Health Complex", "Savar General Hospital", "National Orthopaedic Hospital (Pangu Hospital)"],
    "Shah Ali": ["Shah Ali General Hospital", "Shah Ali Health Complex", "Mirpur Health Centre", "Shah Ali Diagnostic Centre"],
    "Shahbagh": ["Bangabandhu Sheikh Mujib Medical University (BSMMU)", "Shahbagh General Hospital", "National Institute of Mental Health", "Shahbagh Diagnostic Centre"],
    "Sher-e-Bangla Nagar": ["Sher-E-Bangla Medical College Hospital", "Sher-E-Bangla Nagar Health Complex", "National Institute of Ophthalmology", "Agargaon Diagnostic Centre"],
    "Shyampur": ["Shyampur General Hospital", "Shyampur Health Complex", "Buriganga Riverside Hospital", "Shyampur Community Clinic"],
    "Sutrapur": ["Sutrapur General Hospital", "Sutrapur Health Complex", "Old Dhaka Medical Centre", "Sutrapur Diagnostic Centre"],
    "Tejgaon": ["Tejgaon General Hospital", "Square Hospital (Panthapath)", "National Institute of ENT", "Tejgaon Diagnostic Centre"],
    "Turag": ["Turag Upazila Health Complex", "Turag General Hospital", "North Dhaka Community Hospital", "Turag Diagnostic Centre"],
    "Uttara": ["Kuwait Bangladesh Friendship Government Hospital", "Uttara Modern Medical College Hospital", "Uttara Adhunik Medical College Hospital", "Crescent Hospital Uttara"],
    "Uttarkhan": ["Uttarkhan Upazila Health Complex", "Uttarkhan General Hospital", "North Dhaka Diagnostic Centre", "Uttarkhan Community Clinic"]
  },
  "Faridpur": {
    "Alfadanga": ["Alfadanga Upazila Health Complex", "Alfadanga Community Hospital", "Alfadanga Diagnostic Centre", "Alfadanga Rural Health Centre"],
    "Bhanga": ["Bhanga Upazila Health Complex", "Bhanga General Hospital", "Bhanga Diagnostic Centre", "Bhanga Community Clinic"],
    "Boalmari": ["Boalmari Upazila Health Complex", "Boalmari General Hospital", "Boalmari Diagnostic Centre", "Boalmari Community Hospital"],
    "Charbhadrasan": ["Charbhadrasan Upazila Health Complex", "Charbhadrasan Community Hospital", "Charbhadrasan Diagnostic Centre", "Charbhadrasan Rural Health Centre"],
    "Faridpur Sadar": ["Faridpur Medical College Hospital", "Faridpur General Hospital", "250 Bed District Hospital Faridpur", "Faridpur Diagnostic Centre"],
    "Madhukhali": ["Madhukhali Upazila Health Complex", "Madhukhali General Hospital", "Madhukhali Diagnostic Centre", "Madhukhali Community Clinic"],
    "Nagarkanda": ["Nagarkanda Upazila Health Complex", "Nagarkanda General Hospital", "Nagarkanda Diagnostic Centre", "Nagarkanda Community Hospital"],
    "Sadarpur": ["Sadarpur Upazila Health Complex", "Sadarpur General Hospital", "Sadarpur Diagnostic Centre", "Sadarpur Rural Health Centre"],
    "Saltha": ["Saltha Upazila Health Complex", "Saltha General Hospital", "Saltha Diagnostic Centre", "Saltha Community Clinic"]
  },
  "Gazipur": {
    "Gazipur Sadar": ["Shaheed Tajuddin Ahmad Medical College Hospital", "Gazipur District Hospital", "Popular Diagnostic Gazipur", "Gazipur General Hospital"],
    "Kaliakair": ["Kaliakair Upazila Health Complex", "Kaliakair General Hospital", "Kaliakair Diagnostic Centre", "Kaliakair Community Hospital"],
    "Kaliganj": ["Kaliganj Upazila Health Complex", "Kaliganj General Hospital", "Kaliganj Diagnostic Centre", "Kaliganj Community Clinic"],
    "Kapasia": ["Kapasia Upazila Health Complex", "Kapasia General Hospital", "Kapasia Diagnostic Centre", "Kapasia Rural Health Centre"],
    "Sreepur": ["Sreepur Upazila Health Complex", "Sreepur General Hospital", "Sreepur Diagnostic Centre", "Sreepur Community Hospital"]
  },
  "Gopalganj": {
    "Gopalganj Sadar": ["Gopalganj District Hospital (250 Bed)", "Gopalganj General Hospital", "Gopalganj Diagnostic Centre", "Sheikh Mujib Medical College Hospital"],
    "Kashiani": ["Kashiani Upazila Health Complex", "Kashiani General Hospital", "Kashiani Diagnostic Centre", "Kashiani Community Hospital"],
    "Kotalipara": ["Kotalipara Upazila Health Complex", "Kotalipara General Hospital", "Kotalipara Diagnostic Centre", "Kotalipara Community Clinic"],
    "Muksudpur": ["Muksudpur Upazila Health Complex", "Muksudpur General Hospital", "Muksudpur Diagnostic Centre", "Muksudpur Rural Health Centre"],
    "Tungipara": ["Tungipara Upazila Health Complex", "Tungipara General Hospital", "Tungipara Diagnostic Centre", "Tungipara Community Clinic"]
  },
  "Kishoreganj": {
    "Austagram": ["Austagram Upazila Health Complex", "Austagram General Hospital", "Austagram Diagnostic Centre", "Austagram Community Clinic"],
    "Bajitpur": ["Bajitpur Upazila Health Complex", "Bajitpur General Hospital", "Bajitpur Diagnostic Centre", "Bajitpur Community Hospital"],
    "Bhairab": ["Bhairab Upazila Health Complex", "Bhairab General Hospital", "Bhairab Diagnostic Centre", "Bhairab Community Hospital"],
    "Hossainpur": ["Hossainpur Upazila Health Complex", "Hossainpur General Hospital", "Hossainpur Diagnostic Centre", "Hossainpur Community Clinic"],
    "Itna": ["Itna Upazila Health Complex", "Itna General Hospital", "Itna Diagnostic Centre", "Itna Community Clinic"],
    "Karimganj": ["Karimganj Upazila Health Complex", "Karimganj General Hospital", "Karimganj Diagnostic Centre", "Karimganj Community Hospital"],
    "Katiadi": ["Katiadi Upazila Health Complex", "Katiadi General Hospital", "Katiadi Diagnostic Centre", "Katiadi Community Clinic"],
    "Kishoreganj Sadar": ["Kishoreganj District Hospital (250 Bed)", "Kishoreganj Medical College Hospital", "Kishoreganj General Hospital", "Kishoreganj Diagnostic Centre"],
    "Kuliarchar": ["Kuliarchar Upazila Health Complex", "Kuliarchar General Hospital", "Kuliarchar Diagnostic Centre", "Kuliarchar Community Clinic"],
    "Mithamain": ["Mithamain Upazila Health Complex", "Mithamain General Hospital", "Mithamain Diagnostic Centre", "Mithamain Community Clinic"],
    "Nikli": ["Nikli Upazila Health Complex", "Nikli General Hospital", "Nikli Diagnostic Centre", "Nikli Community Clinic"],
    "Pakundia": ["Pakundia Upazila Health Complex", "Pakundia General Hospital", "Pakundia Diagnostic Centre", "Pakundia Community Hospital"],
    "Tarail": ["Tarail Upazila Health Complex", "Tarail General Hospital", "Tarail Diagnostic Centre", "Tarail Community Clinic"]
  },
  "Madaripur": {
    "Kalkini": ["Kalkini Upazila Health Complex", "Kalkini General Hospital", "Kalkini Diagnostic Centre", "Kalkini Community Clinic"],
    "Madaripur Sadar": ["Madaripur District Hospital (250 Bed)", "Madaripur General Hospital", "Madaripur Diagnostic Centre", "Madaripur Medical College Hospital"],
    "Rajoir": ["Rajoir Upazila Health Complex", "Rajoir General Hospital", "Rajoir Diagnostic Centre", "Rajoir Community Clinic"],
    "Shibchar": ["Shibchar Upazila Health Complex", "Shibchar General Hospital", "Shibchar Diagnostic Centre", "Shibchar Community Hospital"]
  },
  "Manikganj": {
    "Daulatpur": ["Daulatpur Upazila Health Complex", "Daulatpur General Hospital", "Daulatpur Diagnostic Centre", "Daulatpur Community Clinic"],
    "Ghior": ["Ghior Upazila Health Complex", "Ghior General Hospital", "Ghior Diagnostic Centre", "Ghior Community Clinic"],
    "Harirampur": ["Harirampur Upazila Health Complex", "Harirampur General Hospital", "Harirampur Diagnostic Centre", "Harirampur Community Clinic"],
    "Manikganj Sadar": ["Manikganj District Hospital (100 Bed)", "Manikganj General Hospital", "Manikganj Diagnostic Centre", "Manikganj Medical College Hospital"],
    "Saturia": ["Saturia Upazila Health Complex", "Saturia General Hospital", "Saturia Diagnostic Centre", "Saturia Community Clinic"],
    "Shivalaya": ["Shivalaya Upazila Health Complex", "Shivalaya General Hospital", "Shivalaya Diagnostic Centre", "Shivalaya Community Clinic"],
    "Singair": ["Singair Upazila Health Complex", "Singair General Hospital", "Singair Diagnostic Centre", "Singair Community Hospital"]
  },
  "Munshiganj": {
    "Gazaria": ["Gazaria Upazila Health Complex", "Gazaria General Hospital", "Gazaria Diagnostic Centre", "Gazaria Community Clinic"],
    "Lohajang": ["Lohajang Upazila Health Complex", "Lohajang General Hospital", "Lohajang Diagnostic Centre", "Lohajang Community Clinic"],
    "Munshiganj Sadar": ["Munshiganj District Hospital (100 Bed)", "Munshiganj General Hospital", "Munshiganj Diagnostic Centre", "Munshiganj Medical College Hospital"],
    "Sirajdikhan": ["Sirajdikhan Upazila Health Complex", "Sirajdikhan General Hospital", "Sirajdikhan Diagnostic Centre", "Sirajdikhan Community Clinic"],
    "Sreenagar": ["Sreenagar Upazila Health Complex", "Sreenagar General Hospital", "Sreenagar Diagnostic Centre", "Sreenagar Community Hospital"],
    "Tongibari": ["Tongibari Upazila Health Complex", "Tongibari General Hospital", "Tongibari Diagnostic Centre", "Tongibari Community Clinic"]
  },
  "Narayanganj": {
    "Araihazar": ["Araihazar Upazila Health Complex", "Araihazar General Hospital", "Araihazar Diagnostic Centre", "Araihazar Community Clinic"],
    "Bandar": ["Bandar Upazila Health Complex", "Bandar General Hospital", "Bandar Diagnostic Centre", "Bandar Community Hospital"],
    "Narayanganj Sadar": ["300 Bed General Hospital Narayanganj", "Narayanganj General Hospital", "Popular Diagnostic Narayanganj", "Narayanganj Medical College Hospital"],
    "Rupganj": ["Rupganj Upazila Health Complex", "Rupganj General Hospital", "Rupganj Diagnostic Centre", "Rupganj Community Hospital"],
    "Sonargaon": ["Sonargaon Upazila Health Complex", "Sonargaon General Hospital", "Sonargaon Diagnostic Centre", "Sonargaon Community Clinic"]
  },
  "Narsingdi": {
    "Belabo": ["Belabo Upazila Health Complex", "Belabo General Hospital", "Belabo Diagnostic Centre", "Belabo Community Clinic"],
    "Monohardi": ["Monohardi Upazila Health Complex", "Monohardi General Hospital", "Monohardi Diagnostic Centre", "Monohardi Community Clinic"],
    "Narsingdi Sadar": ["Narsingdi District Hospital (100 Bed)", "Narsingdi General Hospital", "Narsingdi Diagnostic Centre", "Narsingdi Medical Centre"],
    "Palash": ["Palash Upazila Health Complex", "Palash General Hospital", "Palash Diagnostic Centre", "Palash Community Hospital"],
    "Raipura": ["Raipura Upazila Health Complex", "Raipura General Hospital", "Raipura Diagnostic Centre", "Raipura Community Clinic"],
    "Shibpur": ["Shibpur Upazila Health Complex", "Shibpur General Hospital", "Shibpur Diagnostic Centre", "Shibpur Community Hospital"]
  },
  "Rajbari": {
    "Baliakandi": ["Baliakandi Upazila Health Complex", "Baliakandi General Hospital", "Baliakandi Diagnostic Centre", "Baliakandi Community Clinic"],
    "Goalandaghat": ["Goalandaghat Upazila Health Complex", "Goalandaghat General Hospital", "Goalandaghat Diagnostic Centre", "Goalandaghat Community Clinic"],
    "Kalukhali": ["Kalukhali Upazila Health Complex", "Kalukhali General Hospital", "Kalukhali Diagnostic Centre", "Kalukhali Community Clinic"],
    "Pangsha": ["Pangsha Upazila Health Complex", "Pangsha General Hospital", "Pangsha Diagnostic Centre", "Pangsha Community Hospital"],
    "Rajbari Sadar": ["Rajbari District Hospital (100 Bed)", "Rajbari General Hospital", "Rajbari Diagnostic Centre", "Rajbari Medical Centre"]
  },
  "Shariatpur": {
    "Bhedarganj": ["Bhedarganj Upazila Health Complex", "Bhedarganj General Hospital", "Bhedarganj Diagnostic Centre", "Bhedarganj Community Clinic"],
    "Damudya": ["Damudya Upazila Health Complex", "Damudya General Hospital", "Damudya Diagnostic Centre", "Damudya Community Clinic"],
    "Gosairhat": ["Gosairhat Upazila Health Complex", "Gosairhat General Hospital", "Gosairhat Diagnostic Centre", "Gosairhat Community Clinic"],
    "Naria": ["Naria Upazila Health Complex", "Naria General Hospital", "Naria Diagnostic Centre", "Naria Community Hospital"],
    "Shariatpur Sadar": ["Shariatpur District Hospital (100 Bed)", "Shariatpur General Hospital", "Shariatpur Diagnostic Centre", "Shariatpur Medical Centre"],
    "Zajira": ["Zajira Upazila Health Complex", "Zajira General Hospital", "Zajira Diagnostic Centre", "Zajira Community Clinic"]
  },
  "Tangail": {
    "Basail": ["Basail Upazila Health Complex", "Basail General Hospital", "Basail Diagnostic Centre", "Basail Community Clinic"],
    "Bhuapur": ["Bhuapur Upazila Health Complex", "Bhuapur General Hospital", "Bhuapur Diagnostic Centre", "Bhuapur Community Clinic"],
    "Delduar": ["Delduar Upazila Health Complex", "Delduar General Hospital", "Delduar Diagnostic Centre", "Delduar Community Clinic"],
    "Dhanbari": ["Dhanbari Upazila Health Complex", "Dhanbari General Hospital", "Dhanbari Diagnostic Centre", "Dhanbari Community Clinic"],
    "Ghatail": ["Ghatail Upazila Health Complex", "Ghatail General Hospital", "Ghatail Diagnostic Centre", "Ghatail Community Hospital"],
    "Gopalpur": ["Gopalpur Upazila Health Complex", "Gopalpur General Hospital", "Gopalpur Diagnostic Centre", "Gopalpur Community Clinic"],
    "Kalihati": ["Kalihati Upazila Health Complex", "Kalihati General Hospital", "Kalihati Diagnostic Centre", "Kalihati Community Clinic"],
    "Madhupur": ["Madhupur Upazila Health Complex", "Madhupur General Hospital", "Madhupur Diagnostic Centre", "Madhupur Community Hospital"],
    "Mirzapur": ["Mirzapur Upazila Health Complex", "Mirzapur General Hospital", "Kumudini Women's Medical College & Hospital", "Mirzapur Diagnostic Centre"],
    "Nagarpur": ["Nagarpur Upazila Health Complex", "Nagarpur General Hospital", "Nagarpur Diagnostic Centre", "Nagarpur Community Clinic"],
    "Sakhipur": ["Sakhipur Upazila Health Complex", "Sakhipur General Hospital", "Sakhipur Diagnostic Centre", "Sakhipur Community Clinic"],
    "Tangail Sadar": ["Tangail District Hospital (250 Bed)", "Tangail General Hospital", "Tangail Medical College Hospital", "Tangail Diagnostic Centre"]
  },
  "Brahmanbaria": {
    "Akhaura": ["Akhaura Upazila Health Complex", "Akhaura General Hospital", "Akhaura Diagnostic Centre", "Akhaura Community Hospital"],
    "Ashuganj": ["Ashuganj Upazila Health Complex", "Ashuganj General Hospital", "Ashuganj Diagnostic Centre", "Ashuganj Community Clinic"],
    "Bancharampur": ["Bancharampur Upazila Health Complex", "Bancharampur General Hospital", "Bancharampur Diagnostic Centre", "Bancharampur Community Clinic"],
    "Brahmanbaria Sadar": ["Brahmanbaria District Hospital (250 Bed)", "Brahmanbaria General Hospital", "Brahmanbaria Medical College Hospital", "Brahmanbaria Diagnostic Centre"],
    "Bijoynagar": ["Bijoynagar Upazila Health Complex", "Bijoynagar General Hospital", "Bijoynagar Diagnostic Centre", "Bijoynagar Community Clinic"],
    "Kasba": ["Kasba Upazila Health Complex", "Kasba General Hospital", "Kasba Diagnostic Centre", "Kasba Community Hospital"],
    "Nabinagar": ["Nabinagar Upazila Health Complex", "Nabinagar General Hospital", "Nabinagar Diagnostic Centre", "Nabinagar Community Clinic"],
    "Nasirnagar": ["Nasirnagar Upazila Health Complex", "Nasirnagar General Hospital", "Nasirnagar Diagnostic Centre", "Nasirnagar Community Clinic"],
    "Sarail": ["Sarail Upazila Health Complex", "Sarail General Hospital", "Sarail Diagnostic Centre", "Sarail Community Clinic"]
  },
  "Comilla": {
    "Barura": ["Barura Upazila Health Complex", "Barura General Hospital", "Barura Diagnostic Centre", "Barura Community Clinic"],
    "Brahmanpara": ["Brahmanpara Upazila Health Complex", "Brahmanpara General Hospital", "Brahmanpara Diagnostic Centre", "Brahmanpara Community Clinic"],
    "Burichang": ["Burichang Upazila Health Complex", "Burichang General Hospital", "Burichang Diagnostic Centre", "Burichang Community Clinic"],
    "Chandina": ["Chandina Upazila Health Complex", "Chandina General Hospital", "Chandina Diagnostic Centre", "Chandina Community Hospital"],
    "Chauddagram": ["Chauddagram Upazila Health Complex", "Chauddagram General Hospital", "Chauddagram Diagnostic Centre", "Chauddagram Community Clinic"],
    "Comilla Sadar": ["Comilla Medical College Hospital", "250 Bed Comilla General Hospital", "Comilla Victoria General Hospital", "Comilla Diagnostic Centre"],
    "Comilla Sadar South": ["Comilla Sadar South Upazila Health Complex", "South Comilla General Hospital", "Comilla South Diagnostic Centre", "Comilla South Community Clinic"],
    "Daudkandi": ["Daudkandi Upazila Health Complex", "Daudkandi General Hospital", "Daudkandi Diagnostic Centre", "Daudkandi Community Hospital"],
    "Debidwar": ["Debidwar Upazila Health Complex", "Debidwar General Hospital", "Debidwar Diagnostic Centre", "Debidwar Community Clinic"],
    "Homna": ["Homna Upazila Health Complex", "Homna General Hospital", "Homna Diagnostic Centre", "Homna Community Clinic"],
    "Laksam": ["Laksam Upazila Health Complex", "Laksam General Hospital", "Laksam Diagnostic Centre", "Laksam Community Hospital"],
    "Meghna": ["Meghna Upazila Health Complex", "Meghna General Hospital", "Meghna Diagnostic Centre", "Meghna Community Clinic"],
    "Monohorgonj": ["Monohorgonj Upazila Health Complex", "Monohorgonj General Hospital", "Monohorgonj Diagnostic Centre", "Monohorgonj Community Clinic"],
    "Muradnagar": ["Muradnagar Upazila Health Complex", "Muradnagar General Hospital", "Muradnagar Diagnostic Centre", "Muradnagar Community Hospital"],
    "Nangalkot": ["Nangalkot Upazila Health Complex", "Nangalkot General Hospital", "Nangalkot Diagnostic Centre", "Nangalkot Community Clinic"],
    "Titas": ["Titas Upazila Health Complex", "Titas General Hospital", "Titas Diagnostic Centre", "Titas Community Clinic"]
  },
  "Chandpur": {
    "Chandpur Sadar": ["Chandpur District Hospital (250 Bed)", "Chandpur General Hospital", "Chandpur Medical College Hospital", "Chandpur Diagnostic Centre"],
    "Faridganj": ["Faridganj Upazila Health Complex", "Faridganj General Hospital", "Faridganj Diagnostic Centre", "Faridganj Community Clinic"],
    "Haimchar": ["Haimchar Upazila Health Complex", "Haimchar General Hospital", "Haimchar Diagnostic Centre", "Haimchar Community Clinic"],
    "Haziganj": ["Haziganj Upazila Health Complex", "Haziganj General Hospital", "Haziganj Diagnostic Centre", "Haziganj Community Hospital"],
    "Kachua": ["Kachua Upazila Health Complex", "Kachua General Hospital", "Kachua Diagnostic Centre", "Kachua Community Clinic"],
    "Matlab North": ["Matlab North Upazila Health Complex", "Matlab North General Hospital", "Matlab North Diagnostic Centre", "Matlab North Community Clinic"],
    "Matlab South": ["Matlab Upazila Health Complex (ICDDR,B)", "Matlab South General Hospital", "Matlab Diagnostic Centre", "Matlab Community Hospital"],
    "Shahrasti": ["Shahrasti Upazila Health Complex", "Shahrasti General Hospital", "Shahrasti Diagnostic Centre", "Shahrasti Community Clinic"]
  },
  "Lakshmipur": {
    "Kamalnagar": ["Kamalnagar Upazila Health Complex", "Kamalnagar General Hospital", "Kamalnagar Diagnostic Centre", "Kamalnagar Community Clinic"],
    "Lakshmipur Sadar": ["Lakshmipur District Hospital (100 Bed)", "Lakshmipur General Hospital", "Lakshmipur Diagnostic Centre", "Lakshmipur Medical Centre"],
    "Raipur": ["Raipur Upazila Health Complex", "Raipur General Hospital", "Raipur Diagnostic Centre", "Raipur Community Hospital"],
    "Ramganj": ["Ramganj Upazila Health Complex", "Ramganj General Hospital", "Ramganj Diagnostic Centre", "Ramganj Community Clinic"],
    "Ramgati": ["Ramgati Upazila Health Complex", "Ramgati General Hospital", "Ramgati Diagnostic Centre", "Ramgati Community Clinic"]
  },
  "Noakhali": {
    "Begumganj": ["Begumganj Upazila Health Complex", "Begumganj General Hospital", "Begumganj Diagnostic Centre", "Begumganj Community Hospital"],
    "Chatkhil": ["Chatkhil Upazila Health Complex", "Chatkhil General Hospital", "Chatkhil Diagnostic Centre", "Chatkhil Community Clinic"],
    "Companiganj": ["Companiganj Upazila Health Complex", "Companiganj General Hospital", "Companiganj Diagnostic Centre", "Companiganj Community Clinic"],
    "Hatiya": ["Hatiya Upazila Health Complex", "Hatiya General Hospital", "Hatiya Diagnostic Centre", "Hatiya Community Clinic"],
    "Kabirhat": ["Kabirhat Upazila Health Complex", "Kabirhat General Hospital", "Kabirhat Diagnostic Centre", "Kabirhat Community Clinic"],
    "Noakhali Sadar": ["Noakhali General Hospital (250 Bed)", "Noakhali Medical College Hospital", "Noakhali Diagnostic Centre", "Noakhali General Hospital"],
    "Senbagh": ["Senbagh Upazila Health Complex", "Senbagh General Hospital", "Senbagh Diagnostic Centre", "Senbagh Community Clinic"],
    "Sonaimuri": ["Sonaimuri Upazila Health Complex", "Sonaimuri General Hospital", "Sonaimuri Diagnostic Centre", "Sonaimuri Community Hospital"],
    "Subarnachar": ["Subarnachar Upazila Health Complex", "Subarnachar General Hospital", "Subarnachar Diagnostic Centre", "Subarnachar Community Clinic"]
  },
  "Feni": {
    "Chhagalnaiya": ["Chhagalnaiya Upazila Health Complex", "Chhagalnaiya General Hospital", "Chhagalnaiya Diagnostic Centre", "Chhagalnaiya Community Clinic"],
    "Daganbhuiyan": ["Daganbhuiyan Upazila Health Complex", "Daganbhuiyan General Hospital", "Daganbhuiyan Diagnostic Centre", "Daganbhuiyan Community Clinic"],
    "Feni Sadar": ["Feni District Hospital (250 Bed)", "Feni General Hospital", "Feni Medical College Hospital", "Feni Diagnostic Centre"],
    "Fulgazi": ["Fulgazi Upazila Health Complex", "Fulgazi General Hospital", "Fulgazi Diagnostic Centre", "Fulgazi Community Clinic"],
    "Parshuram": ["Parshuram Upazila Health Complex", "Parshuram General Hospital", "Parshuram Diagnostic Centre", "Parshuram Community Hospital"],
    "Sonagazi": ["Sonagazi Upazila Health Complex", "Sonagazi General Hospital", "Sonagazi Diagnostic Centre", "Sonagazi Community Clinic"]
  },
  "Khagrachhari": {
    "Dighinala": ["Dighinala Upazila Health Complex", "Dighinala General Hospital", "Dighinala Diagnostic Centre", "Dighinala Community Clinic"],
    "Khagrachhari": ["Khagrachhari District Hospital (100 Bed)", "Khagrachhari General Hospital", "Khagrachhari Diagnostic Centre", "Khagrachhari Medical Centre"],
    "Lakshmichhari": ["Lakshmichhari Upazila Health Complex", "Lakshmichhari General Hospital", "Lakshmichhari Diagnostic Centre", "Lakshmichhari Community Clinic"],
    "Mahalchhari": ["Mahalchhari Upazila Health Complex", "Mahalchhari General Hospital", "Mahalchhari Diagnostic Centre", "Mahalchhari Community Clinic"],
    "Manikchhari": ["Manikchhari Upazila Health Complex", "Manikchhari General Hospital", "Manikchhari Diagnostic Centre", "Manikchhari Community Clinic"],
    "Matiranga": ["Matiranga Upazila Health Complex", "Matiranga General Hospital", "Matiranga Diagnostic Centre", "Matiranga Community Hospital"],
    "Panchhari": ["Panchhari Upazila Health Complex", "Panchhari General Hospital", "Panchhari Diagnostic Centre", "Panchhari Community Clinic"],
    "Ramgarh": ["Ramgarh Upazila Health Complex", "Ramgarh General Hospital", "Ramgarh Diagnostic Centre", "Ramgarh Community Hospital"]
  },
  "Rangamati": {
    "Bagaichhari": ["Bagaichhari Upazila Health Complex", "Bagaichhari General Hospital", "Bagaichhari Diagnostic Centre", "Bagaichhari Community Clinic"],
    "Barkal": ["Barkal Upazila Health Complex", "Barkal General Hospital", "Barkal Diagnostic Centre", "Barkal Community Clinic"],
    "Kawkhali": ["Kawkhali Upazila Health Complex", "Kawkhali General Hospital", "Kawkhali Diagnostic Centre", "Kawkhali Community Clinic"],
    "Belaichhari": ["Belaichhari Upazila Health Complex", "Belaichhari General Hospital", "Belaichhari Diagnostic Centre", "Belaichhari Community Clinic"],
    "Kaptai": ["Kaptai Upazila Health Complex", "Kaptai General Hospital", "Kaptai Diagnostic Centre", "Kaptai Community Hospital"],
    "Juraichhari": ["Juraichhari Upazila Health Complex", "Juraichhari General Hospital", "Juraichhari Diagnostic Centre", "Juraichhari Community Clinic"],
    "Langadu": ["Langadu Upazila Health Complex", "Langadu General Hospital", "Langadu Diagnostic Centre", "Langadu Community Clinic"],
    "Naniarchar": ["Naniarchar Upazila Health Complex", "Naniarchar General Hospital", "Naniarchar Diagnostic Centre", "Naniarchar Community Clinic"],
    "Rajasthali": ["Rajasthali Upazila Health Complex", "Rajasthali General Hospital", "Rajasthali Diagnostic Centre", "Rajasthali Community Clinic"],
    "Rangamati Sadar": ["Rangamati District Hospital (100 Bed)", "Rangamati General Hospital", "Rangamati Diagnostic Centre", "Rangamati Medical Centre"]
  },
  "Bandarban": {
    "Ali Kadam": ["Ali Kadam Upazila Health Complex", "Ali Kadam General Hospital", "Ali Kadam Diagnostic Centre", "Ali Kadam Community Clinic"],
    "Bandarban Sadar": ["Bandarban District Hospital (100 Bed)", "Bandarban General Hospital", "Bandarban Diagnostic Centre", "Bandarban Medical Centre"],
    "Lama": ["Lama Upazila Health Complex", "Lama General Hospital", "Lama Diagnostic Centre", "Lama Community Hospital"],
    "Naikhongchhari": ["Naikhongchhari Upazila Health Complex", "Naikhongchhari General Hospital", "Naikhongchhari Diagnostic Centre", "Naikhongchhari Community Clinic"],
    "Rowangchhari": ["Rowangchhari Upazila Health Complex", "Rowangchhari General Hospital", "Rowangchhari Diagnostic Centre", "Rowangchhari Community Clinic"],
    "Ruma": ["Ruma Upazila Health Complex", "Ruma General Hospital", "Ruma Diagnostic Centre", "Ruma Community Clinic"],
    "Thanchi": ["Thanchi Upazila Health Complex", "Thanchi General Hospital", "Thanchi Diagnostic Centre", "Thanchi Community Clinic"]
  },
  "Chittagong": {
    "Anwara": ["Anwara Upazila Health Complex", "Anwara General Hospital", "Anwara Diagnostic Centre", "Anwara Community Hospital"],
    "Banshkhali": ["Banshkhali Upazila Health Complex", "Banshkhali General Hospital", "Banshkhali Diagnostic Centre", "Banshkhali Community Clinic"],
    "Boalkhali": ["Boalkhali Upazila Health Complex", "Boalkhali General Hospital", "Boalkhali Diagnostic Centre", "Boalkhali Community Clinic"],
    "Chandanaish": ["Chandanaish Upazila Health Complex", "Chandanaish General Hospital", "Chandanaish Diagnostic Centre", "Chandanaish Community Clinic"],
    "Fatikchhari": ["Fatikchhari Upazila Health Complex", "Fatikchhari General Hospital", "Fatikchhari Diagnostic Centre", "Fatikchhari Community Hospital"],
    "Hathazari": ["Hathazari Upazila Health Complex", "Hathazari General Hospital", "Hathazari Diagnostic Centre", "Hathazari Community Hospital"],
    "Lohagara": ["Lohagara Upazila Health Complex", "Lohagara General Hospital", "Lohagara Diagnostic Centre", "Lohagara Community Clinic"],
    "Mirsharai": ["Mirsharai Upazila Health Complex", "Mirsharai General Hospital", "Mirsharai Diagnostic Centre", "Mirsharai Community Hospital"],
    "Patiya": ["Patiya Upazila Health Complex", "Patiya General Hospital", "Patiya Diagnostic Centre", "Patiya Community Hospital"],
    "Rangunia": ["Rangunia Upazila Health Complex", "Rangunia General Hospital", "Rangunia Diagnostic Centre", "Rangunia Community Clinic"],
    "Raozan": ["Raozan Upazila Health Complex", "Raozan General Hospital", "Raozan Diagnostic Centre", "Raozan Community Hospital"],
    "Sandwip": ["Sandwip Upazila Health Complex", "Sandwip General Hospital", "Sandwip Diagnostic Centre", "Sandwip Community Clinic"],
    "Satkania": ["Satkania Upazila Health Complex", "Satkania General Hospital", "Satkania Diagnostic Centre", "Satkania Community Hospital"],
    "Sitakunda": ["Sitakunda Upazila Health Complex", "Sitakunda General Hospital", "Sitakunda Diagnostic Centre", "Sitakunda Community Hospital"],
    "Chittagong City": ["Chittagong Medical College Hospital", "Chittagong General Hospital (250 Bed)", "Max Hospital Chittagong", "Chittagong Ma-O-Shishu Hospital"]
  },
  "Cox's Bazar": {
    "Chakaria": ["Chakaria Upazila Health Complex", "Chakaria General Hospital", "Chakaria Diagnostic Centre", "Chakaria Community Hospital"],
    "Cox's Bazar Sadar": ["Cox's Bazar District Hospital (250 Bed)", "Cox's Bazar General Hospital", "Cox's Bazar Medical College Hospital", "Cox's Bazar Diagnostic Centre"],
    "Kutubdia": ["Kutubdia Upazila Health Complex", "Kutubdia General Hospital", "Kutubdia Diagnostic Centre", "Kutubdia Community Clinic"],
    "Maheshkhali": ["Maheshkhali Upazila Health Complex", "Maheshkhali General Hospital", "Maheshkhali Diagnostic Centre", "Maheshkhali Community Hospital"],
    "Ramu": ["Ramu Upazila Health Complex", "Ramu General Hospital", "Ramu Diagnostic Centre", "Ramu Community Hospital"],
    "Teknaf": ["Teknaf Upazila Health Complex", "Teknaf General Hospital", "Teknaf Diagnostic Centre", "Teknaf Community Clinic"],
    "Ukhia": ["Ukhia Upazila Health Complex", "Ukhia General Hospital", "Ukhia Diagnostic Centre", "Ukhia Community Clinic"],
    "Pekua": ["Pekua Upazila Health Complex", "Pekua General Hospital", "Pekua Diagnostic Centre", "Pekua Community Clinic"]
  },
  "Sylhet": {
    "Balaganj": ["Balaganj Upazila Health Complex", "Balaganj General Hospital", "Balaganj Diagnostic Centre", "Balaganj Community Clinic"],
    "Beanibazar": ["Beanibazar Upazila Health Complex", "Beanibazar General Hospital", "Beanibazar Diagnostic Centre", "Beanibazar Community Hospital"],
    "Bishwanath": ["Bishwanath Upazila Health Complex", "Bishwanath General Hospital", "Bishwanath Diagnostic Centre", "Bishwanath Community Clinic"],
    "Companiganj": ["Companiganj Upazila Health Complex (Sylhet)", "Companiganj General Hospital", "Companiganj Diagnostic Centre", "Companiganj Community Clinic"],
    "Dakshin Surma": ["Dakshin Surma Upazila Health Complex", "Dakshin Surma General Hospital", "Dakshin Surma Diagnostic Centre", "Dakshin Surma Community Clinic"],
    "Fenchuganj": ["Fenchuganj Upazila Health Complex", "Fenchuganj General Hospital", "Fenchuganj Diagnostic Centre", "Fenchuganj Community Clinic"],
    "Golapganj": ["Golapganj Upazila Health Complex", "Golapganj General Hospital", "Golapganj Diagnostic Centre", "Golapganj Community Hospital"],
    "Gowainghat": ["Gowainghat Upazila Health Complex", "Gowainghat General Hospital", "Gowainghat Diagnostic Centre", "Gowainghat Community Clinic"],
    "Jaintiapur": ["Jaintiapur Upazila Health Complex", "Jaintiapur General Hospital", "Jaintiapur Diagnostic Centre", "Jaintiapur Community Hospital"],
    "Kanaighat": ["Kanaighat Upazila Health Complex", "Kanaighat General Hospital", "Kanaighat Diagnostic Centre", "Kanaighat Community Clinic"],
    "Osmaninagar": ["Osmaninagar Upazila Health Complex", "Osmaninagar General Hospital", "Osmaninagar Diagnostic Centre", "Osmaninagar Community Clinic"],
    "Sylhet Sadar": ["Sylhet MAG Osmani Medical College Hospital", "Sylhet District Hospital (250 Bed)", "Mount Adora Hospital Sylhet", "Sylhet Women's Medical College Hospital"],
    "Zakiganj": ["Zakiganj Upazila Health Complex", "Zakiganj General Hospital", "Zakiganj Diagnostic Centre", "Zakiganj Community Clinic"]
  },
  "Moulvibazar": {
    "Barlekha": ["Barlekha Upazila Health Complex", "Barlekha General Hospital", "Barlekha Diagnostic Centre", "Barlekha Community Clinic"],
    "Juri": ["Juri Upazila Health Complex", "Juri General Hospital", "Juri Diagnostic Centre", "Juri Community Clinic"],
    "Kamalganj": ["Kamalganj Upazila Health Complex", "Kamalganj General Hospital", "Kamalganj Diagnostic Centre", "Kamalganj Community Hospital"],
    "Kulaura": ["Kulaura Upazila Health Complex", "Kulaura General Hospital", "Kulaura Diagnostic Centre", "Kulaura Community Hospital"],
    "Moulvibazar Sadar": ["Moulvibazar District Hospital (100 Bed)", "Moulvibazar General Hospital", "Moulvibazar Diagnostic Centre", "Moulvibazar Medical Centre"],
    "Rajnagar": ["Rajnagar Upazila Health Complex", "Rajnagar General Hospital", "Rajnagar Diagnostic Centre", "Rajnagar Community Clinic"],
    "Sreemangal": ["Sreemangal Upazila Health Complex", "Sreemangal General Hospital", "Sreemangal Diagnostic Centre", "Sreemangal Community Hospital"]
  },
  "Habiganj": {
    "Ajmiriganj": ["Ajmiriganj Upazila Health Complex", "Ajmiriganj General Hospital", "Ajmiriganj Diagnostic Centre", "Ajmiriganj Community Clinic"],
    "Bahubal": ["Bahubal Upazila Health Complex", "Bahubal General Hospital", "Bahubal Diagnostic Centre", "Bahubal Community Clinic"],
    "Baniyachong": ["Baniyachong Upazila Health Complex", "Baniyachong General Hospital", "Baniyachong Diagnostic Centre", "Baniyachong Community Hospital"],
    "Chunarughat": ["Chunarughat Upazila Health Complex", "Chunarughat General Hospital", "Chunarughat Diagnostic Centre", "Chunarughat Community Hospital"],
    "Habiganj Sadar": ["Habiganj District Hospital (100 Bed)", "Habiganj General Hospital", "Habiganj Diagnostic Centre", "Habiganj Medical Centre"],
    "Lakhai": ["Lakhai Upazila Health Complex", "Lakhai General Hospital", "Lakhai Diagnostic Centre", "Lakhai Community Clinic"],
    "Madhabpur": ["Madhabpur Upazila Health Complex", "Madhabpur General Hospital", "Madhabpur Diagnostic Centre", "Madhabpur Community Hospital"],
    "Nabiganj": ["Nabiganj Upazila Health Complex", "Nabiganj General Hospital", "Nabiganj Diagnostic Centre", "Nabiganj Community Hospital"],
    "Shayestaganj": ["Shayestaganj Upazila Health Complex", "Shayestaganj General Hospital", "Shayestaganj Diagnostic Centre", "Shayestaganj Community Clinic"]
  },
  "Sunamganj": {
    "Bishwamvarpur": ["Bishwamvarpur Upazila Health Complex", "Bishwamvarpur General Hospital", "Bishwamvarpur Diagnostic Centre", "Bishwamvarpur Community Clinic"],
    "Chhatak": ["Chhatak Upazila Health Complex", "Chhatak General Hospital", "Chhatak Diagnostic Centre", "Chhatak Community Hospital"],
    "Dakshin Sunamganj": ["Dakshin Sunamganj Upazila Health Complex", "Dakshin Sunamganj General Hospital", "Dakshin Sunamganj Diagnostic Centre", "Dakshin Sunamganj Community Clinic"],
    "Derai": ["Derai Upazila Health Complex", "Derai General Hospital", "Derai Diagnostic Centre", "Derai Community Clinic"],
    "Dharamapasha": ["Dharamapasha Upazila Health Complex", "Dharamapasha General Hospital", "Dharamapasha Diagnostic Centre", "Dharamapasha Community Clinic"],
    "Dowarabazar": ["Dowarabazar Upazila Health Complex", "Dowarabazar General Hospital", "Dowarabazar Diagnostic Centre", "Dowarabazar Community Clinic"],
    "Jagannathpur": ["Jagannathpur Upazila Health Complex", "Jagannathpur General Hospital", "Jagannathpur Diagnostic Centre", "Jagannathpur Community Hospital"],
    "Jamalganj": ["Jamalganj Upazila Health Complex", "Jamalganj General Hospital", "Jamalganj Diagnostic Centre", "Jamalganj Community Clinic"],
    "Sullah": ["Sullah Upazila Health Complex", "Sullah General Hospital", "Sullah Diagnostic Centre", "Sullah Community Clinic"],
    "Sunamganj Sadar": ["Sunamganj District Hospital (100 Bed)", "Sunamganj General Hospital", "Sunamganj Diagnostic Centre", "Sunamganj Medical Centre"],
    "Tahirpur": ["Tahirpur Upazila Health Complex", "Tahirpur General Hospital", "Tahirpur Diagnostic Centre", "Tahirpur Community Clinic"]
  },
  "Khulna": {
    "Batiaghata": ["Batiaghata Upazila Health Complex", "Batiaghata General Hospital", "Batiaghata Diagnostic Centre", "Batiaghata Community Clinic"],
    "Dacope": ["Dacope Upazila Health Complex", "Dacope General Hospital", "Dacope Diagnostic Centre", "Dacope Community Clinic"],
    "Dumuria": ["Dumuria Upazila Health Complex", "Dumuria General Hospital", "Dumuria Diagnostic Centre", "Dumuria Community Hospital"],
    "Dighalia": ["Dighalia Upazila Health Complex", "Dighalia General Hospital", "Dighalia Diagnostic Centre", "Dighalia Community Clinic"],
    "Koyra": ["Koyra Upazila Health Complex", "Koyra General Hospital", "Koyra Diagnostic Centre", "Koyra Community Clinic"],
    "Paikgacha": ["Paikgacha Upazila Health Complex", "Paikgacha General Hospital", "Paikgacha Diagnostic Centre", "Paikgacha Community Hospital"],
    "Phultala": ["Phultala Upazila Health Complex", "Phultala General Hospital", "Phultala Diagnostic Centre", "Phultala Community Clinic"],
    "Rupsha": ["Rupsha Upazila Health Complex", "Rupsha General Hospital", "Rupsha Diagnostic Centre", "Rupsha Community Clinic"],
    "Terokhada": ["Terokhada Upazila Health Complex", "Terokhada General Hospital", "Terokhada Diagnostic Centre", "Terokhada Community Clinic"],
    "Khulna City": ["Khulna Medical College Hospital", "250 Bed General Hospital Khulna", "Khulna City Medical Centre", "Ad-Din Akij Medical College Hospital"]
  },
  "Bagerhat": {
    "Bagerhat Sadar": ["Bagerhat District Hospital (100 Bed)", "Bagerhat General Hospital", "Bagerhat Diagnostic Centre", "Bagerhat Medical Centre"],
    "Chitalmari": ["Chitalmari Upazila Health Complex", "Chitalmari General Hospital", "Chitalmari Diagnostic Centre", "Chitalmari Community Clinic"],
    "Fakirhat": ["Fakirhat Upazila Health Complex", "Fakirhat General Hospital", "Fakirhat Diagnostic Centre", "Fakirhat Community Clinic"],
    "Kachua": ["Kachua Upazila Health Complex (Bagerhat)", "Kachua General Hospital", "Kachua Diagnostic Centre", "Kachua Community Clinic"],
    "Mollahat": ["Mollahat Upazila Health Complex", "Mollahat General Hospital", "Mollahat Diagnostic Centre", "Mollahat Community Clinic"],
    "Mongla": ["Mongla Upazila Health Complex", "Mongla Port Hospital", "Mongla Diagnostic Centre", "Mongla Community Hospital"],
    "Morrelganj": ["Morrelganj Upazila Health Complex", "Morrelganj General Hospital", "Morrelganj Diagnostic Centre", "Morrelganj Community Hospital"],
    "Rampal": ["Rampal Upazila Health Complex", "Rampal General Hospital", "Rampal Diagnostic Centre", "Rampal Community Clinic"],
    "Sarankhola": ["Sarankhola Upazila Health Complex", "Sarankhola General Hospital", "Sarankhola Diagnostic Centre", "Sarankhola Community Clinic"]
  },
  "Chuadanga": {
    "Alamdanga": ["Alamdanga Upazila Health Complex", "Alamdanga General Hospital", "Alamdanga Diagnostic Centre", "Alamdanga Community Hospital"],
    "Chuadanga Sadar": ["Chuadanga District Hospital (100 Bed)", "Chuadanga General Hospital", "Chuadanga Diagnostic Centre", "Chuadanga Medical Centre"],
    "Damurhuda": ["Damurhuda Upazila Health Complex", "Damurhuda General Hospital", "Damurhuda Diagnostic Centre", "Damurhuda Community Clinic"],
    "Jibannagar": ["Jibannagar Upazila Health Complex", "Jibannagar General Hospital", "Jibannagar Diagnostic Centre", "Jibannagar Community Clinic"]
  },
  "Jessore": {
    "Abhaynagar": ["Abhaynagar Upazila Health Complex", "Abhaynagar General Hospital", "Abhaynagar Diagnostic Centre", "Abhaynagar Community Clinic"],
    "Bagherpara": ["Bagherpara Upazila Health Complex", "Bagherpara General Hospital", "Bagherpara Diagnostic Centre", "Bagherpara Community Clinic"],
    "Chaugachha": ["Chaugachha Upazila Health Complex", "Chaugachha General Hospital", "Chaugachha Diagnostic Centre", "Chaugachha Community Clinic"],
    "Jhikargachha": ["Jhikargachha Upazila Health Complex", "Jhikargachha General Hospital", "Jhikargachha Diagnostic Centre", "Jhikargachha Community Hospital"],
    "Keshabpur": ["Keshabpur Upazila Health Complex", "Keshabpur General Hospital", "Keshabpur Diagnostic Centre", "Keshabpur Community Hospital"],
    "Jessore Sadar": ["Jessore (Jashore) General Hospital (250 Bed)", "Jessore Medical College Hospital", "Jessore General Hospital", "Jessore Diagnostic Centre"],
    "Manirampur": ["Manirampur Upazila Health Complex", "Manirampur General Hospital", "Manirampur Diagnostic Centre", "Manirampur Community Hospital"],
    "Sharsha": ["Sharsha Upazila Health Complex", "Sharsha General Hospital", "Sharsha Diagnostic Centre", "Sharsha Community Clinic"]
  },
  "Jhenaidah": {
    "Harinakunda": ["Harinakunda Upazila Health Complex", "Harinakunda General Hospital", "Harinakunda Diagnostic Centre", "Harinakunda Community Clinic"],
    "Jhenaidah Sadar": ["Jhenaidah District Hospital (100 Bed)", "Jhenaidah General Hospital", "Jhenaidah Diagnostic Centre", "Jhenaidah Medical Centre"],
    "Kaliganj": ["Kaliganj Upazila Health Complex (Jhenaidah)", "Kaliganj General Hospital", "Kaliganj Diagnostic Centre", "Kaliganj Community Clinic"],
    "Kotchandpur": ["Kotchandpur Upazila Health Complex", "Kotchandpur General Hospital", "Kotchandpur Diagnostic Centre", "Kotchandpur Community Clinic"],
    "Maheshpur": ["Maheshpur Upazila Health Complex", "Maheshpur General Hospital", "Maheshpur Diagnostic Centre", "Maheshpur Community Hospital"],
    "Shailkupa": ["Shailkupa Upazila Health Complex", "Shailkupa General Hospital", "Shailkupa Diagnostic Centre", "Shailkupa Community Clinic"]
  },
  "Kushtia": {
    "Bheramara": ["Bheramara Upazila Health Complex", "Bheramara General Hospital", "Bheramara Diagnostic Centre", "Bheramara Community Hospital"],
    "Daulatpur": ["Daulatpur Upazila Health Complex (Kushtia)", "Daulatpur General Hospital", "Daulatpur Diagnostic Centre", "Daulatpur Community Clinic"],
    "Khoksa": ["Khoksa Upazila Health Complex", "Khoksa General Hospital", "Khoksa Diagnostic Centre", "Khoksa Community Clinic"],
    "Kumarkhali": ["Kumarkhali Upazila Health Complex", "Kumarkhali General Hospital", "Kumarkhali Diagnostic Centre", "Kumarkhali Community Hospital"],
    "Kushtia Sadar": ["Kushtia District Hospital (250 Bed)", "Kushtia Medical College Hospital", "Kushtia General Hospital", "Kushtia Diagnostic Centre"],
    "Mirpur": ["Mirpur Upazila Health Complex (Kushtia)", "Mirpur General Hospital (Kushtia)", "Mirpur Diagnostic Centre (Kushtia)", "Mirpur Community Clinic (Kushtia)"]
  },
  "Magura": {
    "Magura Sadar": ["Magura District Hospital (100 Bed)", "Magura General Hospital", "Magura Diagnostic Centre", "Magura Medical Centre"],
    "Mohammadpur": ["Mohammadpur Upazila Health Complex (Magura)", "Mohammadpur General Hospital (Magura)", "Mohammadpur Diagnostic Centre (Magura)", "Mohammadpur Community Clinic"],
    "Shalikha": ["Shalikha Upazila Health Complex", "Shalikha General Hospital", "Shalikha Diagnostic Centre", "Shalikha Community Clinic"],
    "Sreepur": ["Sreepur Upazila Health Complex (Magura)", "Sreepur General Hospital (Magura)", "Sreepur Diagnostic Centre (Magura)", "Sreepur Community Clinic"]
  },
  "Meherpur": {
    "Gangni": ["Gangni Upazila Health Complex", "Gangni General Hospital", "Gangni Diagnostic Centre", "Gangni Community Hospital"],
    "Meherpur Sadar": ["Meherpur District Hospital (100 Bed)", "Meherpur General Hospital", "Meherpur Diagnostic Centre", "Meherpur Medical Centre"],
    "Mujibnagar": ["Mujibnagar Upazila Health Complex", "Mujibnagar General Hospital", "Mujibnagar Diagnostic Centre", "Mujibnagar Community Clinic"]
  },
  "Narail": {
    "Kalia": ["Kalia Upazila Health Complex", "Kalia General Hospital", "Kalia Diagnostic Centre", "Kalia Community Hospital"],
    "Lohagara": ["Lohagara Upazila Health Complex (Narail)", "Lohagara General Hospital (Narail)", "Lohagara Diagnostic Centre (Narail)", "Lohagara Community Clinic"],
    "Narail Sadar": ["Narail District Hospital (100 Bed)", "Narail General Hospital", "Narail Diagnostic Centre", "Narail Medical Centre"]
  },
  "Satkhira": {
    "Assasuni": ["Assasuni Upazila Health Complex", "Assasuni General Hospital", "Assasuni Diagnostic Centre", "Assasuni Community Clinic"],
    "Debhata": ["Debhata Upazila Health Complex", "Debhata General Hospital", "Debhata Diagnostic Centre", "Debhata Community Clinic"],
    "Kalaroa": ["Kalaroa Upazila Health Complex", "Kalaroa General Hospital", "Kalaroa Diagnostic Centre", "Kalaroa Community Hospital"],
    "Kaliganj": ["Kaliganj Upazila Health Complex (Satkhira)", "Kaliganj General Hospital (Satkhira)", "Kaliganj Diagnostic Centre (Satkhira)", "Kaliganj Community Clinic"],
    "Satkhira Sadar": ["Satkhira District Hospital (100 Bed)", "Satkhira General Hospital", "Satkhira Medical College Hospital", "Satkhira Diagnostic Centre"],
    "Shyamnagar": ["Shyamnagar Upazila Health Complex", "Shyamnagar General Hospital", "Shyamnagar Diagnostic Centre", "Shyamnagar Community Hospital"],
    "Tala": ["Tala Upazila Health Complex", "Tala General Hospital", "Tala Diagnostic Centre", "Tala Community Clinic"]
  },
  "Barishal": {
    "Agailjhara": ["Agailjhara Upazila Health Complex", "Agailjhara General Hospital", "Agailjhara Diagnostic Centre", "Agailjhara Community Clinic"],
    "Babuganj": ["Babuganj Upazila Health Complex", "Babuganj General Hospital", "Babuganj Diagnostic Centre", "Babuganj Community Clinic"],
    "Bakerganj": ["Bakerganj Upazila Health Complex", "Bakerganj General Hospital", "Bakerganj Diagnostic Centre", "Bakerganj Community Hospital"],
    "Banaripara": ["Banaripara Upazila Health Complex", "Banaripara General Hospital", "Banaripara Diagnostic Centre", "Banaripara Community Clinic"],
    "Gaurnadi": ["Gaurnadi Upazila Health Complex", "Gaurnadi General Hospital", "Gaurnadi Diagnostic Centre", "Gaurnadi Community Clinic"],
    "Hizla": ["Hizla Upazila Health Complex", "Hizla General Hospital", "Hizla Diagnostic Centre", "Hizla Community Clinic"],
    "Barishal Sadar": ["Sher-E-Bangla Medical College Hospital Barishal", "250 Bed General Hospital Barishal", "Barishal General Hospital", "Barishal Diagnostic Centre"],
    "Mehendiganj": ["Mehendiganj Upazila Health Complex", "Mehendiganj General Hospital", "Mehendiganj Diagnostic Centre", "Mehendiganj Community Hospital"],
    "Muladi": ["Muladi Upazila Health Complex", "Muladi General Hospital", "Muladi Diagnostic Centre", "Muladi Community Clinic"],
    "Wazirpur": ["Wazirpur Upazila Health Complex", "Wazirpur General Hospital", "Wazirpur Diagnostic Centre", "Wazirpur Community Clinic"]
  },
  "Barguna": {
    "Amtali": ["Amtali Upazila Health Complex", "Amtali General Hospital", "Amtali Diagnostic Centre", "Amtali Community Hospital"],
    "Bamna": ["Bamna Upazila Health Complex", "Bamna General Hospital", "Bamna Diagnostic Centre", "Bamna Community Clinic"],
    "Barguna Sadar": ["Barguna District Hospital (100 Bed)", "Barguna General Hospital", "Barguna Diagnostic Centre", "Barguna Medical Centre"],
    "Betagi": ["Betagi Upazila Health Complex", "Betagi General Hospital", "Betagi Diagnostic Centre", "Betagi Community Clinic"],
    "Patharghata": ["Patharghata Upazila Health Complex", "Patharghata General Hospital", "Patharghata Diagnostic Centre", "Patharghata Community Hospital"],
    "Taltali": ["Taltali Upazila Health Complex", "Taltali General Hospital", "Taltali Diagnostic Centre", "Taltali Community Clinic"]
  },
  "Bhola": {
    "Bhola Sadar": ["Bhola District Hospital (100 Bed)", "Bhola General Hospital", "Bhola Diagnostic Centre", "Bhola Medical Centre"],
    "Burhanuddin": ["Burhanuddin Upazila Health Complex", "Burhanuddin General Hospital", "Burhanuddin Diagnostic Centre", "Burhanuddin Community Hospital"],
    "Char Fasson": ["Char Fasson Upazila Health Complex", "Char Fasson General Hospital", "Char Fasson Diagnostic Centre", "Char Fasson Community Clinic"],
    "Daulatkhan": ["Daulatkhan Upazila Health Complex", "Daulatkhan General Hospital", "Daulatkhan Diagnostic Centre", "Daulatkhan Community Clinic"],
    "Lalmohan": ["Lalmohan Upazila Health Complex", "Lalmohan General Hospital", "Lalmohan Diagnostic Centre", "Lalmohan Community Hospital"],
    "Manpura": ["Manpura Upazila Health Complex", "Manpura General Hospital", "Manpura Diagnostic Centre", "Manpura Community Clinic"],
    "Tazumuddin": ["Tazumuddin Upazila Health Complex", "Tazumuddin General Hospital", "Tazumuddin Diagnostic Centre", "Tazumuddin Community Clinic"]
  },
  "Jhalokati": {
    "Jhalokati Sadar": ["Jhalokati District Hospital (100 Bed)", "Jhalokati General Hospital", "Jhalokati Diagnostic Centre", "Jhalokati Medical Centre"],
    "Kathalia": ["Kathalia Upazila Health Complex", "Kathalia General Hospital", "Kathalia Diagnostic Centre", "Kathalia Community Clinic"],
    "Nalchity": ["Nalchity Upazila Health Complex", "Nalchity General Hospital", "Nalchity Diagnostic Centre", "Nalchity Community Clinic"],
    "Rajapur": ["Rajapur Upazila Health Complex", "Rajapur General Hospital", "Rajapur Diagnostic Centre", "Rajapur Community Hospital"]
  },
  "Patuakhali": {
    "Bauphal": ["Bauphal Upazila Health Complex", "Bauphal General Hospital", "Bauphal Diagnostic Centre", "Bauphal Community Hospital"],
    "Dashmina": ["Dashmina Upazila Health Complex", "Dashmina General Hospital", "Dashmina Diagnostic Centre", "Dashmina Community Clinic"],
    "Dumki": ["Dumki Upazila Health Complex", "Dumki General Hospital", "Dumki Diagnostic Centre", "Dumki Community Clinic"],
    "Galachipa": ["Galachipa Upazila Health Complex", "Galachipa General Hospital", "Galachipa Diagnostic Centre", "Galachipa Community Hospital"],
    "Kala Para": ["Kala Para Upazila Health Complex", "Kala Para General Hospital", "Kala Para Diagnostic Centre", "Kala Para Community Clinic"],
    "Mirzaganj": ["Mirzaganj Upazila Health Complex", "Mirzaganj General Hospital", "Mirzaganj Diagnostic Centre", "Mirzaganj Community Clinic"],
    "Patuakhali Sadar": ["Patuakhali District Hospital (100 Bed)", "Patuakhali Medical College Hospital", "Patuakhali General Hospital", "Patuakhali Diagnostic Centre"],
    "Rangabali": ["Rangabali Upazila Health Complex", "Rangabali General Hospital", "Rangabali Diagnostic Centre", "Rangabali Community Clinic"]
  },
  "Pirojpur": {
    "Bhandaria": ["Bhandaria Upazila Health Complex", "Bhandaria General Hospital", "Bhandaria Diagnostic Centre", "Bhandaria Community Clinic"],
    "Kawkhali": ["Kawkhali Upazila Health Complex (Pirojpur)", "Kawkhali General Hospital", "Kawkhali Diagnostic Centre", "Kawkhali Community Clinic"],
    "Mathbaria": ["Mathbaria Upazila Health Complex", "Mathbaria General Hospital", "Mathbaria Diagnostic Centre", "Mathbaria Community Hospital"],
    "Nazirpur": ["Nazirpur Upazila Health Complex", "Nazirpur General Hospital", "Nazirpur Diagnostic Centre", "Nazirpur Community Clinic"],
    "Nesarabad": ["Nesarabad Upazila Health Complex", "Nesarabad General Hospital", "Nesarabad Diagnostic Centre", "Nesarabad Community Clinic"],
    "Pirojpur Sadar": ["Pirojpur District Hospital (100 Bed)", "Pirojpur General Hospital", "Pirojpur Diagnostic Centre", "Pirojpur Medical Centre"],
    "Zianagar": ["Zianagar Upazila Health Complex", "Zianagar General Hospital", "Zianagar Diagnostic Centre", "Zianagar Community Clinic"]
  },
  "Rajshahi": {
    "Bagha": ["Bagha Upazila Health Complex", "Bagha General Hospital", "Bagha Diagnostic Centre", "Bagha Community Clinic"],
    "Bagmara": ["Bagmara Upazila Health Complex", "Bagmara General Hospital", "Bagmara Diagnostic Centre", "Bagmara Community Hospital"],
    "Charghat": ["Charghat Upazila Health Complex", "Charghat General Hospital", "Charghat Diagnostic Centre", "Charghat Community Clinic"],
    "Durgapur": ["Durgapur Upazila Health Complex (Rajshahi)", "Durgapur General Hospital", "Durgapur Diagnostic Centre", "Durgapur Community Clinic"],
    "Godagari": ["Godagari Upazila Health Complex", "Godagari General Hospital", "Godagari Diagnostic Centre", "Godagari Community Hospital"],
    "Mohanpur": ["Mohanpur Upazila Health Complex", "Mohanpur General Hospital", "Mohanpur Diagnostic Centre", "Mohanpur Community Clinic"],
    "Paba": ["Paba Upazila Health Complex", "Paba General Hospital", "Paba Diagnostic Centre", "Paba Community Clinic"],
    "Puthia": ["Puthia Upazila Health Complex", "Puthia General Hospital", "Puthia Diagnostic Centre", "Puthia Community Hospital"],
    "Tanore": ["Tanore Upazila Health Complex", "Tanore General Hospital", "Tanore Diagnostic Centre", "Tanore Community Clinic"],
    "Rajshahi City": ["Rajshahi Medical College Hospital", "250 Bed General Hospital Rajshahi", "Rajshahi City Clinic", "Popular Medical Centre Rajshahi"]
  },
  "Bogra": {
    "Adamdighi": ["Adamdighi Upazila Health Complex", "Adamdighi General Hospital", "Adamdighi Diagnostic Centre", "Adamdighi Community Clinic"],
    "Bogra Sadar": ["Shaheed Ziaur Rahman Medical College Hospital", "250 Bed General Hospital Bogra", "Bogra General Hospital", "Bogra Diagnostic Centre"],
    "Dhunat": ["Dhunat Upazila Health Complex", "Dhunat General Hospital", "Dhunat Diagnostic Centre", "Dhunat Community Hospital"],
    "Dupchanchia": ["Dupchanchia Upazila Health Complex", "Dupchanchia General Hospital", "Dupchanchia Diagnostic Centre", "Dupchanchia Community Clinic"],
    "Gabtali": ["Gabtali Upazila Health Complex", "Gabtali General Hospital", "Gabtali Diagnostic Centre", "Gabtali Community Hospital"],
    "Kahaloo": ["Kahaloo Upazila Health Complex", "Kahaloo General Hospital", "Kahaloo Diagnostic Centre", "Kahaloo Community Clinic"],
    "Nandigram": ["Nandigram Upazila Health Complex", "Nandigram General Hospital", "Nandigram Diagnostic Centre", "Nandigram Community Clinic"],
    "Sariakandi": ["Sariakandi Upazila Health Complex", "Sariakandi General Hospital", "Sariakandi Diagnostic Centre", "Sariakandi Community Clinic"],
    "Shajahanpur": ["Shajahanpur Upazila Health Complex", "Shajahanpur General Hospital", "Shajahanpur Diagnostic Centre", "Shajahanpur Community Clinic"],
    "Sherpur": ["Sherpur Upazila Health Complex (Bogra)", "Sherpur General Hospital (Bogra)", "Sherpur Diagnostic Centre (Bogra)", "Sherpur Community Clinic"],
    "Shibganj": ["Shibganj Upazila Health Complex (Bogra)", "Shibganj General Hospital", "Shibganj Diagnostic Centre", "Shibganj Community Hospital"],
    "Sonatola": ["Sonatola Upazila Health Complex", "Sonatola General Hospital", "Sonatola Diagnostic Centre", "Sonatola Community Clinic"]
  },
  "Joypurhat": {
    "Akkelpur": ["Akkelpur Upazila Health Complex", "Akkelpur General Hospital", "Akkelpur Diagnostic Centre", "Akkelpur Community Clinic"],
    "Joypurhat Sadar": ["Joypurhat District Hospital (100 Bed)", "Joypurhat General Hospital", "Joypurhat Diagnostic Centre", "Joypurhat Medical Centre"],
    "Kalai": ["Kalai Upazila Health Complex", "Kalai General Hospital", "Kalai Diagnostic Centre", "Kalai Community Hospital"],
    "Khetlal": ["Khetlal Upazila Health Complex", "Khetlal General Hospital", "Khetlal Diagnostic Centre", "Khetlal Community Clinic"],
    "Panchbibi": ["Panchbibi Upazila Health Complex", "Panchbibi General Hospital", "Panchbibi Diagnostic Centre", "Panchbibi Community Hospital"]
  },
  "Naogaon": {
    "Atrai": ["Atrai Upazila Health Complex", "Atrai General Hospital", "Atrai Diagnostic Centre", "Atrai Community Clinic"],
    "Badalgachhi": ["Badalgachhi Upazila Health Complex", "Badalgachhi General Hospital", "Badalgachhi Diagnostic Centre", "Badalgachhi Community Clinic"],
    "Dhamoirhat": ["Dhamoirhat Upazila Health Complex", "Dhamoirhat General Hospital", "Dhamoirhat Diagnostic Centre", "Dhamoirhat Community Clinic"],
    "Manda": ["Manda Upazila Health Complex", "Manda General Hospital", "Manda Diagnostic Centre", "Manda Community Hospital"],
    "Mohadevpur": ["Mohadevpur Upazila Health Complex", "Mohadevpur General Hospital", "Mohadevpur Diagnostic Centre", "Mohadevpur Community Clinic"],
    "Naogaon Sadar": ["Naogaon District Hospital (100 Bed)", "Naogaon General Hospital", "Naogaon Diagnostic Centre", "Naogaon Medical Centre"],
    "Niamatpur": ["Niamatpur Upazila Health Complex", "Niamatpur General Hospital", "Niamatpur Diagnostic Centre", "Niamatpur Community Hospital"],
    "Patnitala": ["Patnitala Upazila Health Complex", "Patnitala General Hospital", "Patnitala Diagnostic Centre", "Patnitala Community Clinic"],
    "Porsha": ["Porsha Upazila Health Complex", "Porsha General Hospital", "Porsha Diagnostic Centre", "Porsha Community Clinic"],
    "Raninagar": ["Raninagar Upazila Health Complex", "Raninagar General Hospital", "Raninagar Diagnostic Centre", "Raninagar Community Clinic"],
    "Sapahar": ["Sapahar Upazila Health Complex", "Sapahar General Hospital", "Sapahar Diagnostic Centre", "Sapahar Community Clinic"]
  },
  "Natore": {
    "Baraigram": ["Baraigram Upazila Health Complex", "Baraigram General Hospital", "Baraigram Diagnostic Centre", "Baraigram Community Hospital"],
    "Gurudaspur": ["Gurudaspur Upazila Health Complex", "Gurudaspur General Hospital", "Gurudaspur Diagnostic Centre", "Gurudaspur Community Clinic"],
    "Lalpur": ["Lalpur Upazila Health Complex", "Lalpur General Hospital", "Lalpur Diagnostic Centre", "Lalpur Community Clinic"],
    "Naldanga": ["Naldanga Upazila Health Complex", "Naldanga General Hospital", "Naldanga Diagnostic Centre", "Naldanga Community Clinic"],
    "Natore Sadar": ["Natore District Hospital (100 Bed)", "Natore General Hospital", "Natore Diagnostic Centre", "Natore Medical Centre"],
    "Singra": ["Singra Upazila Health Complex", "Singra General Hospital", "Singra Diagnostic Centre", "Singra Community Hospital"],
    "Bagatipara": ["Bagatipara Upazila Health Complex", "Bagatipara General Hospital", "Bagatipara Diagnostic Centre", "Bagatipara Community Clinic"]
  },
  "Nawabganj": {
    "Bholahat": ["Bholahat Upazila Health Complex", "Bholahat General Hospital", "Bholahat Diagnostic Centre", "Bholahat Community Clinic"],
    "Gomastapur": ["Gomastapur Upazila Health Complex", "Gomastapur General Hospital", "Gomastapur Diagnostic Centre", "Gomastapur Community Clinic"],
    "Nachole": ["Nachole Upazila Health Complex", "Nachole General Hospital", "Nachole Diagnostic Centre", "Nachole Community Clinic"],
    "Nawabganj Sadar": ["Nawabganj District Hospital (100 Bed)", "Nawabganj General Hospital", "Nawabganj Diagnostic Centre", "Nawabganj Medical Centre"],
    "Shibganj": ["Shibganj Upazila Health Complex (Nawabganj)", "Shibganj General Hospital (Nawabganj)", "Shibganj Diagnostic Centre (Nawabganj)", "Shibganj Community Clinic"]
  },
  "Pabna": {
    "Atgharia": ["Atgharia Upazila Health Complex", "Atgharia General Hospital", "Atgharia Diagnostic Centre", "Atgharia Community Clinic"],
    "Bera": ["Bera Upazila Health Complex", "Bera General Hospital", "Bera Diagnostic Centre", "Bera Community Hospital"],
    "Bhangura": ["Bhangura Upazila Health Complex", "Bhangura General Hospital", "Bhangura Diagnostic Centre", "Bhangura Community Clinic"],
    "Chatmohar": ["Chatmohar Upazila Health Complex", "Chatmohar General Hospital", "Chatmohar Diagnostic Centre", "Chatmohar Community Clinic"],
    "Faridpur": ["Faridpur Upazila Health Complex (Pabna)", "Faridpur General Hospital (Pabna)", "Faridpur Diagnostic Centre (Pabna)", "Faridpur Community Clinic"],
    "Ishwardi": ["Ishwardi Upazila Health Complex", "Ishwardi General Hospital", "Ishwardi Diagnostic Centre", "Ishwardi Community Hospital"],
    "Pabna Sadar": ["Pabna Mental Hospital", "Pabna District Hospital (250 Bed)", "Pabna Medical College Hospital", "Pabna Diagnostic Centre"],
    "Santhia": ["Santhia Upazila Health Complex", "Santhia General Hospital", "Santhia Diagnostic Centre", "Santhia Community Hospital"],
    "Sujanagar": ["Sujanagar Upazila Health Complex", "Sujanagar General Hospital", "Sujanagar Diagnostic Centre", "Sujanagar Community Clinic"]
  },
  "Sirajganj": {
    "Belkuchi": ["Belkuchi Upazila Health Complex", "Belkuchi General Hospital", "Belkuchi Diagnostic Centre", "Belkuchi Community Clinic"],
    "Chauhali": ["Chauhali Upazila Health Complex", "Chauhali General Hospital", "Chauhali Diagnostic Centre", "Chauhali Community Clinic"],
    "Kamarkhanda": ["Kamarkhanda Upazila Health Complex", "Kamarkhanda General Hospital", "Kamarkhanda Diagnostic Centre", "Kamarkhanda Community Clinic"],
    "Kazipur": ["Kazipur Upazila Health Complex", "Kazipur General Hospital", "Kazipur Diagnostic Centre", "Kazipur Community Clinic"],
    "Raiganj": ["Raiganj Upazila Health Complex", "Raiganj General Hospital", "Raiganj Diagnostic Centre", "Raiganj Community Hospital"],
    "Shahjadpur": ["Shahjadpur Upazila Health Complex", "Shahjadpur General Hospital", "Shahjadpur Diagnostic Centre", "Shahjadpur Community Hospital"],
    "Sirajganj Sadar": ["Sirajganj District Hospital (250 Bed)", "Sirajganj Medical College Hospital", "Sirajganj General Hospital", "Sirajganj Diagnostic Centre"],
    "Tarash": ["Tarash Upazila Health Complex", "Tarash General Hospital", "Tarash Diagnostic Centre", "Tarash Community Clinic"],
    "Ullahpara": ["Ullahpara Upazila Health Complex", "Ullahpara General Hospital", "Ullahpara Diagnostic Centre", "Ullahpara Community Hospital"]
  },
  "Rangpur": {
    "Badarganj": ["Badarganj Upazila Health Complex", "Badarganj General Hospital", "Badarganj Diagnostic Centre", "Badarganj Community Clinic"],
    "Gangachhara": ["Gangachhara Upazila Health Complex", "Gangachhara General Hospital", "Gangachhara Diagnostic Centre", "Gangachhara Community Clinic"],
    "Kaunia": ["Kaunia Upazila Health Complex", "Kaunia General Hospital", "Kaunia Diagnostic Centre", "Kaunia Community Clinic"],
    "Mithapukur": ["Mithapukur Upazila Health Complex", "Mithapukur General Hospital", "Mithapukur Diagnostic Centre", "Mithapukur Community Hospital"],
    "Pirgachha": ["Pirgachha Upazila Health Complex", "Pirgachha General Hospital", "Pirgachha Diagnostic Centre", "Pirgachha Community Clinic"],
    "Pirganj": ["Pirganj Upazila Health Complex (Rangpur)", "Pirganj General Hospital", "Pirganj Diagnostic Centre", "Pirganj Community Hospital"],
    "Rangpur Sadar": ["Rangpur Medical College Hospital", "250 Bed General Hospital Rangpur", "Rangpur General Hospital", "Rangpur Diagnostic Centre"],
    "Taraganj": ["Taraganj Upazila Health Complex", "Taraganj General Hospital", "Taraganj Diagnostic Centre", "Taraganj Community Clinic"]
  },
  "Dinajpur": {
    "Birampur": ["Birampur Upazila Health Complex", "Birampur General Hospital", "Birampur Diagnostic Centre", "Birampur Community Clinic"],
    "Birganj": ["Birganj Upazila Health Complex", "Birganj General Hospital", "Birganj Diagnostic Centre", "Birganj Community Hospital"],
    "Biral": ["Biral Upazila Health Complex", "Biral General Hospital", "Biral Diagnostic Centre", "Biral Community Clinic"],
    "Bochaganj": ["Bochaganj Upazila Health Complex", "Bochaganj General Hospital", "Bochaganj Diagnostic Centre", "Bochaganj Community Clinic"],
    "Chirirbandar": ["Chirirbandar Upazila Health Complex", "Chirirbandar General Hospital", "Chirirbandar Diagnostic Centre", "Chirirbandar Community Clinic"],
    "Phulbari": ["Phulbari Upazila Health Complex (Dinajpur)", "Phulbari General Hospital", "Phulbari Diagnostic Centre", "Phulbari Community Hospital"],
    "Ghoraghat": ["Ghoraghat Upazila Health Complex", "Ghoraghat General Hospital", "Ghoraghat Diagnostic Centre", "Ghoraghat Community Clinic"],
    "Hakimpur": ["Hakimpur Upazila Health Complex", "Hakimpur General Hospital", "Hakimpur Diagnostic Centre", "Hakimpur Community Clinic"],
    "Kaharole": ["Kaharole Upazila Health Complex", "Kaharole General Hospital", "Kaharole Diagnostic Centre", "Kaharole Community Clinic"],
    "Khansama": ["Khansama Upazila Health Complex", "Khansama General Hospital", "Khansama Diagnostic Centre", "Khansama Community Clinic"],
    "Dinajpur Sadar": ["M Abdur Rahim Medical College Hospital", "250 Bed Dinajpur General Hospital", "Dinajpur General Hospital", "Dinajpur Diagnostic Centre"],
    "Nawabganj": ["Nawabganj Upazila Health Complex (Dinajpur)", "Nawabganj General Hospital (Dinajpur)", "Nawabganj Diagnostic Centre (Dinajpur)", "Nawabganj Community Clinic"],
    "Parbatipur": ["Parbatipur Upazila Health Complex", "Parbatipur General Hospital", "Parbatipur Diagnostic Centre", "Parbatipur Community Hospital"]
  },
  "Gaibandha": {
    "Phulchhari": ["Phulchhari Upazila Health Complex", "Phulchhari General Hospital", "Phulchhari Diagnostic Centre", "Phulchhari Community Clinic"],
    "Gaibandha Sadar": ["Gaibandha District Hospital (100 Bed)", "Gaibandha General Hospital", "Gaibandha Diagnostic Centre", "Gaibandha Medical Centre"],
    "Gobindaganj": ["Gobindaganj Upazila Health Complex", "Gobindaganj General Hospital", "Gobindaganj Diagnostic Centre", "Gobindaganj Community Hospital"],
    "Palashbari": ["Palashbari Upazila Health Complex", "Palashbari General Hospital", "Palashbari Diagnostic Centre", "Palashbari Community Clinic"],
    "Sadullapur": ["Sadullapur Upazila Health Complex", "Sadullapur General Hospital", "Sadullapur Diagnostic Centre", "Sadullapur Community Clinic"],
    "Sughatta": ["Sughatta Upazila Health Complex", "Sughatta General Hospital", "Sughatta Diagnostic Centre", "Sughatta Community Clinic"],
    "Sundarganj": ["Sundarganj Upazila Health Complex", "Sundarganj General Hospital", "Sundarganj Diagnostic Centre", "Sundarganj Community Hospital"]
  },
  "Kurigram": {
    "Bhurungamari": ["Bhurungamari Upazila Health Complex", "Bhurungamari General Hospital", "Bhurungamari Diagnostic Centre", "Bhurungamari Community Clinic"],
    "Char Rajibpur": ["Char Rajibpur Upazila Health Complex", "Char Rajibpur General Hospital", "Char Rajibpur Diagnostic Centre", "Char Rajibpur Community Clinic"],
    "Chilmari": ["Chilmari Upazila Health Complex", "Chilmari General Hospital", "Chilmari Diagnostic Centre", "Chilmari Community Clinic"],
    "Phulbari": ["Phulbari Upazila Health Complex (Kurigram)", "Phulbari General Hospital (Kurigram)", "Phulbari Diagnostic Centre (Kurigram)", "Phulbari Community Clinic"],
    "Kurigram Sadar": ["Kurigram District Hospital (100 Bed)", "Kurigram General Hospital", "Kurigram Diagnostic Centre", "Kurigram Medical Centre"],
    "Nageshwari": ["Nageshwari Upazila Health Complex", "Nageshwari General Hospital", "Nageshwari Diagnostic Centre", "Nageshwari Community Hospital"],
    "Rajarhat": ["Rajarhat Upazila Health Complex", "Rajarhat General Hospital", "Rajarhat Diagnostic Centre", "Rajarhat Community Clinic"],
    "Raomari": ["Raomari Upazila Health Complex", "Raomari General Hospital", "Raomari Diagnostic Centre", "Raomari Community Clinic"],
    "Ulipur": ["Ulipur Upazila Health Complex", "Ulipur General Hospital", "Ulipur Diagnostic Centre", "Ulipur Community Hospital"]
  },
  "Lalmonirhat": {
    "Aditmari": ["Aditmari Upazila Health Complex", "Aditmari General Hospital", "Aditmari Diagnostic Centre", "Aditmari Community Clinic"],
    "Hatibandha": ["Hatibandha Upazila Health Complex", "Hatibandha General Hospital", "Hatibandha Diagnostic Centre", "Hatibandha Community Clinic"],
    "Kaliganj": ["Kaliganj Upazila Health Complex (Lalmonirhat)", "Kaliganj General Hospital (Lalmonirhat)", "Kaliganj Diagnostic Centre (Lalmonirhat)", "Kaliganj Community Clinic"],
    "Lalmonirhat Sadar": ["Lalmonirhat District Hospital (100 Bed)", "Lalmonirhat General Hospital", "Lalmonirhat Diagnostic Centre", "Lalmonirhat Medical Centre"],
    "Patgram": ["Patgram Upazila Health Complex", "Patgram General Hospital", "Patgram Diagnostic Centre", "Patgram Community Hospital"]
  },
  "Nilphamari": {
    "Dimla": ["Dimla Upazila Health Complex", "Dimla General Hospital", "Dimla Diagnostic Centre", "Dimla Community Clinic"],
    "Domar": ["Domar Upazila Health Complex", "Domar General Hospital", "Domar Diagnostic Centre", "Domar Community Hospital"],
    "Jaldhaka": ["Jaldhaka Upazila Health Complex", "Jaldhaka General Hospital", "Jaldhaka Diagnostic Centre", "Jaldhaka Community Clinic"],
    "Kishoreganj": ["Kishoreganj Upazila Health Complex (Nilphamari)", "Kishoreganj General Hospital (Nilphamari)", "Kishoreganj Diagnostic Centre (Nilphamari)", "Kishoreganj Community Clinic"],
    "Nilphamari Sadar": ["Nilphamari District Hospital (100 Bed)", "Nilphamari General Hospital", "Nilphamari Diagnostic Centre", "Nilphamari Medical Centre"],
    "Saidpur": ["Saidpur Upazila Health Complex", "Saidpur General Hospital", "Saidpur Diagnostic Centre", "Saidpur Community Hospital"]
  },
  "Panchagarh": {
    "Atwari": ["Atwari Upazila Health Complex", "Atwari General Hospital", "Atwari Diagnostic Centre", "Atwari Community Clinic"],
    "Boda": ["Boda Upazila Health Complex", "Boda General Hospital", "Boda Diagnostic Centre", "Boda Community Clinic"],
    "Debiganj": ["Debiganj Upazila Health Complex", "Debiganj General Hospital", "Debiganj Diagnostic Centre", "Debiganj Community Hospital"],
    "Panchagarh Sadar": ["Panchagarh District Hospital (100 Bed)", "Panchagarh General Hospital", "Panchagarh Diagnostic Centre", "Panchagarh Medical Centre"],
    "Tetulia": ["Tetulia Upazila Health Complex", "Tetulia General Hospital", "Tetulia Diagnostic Centre", "Tetulia Community Clinic"]
  },
  "Thakurgaon": {
    "Baliadangi": ["Baliadangi Upazila Health Complex", "Baliadangi General Hospital", "Baliadangi Diagnostic Centre", "Baliadangi Community Clinic"],
    "Haripur": ["Haripur Upazila Health Complex", "Haripur General Hospital", "Haripur Diagnostic Centre", "Haripur Community Clinic"],
    "Pirganj": ["Pirganj Upazila Health Complex (Thakurgaon)", "Pirganj General Hospital (Thakurgaon)", "Pirganj Diagnostic Centre (Thakurgaon)", "Pirganj Community Hospital"],
    "Ranisankail": ["Ranisankail Upazila Health Complex", "Ranisankail General Hospital", "Ranisankail Diagnostic Centre", "Ranisankail Community Clinic"],
    "Thakurgaon Sadar": ["Thakurgaon District Hospital (100 Bed)", "Thakurgaon General Hospital", "Thakurgaon Diagnostic Centre", "Thakurgaon Medical Centre"]
  },
  "Mymensingh": {
    "Bhaluka": ["Bhaluka Upazila Health Complex", "Bhaluka General Hospital", "Bhaluka Diagnostic Centre", "Bhaluka Community Hospital"],
    "Dhobaura": ["Dhobaura Upazila Health Complex", "Dhobaura General Hospital", "Dhobaura Diagnostic Centre", "Dhobaura Community Clinic"],
    "Fulbaria": ["Fulbaria Upazila Health Complex", "Fulbaria General Hospital", "Fulbaria Diagnostic Centre", "Fulbaria Community Clinic"],
    "Gaffargaon": ["Gaffargaon Upazila Health Complex", "Gaffargaon General Hospital", "Gaffargaon Diagnostic Centre", "Gaffargaon Community Hospital"],
    "Gauripur": ["Gauripur Upazila Health Complex", "Gauripur General Hospital", "Gauripur Diagnostic Centre", "Gauripur Community Clinic"],
    "Haluaghat": ["Haluaghat Upazila Health Complex", "Haluaghat General Hospital", "Haluaghat Diagnostic Centre", "Haluaghat Community Clinic"],
    "Ishwarganj": ["Ishwarganj Upazila Health Complex", "Ishwarganj General Hospital", "Ishwarganj Diagnostic Centre", "Ishwarganj Community Hospital"],
    "Muktagachha": ["Muktagachha Upazila Health Complex", "Muktagachha General Hospital", "Muktagachha Diagnostic Centre", "Muktagachha Community Hospital"],
    "Mymensingh Sadar": ["Mymensingh Medical College Hospital", "250 Bed Mymensingh General Hospital", "Mymensingh General Hospital", "Mymensingh Diagnostic Centre"],
    "Nandail": ["Nandail Upazila Health Complex", "Nandail General Hospital", "Nandail Diagnostic Centre", "Nandail Community Clinic"],
    "Phulpur": ["Phulpur Upazila Health Complex", "Phulpur General Hospital", "Phulpur Diagnostic Centre", "Phulpur Community Hospital"],
    "Tara Khanda": ["Tara Khanda Upazila Health Complex", "Tara Khanda General Hospital", "Tara Khanda Diagnostic Centre", "Tara Khanda Community Clinic"],
    "Trishal": ["Trishal Upazila Health Complex", "Trishal General Hospital", "Trishal Diagnostic Centre", "Trishal Community Hospital"]
  },
  "Jamalpur": {
    "Baksiganj": ["Baksiganj Upazila Health Complex", "Baksiganj General Hospital", "Baksiganj Diagnostic Centre", "Baksiganj Community Clinic"],
    "Dewanganj": ["Dewanganj Upazila Health Complex", "Dewanganj General Hospital", "Dewanganj Diagnostic Centre", "Dewanganj Community Hospital"],
    "Islampur": ["Islampur Upazila Health Complex", "Islampur General Hospital", "Islampur Diagnostic Centre", "Islampur Community Clinic"],
    "Jamalpur Sadar": ["Jamalpur District Hospital (250 Bed)", "Jamalpur General Hospital", "Jamalpur Medical College Hospital", "Jamalpur Diagnostic Centre"],
    "Madarganj": ["Madarganj Upazila Health Complex", "Madarganj General Hospital", "Madarganj Diagnostic Centre", "Madarganj Community Clinic"],
    "Melandaha": ["Melandaha Upazila Health Complex", "Melandaha General Hospital", "Melandaha Diagnostic Centre", "Melandaha Community Hospital"],
    "Sarishabari": ["Sarishabari Upazila Health Complex", "Sarishabari General Hospital", "Sarishabari Diagnostic Centre", "Sarishabari Community Clinic"]
  },
  "Netrokona": {
    "Atpara": ["Atpara Upazila Health Complex", "Atpara General Hospital", "Atpara Diagnostic Centre", "Atpara Community Clinic"],
    "Barhatta": ["Barhatta Upazila Health Complex", "Barhatta General Hospital", "Barhatta Diagnostic Centre", "Barhatta Community Clinic"],
    "Durgapur": ["Durgapur Upazila Health Complex (Netrokona)", "Durgapur General Hospital (Netrokona)", "Durgapur Diagnostic Centre (Netrokona)", "Durgapur Community Clinic"],
    "Khaliajuri": ["Khaliajuri Upazila Health Complex", "Khaliajuri General Hospital", "Khaliajuri Diagnostic Centre", "Khaliajuri Community Clinic"],
    "Kalmakanda": ["Kalmakanda Upazila Health Complex", "Kalmakanda General Hospital", "Kalmakanda Diagnostic Centre", "Kalmakanda Community Clinic"],
    "Kendua": ["Kendua Upazila Health Complex", "Kendua General Hospital", "Kendua Diagnostic Centre", "Kendua Community Hospital"],
    "Madan": ["Madan Upazila Health Complex", "Madan General Hospital", "Madan Diagnostic Centre", "Madan Community Clinic"],
    "Mohanganj": ["Mohanganj Upazila Health Complex", "Mohanganj General Hospital", "Mohanganj Diagnostic Centre", "Mohanganj Community Hospital"],
    "Netrokona Sadar": ["Netrokona District Hospital (100 Bed)", "Netrokona General Hospital", "Netrokona Diagnostic Centre", "Netrokona Medical Centre"],
    "Purbadhala": ["Purbadhala Upazila Health Complex", "Purbadhala General Hospital", "Purbadhala Diagnostic Centre", "Purbadhala Community Clinic"]
  },
  "Sherpur": {
    "Jhenaigati": ["Jhenaigati Upazila Health Complex", "Jhenaigati General Hospital", "Jhenaigati Diagnostic Centre", "Jhenaigati Community Clinic"],
    "Nakla": ["Nakla Upazila Health Complex", "Nakla General Hospital", "Nakla Diagnostic Centre", "Nakla Community Clinic"],
    "Nalitabari": ["Nalitabari Upazila Health Complex", "Nalitabari General Hospital", "Nalitabari Diagnostic Centre", "Nalitabari Community Hospital"],
    "Sherpur Sadar": ["Sherpur District Hospital (100 Bed)", "Sherpur General Hospital", "Sherpur Diagnostic Centre", "Sherpur Medical Centre"],
    "Sreebardi": ["Sreebardi Upazila Health Complex", "Sreebardi General Hospital", "Sreebardi Diagnostic Centre", "Sreebardi Community Clinic"]
  }
};
