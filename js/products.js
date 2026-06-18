// ============================================
// SUMINA'S STATIONERY — Product Data
// ============================================

const DEFAULT_PRODUCTS = [
  // ---- Notebooks & Journals ----
  {
    id: 1,
    name: { en: "Spiral Notebook A5", np: "स्पाइरल नोटबुक A5" },
    category: "notebooks",
    price: 250,
    oldPrice: null,
    badge: "new",
    image: "images/spiral-notebook.jpg",
    description: {
      en: "Perfect for everyday notes, journaling, and quick sketches. 200 pages of smooth 80 GSM paper.",
      np: "दैनिक नोट, जर्नलिङ, र स्केचको लागि उत्तम। ८० जिएसएम चिल्लो कागजका २०० पाना।"
    }
  },
  {
    id: 2,
    name: { en: "Hardcover Journal", np: "हार्डकभर जर्नल" },
    category: "notebooks",
    price: 450,
    oldPrice: 550,
    badge: "sale",
    image: "images/hardcover-journal.jpg",
    description: {
      en: "Premium hardcover journal with gold-edged pages. 200 pages, lay-flat binding. A timeless keepsake.",
      np: "गोल्ड एज पाना सहितको प्रिमियम हार्डकभर जर्नल। २०० पाना, ले-फ्ल्याट बाइन्डिङ।"
    }
  },
  {
    id: 3,
    name: { en: "Mini Notepad Set (3 pcs)", np: "मिनी नोटप्याड सेट (३ पिस)" },
    category: "notebooks",
    price: 180,
    oldPrice: null,
    badge: null,
    image: "images/mini-notepad.jpg",
    description: {
      en: "Set of 3 colorful mini notepads in pastel shades. Perfect for quick memos and lists.",
      np: "प्यास्टल रंगमा ३ वटा रंगीन मिनी नोटप्याडको सेट। छिटो मेमो र सूचीका लागि उत्तम।"
    }
  },

  // ---- Writing Tools ----
  {
    id: 4,
    name: { en: "Black Gel Pen Set (12 pcs)", np: "ब्ल्याक जेल पेन सेट (१२ पिस)" },
    category: "pens",
    price: 320,
    oldPrice: null,
    badge: "hot",
    image: "images/cat-pens.jpg",
    description: {
      en: "Smooth 0.5mm gel pens for crisp, clean writing. Smear-resistant quick-dry ink. Set of 12.",
      np: "स्पष्ट, सफा लेखाइका लागि ०.५ मिमी जेल पेन। धब्बा-प्रतिरोधी छिटो सुक्ने मसी। १२ पिसको सेट।"
    }
  },
  {
    id: 5,
    name: { en: "Highlighter Set (6 colors)", np: "हाइलाइटर सेट (६ रंग)" },
    category: "pens",
    price: 280,
    oldPrice: null,
    badge: null,
    image: "images/cat-pens.jpg",
    description: {
      en: "Vibrant fluorescent highlighters that won't bleed through pages. Chisel tip for thick and thin lines. 6 colors.",
      np: "पाना चुहिनन् यस्तो उज्यालो फ्लोरोसेन्ट हाइलाइटर। बाक्लो र पातलो रेखाका लागि छेनी टिप। ६ रंग।"
    }
  },
  {
    id: 6,
    name: { en: "Watercolor Brush Markers (24 pcs)", np: "वाटरकलर ब्रश मार्कर (२४ पिस)" },
    category: "pens",
    price: 650,
    oldPrice: 800,
    badge: "sale",
    image: "images/cat-pens.jpg",
    description: {
      en: "Professional dual-tip watercolor brush markers. Flexible brush tip + fine liner. 24 vibrant colors.",
      np: "प्रोफेशनल ड्युअल-टिप वाटरकलर ब्रश मार्कर। लचिलो ब्रश टिप + फाइन लाइनर। २४ चम्किलो रंग।"
    }
  },
  {
    id: 7,
    name: { en: "Fountain Pen Premium", np: "फाउन्टेन पेन प्रिमियम" },
    category: "pens",
    price: 780,
    oldPrice: null,
    badge: "new",
    image: "images/cat-pens.jpg",
    description: {
      en: "Elegant stainless steel fountain pen with medium nib. Smooth ink flow. Comes with 5 ink cartridges.",
      np: "मिडियम निब सहितको एलिगेन्ट स्टेनलेस स्टिल फाउन्टेन पेन। सहज मसी प्रवाह। ५ मसी कार्ट्रिज सहित।"
    }
  },

  // ---- Art Supplies ----
  {
    id: 8,
    name: { en: "Sketchbook A4", np: "स्केचबुक A4" },
    category: "art",
    price: 380,
    oldPrice: null,
    badge: null,
    image: "images/cat-art.jpg",
    description: {
      en: "100 GSM thick sketch paper, 80 sheets. Spiral bound for easy lay-flat use. Acid-free archival paper.",
      np: "१०० जिएसएम बाक्लो स्केच कागज, ८० पाना। सहज ले-फ्ल्याट प्रयोगका लागि स्पाइरल बाउन्ड।"
    }
  },
  {
    id: 9,
    name: { en: "Watercolor Set (24 colors)", np: "वाटरकलर सेट (२४ रंग)" },
    category: "art",
    price: 550,
    oldPrice: null,
    badge: "hot",
    image: "images/cat-art.jpg",
    description: {
      en: "Professional grade watercolor paints with highly pigmented, lightfast colors. Includes mixing palette and 2 brushes.",
      np: "उच्च पिगमेन्टेड, लाइटफास्ट रंग सहितको प्रोफेशनल ग्रेड वाटरकलर पेन्ट। मिक्सिङ प्यालेट र २ ब्रश सहित।"
    }
  },
  {
    id: 10,
    name: { en: "Colored Pencils (36 pcs)", np: "रंगीन पेन्सिल (३६ पिस)" },
    category: "art",
    price: 480,
    oldPrice: 580,
    badge: "sale",
    image: "images/cat-art.jpg",
    description: {
      en: "Soft core oil-based colored pencils for smooth blending. 36 rich colors in a tin case.",
      np: "सहज ब्लेन्डिङका लागि सफ्ट कोर तेल-आधारित रंगीन पेन्सिल। टिन केसमा ३६ समृद्ध रंग।"
    }
  },

  // ---- Office Supplies ----
  {
    id: 11,
    name: { en: "Stainless Steel Scissors", np: "स्टेनलेस स्टिल कैंची" },
    category: "office",
    price: 220,
    oldPrice: null,
    badge: null,
    image: "images/cat-office.jpg",
    description: {
      en: "Sharp stainless steel scissors with comfortable rubber grip handles. Multipurpose for paper, fabric and more.",
      np: "आरामदायक रबर ग्रिप ह्यान्डल सहितको तीक्ष्ण स्टेनलेस स्टिल कैंची। कागज, कपडा र थप कार्यका लागि।"
    }
  },
  {
    id: 12,
    name: { en: "Washi Tape Set (10 rolls)", np: "वाशी टेप सेट (१० रोल)" },
    category: "office",
    price: 340,
    oldPrice: null,
    badge: "new",
    image: "images/cat-office.jpg",
    description: {
      en: "Decorative washi tapes in beautiful floral and geometric patterns. Repositionable, writable surface.",
      np: "सुन्दर फ्लोरल र जियोमेट्रिक नमूनामा सजावटी वाशी टेप। पुन: राख्न मिल्ने, लेख्न मिल्ने सतह।"
    }
  },
  {
    id: 13,
    name: { en: "Stapler Set with 1000 Staples", np: "स्टेपलर सेट १००० स्टेपल सहित" },
    category: "office",
    price: 290,
    oldPrice: null,
    badge: null,
    image: "images/cat-office.jpg",
    description: {
      en: "Full-size heavy duty stapler with a box of 1000 standard staples. Staples up to 30 sheets.",
      np: "१००० स्ट्यान्डर्ड स्टेपलको बक्स सहितको फुल-साइज हेभी ड्युटी स्टेपलर। ३० पानासम्म स्टेपल गर्न सकिन्छ।"
    }
  },

  // ---- Planners & Organizers ----
  {
    id: 14,
    name: { en: "Weekly Planner 2025", np: "साप्ताहिक प्लानर २०२५" },
    category: "planners",
    price: 350,
    oldPrice: null,
    badge: "hot",
    image: "images/cat-planners.jpg",
    description: {
      en: "Beautiful A5 weekly planner with habit tracker, goal setting pages, and monthly reviews. Hardcover.",
      np: "ह्याबिट ट्र्याकर, लक्ष्य सेटिङ पाना, र मासिक समीक्षा सहितको सुन्दर A5 साप्ताहिक प्लानर। हार्डकभर।"
    }
  },
  {
    id: 15,
    name: { en: "Sticky Notes Pack (5 colors)", np: "स्टिकी नोट प्याक (५ रंग)" },
    category: "planners",
    price: 130,
    oldPrice: null,
    badge: null,
    image: "images/cat-planners.jpg",
    description: {
      en: "200 sticky notes in 5 vibrant pastel colors. Super adhesive, leaves no residue. 3x3 inch size.",
      np: "५ चम्किलो प्यास्टल रंगमा २०० स्टिकी नोट। सुपर एडहेसिभ, कुनै अवशेष छोड्दैन। ३x३ इन्च साइज।"
    }
  },
  {
    id: 16,
    name: { en: "Monthly Desk Calendar", np: "मासिक डेस्क क्यालेन्डर" },
    category: "planners",
    price: 200,
    oldPrice: null,
    badge: null,
    image: "images/cat-planners.jpg",
    description: {
      en: "Desktop calendar with large writing space for each day. Illustrated with floral artwork. Stands upright.",
      np: "प्रत्येक दिनको लागि ठूलो लेखाइ ठाउँ भएको डेस्कटप क्यालेन्डर। फ्लोरल आर्टवर्कले सजिएको।"
    }
  },

  // ---- Gift Sets ----
  {
    id: 17,
    name: { en: "Premium Stationery Gift Box", np: "प्रिमियम स्टेशनरी गिफ्ट बक्स" },
    category: "gifts",
    price: 1200,
    oldPrice: null,
    badge: "hot",
    image: "images/cat-gifts.jpg",
    description: {
      en: "Curated gift box with: 1 hardcover journal, 1 gel pen set, 1 highlighter set, 1 sticky notes pack. Beautifully wrapped.",
      np: "क्युरेटेड गिफ्ट बक्स: १ हार्डकभर जर्नल, १ जेल पेन सेट, १ हाइलाइटर सेट, १ स्टिकी नोट प्याक। सुन्दर रूपमा र‍्यापिंग।"
    }
  },
  {
    id: 18,
    name: { en: "Student Starter Kit", np: "विद्यार्थी स्टार्टर किट" },
    category: "gifts",
    price: 850,
    oldPrice: 1000,
    badge: "sale",
    image: "images/cat-gifts.jpg",
    description: {
      en: "Everything a student needs: spiral notebook, pen set, highlighters, sticky notes and a pouch. Great school gift!",
      np: "विद्यार्थीलाई चाहिने सबै: स्पाइरल नोटबुक, पेन सेट, हाइलाइटर, स्टिकी नोट र पाउच। राम्रो स्कूल उपहार!"
    }
  },
  {
    id: 19,
    name: { en: "Artist Gift Set", np: "कलाकार गिफ्ट सेट" },
    category: "gifts",
    price: 1500,
    oldPrice: null,
    badge: "new",
    image: "images/cat-gifts.jpg",
    description: {
      en: "Complete set for the creative soul: A4 sketchbook, watercolor set, colored pencils and 3 brushes in an elegant box.",
      np: "सिर्जनात्मक व्यक्तिका लागि सम्पूर्ण सेट: A4 स्केचबुक, वाटरकलर सेट, रंगीन पेन्सिल र ३ ब्रश एलिगेन्ट बक्समा।"
    }
  },
  {
    id: 20,
    name: { en: "Back to School Bundle", np: "ब्याक टु स्कूल बन्डल" },
    category: "gifts",
    price: 650,
    oldPrice: 800,
    badge: "sale",
    image: "images/cat-gifts.jpg",
    description: {
      en: "Essential school bundle: 3 notebooks, black gel pens, ruler, scissors, and highlighters. Value for money!",
      np: "आवश्यक स्कूल बन्डल: ३ नोटबुक, ब्ल्याक जेल पेन, रुलर, कैंची, र हाइलाइटर। पैसाको मूल्य!"
    }
  }
];

let PRODUCTS = JSON.parse(localStorage.getItem("ss_products"));
if (!PRODUCTS || PRODUCTS.length === 0) {
  PRODUCTS = DEFAULT_PRODUCTS;
  localStorage.setItem("ss_products", JSON.stringify(PRODUCTS));
}

function saveProductsToStorage(newProducts) {
  PRODUCTS = newProducts;
  localStorage.setItem("ss_products", JSON.stringify(PRODUCTS));
}

// Category metadata
const CATEGORIES = [
  { id: "notebooks", name: { en: "Notebooks & Journals", np: "नोटबुक र जर्नल" }, icon: "📓", image: "images/cat-notebooks.jpg" },
  { id: "pens",      name: { en: "Pens & Markers",       np: "पेन र मार्कर" },    icon: "✏️", image: "images/cat-pens.jpg" },
  { id: "art",       name: { en: "Art Supplies",          np: "आर्ट सप्लाइज" },   icon: "🎨", image: "images/cat-art.jpg" },
  { id: "office",    name: { en: "Office Supplies",       np: "अफिस सप्लाइज" },   icon: "📎", image: "images/cat-office.jpg" },
  { id: "planners",  name: { en: "Planners & Organizers", np: "प्लानर र अर्गेनाइजर" }, icon: "📅", image: "images/cat-planners.jpg" },
  { id: "gifts",     name: { en: "Gift Sets",             np: "गिफ्ट सेट" },      icon: "🎁", image: "images/cat-gifts.jpg" }
];

// Get product by id
function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

// Get products by category
function getProductsByCategory(category) {
  if (!category || category === "all") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

// Format price in NPR
function formatPrice(price) {
  const symbol = typeof t === "function" ? t("currency") : "Rs.";
  let formatted = price.toLocaleString();
  if (typeof currentLang !== "undefined" && currentLang === "np") {
    const nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    formatted = formatted.replace(/[0-9]/g, digit => nepaliDigits[parseInt(digit)]);
  }
  return symbol + " " + formatted;
}
