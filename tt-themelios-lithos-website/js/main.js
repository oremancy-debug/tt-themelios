/* Main JavaScript - T.T. Themelios Lithos - Modern Design */

const translations = {
    en: {
        // Navigation
        nav_home: 'Home', nav_projects: 'Projects', nav_renovation: 'Renovation',
        nav_about: 'About', nav_services: 'Services', nav_contact: 'Contact', nav_cta: 'Get Quote',

        // Hero
        hero_badge: 'Trusted Since 2010',
        hero_title: 'Building Dreams<br>In Cyprus',
        hero_tagline: '25 years of international expertise delivering exceptional residential and commercial construction projects across the island.',
        hero_cta_projects: 'View Projects', hero_cta_contact: 'Free Consultation',
        stat_years: 'Years', stat_clients: 'Clients', stat_cities: 'Cities',

        // About
        about_label: 'Who We Are',
        about_title: 'Excellence in Construction Since 2010',
        about_lead: 'Founded in 2010, T.T. Themelios Lithos Ltd has become a trusted name in construction and renovation across Cyprus.',
        about_text: 'Led by Mr. Tryfonas Tryfonos, who brings over 25 years of international experience (including a decade in the U.S.), our company specializes in high-quality residential and commercial projects. From renovations and restorations to the construction of villas and apartment buildings, we are committed to craftsmanship, efficiency, and integrity in every project we undertake.',
        about_badge: 'Years Experience', about_director_title: 'Technical Director',
        feature_1_title: 'Premium Materials', feature_1_desc: 'We use only the highest quality materials from trusted suppliers.',
        feature_2_title: 'On-Time Delivery', feature_2_desc: 'We respect your timeline and deliver projects as promised.',
        feature_3_title: 'Expert Team', feature_3_desc: 'Skilled professionals with decades of combined experience.',

        // Services
        services_label: 'Our Services', services_title: 'What We Build For You',
        services_subtitle: 'From luxury villas to commercial complexes, we deliver excellence at every scale.',
        service_residential_title: 'Residential Construction',
        service_residential_desc: 'Luxury villas and apartment buildings crafted with precision and premium materials.',
        service_commercial_title: 'Commercial Projects',
        service_commercial_desc: 'Professional commercial spaces designed for functionality and business success.',
        service_renovation_title: 'Renovation',
        service_renovation_desc: 'Complete renovation and modernization of existing properties with quality craftsmanship.',
        service_management_title: 'Project Management',
        service_management_desc: 'End-to-end project management ensuring timelines, budgets, and quality standards.',
        service_link: 'Learn More →', service_link_renovation: 'View Projects →',

        // Stats
        stat_experience: 'Years Experience', stat_projects: 'Projects Completed',

        // Projects Index
        projects_label: 'Portfolio', projects_title: 'Our Projects',
        projects_subtitle: 'Explore our residential and commercial construction projects across Cyprus.',
        filter_all: 'All', filter_residential: 'Residential', filter_commercial: 'Commercial', filter_construction: 'Under Construction',
        project_view: 'View Details', price_from: 'From',
        project_type_residential: 'Residential', project_type_commercial: 'Commercial',
        status_under_construction: 'Under Construction', status_sold: 'Sold',
        status_under_study: 'Under Study', status_available: 'Available', status_completed: 'Completed',
        floors: '3 Floors',

        // Project Detail Shared
        overview_title: 'Project Overview', gallery_title: 'Project Gallery',
        specs_title: 'Specifications', pricing_title: 'Pricing', resources_title: 'Resources',
        specs_interior: 'Interior Features', specs_exterior: 'Exterior Features', specs_location: 'Location Benefits',
        stat_units: 'Units', stat_unit: 'Unit', stat_completion: 'Completion',
        stat_area: 'Total Area', stat_value: 'Project Value', stat_price: 'Price',
        stat_price_from: 'Starting Price', stat_floors: 'Floors',
        interest_title: 'Interested in This Project?', email_us: 'Email Us',
        download_brochure: 'Download Brochure', view_on_map: 'View on Google Maps',
        download_plans: 'Download Plans', view_3d_gallery: 'View 3D Gallery',
        table_floor: 'Floor', table_unit: 'Unit', table_type: 'Type',
        table_status: 'Status', table_price: 'Price', table_area: 'Area',

        // Panthea Residences
        panthea_title: 'Panthea Residences',
        panthea_overview: 'Panthea Residences represents the pinnacle of modern residential living in Limassol\'s most prestigious hillside location. This exclusive development features luxury apartments with panoramic views of the Mediterranean Sea, combining contemporary architecture with timeless elegance.',
        panthea_overview_2: 'Each residence has been thoughtfully designed to maximize natural light and outdoor living spaces, with expansive terraces that blur the boundaries between interior comfort and Mediterranean climate.',
        panthea_overview_short: 'Luxury hillside residences with panoramic Mediterranean views and contemporary design.',
        panthea_pricing_heading: 'Available Units & Pricing',
        panthea_gallery_heading: 'Gallery', panthea_specs_heading: 'Technical Details',
        panthea_resources_heading: 'Downloads & Location',
        panthea_interest_text: 'Contact us to learn more about available units and pricing options for Panthea Residences.',
        panthea_floor_1: '1st Floor', panthea_floor_2: '2nd Floor', panthea_floor_3: '3rd Floor',
        panthea_spec_1: 'Italian marble flooring throughout', panthea_spec_2: 'Designer kitchen with integrated appliances',
        panthea_spec_3: 'Smart home automation system', panthea_spec_4: 'Underfloor heating and cooling',
        panthea_spec_5: 'Floor-to-ceiling aluminum frames with double glazing',
        panthea_spec_6: 'Private rooftop terraces with jacuzzi provisions',
        panthea_spec_7: 'Landscaped gardens with automated irrigation',
        panthea_spec_8: 'Covered parking for 2 vehicles per unit',
        panthea_spec_9: 'Communal swimming pool with sun deck',
        panthea_spec_10: '24/7 security with CCTV surveillance',
        panthea_spec_11: '5 minutes to Limassol city center',
        panthea_spec_12: 'Walking distance to international schools',
        panthea_spec_13: 'Close to supermarkets and restaurants',
        panthea_spec_14: 'Easy access to highway network',
        panthea_spec_15: 'Sea views from all floors',

        // Agios Athanasios
        agios_title: 'Agios Athanasios Residences',
        agios_overview: 'Agios Athanasios Residences is a contemporary residential complex located in one of Limassol\'s most sought-after neighborhoods. This development offers exclusive apartments with modern amenities and high-quality finishes, designed for those who appreciate urban convenience with a touch of sophistication.',
        agios_overview_2: 'The project emphasizes sustainable living with energy-efficient systems, eco-friendly materials, and thoughtful design that reduces environmental impact while enhancing resident comfort and quality of life.',
        agios_overview_short: 'Contemporary residential complex with sustainable design and urban sophistication.',
        agios_pricing_heading: 'Available Units & Pricing',
        agios_gallery_heading: 'Gallery', agios_specs_heading: 'Technical Details',
        agios_resources_heading: 'Downloads & Resources',
        agios_interest_text: 'Contact us to learn more about available units and pricing options for Agios Athanasios Residences.',
        agios_spec_1: 'High-quality ceramic and parquet flooring', agios_spec_2: 'Fully equipped kitchens with European appliances',
        agios_spec_3: 'VRF air conditioning system', agios_spec_4: 'LED lighting throughout',
        agios_spec_5: 'Thermal aluminum frames with acoustic insulation',
        agios_spec_6: 'Private balconies with aluminum pergolas',
        agios_spec_7: 'Communal gardens with native plants',
        agios_spec_8: 'Covered parking with EV charging points',
        agios_spec_9: 'Swimming pool with poolside lounge',
        agios_spec_10: 'Bike storage and charging station',
        agios_spec_11: 'Walking distance to local amenities',
        agios_spec_12: 'Near public transport connections',
        agios_spec_13: 'Close to schools and medical facilities',
        agios_spec_14: 'Easy access to Limassol center',
        agios_spec_15: 'Quiet residential area',

        // Historic City Centre
        historic_title: 'Historic City Centre, Limassol',
        historic_overview: 'A visionary commercial office development in the heart of Limassol\'s historic old town. This project will restore and modernize a prime location on Vasileos Makedonos Street, preserving the architectural heritage while creating contemporary commercial office spaces.',
        historic_overview_2: 'The project is currently under architectural study, with plans to integrate modern design with the area\'s rich historical character, offering a unique living and business experience in one of Limassol\'s most prestigious addresses.',
        historic_overview_short: 'Commercial office development restoring a prime historic location on Vasileos Makedonos Street.',
        historic_specs_heading: 'Technical Details', historic_resources_heading: 'Downloads & Location',
        historic_interest_text: 'Contact us to learn more about this exciting development in Limassol\'s historic city centre.',

        // Yermasoyia Business Centre
        yermasoyia_title: 'Yermasoyia Business Centre',
        yermasoyia_overview: 'A modern commercial development in the heart of Yermasoyia, one of Limassol\'s most dynamic business districts. This project offers premium office and retail spaces designed for businesses seeking a prestigious address with excellent connectivity.',
        yermasoyia_overview_2: 'Currently under study, the development aims to set a new standard for commercial real estate in the area with state-of-the-art facilities and sustainable design principles.',
        yermasoyia_overview_short: 'Modern commercial development with premium office and retail spaces in a prime location.',
        yermasoyia_specs_heading: 'Technical Details', yermasoyia_resources_heading: 'Downloads & Resources',
        yermasoyia_interest_text: 'Contact us to learn more about commercial opportunities at Yermasoyia Business Centre.',

        // Makarios Avenue
        makarios_title: 'Makarios Avenue Business Centre',
        makarios_overview: 'A commercial property on one of Limassol\'s most prominent thoroughfares. The Makarios Avenue Business Centre is currently under study and available for rent or open to any other joint business proposal.',
        makarios_overview_2: 'Situated on the iconic Makarios Avenue, this property offers premium office and retail spaces in a prime city-center location. We welcome inquiries for rental arrangements or joint venture partnerships.',
        makarios_overview_short: 'Commercial centre on Makarios Avenue, under study — available for rent or JV proposals.',
        makarios_gallery_heading: 'Gallery', makarios_specs_heading: 'Technical Details',
        makarios_interest_text: 'Contact us to learn more about available spaces at Makarios Avenue Business Centre.',

        // Mesa Geitonia
        mesa_title: 'Mesa Geitonia Residences',
        mesa_overview: 'Mesa Geitonia Residences is a modern residential development in one of Limassol\'s most established neighborhoods. The project features contemporary apartments designed with quality materials and attention to detail, offering comfortable living in a convenient location.',
        mesa_overview_2: 'With easy access to schools, shops, and the city center, this development combines suburban tranquility with urban convenience, making it ideal for families and professionals alike.',
        mesa_overview_short: 'Modern residential development with quality materials and convenient location in Limassol.',
        mesa_gallery_heading: 'Gallery', mesa_specs_heading: 'Technical Details',
        mesa_resources_heading: 'Downloads & Resources',
        mesa_interest_text: 'Contact us to learn more about Mesa Geitonia Residences.',

        // Columbia
        columbia_title: 'Columbia Residences',
        columbia_overview: 'An exclusive residential development planned for the prestigious Columbia area of Limassol. This project will offer luxury apartments with premium finishes and modern amenities in one of the city\'s most sought-after neighborhoods.',
        columbia_overview_2: 'Currently under study, Columbia Residences aims to deliver a refined living experience that matches the area\'s upscale character, with thoughtful design and quality construction.',
        columbia_overview_short: 'Exclusive residential development planned for Limassol\'s prestigious Columbia neighborhood.',
        columbia_specs_heading: 'Technical Details',
        columbia_interest_text: 'Contact us to learn more about Columbia Residences.',

        // Testimonials
        testimonials_label: 'Testimonials', testimonials_title: 'What Our Clients Say',
        testimonial_1_text: '"Reliable, transparent, and committed — a true partner in every sense. T.T. Themelios Lithos delivered our project on time and exceeded our expectations."',
        testimonial_1_role: 'Consultant',
        testimonial_2_text: '"A company you can trust from start to finish. Tryfonas is always available, solution-oriented, and dependable. We\'ve worked with them on multiple projects."',
        testimonial_2_role: 'Property Investor',
        testimonial_3_text: '"T.T. Themelios Lithos brings quality and professionalism to every project. We\'ve worked with them for years — always a great experience."',
        testimonial_3_role: 'Architect',

        // CTA
        cta_title: 'Ready to Start Your Project?',
        cta_text: 'Contact us today for a free consultation and let\'s bring your vision to life.',
        cta_button: 'Get Free Quote',

        // Contact
        contact_label: 'Contact Us', contact_title: 'Let\'s Build Together',
        contact_intro: 'Whether you\'re planning a residential villa, commercial development, or renovation project, we\'re here to help bring your vision to life.',
        contact_address_label: 'Address', contact_phone_label: 'Phone', contact_email_label: 'Email',
        form_name: 'Full Name', form_email: 'Email', form_phone: 'Phone',
        form_service: 'Service', form_message: 'Message', form_submit: 'Send Message',
        form_select: 'Select service', form_residential: 'Residential Construction',
        form_commercial: 'Commercial Projects', form_renovation: 'Renovation', form_management: 'Project Management',

        // Footer
        footer_tagline: 'Building excellence in Cyprus since 2010.',
        footer_quick_links: 'Quick Links', footer_services: 'Services',
        footer_contact: 'Contact', footer_rights: 'All Rights Reserved.',
        footer_terms: 'Terms', footer_privacy: 'Privacy',

        // Renovation Page
        renovation_badge: 'Renovation Services',
        renovation_title: 'Transform Your Space',
        renovation_tagline: 'Complete renovation and modernization solutions for residential and commercial properties across Cyprus.',
        renovation_cta: 'Get Free Quote', renovation_cta_secondary: 'Our Services',
        renovation_about_label: 'Why Renovation?', renovation_about_title: 'Give Your Property New Life',
        renovation_about_lead: 'At T.T. Themelios Lithos, we understand that your property is more than just a building — it\'s where memories are made and dreams are lived.',
        renovation_about_text: 'Our renovation services breathe new life into existing properties, combining modern functionality with enhanced aesthetics. Whether it\'s a single room refresh or a complete property transformation, we deliver quality craftsmanship that respects the original character while meeting contemporary standards.',
        renovation_services_label: 'Our Renovation Services', renovation_services_title: 'What We Offer',
        reno_kitchen_title: 'Kitchen Renovation', reno_kitchen_desc: 'Modern kitchen transformations with custom cabinetry, premium countertops, and smart storage solutions.',
        reno_bathroom_title: 'Bathroom Renovation', reno_bathroom_desc: 'Luxury bathroom upgrades with modern fixtures, tiling, and spa-like amenities.',
        reno_full_title: 'Full Property Renovation', reno_full_desc: 'Complete interior and exterior renovation including structural changes, electrical, and plumbing.',
        reno_exterior_title: 'Exterior & Facade', reno_exterior_desc: 'Curb appeal enhancements including painting, cladding, roofing, and landscaping.',
        process_label: 'Our Process', process_title: 'How We Work',
        process_step1: 'Consultation', process_step2: 'Design & Planning',
        process_step3: 'Construction', process_step4: 'Completion',
        renovation_gallery_label: 'Our Work', renovation_gallery_title: 'Renovation Projects',
        renovation_cta_title: 'Ready to Transform Your Space?',
        renovation_cta_text: 'Contact us for a free consultation and let\'s discuss your renovation project.',
        renovation_cta_button: 'Get Free Quote'
    },

    el: {
        // Navigation
        nav_home: 'Αρχική', nav_projects: 'Έργα', nav_renovation: 'Ανακαίνιση',
        nav_about: 'Σχετικά', nav_services: 'Υπηρεσίες', nav_contact: 'Επικοινωνία', nav_cta: 'Προσφορά',

        // Hero
        hero_badge: 'Αξιόπιστοι από το 2010',
        hero_title: 'Χτίζουμε Όνειρα<br>Στην Κύπρο',
        hero_tagline: '25 χρόνια διεθνούς εμπειρίας στην παράδοση εξαιρετικών οικιστικών και εμπορικών κατασκευαστικών έργων.',
        hero_cta_projects: 'Δείτε Έργα', hero_cta_contact: 'Δωρεάν Συμβουλή',
        stat_years: 'Χρόνια', stat_clients: 'Πελάτες', stat_cities: 'Πόλεις',

        // About
        about_label: 'Ποιοι Είμαστε',
        about_title: 'Αριστεία στην Κατασκευή από το 2010',
        about_lead: 'Ιδρυθείσα το 2010, η T.T. Themelios Lithos Ltd έχει γίνει ένα αξιόπιστο όνομα στην κατασκευή και ανακαίνιση στην Κύπρο.',
        about_text: 'Υπό την ηγεσία του κ. Τρυφώνα Τρυφώνος, με πάνω από 25 χρόνια διεθνούς εμπειρίας (συμπεριλαμβανομένης μιας δεκαετίας στις ΗΠΑ), η εταιρεία μας εξειδικεύεται σε υψηλής ποιότητας οικιστικά και εμπορικά έργα. Από ανακαινίσεις και αποκαταστάσεις έως κατασκευή βιλών και πολυκατοικιών, δεσμευόμαστε στην τεχνογνωσία, αποτελεσματικότητα και ακεραιότητα.',
        about_badge: 'Χρόνια Εμπειρίας', about_director_title: 'Τεχνικός Διευθυντής',
        feature_1_title: 'Κορυφαία Υλικά', feature_1_desc: 'Χρησιμοποιούμε μόνο υλικά υψηλής ποιότητας από αξιόπιστους προμηθευτές.',
        feature_2_title: 'Έγκαιρη Παράδοση', feature_2_desc: 'Σεβόμαστε το χρονοδιάγραμμά σας και παραδίδουμε έργα όπως υποσχεθήκαμε.',
        feature_3_title: 'Εξειδικευμένη Ομάδα', feature_3_desc: 'Ειδικευμένοι επαγγελματίες με δεκαετίες συνδυασμένης εμπειρίας.',

        // Services
        services_label: 'Οι Υπηρεσίες μας', services_title: 'Τι Κατασκευάζουμε',
        services_subtitle: 'Από πολυτελείς βίλες έως εμπορικά συγκροτήματα, παρέχουμε αριστεία σε κάθε κλίμακα.',
        service_residential_title: 'Οικιστική Κατασκευή',
        service_residential_desc: 'Πολυτελείς βίλες και πολυκατοικίες κατασκευασμένες με ακρίβεια και κορυφαία υλικά.',
        service_commercial_title: 'Εμπορικά Έργα',
        service_commercial_desc: 'Επαγγελματικοί εμπορικοί χώροι σχεδιασμένοι για λειτουργικότητα και επιχειρηματική επιτυχία.',
        service_renovation_title: 'Ανακαίνιση',
        service_renovation_desc: 'Πλήρης ανακαίνιση και εκσυγχρονισμός υφιστάμενων ακινήτων με ποιοτική τεχνογνωσία.',
        service_management_title: 'Διαχείριση Έργων',
        service_management_desc: 'Ολοκληρωμένη διαχείριση έργων που διασφαλίζει χρονοδιαγράμματα, προϋπολογισμούς και ποιότητα.',
        service_link: 'Μάθετε Περισσότερα →', service_link_renovation: 'Δείτε Έργα →',

        // Stats
        stat_experience: 'Χρόνια Εμπειρίας', stat_projects: 'Ολοκληρωμένα Έργα',

        // Projects Index
        projects_label: 'Χαρτοφυλάκιο', projects_title: 'Τα Έργα μας',
        projects_subtitle: 'Εξερευνήστε τα οικιστικά και εμπορικά κατασκευαστικά μας έργα στην Κύπρο.',
        filter_all: 'Όλα', filter_residential: 'Οικιστικά', filter_commercial: 'Εμπορικά', filter_construction: 'Υπό Κατασκευή',
        project_view: 'Λεπτομέρειες', price_from: 'Από',
        project_type_residential: 'Οικιστικό', project_type_commercial: 'Εμπορικό',
        status_under_construction: 'Υπό Κατασκευή', status_sold: 'Πωλήθηκε',
        status_under_study: 'Υπό Μελέτη', status_available: 'Διαθέσιμο', status_completed: 'Ολοκληρωμένο',
        floors: '3 Όροφοι',

        // Project Detail Shared
        overview_title: 'Επισκόπηση Έργου', gallery_title: 'Φωτογραφίες Έργου',
        specs_title: 'Προδιαγραφές', pricing_title: 'Τιμολόγηση', resources_title: 'Πόροι',
        specs_interior: 'Εσωτερικά Χαρακτηριστικά', specs_exterior: 'Εξωτερικά Χαρακτηριστικά', specs_location: 'Πλεονεκτήματα Τοποθεσίας',
        stat_units: 'Μονάδες', stat_unit: 'Μονάδα', stat_completion: 'Ολοκλήρωση',
        stat_area: 'Συνολικό Εμβαδόν', stat_value: 'Αξία Έργου', stat_price: 'Τιμή',
        stat_price_from: 'Αρχική Τιμή', stat_floors: 'Όροφοι',
        interest_title: 'Ενδιαφέρεστε για αυτό το Έργο;', email_us: 'Email',
        download_brochure: 'Λήψη Φυλλαδίου', view_on_map: 'Δείτε στο Google Maps',
        download_plans: 'Λήψη Σχεδίων', view_3d_gallery: 'Τρισδιάστατη Περιήγηση',
        table_floor: 'Όροφος', table_unit: 'Μονάδα', table_type: 'Τύπος',
        table_status: 'Κατάσταση', table_price: 'Τιμή', table_area: 'Εμβαδόν',

        // Panthea
        panthea_title: 'Panthea Residences',
        panthea_overview: 'Το Panthea Residences αντιπροσωπεύει την κορυφή της σύγχρονης οικιστικής διαβίωσης στην πιο προνομιούχα λοφώδη τοποθεσία της Λεμεσού. Αυτή η αποκλειστική ανάπτυξη διαθέτει πολυτελή διαμερίσματα με πανοραμική θέα στη Μεσόγειο Θάλασσα.',
        panthea_overview_2: 'Κάθε κατοικία έχει σχεδιαστεί με προσοχή για να μεγιστοποιεί το φυσικό φωτισμό και τους υπαίθριους χώρους.',
        panthea_overview_short: 'Πολυτελείς κατοικίες στον λόφο με πανοραμική θέα στη Μεσόγειο και σύγχρονο σχεδιασμό.',
        panthea_pricing_heading: 'Διαθέσιμες Μονάδες & Τιμές',
        panthea_gallery_heading: 'Φωτογραφίες', panthea_specs_heading: 'Τεχνικές Λεπτομέρειες',
        panthea_resources_heading: 'Λήψεις & Τοποθεσία',
        panthea_interest_text: 'Επικοινωνήστε μαζί μας για να μάθετε περισσότερα σχετικά με τις διαθέσιμες μονάδες.',
        panthea_floor_1: '1ος Όροφος', panthea_floor_2: '2ος Όροφος', panthea_floor_3: '3ος Όροφος',
        panthea_spec_1: 'Ιταλικό μάρμαρο σε όλους τους χώρους', panthea_spec_2: 'Σχεδιαστική κουζίνα με ενσωματωμένες συσκευές',
        panthea_spec_3: 'Σύστημα αυτοματισμού έξυπνου σπιτιού', panthea_spec_4: 'Ενδοδαπέδια θέρμανση και ψύξη',
        panthea_spec_5: 'Κουφώματα αλουμινίου δαπέδου-οροφής με διπλά τζάμια',
        panthea_spec_6: 'Ιδιωτικές βεράντες ταράτσας με πρόβλεψη τζακούζι',
        panthea_spec_7: 'Διαμορφωμένοι κήποι με αυτόματο πότισμα',
        panthea_spec_8: 'Στεγασμένο πάρκινγκ για 2 οχήματα ανά μονάδα',
        panthea_spec_9: 'Κοινόχρηστη πισίνα με κατάστρωμα', panthea_spec_10: '24/7 ασφάλεια με CCTV',
        panthea_spec_11: '5 λεπτά από το κέντρο της Λεμεσού', panthea_spec_12: 'Κοντά σε διεθνή σχολεία',
        panthea_spec_13: 'Κοντά σε σούπερ μάρκετ και εστιατόρια', panthea_spec_14: 'Εύκολη πρόσβαση στο οδικό δίκτυο',
        panthea_spec_15: 'Θέα θάλασσας από όλους τους ορόφους',

        // Agios Athanasios
        agios_title: 'Agios Athanasios Residences',
        agios_overview: 'Το Agios Athanasios Residences είναι ένα σύγχρονο οικιστικό συγκρότημα σε μία από τις πιο περιζήτητες γειτονιές της Λεμεσού.',
        agios_overview_2: 'Το έργο δίνει έμφαση στη βιώσιμη διαβίωση με ενεργειακά αποδοτικά συστήματα και οικολογικά υλικά.',
        agios_overview_short: 'Σύγχρονο οικιστικό συγκρότημα με βιώσιμο σχεδιασμό και αστική κομψότητα.',
        agios_pricing_heading: 'Διαθέσιμες Μονάδες & Τιμές',
        agios_gallery_heading: 'Φωτογραφίες', agios_specs_heading: 'Τεχνικές Λεπτομέρειες',
        agios_resources_heading: 'Λήψεις & Πόροι',
        agios_interest_text: 'Επικοινωνήστε μαζί μας για τις διαθέσιμες μονάδες στο Agios Athanasios Residences.',
        agios_spec_1: 'Υψηλής ποιότητας κεραμικά και παρκέ δάπεδα', agios_spec_2: 'Πλήρως εξοπλισμένες κουζίνες με ευρωπαϊκές συσκευές',
        agios_spec_3: 'Σύστημα κλιματισμού VRF', agios_spec_4: 'LED φωτισμός σε όλους τους χώρους',
        agios_spec_5: 'Θερμικά κουφώματα αλουμινίου με ηχομόνωση',
        agios_spec_6: 'Ιδιωτικά μπαλκόνια με αλουμινένιες πέργκολες',
        agios_spec_7: 'Κοινόχρηστοι κήποι με αυτόχθονα φυτά',
        agios_spec_8: 'Στεγασμένο πάρκινγκ με σημεία φόρτισης EV',
        agios_spec_9: 'Πισίνα με χώρο χαλάρωσης', agios_spec_10: 'Αποθήκη ποδηλάτων και σταθμός φόρτισης',
        agios_spec_11: 'Κοντά σε τοπικές ανέσεις', agios_spec_12: 'Κοντά σε συγκοινωνίες',
        agios_spec_13: 'Κοντά σε σχολεία και ιατρικές εγκαταστάσεις', agios_spec_14: 'Εύκολη πρόσβαση στο κέντρο',
        agios_spec_15: 'Ήσυχη οικιστική περιοχή',

        // Historic City Centre
        historic_title: 'Ιστορικό Κέντρο Λεμεσού',
        historic_overview: 'Ένα οραματικό εμπορικό/γραφειακό έργο στην καρδιά της παλιάς πόλης της Λεμεσού, στην οδό Βασιλέως Μακεδόνος.',
        historic_overview_2: 'Το έργο βρίσκεται υπό αρχιτεκτονική μελέτη, με σχέδια ένταξης σύγχρονου σχεδιασμού στον ιστορικό χαρακτήρα.',
        historic_overview_short: 'Εμπορικό/γραφειακό έργο στην ιστορική οδό Βασιλέως Μακεδόνος.',
        historic_specs_heading: 'Τεχνικές Λεπτομέρειες', historic_resources_heading: 'Λήψεις & Τοποθεσία',
        historic_interest_text: 'Επικοινωνήστε μαζί μας για αυτό το έργο στο ιστορικό κέντρο.',

        // Yermasoyia
        yermasoyia_title: 'Επιχειρηματικό Κέντρο Γερμασόγειας',
        yermasoyia_overview: 'Σύγχρονη εμπορική ανάπτυξη στην καρδιά της Γερμασόγειας, με κορυφαίους γραφειακούς και εμπορικούς χώρους.',
        yermasoyia_overview_2: 'Υπό μελέτη, η ανάπτυξη στοχεύει σε νέα πρότυπα εμπορικών ακινήτων στην περιοχή.',
        yermasoyia_overview_short: 'Σύγχρονη εμπορική ανάπτυξη με κορυφαίους γραφειακούς χώρους σε προνομιούχα τοποθεσία.',
        yermasoyia_specs_heading: 'Τεχνικές Λεπτομέρειες', yermasoyia_resources_heading: 'Λήψεις & Πόροι',
        yermasoyia_interest_text: 'Επικοινωνήστε μαζί μας για εμπορικές ευκαιρίες στο Επιχειρηματικό Κέντρο Γερμασόγειας.',

        // Makarios Avenue
        makarios_title: 'Επιχειρηματικό Κέντρο Λεωφόρου Μακαρίου',
        makarios_overview: 'Εμπορικό ακίνητο σε μία από τις πιο εμβληματικές λεωφόρους της Λεμεσού. Υπό μελέτη — διαθέσιμο προς ενοικίαση ή ανοιχτό σε οποιαδήποτε επιχειρηματική πρόταση συνεργασίας.',
        makarios_overview_2: 'Στην εμβληματική Λεωφόρο Μακαρίου, το ακίνητο προσφέρει κορυφαίους γραφειακούς και εμπορικούς χώρους. Δεχόμαστε ερωτήματα για ενοικίαση ή συνεργασίες joint venture.',
        makarios_overview_short: 'Εμπορικό κέντρο στη Λεωφόρο Μακαρίου, υπό μελέτη — διαθέσιμο προς ενοικίαση ή JV.',
        makarios_gallery_heading: 'Φωτογραφίες', makarios_specs_heading: 'Τεχνικές Λεπτομέρειες',
        makarios_interest_text: 'Επικοινωνήστε μαζί μας για διαθέσιμους χώρους στο Επιχειρηματικό Κέντρο.',

        // Mesa Geitonia
        mesa_title: 'Κατοικίες Μέσα Γειτονιά',
        mesa_overview: 'Σύγχρονη οικιστική ανάπτυξη σε μία από τις πιο καθιερωμένες γειτονιές της Λεμεσού.',
        mesa_overview_2: 'Με εύκολη πρόσβαση σε σχολεία, καταστήματα και το κέντρο, συνδυάζει ηρεμία με αστική ευκολία.',
        mesa_overview_short: 'Σύγχρονη οικιστική ανάπτυξη με ποιοτικά υλικά σε βολική τοποθεσία.',
        mesa_gallery_heading: 'Φωτογραφίες', mesa_specs_heading: 'Τεχνικές Λεπτομέρειες',
        mesa_resources_heading: 'Λήψεις & Πόροι',
        mesa_interest_text: 'Επικοινωνήστε μαζί μας για τις Κατοικίες Μέσα Γειτονιά.',

        // Columbia
        columbia_title: 'Columbia Residences',
        columbia_overview: 'Αποκλειστική οικιστική ανάπτυξη στην περιοχή Columbia της Λεμεσού.',
        columbia_overview_2: 'Υπό μελέτη, στοχεύει σε εκλεπτυσμένη διαβίωση που ταιριάζει στον χαρακτήρα της περιοχής.',
        columbia_overview_short: 'Αποκλειστική οικιστική ανάπτυξη στην περιοχή Columbia.',
        columbia_specs_heading: 'Τεχνικές Λεπτομέρειες',
        columbia_interest_text: 'Επικοινωνήστε μαζί μας για τα Columbia Residences.',

        // Testimonials
        testimonials_label: 'Μαρτυρίες', testimonials_title: 'Τι Λένε οι Πελάτες μας',
        testimonial_1_text: '"Αξιόπιστοι, διαφανείς και αφοσιωμένοι — ένας πραγματικός συνεργάτης. Η T.T. Themelios Lithos παρέδωσε το έργο μας εγκαίρως και ξεπέρασε τις προσδοκίες μας."',
        testimonial_1_role: 'Σύμβουλος',
        testimonial_2_text: '"Μια εταιρεία που μπορείτε να εμπιστευτείτε. Ο Τρυφώνας είναι πάντα διαθέσιμος, λύνει προβλήματα και είναι αξιόπιστος."',
        testimonial_2_role: 'Επενδυτής Ακινήτων',
        testimonial_3_text: '"Η T.T. Themelios Lithos φέρνει ποιότητα και επαγγελματισμό σε κάθε έργο. Συνεργαζόμαστε μαζί τους εδώ και χρόνια."',
        testimonial_3_role: 'Αρχιτέκτονας',

        // CTA
        cta_title: 'Έτοιμοι να Ξεκινήσετε το Έργο σας;',
        cta_text: 'Επικοινωνήστε μαζί μας σήμερα για δωρεάν συμβουλή.',
        cta_button: 'Δωρεάν Προσφορά',

        // Contact
        contact_label: 'Επικοινωνία', contact_title: 'Ας Χτίσουμε Μαζί',
        contact_intro: 'Είτε σχεδιάζετε βίλα, εμπορική ανάπτυξη ή ανακαίνιση, είμαστε εδώ να βοηθήσουμε.',
        contact_address_label: 'Διεύθυνση', contact_phone_label: 'Τηλέφωνο', contact_email_label: 'Email',
        form_name: 'Ονοματεπώνυμο', form_email: 'Email', form_phone: 'Τηλέφωνο',
        form_service: 'Υπηρεσία', form_message: 'Μήνυμα', form_submit: 'Αποστολή',
        form_select: 'Επιλέξτε υπηρεσία', form_residential: 'Οικιστική Κατασκευή',
        form_commercial: 'Εμπορικά Έργα', form_renovation: 'Ανακαίνιση', form_management: 'Διαχείριση Έργων',

        // Footer
        footer_tagline: 'Χτίζοντας αριστεία στην Κύπρο από το 2010.',
        footer_quick_links: 'Γρήγοροι Σύνδεσμοι', footer_services: 'Υπηρεσίες',
        footer_contact: 'Επικοινωνία', footer_rights: 'Με Επιφύλαξη Παντός Δικαιώματος.',
        footer_terms: 'Όροι', footer_privacy: 'Απόρρητο',

        // Renovation Page
        renovation_badge: 'Υπηρεσίες Ανακαίνισης',
        renovation_title: 'Μεταμορφώστε τον Χώρο σας',
        renovation_tagline: 'Ολοκληρωμένες λύσεις ανακαίνισης και εκσυγχρονισμού για οικιστικά και εμπορικά ακίνητα.',
        renovation_cta: 'Δωρεάν Προσφορά', renovation_cta_secondary: 'Οι Υπηρεσίες μας',
        renovation_about_label: 'Γιατί Ανακαίνιση;', renovation_about_title: 'Δώστε Νέα Ζωή στο Ακίνητό σας',
        renovation_about_lead: 'Στην T.T. Themelios Lithos, κατανοούμε ότι το ακίνητό σας είναι κάτι παραπάνω από ένα κτίριο.',
        renovation_about_text: 'Οι υπηρεσίες ανακαίνισής μας δίνουν νέα πνοή σε υφιστάμενα ακίνητα, συνδυάζοντας σύγχρονη λειτουργικότητα με βελτιωμένη αισθητική.',
        renovation_services_label: 'Υπηρεσίες Ανακαίνισης', renovation_services_title: 'Τι Προσφέρουμε',
        reno_kitchen_title: 'Ανακαίνιση Κουζίνας', reno_kitchen_desc: 'Σύγχρονες μεταμορφώσεις κουζίνας με ειδικά ντουλάπια και κορυφαίους πάγκους.',
        reno_bathroom_title: 'Ανακαίνιση Μπάνιου', reno_bathroom_desc: 'Πολυτελείς αναβαθμίσεις μπάνιου με σύγχρονα είδη υγιεινής.',
        reno_full_title: 'Πλήρης Ανακαίνιση', reno_full_desc: 'Πλήρης εσωτερική και εξωτερική ανακαίνιση με δομικές αλλαγές.',
        reno_exterior_title: 'Εξωτερική Όψη', reno_exterior_desc: 'Βελτίωση εξωτερικής εμφάνισης με βαφή, επένδυση και στέγη.',
        process_label: 'Η Διαδικασία μας', process_title: 'Πώς Δουλεύουμε',
        process_step1: 'Συμβουλευτική', process_step2: 'Σχεδιασμός',
        process_step3: 'Κατασκευή', process_step4: 'Ολοκλήρωση',
        renovation_gallery_label: 'Η Δουλειά μας', renovation_gallery_title: 'Έργα Ανακαίνισης',
        renovation_cta_title: 'Έτοιμοι να Μεταμορφώσετε τον Χώρο σας;',
        renovation_cta_text: 'Επικοινωνήστε μαζί μας για δωρεάν συμβουλή και ας συζητήσουμε το έργο ανακαίνισής σας.',
        renovation_cta_button: 'Δωρεάν Προσφορά'
    },

    ru: {
        // Navigation
        nav_home: 'Главная', nav_projects: 'Проекты', nav_renovation: 'Ремонт',
        nav_about: 'О нас', nav_services: 'Услуги', nav_contact: 'Контакты', nav_cta: 'Получить предложение',

        // Hero
        hero_badge: 'С 2010 года',
        hero_title: 'Строим мечты<br>на Кипре',
        hero_tagline: '25 лет международного опыта в создании исключительных жилых и коммерческих проектов по всему острову.',
        hero_cta_projects: 'Наши проекты', hero_cta_contact: 'Бесплатная консультация',
        stat_years: 'Лет', stat_clients: 'Клиентов', stat_cities: 'Города',

        // About
        about_label: 'О нас',
        about_title: 'Мастерство строительства с 2010 года',
        about_lead: 'Основанная в 2010 году, T.T. Themelios Lithos Ltd стала надёжным именем в строительстве и ремонте на Кипре.',
        about_text: 'Под руководством г-на Трифонаса Трифоноса, обладающего более чем 25-летним международным опытом (включая десять лет в США), наша компания специализируется на высококачественных жилых и коммерческих проектах. От ремонта и реставрации до строительства вилл и жилых комплексов — мы стремимся к мастерству, эффективности и честности в каждом проекте.',
        about_badge: 'Лет опыта', about_director_title: 'Технический директор',
        feature_1_title: 'Премиальные материалы', feature_1_desc: 'Мы используем только материалы высочайшего качества от проверенных поставщиков.',
        feature_2_title: 'Сроки в точности', feature_2_desc: 'Мы уважаем ваши сроки и сдаём проекты вовремя.',
        feature_3_title: 'Команда экспертов', feature_3_desc: 'Квалифицированные специалисты с многолетним опытом.',

        // Services
        services_label: 'Наши услуги', services_title: 'Что мы строим для вас',
        services_subtitle: 'От роскошных вилл до коммерческих комплексов — мы обеспечиваем превосходство в любом масштабе.',
        service_residential_title: 'Жилое строительство',
        service_residential_desc: 'Роскошные виллы и жилые комплексы, созданные с точностью и из премиальных материалов.',
        service_commercial_title: 'Коммерческие проекты',
        service_commercial_desc: 'Профессиональные коммерческие помещения, разработанные для функциональности и успеха бизнеса.',
        service_renovation_title: 'Ремонт',
        service_renovation_desc: 'Полный ремонт и модернизация существующих объектов с качественным исполнением.',
        service_management_title: 'Управление проектами',
        service_management_desc: 'Комплексное управление проектами с контролем сроков, бюджетов и стандартов качества.',
        service_link: 'Подробнее →', service_link_renovation: 'Смотреть проекты →',

        // Stats
        stat_experience: 'Лет опыта', stat_projects: 'Завершённых проектов',

        // Projects Index
        projects_label: 'Портфолио', projects_title: 'Наши проекты',
        projects_subtitle: 'Откройте для себя наши жилые и коммерческие строительные проекты по всему Кипру.',
        filter_all: 'Все', filter_residential: 'Жилые', filter_commercial: 'Коммерческие', filter_construction: 'Строящиеся',
        project_view: 'Подробнее', price_from: 'От',
        project_type_residential: 'Жилой', project_type_commercial: 'Коммерческий',
        status_under_construction: 'Строится', status_sold: 'Продано',
        status_under_study: 'На стадии изучения', status_available: 'Доступно', status_completed: 'Завершено',
        floors: '3 Этажа',

        // Project Detail Shared
        overview_title: 'Обзор проекта', gallery_title: 'Галерея проекта',
        specs_title: 'Характеристики', pricing_title: 'Цены', resources_title: 'Ресурсы',
        specs_interior: 'Внутренние характеристики', specs_exterior: 'Внешние характеристики', specs_location: 'Преимущества расположения',
        stat_units: 'Квартир', stat_unit: 'Квартира', stat_completion: 'Завершение',
        stat_area: 'Общая площадь', stat_value: 'Стоимость проекта', stat_price: 'Цена',
        stat_price_from: 'Начальная цена', stat_floors: 'Этажей',
        interest_title: 'Заинтересовались проектом?', email_us: 'Написать нам',
        download_brochure: 'Скачать брошюру', view_on_map: 'Посмотреть на карте',
        download_plans: 'Скачать планы', view_3d_gallery: '3D Галерея',
        table_floor: 'Этаж', table_unit: 'Квартира', table_type: 'Тип',
        table_status: 'Статус', table_price: 'Цена', table_area: 'Площадь',

        // Panthea
        panthea_title: 'Panthea Residences',
        panthea_overview: 'Panthea Residences — это вершина современной жилой жизни в самом престижном районе Лимассола на холме. Этот эксклюзивный проект включает роскошные квартиры с панорамным видом на Средиземное море, сочетающие современную архитектуру с вечной элегантностью.',
        panthea_overview_2: 'Каждая резиденция тщательно спроектирована для максимизации естественного освещения и открытых жилых пространств, с просторными террасами, стирающими границы между внутренним комфортом и средиземноморским климатом.',
        panthea_overview_short: 'Роскошные резиденции на холме с панорамным видом на Средиземное море и современным дизайном.',
        panthea_pricing_heading: 'Доступные квартиры и цены',
        panthea_gallery_heading: 'Галерея', panthea_specs_heading: 'Технические детали',
        panthea_resources_heading: 'Загрузки и расположение',
        panthea_interest_text: 'Свяжитесь с нами для получения информации о доступных квартирах и ценах на Panthea Residences.',
        panthea_floor_1: '1-й этаж', panthea_floor_2: '2-й этаж', panthea_floor_3: '3-й этаж',
        panthea_spec_1: 'Итальянский мрамор во всех помещениях', panthea_spec_2: 'Дизайнерская кухня со встроенной техникой',
        panthea_spec_3: 'Система автоматизации «Умный дом»', panthea_spec_4: 'Напольное отопление и охлаждение',
        panthea_spec_5: 'Алюминиевые рамы от пола до потолка с двойным остеклением',
        panthea_spec_6: 'Частные террасы на крыше с подготовкой для джакузи',
        panthea_spec_7: 'Ландшафтные сады с автоматическим поливом',
        panthea_spec_8: 'Крытая парковка на 2 автомобиля на квартиру',
        panthea_spec_9: 'Общий бассейн с солнечной террасой', panthea_spec_10: 'Охрана 24/7 с видеонаблюдением',
        panthea_spec_11: '5 минут до центра Лимассола', panthea_spec_12: 'Пешая доступность до международных школ',
        panthea_spec_13: 'Рядом с супермаркетами и ресторанами', panthea_spec_14: 'Удобный доступ к автомагистрали',
        panthea_spec_15: 'Вид на море со всех этажей',

        // Agios Athanasios
        agios_title: 'Agios Athanasios Residences',
        agios_overview: 'Agios Athanasios Residences — это современный жилой комплекс, расположенный в одном из самых востребованных районов Лимассола. Проект предлагает эксклюзивные квартиры с современными удобствами и высококачественной отделкой.',
        agios_overview_2: 'Проект делает акцент на устойчивое проживание с энергоэффективными системами, экологичными материалами и продуманным дизайном.',
        agios_overview_short: 'Современный жилой комплекс с устойчивым дизайном и городской элегантностью.',
        agios_pricing_heading: 'Доступные квартиры и цены',
        agios_gallery_heading: 'Галерея', agios_specs_heading: 'Технические детали',
        agios_resources_heading: 'Загрузки и ресурсы',
        agios_interest_text: 'Свяжитесь с нами для получения информации о доступных квартирах Agios Athanasios Residences.',
        agios_spec_1: 'Высококачественная керамика и паркетные полы', agios_spec_2: 'Полностью оборудованные кухни с европейской техникой',
        agios_spec_3: 'Система кондиционирования VRF', agios_spec_4: 'LED-освещение во всех помещениях',
        agios_spec_5: 'Термические алюминиевые рамы со звукоизоляцией',
        agios_spec_6: 'Частные балконы с алюминиевыми перголами',
        agios_spec_7: 'Общие сады с местными растениями',
        agios_spec_8: 'Крытая парковка с зарядными станциями для электромобилей',
        agios_spec_9: 'Бассейн с зоной отдыха у бассейна', agios_spec_10: 'Велопарковка и зарядная станция',
        agios_spec_11: 'Пешая доступность до местных удобств', agios_spec_12: 'Рядом с общественным транспортом',
        agios_spec_13: 'Рядом со школами и медицинскими учреждениями', agios_spec_14: 'Удобный доступ в центр Лимассола',
        agios_spec_15: 'Тихий жилой район',

        // Historic City Centre
        historic_title: 'Исторический центр города, Лимассол',
        historic_overview: 'Передовой коммерческий офисный проект в самом сердце исторического старого города Лимассола. TRYMAN OFFICE HUB восстановит и модернизирует первоклассное расположение на улице Василеос Македонос.',
        historic_overview_2: 'Проект находится на стадии архитектурного изучения, с планами интеграции современного дизайна с богатым историческим характером района.',
        historic_overview_short: 'Передовой коммерческий офисный проект, восстанавливающий историческое здание на улице Василеос Македонос.',
        historic_specs_heading: 'Технические детали', historic_resources_heading: 'Загрузки и расположение',
        historic_interest_text: 'Свяжитесь с нами для получения информации об этом проекте в историческом центре Лимассола.',

        // Yermasoyia
        yermasoyia_title: 'Бизнес-центр Ермасойя',
        yermasoyia_overview: 'Современный коммерческий проект в сердце Ермасойи, одного из самых динамичных деловых районов Лимассола.',
        yermasoyia_overview_2: 'В настоящее время на стадии изучения. Проект нацелен на установление нового стандарта коммерческой недвижимости в регионе.',
        yermasoyia_overview_short: 'Современный коммерческий проект с офисными и торговыми помещениями премиум-класса.',
        yermasoyia_specs_heading: 'Технические детали', yermasoyia_resources_heading: 'Загрузки и ресурсы',
        yermasoyia_interest_text: 'Свяжитесь с нами о коммерческих возможностях в Бизнес-центре Ермасойя.',

        // Makarios Avenue
        makarios_title: 'Бизнес-центр на Макариос Авеню',
        makarios_overview: 'Коммерческое здание на одной из самых заметных магистралей Лимассола — проспекте Макариоса. В настоящее время на стадии изучения, доступно для аренды или совместных деловых предложений.',
        makarios_overview_2: 'Здание сохраняет структурный характер при полном обновлении всех систем и отделки до современных стандартов бизнеса.',
        makarios_overview_short: 'Коммерческое здание на проспекте Макариоса — доступно для аренды или совместного бизнеса.',
        makarios_gallery_heading: 'Галерея', makarios_specs_heading: 'Технические детали',
        makarios_interest_text: 'Свяжитесь с нами о доступных помещениях в Бизнес-центре на Макариос Авеню.',

        // Mesa Geitonia
        mesa_title: 'Mesa Geitonia Residences',
        mesa_overview: 'Mesa Geitonia Residences — современный жилой проект в одном из самых устоявшихся районов Лимассола. Проект включает современные квартиры, построенные с качественными материалами и вниманием к деталям.',
        mesa_overview_2: 'Благодаря удобному доступу к школам, магазинам и центру города, этот проект сочетает пригородное спокойствие с городским удобством.',
        mesa_overview_short: 'Современный жилой проект с качественными материалами и удобным расположением в Лимассоле.',
        mesa_gallery_heading: 'Галерея', mesa_specs_heading: 'Технические детали',
        mesa_resources_heading: 'Загрузки и ресурсы',
        mesa_interest_text: 'Свяжитесь с нами для информации о Mesa Geitonia Residences.',

        // Columbia
        columbia_title: 'Columbia Residences',
        columbia_overview: 'Эксклюзивный жилой проект, запланированный для престижного района Коламбия в Лимассоле. Проект предложит роскошные квартиры с премиальной отделкой.',
        columbia_overview_2: 'В настоящее время на стадии изучения, Columbia Residences нацелен на создание изысканного жилого пространства, соответствующего характеру района.',
        columbia_overview_short: 'Эксклюзивный жилой проект для престижного района Коламбия в Лимассоле.',
        columbia_specs_heading: 'Технические детали',
        columbia_interest_text: 'Свяжитесь с нами для информации о Columbia Residences.',

        // Testimonials
        testimonials_label: 'Отзывы', testimonials_title: 'Что говорят наши клиенты',
        testimonial_1_text: '«Надёжная, прозрачная и преданная компания — настоящий партнёр во всех смыслах. T.T. Themelios Lithos завершили наш проект вовремя и превзошли наши ожидания.»',
        testimonial_1_role: 'Консультант',
        testimonial_2_text: '«Компания, которой можно доверять от начала до конца. Трифонас всегда на связи, ориентирован на решения и надёжен. Мы работали с ними над несколькими проектами.»',
        testimonial_2_role: 'Инвестор в недвижимость',
        testimonial_3_text: '«T.T. Themelios Lithos привносит качество и профессионализм в каждый проект. Мы сотрудничаем с ними годами — всегда отличный опыт.»',
        testimonial_3_role: 'Архитектор',

        // CTA
        cta_title: 'Готовы начать свой проект?',
        cta_text: 'Свяжитесь с нами сегодня для бесплатной консультации и воплотим ваше видение в жизнь.',
        cta_button: 'Бесплатная оценка',

        // Contact
        contact_label: 'Контакты', contact_title: 'Давайте строить вместе',
        contact_intro: 'Планируете жилую виллу, коммерческий проект или ремонт? Мы поможем воплотить ваше видение в жизнь.',
        contact_address_label: 'Адрес', contact_phone_label: 'Телефон', contact_email_label: 'Электронная почта',
        form_name: 'Полное имя', form_email: 'Электронная почта', form_phone: 'Телефон',
        form_service: 'Услуга', form_message: 'Сообщение', form_submit: 'Отправить',
        form_select: 'Выберите услугу', form_residential: 'Жилое строительство',
        form_commercial: 'Коммерческие проекты', form_renovation: 'Ремонт', form_management: 'Управление проектами',

        // Footer
        footer_tagline: 'Строим с мастерством на Кипре с 2010 года.',
        footer_quick_links: 'Быстрые ссылки', footer_services: 'Услуги',
        footer_contact: 'Контакты', footer_rights: 'Все права защищены.',
        footer_terms: 'Условия', footer_privacy: 'Конфиденциальность',

        // Renovation Page
        renovation_badge: 'Услуги ремонта',
        renovation_title: 'Преобразите ваше пространство',
        renovation_tagline: 'Комплексные решения по ремонту и модернизации жилых и коммерческих объектов по всему Кипру.',
        renovation_cta: 'Бесплатная оценка', renovation_cta_secondary: 'Наши услуги',
        renovation_about_label: 'Почему ремонт?', renovation_about_title: 'Дайте вашей недвижимости новую жизнь',
        renovation_about_lead: 'В T.T. Themelios Lithos мы понимаем, что ваша недвижимость — это больше, чем просто здание.',
        renovation_about_text: 'Наши услуги по ремонту вдыхают новую жизнь в существующие объекты, сочетая современную функциональность с улучшенной эстетикой.',
        renovation_services_label: 'Услуги ремонта', renovation_services_title: 'Что мы предлагаем',
        reno_kitchen_title: 'Ремонт кухни', reno_kitchen_desc: 'Современные кухонные трансформации с индивидуальными шкафами и премиальными столешницами.',
        reno_bathroom_title: 'Ремонт ванной', reno_bathroom_desc: 'Роскошные обновления ванных комнат с современной сантехникой и спа-удобствами.',
        reno_full_title: 'Полный ремонт', reno_full_desc: 'Комплексный ремонт интерьера и экстерьера, включая перепланировку, электрику и сантехнику.',
        reno_exterior_title: 'Экстерьер и фасад', reno_exterior_desc: 'Улучшение внешнего вида: покраска, облицовка, кровля и ландшафтный дизайн.',
        process_label: 'Наш процесс', process_title: 'Как мы работаем',
        process_step1: 'Консультация', process_step2: 'Дизайн и планирование',
        process_step3: 'Строительство', process_step4: 'Завершение',
        renovation_gallery_label: 'Наши работы', renovation_gallery_title: 'Проекты ремонта',
        renovation_cta_title: 'Готовы преобразить ваше пространство?',
        renovation_cta_text: 'Свяжитесь с нами для бесплатной консультации и обсудим ваш проект ремонта.',
        renovation_cta_button: 'Бесплатная оценка'
    }
};

// Language Switcher
class LanguageSwitcher {
    constructor() {
        this.currentLang = 'en';
        // Support both old dropdown and new inline buttons
        this.langToggle = document.getElementById('lang-toggle');
        this.langDropdown = document.getElementById('lang-dropdown');
        this.langCurrent = document.getElementById('lang-current');
        this.langOptions = document.querySelectorAll('.lang-option');
        this.mobileLangBtns = document.querySelectorAll('.mobile-lang-btn');
        this.inlineLangBtns = document.querySelectorAll('.lang-inline-btn');
        this.init();
    }

    init() {
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && translations[savedLang]) this.currentLang = savedLang;
        this.applyLanguage(this.currentLang);
        this.updateLangDisplay();
        this.bindEvents();
    }

    bindEvents() {
        // Old dropdown toggle
        if (this.langToggle) {
            this.langToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this.langDropdown) this.langDropdown.classList.toggle('active');
                this.langToggle.classList.toggle('active');
            });
        }
        document.addEventListener('click', () => {
            if (this.langDropdown) this.langDropdown.classList.remove('active');
            if (this.langToggle) this.langToggle.classList.remove('active');
        });
        // Old dropdown options
        this.langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                this.changeLanguage(option.dataset.lang);
                if (this.langDropdown) this.langDropdown.classList.remove('active');
                if (this.langToggle) this.langToggle.classList.remove('active');
            });
        });
        // Mobile lang buttons
        this.mobileLangBtns.forEach(btn => {
            btn.addEventListener('click', () => this.changeLanguage(btn.dataset.lang));
        });
        // NEW: Inline language buttons
        this.inlineLangBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.changeLanguage(btn.dataset.lang);
            });
        });
    }

    changeLanguage(lang) {
        if (!translations[lang]) return;
        this.currentLang = lang;
        localStorage.setItem('preferred-language', lang);
        this.applyLanguage(lang);
        this.updateLangDisplay();
        this.updateMobileLangButtons();
        this.updateInlineLangButtons();
    }

    applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.dataset.lang;
            // Skip language switcher buttons
            if (element.classList.contains('lang-option') ||
                element.classList.contains('mobile-lang-btn') ||
                element.classList.contains('lang-inline-btn')) return;
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else if (element.tagName === 'SELECT') {
                    element.querySelectorAll('option').forEach(option => {
                        const optionKey = option.dataset.lang;
                        if (optionKey && translations[lang][optionKey]) {
                            option.textContent = translations[lang][optionKey];
                        }
                    });
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
    }

    updateLangDisplay() {
        const langNames = { en: 'EN', el: 'EL', ru: 'RU' };
        if (this.langCurrent) this.langCurrent.textContent = langNames[this.currentLang];
        this.langOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.lang === this.currentLang);
        });
        this.updateInlineLangButtons();
    }

    updateMobileLangButtons() {
        if (this.mobileLangBtns) {
            this.mobileLangBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
            });
        }
    }

    updateInlineLangButtons() {
        if (this.inlineLangBtns) {
            this.inlineLangBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
            });
        }
    }
}

// Contact Form
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        if (this.form) this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData);
            let isValid = true;
            this.form.querySelectorAll('input[required], textarea[required]').forEach(field => {
                if (!field.value.trim()) isValid = false;
            });
            if (isValid) this.submitForm(data);
        });
    }

    submitForm(data) {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;
        setTimeout(() => {
            console.log('Form submitted:', data);
            this.showSuccessMessage();
            this.form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    }

    showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.classList.add('form-success');
        successDiv.innerHTML = '<p style="text-align:center;color:#38A169;padding:2rem;">Thank you! We\'ll contact you soon.</p>';
        this.form.innerHTML = '';
        this.form.appendChild(successDiv);
    }
}

// Smooth Scroll
class SmoothScroll {
    constructor() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const header = document.getElementById('header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    const position = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: position, behavior: 'smooth' });
                }
            });
        });
    }
}

// Mobile Menu Toggle
class MobileMenu {
    constructor() {
        this.toggle = document.querySelector('.mobile-menu-toggle');
        this.menu = document.querySelector('.nav-menu');
        if (this.toggle && this.menu) this.init();
    }

    init() {
        this.toggle.addEventListener('click', () => {
            this.menu.classList.toggle('active');
            this.toggle.classList.toggle('active');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
    new ContactForm();
    new SmoothScroll();
    new MobileMenu();
});
