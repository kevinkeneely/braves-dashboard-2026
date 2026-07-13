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
 
   export const lastUpdated = "July 13, 2026";
 
   /* ═══════════════════════════════════════════════════════════════════════════
      ROSTER CHECKLIST — exact spellings (for Ctrl+F). Update when adding/removing
      a player. This is just a reference comment; it does not affect the dashboard.
      ───────────────────────────────────────────────────────────────────────────
      HITTERS (18):
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
   
      STARTERS (9):
      //   - Chris Sale
      //   - Spencer Strider
      //   - Bryce Elder
      //   - Reynaldo López
      //   - Martín Pérez
      //   - Grant Holmes
      //   - Hurston Waldrep
      //   - JR Ritchie
      //   - Owen Murphy
   
      BULLPEN (11):
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
      //   - Víctor Mederos
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
     { date:"Fri, Jul 10", opp:"St. Louis",   home:false, result:"L", score:"1-2", record:"54-39"},
     { date:"Sat, Jul 11", opp:"St. Louis",   home:false, result:"L", score:"1-4", record:"54-40"},
     { date:"Sun, Jul 12", opp:"St. Louis",   home:false, result:"W", score:"4-3", record:"55-40"},
      // Upcoming
      // All-Star Break
     { date:"Tue, Jul 14", opp:"All Star",    home:true,},
      // Second Half
   ];
   
   export const TEAM_HEADER = {
     record: "55-40",
     runs: 460,
     era: "3.60",
     avg: ".246",
     obp: ".313",
     slg: ".409",
     ops: ".722",
     wrc: 98,
     iso: ".163",
     battingK: "21.3%",
     battingBB: "8.0%",
     woba: ".316",
     xwoba: ".320",
     fip: "4.07",
     xera: "3.90",
     xfip: "4.08",
     whip: "1.23",
     gb: "41.9%",
     siera: "4.02",
     pitchingK: "22.9%",
     pitchingBB: "9.0%",
     pitchingKBB: "13.8%",
     swstr: "11.4%",
     cstr: "16.0%",
     csw: "27.4%",
     fastSwing: "26.5%",
     sqUpSw: "24.1%",
     blastSw: "9.9%",
     idealAtk: "49.3%",
     batFastSwing: "31.9%",
     batSqUpSw: "24.3%",
     batBlastSw: "10.9%",
     batIdealAtk: "50.0%",
     batSwStr: "10.9%",
     batCStr: "15.1%",
     batCSW: "26.0%",
     batChase: "33.5%",
     batWhiff: "24.6%",
     chase: "30.4%",
     whiff: "26.2%",
     batBatSpeed: "72.6",
     batSpeed: "72.1",
// Plate Discipline additions
     batZoneSwing: "67.8%",
     batZoneContact: "84.3%",
     batChaseContact: "59.9%",
     zoneSwing: "67.0%",
     zoneContact: "83.7%",
     chaseContact: "54.4%",
// Statcast (hitters)
     batBarrel: "8.9%",
     batHardHit: "39.8%",
     batExitVelo: "89.2",
     batXBA: ".247",
     batXSLG: ".417",
     batXwOBAcon: ".370",
// batXwOBA reuses existing `xwoba` field (.326)
// Statcast (pitchers)
     barrel: "6.9%",
     hardHit: "37.5%",
     exitVelo: "88.7",
     xBA: ".236",
     xSLG: ".378",
     pXwOBA: ".306",
     xwOBAcon: ".353",
 };
   
export const hitters = [
    // Updated July 10, 2026 (evening) — vsL and vsR splits refreshed for all hitters from FanGraphs splits screenshots
    // RISP, highLeverage, and twoOuts splits preserved from July 10 morning update; all top-level stats preserved from prior updates
    // Hidden players (León, Tromp, Murphy, Acuña, Kim, Tellez) split data included per screenshots; non-roster (Wynns/Heim/Farmer/Azócar/Camargo/Luke Williams) not added
    // Data quality fix: Joey Bart vsR HR corrected 0→1 (old value was mathematically inconsistent with SLG .545); new screenshot confirms 1B 0, 2B 1, HR 1
    // PA reconciliation now clean for 17/18 hitters (vsL+vsR = top-level PA exactly). Joey Bart persists as outlier — top 91 vs splits 29 — likely top-level includes prior-team PA
    { name:"Ronald Acuña Jr.", pos:"RF", pa:236, avg:".251", obp:".373", slg:".421", ops:".793", hr:7, rbi:22, r:31, h:49, doubles:10, triples:1, sb:15, bbpct:"14.8%", kpct:"22.0%", war:0.8, war2:0.9, wrc:122, woba:".351", xwoba:".378", oaa:-4, frv:-4, batSpeed:76.0, squaredUp:"21.3%", fastSwing:"62.3%", laSwSp:"32.4%", idealAttack:"53.8%", armValue:null, armStrength:93.6, abs:{netOvr:-3.3, netRuns:-0.7, chal:16, won:7, lost:9, wonPct:"44%", chalRate:"14.4%", xChalRate:"6.3%", rateVsExp:"+8.1%"}, splits:{vsL:{pa:81,r:12,h:12,hr:1,rbi:1,avg:".179",obp:".321",slg:".313",ops:".634",wrc:80,woba:".289",iso:".134",bbpct:"16.0%",kpct:"29.6%",babip:".262"}, vsR:{pa:155,r:19,h:37,hr:6,rbi:21,avg:".289",obp:".400",slg:".477",ops:".877",wrc:142,woba:".383",iso:".188",bbpct:"14.2%",kpct:"18.1%",babip:".323"}, risp:{pa:41,r:1,h:7,hr:1,rbi:14,avg:".250",obp:".439",slg:".393",ops:".832",wrc:128,woba:".362",iso:".143",bbpct:"22.0%",kpct:"19.5%",babip:".286"}, highLeverage:{pa:14,r:8,h:2,hr:0,rbi:1,avg:".222",obp:".500",slg:".222",ops:".722",wrc:140,woba:".379",iso:".000",bbpct:"28.6%",kpct:"14.3%",babip:".286"}, twoOuts:{pa:70,r:4,h:12,hr:1,rbi:5,avg:".218",obp:".386",slg:".382",ops:".768",wrc:117,woba:".346",iso:".164",bbpct:"20.0%",kpct:"20.0%",babip:".275"}}},
    { name:"Drake Baldwin", pos:"C", pa:314, avg:".254", obp:".341", slg:".438", ops:".779", hr:15, rbi:45, r:49, h:70, doubles:6, triples:0, sb:1, bbpct:"9.4%", kpct:"22.9%", war:1.6, war2:1.5, wrc:118, woba:".346", xwoba:".376", oaa:null, frv:-1, batSpeed:75.0, squaredUp:"25.2%", fastSwing:"53.0%", laSwSp:"38.2%", idealAttack:"46.7%", avgPop:1.92, armValue:null, armStrength:79.8, abs:{netOvr:0.6, netRuns:0.3, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.8%", xChalRate:"3.6%", rateVsExp:"-2.8%"}, absCatch:{netOvr:8.8, netRuns:0.3, chal:29, won:21, lost:8, wonPct:"72%", chalRate:"1.8%", xChalRate:"2.1%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:121,r:20,h:28,hr:7,rbi:16,avg:".262",obp:".347",slg:".477",ops:".824",wrc:127,woba:".360",iso:".215",bbpct:"9.1%",kpct:"22.3%",babip:".288"}, vsR:{pa:185,r:29,h:41,hr:8,rbi:29,avg:".253",obp:".341",slg:".426",ops:".766",wrc:111,woba:".337",iso:".173",bbpct:"9.7%",kpct:"23.8%",babip:".297"}, risp:{pa:74,r:1,h:19,hr:1,rbi:30,avg:".311",obp:".419",slg:".443",ops:".862",wrc:140,woba:".380",iso:".131",bbpct:"12.2%",kpct:"13.5%",babip:".353"}, highLeverage:{pa:19,r:14,h:5,hr:0,rbi:7,avg:".278",obp:".316",slg:".333",ops:".649",wrc:80,woba:".291",iso:".056",bbpct:"5.3%",kpct:"15.8%",babip:".333"}, twoOuts:{pa:88,r:15,h:21,hr:3,rbi:12,avg:".263",obp:".330",slg:".388",ops:".717",wrc:97,woba:".315",iso:".125",bbpct:"9.1%",kpct:"21.6%",babip:".310"}}},
    { name:"Matt Olson", pos:"1B", pa:411, avg:".268", obp:".341", slg:".538", ops:".879", hr:25, rbi:58, r:64, h:98, doubles:24, triples:0, sb:2, bbpct:"9.8%", kpct:"23.3%", war:3.2, war2:2.9, wrc:138, woba:".377", xwoba:".364", oaa:4, frv:4, batSpeed:75.0, squaredUp:"23.7%", fastSwing:"51.7%", laSwSp:"31.3%", idealAttack:"52.5%", armValue:null, armStrength:82.8, abs:{netOvr:0.8, netRuns:0.1, chal:8, won:2, lost:6, wonPct:"25%", chalRate:"3.8%", xChalRate:"3.0%", rateVsExp:"+0.8%"}, splits:{vsL:{pa:175,r:26,h:43,hr:9,rbi:22,avg:".272",obp:".337",slg:".506",ops:".843",wrc:129,woba:".363",iso:".234",bbpct:"8.6%",kpct:"22.9%",babip:".309"}, vsR:{pa:228,r:38,h:54,hr:16,rbi:36,avg:".269",obp:".346",slg:".577",ops:".924",wrc:145,woba:".387",iso:".308",bbpct:"11.0%",kpct:"23.7%",babip:".286"}, risp:{pa:101,r:3,h:16,hr:3,rbi:28,avg:".195",obp:".317",slg:".378",ops:".695",wrc:84,woba:".296",iso:".183",bbpct:"15.8%",kpct:"22.8%",babip:".220"}, highLeverage:{pa:37,r:19,h:8,hr:4,rbi:11,avg:".258",obp:".351",slg:".645",ops:".997",wrc:150,woba:".395",iso:".387",bbpct:"13.5%",kpct:"29.7%",babip:".235"}, twoOuts:{pa:147,r:29,h:34,hr:9,rbi:22,avg:".266",obp:".361",slg:".531",ops:".892",wrc:139,woba:".378",iso:".266",bbpct:"12.2%",kpct:"21.8%",babip:".287"}}},
    { name:"Ozzie Albies", pos:"2B", pa:405, avg:".267", obp:".319", slg:".438", ops:".757", hr:14, rbi:51, r:60, h:97, doubles:20, triples:0, sb:1, bbpct:"6.7%", kpct:"13.2%", war:2.0, war2:1.8, wrc:107, woba:".331", xwoba:".296", oaa:1, frv:-1, batSpeed:69.1, squaredUp:"27.9%", fastSwing:"5.5%", laSwSp:"34.3%", idealAttack:"57.9%", armValue:null, armStrength:70.8, abs:{netOvr:-0.3, netRuns:0.2, chal:6, won:3, lost:3, wonPct:"50%", chalRate:"5.2%", xChalRate:"5.6%", rateVsExp:"-0.5%"}, splits:{vsL:{pa:166,r:16,h:46,hr:6,rbi:22,avg:".295",obp:".313",slg:".487",ops:".800",wrc:112,woba:".339",iso:".192",bbpct:"2.4%",kpct:"6.0%",babip:".278"}, vsR:{pa:231,r:44,h:51,hr:8,rbi:29,avg:".255",obp:".329",slg:".415",ops:".744",wrc:104,woba:".325",iso:".160",bbpct:"10.0%",kpct:"17.7%",babip:".274"}, risp:{pa:94,r:3,h:25,hr:3,rbi:37,avg:".333",obp:".362",slg:".507",ops:".868",wrc:122,woba:".353",iso:".173",bbpct:"8.5%",kpct:"8.5%",babip:".297"}, highLeverage:{pa:36,r:19,h:8,hr:2,rbi:10,avg:".258",obp:".333",slg:".516",ops:".849",wrc:127,woba:".361",iso:".258",bbpct:"8.3%",kpct:"13.9%",babip:".240"}, twoOuts:{pa:131,r:23,h:30,hr:3,rbi:15,avg:".238",obp:".267",slg:".357",ops:".624",wrc:69,woba:".274",iso:".119",bbpct:"3.1%",kpct:"14.5%",babip:".260"}}},
    { name:"Michael Harris II", pos:"CF", pa:348, avg:".300", obp:".330", slg:".494", ops:".824", hr:16, rbi:53, r:45, h:99, doubles:16, triples:0, sb:6, bbpct:"4.4%", kpct:"20.6%", war:2.8, war2:2.5, wrc:128, woba:".361", xwoba:".372", oaa:6, frv:6, batSpeed:74.8, squaredUp:"24.2%", fastSwing:"48.9%", laSwSp:"30.3%", idealAttack:"45.8%", armValue:null, armStrength:85.4, abs:{netOvr:-1.0, netRuns:-0.5, chal:6, won:2, lost:4, wonPct:"33%", chalRate:"4.4%", xChalRate:"2.5%", rateVsExp:"+1.9%"}, splits:{vsL:{pa:126,r:13,h:33,hr:4,rbi:17,avg:".282",obp:".325",slg:".444",ops:".770",wrc:110,woba:".335",iso:".162",bbpct:"5.6%",kpct:"20.6%",babip:".330"}, vsR:{pa:214,r:32,h:65,hr:12,rbi:36,avg:".317",obp:".341",slg:".537",ops:".878",wrc:138,woba:".377",iso:".220",bbpct:"3.7%",kpct:"20.6%",babip:".353"}, risp:{pa:70,r:0,h:20,hr:0,rbi:27,avg:".317",obp:".357",slg:".429",ops:".786",wrc:115,woba:".342",iso:".111",bbpct:"5.7%",kpct:"14.3%",babip:".364"}, highLeverage:{pa:34,r:10,h:8,hr:1,rbi:12,avg:".276",obp:".324",slg:".517",ops:".841",wrc:120,woba:".349",iso:".241",bbpct:"5.9%",kpct:"23.5%",babip:".318"}, twoOuts:{pa:102,r:13,h:27,hr:4,rbi:16,avg:".287",obp:".343",slg:".457",ops:".801",wrc:120,woba:".350",iso:".170",bbpct:"7.8%",kpct:"18.6%",babip:".324"}}},
    { name:"Mauricio Dubón", pos:"LF/SS", pa:367, avg:".269", obp:".323", slg:".426", ops:".749", hr:10, rbi:51, r:42, h:91, doubles:19, triples:2, sb:2, bbpct:"6.9%", kpct:"14.4%", war:2.7, war2:2.2, wrc:107, woba:".330", xwoba:".321", oaa:8, frv:7, batSpeed:68.9, squaredUp:"27.7%", fastSwing:"2.9%", laSwSp:"36.4%", idealAttack:"38.1%", armValue:null, armStrength:89.9, abs:{netOvr:-3.7, netRuns:-1.0, chal:10, won:3, lost:7, wonPct:"30%", chalRate:"6.4%", xChalRate:"4.2%", rateVsExp:"+2.1%"}, splits:{vsL:{pa:135,r:13,h:31,hr:4,rbi:20,avg:".248",obp:".304",slg:".424",ops:".728",wrc:99,woba:".318",iso:".176",bbpct:"6.7%",kpct:"11.1%",babip:".255"}, vsR:{pa:224,r:28,h:59,hr:5,rbi:30,avg:".288",obp:".342",slg:".424",ops:".767",wrc:112,woba:".338",iso:".137",bbpct:"7.1%",kpct:"16.1%",babip:".329"}, risp:{pa:85,r:3,h:28,hr:3,rbi:43,avg:".359",obp:".398",slg:".577",ops:".975",wrc:166,woba:".419",iso:".218",bbpct:"5.9%",kpct:"10.6%",babip:".379"}, highLeverage:{pa:37,r:9,h:14,hr:1,rbi:22,avg:".412",obp:".459",slg:".647",ops:"1.107",wrc:203,woba:".474",iso:".235",bbpct:"8.1%",kpct:"8.1%",babip:".433"}, twoOuts:{pa:112,r:17,h:26,hr:2,rbi:25,avg:".252",obp:".313",slg:".388",ops:".701",wrc:93,woba:".310",iso:".136",bbpct:"8.0%",kpct:"11.6%",babip:".273"}}},
    { name:"Austin Riley", pos:"3B", pa:380, avg:".209", obp:".287", slg:".332", ops:".619", hr:9, rbi:42, r:37, h:70, doubles:13, triples:1, sb:6, bbpct:"8.2%", kpct:"29.5%", war:-0.1, war2:-0.2, wrc:71, woba:".277", xwoba:".292", oaa:-4, frv:-3, batSpeed:75.7, squaredUp:"19.8%", fastSwing:"57.2%", laSwSp:"30.7%", idealAttack:"47.7%", armValue:null, armStrength:83.8, abs:{netOvr:-0.3, netRuns:-0.1, chal:4, won:1, lost:3, wonPct:"25%", chalRate:"2.1%", xChalRate:"5.1%", rateVsExp:"-3.0%"}, splits:{vsL:{pa:125,r:11,h:24,hr:1,rbi:13,avg:".218",obp:".304",slg:".309",ops:".613",wrc:73,woba:".279",iso:".091",bbpct:"10.4%",kpct:"32.0%",babip:".329"}, vsR:{pa:248,r:26,h:45,hr:8,rbi:28,avg:".201",obp:".274",slg:".344",ops:".618",wrc:71,woba:".276",iso:".143",bbpct:"6.9%",kpct:"28.6%",babip:".253"}, risp:{pa:103,r:5,h:23,hr:5,rbi:37,avg:".245",obp:".291",slg:".468",ops:".759",wrc:103,woba:".324",iso:".223",bbpct:"5.8%",kpct:"32.0%",babip:".310"}, highLeverage:{pa:39,r:4,h:7,hr:1,rbi:14,avg:".200",obp:".231",slg:".314",ops:".545",wrc:43,woba:".235",iso:".114",bbpct:"5.1%",kpct:"23.1%",babip:".222"}, twoOuts:{pa:125,r:13,h:22,hr:3,rbi:16,avg:".191",obp:".256",slg:".322",ops:".578",wrc:59,woba:".259",iso:".130",bbpct:"6.4%",kpct:"32.0%",babip:".264"}}},
    { name:"Ha-Seong Kim", pos:"SS", pa:82, avg:".068", obp:".171", slg:".068", ops:".239", hr:0, rbi:3, r:4, h:5, doubles:0, triples:0, sb:1, bbpct:"11.0%", kpct:"26.8%", war:-0.9, war2:-1.1, wrc:-26, woba:".131", xwoba:".212", oaa:-2, frv:-3, batSpeed:71.9, squaredUp:"16.9%", fastSwing:"20.8%", laSwSp:"19.6%", idealAttack:"56.9%", armValue:null, armStrength:84.2, abs:{netOvr:0.2, netRuns:0.0, chal:2, won:2, lost:0, wonPct:"100%", chalRate:"2.6%", xChalRate:"6.0%", rateVsExp:"-3.4%"}, splits:{vsL:{pa:42,r:1,h:2,hr:0,rbi:2,avg:".053",obp:".143",slg:".053",ops:".195",wrc:-41,woba:".109",iso:".000",bbpct:"9.5%",kpct:"28.6%",babip:".077"}, vsR:{pa:40,r:3,h:3,hr:0,rbi:1,avg:".086",obp:".200",slg:".086",ops:".286",wrc:-11,woba:".154",iso:".000",bbpct:"12.5%",kpct:"25.0%",babip:".120"}, risp:{pa:19,r:0,h:3,hr:0,rbi:3,avg:".200",obp:".368",slg:".200",ops:".568",wrc:79,woba:".288",iso:".000",bbpct:"21.1%",kpct:"21.1%",babip:".273"}, highLeverage:{pa:9,r:3,h:2,hr:0,rbi:1,avg:".286",obp:".444",slg:".286",ops:".730",wrc:122,woba:".353",iso:".000",bbpct:"22.2%",kpct:"22.2%",babip:".400"}, twoOuts:{pa:34,r:1,h:2,hr:0,rbi:2,avg:".069",obp:".206",slg:".069",ops:".275",wrc:-10,woba:".155",iso:".000",bbpct:"14.7%",kpct:"26.5%",babip:".100"}}},
    { name:"Mike Yastrzemski", pos:"RF/DH", pa:262, avg:".230", obp:".321", slg:".365", ops:".686", hr:6, rbi:28, r:34, h:53, doubles:11, triples:1, sb:1, bbpct:"10.3%", kpct:"23.3%", war:0.9, war2:0.4, wrc:91, woba:".307", xwoba:".299", oaa:-1, frv:-1, batSpeed:71.2, squaredUp:"29.0%", fastSwing:"7.2%", laSwSp:"32.7%", idealAttack:"61.6%", armValue:null, armStrength:83.4, abs:{netOvr:2.3, netRuns:0.5, chal:3, won:1, lost:2, wonPct:"33%", chalRate:"1.7%", xChalRate:"3.3%", rateVsExp:"-1.6%"}, splits:{vsL:{pa:35,r:4,h:6,hr:0,rbi:1,avg:".200",obp:".314",slg:".233",ops:".548",wrc:63,woba:".265",iso:".033",bbpct:"8.6%",kpct:"37.1%",babip:".353"}, vsR:{pa:224,r:29,h:46,hr:6,rbi:27,avg:".234",obp:".321",slg:".381",ops:".702",wrc:95,woba:".313",iso:".147",bbpct:"10.7%",kpct:"21.0%",babip:".276"}, risp:{pa:62,r:1,h:15,hr:1,rbi:20,avg:".278",obp:".355",slg:".407",ops:".762",wrc:111,woba:".337",iso:".130",bbpct:"11.3%",kpct:"35.5%",babip:".438"}, highLeverage:{pa:24,r:7,h:7,hr:1,rbi:10,avg:".318",obp:".375",slg:".545",ops:".920",wrc:151,woba:".397",iso:".227",bbpct:"8.3%",kpct:"29.2%",babip:".429"}, twoOuts:{pa:75,r:13,h:10,hr:2,rbi:10,avg:".154",obp:".267",slg:".292",ops:".559",wrc:59,woba:".258",iso:".138",bbpct:"12.0%",kpct:"32.0%",babip:".205"}}},
    { name:"Dominic Smith", pos:"DH", pa:231, avg:".264", obp:".313", slg:".389", ops:".702", hr:6, rbi:35, r:31, h:55, doubles:6, triples:1, sb:0, bbpct:"6.5%", kpct:"13.9%", war:0.2, war2:-0.2, wrc:92, woba:".308", xwoba:".318", oaa:null, frv:0, batSpeed:68.9, squaredUp:"29.8%", fastSwing:"5.7%", laSwSp:"33.5%", idealAttack:"52.4%", armValue:null, armStrength:null, abs:{netOvr:-1.0, netRuns:-0.2, chal:5, won:2, lost:3, wonPct:"40%", chalRate:"5.2%", xChalRate:"4.6%", rateVsExp:"+0.6%"}, splits:{vsL:{pa:31,r:3,h:4,hr:0,rbi:2,avg:".154",obp:".267",slg:".192",ops:".459",wrc:36,woba:".224",iso:".038",bbpct:"12.9%",kpct:"9.7%",babip:".174"}, vsR:{pa:196,r:28,h:51,hr:6,rbi:33,avg:".285",obp:".321",slg:".425",ops:".746",wrc:101,woba:".321",iso:".140",bbpct:"5.6%",kpct:"14.8%",babip:".302"}, risp:{pa:64,r:3,h:16,hr:3,rbi:31,avg:".302",obp:".333",slg:".509",ops:".843",wrc:115,woba:".343",iso:".208",bbpct:"7.8%",kpct:"10.9%",babip:".271"}, highLeverage:{pa:30,r:7,h:4,hr:1,rbi:14,avg:".182",obp:".276",slg:".409",ops:".685",wrc:76,woba:".284",iso:".227",bbpct:"13.3%",kpct:"23.3%",babip:".176"}, twoOuts:{pa:73,r:10,h:20,hr:1,rbi:10,avg:".299",obp:".356",slg:".373",ops:".729",wrc:105,woba:".328",iso:".075",bbpct:"6.8%",kpct:"15.1%",babip:".345"}}},
    { name:"Jorge Mateo", pos:"SS", pa:134, avg:".238", obp:".284", slg:".373", ops:".657", hr:4, rbi:11, r:27, h:30, doubles:5, triples:0, sb:9, bbpct:"6.1%", kpct:"31.1%", war:0.7, war2:0.6, wrc:82, woba:".294", xwoba:".323", oaa:3, frv:3, batSpeed:73.7, squaredUp:"19.8%", fastSwing:"35.2%", laSwSp:"44.6%", idealAttack:"41.9%", armValue:null, armStrength:89.2, abs:{netOvr:-3.5, netRuns:-0.6, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"8.6%", xChalRate:"4.6%", rateVsExp:"+4.0%"}, splits:{vsL:{pa:50,r:10,h:12,hr:2,rbi:3,avg:".250",obp:".280",slg:".396",ops:".676",wrc:83,woba:".295",iso:".146",bbpct:"4.0%",kpct:"36.0%",babip:".357"}, vsR:{pa:82,r:17,h:18,hr:2,rbi:8,avg:".237",obp:".293",slg:".368",ops:".661",wrc:82,woba:".293",iso:".132",bbpct:"7.3%",kpct:"28.0%",babip:".314"}, risp:{pa:31,r:0,h:7,hr:0,rbi:6,avg:".250",obp:".323",slg:".250",ops:".573",wrc:66,woba:".269",iso:".000",bbpct:"9.7%",kpct:"32.3%",babip:".389"}, highLeverage:{pa:14,r:8,h:2,hr:0,rbi:1,avg:".182",obp:".357",slg:".182",ops:".539",wrc:71,woba:".277",iso:".000",bbpct:"21.4%",kpct:"21.4%",babip:".250"}, twoOuts:{pa:43,r:11,h:8,hr:1,rbi:5,avg:".200",obp:".256",slg:".300",ops:".556",wrc:53,woba:".250",iso:".100",bbpct:"7.0%",kpct:"27.9%",babip:".259"}}},
    { name:"Eli White", pos:"OF", pa:122, avg:".221", obp:".270", slg:".389", ops:".660", hr:4, rbi:15, r:15, h:25, doubles:5, triples:1, sb:4, bbpct:"5.9%", kpct:"21.8%", war:1.1, war2:0.3, wrc:76, woba:".284", xwoba:".280", oaa:2, frv:3, batSpeed:73.1, squaredUp:"21.1%", fastSwing:"31.0%", laSwSp:"32.9%", idealAttack:"53.3%", armValue:null, armStrength:89.5, abs:{netOvr:-0.9, netRuns:0.4, chal:2, won:1, lost:1, wonPct:"50%", chalRate:"3.8%", xChalRate:"5.1%", rateVsExp:"-1.3%"}, splits:{vsL:{pa:73,r:7,h:16,hr:3,rbi:10,avg:".246",obp:".315",slg:".446",ops:".761",wrc:107,woba:".330",iso:".200",bbpct:"8.2%",kpct:"23.3%",babip:".283"}, vsR:{pa:46,r:8,h:8,hr:1,rbi:5,avg:".178",obp:".196",slg:".289",ops:".485",wrc:27,woba:".211",iso:".111",bbpct:"2.2%",kpct:"19.6%",babip:".200"}, risp:{pa:34,r:1,h:7,hr:1,rbi:11,avg:".241",obp:".324",slg:".379",ops:".703",wrc:94,woba:".310",iso:".138",bbpct:"11.8%",kpct:"17.6%",babip:".261"}, highLeverage:{pa:18,r:4,h:2,hr:0,rbi:4,avg:".125",obp:".222",slg:".125",ops:".347",wrc:4,woba:".177",iso:".000",bbpct:"11.1%",kpct:"16.7%",babip:".154"}, twoOuts:{pa:34,r:6,h:7,hr:2,rbi:4,avg:".226",obp:".294",slg:".452",ops:".746",wrc:102,woba:".324",iso:".226",bbpct:"8.8%",kpct:"17.6%",babip:".217"}}},
    { name:"Sandy León", pos:"C", pa:44, avg:".091", obp:".091", slg:".091", ops:".182", hr:0, rbi:0, r:0, h:4, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"40.9%", war:-0.6, war2:-0.5, wrc:-60, woba:".081", xwoba:".132", oaa:null, frv:1, batSpeed:67.0, squaredUp:"19.3%", fastSwing:"2.3%", laSwSp:"23.1%", idealAttack:"51.1%", armValue:null, armStrength:75.7, absCatch:{netOvr:6.9, netRuns:0.5, chal:21, won:16, lost:5, wonPct:"76%", chalRate:"2.7%", xChalRate:"2.1%", rateVsExp:"+0.7%"}, splits:{vsL:{pa:20,r:0,h:2,hr:0,rbi:0,avg:".100",obp:".100",slg:".100",ops:".200",wrc:-54,woba:".089",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".167"}, vsR:{pa:24,r:0,h:2,hr:0,rbi:0,avg:".083",obp:".083",slg:".083",ops:".167",wrc:-64,woba:".074",iso:".000",bbpct:"0.0%",kpct:"41.7%",babip:".143"}, risp:{pa:8,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"62.5%",babip:".000"}, highLeverage:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}, twoOuts:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".182",ops:".364",wrc:-5,woba:".162",iso:".000",bbpct:"0.0%",kpct:"45.5%",babip:".333"}}},
    { name:"Chadwick Tromp", pos:"C", pa:27, avg:".200", obp:".192", slg:".240", ops:".432", hr:0, rbi:3, r:1, h:5, doubles:1, triples:0, sb:0, bbpct:"0.0%", kpct:"25.9%", war:-0.2, war2:-0.2, wrc:10, woba:".186", xwoba:".178", oaa:null, frv:0, batSpeed:70.5, squaredUp:"20.9%", fastSwing:"11.4%", laSwSp:"35.0%", idealAttack:"51.2%", avgPop:1.94, armValue:null, armStrength:78.9, absCatch:{netOvr:-2.0, netRuns:-0.7, chal:5, won:1, lost:4, wonPct:"20%", chalRate:"1.6%", xChalRate:"1.9%", rateVsExp:"-0.3%"}, splits:{vsL:{pa:11,r:0,h:2,hr:0,rbi:0,avg:".182",obp:".182",slg:".273",ops:".455",wrc:17,woba:".195",iso:".091",bbpct:"0.0%",kpct:"36.4%",babip:".286"}, vsR:{pa:16,r:1,h:3,hr:0,rbi:3,avg:".214",obp:".200",slg:".214",ops:".414",wrc:5,woba:".178",iso:".000",bbpct:"0.0%",kpct:"18.8%",babip:".250"}, risp:{pa:10,r:0,h:2,hr:0,rbi:3,avg:".250",obp:".222",slg:".250",ops:".472",wrc:19,woba:".198",iso:".000",bbpct:"0.0%",kpct:"50.0%",babip:".500"}, highLeverage:{pa:4,r:1,h:2,hr:0,rbi:2,avg:".500",obp:".500",slg:".500",ops:"1.000",wrc:184,woba:".445",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".667"}, twoOuts:{pa:9,r:0,h:3,hr:0,rbi:1,avg:".333",obp:".333",slg:".444",ops:".778",wrc:112,woba:".338",iso:".111",bbpct:"0.0%",kpct:"22.2%",babip:".429"}}},
    { name:"Sean Murphy", pos:"C", pa:14, avg:".071", obp:".071", slg:".071", ops:".143", hr:0, rbi:0, r:1, h:1, doubles:0, triples:0, sb:0, bbpct:"0.0%", kpct:"42.9%", war:-0.3, war2:-0.2, wrc:-72, woba:".064", xwoba:".133", oaa:null, frv:-1, batSpeed:67.4, squaredUp:"18.2%", fastSwing:"9.1%", laSwSp:"12.5%", idealAttack:"45.5%", avgPop:1.94, armValue:null, armStrength:null, absCatch:{netOvr:2.0, netRuns:-0.1, chal:8, won:5, lost:3, wonPct:"63%", chalRate:"4.8%", xChalRate:"3.5%", rateVsExp:"+1.3%"}, splits:{vsL:{pa:5,r:0,h:0,hr:0,rbi:1,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}, vsR:{pa:9,r:1,h:1,hr:0,rbi:0,avg:".111",obp:".111",slg:".111",ops:".222",wrc:-47,woba:".099",iso:".000",bbpct:"0.0%",kpct:"44.4%",babip:".200"}, risp:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, highLeverage:{pa:1,r:0,h:1,hr:0,rbi:1,avg:"1.000",obp:"1.000",slg:"1.000",ops:"2.000",wrc:481,woba:".890",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:"1.000"}, twoOuts:{pa:5,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"40.0%",babip:".000"}}},
    { name:"Joey Bart", pos:"C", pa:96, avg:".216", obp:".271", slg:".375", ops:".646", hr:4, rbi:12, r:12, h:19, doubles:2, triples:0, sb:0, bbpct:"3.3%", kpct:"27.2%", war:0.2, war2:0.1, wrc:86, woba:".300", xwoba:".285", oaa:null, frv:0, batSpeed:75.5, squaredUp:"19.6%", fastSwing:"54.9%", laSwSp:"35.0%", idealAttack:"32.0%", avgPop:1.93, armValue:null, armStrength:84.1, absCatch:{netOvr:1.4, netRuns:0.1, chal:1, won:1, lost:0, wonPct:"100%", chalRate:"0.5%", xChalRate:"2.1%", rateVsExp:"-1.6%"}, splits:{vsL:{pa:16,r:1,h:2,hr:1,rbi:3,avg:".143",obp:".250",slg:".357",ops:".607",wrc:70,woba:".275",iso:".214",bbpct:"0.0%",kpct:"12.5%",babip:".091"}, vsR:{pa:13,r:2,h:2,hr:1,rbi:3,avg:".182",obp:".308",slg:".545",ops:".853",wrc:129,woba:".364",iso:".364",bbpct:"7.7%",kpct:"7.7%",babip:".111"}, risp:{pa:8,r:1,h:1,hr:1,rbi:3,avg:".143",obp:".250",slg:".571",ops:".821",wrc:115,woba:".343",iso:".429",bbpct:"12.5%",kpct:"25.0%",babip:".000"}, highLeverage:{pa:4,r:1,h:1,hr:1,rbi:2,avg:".333",obp:".500",slg:"1.333",ops:"1.833",wrc:344,woba:".685",iso:"1.000",bbpct:"25.0%",kpct:"0.0%",babip:".000"}, twoOuts:{pa:16,r:2,h:3,hr:2,rbi:4,avg:".214",obp:".313",slg:".643",ops:".955",wrc:155,woba:".402",iso:".429",bbpct:"0.0%",kpct:"12.5%",babip:".100"}}},
    { name:"Rowdy Tellez", pos:"DH", pa:11, avg:".200", obp:".273", slg:".500", ops:".773", hr:1, rbi:4, r:2, h:2, doubles:0, triples:0, sb:0, bbpct:"9.1%", kpct:"27.3%", war:0.0, war2:0.0, wrc:108, woba:".331", xwoba:".506", oaa:null, frv:null, batSpeed:76.4, squaredUp:"14.3%", fastSwing:"52.4%", laSwSp:"57.1%", idealAttack:"66.7%", armValue:null, armStrength:null, splits:{vsL:{pa:2,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, vsR:{pa:9,r:1,h:2,hr:1,rbi:4,avg:".250",obp:".333",slg:".625",ops:".958",wrc:156,woba:".404",iso:".375",bbpct:"11.1%",kpct:"33.3%",babip:".250"}, risp:{pa:6,r:0,h:1,hr:0,rbi:2,avg:".200",obp:".333",slg:".200",ops:".533",wrc:63,woba:".265",iso:".000",bbpct:"16.7%",kpct:"33.3%",babip:".333"}, highLeverage:{pa:4,r:0,h:1,hr:0,rbi:2,avg:".333",obp:".500",slg:".333",ops:".833",wrc:152,woba:".397",iso:".000",bbpct:"25.0%",kpct:"25.0%",babip:".500"}, twoOuts:{pa:5,r:1,h:0,hr:0,rbi:1,avg:".000",obp:".200",slg:".000",ops:".200",wrc:-20,woba:".140",iso:".000",bbpct:"20.0%",kpct:"20.0%",babip:".000"}}},
    { name:"Jim Jarvis", pos:"SS", pa:28, avg:".296", obp:".321", slg:".444", ops:".766", hr:1, rbi:3, r:1, h:8, doubles:1, triples:0, sb:0, bbpct:"3.7%", kpct:"18.5%", war:0.4, war2:0.1, wrc:117, woba:.346, xwoba:.200, oaa:-1, frv:0, batSpeed:70.9, squaredUp:"11.3%", fastSwing:"13.2%", laSwSp:"31.6%", idealAttack:"44.8%", armValue:null, armStrength:null, splits:{vsL:{pa:3,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"33.3%",babip:".000"}, vsR:{pa:22,r:1,h:7,hr:1,rbi:3,avg:".333",obp:".364",slg:".524",ops:".887",wrc:143,woba:".384",iso:".190",bbpct:"4.5%",kpct:"18.2%",babip:".375"}, risp:{pa:4,r:0,h:1,hr:0,rbi:1,avg:".250",obp:".250",slg:".250",ops:".500",wrc:35,woba:".223",iso:".000",bbpct:"0.0%",kpct:"25.0%",babip:".333"}, highLeverage:{pa:1,r:0,h:0,hr:0,rbi:0,avg:".000",obp:".000",slg:".000",ops:".000",wrc:-100,woba:".000",iso:".000",bbpct:"0.0%",kpct:"0.0%",babip:".000"}, twoOuts:{pa:10,r:0,h:4,hr:0,rbi:1,avg:".444",obp:".500",slg:".556",ops:"1.056",wrc:196,woba:".463",iso:".111",bbpct:"10.0%",kpct:"30.0%",babip:".667"}}},
  ];

export const starters = [
    // Updated July 10, 2026 (evening) — vsL and vsR splits refreshed for all starters from FanGraphs splits screenshots
    // All top-level fields, bat tracking, plate discipline preserved from prior update
    // Hidden pitchers (Strider, Martín Pérez) split data included per screenshots; non-roster pitchers not added
    { name:"Chris Sale", wl:"9-6", era:"2.20", ip:"98.0", kpct:"29.0%", bbpct:"6.2%", whip:"1.113", war:3.0, war2:2.6, fip:"2.81", xfip:"3.10", siera:"3.15", batSpeed:70.9, fastSwing:"20.5%", swstr:"13.4%", cstr:"17.5%", csw:"30.8%", laSwSp:"35.6%", idealAttack:"45.6%", splits:{vsL:{ip:"24.0",era:"1.50",fip:"1.86",xfip:"1.83",whip:"1.00",avg:".220",obp:".276",slg:".297",woba:".259",kpct:"32.3%",bbpct:"4.0%",kbb:"28.3%"}, vsR:{ip:"71.0",era:"2.54",fip:"3.24",xfip:"3.53",whip:"1.15",avg:".234",obp:".300",slg:".336",woba:".286",kpct:"27.3%",bbpct:"6.8%",kbb:"20.5%"}}},
    { name:"Spencer Strider", wl:"4-2", era:"5.31", ip:"39.0", kpct:"27.9%", bbpct:"12.1%", whip:"1.359", war:-0.1, war2:0.1, fip:"5.37", xfip:"4.38", siera:"4.18", batSpeed:72.3, fastSwing:"25.1%", swstr:"12.2%", cstr:"15.2%", csw:"27.4%", laSwSp:"35.7%", idealAttack:"44.6%", splits:{vsL:{ip:"25.1",era:"4.62",fip:"5.56",xfip:"4.65",whip:"1.26",avg:".207",obp:".308",slg:".489",woba:".342",kpct:"27.1%",bbpct:"12.1%",kbb:"15.0%"}, vsR:{ip:"13.2",era:"6.59",fip:"5.02",xfip:"3.95",whip:"1.54",avg:".280",obp:".362",slg:".520",woba:".378",kpct:"29.3%",bbpct:"12.1%",kbb:"17.2%"}}},
    { name:"Reynaldo López", wl:"4-2", era:"3.50", ip:"61.2", sv:0, kpct:"21.3%", bbpct:"10.0%", whip:"1.265", fip:"4.30", war:0.6, war2:0.5, xfip:"4.52", siera:"4.42", batSpeed:71.6, fastSwing:"24.0%", swstr:"9.2%", cstr:"16.9%", csw:"26.1%", laSwSp:"38.9%", idealAttack:"44.2%", splits:{vsL:{ip:"30.2",era:"3.52",fip:"4.68",xfip:"5.10",whip:"1.53",avg:".212",obp:".346",slg:".363",woba:".323",kpct:"21.9%",bbpct:"16.8%",kbb:"5.1%"}, vsR:{ip:"26.0",era:"2.77",fip:"3.73",xfip:"3.84",whip:"0.96",avg:".242",obp:".255",slg:".404",woba:".283",kpct:"20.6%",bbpct:"1.0%",kbb:"19.6%"}}},
    { name:"Martín Pérez", wl:"6-6", era:"3.54", ip:"81.1", kpct:"18.6%", bbpct:"9.6%", whip:"1.193", fip:"4.44", war:1.4, war2:0.6, xfip:"4.23", siera:"4.60", batSpeed:73.3, fastSwing:"34.1%", swstr:"8.8%", cstr:"18.6%", csw:"27.5%", laSwSp:"35.4%", idealAttack:"51.0%", splits:{vsL:{ip:"24.0",era:"4.50",fip:"4.53",xfip:"3.57",whip:"1.17",avg:".242",obp:".303",slg:".440",woba:".324",kpct:"21.2%",bbpct:"6.1%",kbb:"15.2%"}, vsR:{ip:"57.1",era:"3.14",fip:"4.40",xfip:"4.51",whip:"1.20",avg:".212",obp:".296",slg:".365",woba:".291",kpct:"17.5%",bbpct:"11.1%",kbb:"6.4%"}}},
    { name:"Bryce Elder", wl:"5-6", era:"4.12", ip:"102.2", kpct:"19.8%", bbpct:"7.4%", whip:"1.247", fip:"4.33", war:0.7, war2:1.1, xfip:"4.14", siera:"4.33", batSpeed:72.4, fastSwing:"27.1%", swstr:"9.2%", cstr:"16.5%", csw:"25.7%", laSwSp:"32.5%", idealAttack:"50.2%", splits:{vsL:{ip:"68.1",era:"3.82",fip:"4.27",xfip:"4.41",whip:"1.11",avg:".212",obp:".278",slg:".364",woba:".283",kpct:"19.7%",bbpct:"8.2%",kbb:"11.5%"}, vsR:{ip:"34.1",era:"4.72",fip:"4.45",xfip:"3.61",whip:"1.51",avg:".297",obp:".342",slg:".455",woba:".349",kpct:"19.9%",bbpct:"5.8%",kbb:"14.1%"}}},
    { name:"Grant Holmes", wl:"5-4", era:"3.61", ip:"87.1", kpct:"20.2%", bbpct:"10.4%", whip:"1.317", fip:"5.05", war:1.3, war2:0.2, xfip:"4.62", siera:"4.66", batSpeed:72.6, fastSwing:"28.5%", swstr:"11.8%", cstr:"14.6%", csw:"26.4%", laSwSp:"34.1%", idealAttack:"49.2%", splits:{vsL:{ip:"50.2",era:"3.38",fip:"5.17",xfip:"4.61",whip:"1.32",avg:".226",obp:".313",slg:".405",woba:".317",kpct:"20.3%",bbpct:"11.1%",kbb:"9.2%"}, vsR:{ip:"36.2",era:"3.93",fip:"4.89",xfip:"4.63",whip:"1.31",avg:".234",obp:".314",slg:".397",woba:".315",kpct:"20.1%",bbpct:"9.4%",kbb:"10.7%"}}},
    { name:"JR Ritchie", wl:"1-2", era:"4.60", ip:"45.0", kpct:"21.0%", bbpct:"14.0%", whip:"1.467", fip:"5.40", war:0.0, war2:-0.1, xfip:"4.91", siera:"4.97", batSpeed:72.3, fastSwing:"27.4%", swstr:"8.7%", cstr:"16.3%", csw:"25.0%", laSwSp:"32.5%", idealAttack:"53.6%", splits:{vsL:{ip:"27.0",era:"6.00",fip:"6.34",xfip:"5.14",whip:"1.59",avg:".250",obp:".376",slg:".471",woba:".371",kpct:"21.6%",bbpct:"13.6%",kbb:"8.0%"}, vsR:{ip:"18.0",era:"2.50",fip:"4.00",xfip:"4.55",whip:"1.28",avg:".190",obp:".307",slg:".254",woba:".265",kpct:"20.0%",bbpct:"14.7%",kbb:"5.3%"}}},
    { name:"Hurston Waldrep", wl:"0-1", era:"8.44", ip:"10.2", kpct:"16.1%", bbpct:"17.9%", whip:"2.156", war:-0.4, war2:-0.3, fip:"8.46", xfip:"5.95", siera:"5.67", batSpeed:74.0, fastSwing:"46.8%", swstr:"8.8%", cstr:"15.8%", csw:"24.7%", laSwSp:"20.0%", idealAttack:"58.8%", splits:{vsL:{ip:"6.1",era:"9.95",fip:"8.48",xfip:"5.82",whip:"1.74",avg:".240",obp:".387",slg:".480",woba:".383",kpct:"16.1%",bbpct:"16.1%",kbb:"0.0%"}, vsR:{ip:"4.1",era:"6.23",fip:"8.42",xfip:"6.13",whip:"2.77",avg:".368",obp:".520",slg:".526",woba:".464",kpct:"16.0%",bbpct:"20.0%",kbb:"-4.0%"}}},
  ];

  export const bullpen = [
    // Updated July 10, 2026 (evening) — vsL and vsR splits refreshed for all bullpen from FanGraphs splits screenshots
    // All top-level fields, bat tracking, plate discipline preserved from prior update
    // Hidden pitchers (Robert Suarez, Carlos Carrasco, Ian Hamilton) split data included per screenshots
    // Danny Young splits now populated (previously null) — both vsL and vsR from screenshots
    { name:"Raisel Iglesias", role:"CL", era:"2.30", ip:"31.1", sv:18, kpct:"28.2%", bbpct:"5.6%", whip:"1.117", fip:"2.38", war:0.9, war2:0.9, xfip:"3.16", siera:"2.87", batSpeed:71.2, fastSwing:"24.1%", swstr:"14.1%", cstr:"17.6%", csw:"31.7%", laSwSp:"28.0%", idealAttack:"49.8%", splits:{vsL:{ip:"19.0",era:"2.37",fip:"3.90",xfip:"4.63",whip:"1.00",avg:".212",obp:".268",slg:".348",woba:".273",kpct:"18.3%",bbpct:"7.0%",kbb:"11.3%"}, vsR:{ip:"12.1",era:"2.19",fip:"0.03",xfip:"0.90",whip:"1.30",avg:".275",obp:".302",slg:".314",woba:".276",kpct:"41.5%",bbpct:"3.8%",kbb:"37.7%"}}},
    { name:"Dylan Lee", role:"RP", era:"1.52", ip:"41.1", sv:0, kpct:"33.8%", bbpct:"4.6%", whip:"0.677", fip:"1.47", war:1.7, war2:1.6, xfip:"2.71", siera:"2.26", batSpeed:72.4, fastSwing:"27.1%", swstr:"19.9%", cstr:"14.6%", csw:"34.5%", laSwSp:"34.4%", idealAttack:"50.0%", splits:{vsL:{ip:"15.1",era:"2.35",fip:"1.16",xfip:"2.45",whip:"0.72",avg:".137",obp:".196",slg:".275",woba:".205",kpct:"36.8%",bbpct:"7.0%",kbb:"29.8%"}, vsR:{ip:"26.0",era:"1.04",fip:"1.65",xfip:"2.86",whip:"0.65",avg:".154",obp:".181",slg:".209",woba:".175",kpct:"31.9%",bbpct:"3.2%",kbb:"28.7%"}}},
    { name:"Robert Suarez", role:"RP", era:"0.56", ip:"32.0", sv:4, kpct:"21.5%", bbpct:"5.0%", whip:"0.844", fip:"2.46", war:1.7, war2:0.8, xfip:"3.44", siera:"3.39", batSpeed:71.3, fastSwing:"22.5%", swstr:"12.2%", cstr:"12.4%", csw:"24.6%", laSwSp:"33.0%", idealAttack:"52.9%", splits:{vsL:{ip:"18.2",era:"0.48",fip:"2.79",xfip:"3.73",whip:"0.64",avg:".143",obp:".182",slg:".190",woba:".171",kpct:"20.9%",bbpct:"4.5%",kbb:"16.4%"}, vsR:{ip:"13.1",era:"0.68",fip:"1.99",xfip:"3.02",whip:"1.13",avg:".235",obp:".278",slg:".255",woba:".244",kpct:"22.2%",bbpct:"5.6%",kbb:"16.7%"}}},
    { name:"Didier Fuentes", role:"RP", era:"2.70", ip:"36.2", sv:1, kpct:"27.5%", bbpct:"7.8%", whip:"1.150", fip:"2.27", war:1.0, war2:1.1, xfip:"3.32", siera:"3.10", batSpeed:72.0, fastSwing:"24.9%", swstr:"12.5%", cstr:"14.7%", csw:"27.2%", laSwSp:"29.0%", idealAttack:"41.8%", splits:{vsL:{ip:"19.1",era:"3.26",fip:"2.03",xfip:"2.70",whip:"1.19",avg:".247",obp:".296",slg:".342",woba:".283",kpct:"32.1%",bbpct:"6.2%",kbb:"25.9%"}, vsR:{ip:"16.1",era:"1.65",fip:"2.56",xfip:"4.06",whip:"1.10",avg:".207",obp:".288",slg:".241",woba:".248",kpct:"22.7%",bbpct:"9.1%",kbb:"13.6%"}}},
    { name:"Dylan Dodd", role:"RP", era:"2.08", ip:"26.0", sv:1, kpct:"27.8%", bbpct:"8.2%", whip:"0.769", fip:"3.46", war:0.7, war2:0.3, xfip:"3.72", siera:"3.31", batSpeed:73.2, fastSwing:"34.5%", swstr:"12.5%", cstr:"12.0%", csw:"24.4%", laSwSp:"35.5%", idealAttack:"55.2%", splits:{vsL:{ip:"11.0",era:"2.45",fip:"4.30",xfip:"3.74",whip:"1.00",avg:".154",obp:".250",slg:".333",woba:".251",kpct:"31.8%",bbpct:"11.4%",kbb:"20.5%"}, vsR:{ip:"15.0",era:"1.80",fip:"2.85",xfip:"3.71",whip:"0.60",avg:".122",obp:".173",slg:".224",woba:".179",kpct:"24.5%",bbpct:"5.7%",kbb:"18.9%"}}},
    { name:"Tyler Kinley", role:"RP", era:"3.51", ip:"33.1", sv:0, kpct:"25.0%", bbpct:"9.6%", whip:"1.206", fip:"4.69", war:0.4, war2:0.0, xfip:"4.26", siera:"3.75", batSpeed:70.6, fastSwing:"15.9%", swstr:"12.2%", cstr:"17.8%", csw:"30.0%", laSwSp:"31.0%", idealAttack:"55.9%", splits:{vsL:{ip:"18.1",era:"6.38",fip:"6.33",xfip:"3.99",whip:"1.09",avg:".200",obp:".278",slg:".508",woba:".330",kpct:"27.8%",bbpct:"9.7%",kbb:"18.1%"}, vsR:{ip:"14.0",era:"0.00",fip:"2.54",xfip:"4.62",whip:"1.36",avg:".255",obp:".328",slg:".291",woba:".286",kpct:"21.3%",bbpct:"8.2%",kbb:"13.1%"}}},
    { name:"James Karinchak", role:"RP", era:"1.86", ip:"9.2", sv:0, kpct:"21.6%", bbpct:"13.5%", whip:"0.931", fip:"4.36", war:0.3, war2:0.0, xfip:"5.38", siera:"4.93", batSpeed:71.9, fastSwing:"25.5%", swstr:"8.6%", cstr:"19.8%", csw:"28.4%", laSwSp:"20.8%", idealAttack:"60.6", splits:{vsL:{ip:"3.1",era:"2.70",fip:"7.01",xfip:"5.41",whip:"1.50",avg:".250",obp:".357",slg:".583",woba:".399",kpct:"21.4%",bbpct:"14.3%",kbb:"7.1%"}, vsR:{ip:"6.1",era:"1.42",fip:"2.96",xfip:"5.37",whip:"0.63",avg:".053",obp:".174",slg:".053",woba:".130",kpct:"21.7%",bbpct:"13.0%",kbb:"8.7%"}}},
    { name:"Danny Young", role:"RP", era:"2.70", ip:"3.1", sv:0, kpct:"25.0%", bbpct:"8.3%", whip:"0.857", fip:"2.69", war:0.1, war2:0.1, xfip:"2.69", siera:"1.84", batSpeed:73.3, fastSwing:"35.0%", swstr:"6.3%", cstr:"28.1%", csw:"34.4%", laSwSp:"0.0%", idealAttack:null, splits:{vsL:{ip:"1.0",era:"0.00",fip:"4.11",xfip:"4.11",whip:"2.00",avg:".333",obp:".500",slg:".333",woba:".397",kpct:"25.0%",bbpct:"25.0%",kbb:"0.0%"}, vsR:{ip:"1.1",era:"0.00",fip:"1.61",xfip:"1.61",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"25.0%",bbpct:"0.0%",kbb:"25.0%"}}},
    { name:"Víctor Mederos", role:"RP", era:"0.00", ip:"5.0", sv:0, kpct:"31.3%", bbpct:"6.3%", whip:"0.400", fip:"1.71", war:0.2, war2:0.1, xfip:"3.24", siera:"1.84", batSpeed:72.6, fastSwing:"25.8%", swstr:"6.3%", cstr:"28.1%", csw:"34.4%", laSwSp:"0.0%", idealAttack:null, splits:{vsL:{ip:"1.0",era:"0.00",fip:"4.11",xfip:"4.11",whip:"2.00",avg:".333",obp:".500",slg:".333",woba:".397",kpct:"25.0%",bbpct:"25.0%",kbb:"0.0%"}, vsR:{ip:"1.1",era:"0.00",fip:"1.61",xfip:"1.61",whip:"0.00",avg:".000",obp:".000",slg:".000",woba:".000",kpct:"25.0%",bbpct:"0.0%",kbb:"25.0%"}}},
    { name:"Carlos Carrasco", role:"RP", era:"5.94", ip:"16.2", sv:0, kpct:"9.6%", bbpct:"4.1%", whip:"1.440", fip:"5.51", war:-0.2, war2:-0.2, xfip:"4.73", siera:"4.77", batSpeed:72.4, fastSwing:"32.2%", swstr:"9.3%", cstr:"12.6%", csw:"22.0%", laSwSp:"47.5%", idealAttack:"57.4", splits:{vsL:{ip:"10.1",era:"6.10",fip:"4.66",xfip:"4.88",whip:"1.45",avg:".317",obp:".364",slg:".415",woba:".346",kpct:"6.7%",bbpct:"4.4%",kbb:"2.2%"}, vsR:{ip:"6.1",era:"5.68",fip:"6.90",xfip:"4.49",whip:"1.42",avg:".320",obp:".370",slg:".600",woba:".416",kpct:"14.3%",bbpct:"3.6%",kbb:"10.7%"}}},
    { name:"Ian Hamilton", role:"RP", era:"7.71", ip:"4.2", sv:0, kpct:"17.4%", bbpct:"13.0%", whip:"1.929", fip:"3.33", war:-0.1, war2:0.0, xfip:"3.98", siera:"3.97", batSpeed:72.6, fastSwing:"29.4%", swstr:"12.0%", cstr:"19.6%", csw:"31.5%", laSwSp:"31.3%", idealAttack:"31.8%", splits:{vsL:{ip:"1.2",era:"10.80",fip:"3.71",xfip:"4.63",whip:"3.00",avg:".444",obp:".500",slg:".667",woba:".500",kpct:"10.0%",bbpct:"10.0%",kbb:"0.0%"}, vsR:{ip:"3.0",era:"6.00",fip:"3.11",xfip:"3.62",whip:"1.33",avg:".182",obp:".308",slg:".182",woba:".245",kpct:"23.1%",bbpct:"15.4%",kbb:"7.7%"}}},
  ];
   
   export const standings = [
     { team:"ATL", full:"Atlanta Braves",       w:55,l:40,pct:".579",gb:"—", home:"27-18",away:"28-22", rs:460, ra:368, diff:+94, strk:"W1", l10:"5-5", highlight:true,  srs:0.9 },
     { team:"PHI", full:"Philadelphia Phillies", w:54,l:43,pct:".557",gb:"2.0", home:"25-21",away:"29-22", rs:424, ra:434, diff:-10, strk:"W2", l10:"5-5", highlight:false, srs:-0.1 },
     { team:"MIA", full:"Miami Marlins",        w:52,l:45,pct:".536",gb:"4.0", home:"31-20",away:"21-25", rs:439, ra:415, diff:+24, strk:"L3", l10:"6-4", highlight:false, srs:0.3 },
     { team:"WSN", full:"Washington Nationals", w:48,l:49,pct:".495",gb:"8.0", home:"20-31",away:"28-18", rs:516, ra:509, diff:+7, strk:"L3", l10:"4-6", highlight:false, srs:0.2 },
     { team:"NYM", full:"New York Mets",        w:40,l:57,pct:".412",gb:"16.0", home:"21-28",away:"19-29", rs:398, ra:463, diff:-65, strk:"L3", l10:"4-6", highlight:false, srs:-0.7 },
   ];
   
export const statcastHitters = [
  // Updated July 13, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU% refreshed from Baseball Savant
  // pullAir held (separate leaderboard); Acuña, León, Tromp, Murphy, Kim, Tellez hidden — all fields held; Jim Jarvis pullAir held from prior; Brewer Hicklen appeared on leaderboard but non-roster — not added; Kyle Farmer non-roster — not added
  { name:"Michael Harris II", ev:"91.7",hardHit:"51.0%",xwoba:".363",xba:".299",xslg:".512",barrel:"13.0%",chase:"44.8%",whiff:"26.3%",kpct:"20.7%",bbpct:"4.2%", gbpct:"44.1%",fbpct:"24.3%",ldpct:"25.9%",pupct:"5.7%",pullAir:"17.3%"},
  { name:"Matt Olson", ev:"92.9",hardHit:"51.6%",xwoba:".358",xba:".252",xslg:".512",barrel:"13.9%",chase:"27.1%",whiff:"24.2%",kpct:"23.8%",bbpct:"9.6%", gbpct:"36.7%",fbpct:"34.2%",ldpct:"21.1%",pupct:"8.0%",pullAir:"20.9%"},
  { name:"Dominic Smith", ev:"87.8",hardHit:"35.5%",xwoba:".314",xba:".258",xslg:".399",barrel:"6.1%",chase:"32.1%",whiff:"20.0%",kpct:"13.7%",bbpct:"6.9%", gbpct:"39.9%",fbpct:"29.5%",ldpct:"25.1%",pupct:"5.5%",pullAir:"16.8%"},
  { name:"Drake Baldwin", ev:"91.4",hardHit:"51.2%",xwoba:".379",xba:".275",xslg:".512",barrel:"15.3%",chase:"34.0%",whiff:"24.3%",kpct:"22.3%",bbpct:"10.0%", gbpct:"45.5%",fbpct:"24.4%",ldpct:"24.4%",pupct:"5.7%",pullAir:"12.6%"},
  { name:"Mauricio Dubón", ev:"86.3",hardHit:"30.9%",xwoba:".316",xba:".270",xslg:".394",barrel:"4.8%",chase:"37.4%",whiff:"16.4%",kpct:"14.2%",bbpct:"6.7%", gbpct:"41.9%",fbpct:"24.1%",ldpct:"25.8%",pupct:"8.2%",pullAir:"15.4%"},
  { name:"Jorge Mateo", ev:"90.2",hardHit:"47.1%",xwoba:".319",xba:".259",xslg:".432",barrel:"9.4%",chase:"41.7%",whiff:"30.6%",kpct:"30.6%",bbpct:"6.0%", gbpct:"38.8%",fbpct:"29.4%",ldpct:"28.2%",pupct:"3.5%",pullAir:"20.5%"},
  { name:"Austin Riley", ev:"90.3",hardHit:"41.8%",xwoba:".288",xba:".201",xslg:".361",barrel:"9.9%",chase:"32.4%",whiff:"32.6%",kpct:"29.4%",bbpct:"8.3%", gbpct:"37.9%",fbpct:"31.0%",ldpct:"21.6%",pupct:"9.5%",pullAir:"16.9%"},
  { name:"Ozzie Albies", ev:"87.2",hardHit:"27.6%",xwoba:".292",xba:".241",xslg:".368",barrel:"4.1%",chase:"36.4%",whiff:"20.3%",kpct:"13.4%",bbpct:"7.1%", gbpct:"35.4%",fbpct:"32.3%",ldpct:"25.2%",pupct:"7.1%",pullAir:"25.7%"},
  { name:"Mike Yastrzemski", ev:"90.3",hardHit:"43.5%",xwoba:".306",xba:".230",xslg:".353",barrel:"6.0%",chase:"26.5%",whiff:"23.5%",kpct:"23.2%",bbpct:"10.4%", gbpct:"40.5%",fbpct:"29.8%",ldpct:"23.8%",pupct:"6.0%",pullAir:"20.2%"},
  { name:"Ronald Acuña Jr.", ev:"90.1",hardHit:"43.8%",xwoba:".380",xba:".255",xslg:".494",barrel:"13.2%",chase:"25.0%",whiff:"28.8%",kpct:"21.9%",bbpct:"15.0%", gbpct:"40.3%",fbpct:"29.9%",ldpct:"20.8%",pupct:"9.0%",pullAir:"18.6%"},
  { name:"Eli White", ev:"87.0",hardHit:"32.6%",xwoba:".281",xba:".237",xslg:".338",barrel:"5.7%",chase:"28.6%",whiff:"27.9%",kpct:"21.6%",bbpct:"6.4%", gbpct:"55.1%",fbpct:"24.7%",ldpct:"18.0%",pupct:"2.2%",pullAir:"10.6%"},
  { name:"Ha-Seong Kim", ev:"85.2",hardHit:"21.6%",xwoba:".212",xba:".146",xslg:".203",barrel:"4.1%",chase:"24.4%",whiff:"21.1%",kpct:"26.8%",bbpct:"11.0%", gbpct:"43.1%",fbpct:"37.3%",ldpct:"9.8%",pupct:"9.8%",pullAir:"17.6%"},
  { name:"Sandy León", ev:"81.9",hardHit:"19.2%",xwoba:".132",xba:".135",xslg:".170",barrel:"0.0%",chase:"40.0%",whiff:"29.7%",kpct:"40.9%",bbpct:"0.0%", gbpct:"46.2%",fbpct:"15.4%",ldpct:"19.2%",pupct:"19.2%",pullAir:"30.8%"},
  { name:"Chadwick Tromp", ev:"88.4",hardHit:"30.0%",xwoba:".178",xba:".173",xslg:".243",barrel:"0.0%",chase:"50.0%",whiff:"25.9%",kpct:"25.9%",bbpct:"0.0%", gbpct:"45.0%",fbpct:"25.0%",ldpct:"25.0%",pupct:"5.0%",pullAir:"5.0%"},
  { name:"Sean Murphy", ev:"80.3",hardHit:"25.0%",xwoba:".133",xba:".140",xslg:".160",barrel:"0.0%",chase:"54.5%",whiff:"45.8%",kpct:"42.9%",bbpct:"0.0%", gbpct:"62.5%",fbpct:"25.0%",ldpct:"12.5%",pupct:"0.0%",pullAir:"0.0%"},
  { name:"Joey Bart", ev:"86.7",hardHit:"35.5%",xwoba:".289",xba:".208",xslg:".401",barrel:"9.7%",chase:"32.3%",whiff:"26.6%",kpct:"28.1%",bbpct:"3.1%", gbpct:"40.3%",fbpct:"37.1%",ldpct:"17.7%",pupct:"4.8%",pullAir:"22.7%"},
  { name:"Rowdy Tellez", ev:"91.8",hardHit:"42.9%",xwoba:".506",xba:".339",xslg:".828",barrel:"28.6%",chase:"29.6%",whiff:"30.4%",kpct:"27.3%",bbpct:"9.1%", gbpct:"14.3%",fbpct:"57.1%",ldpct:"28.6%",pupct:"0.0%",pullAir:"14.3%"},
  { name:"Jim Jarvis", ev:"85.5",hardHit:"29.2%",xwoba:".262",xba:".235",xslg:".340",barrel:"8.3%",chase:"33.8%",whiff:"15.9%",kpct:"21.9%",bbpct:"3.1%", gbpct:"50.0%",fbpct:"20.8%",ldpct:"20.8%",pupct:"8.3%",pullAir:"15.8%"},
];

export const statcastPitchers = [
  // Updated July 13, 2026 — EV, HH%, xwOBA, xBA, xSLG, Barrel%, K%, BB%, Chase%, Whiff%, GB%, FB%, LD%, PU% refreshed from Baseball Savant
  // pullAir held (separate leaderboard); Suarez, Strider, Pérez, Carrasco, Hamilton hidden — all fields held
  // Owen Murphy ADDED (new active starter, first appearance on leaderboard); Víctor Mederos refreshed; Danny Young now has real batted-ball data (previously placeholder)
  { name:"Raisel Iglesias", ev:"87.0",hardHit:"32.1%",xwoba:".254",xba:".216",xslg:".315",kpct:"28.3%",bbpct:"5.5%", barrel:"4.8%", chase:"39.5%",whiff:"30.3%",gbpct:"38.1%",fbpct:"26.2%",ldpct:"26.2%",pupct:"9.5%", pullAir:"20.7%"},
  { name:"Dylan Lee", ev:"86.7",hardHit:"28.1%",xwoba:".211",xba:".176",xslg:".252",kpct:"34.0%",bbpct:"4.5%", barrel:"4.2%", chase:"38.1%",whiff:"38.4%",gbpct:"33.3%",fbpct:"30.2%",ldpct:"26.0%",pupct:"10.4%", pullAir:"26.9%"},
  { name:"Robert Suarez", ev:"84.9",hardHit:"33.0%",xwoba:".282",xba:".252",xslg:".351",kpct:"21.5%",bbpct:"5.0%", barrel:"3.4%", chase:"38.8%",whiff:"24.0%",gbpct:"47.7%",fbpct:"23.9%",ldpct:"20.5%",pupct:"8.0%", pullAir:"13.6%"},
  { name:"Bryce Elder", ev:"90.0",hardHit:"39.8%",xwoba:".303",xba:".247",xslg:".385",kpct:"19.8%",bbpct:"7.4%", barrel:"5.4%", chase:"29.4%",whiff:"22.3%",gbpct:"43.0%",fbpct:"27.1%",ldpct:"23.6%",pupct:"6.4%", pullAir:"18.8%"},
  { name:"Chris Sale", ev:"87.2",hardHit:"32.5%",xwoba:".289",xba:".233",xslg:".348",kpct:"29.0%",bbpct:"6.2%", barrel:"6.0%", chase:"35.4%",whiff:"29.5%",gbpct:"45.2%",fbpct:"23.4%",ldpct:"25.8%",pupct:"5.6%", pullAir:"16.6%"},
  { name:"Spencer Strider", ev:"89.3",hardHit:"36.0%",xwoba:".276",xba:".178",xslg:".326",kpct:"27.9%",bbpct:"12.1%", barrel:"10.5%", chase:"28.8%",whiff:"31.1%",gbpct:"30.2%",fbpct:"38.4%",ldpct:"22.1%",pupct:"9.3%", pullAir:"27.6%"},
  { name:"Didier Fuentes", ev:"89.5",hardHit:"36.7%",xwoba:".275",xba:".225",xslg:".318",kpct:"28.2%",bbpct:"7.7%", barrel:"4.1%", chase:"30.2%",whiff:"26.6%",gbpct:"40.8%",fbpct:"24.5%",ldpct:"25.5%",pupct:"9.2%", pullAir:"9.7%"},
  { name:"Hurston Waldrep", ev:"89.3",hardHit:"34.3%",xwoba:".360",xba:".231",xslg:".389",kpct:"16.1%",bbpct:"17.9%", barrel:"8.6%", chase:"21.1%",whiff:"23.3%",gbpct:"71.4%",fbpct:"14.3%",ldpct:"5.7%",pupct:"8.6%", pullAir:"11.4%"},
  { name:"Tyler Kinley", ev:"84.3",hardHit:"25.0%",xwoba:".265",xba:".187",xslg:".329",kpct:"25.5%",bbpct:"9.5%", barrel:"5.7%", chase:"25.4%",whiff:"28.9%",gbpct:"31.8%",fbpct:"33.0%",ldpct:"22.7%",pupct:"12.5%", pullAir:"33.3%"},
  { name:"Martín Pérez", ev:"87.9",hardHit:"36.8%",xwoba:".323",xba:".253",xslg:".397",kpct:"19.5%",bbpct:"9.6%", barrel:"6.8%", chase:"26.2%",whiff:"22.3%",gbpct:"48.2%",fbpct:"22.3%",ldpct:"24.5%",pupct:"5.0%", pullAir:"22.4%"},
  { name:"Grant Holmes", ev:"90.7",hardHit:"43.4%",xwoba:".329",xba:".244",xslg:".416",kpct:"20.2%",bbpct:"10.4%", barrel:"8.9%", chase:"31.5%",whiff:"26.9%",gbpct:"41.9%",fbpct:"27.5%",ldpct:"24.4%",pupct:"6.2%", pullAir:"20.5%"},
  { name:"Reynaldo López", ev:"87.4",hardHit:"35.2%",xwoba:".327",xba:".252",xslg:".417",kpct:"20.8%",bbpct:"9.6%", barrel:"6.7%", chase:"26.9%",whiff:"21.6%",gbpct:"39.1%",fbpct:"26.3%",ldpct:"26.3%",pupct:"8.4%", pullAir:"21.6%"},
  { name:"JR Ritchie", ev:"89.4",hardHit:"37.7%",xwoba:".330",xba:".234",xslg:".382",kpct:"20.4%",bbpct:"13.9%", barrel:"7.2%", chase:"25.7%",whiff:"23.2%",gbpct:"45.7%",fbpct:"28.3%",ldpct:"21.0%",pupct:"5.1%", pullAir:"20.6%"},
  { name:"Dylan Dodd", ev:"90.0",hardHit:"40.6%",xwoba:".266",xba:".200",xslg:".335",kpct:"27.0%",bbpct:"9.0%", barrel:"7.8%", chase:"29.5%",whiff:"28.1%",gbpct:"29.7%",fbpct:"25.0%",ldpct:"25.0%",pupct:"20.3%", pullAir:"35.5%"},
  { name:"James Karinchak", ev:"88.4",hardHit:"33.3%",xwoba:".268",xba:".158",xslg:".299",kpct:"21.6%",bbpct:"13.5%", barrel:"8.3%", chase:"23.0%",whiff:"26.6%",gbpct:"29.2%",fbpct:"37.5%",ldpct:"16.7%",pupct:"16.7%", pullAir:"12.5%"},
  { name:"Carlos Carrasco", ev:"89.2",hardHit:"42.2%",xwoba:".358",xba:".325",xslg:".452",kpct:"11.1%",bbpct:"1.9%", barrel:"6.7%", chase:"43.6%",whiff:"17.2%",gbpct:"48.9%",fbpct:"11.1%",ldpct:"33.3%",pupct:"6.7%", pullAir:"26.2%"},
  { name:"Ian Hamilton", ev:"93.0",hardHit:"50.0%",xwoba:".342",xba:".307",xslg:".356",kpct:"17.4%",bbpct:"13.0%", barrel:"0.0%", chase:"30.0%",whiff:"28.6%",gbpct:"56.3%",fbpct:"12.5%",ldpct:"31.3%",pupct:"0.0%", pullAir:"12.5%"},
  { name:"Danny Young", ev:"96.6",hardHit:"70.0%",xwoba:".365",xba:".195",xslg:".512",kpct:"23.5%",bbpct:"17.6%", barrel:"30.0%", chase:"23.8%",whiff:"40.0%",gbpct:"50.0%",fbpct:"40.0%",ldpct:"10.0%",pupct:"0.0%", pullAir:"—"},
  { name:"Owen Murphy", ev:"93.7",hardHit:"77.8%",xwoba:".260",xba:".202",xslg:".328",kpct:"28.6%",bbpct:"0.0%", barrel:"11.1%", chase:"41.4%",whiff:"18.6%",gbpct:"22.2%",fbpct:"22.2%",ldpct:"55.6%",pupct:"0.0%", pullAir:"—"},
  { name:"Víctor Mederos", ev:"93.4",hardHit:"40.0%",xwoba:".212",xba:".157",xslg:".262",kpct:"31.3%",bbpct:"6.3%", barrel:"0.0%", chase:"35.1%",whiff:"36.1%",gbpct:"50.0%",fbpct:"30.0%",ldpct:"10.0%",pupct:"10.0%", pullAir:"—"},
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
     { week:"All-Star", "Olson":2.9,"Albies":1.8,"Baldwin":1.4,"Harris":2.6,"Dubón":2.1,"Acuña":0.9,"Smith":-0.2,"Mateo":0.7,"Riley":0.0,"White":0.4,"Yaz":0.2,"León":-0.5,"Kim":-1.1,"Tromp":-0.2,"Murphy":-0.2,"Bart":0.0,"Tellez":0.0,"Jarvis":-0.1 },
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
     { week:"All-Star", "Elder":1.5,"Sale":2.6,"D.Lee":1.5,"Iglesias":0.9,"Suarez":0.8,"Fuentes":1.0,"Pérez":0.6,"Holmes":0.0,"Kinley":0.0,"López":0.5,"Strider":0.1,"Ritchie":-0.1,"Dodd":0.3,"Karinchak":0.0,"Waldrep":-0.3,"Hamilton":0.0,"Young":0.0 },
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
