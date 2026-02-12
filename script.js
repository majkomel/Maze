const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');

// Nastavitve
const step = 16;

function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Nastavitve za stene
    ctx.strokeStyle = "#FFD700"; // Zlata barva (R=255, G=215, B=0)
    ctx.lineWidth = 2;
    ctx.lineCap = "square";
    
    ctx.beginPath();

    // --- TVOJE LINIJE (Kopirane točno iz tvojega originala) ---
    // Horizontalne
    ctx.moveTo(2, 2); ctx.lineTo(226, 2);
    ctx.moveTo(242, 2); ctx.lineTo(482, 2);
    ctx.moveTo(50, 18); ctx.lineTo(82, 18);
    ctx.moveTo(114, 18); ctx.lineTo(162, 18);
    ctx.moveTo(242, 18); ctx.lineTo(274, 18);
    ctx.moveTo(290, 18); ctx.lineTo(306, 18);
    ctx.moveTo(354, 18); ctx.lineTo(402, 18);
    ctx.moveTo(450, 18); ctx.lineTo(466, 18);
    ctx.moveTo(2, 34); ctx.lineTo(18, 34);
    ctx.moveTo(34, 34); ctx.lineTo(82, 34);
    ctx.moveTo(130, 34); ctx.lineTo(162, 34);
    ctx.moveTo(226, 34); ctx.lineTo(242, 34);
    ctx.moveTo(258, 34); ctx.lineTo(338, 34);
    ctx.moveTo(370, 34); ctx.lineTo(418, 34);
    ctx.moveTo(450, 34); ctx.lineTo(482, 34);
    ctx.moveTo(18, 50); ctx.lineTo(34, 50);
    ctx.moveTo(66, 50); ctx.lineTo(114, 50);
    ctx.moveTo(146, 50); ctx.lineTo(162, 50);
    ctx.moveTo(178, 50); ctx.lineTo(194, 50);
    ctx.moveTo(290, 50); ctx.lineTo(306, 50);
    ctx.moveTo(338, 50); ctx.lineTo(354, 50);
    ctx.moveTo(386, 50); ctx.lineTo(402, 50);
    ctx.moveTo(418, 50); ctx.lineTo(466, 50);
    ctx.moveTo(2, 66); ctx.lineTo(18, 66);
    ctx.moveTo(50, 66); ctx.lineTo(66, 66);
    ctx.moveTo(82, 66); ctx.lineTo(98, 66);
    ctx.moveTo(114, 66); ctx.lineTo(146, 66);
    ctx.moveTo(162, 66); ctx.lineTo(178, 66);
    ctx.moveTo(210, 66); ctx.lineTo(242, 66);
    ctx.moveTo(258, 66); ctx.lineTo(290, 66);
    ctx.moveTo(338, 66); ctx.lineTo(354, 66);
    ctx.moveTo(370, 66); ctx.lineTo(386, 66);
    ctx.moveTo(418, 66); ctx.lineTo(450, 66);
    ctx.moveTo(18, 82); ctx.lineTo(82, 82);
    ctx.moveTo(98, 82); ctx.lineTo(130, 82);
    ctx.moveTo(146, 82); ctx.lineTo(194, 82);
    ctx.moveTo(242, 82); ctx.lineTo(290, 82);
    ctx.moveTo(306, 82); ctx.lineTo(322, 82);
    ctx.moveTo(338, 82); ctx.lineTo(370, 82);
    ctx.moveTo(386, 82); ctx.lineTo(418, 82);
    ctx.moveTo(466, 82); ctx.lineTo(482, 82);
    ctx.moveTo(2, 98); ctx.lineTo(50, 98);
    ctx.moveTo(82, 98); ctx.lineTo(98, 98);
    ctx.moveTo(130, 98); ctx.lineTo(146, 98);
    ctx.moveTo(210, 98); ctx.lineTo(226, 98);
    ctx.moveTo(242, 98); ctx.lineTo(258, 98);
    ctx.moveTo(274, 98); ctx.lineTo(306, 98);
    ctx.moveTo(322, 98); ctx.lineTo(354, 98);
    ctx.moveTo(370, 98); ctx.lineTo(386, 98);
    ctx.moveTo(418, 98); ctx.lineTo(482, 98);
    ctx.moveTo(50, 114); ctx.lineTo(82, 114);
    ctx.moveTo(162, 114); ctx.lineTo(178, 114);
    ctx.moveTo(194, 114); ctx.lineTo(210, 114);
    ctx.moveTo(226, 114); ctx.lineTo(242, 114);
    ctx.moveTo(274, 114); ctx.lineTo(290, 114);
    ctx.moveTo(306, 114); ctx.lineTo(354, 114);
    ctx.moveTo(370, 114); ctx.lineTo(402, 114);
    ctx.moveTo(434, 114); ctx.lineTo(482, 114);
    ctx.moveTo(18, 130); ctx.lineTo(34, 130);
    ctx.moveTo(82, 130); ctx.lineTo(98, 130);
    ctx.moveTo(130, 130); ctx.lineTo(194, 130);
    ctx.moveTo(210, 130); ctx.lineTo(274, 130);
    ctx.moveTo(290, 130); ctx.lineTo(306, 130);
    ctx.moveTo(354, 130); ctx.lineTo(386, 130);
    ctx.moveTo(434, 130); ctx.lineTo(466, 130);
    ctx.moveTo(18, 146); ctx.lineTo(114, 146);
    ctx.moveTo(130, 146); ctx.lineTo(162, 146);
    ctx.moveTo(178, 146); ctx.lineTo(210, 146);
    ctx.moveTo(258, 146); ctx.lineTo(290, 146);
    ctx.moveTo(306, 146); ctx.lineTo(338, 146);
    ctx.moveTo(370, 146); ctx.lineTo(402, 146);
    ctx.moveTo(418, 146); ctx.lineTo(434, 146);
    ctx.moveTo(450, 146); ctx.lineTo(466, 146);
    ctx.moveTo(66, 162); ctx.lineTo(82, 162);
    ctx.moveTo(98, 162); ctx.lineTo(130, 162);
    ctx.moveTo(146, 162); ctx.lineTo(178, 162);
    ctx.moveTo(210, 162); ctx.lineTo(258, 162);
    ctx.moveTo(290, 162); ctx.lineTo(306, 162);
    ctx.moveTo(338, 162); ctx.lineTo(354, 162);
    ctx.moveTo(402, 162); ctx.lineTo(450, 162);
    ctx.moveTo(18, 178); ctx.lineTo(34, 178);
    ctx.moveTo(98, 178); ctx.lineTo(114, 178);
    ctx.moveTo(130, 178); ctx.lineTo(146, 178);
    ctx.moveTo(178, 178); ctx.lineTo(194, 178);
    ctx.moveTo(258, 178); ctx.lineTo(306, 178);
    ctx.moveTo(322, 178); ctx.lineTo(338, 178);
    ctx.moveTo(354, 178); ctx.lineTo(370, 178);
    ctx.moveTo(418, 178); ctx.lineTo(434, 178);
    ctx.moveTo(450, 178); ctx.lineTo(466, 178);
    ctx.moveTo(18, 194); ctx.lineTo(34, 194);
    ctx.moveTo(66, 194); ctx.lineTo(130, 194);
    ctx.moveTo(178, 194); ctx.lineTo(194, 194);
    ctx.moveTo(306, 194); ctx.lineTo(322, 194);
    ctx.moveTo(338, 194); ctx.lineTo(370, 194);
    ctx.moveTo(386, 194); ctx.lineTo(466, 194);
    ctx.moveTo(34, 210); ctx.lineTo(50, 210);
    ctx.moveTo(66, 210); ctx.lineTo(82, 210);
    ctx.moveTo(98, 210); ctx.lineTo(146, 210);
    ctx.moveTo(162, 210); ctx.lineTo(178, 210);
    ctx.moveTo(210, 210); ctx.lineTo(258, 210);
    ctx.moveTo(274, 210); ctx.lineTo(290, 210);
    ctx.moveTo(322, 210); ctx.lineTo(338, 210);
    ctx.moveTo(354, 210); ctx.lineTo(402, 210);
    ctx.moveTo(418, 210); ctx.lineTo(450, 210);
    ctx.moveTo(466, 210); ctx.lineTo(482, 210);
    ctx.moveTo(2, 226); ctx.lineTo(18, 226);
    ctx.moveTo(34, 226); ctx.lineTo(130, 226);
    ctx.moveTo(146, 226); ctx.lineTo(162, 226);
    ctx.moveTo(194, 226); ctx.lineTo(226, 226);
    ctx.moveTo(242, 226); ctx.lineTo(322, 226);
    ctx.moveTo(370, 226); ctx.lineTo(386, 226);
    ctx.moveTo(418, 226); ctx.lineTo(434, 226);
    ctx.moveTo(50, 242); ctx.lineTo(66, 242);
    ctx.moveTo(114, 242); ctx.lineTo(146, 242);
    ctx.moveTo(210, 242); ctx.lineTo(306, 242);
    ctx.moveTo(322, 242); ctx.lineTo(338, 242);
    ctx.moveTo(354, 242); ctx.lineTo(370, 242);
    ctx.moveTo(2, 258); ctx.lineTo(18, 258);
    ctx.moveTo(34, 258); ctx.lineTo(50, 258);
    ctx.moveTo(66, 258); ctx.lineTo(98, 258);
    ctx.moveTo(114, 258); ctx.lineTo(178, 258);
    ctx.moveTo(194, 258); ctx.lineTo(242, 258);
    ctx.moveTo(258, 258); ctx.lineTo(290, 258);
    ctx.moveTo(306, 258); ctx.lineTo(322, 258);
    ctx.moveTo(370, 258); ctx.lineTo(418, 258);
    ctx.moveTo(434, 258); ctx.lineTo(466, 258);
    ctx.moveTo(18, 274); ctx.lineTo(34, 274);
    ctx.moveTo(50, 274); ctx.lineTo(66, 274);
    ctx.moveTo(98, 274); ctx.lineTo(114, 274);
    ctx.moveTo(162, 274); ctx.lineTo(178, 274);
    ctx.moveTo(194, 274); ctx.lineTo(242, 274);
    ctx.moveTo(274, 274); ctx.lineTo(322, 274);
    ctx.moveTo(338, 274); ctx.lineTo(354, 274);
    ctx.moveTo(370, 274); ctx.lineTo(386, 274);
    ctx.moveTo(402, 274); ctx.lineTo(434, 274);
    ctx.moveTo(450, 274); ctx.lineTo(482, 274);
    ctx.moveTo(66, 290); ctx.lineTo(146, 290);
    ctx.moveTo(194, 290); ctx.lineTo(242, 290);
    ctx.moveTo(258, 290); ctx.lineTo(274, 290);
    ctx.moveTo(290, 290); ctx.lineTo(322, 290);
    ctx.moveTo(338, 290); ctx.lineTo(370, 290);
    ctx.moveTo(386, 290); ctx.lineTo(418, 290);
    ctx.moveTo(434, 290); ctx.lineTo(450, 290);
    ctx.moveTo(18, 306); ctx.lineTo(66, 306);
    ctx.moveTo(82, 306); ctx.lineTo(114, 306);
    ctx.moveTo(146, 306); ctx.lineTo(178, 306);
    ctx.moveTo(226, 306); ctx.lineTo(274, 306);
    ctx.moveTo(306, 306); ctx.lineTo(338, 306);
    ctx.moveTo(450, 306); ctx.lineTo(482, 306);
    ctx.moveTo(2, 322); ctx.lineTo(34, 322);
    ctx.moveTo(114, 322); ctx.lineTo(130, 322);
    ctx.moveTo(162, 322); ctx.lineTo(178, 322);
    ctx.moveTo(226, 322); ctx.lineTo(242, 322);
    ctx.moveTo(274, 322); ctx.lineTo(322, 322);
    ctx.moveTo(354, 322); ctx.lineTo(402, 322);
    ctx.moveTo(450, 322); ctx.lineTo(466, 322);
    ctx.moveTo(34, 338); ctx.lineTo(50, 338);
    ctx.moveTo(66, 338); ctx.lineTo(98, 338);
    ctx.moveTo(130, 338); ctx.lineTo(162, 338);
    ctx.moveTo(194, 338); ctx.lineTo(210, 338);
    ctx.moveTo(242, 338); ctx.lineTo(274, 338);
    ctx.moveTo(370, 338); ctx.lineTo(418, 338);
    ctx.moveTo(450, 338); ctx.lineTo(466, 338);
    ctx.moveTo(2, 354); ctx.lineTo(18, 354);
    ctx.moveTo(34, 354); ctx.lineTo(82, 354);
    ctx.moveTo(98, 354); ctx.lineTo(114, 354);
    ctx.moveTo(130, 354); ctx.lineTo(178, 354);
    ctx.moveTo(194, 354); ctx.lineTo(210, 354);
    ctx.moveTo(306, 354); ctx.lineTo(322, 354);
    ctx.moveTo(354, 354); ctx.lineTo(418, 354);
    ctx.moveTo(450, 354); ctx.lineTo(466, 354);
    ctx.moveTo(18, 370); ctx.lineTo(66, 370);
    ctx.moveTo(82, 370); ctx.lineTo(114, 370);
    ctx.moveTo(178, 370); ctx.lineTo(194, 370);
    ctx.moveTo(322, 370); ctx.lineTo(354, 370);
    ctx.moveTo(434, 370); ctx.lineTo(450, 370);
    ctx.moveTo(466, 370); ctx.lineTo(482, 370);
    ctx.moveTo(2, 386); ctx.lineTo(18, 386);
    ctx.moveTo(34, 386); ctx.lineTo(66, 386);
    ctx.moveTo(82, 386); ctx.lineTo(98, 386);
    ctx.moveTo(114, 386); ctx.lineTo(162, 386);
    ctx.moveTo(210, 386); ctx.lineTo(242, 386);
    ctx.moveTo(290, 386); ctx.lineTo(322, 386);
    ctx.moveTo(418, 386); ctx.lineTo(434, 386);
    ctx.moveTo(450, 386); ctx.lineTo(482, 386);
    ctx.moveTo(18, 402); ctx.lineTo(50, 402);
    ctx.moveTo(82, 402); ctx.lineTo(130, 402);
    ctx.moveTo(162, 402); ctx.lineTo(178, 402);
    ctx.moveTo(210, 402); ctx.lineTo(226, 402);
    ctx.moveTo(258, 402); ctx.lineTo(274, 402);
    ctx.moveTo(306, 402); ctx.lineTo(322, 402);
    ctx.moveTo(338, 402); ctx.lineTo(386, 402);
    ctx.moveTo(418, 402); ctx.lineTo(450, 402);
    ctx.moveTo(466, 402); ctx.lineTo(482, 402);
    ctx.moveTo(34, 418); ctx.lineTo(66, 418);
    ctx.moveTo(130, 418); ctx.lineTo(146, 418);
    ctx.moveTo(162, 418); ctx.lineTo(210, 418);
    ctx.moveTo(226, 418); ctx.lineTo(242, 418);
    ctx.moveTo(258, 418); ctx.lineTo(274, 418);
    ctx.moveTo(290, 418); ctx.lineTo(306, 418);
    ctx.moveTo(322, 418); ctx.lineTo(354, 418);
    ctx.moveTo(370, 418); ctx.lineTo(386, 418);
    ctx.moveTo(418, 418); ctx.lineTo(466, 418);
    ctx.moveTo(34, 434); ctx.lineTo(50, 434);
    ctx.moveTo(114, 434); ctx.lineTo(162, 434);
    ctx.moveTo(242, 434); ctx.lineTo(258, 434);
    ctx.moveTo(290, 434); ctx.lineTo(306, 434);
    ctx.moveTo(354, 434); ctx.lineTo(386, 434);
    ctx.moveTo(418, 434); ctx.lineTo(466, 434);
    ctx.moveTo(2, 450); ctx.lineTo(34, 450);
    ctx.moveTo(50, 450); ctx.lineTo(130, 450);
    ctx.moveTo(178, 450); ctx.lineTo(194, 450);
    ctx.moveTo(210, 450); ctx.lineTo(242, 450);
    ctx.moveTo(258, 450); ctx.lineTo(274, 450);
    ctx.moveTo(290, 450); ctx.lineTo(306, 450);
    ctx.moveTo(338, 450); ctx.lineTo(370, 450);
    ctx.moveTo(418, 450); ctx.lineTo(434, 450);
    ctx.moveTo(466, 450); ctx.lineTo(482, 450);
    ctx.moveTo(50, 466); ctx.lineTo(66, 466);
    ctx.moveTo(130, 466); ctx.lineTo(146, 466);
    ctx.moveTo(162, 466); ctx.lineTo(210, 466);
    ctx.moveTo(242, 466); ctx.lineTo(274, 466);
    ctx.moveTo(290, 466); ctx.lineTo(338, 466);
    ctx.moveTo(354, 466); ctx.lineTo(386, 466);
    ctx.moveTo(434, 466); ctx.lineTo(450, 466);
    ctx.moveTo(2, 482); ctx.lineTo(242, 482);
    ctx.moveTo(258, 482); ctx.lineTo(482, 482);

    // Vertikalne
    ctx.moveTo(2, 2); ctx.lineTo(2, 482);
    ctx.moveTo(18, 18); ctx.lineTo(18, 50);
    ctx.moveTo(18, 98); ctx.lineTo(18, 130);
    ctx.moveTo(18, 162); ctx.lineTo(18, 178);
    ctx.moveTo(18, 194); ctx.lineTo(18, 210);
    ctx.moveTo(18, 226); ctx.lineTo(18, 242);
    ctx.moveTo(18, 258); ctx.lineTo(18, 290);
    ctx.moveTo(18, 322); ctx.lineTo(18, 338);
    ctx.moveTo(18, 370); ctx.lineTo(18, 434);
    ctx.moveTo(18, 450); ctx.lineTo(18, 466);
    ctx.moveTo(34, 2); ctx.lineTo(34, 34);
    ctx.moveTo(34, 66); ctx.lineTo(34, 82);
    ctx.moveTo(34, 98); ctx.lineTo(34, 114);
    ctx.moveTo(34, 162); ctx.lineTo(34, 226);
    ctx.moveTo(34, 242); ctx.lineTo(34, 274);
    ctx.moveTo(34, 290); ctx.lineTo(34, 338);
    ctx.moveTo(34, 370); ctx.lineTo(34, 386);
    ctx.moveTo(34, 418); ctx.lineTo(34, 434);
    ctx.moveTo(34, 466); ctx.lineTo(34, 482);
    ctx.moveTo(50, 34); ctx.lineTo(50, 50);
    ctx.moveTo(50, 130); ctx.lineTo(50, 194);
    ctx.moveTo(50, 226); ctx.lineTo(50, 242);
    ctx.moveTo(50, 274); ctx.lineTo(50, 322);
    ctx.moveTo(50, 434); ctx.lineTo(50, 466);
    ctx.moveTo(66, 18); ctx.lineTo(66, 34);
    ctx.moveTo(66, 50); ctx.lineTo(66, 66);
    ctx.moveTo(66, 98); ctx.lineTo(66, 146);
    ctx.moveTo(66, 162); ctx.lineTo(66, 226);
    ctx.moveTo(66, 290); ctx.lineTo(66, 322);
    ctx.moveTo(66, 354); ctx.lineTo(66, 370);
    ctx.moveTo(66, 386); ctx.lineTo(66, 402);
    ctx.moveTo(66, 418); ctx.lineTo(66, 434);
    ctx.moveTo(66, 466); ctx.lineTo(66, 482);
    ctx.moveTo(82, 66); ctx.lineTo(82, 130);
    ctx.moveTo(82, 146); ctx.lineTo(82, 178);
    ctx.moveTo(82, 242); ctx.lineTo(82, 258);
    ctx.moveTo(82, 274); ctx.lineTo(82, 306);
    ctx.moveTo(82, 322); ctx.lineTo(82, 354);
    ctx.moveTo(82, 386); ctx.lineTo(82, 434);
    ctx.moveTo(82, 450); ctx.lineTo(82, 466);
    ctx.moveTo(98, 2); ctx.lineTo(98, 50);
    ctx.moveTo(98, 66); ctx.lineTo(98, 82);
    ctx.moveTo(98, 114); ctx.lineTo(98, 130);
    ctx.moveTo(98, 146); ctx.lineTo(98, 162);
    ctx.moveTo(98, 226); ctx.lineTo(98, 242);
    ctx.moveTo(98, 258); ctx.lineTo(98, 274);
    ctx.moveTo(98, 322); ctx.lineTo(98, 338);
    ctx.moveTo(98, 370); ctx.lineTo(98, 386);
    ctx.moveTo(98, 418); ctx.lineTo(98, 450);
    ctx.moveTo(98, 466); ctx.lineTo(98, 482);
    ctx.moveTo(114, 18); ctx.lineTo(114, 50);
    ctx.moveTo(114, 82); ctx.lineTo(114, 98);
    ctx.moveTo(114, 114); ctx.lineTo(114, 146);
    ctx.moveTo(114, 162); ctx.lineTo(114, 178);
    ctx.moveTo(114, 194); ctx.lineTo(114, 210);
    ctx.moveTo(114, 226); ctx.lineTo(114, 242);
    ctx.moveTo(114, 258); ctx.lineTo(114, 290);
    ctx.moveTo(114, 322); ctx.lineTo(114, 370);
    ctx.moveTo(114, 386); ctx.lineTo(114, 434);
    ctx.moveTo(114, 466); ctx.lineTo(114, 482);
    ctx.moveTo(130, 34); ctx.lineTo(130, 82);
    ctx.moveTo(130, 98); ctx.lineTo(130, 114);
    ctx.moveTo(130, 130); ctx.lineTo(130, 162);
    ctx.moveTo(130, 258); ctx.lineTo(130, 274);
    ctx.moveTo(130, 290); ctx.lineTo(130, 306);
    ctx.moveTo(130, 354); ctx.lineTo(130, 386);
    ctx.moveTo(130, 402); ctx.lineTo(130, 418);
    ctx.moveTo(146, 34); ctx.lineTo(146, 50);
    ctx.moveTo(146, 66); ctx.lineTo(146, 98);
    ctx.moveTo(146, 114); ctx.lineTo(146, 130);
    ctx.moveTo(146, 162); ctx.lineTo(146, 178);
    ctx.moveTo(146, 194); ctx.lineTo(146, 226);
    ctx.moveTo(146, 274); ctx.lineTo(146, 290);
    ctx.moveTo(146, 322); ctx.lineTo(146, 338);
    ctx.moveTo(146, 370); ctx.lineTo(146, 402);
    ctx.moveTo(146, 434); ctx.lineTo(146, 466);
    ctx.moveTo(162, 18); ctx.lineTo(162, 34);
    ctx.moveTo(162, 50); ctx.lineTo(162, 66);
    ctx.moveTo(162, 98); ctx.lineTo(162, 114);
    ctx.moveTo(162, 162); ctx.lineTo(162, 178);
    ctx.moveTo(162, 194); ctx.lineTo(162, 210);
    ctx.moveTo(162, 226); ctx.lineTo(162, 242);
    ctx.moveTo(162, 274); ctx.lineTo(162, 290);
    ctx.moveTo(162, 322); ctx.lineTo(162, 338);
    ctx.moveTo(162, 370); ctx.lineTo(162, 402);
    ctx.moveTo(162, 418); ctx.lineTo(162, 466);
    ctx.moveTo(178, 2); ctx.lineTo(178, 18);
    ctx.moveTo(178, 34); ctx.lineTo(178, 50);
    ctx.moveTo(178, 82); ctx.lineTo(178, 98);
    ctx.moveTo(178, 114); ctx.lineTo(178, 130);
    ctx.moveTo(178, 146); ctx.lineTo(178, 162);
    ctx.moveTo(178, 178); ctx.lineTo(178, 210);
    ctx.moveTo(178, 226); ctx.lineTo(178, 258);
    ctx.moveTo(178, 274); ctx.lineTo(178, 354);
    ctx.moveTo(178, 370); ctx.lineTo(178, 402);
    ctx.moveTo(178, 434); ctx.lineTo(178, 450);
    ctx.moveTo(194, 2); ctx.lineTo(194, 34);
    ctx.moveTo(194, 50); ctx.lineTo(194, 114);
    ctx.moveTo(194, 146); ctx.lineTo(194, 178);
    ctx.moveTo(194, 210); ctx.lineTo(194, 226);
    ctx.moveTo(194, 242); ctx.lineTo(194, 258);
    ctx.moveTo(194, 290); ctx.lineTo(194, 370);
    ctx.moveTo(194, 386); ctx.lineTo(194, 450);
    ctx.moveTo(194, 466); ctx.lineTo(194, 482);
    ctx.moveTo(210, 2); ctx.lineTo(210, 82);
    ctx.moveTo(210, 130); ctx.lineTo(210, 146);
    ctx.moveTo(210, 162); ctx.lineTo(210, 210);
    ctx.moveTo(210, 306); ctx.lineTo(210, 338);
    ctx.moveTo(210, 354); ctx.lineTo(210, 402);
    ctx.moveTo(210, 418); ctx.lineTo(210, 434);
    ctx.moveTo(226, 2); ctx.lineTo(226, 50);
    ctx.moveTo(226, 66); ctx.lineTo(226, 82);
    ctx.moveTo(226, 98); ctx.lineTo(226, 114);
    ctx.moveTo(226, 130); ctx.lineTo(226, 162);
    ctx.moveTo(226, 178); ctx.lineTo(226, 258);
    ctx.moveTo(226, 274); ctx.lineTo(226, 306);
    ctx.moveTo(226, 338); ctx.lineTo(226, 386);
    ctx.moveTo(226, 418); ctx.lineTo(226, 466);
    ctx.moveTo(242, 34); ctx.lineTo(242, 50);
    ctx.moveTo(242, 98); ctx.lineTo(242, 114);
    ctx.moveTo(242, 130); ctx.lineTo(242, 146);
    ctx.moveTo(242, 178); ctx.lineTo(242, 210);
    ctx.moveTo(242, 322); ctx.lineTo(242, 354);
    ctx.moveTo(242, 370); ctx.lineTo(242, 418);
    ctx.moveTo(242, 466); ctx.lineTo(242, 482);
    ctx.moveTo(258, 34); ctx.lineTo(258, 50);
    ctx.moveTo(258, 82); ctx.lineTo(258, 114);
    ctx.moveTo(258, 146); ctx.lineTo(258, 162);
    ctx.moveTo(258, 178); ctx.lineTo(258, 194);
    ctx.moveTo(258, 258); ctx.lineTo(258, 274);
    ctx.moveTo(258, 306); ctx.lineTo(258, 322);
    ctx.moveTo(258, 338); ctx.lineTo(258, 402);
    ctx.moveTo(258, 418); ctx.lineTo(258, 450);
    ctx.moveTo(274, 2); ctx.lineTo(274, 18);
    ctx.moveTo(274, 34); ctx.lineTo(274, 50);
    ctx.moveTo(274, 114); ctx.lineTo(274, 130);
    ctx.moveTo(274, 162); ctx.lineTo(274, 178);
    ctx.moveTo(274, 194); ctx.lineTo(274, 210);
    ctx.moveTo(274, 274); ctx.lineTo(274, 306);
    ctx.moveTo(274, 322); ctx.lineTo(274, 386);
    ctx.moveTo(274, 402); ctx.lineTo(274, 434);
    ctx.moveTo(274, 450); ctx.lineTo(274, 466);
    ctx.moveTo(290, 50); ctx.lineTo(290, 98);
    ctx.moveTo(290, 114); ctx.lineTo(290, 130);
    ctx.moveTo(290, 162); ctx.lineTo(290, 210);
    ctx.moveTo(290, 242); ctx.lineTo(290, 258);
    ctx.moveTo(290, 290); ctx.lineTo(290, 322);
    ctx.moveTo(290, 338); ctx.lineTo(290, 434);
    ctx.moveTo(290, 450); ctx.lineTo(290, 466);
    ctx.moveTo(306, 2); ctx.lineTo(306, 66);
    ctx.moveTo(306, 114); ctx.lineTo(306, 130);
    ctx.moveTo(306, 146); ctx.lineTo(306, 162);
    ctx.moveTo(306, 194); ctx.lineTo(306, 210);
    ctx.moveTo(306, 306); ctx.lineTo(306, 370);
    ctx.moveTo(306, 434); ctx.lineTo(306, 450);
    ctx.moveTo(306, 466); ctx.lineTo(306, 482);
    ctx.moveTo(322, 18); ctx.lineTo(322, 34);
    ctx.moveTo(322, 50); ctx.lineTo(322, 98);
    ctx.moveTo(322, 130); ctx.lineTo(322, 178);
    ctx.moveTo(322, 194); ctx.lineTo(322, 226);
    ctx.moveTo(322, 242); ctx.lineTo(322, 274);
    ctx.moveTo(322, 338); ctx.lineTo(322, 354);
    ctx.moveTo(322, 386); ctx.lineTo(322, 402);
    ctx.moveTo(322, 418); ctx.lineTo(322, 450);
    ctx.moveTo(338, 2); ctx.lineTo(338, 18);
    ctx.moveTo(338, 34); ctx.lineTo(338, 50);
    ctx.moveTo(338, 130); ctx.lineTo(338, 146);
    ctx.moveTo(338, 178); ctx.lineTo(338, 210);
    ctx.moveTo(338, 226); ctx.lineTo(338, 258);
    ctx.moveTo(338, 290); ctx.lineTo(338, 354);
    ctx.moveTo(338, 386); ctx.lineTo(338, 402);
    ctx.moveTo(338, 434); ctx.lineTo(338, 466);
    ctx.moveTo(354, 18); ctx.lineTo(354, 34);
    ctx.moveTo(354, 50); ctx.lineTo(354, 82);
    ctx.moveTo(354, 98); ctx.lineTo(354, 178);
    ctx.moveTo(354, 210); ctx.lineTo(354, 226);
    ctx.moveTo(354, 242); ctx.lineTo(354, 258);
    ctx.moveTo(354, 274); ctx.lineTo(354, 290); // POPRAVLJENO
    ctx.moveTo(354, 306); ctx.lineTo(354, 338);
    ctx.moveTo(354, 354); ctx.lineTo(354, 386);
    ctx.moveTo(354, 418); ctx.lineTo(354, 434);
    ctx.moveTo(354, 466); ctx.lineTo(354, 482);
    ctx.moveTo(370, 34); ctx.lineTo(370, 66);
    ctx.moveTo(370, 82); ctx.lineTo(370, 114);
    ctx.moveTo(370, 146); ctx.lineTo(370, 162);
    ctx.moveTo(370, 178); ctx.lineTo(370, 210);
    ctx.moveTo(370, 242); ctx.lineTo(370, 274);
    ctx.moveTo(370, 290); ctx.lineTo(370, 306);
    ctx.moveTo(370, 338); ctx.lineTo(370, 354);
    ctx.moveTo(370, 370); ctx.lineTo(370, 418);
    ctx.moveTo(386, 18); ctx.lineTo(386, 34);
    ctx.moveTo(386, 66); ctx.lineTo(386, 82);
    ctx.moveTo(386, 114); ctx.lineTo(386, 162);
    ctx.moveTo(386, 178); ctx.lineTo(386, 194);
    ctx.moveTo(386, 226); ctx.lineTo(386, 258);
    ctx.moveTo(386, 274); ctx.lineTo(386, 322);
    ctx.moveTo(386, 354); ctx.lineTo(386, 386);
    ctx.moveTo(386, 418); ctx.lineTo(386, 466);
    ctx.moveTo(402, 50); ctx.lineTo(402, 82);
    ctx.moveTo(402, 98); ctx.lineTo(402, 114);
    ctx.moveTo(402, 130); ctx.lineTo(402, 146);
    ctx.moveTo(402, 162); ctx.lineTo(402, 178);
    ctx.moveTo(402, 210); ctx.lineTo(402, 242);
    ctx.moveTo(402, 258); ctx.lineTo(402, 274);
    ctx.moveTo(402, 306); ctx.lineTo(402, 338);
    ctx.moveTo(402, 354); ctx.lineTo(402, 434);
    ctx.moveTo(402, 450); ctx.lineTo(402, 482);
    ctx.moveTo(418, 2); ctx.lineTo(418, 34);
    ctx.moveTo(418, 98); ctx.lineTo(418, 130);
    ctx.moveTo(418, 194); ctx.lineTo(418, 226);
    ctx.moveTo(418, 242); ctx.lineTo(418, 258);
    ctx.moveTo(418, 290); ctx.lineTo(418, 322);
    ctx.moveTo(418, 354); ctx.lineTo(418, 370);
    ctx.moveTo(418, 386); ctx.lineTo(418, 402);
    ctx.moveTo(418, 450); ctx.lineTo(418, 482);
    ctx.moveTo(434, 2); ctx.lineTo(434, 34);
    ctx.moveTo(434, 82); ctx.lineTo(434, 98);
    ctx.moveTo(434, 114); ctx.lineTo(434, 146);
    ctx.moveTo(434, 178); ctx.lineTo(434, 194);
    ctx.moveTo(434, 226); ctx.lineTo(434, 242);
    ctx.moveTo(434, 258); ctx.lineTo(434, 274);
    ctx.moveTo(434, 290); ctx.lineTo(434, 322);
    ctx.moveTo(434, 338); ctx.lineTo(434, 370);
    ctx.moveTo(434, 402); ctx.lineTo(434, 418);
    ctx.moveTo(450, 18); ctx.lineTo(450, 50);
    ctx.moveTo(450, 66); ctx.lineTo(450, 98);
    ctx.moveTo(450, 146); ctx.lineTo(450, 178);
    ctx.moveTo(450, 210); ctx.lineTo(450, 258);
    ctx.moveTo(450, 274); ctx.lineTo(450, 290);
    ctx.moveTo(450, 306); ctx.lineTo(450, 322);
    ctx.moveTo(450, 370); ctx.lineTo(450, 402);
    ctx.moveTo(450, 434); ctx.lineTo(450, 466);
    ctx.moveTo(466, 50); ctx.lineTo(466, 66);
    ctx.moveTo(466, 130); ctx.lineTo(466, 162);
    ctx.moveTo(466, 194); ctx.lineTo(466, 242);
    ctx.moveTo(466, 290); ctx.lineTo(466, 306);
    ctx.moveTo(466, 338); ctx.lineTo(466, 370);
    ctx.moveTo(466, 434); ctx.lineTo(466, 466);
    ctx.moveTo(482, 2); ctx.lineTo(482, 482);

    ctx.stroke();
}

// Inicialno risanje
drawMaze();

// --- LOGIKA REŠEVANJA ---

function isWall(x, y) {
    // PRECIZNA METODA:
    // Preveri, če je piksel točno "zlate" barve (stena)
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    // R=255, G=215, B=0
    return pixel[0] === 255 && pixel[1] === 215 && pixel[2] === 0;
}

async function solveMaze() {
    // Vhod (zgoraj)
    const start = { x: 234, y: 10 }; 
    
    // IZHOD (spodaj): Ciljna cona je med X=242 in X=258 na dnu
    const endY = 475;

    let queue = [[start]];
    let visited = new Set();
    visited.add(`${start.x},${start.y}`);

    let found = false;

    while (queue.length > 0) {
        let path = queue.shift();
        let current = path[path.length - 1];

        // POPRAVLJEN POGOJ ZA CILJ:
        // Preverimo, če smo na dnu IN če smo na sredini (med X 240 in 260)
        if (current.y >= endY && current.x > 240 && current.x < 260) {
            animatePath(path);
            found = true;
            return;
        }

        // Smeri premikanja: Dol, Gor, Desno, Levo
        const directions = [
            { dx: 0, dy: 4 }, 
            { dx: 0, dy: -4 }, 
            { dx: 4, dy: 0 }, 
            { dx: -4, dy: 0 }
        ];

        for (let dir of directions) {
            let nextX = current.x + dir.dx;
            let nextY = current.y + dir.dy;

            // Preveri meje platna
            if (nextX > 0 && nextX < canvas.width && nextY > 0 && nextY < canvas.height) {
                // Če ni stena in še nismo bili tam
                if (!isWall(nextX, nextY) && !visited.has(`${nextX},${nextY}`)) {
                    visited.add(`${nextX},${nextY}`);
                    queue.push([...path, { x: nextX, y: nextY }]);
                }
            }
        }
    }
    
    if (!found) {
        console.log("Pot ni bila najdena!");
    }
}

function animatePath(path) {
    let i = 0;
    ctx.strokeStyle = "#4CAF50"; // Zelena barva
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(path[0].x, path[0].y);

    function step() {
        if (i < path.length) {
            ctx.lineTo(path[i].x, path[i].y);
            ctx.stroke();
            // Povečamo hitrost izrisa (skočimo za 2 točki naenkrat)
            i += 2; 
            requestAnimationFrame(step);
        }
    }
    step();
}

// Dogodki
document.getElementById('solveBtn').addEventListener('click', () => {
    // 1. Zbriši vse (tudi prejšnjo zeleno pot)
    drawMaze();
    
    // 2. Počakaj čisto malo, da se stene narišejo, nato išči
    setTimeout(() => {
        solveMaze();
    }, 50);
});

document.getElementById('resetBtn').addEventListener('click', () => {
    drawMaze();
});