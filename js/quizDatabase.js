/**
 * Quiz Database - Soal Bangun Ruang Kelas 9
 * Database berisi soal-soal untuk Tabung, Kerucut, dan Bola
 */

export const quizDatabase = {
  cylinder: [
    {
      question: 'Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Berapa luas alas tabung? (π = 22/7)',
      options: ['154 cm²', '220 cm²', '308 cm²', '77 cm²'],
      correct: 0,
      explanation: 'Luas alas = πr² = 22/7 × 7² = 22/7 × 49 = 154 cm²',
      topic: 'alas'
    },
    {
      question: 'Luas selimut tabung dengan r = 5 cm dan t = 12 cm adalah? (π = 3,14)',
      options: ['188,4 cm²', '314 cm²', '376,8 cm²', '565,2 cm²'],
      correct: 2,
      explanation: 'Luas selimut = 2πrt = 2 × 3,14 × 5 × 12 = 376,8 cm²',
      topic: 'lateral'
    },
    {
      question: 'Volume tabung dengan r = 10 cm dan t = 15 cm adalah? (π = 3,14)',
      options: ['1413 cm³', '2826 cm³', '4710 cm³', '7065 cm³'],
      correct: 2,
      explanation: 'Volume = πr²t = 3,14 × 10² × 15 = 3,14 × 100 × 15 = 4710 cm³',
      topic: 'volume'
    },
    {
      question: 'Luas permukaan tabung dengan r = 6 cm dan t = 8 cm adalah? (π = 3,14)',
      options: ['527,52 cm²', '614,96 cm²', '703,36 cm²', '791,28 cm²'],
      correct: 0,
      explanation: 'Luas permukaan = 2πr² + 2πrt = 2 × 3,14 × 6² + 2 × 3,14 × 6 × 8 = 226,08 + 301,44 = 527,52 cm²',
      topic: 'volume'
    },
    {
      question: 'Jika luas alas tabung adalah 314 cm² dan π = 3,14, berapa jari-jarinya?',
      options: ['5 cm', '10 cm', '15 cm', '20 cm'],
      correct: 1,
      explanation: 'πr² = 314; r² = 314/3,14 = 100; r = 10 cm',
      topic: 'alas'
    },
    {
      question: 'Sebuah tabung dengan r = 7 cm dan t = 20 cm. Berapa luas permukaan tabung? (π = 22/7)',
      options: ['880 cm²', '1188 cm²', '1496 cm²', '1760 cm²'],
      correct: 1,
      explanation: 'Luas permukaan = 2πr(r+t) = 2 × 22/7 × 7 × 27 = 44 × 27 = 1188 cm²',
      topic: 'volume'
    },
    {
      question: 'Tabung dengan volume 1540 cm³ dan r = 7 cm. Berapa tingginya? (π = 22/7)',
      options: ['10 cm', '15 cm', '20 cm', '25 cm'],
      correct: 0,
      explanation: 'V = πr²t; 1540 = 22/7 × 49 × t; t = 1540/154 = 10 cm',
      topic: 'height'
    },
    {
      question: 'Luas selimut tabung adalah 880 cm² dan t = 10 cm. Berapa jari-jarinya? (π = 22/7)',
      options: ['7 cm', '10 cm', '14 cm', '20 cm'],
      correct: 2,
      explanation: '2πrt = 880; 2 × 22/7 × r × 10 = 880; r = 14 cm',
      topic: 'lateral'
    },
    {
      question: 'Dua tabung mempunyai jari-jari sama. Tabung A tingginya 10 cm, tabung B tingginya 20 cm. Perbandingan volume A:B adalah?',
      options: ['1:2', '1:3', '1:4', '2:3'],
      correct: 0,
      explanation: 'V = πr²t; V_A/V_B = (πr²×10)/(πr²×20) = 10/20 = 1/2',
      topic: 'volume'
    },
    {
      question: 'Tabung berdiameter 20 cm dan tinggi 14 cm. Berapa volume tabung? (π = 22/7)',
      options: ['4400 cm³', '6600 cm³', '8800 cm³', '11000 cm³'],
      correct: 0,
      explanation: 'r = 10 cm; V = πr²t = 22/7 × 100 × 14 = 4400 cm³',
      topic: 'volume'
    }
  ],
  cone: [
    {
      question: 'Sebuah kerucut memiliki jari-jari 6 cm dan tinggi 8 cm. Berapa garis pelukisnya?',
      options: ['10 cm', '12 cm', '14 cm', '16 cm'],
      correct: 0,
      explanation: 's = √(r² + t²) = √(6² + 8²) = √(36 + 64) = √100 = 10 cm',
      topic: 'lateral'
    },
    {
      question: 'Luas alas kerucut dengan r = 7 cm adalah? (π = 22/7)',
      options: ['154 cm²', '220 cm²', '308 cm²', '440 cm²'],
      correct: 0,
      explanation: 'Luas alas = πr² = 22/7 × 7² = 154 cm²',
      topic: 'alas'
    },
    {
      question: 'Luas selimut kerucut dengan r = 5 cm dan s = 13 cm adalah? (π = 3,14)',
      options: ['157 cm²', '204,1 cm²', '251,2 cm²', '314 cm²'],
      correct: 1,
      explanation: 'Luas selimut = πrs = 3,14 × 5 × 13 = 204,1 cm²',
      topic: 'lateral'
    },
    {
      question: 'Volume kerucut dengan r = 10 cm dan t = 12 cm adalah? (π = 3,14)',
      options: ['314 cm³', '628 cm³', '1256 cm³', '1884 cm³'],
      correct: 2,
      explanation: 'V = 1/3 × πr²t = 1/3 × 3,14 × 100 × 12 = 1256 cm³',
      topic: 'volume'
    },
    {
      question: 'Luas permukaan kerucut dengan r = 7 cm dan s = 25 cm adalah? (π = 22/7)',
      options: ['176 cm²', '528 cm²', '704 cm²', '880 cm²'],
      correct: 2,
      explanation: 'Luas permukaan = πr² + πrs = 154 + 550 = 704 cm²',
      topic: 'volume'
    },
    {
      question: 'Kerucut dengan volume 314 cm³ dan r = 5 cm. Berapa tingginya? (π = 3,14)',
      options: ['6 cm', '12 cm', '18 cm', '24 cm'],
      correct: 1,
      explanation: 'V = 1/3 × πr²t; 314 = 1/3 × 3,14 × 25 × t; t = 12 cm',
      topic: 'height'
    },
    {
      question: 'Jika luas alas kerucut 314 cm² dan π = 3,14, berapa jari-jarinya?',
      options: ['5 cm', '10 cm', '15 cm', '20 cm'],
      correct: 1,
      explanation: 'πr² = 314; r² = 100; r = 10 cm',
      topic: 'alas'
    },
    {
      question: 'Luas selimut kerucut adalah 550 cm² dan s = 25 cm. Berapa jari-jarinya? (π = 22/7)',
      options: ['7 cm', '10 cm', '14 cm', '21 cm'],
      correct: 0,
      explanation: 'πrs = 550; 22/7 × r × 25 = 550; r = 7 cm',
      topic: 'lateral'
    },
    {
      question: 'Kerucut berdiameter 14 cm dan tinggi 24 cm. Berapa volumenya? (π = 22/7)',
      options: ['1232 cm³', '1848 cm³', '2464 cm³', '3696 cm³'],
      correct: 0,
      explanation: 'r = 7; V = 1/3 × 22/7 × 49 × 24 = 1/3 × 3696 = 1232 cm³',
      topic: 'volume'
    },
    {
      question: 'Perbandingan volume kerucut A (r=5, t=12) dengan kerucut B (r=5, t=24) adalah?',
      options: ['1:2', '1:3', '1:4', '2:3'],
      correct: 0,
      explanation: 'V_A/V_B = (1/3×π×25×12)/(1/3×π×25×24) = 12/24 = 1/2',
      topic: 'volume'
    }
  ],
  sphere: [
    {
      question: 'Luas permukaan bola dengan r = 7 cm adalah? (π = 22/7)',
      options: ['154 cm²', '308 cm²', '616 cm²', '924 cm²'],
      correct: 2,
      explanation: 'Luas permukaan = 4πr² = 4 × 22/7 × 49 = 616 cm²',
      topic: 'alas'
    },
    {
      question: 'Volume bola dengan r = 10 cm adalah? (π = 3,14)',
      options: ['1256 cm³', '2512 cm³', '3768 cm³', '4186,7 cm³'],
      correct: 3,
      explanation: 'V = 4/3 × πr³ = 4/3 × 3,14 × 1000 = 4186,7 cm³',
      topic: 'volume'
    },
    {
      question: 'Luas permukaan bola dengan r = 5 cm adalah? (π = 3,14)',
      options: ['314 cm²', '523,3 cm²', '654,3 cm²', '785 cm²'],
      correct: 0,
      explanation: 'Luas permukaan = 4πr² = 4 × 3,14 × 25 = 314 cm²',
      topic: 'alas'
    },
    {
      question: 'Jika luas permukaan bola 1256 cm² dan π = 3,14, berapa jari-jarinya?',
      options: ['5 cm', '10 cm', '15 cm', '20 cm'],
      correct: 1,
      explanation: '4πr² = 1256; r² = 100; r = 10 cm',
      topic: 'alas'
    },
    {
      question: 'Volume bola dengan diameter 14 cm adalah? (π = 22/7)',
      options: ['1437,33 cm³', '1456 cm³', '1437 cm³', '1616 cm³'],
      correct: 0,
      explanation: 'r = 7; V = 4/3 × 22/7 × 343 = 1437,33 cm³',
      topic: 'volume'
    },
    {
      question: 'Perbandingan luas permukaan bola A (r=5) dan B (r=10) adalah?',
      options: ['1:2', '1:4', '1:8', '2:5'],
      correct: 1,
      explanation: 'L_A/L_B = (4π×25)/(4π×100) = 25/100 = 1/4',
      topic: 'alas'
    },
    {
      question: 'Dua bola masing-masing bervolume V. Jika salah satunya diperbesar sehingga jari-jarinya 2 kali semula, berapa volume barunya?',
      options: ['2V', '4V', '8V', '16V'],
      correct: 2,
      explanation: 'V = 4/3 × πr³; Jika r menjadi 2r, maka V\' = 4/3 × π(2r)³ = 8V',
      topic: 'volume'
    },
    {
      question: 'Sebuah bola berjari-jari 10 cm. Berapa luas permukaan bola? (π = 3,14)',
      options: ['628 cm²', '1256 cm²', '1884 cm²', '2512 cm²'],
      correct: 1,
      explanation: 'Luas permukaan = 4πr² = 4 × 3,14 × 100 = 1256 cm²',
      topic: 'alas'
    },
    {
      question: 'Bola A memiliki r = 3 cm dan bola B memiliki r = 6 cm. Berapa perbandingan volumenya?',
      options: ['1:2', '1:4', '1:8', '1:16'],
      correct: 2,
      explanation: 'V_A/V_B = (4/3 × π × 27)/(4/3 × π × 216) = 27/216 = 1/8',
      topic: 'volume'
    },
    {
      question: 'Volume bola dengan r = 6 cm adalah? (π = 3,14)',
      options: ['452,16 cm³', '678,24 cm³', '904,32 cm³', '1130,4 cm³'],
      correct: 2,
      explanation: 'V = 4/3 × πr³ = 4/3 × 3,14 × 216 = 904,32 cm³',
      topic: 'volume'
    }
  ]
};

/**
 * Shape info untuk ditampilkan saat zoom
 */
export const shapeInfo = {
  cylinder: {
    base: {
      title: '📍 Alas Tabung',
      description: 'Alas tabung berbentuk lingkaran. Untuk menghitung luas alas, gunakan rumus luas lingkaran.',
      formula: 'Luas Alas = πr²'
    },
    lateral: {
      title: '🔄 Selimut Tabung',
      description: 'Selimut tabung adalah sisi lengkung yang membungkus tabung. Jika dibuka akan berbentuk persegi panjang.',
      formula: 'Luas Selimut = 2πrt'
    },
    height: {
      title: '📏 Tinggi Tabung',
      description: 'Tinggi tabung adalah jarak antara alas dan tutup tabung yang sejajar.',
      formula: 'Tinggi = t (diberikan)'
    }
  },
  cone: {
    base: {
      title: '📍 Alas Kerucut',
      description: 'Alas kerucut berbentuk lingkaran, sama seperti alas tabung.',
      formula: 'Luas Alas = πr²'
    },
    lateral: {
      title: '🔄 Selimut Kerucut',
      description: 'Selimut kerucut adalah sisi lengkung yang membentuk bentuk kerucut. s adalah garis pelukis.',
      formula: 'Luas Selimut = πrs (s = √(r² + t²))'
    },
    height: {
      title: '📏 Tinggi Kerucut',
      description: 'Tinggi kerucut adalah jarak dari puncak ke pusat alas, tegak lurus dengan alas.',
      formula: 'Tinggi = t (diberikan)'
    }
  },
  sphere: {
    base: {
      title: '🌍 Permukaan Bola',
      description: 'Bola adalah bangun ruang yang terbentuk dari rotasi setengah lingkaran. Semua titik pada permukaan berjarak sama dari pusat.',
      formula: 'Luas Permukaan = 4πr²'
    },
    lateral: {
      title: '🌍 Permukaan Bola',
      description: 'Seluruh permukaan bola merupakan satu kesatuan dengan jari-jari yang sama ke semua arah.',
      formula: 'Luas Permukaan = 4πr²'
    },
    height: {
      title: '📏 Jari-jari Bola',
      description: 'Jari-jari bola adalah jarak dari pusat bola ke permukaan bola.',
      formula: 'Jari-jari = r (diberikan)'
    }
  }
};

/**
 * Ambil soal acak dari database
 * @param {string} shape - 'cylinder', 'cone', atau 'sphere'
 * @param {number} count - jumlah soal
 * @returns {array} soal yang sudah diacak
 */
export function getRandomQuestions(shape, count = 10) {
  const questions = quizDatabase[shape] || quizDatabase.cylinder;
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, questions.length));
}

/**
 * Generate session ID unik
 * @param {string} shape - bentuk bangun ruang
 * @returns {string} session code
 */
export function generateSessionCode(shape = 'C') {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${shape}-${random}-${timestamp}`;
}
