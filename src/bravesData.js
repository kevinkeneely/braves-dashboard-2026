/* ═══════════════════════════════════════════════════════════════════════════
   BRAVES DASHBOARD — DAILY DATA FILE
   ═══════════════════════════════════════════════════════════════════════════
   HOW TO UPDATE (daily):
   1. Edit lastUpdated below to today's date.
   2. Find the player/section you want (Ctrl+F the player's name).
   3. Change the number or "value" next to the stat label. Keep quotes as-is:
        • quoted values  -> avg: ".263"   (strings: rates, percentages)
        • bare numbers   -> hr: 15        (counting stats, WAR)
   4. Save. The dashboard re-renders automatically.
   Do NOT rename keys or remove commas/braces — only change the values.
   ═══════════════════════════════════════════════════════════════════════════ */
 
   export const lastUpdated = "July 10, 2026";
 
   /* ═══════════════════════════════════════════════════════════════════════════
      ROSTER CHECKLIST — exact spellings (for Ctrl+F). Update when adding/removing
      a player. This is just a reference comment; it does not affect the dashboard.
      ───────────────────────────────────────────────────────────────────────────
      HITTERS (15):
      //   - Ronald Acuña Jr.
      //   - Drake Baldwin
      //   - Matt Olson
      //   - Ozzie Albies
      //   - Michael Harris II
      //   - Austin Riley
      //   - Mauricio Dubón
      //   - Ha-Seong Kim
      //   - Mike Yastrzemski
      //   - Dominic Smith
      //   - Jorge Mateo
      //   - Eli White
      //   - Sandy León
      //   - Chadwick Tromp
      //   - Sean Murphy
      //   - Joey Bart
      //   - Rowdy Tellez
      //   - Jim Jarvis
   
      STARTERS (6):
      //   - Chris Sale
      //   - Spencer Strider
      //   - Bryce Elder
      //   - Reynaldo López
      //   - Martín Pérez
      //   - Grant Holmes
      //   - Hurston Waldrep
      //   - JR Ritchie
      //   - Owen Murphy
   
      BULLPEN (9):
      //   - Raisel Iglesias
      //   - Dylan Lee
      //   - Robert Suarez
      //   - Tyler Kinley
      //   - Didier Fuentes
      //   - Dylan Dodd
      //   - James Karinchak
      //   - Carlos Carrasco
      //   - Ian Hamilton
      //   - Danny Young
      ───────────────────────────────────────────────────────────────────────────
      QUICK CHECK before saving:
      • Did you keep quotes on rate stats?   avg:".271"   kpct:"11.8%"
      • Did you leave counting stats bare?    hr:9   pa:241   war:1.8
      • Every line still ends in a comma, every block still closes with ] or } ?
      • If the screen goes blank: press Ctrl+Z until it returns, then re-do slowly.
      ═══════════════════════════════════════════════════════════════════════════ */
   
   
   
   export const SCHEDULE = [
     // March
     { date:"Fri, Mar 27", opp:"Kansas City", home:true,  result:"W", score:"6-0",  record:"1-0"  },
     { date:"Sat, Mar 28", opp:"Kansas City", home:true,  result:"W", score:"6-2",  record:"2-0"  },
     { date:"Sun, Mar 29", opp:"Kansas City", home:true,  result:"L", score:"4-1",  record:"2-1"  },
     { date:"Mon, Mar 30", opp:"Athletics",   home:true,  result:"W", score:"4-0",  record:"3-1"  },
     { date:"Tue, Mar 31", opp:"Athletics",   home:true,  result:"L", score:"5-2",  record:"3-2"  },
     // April
     { date:"Wed, Apr 1",  opp:"Athletics",   home:true,  result:"W", score:"5-1",  record:"4-2"  },
     { date:"Thu, Apr 2",  opp:"Arizona",     home:false, result:"W", score:"17-2", record:"5-2"  },
     { date:"Fri, Apr 3",  opp:"Arizona",     home:false, result:"W", score:"2-0",  record:"6-2"  },
     { date:"Sat, Apr 4",  opp:"Arizona",     home:false, result:"L", score:"2-1",  record:"6-3"  },
     { date:"Sun, Apr 5",  opp:"Arizona",     home:false, result:"L", score:"6-5 F/10", record:"6-4" },
     { date:"Mon, Apr 6",  opp:"Los Angeles", home:false, result:"L", score:"6-2",  record:"6-5"  },
     { date:"Tue, Apr 7",  opp:"Los Angeles", home:false, result:"W", score:"7-2",  record:"7-5"  },
     { date:"Wed, Apr 8",  opp:"Los Angeles", home:false, result:"W", score:"8-2",  record:"8-5"  },
     { date:"Fri, Apr 10", opp:"Cleveland",   home:true,  result:"W", score:"11-5", record:"9-5"  },
     { date:"Sat, Apr 11", opp:"Cleveland",   home:true,  result:"L", score:"6-0",  record:"9-6"  },
     { date:"Sun, Apr 12", opp:"Cleveland",   home:true,  result:"W", score:"13-1", record:"10-6" },
     { date:"Mon, Apr 13", opp:"Miami",       home:true,  result:"L", score:"10-4", record:"10-7" },
     { date:"Tue, Apr 14", opp:"Miami",       home:true,  result:"W", score:"6-5",  record:"11-7" },
     { date:"Wed, Apr 15", opp:"Miami",       home:true,  result:"W", score:"6-3",  record:"12-7" },
     { date:"Fri, Apr 17", opp:"Philadelphia",home:false, result:"W", score:"9-0",  record:"13-7" },
     { date:"Sat, Apr 18", opp:"Philadelphia",home:false, result:"W", score:"3-1",  record:"14-7" },
     { date:"Sun, Apr 19", opp:"Philadelphia",home:false, result:"W", score:"4-2",  record:"15-7" },
     { date:"Mon, Apr 20", opp:"Washington",  home:false, result:"W", score:"9-4",  record:"16-7" },
     { date:"Tue, Apr 21", opp:"Washington",  home:false, result:"L", score:"11-4", record:"16-8" },
     { date:"Wed, Apr 22", opp:"Washington",  home:false, result:"W", score:"8-6",  record:"17-8" },
     { date:"Thu, Apr 23", opp:"Washington",  home:false, result:"W", score:"7-2",  record:"18-8" },
     { date:"Fri, Apr 24", opp:"Philadelphia",home:true,  result:"W", score:"5-3",  record:"19-8" },
     { date:"Sat, Apr 25", opp:"Philadelphia",home:true,  result:"L", score:"8-5 F/10", record:"19-9" },
     { date:"Sun, Apr 26", opp:"Philadelphia",home:true,  result:"W", score:"6-2",  record:"20-9" },
     { date:"Tue, Apr 28", opp:"Detroit",     home:true,  result:"W", score:"5-2",  record:"21-9" },
     { date:"Wed, Apr 29", opp:"Detroit",     home:true,  result:"W", score:"4-3",  record:"22-9" },
     { date:"Thu, Apr 30", opp:"Detroit",     home:true,  result:"L", score:"5-2",  record:"22-10"},
     // May
     { date:"Fri, May 1",  opp:"Colorado",    home:false, result:"W", score:"8-6",  record:"23-10"},
     { date:"Sat, May 2",  opp:"Colorado",    home:false, result:"W", score:"9-1",  record:"24-10"},
     { date:"Sun, May 3",  opp:"Colorado",    home:false, result:"W", score:"11-6", record:"25-10"},
     { date:"Mon, May 4",  opp:"Seattle",     home:false, result:"L", score:"5-4",  record:"25-11"},
     { date:"Tue, May 5",  opp:"Seattle",     home:false, result:"W", score:"3-2",  record:"26-11"},
     { date:"Wed, May 6",  opp:"Seattle",     home:false, result:"L", score:"3-1",  record:"26-12"},
     { date:"Fri, May 8",  opp:"Los Angeles", home:false, result:"L", score:"3-1",  record:"26-13"},
     { date:"Sat, May 9",  opp:"Los Angeles", home:false, result:"W", score:"7-2",  record:"27-13"},
     { date:"Sun, May 10", opp:"Los Angeles", home:false, result:"W", score:"7-2",  record:"28-13"},
     { date:"Tue, May 12", opp:"Chicago",     home:true,  result:"W", score:"5-2",  record:"29-13"},
     { date:"Wed, May 13", opp:"Chicago",     home:true,  result:"W", score:"4-1",  record:"30-13"},
     { date:"Thu, May 14", opp:"Chicago",     home:true,  result:"L", score:"2-0",  record:"30-14"},
     { date:"Fri, May 15", opp:"Boston",      home:true,  result:"W", score:"3-2",  record:"31-14"},
     { date:"Sat, May 16", opp:"Boston",      home:true,  result:"L", score:"2-3",  record:"31-15"},
     { date:"Sun, May 17", opp:"Boston",      home:true,  result:"W", score:"8-1",  record:"32-15"},
     { date:"Mon, May 18", opp:"Miami",       home:false, result:"L", score:"0-12", record:"32-16"},
     { date:"Tue, May 19", opp:"Miami",       home:false, result:"W", score:"8-4",  record:"33-16"},
     { date:"Wed, May 20", opp:"Miami",       home:false, result:"W", score:"9-1",  record:"34-16"},
     { date:"Thu, May 21", opp:"Miami",       home:false, result:"W", score:"9-3",  record:"35-16"},
     { date:"Fri, May 22", opp:"Washington",  home:true,  result:"W", score:"5-4",  record:"36-16"},
     { date:"Sat, May 23", opp:"Washington",  home:true,  result:"L", score:"0-2",  record:"36-17"},
     { date:"Sun, May 24", opp:"Washington",  home:true,  result:"L", score:"1-2",  record:"36-18"},
     { date:"Tue, May 26", opp:"Boston",      home:false, result:"W", score:"7-6",  record:"37-18"},
     { date:"Wed, May 27", opp:"Boston",      home:false, result:"L", score:"0-8",  record:"37-19"},
     { date:"Thu, May 28", opp:"Boston",      home:false, result:"W", score:"10-2", record:"38-19"},
     { date:"Fri, May 29", opp:"Cincinnati",  home:false, result:"W", score:"8-3", record:"39-19" },
     { date:"Sat, May 30", opp:"Cincinnati",  home:false, result:"W", score:"5-2", record:"40-19" },
     { date:"Sun, May 31", opp:"Cincinnati",  home:false, result:"L", score:"4-6", record:"40-20" },
     // June
     { date:"Tue, Jun 2",  opp:"Toronto",     home:true,  result:"W", score:"4-3", record:"41-20" },
     { date:"Wed, Jun 3",  opp:"Toronto",     home:true,  result:"W", score:"7-3", record:"42-20" },
     { date:"Thu, Jun 4",  opp:"Toronto",     home:true,  result:"L", score:"2-7", record:"42-21" },
     { date:"Fri, Jun 5",  opp:"Pittsburgh",  home:true,  result:"W", score:"6-3", record:"43-21" },
     { date:"Sat, Jun 6",  opp:"Pittsburgh",  home:true,  result:"W", score:"6-3", record:"44-21" },
     { date:"Sun, Jun 7",  opp:"Pittsburgh",  home:true,  result:"W", score:"3-2", record:"45-21"},
     { date:"Tue, Jun 9",  opp:"White Sox",   home:false, result:"L", score:"5-6", record:"45-22"},
     { date:"Wed, Jun 10", opp:"White Sox",   home:false, result:"L", score:"1-2", record:"45-23"},
     { date:"Fri, Jun 12", opp:"Mets",        home:false, result:"L", score:"5-7", record:"45-24"},
     { date:"Sat, Jun 13", opp:"Mets",        home:false, result:"W", score:"3-1", record:"46-24"},
     { date:"Sun, Jun 14", opp:"Mets",        home:false, result:"L", score:"1-8", record:"46-25"},
     { date:"Tue, Jun 16", opp:"San Francisco",   home:true, result:"L", score:"2-7", record:"46-26"},
     { date:"Wed, Jun 17", opp:"San Francisco",   home:true, result:"L", score:"5-7", record:"46-27"},
     { date:"Fri, Jun 19", opp:"Milwaukee",   home:true, result:"W", score:"3-2", record:"47-27"},
     { date:"Sat, Jun 20", opp:"Milwaukee",   home:true, result:"W", score:"4-3", record:"48-27"},
     { date:"Sun, Jun 21", opp:"Milwaukee",   home:true, result:"L", score:"4-9", record:"48-28"},
     { date:"Mon, Jun 22", opp:"San Diego",   home:false, result:"L", score:"0-1", record:"48-29"},
     { date:"Tue, Jun 23", opp:"San Diego",   home:false, result:"L", score:"6-7 F/10", record:"48-30"},
     { date:"Wed, Jun 24", opp:"San Diego",   home:false, result:"L", score:"2-5", record:"48-31"},
     { date:"Fri, Jun 26", opp:"San Francisco",   home:false, result:"W", score:"3-1", record:"49-31"},
     { date:"Sat, Jun 27", opp:"San Francisco",   home:false, result:"L", score:"0-5", record:"49-32"},
     { date:"Sun, Jun 28", opp:"San Francisco",   home:false, result:"L", score:"2-3", record:"49-33"},
     { date:"Tue, Jun 30", opp:"St. Louis",   home:true, result:"L", score:"3-5", record:"49-34"},
      // July
     { date:"Wed, Jul 1", opp:"St. Louis",   home:true, result:"W", score:"5-1", record:"50-34"},
     { date:"Thu, Jul 2", opp:"St. Louis",   home:true, result:"L", score:"5-11", record:"50-35"},
     { date:"Fri, Jul 3", opp:"Mets",   home:true, result:"W", score:"5-3", record:"51-35"},
     { date:"Sat, Jul 4", opp:"Mets",   home:true, result:"W", score:"14-3", record:"52-35"},
     { date:"Sun, Jul 5", opp:"Mets",   home:true, result:"L", score:"9-10", record:"52-36"},
     { date:"Mon, Jul 6", opp:"Mets",   home:true, result:"L", score:"6-7 F/10", record:"52-37"},
     { date:"Tue, Jul 7", opp:"Pittsburgh",   home:false, result:"L", score:"4-12", record:"52-38"},
     { date:"Wed, Jul 8", opp:"Pittsburgh",   home:false, result:"W", score:"3-0", record:"53-38"},
     { date:"Thu, Jul 9", opp:"Pittsburgh",   home:false, result:"W", score:"10-5", record:"54-38"},
      // Upcoming
     { date:"Fri, Jul 10", opp:"St. Louis",   home:false,},
     { date:"Sat, Jul 11", opp:"St. Louis",   home:false,},
     { date:"Sun, Jul 12", opp:"St. Louis",   home:false,},
      // All-Star Break
   ];
   
   export const TEAM_HEADER = {
     record: "54-38",
     runs: 454,
     era: "3.61",
     avg: ".249",
     obp: ".314",
     slg: ".414",
     ops: ".728",
     wrc: 99,
     iso: ".165",
     battingK: "21.3%",
     battingBB: "8.0%",
     woba: ".318",
     xwoba: ".321",
     fip: "4.12",
     xera: "3.89",
     xfip: "4.10",
     whip: "1.24",
     gb: "41.9%",
     siera: "4.04",
     pitchingK: "22.7%",
     pitchingBB: "9.0%",
     pitchingKBB: "13.7%",
     swstr: "11.3%",
     cstr: "16.0%",
     csw: "27.3%",
     fastSwing: "26.4%",
     sqUpSw: "24.3%",
     blastSw: "10.0%",
     idealAtk: "49.4%",
     batFastSwing: "32.1%",
     batSqUpSw: "24.3%",
     batBlastSw: "11.0%",
     batIdealAtk: "50.0%",
     batSwStr: "10.9%",
     batCStr: "15.1%",
     batCSW: "26.0%",
     batChase: "33.7%",
     batWhiff: "24.7%",
     chase: "30.5%",
     whiff: "26.0%",
     batBatSpeed: "72.7",
     batSpeed: "72.1",
// Plate Discipline additions
     batZoneSwing: "67.9%",
     batZoneContact: "84.1%",
     batChaseContact: "59.8%",
     zoneSwing: "66.8%",
     zoneContact: "84.1%",
     chaseContact: "54.3%",
// Statcast (hitters)
     batBarrel: "8.8%",
     batHardHit: "39.6%",
     batExitVelo: "89.2",
     batXBA: ".249",
     batXSLG: ".420",
     batXwOBAcon: ".372",
// batXwOBA reuses existing `xwoba` field (.326)
// Statcast (pitchers)
     barrel: "6.7%",
     hardHit: "37.3%",
     exitVelo: "88.6",
     xBA: ".237",
     xSLG: ".378",
     pXwOBA: ".307",
     xwOBAcon: ".353",
 };
   
export const hitters = [
    // Updated July 10, 2026 — RISP, highLeverage, and twoOuts splits refreshed for all hitters from FanGraphs splits screenshots
    // vsL and vsR splits preserved from July 9 update; all top-level stats preserved from prior updates
    // Hidden players (León, Tromp, Murphy, Acuña, Kim, Tellez) split data included per screenshots; non-roster (Wynns/Heim/Farmer/Azócar/Camargo/Luke Williams) not added
    // Jim Jarvis highLeverage now populated (1 PA, 0-for-1) — was null placeholder; all three refreshed splits now populated for Jarvis
    // PA reconciliation flags: Joey Bart (top 91 vs vsL+vsR total 29 — gap widened; likely top-level includes prior-team PA); small 3-5 PA gaps for Baldwin/Olson/Albies/Harris/Dubón/Riley/Yastrzemski/Mateo persist
    { name:"Ronald Acuña Jr.", pos:"RF", pa:236, avg:".251", obp:".373", slg:".421", ops:".793", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"14.8%", kpct:"22.0%", war:0.8, war2:0.9, wrc:122, woba:".351", xwoba:".378", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.3%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.8%", armValue:null, armStrength:93.6, abs:{netOvr:-3.3, netRuns:-0.7, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.3%", rateVsExp:"+8.1%"}, splits:{vsL:{pa:81,r:12,h:12,hr:1,rbi:1,avg:".179",obp:".321",slg:".313",ops:".634",wrc:80,woba:".289",iso:".134",bbpct:"16.0%",kpct:"29.6%",babip:".262"}, vsR:{pa:155,r:19,h:37,hr:6,rbi:21,avg:".289",obp:".400",slg:".477",ops:".877",wrc:142,woba:".383",iso:".188",bbpct:"14.2%",kpct:"18.1%",babip:".323"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:128,woba:".362",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:8,h:2,hr:0,rbi:1,avg:".222",obp:".500",slg:".222",ops:".722",wrc:140,woba:".379",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}, twoOuts:{pa:70,r:4,h:12,hr:1,rbi:5,avg:".218",obp:".386",slg:".382",ops:".768",wrc:117,woba:".346",iso:".164",bbpct:"20.0%",kpct:"20.0%",babip:".275"}}},
    { name:"Drake Baldwin", pos:"C", pa:306, avg:".257", obp:".343", slg:".446", ops:".789", hr:15, rbi:45, r:49, h:69, doubles:6, triples:0, sb:1, bbpct:"9.5%", kpct:"23.2%", war:1.6, war2:1.5, wrc:118, woba:".346", xwoba:".376", oaa:null, frv:-1, batSpeed:75.0, squaredUp:"25.0%", fastSwing:"52.5%", laSwSp:"38.3%", idealAttack:"46.7%", avgPop:1.92, armValue:null, armStrength:79.8, abs:{netOvr:0.6, netRuns:0.3, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.8%", xChalRate:"3.6%", rateVsExp:"-2.8%"}, absCatch:{netOvr:8.8, netRuns:0.3, chal:29, won:21, lost:8, wonPct:"72%", chalRate:"1.8%", xChalRate:"2.1%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:121,r:20,h:28,hr:7,rbi:16,avg:".262",obp:".347",slg:".477",ops:".824",wrc:127,woba:".361",iso:".215",bbpct:"9.1%",kpct:"22.3%",babip:".288"}, vsR:{pa:180,r:28,h:39,hr:8,rbi:28,avg:".247",obp:".333",slg:".424",ops:".757",wrc:108,woba:".333",iso:".177",bbpct:"9.4%",kpct:"24.4%",babip:".290"}, risp:{pa:74,r:1,h:19,hr:1,rbi:30,avg:".311",obp:".419",slg:".443",ops:".862",wrc:140,woba:".380",iso:".131",bbpct:"12.2%",kpct:"13.5%",babip:".353"}, highLeverage:{pa:19,r:14,h:5,hr:0,rbi:7,avg:".278",obp:".316",slg:".333",ops:".649",wrc:80,woba:".291",iso:".056",bbpct:"5.3%",kpct:"15.8%",babip:".333"}, twoOuts:{pa:88,r:15,h:21,hr:3,rbi:12,avg:".263",obp:".330",slg:".388",ops:".717",wrc:97,woba:".315",iso:".125",bbpct:"9.1%",kpct:"21.6%",babip:".310"}}},
    { name:"Matt Olson", pos:"1B", pa:403, avg:".270", obp:".342", slg:".546", ops:".888", hr:25, rbi:58, r:64, h:97, doubles:24, triples:0, sb:2, bbpct:"9.9%", kpct:"23.3%", war:3.2, war2:2.9, wrc:138, woba:".377", xwoba:".364", oaa:5, frv:5, batSpeed:75.0, squaredUp:"24.1%", fastSwing:"51.7%", laSwSp:"31.5%", idealAttack:"52.5%", armValue:null, armStrength:82.8, abs:{netOvr:0.8, netRuns:0.1, chal:8, won:2, lost:6, wonPct:"25%", chalRate:"3.8%", xChalRate:"3.0%", rateVsExp:"+0.8%"}, splits:{vsL:{pa:175,r:26,h:43,hr:9,rbi:22,avg:".272",obp:".337",slg:".506",ops:".843",wrc:129,woba:".363",iso:".234",bbpct:"8.6%",kpct:"22.9%",babip:".309"}, vsR:{pa:223,r:36,h:53,hr:15,rbi:35,avg:".268",obp:".341",slg:".566",ops:".906",wrc:140,woba:".380",iso:".298",bbpct:"10.3%",kpct:"24.2%",babip:".290"}, risp:{pa:101,r:3,h:16,hr:3,rbi:28,avg:".195",obp:".317",slg:".378",ops:".695",wrc:84,woba:".296",iso:".183",bbpct:"15.8%",kpct:"22.8%",babip:".220"}, highLeverage:{pa:37,r:19,h:8,hr:4,rbi:11,avg:".258",obp:".351",slg:".645",ops:".997",wrc:150,woba:".395",iso:".387",bbpct:"13.5%",kpct:"29.7%",babip:".235"}, twoOuts:{pa:147,r:29,h:34,hr:9,rbi:22,avg:".266",obp:".361",slg:".531",ops:".892",wrc:139,woba:".378",iso:".266",bbpct:"12.2%",kpct:"21.8%",babip:".287"}}},
    { name:"Ozzie Albies", pos:"2B", pa:397, avg:".272", obp:".322", slg:".447", ops:".769", hr:14, rbi:51, r:60, h:97, doubles:20, triples:0, sb:1, bbpct:"6.8%", kpct:"12.8%", war:2.0, war2:1.8, wrc:107, woba:".331", xwoba:".296", oaa:2, frv:0, batSpeed:69.1, squaredUp:"28.8%", fastSwing:"5.7%", laSwSp:"33.9%", idealAttack:"57.9%", armValue:null, armStrength:70.8, abs:{netOvr:-0.3, netRuns:0.2, chal:6, won:3, lost:3, wonPct:"50%", chalRate:"5.2%", xChalRate:"5.6%", rateVsExp:"-0.5%"}, splits:{vsL:{pa:165,r:16,h:46,hr:6,rbi:22,avg:".297",obp:".315",slg:".490",ops:".805",wrc:114,woba:".341",iso:".194",bbpct:"2.4%",kpct:"6.1%",babip:".280"}, vsR:{pa:227,r:42,h:50,hr:8,rbi:28,avg:".254",obp:".326",slg:".411",ops:".737",wrc:102,woba:".322",iso:".157",bbpct:"9.7%",kpct:"17.2%",babip:".269"}, risp:{pa:94,r:3,h:25,hr:3,rbi:37,avg:".333",obp:".362",slg:".507",ops:".868",wrc:122,woba:".353",iso:".173",bbpct:"8.5%",kpct:"8.5%",babip:".297"}, highLeverage:{pa:36,r:19,h:8,hr:2,rbi:10,avg:".258",obp:".333",slg:".516",ops:".849",wrc:127,woba:".361",iso:".258",bbpct:"8.3%",kpct:"13.9%",babip:".240"}, twoOuts:{pa:131,r:23,h:30,hr:3,rbi:15,avg:".238",obp:".267",slg:".357",ops:".624",wrc:69,woba:".274",iso:".119",bbpct:"3.1%",kpct:"14.5%",babip:".260"}}},
    { name:"Michael Harris II", pos:"CF", pa:340, avg:".304", obp:".335", slg:".503", ops:".838", hr:16, rbi:53, r:45, h:98, doubles:16, triples:0, sb:6, bbpct:"4.4%", kpct:"20.6%", war:2.8, war2:2.5, wrc:128, woba:".361", xwoba:".372", oaa:6, frv:5, batSpeed:74.8, squaredUp:"23.6%", fastSwing:"48.5%", laSwSp:"30.5%", idealAttack:"45.8%", armValue:null, armStrength:85.4, abs:{netOvr:-1.0, netRuns:-0.5, chal:6, won:2, lost:4, wonPct:"33%", chalRate:"4.4%", xChalRate:"2.5%", rateVsExp:"+1.9%"}, splits:{vsL:{pa:125,r:13,h:33,hr:4,rbi:17,avg:".284",obp:".328",slg:".448",ops:".776",wrc:112,woba:".338",iso:".164",bbpct:"5.6%",kpct:"20.8%",babip:".333"}, vsR:{pa:209,r:31,h:64,hr:12,rbi:36,avg:".320",obp:".344",slg:".545",ops:".889",wrc:141,woba:".382",iso:".225",bbpct:"3.8%",kpct:"20.6%",babip:".356"}, risp:{pa:70,r:0,h:20,hr:0,rbi:27,avg:".317",obp:".357",slg:".429",ops:".786",wrc:115,woba:".342",iso:".111",bbpct:"5.7%",kpct:"14.3%",babip:".364"}, highLeverage:{pa:34,r:10,h:8,hr:1,rbi:12,avg:".276",obp:".324",slg:".517",ops:".841",wrc:120,woba:".349",iso:".241",bbpct:"5.9%",kpct:"23.5%",babip:".318"}, twoOuts:{pa:102,r:13,h:27,hr:4,rbi:16,avg:".287",obp:".343",slg:".457",ops:".801",wrc:120,woba:".350",iso:".170",bbpct:"7.8%",kpct:"18.6%",babip:".324"}}},
    { name:"Mauricio Dubón", pos:"SS", pa:359, avg:".273", obp:".328", slg:".424", ops:".752", hr:9, rbi:50, r:41, h:90, doubles:19, triples:2, sb:2, bbpct:"7.0%", kpct:"14.2%", war:2.7, war2:2.2, wrc:107, woba:".330", xwoba:".321", oaa:7, frv:5, batSpeed:69.0, squaredUp:"27.4%", fastSwing:"2.9%", laSwSp:"37.2%", idealAttack:"38.1%", armValue:null, armStrength:89.9, abs:{netOvr:-3.7, netRuns:-1.0, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"6.4%", xChalRate:"4.2%", rateVsExp:"+2.1%"}, splits:{vsL:{pa:135,r:13,h:31,hr:4,rbi:20,avg:".248",obp:".304",slg:".424",ops:".728",wrc:99,woba:".318",iso:".176",bbpct:"6.7%",kpct:"11.1%",babip:".255"}, vsR:{pa:219,r:28,h:57,hr:5,rbi:29,avg:".285",obp:".341",slg:".425",ops:".766",wrc:112,woba:".337",iso:".140",bbpct:"7.3%",kpct:"16.0%",babip:".325"}, risp:{pa:85,r:3,h:28,hr:3,rbi:43,avg:".359",obp:".398",slg:".577",ops:".975",wrc:166,woba:".419",iso:".218",bbpct:"5.9%",kpct:"10.6%",babip:".379"}, highLeverage:{pa:37,r:9,h:14,hr:1,rbi:22,avg:".412",obp:".459",slg:".647",ops:"1.107",wrc:203,woba:".474",iso:".235",bbpct:"8.1%",kpct:"8.1%",babip:".433"}, twoOuts:{pa:112,r:17,h:26,hr:2,rbi:25,avg:".252",obp:".313",slg:".388",ops:".701",wrc:93,woba:".310",iso:".136",bbpct:"8.0%",kpct:"11.6%",babip:".273"}}},
    { name:"Austin Riley", pos:"3B", pa:373, avg:".207", obp:".284", slg:".332", ops:".617", hr:9, rbi:41, r:37, h:69, doubles:13, triples:1, sb:5, bbpct:"8.0%", kpct:"29.8%", war:-0.1, war2:-0.2, wrc:71, woba:".277", xwoba:".292", oaa:-5, frv:-4, batSpeed:75.7, squaredUp:"19.9%", fastSwing:"57.4%", laSwSp:"30.9%", idealAttack:"47.7%", armValue:null, armStrength:83.8, abs:{netOvr:-0.3, netRuns:-0.1, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"2.1%", xChalRate:"5.1%", rateVsExp:"-3.0%"}, splits:{vsL:{pa:125,r:11,h:24,hr:1,rbi:13,avg:".218",obp:".304",slg:".309",ops:".613",wrc:73,woba:".279",iso:".091",bbpct:"10.4%",kpct:"32.0%",babip:".329"}, vsR:{pa:243,r:26,h:45,hr:8,rbi:26,avg:".205",obp:".280",slg:".352",ops:".631",wrc:75,woba:".282",iso:".146",bbpct:"7.0%",kpct:"27.6%",babip:".255"}, risp:{pa:103,r:5,h:23,hr:5,rbi:37,avg:".245",obp:".291",slg:".468",ops:".759",wrc:103,woba:".324",iso:".223",bbpct:"5.8%",kpct:"32.0%",babip:".310"}, highLeverage:{pa:39,r:4,h:7,hr:1,rbi:14,avg:".200",obp:".231",slg:".314",ops:".545",wrc:43,woba:".235",iso:".114",bbpct:"5.1%",kpct:"23.1%",babip:".222"}, twoOuts:{pa:125,r:13,h:22,hr:3,rbi:16,avg:".191",obp:".256",slg:".322",ops:".578",wrc:59,woba:".259",iso:".130",bbpct:"6.4%",kpct:"32.0%",babip:".264"}}},
    { name:"Ha-Seong Kim", pos:"SS", pa:82, avg:".068", obp:".171", slg:".068", ops:".239", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"11.0%", kpct:"26.8%", war:-0.9, war2:-1.1, wrc:-26, woba:".131", xwoba:".212", oaa:-2, frv:-3, batSpeed:71.9, squaredUp:"16.9%", fastSwing:"20.8%", laSwSp:"19.6%", idealAttack:"56.9%", armValue:null, armStrength:84.2, abs:{netOvr:0.2, netRuns:0.0, chal:2, won:2, lost:0, wonPct:"100%", chalRate:"2.6%", xChalRate:"6.0%", rateVsExp:"-3.4%"}, splits:{vsL:{pa:42,r:1,h:2,hr:0,rbi:2,avg:".053",obp:".143",slg:".053",ops:".195",wrc:-41,woba:".109",iso:".000",bbpct:"9.5%",kpct:"28.6%",babip:".077"}, vsR:{pa:40,r:3,h:3,hr:0,rbi:1,avg:".086",obp:".200",slg:".086",ops:".286",wrc:-11,woba:".154",iso:".000",bbpct:"12.5%",kpct:"25.0%",babip:".120"}, risp:{pa:19,r:0,h:3,hr:0,rbi:3,avg:".200",obp:".368",slg:".200",ops:".568",wrc:79,woba:".288",iso:".000",bbpct:"21.1%",kpct:"21.1%",babip:".273"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:122,woba:".353",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}, twoOuts:{pa:34,r:1,h:2,hr:0,rbi:2,avg:".069",obp:".206",slg:".069",ops:".275",wrc:-10,woba:".155",iso:".000",bbpct:"14.7%",kpct:"26.5%",babip:".100"}}},
    { name:"Mike Yastrzemski", pos:"LF", pa:259, avg:".229", obp:".320", slg:".361", ops:".682", hr:6, rbi:28, r:33, h:52, doubles:10, triples:1, sb:1, bbpct:"10.4%", kpct:"23.2%", war:0.9, war2:0.4, wrc:91, woba:".307", xwoba:".299", oaa:-2, frv:-1, batSpeed:71.2, squaredUp:"29.3%", fastSwing:"7.3%", laSwSp:"32.1%", idealAttack:"61.6%", armValue:null, armStrength:83.4, abs:{netOvr:2.3, netRuns:0.5, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.7%", xChalRate:"3.3%", rateVsExp:"-1.6%"}, splits:{vsL:{pa:35,r:4,h:6,hr:0,rbi:1,avg:".200",obp:".314",slg:".233",ops:".548",wrc:63,woba:".265",iso:".033",bbpct:"8.6%",kpct:"37.1%",babip:".353"}, vsR:{pa:219,r:27,h:45,hr:5,rbi:23,avg:".232",obp:".315",slg:".366",ops:".681",wrc:90,woba:".305",iso:".134",bbpct:"10.0%",kpct:"21.0%",babip:".278"}, risp:{pa:62,r:1,h:15,hr:1,rbi:20,avg:".278",obp:".355",slg:".407",ops:".762",wrc:111,woba:".337",iso:".130",bbpct:"11.3%",kpct:"35.5%",babip:".438"}, highLeverage:{pa:24,r:7,h:7,hr:1,rbi:10,avg:".318",obp:".375",slg:".545",ops:".920",wrc:151,woba:".397",iso:".227",bbpct:"8.3%",kpct:"29.2%",babip:".429"}, twoOuts:{pa:75,r:13,h:10,hr:2,rbi:10,avg:".154",obp:".267",slg:".292",ops:".559",wrc:59,woba:".258",iso:".138",bbpct:"12.0%",kpct:"32.0%",babip:".205"}}},
    { name:"Dominic Smith", pos:"DH", pa:227, avg:".268", obp:".314", slg:".395", ops:".709", hr:6, rbi:35, r:31, h:55, doubles:6, triples:1, sb:0, bbpct:"6.6%", kpct:"14.1%", war:0.2, war2:-0.2, wrc:92, woba:".308", xwoba:".318", oaa:null, frv:0, batSpeed:68.7, squaredUp:"29.6%", fastSwing:"5.2%", laSwSp:"33.1%", idealAttack:"52.4%", armValue:null, armStrength:null, abs:{netOvr:-1.0, netRuns:-0.2, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"5.2%", xChalRate:"4.6%", rateVsExp:"+0.6%"}, splits:{vsL:{pa:31,r:3,h:4,hr:0,rbi:2,avg:".154",obp:".267",slg:".192",ops:".459",wrc:36,woba:".224",iso:".038",bbpct:"12.9%",kpct:"9.7%",babip:".174"}, vsR:{pa:191,r:27,h:50,hr:6,rbi:33,avg:".284",obp:".314",slg:".426",ops:".740",wrc:100,woba:".319",iso:".142",bbpct:"4.7%",kpct:"14.7%",babip:".299"}, risp:{pa:64,r:3,h:16,hr:3,rbi:31,avg:".302",obp:".333",slg:".509",ops:".843",wrc:115,woba:".343",iso:".208",bbpct:"7.8%",kpct:"10.9%",babip:".271"}, highLeverage:{pa:30,r:7,h:4,hr:1,rbi:14,avg:".182",obp:".276",slg:".409",ops:".685",wrc:76,woba:".284",iso:".227",bbpct:"13.3%",kpct:"23.3%",babip:".176"}, twoOuts:{pa:73,r:10,h:20,hr:1,rbi:10,avg:".299",obp:".356",slg:".373",ops:".729",wrc:105,woba:".328",iso:".075",bbpct:"6.8%",kpct:"15.1%",babip:".345"}}},
    { name:"Jorge Mateo", pos:"SS", pa:132, avg:".242", obp:".288", slg:".379", ops:".667", hr:4, rbi:11, r:27, h:30, doubles:5, triples:0, sb:9, bbpct:"6.1%", kpct:"31.1%", war:0.7, war2:0.6, wrc:82, woba:".294", xwoba:".323", oaa:2, frv:2, batSpeed:73.6, squaredUp:"19.7%", fastSwing:"35.3%", laSwSp:"45.1%", idealAttack:"41.9%", armValue:null, armStrength:89.2, abs:{netOvr:-3.5, netRuns:-0.6, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"8.6%", xChalRate:"4.6%", rateVsExp:"+4.0%"}, splits:{vsL:{pa:50,r:10,h:12,hr:2,rbi:3,avg:".250",obp:".280",slg:".396",ops:".676",wrc:83,woba:".295",iso:".146",bbpct:"4.0%",kpct:"36.0%",babip:".357"}, vsR:{pa:82,r:17,h:18,hr:2,rbi:8,avg:".237",obp:".293",slg:".368",ops:".661",wrc:82,woba:".293",iso:".132",bbpct:"7.3%",kpct:"28.0%",babip:".314"}, risp:{pa:31,r:0,h:7,hr:0,rbi:6,avg:".250",obp:".323",slg:".250",ops:".573",wrc:66,woba:".269",iso:".000",bbpct:"9.7%",kpct:"32.3%",babip:".389"}, highLeverage:{pa:14,r:8,h:2,hr:0,rbi:1,avg:".182",obp:".357",slg:".182",ops:".539",wrc:71,woba:".277",iso:".000",bbpct:"21.4%",kpct:"21.4%",babip:".250"}, twoOuts:{pa:43,r:11,h:8,hr:1,rbi:5,avg:".200",obp:".256",slg:".300",ops:".556",wrc:53,woba:".250",iso:".100",bbpct:"7.0%",kpct:"27.9%",babip:".259"}}},
    { name:"Eli White", pos:"OF", pa:119, avg:".218", obp:".269", slg:".382", ops:".651", hr:4, rbi:15, r:15, h:24, doubles:4, triples:1, sb:4, bbpct:"5.9%", kpct:"21.8%", war:1.1, war2:0.3, wrc:76, woba:".284", xwoba:".280", oaa:2, frv:3, batSpeed:73.1, squaredUp:"20.4%", fastSwing:"31.1%", laSwSp:"32.9%", idealAttack:"53.3%", armValue:null, armStrength:89.5, abs:{netOvr:-0.9, netRuns:0.4, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"3.8%", xChalRate:"5.1%", rateVsExp:"-1.3%"}, splits:{vsL:{pa:73,r:7,h:17,hr:3,rbi:13,avg:".262",obp:".329",slg:".477",ops:".806",wrc:118,woba:".347",iso:".215",bbpct:"8.2%",kpct:"23.3%",babip:".304"}, vsR:{pa:46,r:8,h:8,hr:1,rbi:5,avg:".178",obp:".196",slg:".289",ops:".485",wrc:27,woba:".211",iso:".111",bbpct:"2.2%",kpct:"19.6%",babip:".200"}, risp:{pa:34,r:1,h:7,hr:1,rbi:11,avg:".241",obp:".324",slg:".379",ops:".703",wrc:94,woba:".310",iso:".138",bbpct:"11.8%",kpct:"17.6%",babip:".261"}, highLeverage:{pa:18,r:4,h:2,hr:0,rbi:4,avg:".125",obp:".222",slg:".125",ops:".347",wrc:4,woba:".177",iso:".000",bbpct:"11.1%",kpct:"16.7%",babip:".154"}, twoOuts:{pa:34,r:6,h:7,hr:2,rbi:4,avg:".226",obp:".294",slg:".452",ops:".746",wrc:102,woba:".324",iso:".226",bbpct:"8.8%",kpct:"17.6%",babip:".217"}}},
    { name:"Sandy León", pos:"C", pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.6, war2:-0.5, wrc:-60, woba:".081", xwoba:".132", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"23.1%", idealAttack:"51.1%", armValue:null, armStrength:75.7, absCatch:{netOvr:6.9, netRuns:0.5, chal:21, won:16, lost:5, wonPct:"76%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-54,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-64,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}, twoOuts:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".182",ops:".364",wrc:-5,woba:".162",iso:".000",bbpct:"0.0%",kpct:"45.5%",babip:".333"}}},
    { name:"Chadwick Tromp", pos:"C", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".186", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.9%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"51.2%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-2.0, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:17,woba:".196",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:5,woba:".178",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".198",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:184,woba:".445",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}, twoOuts:{pa:9,r:0,h:3,hr:0,rbi:1,avg:".333",obp:".333",slg:".444",ops:".778",wrc:112,woba:".338",iso:".111",bbpct:"0.0%",kpct:"22.2%",babip:".429"}}},
    { name:"Sean Murphy", pos:"C", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.3, war2:-0.2, wrc:-72, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.0, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.5%", rateVsExp:"+1.3%"}, splits:{vsL:{pa:5,r:0,h:0,hr:0,rbi:1,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:1,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-47,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:0,h:1,hr:0,rbi:1,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:481,woba:".890",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}, twoOuts:{pa:5,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}}},
    { name:"Joey Bart", pos:"C", pa:91, avg:".229", obp:".286", slg:".398", ops:".683", hr:4, rbi:12, r:12, h:19, doubles:2, triples:0, sb:0, bbpct:"3.3%", kpct:"26.4%", war:0.2, war2:0.1, wrc:86, woba:".300", xwoba:".285", oaa:null, frv:0, batSpeed:75.6, squaredUp:"20.0%", fastSwing:"57.5%", laSwSp:"36.4%", idealAttack:"32.0%", avgPop:1.93, armValue:null, armStrength:84.1, absCatch:{netOvr:1.4, netRuns:0.1, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.5%", xChalRate:"2.1%", rateVsExp:"-1.6%"}, splits:{vsL:{pa:16,r:1,h:2,hr:1,rbi:3,avg:".143",obp:".250",slg:".357",ops:".607",wrc:70,woba:".275",iso:".214",bbpct:"0.0%",kpct:"12.5%",babip:".091"}, vsR:{pa:13,r:2,h:2,hr:0,rbi:3,avg:".182",obp:".308",slg:".545",ops:".853",wrc:129,woba:".364",iso:".364",bbpct:"7.7%",kpct:"7.7%",babip:".111"}, risp:{pa:8,r:1,h:1,hr:1,rbi:3,avg:".143",obp:".250",slg:".571",ops:".821",wrc:115,woba:".343",iso:".429",bbpct:"12.5%",kpct:"25.0%",babip:".000"}, highLeverage:{pa:4,r:1,h:1,hr:1,rbi:2,avg:".333",obp:".500",slg:"1.333",ops:"1.833",wrc:344,woba:".685",iso:"1.000",bbpct:"25.0%",kpct:"0.0%",babip:".000"}, twoOuts:{pa:16,r:2,h:3,hr:2,rbi:4,avg:".214",obp:".313",slg:".643",ops:".955",wrc:155,woba:".402",iso:".429",bbpct:"0.0%",kpct:"12.5%",babip:".100"}}},
    { name:"Rowdy Tellez", pos:"1B", pa:11, avg:".200", obp:".273", slg:".500", ops:".773", hr:1, rbi:4, r:2, h:2, doubles:0, triples:0, sb:0, bbpct:"9.1%", kpct:"27.3%", war:0.0, war2:0.0, wrc:108, woba:".331", xwoba:".506", oaa:null, frv:null, batSpeed:76.4, squaredUp:"14.3%", fastSwing:"52.4%", laSwSp:"57.1%", idealAttack:"66.7%", armValue:null, armStrength:null, splits:{vsL:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, vsR:{pa:9,r:1,h:2,hr:1,rbi:4,avg:".250",obp:".333",slg:".625",ops:".958",wrc:156,woba:".404",iso:".375",bbpct:"11.1%",kpct:"33.3%",babip:".250"}, risp:{pa:6,r:0,h:1,hr:0,rbi:2,avg:".200",obp:".333",slg:".200",ops:".533",wrc:63,woba:".265",iso:".000",bbpct:"16.7%",kpct:"33.3%",babip:".333"}, highLeverage:{pa:4,r:0,h:1,hr:0,rbi:2,avg:".333",obp:".500",slg:".333",ops:".833",wrc:152,woba:".397",iso:".000",bbpct:"25.0%",kpct:"25.0%",babip:".500"}, twoOuts:{pa:5,r:1,h:0,hr:0,rbi:1,avg:".000",obp:".200",slg:".000",ops:".200",wrc:-20,woba:".140",iso:".000",bbpct:"20.0%",kpct:"20.0%",babip:".000"}}},
    { name:"Jim Jarvis", pos:"SS", pa:25, avg:".292", obp:".320", slg:".458", ops:".778", hr:1, rbi:3, r:1, h:7, doubles:1, triples:0, sb:0, bbpct:"4.0%", kpct:"20.0%", war:0.4, war2:0.1, wrc:112, woba:.338, xwoba:.200, oaa:-1, frv:0, batSpeed:70.6, squaredUp:"8.1%", fastSwing:"13.5%", laSwSp:"18.2%", idealAttack:"44.8%", armValue:null, armStrength:null, splits:{vsL:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".000"}, vsR:{pa:18,r:0,h:4,hr:0,rbi:1,avg:".235",obp:".278",slg:".235",ops:".513",wrc:45,woba:".237",iso:".000",bbpct:"5.6%",kpct:"22.2%",babip:".308"}, risp:{pa:4,r:0,h:1,hr:0,rbi:1,avg:".250",obp:".250",slg:".250",ops:".500",wrc:35,woba:".223",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".333"}, highLeverage:{pa:1,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, twoOuts:{pa:10,r:0,h:4,hr:0,rbi:1,avg:".444",obp:".500",slg:".556",ops:"1.056",wrc:196,woba:".463",iso:".111",bbpct:"10.0%",kpct:"30.0%",babip:".667"}}},
  ];

export const starters = [
    // Updated July 6, 2026 — IP, ERA, FIP, xFIP, fWAR refreshed for pitchers from FanGraphs
    // All other fields (kpct, bbpct, whip, siera, bat tracking, plate discipline, splits) preserved from prior update
    // Hidden pitchers (Strider, JR Ritchie) — all fields held
    { name:"Chris Sale", wl:"9-6", era:"2.27", ip:"95.0", kpct:"28.6%", bbpct:"6.1%", whip:"1.116", war:2.8, war2:2.6, fip:"2.89", xfip:"3.10", siera:"3.14", batSpeed:70.9, fastSwing:"20.2%", swstr:"13.4%", cstr:"17.5%", csw:"30.8%", laSwSp:"36.2%", idealAttack:"45.6%", splits:{vsL:{ip:"22.2",era:"1.59",fip:"1.74",xfip:"1.70",whip:"0.97",avg:".224",obp:".275",slg:".306",woba:".262",kpct:"33.7%",bbpct:"3.3%",kbb:"30.4%"}, vsR:{ip:"67.1",era:"2.27",fip:"2.83",xfip:"3.38",whip:"1.11",avg:".224",obp:".290",slg:".308",woba:".271",kpct:"28.3%",bbpct:"6.9%",kbb:"21.4%"}}},
    { name:"Spencer Strider", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.1, fip:"5.37", xfip:"4.38", siera:"4.17", batSpeed:72.3, fastSwing:"25.1%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"44.6%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.56",xfip:"4.62",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".342",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.01",xfip:"3.92",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".379",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
    { name:"Martín Pérez", wl:"6-6", era:"3.54", ip:"81.1", kpct:"18.6%", bbpct:"9.6%", whip:"1.193", fip:"4.44", war:1.4, war2:0.6, xfip:"4.23", siera:"4.59", batSpeed:73.3, fastSwing:"34.1%", swstr:"8.8%", cstr:"18.6%", csw:"27.5%", laSwSp:"34.5%", idealAttack:"51.0%", splits:{vsL:{ip:"22.0",era:"3.68",fip:"4.15",xfip:"3.61",whip:"1.09",avg:".220",obp:".289",slg:".390",woba:".300",kpct:"22.2%",bbpct:"6.7%",kbb:"15.6%"}, vsR:{ip:"55.0",era:"3.11",fip:"4.35",xfip:"4.38",whip:"1.18",avg:".211",obp:".293",slg:".371",woba:".291",kpct:"18.4%",bbpct:"10.8%",kbb:"7.6%"}}},
    { name:"Bryce Elder", wl:"5-6", era:"4.12", ip:"102.2", kpct:"19.8%", bbpct:"7.4%", whip:"1.247", fip:"4.33", war:0.6, war2:1.1, xfip:"4.14", siera:"4.26", batSpeed:72.4, fastSwing:"27.3%", swstr:"9.2%", cstr:"16.7%", csw:"26.0%", laSwSp:"31.7%", idealAttack:"50.2%", splits:{vsL:{ip:"65.2",era:"3.70",fip:"3.98",xfip:"4.38",whip:"1.10",avg:".206",obp:".275",slg:".336",woba:".273",kpct:"19.9%",bbpct:"8.6%",kbb:"11.2%"}, vsR:{ip:"33.0",era:"4.64",fip:"3.99",xfip:"3.39",whip:"1.48",avg:".300",obp:".338",slg:".443",woba:".342",kpct:"20.3%",bbpct:"4.7%",kbb:"15.5%"}}},
    { name:"Grant Holmes", wl:"5-4", era:"3.61", ip:"87.1", kpct:"20.2%", bbpct:"10.4%", whip:"1.317", fip:"5.05", war:1.3, war2:0.2, xfip:"4.62", siera:"4.72", batSpeed:72.7, fastSwing:"28.4%", swstr:"12.0%", cstr:"15.1%", csw:"27.0%", laSwSp:"34.5%", idealAttack:"49.2%", splits:{vsL:{ip:"44.1",era:"3.65",fip:"5.25",xfip:"4.50",whip:"1.40",avg:".230",obp:".328",slg:".412",woba:".327",kpct:"21.9%",bbpct:"12.5%",kbb:"9.4%"}, vsR:{ip:"33.0",era:"4.36",fip:"5.11",xfip:"4.62",whip:"1.30",avg:".236",obp:".310",slg:".417",woba:".319",kpct:"19.0%",bbpct:"9.2%",kbb:"9.9%"}}},
    { name:"Reynaldo López", wl:"4-1", era:"3.18", ip:"56.2", sv:0, kpct:"21.3%", bbpct:"10.0%", whip:"1.271", fip:"4.24", war:0.8, war2:0.5, xfip:"4.52", siera:"4.41", batSpeed:71.5, fastSwing:"22.9%", swstr:"9.2%", cstr:"16.9%", csw:"26.1%", laSwSp:"39.6%", idealAttack:"44.2%", splits:{vsL:{ip:"26.2",era:"3.71",fip:"4.50",xfip:"5.16",whip:"1.61",avg:".222",obp:".358",slg:".364",woba:".330",kpct:"21.5%",bbpct:"17.4%",kbb:"4.1%"}, vsR:{ip:"25.0",era:"2.88",fip:"3.83",xfip:"3.80",whip:"0.96",avg:".242",obp:".255",slg:".411",woba:".286",kpct:"20.4%",bbpct:"1.0%",kbb:"19.4%"}}},
    { name:"JR Ritchie", wl:"1-2", era:"4.60", ip:"45.0", kpct:"21.0%", bbpct:"14.0%", whip:"1.467", fip:"5.40", war:0.0, war2:-0.1, xfip:"4.91", siera:"4.86", batSpeed:72.4, fastSwing:"27.9%", swstr:"8.6%", cstr:"16.3%", csw:"24.9%", laSwSp:"31.0%", idealAttack:"53.6%", splits:{vsL:{ip:"24.1",era:"6.29",fip:"6.77",xfip:"5.23",whip:"1.60",avg:".247",obp:".375",slg:".484",woba:".375",kpct:"20.5%",bbpct:"14.3%",kbb:"6.3%"}, vsR:{ip:"16.1",era:"2.76",fip:"3.84",xfip:"4.25",whip:"1.16",avg:".179",obp:".288",slg:".250",woba:".254",kpct:"21.2%",bbpct:"13.6%",kbb:"7.6%"}}},
    { name:"Hurston Waldrep", wl:"0-1", era:"8.44", ip:"10.2", kpct:"16.1%", bbpct:"17.9%", whip:"2.156", war:-0.4, war2:-0.3, fip:"8.46", xfip:"5.95", siera:"5.66", batSpeed:74.0, fastSwing:"46.8%", swstr:"8.8%", cstr:"15.8%", csw:"24.7%", laSwSp:"20.0%", idealAttack:"58.8%", splits:{vsL:{ip:"1.0",era:"0.00",fip:"7.11",xfip:"8.62",whip:"3.00",avg:".250",obp:".500",slg:".250",woba:".382",kpct:"16.7%",bbpct:"33.3%",kbb:"-16.7%"}, vsR:{ip:"1.0",era:"0.00",fip:"5.11",xfip:"5.11",whip:"3.00",avg:".250",obp:".500",slg:".250",woba:".382",kpct:"33.3%",bbpct:"33.3%",kbb:"0.0%"}}},
  ];

  export const bullpen = [
    // Updated July 6, 2026 — IP, ERA, FIP, xFIP, fWAR refreshed for pitchers from FanGraphs; Danny Young added
    // All other fields preserved from prior update
    // Hidden pitchers (Robert Suarez, James Karinchak, Carlos Carrasco, Ian Hamilton) — all fields held
    // Danny Young added with W-L/SV/IP/ERA/FIP/xFIP/fWAR from screenshot; other fields null pending Statcast/FanGraphs full-page data
    { name:"Raisel Iglesias", role:"CL", era:"2.30", ip:"31.1", sv:18, kpct:"28.2%", bbpct:"5.6%", whip:"1.117", fip:"2.38", war:0.9, war2:0.9, xfip:"3.16", siera:"2.87", batSpeed:71.3, fastSwing:"25.5%", swstr:"14.3%", cstr:"17.3%", csw:"31.6%", laSwSp:"28.9%", idealAttack:"49.8%", splits:{vsL:{ip:"17.1",era:"1.04",fip:"3.34",xfip:"4.50",whip:"0.92",avg:".190",obp:".254",slg:".293",woba:".247",kpct:"19.0%",bbpct:"7.9%",kbb:"11.1%"}, vsR:{ip:"11.0",era:"1.64",fip:"-0.07",xfip:"0.89",whip:"1.09",avg:".250",obp:".267",slg:".295",woba:".250",kpct:"42.2%",bbpct:"2.2%",kbb:"40.0%"}}},
    { name:"Dylan Lee", role:"RP", era:"1.52", ip:"41.1", sv:0, kpct:"33.8%", bbpct:"4.6%", whip:"0.677", fip:"1.47", war:1.7, war2:1.6, xfip:"2.71", siera:"2.34", batSpeed:72.5, fastSwing:"27.1%", swstr:"19.7%", cstr:"14.7%", csw:"34.4%", laSwSp:"34.4%", idealAttack:"50.0%", splits:{vsL:{ip:"14.0",era:"1.93",fip:"0.97",xfip:"2.37",whip:"0.57",avg:".130",obp:".163",slg:".283",woba:".188",kpct:"36.0%",bbpct:"4.0%",kbb:"32.0%"}, vsR:{ip:"24.0",era:"0.38",fip:"1.69",xfip:"2.91",whip:"0.63",avg:".143",obp:".172",slg:".202",woba:".169",kpct:"32.2%",bbpct:"3.4%",kbb:"28.7%"}}},
    { name:"Robert Suarez", role:"RP", era:"0.56", ip:"32.0", sv:4, kpct:"21.5%", bbpct:"5.0%", whip:"0.844", fip:"2.46", war:1.7, war2:0.8, xfip:"3.44", siera:"3.38", batSpeed:71.3, fastSwing:"22.5%", swstr:"12.2%", cstr:"12.4%", csw:"24.6%", laSwSp:"33.0%", idealAttack:"52.9%", splits:{vsL:{ip:"18.2",era:"0.48",fip:"2.79",xfip:"3.71",whip:"0.64",avg:".143",obp:".182",slg:".190",woba:".171",kpct:"20.9%",bbpct:"4.5%",kbb:"16.4%"}, vsR:{ip:"13.1",era:"0.68",fip:"1.98",xfip:"3.00",whip:"1.13",avg:".235",obp:".278",slg:".255",woba:".244",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}}},
    { name:"Didier Fuentes", role:"RP", era:"2.52", ip:"35.2", sv:1, kpct:"27.9%", bbpct:"7.5%", whip:"1.150", fip:"2.27", war:1.1, war2:1.1, xfip:"3.32", siera:"3.17", batSpeed:72.0, fastSwing:"25.7%", swstr:"12.4%", cstr:"14.7%", csw:"27.1%", laSwSp:"27.9%", idealAttack:"41.8%", splits:{vsL:{ip:"17.1",era:"3.63",fip:"2.24",xfip:"2.71",whip:"1.10",avg:".219",obp:".278",slg:".313",woba:".264",kpct:"31.9%",bbpct:"6.9%",kbb:"25.0%"}, vsR:{ip:"15.0",era:"1.20",fip:"2.64",xfip:"4.25",whip:"1.07",avg:".192",obp:".283",slg:".231",woba:".243",kpct:"23.3%",bbpct:"10.0%",kbb:"13.3%"}}},
    { name:"Tyler Kinley", role:"RP", era:"3.62", ip:"32.1", sv:0, kpct:"24.8%", bbpct:"9.0%", whip:"1.206", fip:"4.69", war:0.4, war2:0.0, xfip:"4.26", siera:"3.74", batSpeed:70.7, fastSwing:"15.8%", swstr:"12.2%", cstr:"17.8%", csw:"30.0%", laSwSp:"31.4%", idealAttack:"55.9%", splits:{vsL:{ip:"16.2",era:"5.40",fip:"5.81",xfip:"3.90",whip:"1.08",avg:".197",obp:".269",slg:".475",woba:".314",kpct:"28.4%",bbpct:"9.0%",kbb:"19.4%"}, vsR:{ip:"13.1",era:"0.00",fip:"2.28",xfip:"4.09",whip:"1.28",avg:".250",obp:".316",slg:".288",woba:".278",kpct:"22.8%",bbpct:"7.0%",kbb:"15.8%"}}},
    { name:"Dylan Dodd", role:"RP", era:"2.08", ip:"26.0", sv:1, kpct:"27.8%", bbpct:"8.2%", whip:"0.769", fip:"3.46", war:0.7, war2:0.3, xfip:"3.72", siera:"3.14", batSpeed:73.0, fastSwing:"34.2%", swstr:"13.2%", cstr:"11.9%", csw:"25.1%", laSwSp:"35.7%", idealAttack:"55.2%", splits:{vsL:{ip:"9.0",era:"3.00",fip:"5.00",xfip:"3.78",whip:"1.22",avg:".182",obp:".289",slg:".394",woba:".293",kpct:"31.6%",bbpct:"13.2%",kbb:"18.4%"}, vsR:{ip:"13.0",era:"2.08",fip:"2.80",xfip:"3.42",whip:"0.62",avg:".119",obp:".178",slg:".238",woba:".188",kpct:"28.3%",bbpct:"6.5%",kbb:"21.7%"}}},
    { name:"James Karinchak", role:"RP", era:"1.86", ip:"9.2", sv:0, kpct:"21.6%", bbpct:"13.5%", whip:"0.931", fip:"4.36", war:0.3, war2:0.0, xfip:"5.38", siera:"4.97", batSpeed:71.8, fastSwing:"25.0%", swstr:"8.5%", cstr:"21.8%", csw:"30.3%", laSwSp:"22.7%", idealAttack:"60.6", splits:{vsL:{ip:"2.2",era:"0.00",fip:"3.86",xfip:"6.12",whip:"1.13",avg:".125",obp:".300",slg:".250",woba:".266",kpct:"20.0%",bbpct:"20.0%",kbb:"0.0%"}, vsR:{ip:"5.0",era:"1.80",fip:"1.71",xfip:"4.12",whip:"0.40",avg:".067",obp:".118",slg:".067",woba:".094",kpct:"29.4%",bbpct:"5.9%",kbb:"23.5%"}}},
    { name:"Carlos Carrasco", role:"RP", era:"5.94", ip:"16.2", sv:0, kpct:"9.6%", bbpct:"4.1%", whip:"1.440", fip:"5.51", war:-0.2, war2:-0.2, xfip:"4.73", siera:"4.77", batSpeed:72.4, fastSwing:"32.2%", swstr:"9.3%", cstr:"12.6%", csw:"22.0%", laSwSp:"47.5%", idealAttack:"57.4", splits:{vsL:{ip:"8.2",era:"5.19",fip:"4.49",xfip:"4.56",whip:"1.27",avg:".314",obp:".333",slg:".429",woba:".335",kpct:"5.4%",bbpct:"0.0%",kbb:"5.4%"}, vsR:{ip:"6.0",era:"1.50",fip:"4.94",xfip:"4.03",whip:"1.00",avg:".238",obp:".304",slg:".381",woba:".306",kpct:"16.7%",bbpct:"4.2%",kbb:"12.5%"}}},
    { name:"Ian Hamilton", role:"RP", era:"7.71", ip:"4.2", sv:0, kpct:"17.4%", bbpct:"13.0%", whip:"1.929", fip:"3.33", war:-0.1, war2:0.0, xfip:"3.98", siera:"3.96", batSpeed:72.6, fastSwing:"29.4%", swstr:"12.0%", cstr:"19.6%", csw:"31.5%", laSwSp:"31.3%", idealAttack:"31.8%", splits:{vsL:{ip:"1.0",era:"18.00",fip:"4.11",xfip:"5.62",whip:"4.00",avg:".500",obp:".571",slg:".667",woba:".535",kpct:"14.3%",bbpct:"14.3%",kbb:"0.0%"}, vsR:{ip:"2.0",era:"4.50",fip:"3.11",xfip:"3.86",whip:"1.00",avg:".000",obp:".250",slg:".000",woba:".175",kpct:"37.5%",bbpct:"25.0%",kbb:"12.5%"}}},
    { name:"Danny Young", role:"RP", era:"0.00", ip:"2.1", sv:0, kpct:"25.0%", bbpct:"12.5%", whip:"0.857", fip:"2.69", war:0.2, war2:0.1, xfip:"2.69", siera:"2.18", batSpeed:71.8, fastSwing:"0.0%", swstr:"6.7%", cstr:"26.7%", csw:"33.3%", laSwSp:"0.0%", idealAttack:null, splits:{vsL:null, vsR:null}},
  ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:54,l:38,pct:".587",gb:"—", home:"27-18",away:"27-20", rs:454, ra:359, diff:+95, strk:"W2", l10:"5-5", highlight:true,  srs:1.0 },
     { team:"PHI", full:"Philadelphia Phillies", w:52,l:42,pct:".553",gb:"3.0", home:"25-21",away:"27-21", rs:413, ra:422, diff:-9, strk:"W1", l10:"5-5", highlight:false, srs:-0.1 },
     { team:"MIA", full:"Miami Marlins",        w:52,l:42,pct:".553",gb:"3.0", home:"31-17",away:"21-25", rs:434, ra:403, diff:+31, strk:"W6", l10:"8-2", highlight:false, srs:0.4 },
     { team:"WSN", full:"Washington Nationals", w:48,l:46,pct:".511",gb:"7.0", home:"20-28",away:"28-18", rs:508, ra:495, diff:+13, strk:"W1", l10:"6-4", highlight:false, srs:0.3 },
     { team:"NYM", full:"New York Mets",        w:40,l:54,pct:".426",gb:"15.0", home:"21-25",away:"19-29", rs:394, ra:450, diff:-56, strk:"W2", l10:"5-5", highlight:false, srs:-0.6 },
   ];
   
export const statcastHitters = [
  // Updated July 10, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU% refreshed from Baseball Savant
  // pullAir held (separate leaderboard); Acuña, León, Tromp, Murphy, Kim, Tellez hidden — all fields held; Jim Jarvis pullAir placeholder "—" pending separate pull; Kyle Farmer & José Azócar non-roster — not added
  { name:"Michael Harris II", ev:"91.6",hardHit:"50.0%",xwoba:".366",xba:".302",xslg:".516",barrel:"13.0%",chase:"45.1%",whiff:"26.5%",kpct:"20.6%",bbpct:"4.4%", gbpct:"43.3%",fbpct:"24.4%",ldpct:"26.4%",pupct:"5.9%",pullAir:"17.5%"},
  { name:"Matt Olson", ev:"92.9",hardHit:"51.9%",xwoba:".363",xba:".254",xslg:".522",barrel:"14.2%",chase:"26.8%",whiff:"24.1%",kpct:"23.3%",bbpct:"9.9%", gbpct:"35.8%",fbpct:"35.1%",ldpct:"21.3%",pupct:"7.8%",pullAir:"19.7%"},
  { name:"Dominic Smith", ev:"87.7",hardHit:"35.2%",xwoba:".316",xba:".263",xslg:".406",barrel:"6.2%",chase:"32.5%",whiff:"20.3%",kpct:"14.1%",bbpct:"6.6%", gbpct:"40.2%",fbpct:"28.5%",ldpct:"25.7%",pupct:"5.6%",pullAir:"17.5%"},
  { name:"Drake Baldwin", ev:"91.4",hardHit:"50.3%",xwoba:".374",xba:".272",xslg:".506",barrel:"15.1%",chase:"34.9%",whiff:"24.8%",kpct:"23.2%",bbpct:"9.5%", gbpct:"46.2%",fbpct:"23.6%",ldpct:"24.6%",pupct:"5.5%",pullAir:"13.0%"},
  { name:"Mauricio Dubón", ev:"86.3",hardHit:"31.1%",xwoba:".320",xba:".274",xslg:".396",barrel:"4.7%",chase:"37.0%",whiff:"16.7%",kpct:"14.2%",bbpct:"7.0%", gbpct:"41.4%",fbpct:"23.9%",ldpct:"26.4%",pupct:"8.2%",pullAir:"14.5%"},
  { name:"Jorge Mateo", ev:"90.2",hardHit:"47.0%",xwoba:".316",xba:".256",xslg:".428",barrel:"9.6%",chase:"41.7%",whiff:"30.9%",kpct:"31.1%",bbpct:"6.1%", gbpct:"39.8%",fbpct:"30.1%",ldpct:"26.5%",pupct:"3.6%",pullAir:"21.8%"},
  { name:"Austin Riley", ev:"90.2",hardHit:"42.2%",xwoba:".287",xba:".202",xslg:".364",barrel:"10.2%",chase:"32.8%",whiff:"32.6%",kpct:"29.8%",bbpct:"8.0%", gbpct:"38.7%",fbpct:"30.7%",ldpct:"21.3%",pupct:"9.3%",pullAir:"17.1%"},
  { name:"Ozzie Albies", ev:"87.1",hardHit:"27.9%",xwoba:".294",xba:".245",xslg:".374",barrel:"4.2%",chase:"36.8%",whiff:"20.3%",kpct:"12.8%",bbpct:"6.8%", gbpct:"35.6%",fbpct:"31.7%",ldpct:"25.4%",pupct:"7.3%",pullAir:"25.2%"},
  { name:"Mike Yastrzemski", ev:"90.3",hardHit:"43.5%",xwoba:".306",xba:".230",xslg:".353",barrel:"6.0%",chase:"26.5%",whiff:"23.5%",kpct:"23.2%",bbpct:"10.4%", gbpct:"40.5%",fbpct:"29.8%",ldpct:"23.8%",pupct:"6.0%",pullAir:"17.8%"},
  { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"18.6%"},
  { name:"Eli White", ev:"87.0",hardHit:"31.8%",xwoba:".280",xba:".237",xslg:".342",barrel:"6.0%",chase:"29.0%",whiff:"28.4%",kpct:"21.8%",bbpct:"5.9%", gbpct:"55.3%",fbpct:"23.5%",ldpct:"18.8%",pupct:"2.4%",pullAir:"9.6%"},
  { name:"Ha-Seong Kim", ev:"85.2",hardHit:"21.6%",xwoba:".212",xba:".146",xslg:".203",barrel:"4.1%",chase:"24.4%",whiff:"21.1%",kpct:"26.8%",bbpct:"11.0%", gbpct:"43.1%",fbpct:"37.3%",ldpct:"9.8%",pupct:"9.8%",pullAir:"17.6%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
  { name:"Joey Bart", ev:"87.0",hardHit:"36.7%",xwoba:".301",xba:".215",xslg:".419",barrel:"10.0%",chase:"32.2%",whiff:"24.9%",kpct:"26.4%",bbpct:"3.3%", gbpct:"40.0%",fbpct:"38.3%",ldpct:"16.7%",pupct:"5.0%",pullAir:"21.4%"},
  { name:"Rowdy Tellez", ev:"91.8",hardHit:"42.9%",xwoba:".487",xba:".339",xslg:".828",barrel:"28.6%",chase:"33.3%",whiff:"28.6%",kpct:"30.0%",bbpct:"0.0%", gbpct:"14.3%",fbpct:"57.1%",ldpct:"28.6%",pupct:"0.0%",pullAir:"14.3%"},
  { name:"Jim Jarvis", ev:"83.1",hardHit:"21.1%",xwoba:".259",xba:".231",xslg:".326",barrel:"5.3%",chase:"36.2%",whiff:"16.0%",kpct:"20.0%",bbpct:"4.0%", gbpct:"52.6%",fbpct:"26.3%",ldpct:"15.8%",pupct:"5.3%",pullAir:"—"},
];

export const statcastPitchers = [
  // Updated July 10, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU% refreshed from Baseball Savant
  // pullAir held (separate leaderboard); Suarez, Strider, Pérez, Carrasco, Hamilton hidden — all fields held; Tyler Kinley not on current leaderboard — all fields held; Danny Young pullAir placeholder "—" pending separate pull; Victor Mederos non-roster — not added
  { name:"Raisel Iglesias", ev:"87.7",hardHit:"32.9%",xwoba:".257",xba:".218",xslg:".318",kpct:"28.2%",bbpct:"5.6%", barrel:"4.9%", chase:"39.2%",whiff:"29.5%",gbpct:"36.6%",fbpct:"26.8%",ldpct:"26.8%",pupct:"9.8%", pullAir:"19.7%"},
  { name:"Dylan Lee", ev:"86.7",hardHit:"28.0%",xwoba:".214",xba:".178",xslg:".256",kpct:"33.8%",bbpct:"4.6%", barrel:"4.3%", chase:"38.1%",whiff:"38.4%",gbpct:"33.3%",fbpct:"31.2%",ldpct:"25.8%",pupct:"9.7%", pullAir:"26.7%"},
  { name:"Robert Suarez", ev:"84.9",hardHit:"33.0%",xwoba:".282",xba:".252",xslg:".351",kpct:"21.5%",bbpct:"5.0%", barrel:"3.4%", chase:"38.8%",whiff:"24.0%",gbpct:"47.7%",fbpct:"23.9%",ldpct:"20.5%",pupct:"8.0%", pullAir:"13.6%"},
  { name:"Bryce Elder", ev:"90.0",hardHit:"39.8%",xwoba:".303",xba:".247",xslg:".385",kpct:"19.8%",bbpct:"7.4%", barrel:"5.4%", chase:"29.4%",whiff:"22.3%",gbpct:"43.0%",fbpct:"27.1%",ldpct:"23.6%",pupct:"6.4%", pullAir:"18.0%"},
  { name:"Chris Sale", ev:"87.1",hardHit:"32.8%",xwoba:".289",xba:".234",xslg:".348",kpct:"28.6%",bbpct:"6.1%", barrel:"5.7%", chase:"35.4%",whiff:"29.2%",gbpct:"45.7%",fbpct:"23.1%",ldpct:"25.5%",pupct:"5.7%", pullAir:"17.0%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"89.5",hardHit:"37.6%",xwoba:".277",xba:".227",xslg:".324",kpct:"27.9%",bbpct:"7.5%", barrel:"4.3%", chase:"29.8%",whiff:"27.1%",gbpct:"40.9%",fbpct:"25.8%",ldpct:"24.7%",pupct:"8.6%", pullAir:"11.0%"},
  { name:"Hurston Waldrep", ev:"89.3",hardHit:"34.3%",xwoba:".360",xba:".231",xslg:".389",kpct:"16.1%",bbpct:"17.9%", barrel:"8.6%", chase:"21.1%",whiff:"23.3%",gbpct:"71.4%",fbpct:"14.3%",ldpct:"5.7%",pupct:"8.6%", pullAir:"9.5%"},
  { name:"Tyler Kinley", ev:"84.5",hardHit:"25.3%",xwoba:".267",xba:".191",xslg:".336",kpct:"24.8%",bbpct:"9.0%", barrel:"5.8%", chase:"25.9%",whiff:"27.8%",gbpct:"31.0%",fbpct:"33.3%",ldpct:"23.0%",pupct:"12.6%", pullAir:"34.5%"},
  { name:"Martín Pérez", ev:"87.9",hardHit:"36.8%",xwoba:".323",xba:".253",xslg:".397",kpct:"19.5%",bbpct:"9.6%", barrel:"6.8%", chase:"26.2%",whiff:"22.3%",gbpct:"48.2%",fbpct:"22.3%",ldpct:"24.5%",pupct:"5.0%", pullAir:"21.4%"},
  { name:"Grant Holmes", ev:"90.7",hardHit:"43.4%",xwoba:".329",xba:".244",xslg:".416",kpct:"20.2%",bbpct:"10.4%", barrel:"8.9%", chase:"31.5%",whiff:"26.9%",gbpct:"41.9%",fbpct:"27.5%",ldpct:"24.4%",pupct:"6.2%", pullAir:"20.8%"},
  { name:"Reynaldo López", ev:"86.8",hardHit:"34.6%",xwoba:".327",xba:".251",xslg:".412",kpct:"21.3%",bbpct:"10.0%", barrel:"6.2%", chase:"27.2%",whiff:"22.0%",gbpct:"35.8%",fbpct:"27.2%",ldpct:"27.8%",pupct:"9.3%", pullAir:"21.5%"},
  { name:"JR Ritchie", ev:"89.4",hardHit:"38.9%",xwoba:".337",xba:".238",xslg:".397",kpct:"21.0%",bbpct:"14.0%", barrel:"7.9%", chase:"26.5%",whiff:"23.5%",gbpct:"43.7%",fbpct:"28.6%",ldpct:"22.2%",pupct:"5.6%", pullAir:"19.5%"},
  { name:"Dylan Dodd", ev:"89.7",hardHit:"40.3%",xwoba:".256",xba:".194",xslg:".327",kpct:"27.8%",bbpct:"8.2%", barrel:"8.1%", chase:"30.4%",whiff:"27.7%",gbpct:"30.6%",fbpct:"24.2%",ldpct:"24.2%",pupct:"21.0%", pullAir:"41.2%"},
  { name:"James Karinchak", ev:"88.4",hardHit:"33.3%",xwoba:".268",xba:".158",xslg:".299",kpct:"21.6%",bbpct:"13.5%", barrel:"8.3%", chase:"23.0%",whiff:"26.6%",gbpct:"29.2%",fbpct:"37.5%",ldpct:"16.7%",pupct:"16.7%", pullAir:"13.6%"},
  { name:"Carlos Carrasco", ev:"89.2",hardHit:"42.2%",xwoba:".358",xba:".325",xslg:".452",kpct:"11.1%",bbpct:"1.9%", barrel:"6.7%", chase:"43.6%",whiff:"17.2%",gbpct:"48.9%",fbpct:"11.1%",ldpct:"33.3%",pupct:"6.7%", pullAir:"26.9%"},
  { name:"Ian Hamilton", ev:"93.0",hardHit:"50.0%",xwoba:".342",xba:".307",xslg:".356",kpct:"17.4%",bbpct:"13.0%", barrel:"0.0%", chase:"30.0%",whiff:"28.6%",gbpct:"56.3%",fbpct:"12.5%",ldpct:"31.3%",pupct:"0.0%", pullAir:"12.5%"},
  { name:"Danny Young", ev:"96.7",hardHit:"80.0%",xwoba:".197",xba:".137",xslg:".144",kpct:"25.0%",bbpct:"12.5%", barrel:"0.0%", chase:"20.0%",whiff:"25.0%",gbpct:"100.0%",fbpct:"0.0%",ldpct:"0.0%",pupct:"0.0%", pullAir:"—"},
];
   
   export const hitterWarProgress = [
     { week:"G6",  "Olson":0.5,"Albies":0.3,"Baldwin":0.2,"Harris":0.1,"Dubón":0.1,"Acuña":0.0,"Smith":0.0,"Mateo":0.0,"Riley":0.0,"White":0.0,"Yaz":0.0,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0 },
     { week:"G12", "Olson":1.0,"Albies":0.8,"Baldwin":0.6,"Harris":0.4,"Dubón":0.3,"Acuña":0.0,"Smith":0.1,"Mateo":0.0,"Riley":0.1,"White":0.0,"Yaz":-0.1,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0 },
     { week:"G18", "Olson":1.4,"Albies":1.0,"Baldwin":0.9,"Harris":0.7,"Dubón":0.4,"Acuña":0.1,"Smith":0.2,"Mateo":0.1,"Riley":0.1,"White":0.0,"Yaz":-0.1,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0 },
     { week:"G24", "Olson":1.7,"Albies":1.4,"Baldwin":1.2,"Harris":0.9,"Dubón":0.6,"Acuña":0.2,"Smith":0.3,"Mateo":0.2,"Riley":0.2,"White":0.0,"Yaz":-0.2,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0 },
     { week:"G30", "Olson":2.0,"Albies":1.6,"Baldwin":1.4,"Harris":1.1,"Dubón":0.7,"Acuña":0.3,"Smith":0.4,"Mateo":0.3,"Riley":0.2,"White":-0.1,"Yaz":-0.2,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":0.0,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0 },
     { week:"G36", "Olson":2.1,"Albies":1.7,"Baldwin":1.6,"Harris":1.2,"Dubón":0.8,"Acuña":0.5,"Smith":0.5,"Mateo":0.4,"Riley":0.2,"White":-0.2,"Yaz":-0.3,"León":0.0,"Kim":0.0,"Tromp":0.0,"Murphy":-0.1,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0 },
     { week:"G42", "Olson":2.4,"Albies":1.5,"Baldwin":1.8,"Harris":1.2,"Dubón":1.0,"Acuña":0.6,"Smith":0.6,"Mateo":0.6,"Riley":0.3,"White":-0.1,"Yaz":0.1,"León":0.0,"Kim":0.1,"Tromp":0.0,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0 },
     { week:"G54", "Olson":2.2,"Albies":1.4,"Baldwin":2.3,"Harris":1.5,"Dubón":0.9,"Acuña":0.5,"Smith":0.6,"Mateo":0.6,"Riley":0.5,"White":-0.1,"Yaz":0.3,"León":-0.2,"Kim":-0.6,"Tromp":0.1,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0 },
     { week:"G60", "Olson":2.2,"Albies":1.5,"Baldwin":2.2,"Harris":1.9,"Dubón":1.0,"Acuña":1.0,"Smith":0.6,"Mateo":0.9,"Riley":0.3,"White":-0.1,"Yaz":0.6,"León":-0.3,"Kim":-0.8,"Tromp":-0.1,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0 },
     { week:"G66", "Olson":2.3,"Albies":1.7,"Baldwin":2.2,"Harris":2.1,"Dubón":1.5,"Acuña":1.0,"Smith":0.5,"Mateo":0.8,"Riley":0.2,"White":-0.1,"Yaz":0.5,"León":-0.4,"Kim":-0.9,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0 },
     { week:"G73", "Olson":2.7,"Albies":1.7,"Baldwin":2.1,"Harris":2.2,"Dubón":1.6,"Acuña":0.9,"Smith":0.2,"Mateo":0.8,"Riley":0.1,"White":0.2,"Yaz":0.2,"León":-0.5,"Kim":-1.0,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0 },
     { week:"G81", "Olson":2.5,"Albies":1.7,"Baldwin":1.5,"Harris":2.2,"Dubón":1.7,"Acuña":0.9,"Smith":0.0,"Mateo":0.7,"Riley":0.1,"White":0.2,"Yaz":0.0,"León":-0.5,"Kim":-1.2,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":0.0 },
     { week:"G90", "Olson":2.9,"Albies":1.8,"Baldwin":1.4,"Harris":2.6,"Dubón":2.1,"Acuña":0.9,"Smith":-0.2,"Mateo":0.7,"Riley":0.0,"White":0.4,"Yaz":0.2,"León":-0.5,"Kim":-1.1,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":-0.1 },
   ];
   
   export const pitcherWarProgress = [
     { week:"G6",  "Elder":0.2,"Sale":0.1,"D.Lee":0.1,"Iglesias":0.1,"Suarez":0.1,"Fuentes":0.0,"Pérez":0.1,"Holmes":0.0,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":0.0,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0 },
     { week:"G12", "Elder":0.3,"Sale":0.3,"D.Lee":0.2,"Iglesias":0.2,"Suarez":0.2,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0 },
     { week:"G18", "Elder":0.5,"Sale":0.5,"D.Lee":0.3,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.1,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0 },
     { week:"G24", "Elder":0.7,"Sale":0.5,"D.Lee":0.4,"Iglesias":0.3,"Suarez":0.3,"Fuentes":0.1,"Pérez":0.2,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":0.0,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0 },
     { week:"G30", "Elder":0.9,"Sale":0.7,"D.Lee":0.5,"Iglesias":0.4,"Suarez":0.4,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0 },
     { week:"G36", "Elder":1.0,"Sale":0.8,"D.Lee":0.6,"Iglesias":0.5,"Suarez":0.5,"Fuentes":0.2,"Pérez":0.1,"Holmes":0.1,"Kinley":0.0,"López":0.0,"Strider":-0.1,"Ritchie":-0.3,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0 },
     { week:"G42", "Elder":1.3,"Sale":0.9,"D.Lee":0.8,"Iglesias":0.6,"Suarez":0.6,"Fuentes":0.4,"Pérez":0.3,"Holmes":0.0,"Kinley":-0.1,"López":-0.1,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0 },
     { week:"G54", "Elder":1.4,"Sale":1.5,"D.Lee":1.0,"Iglesias":0.7,"Suarez":0.5,"Fuentes":0.4,"Pérez":0.5,"Holmes":0.2,"Kinley":0.0,"López":-0.2,"Strider":0.1,"Ritchie":-0.2,"Dodd":0.2,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0 },
     { week:"G60", "Elder":1.5,"Sale":1.7,"D.Lee":1.0,"Iglesias":0.8,"Suarez":0.6,"Fuentes":0.5,"Pérez":0.4,"Holmes":0.1,"Kinley":0.1,"López":-0.1,"Strider":0.2,"Ritchie":-0.2,"Dodd":0.2,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0 },
     { week:"G66", "Elder":1.6,"Sale":1.9,"D.Lee":1.0,"Iglesias":0.9,"Suarez":0.7,"Fuentes":0.7,"Pérez":0.6,"Holmes":0.1,"Kinley":0.1,"López":0.0,"Strider":0.3,"Ritchie":-0.2,"Dodd":0.3,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0 },
     { week:"G73", "Elder":1.5,"Sale":2.2,"D.Lee":1.1,"Iglesias":0.8,"Suarez":0.8,"Fuentes":0.8,"Pérez":0.8,"Holmes":0.0,"Kinley":0.1,"López":0.0,"Strider":0.0,"Ritchie":-0.4,"Dodd":0.0,"Karinchak":0.0,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0 },
     { week:"G81", "Elder":1.4,"Sale":2.4,"D.Lee":1.3,"Iglesias":0.9,"Suarez":0.8,"Fuentes":0.9,"Pérez":0.9,"Holmes":0.0,"Kinley":0.1,"López":0.2,"Strider":0.0,"Ritchie":-0.2,"Dodd":0.1,"Karinchak":0.1,"Waldrep":0.0,"Hamilton":0.0,"Young":0.0 },
     { week:"G90", "Elder":1.5,"Sale":2.6,"D.Lee":1.5,"Iglesias":0.9,"Suarez":0.8,"Fuentes":1.0,"Pérez":0.6,"Holmes":0.0,"Kinley":0.0,"López":0.5,"Strider":0.1,"Ritchie":-0.1,"Dodd":0.3,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":0.0 },
   ];

// ════════════════════════════════════════════════════════════════════════════
// TrackerHit+ / TrackerArm+ — Composite performance metrics
// Updated June 25, 2026
//   Hitters:  wOBA (23) · LD% (17) · Whiff% inv (15) · LA SwSp% (12) ·
//             Hard Hit% (11) · EV (11) · Chase% inv (08)
//   Pitchers: SIERA inv (26) · K-BB% (24) · WHIP inv (20) · xwOBA inv (12) ·
//             SwStr% (10) · EV inv (8)
// 100-centered, 15 points per pooled standard deviation. Recalibrate league
// constants at season end from Baseball Savant / FanGraphs MLB-wide leaderboards.
// ════════════════════════════════════════════════════════════════════════════

const _pct = (v) => (typeof v === "string" ? parseFloat(v.replace("%","")) : Number(v));
const _num = (v) => (typeof v === "string" ? parseFloat(v.replace(/[^\d.\-]/g,"")) : Number(v));
const _z   = (val, mean, sd) => (sd > 0 ? (val - mean) / sd : 0);

// ─── League constants ──────────────────────────────────────────────────────
const LG_HIT = {
  woba:    { mean: 0.317, sd: 0.030 },
  ldpct:   { mean: 23.7,  sd: 3.0   },
  whiff:   { mean: 25.0,  sd: 4.0   },   // inverted (lower = better)
  laSwSp:  { mean: 33.7,  sd: 4.0   },
  hardHit: { mean: 39.2,  sd: 6.0   },
  ev:      { mean: 88.7,  sd: 2.0   },
  chase:   { mean: 30.0,  sd: 4.0   },   // inverted (lower = better)
};
const W_HIT = {
  woba: 0.26, ldpct: 0.17, whiff: 0.15, laSwSp: 0.12, hardHit: 0.11, ev: 0.11, chase: 0.08,
};

const LG_PIT = {
  siera: { mean: 4.05,  sd: 0.50  },   // inverted (lower = better)
  kbb:   { mean: 15.0,  sd: 5.0   },
  whip:  { mean: 1.30,  sd: 0.15  },   // inverted (lower = better)
  xwoba: { mean: 0.320, sd: 0.030 },   // inverted (lower allowed = better)
  swstr: { mean: 11.5,  sd: 2.5   },
  ev:    { mean: 88.7,  sd: 2.0   },   // inverted (lower allowed = better)
};
const W_PIT = {
  siera: 0.26, kbb: 0.24, whip: 0.20, xwoba: 0.12, swstr: 0.10, ev: 0.08,
};

// ─── Lookup tables ─────────────────────────────────────────────────────────
const _scHitterByName  = Object.fromEntries(statcastHitters.map(s => [s.name, s]));
const _scPitcherByName = Object.fromEntries(statcastPitchers.map(s => [s.name, s]));

// ─── Compute TrackerHit+ for a hitter ──────────────────────────────────────
const _computeTrackerHit = (h) => {
  const sc = _scHitterByName[h.name] || {};
  const woba    = _num(h.woba);
  const ldpct   = _pct(sc.ldpct);
  const whiff   = _pct(sc.whiff);
  const laSwSp  = _pct(h.laSwSp);
  const hardHit = _pct(sc.hardHit);
  const ev      = _num(sc.ev);
  const chase   = _pct(sc.chase);
  if ([woba, ldpct, whiff, laSwSp, hardHit, ev, chase].some(v => !isFinite(v))) return null;
  const z =
      W_HIT.woba    *  _z(woba,    LG_HIT.woba.mean,    LG_HIT.woba.sd)
    + W_HIT.ldpct   *  _z(ldpct,   LG_HIT.ldpct.mean,   LG_HIT.ldpct.sd)
    + W_HIT.whiff   * -_z(whiff,   LG_HIT.whiff.mean,   LG_HIT.whiff.sd)   // inverted
    + W_HIT.laSwSp  *  _z(laSwSp,  LG_HIT.laSwSp.mean,  LG_HIT.laSwSp.sd)
    + W_HIT.hardHit *  _z(hardHit, LG_HIT.hardHit.mean, LG_HIT.hardHit.sd)
    + W_HIT.ev      *  _z(ev,      LG_HIT.ev.mean,      LG_HIT.ev.sd)
    + W_HIT.chase   * -_z(chase,   LG_HIT.chase.mean,   LG_HIT.chase.sd);  // inverted
  return Math.round(100 + 15 * z);
};

// ─── Compute TrackerArm+ for a pitcher ─────────────────────────────────────
const _computeTrackerArm = (p) => {
  const sc = _scPitcherByName[p.name] || {};
  const siera = _num(p.siera);
  const kpct  = _pct(p.kpct);
  const bbpct = _pct(p.bbpct);
  const kbb   = kpct - bbpct;
  const whip  = _num(p.whip);
  const xwoba = _num(sc.xwoba);
  const swstr = _pct(p.swstr);
  const ev    = _num(sc.ev);
  if ([siera, kbb, whip, xwoba, swstr, ev].some(v => !isFinite(v))) return null;
  const z =
      W_PIT.siera * -_z(siera, LG_PIT.siera.mean, LG_PIT.siera.sd)   // inverted
    + W_PIT.kbb   *  _z(kbb,   LG_PIT.kbb.mean,   LG_PIT.kbb.sd)
    + W_PIT.whip  * -_z(whip,  LG_PIT.whip.mean,  LG_PIT.whip.sd)    // inverted
    + W_PIT.xwoba * -_z(xwoba, LG_PIT.xwoba.mean, LG_PIT.xwoba.sd)   // inverted
    + W_PIT.swstr *  _z(swstr, LG_PIT.swstr.mean, LG_PIT.swstr.sd)
    + W_PIT.ev    * -_z(ev,    LG_PIT.ev.mean,    LG_PIT.ev.sd);     // inverted
  return Math.round(100 + 15 * z);
};

// ─── Attach to player objects ──────────────────────────────────────────────
hitters.forEach(h => { h.trackerHit = _computeTrackerHit(h); });
starters.forEach(p => { p.trackerArm = _computeTrackerArm(p); });
bullpen.forEach(p => { p.trackerArm = _computeTrackerArm(p); });
